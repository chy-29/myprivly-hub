import { describe, expect, it } from "vitest";
import { APPS_PUBLIC, HUB_APPS, appsOpenFor } from "./apps";

describe("HUB_APPS", () => {
  it("lists every registry app with a live link", () => {
    expect(HUB_APPS.map((a) => a.id)).toEqual(expect.arrayContaining(["family", "money"]));
    expect(HUB_APPS.find((a) => a.id === "family")?.href).toBe("https://family.myprivly.com");
    expect(HUB_APPS.find((a) => a.id === "money")?.href).toBe("https://money.myprivly.com");
  });
});

describe("appsOpenFor", () => {
  it("shows links to people who are already signed in", () => {
    expect(appsOpenFor(true)).toBe(true);
  });

  it("keeps the apps closed to the public until launch", () => {
    // Flip APPS_PUBLIC to true on launch day, and update this expectation with it.
    expect(APPS_PUBLIC).toBe(false);
    expect(appsOpenFor(false)).toBe(false);
  });
});
