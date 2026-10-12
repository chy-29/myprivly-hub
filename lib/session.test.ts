import { describe, expect, it } from "vitest";
import { looksSignedIn } from "./session";

describe("looksSignedIn", () => {
  it("sees the shared Supabase session cookie, whole or in chunks", () => {
    expect(looksSignedIn(["locale", "sb-abcd-auth-token"])).toBe(true);
    expect(looksSignedIn(["sb-abcd-auth-token.0", "sb-abcd-auth-token.1"])).toBe(true);
  });

  it("ignores everything else, including the PKCE sign-in helper", () => {
    expect(looksSignedIn([])).toBe(false);
    expect(looksSignedIn(["locale", "mp_theme", "sb-abcd-auth-token-code-verifier"])).toBe(false);
  });
});
