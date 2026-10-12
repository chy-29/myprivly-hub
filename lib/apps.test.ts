import { describe, expect, it } from "vitest";
import { HUB_APPS } from "./apps";

describe("HUB_APPS", () => {
  it("lists every registry app, and Money is not linked until it is live", () => {
    expect(HUB_APPS.map((a) => a.id)).toEqual(expect.arrayContaining(["family", "money"]));
    expect(HUB_APPS.find((a) => a.id === "family")?.href).toBe("https://family.myprivly.com");
    expect(HUB_APPS.find((a) => a.id === "money")?.href).toBeNull();
  });
});
