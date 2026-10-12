import { describe, expect, it } from "vitest";
import { localeFromAcceptLanguage } from "./locales";
import { createT } from "./messages";

describe("localeFromAcceptLanguage", () => {
  it("picks the first supported language by preference", () => {
    expect(localeFromAcceptLanguage("es-MX,es;q=0.9,en;q=0.8")).toBe("es");
    expect(localeFromAcceptLanguage("fr,en;q=0.5")).toBe("en");
    expect(localeFromAcceptLanguage("en;q=0.4,es;q=0.9")).toBe("es");
  });

  it("falls back to English", () => {
    expect(localeFromAcceptLanguage(null)).toBe("en");
    expect(localeFromAcceptLanguage("fr,de")).toBe("en");
  });
});

describe("createT", () => {
  it("fills {name} placeholders in both languages", () => {
    expect(createT("en")("apps.open", { name: "Family" })).toBe("Open Family");
    expect(createT("es")("apps.open", { name: "Family" })).toBe("Abrir Family");
  });
});
