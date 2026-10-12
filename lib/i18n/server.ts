import { cookies, headers } from "next/headers";
import { isLocale, LOCALE_COOKIE, localeFromAcceptLanguage, type Locale } from "./locales";
import { createT } from "./messages";

/** The visitor's language: their saved choice, else what their browser prefers. */
export async function getLocale(): Promise<Locale> {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  return localeFromAcceptLanguage((await headers()).get("accept-language"));
}

/** A translator for the current visitor, for server components. */
export async function getT() {
  return createT(await getLocale());
}
