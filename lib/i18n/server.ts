import { headers } from "next/headers";
import { localeFromAcceptLanguage, type Locale } from "./locales";
import { createT } from "./messages";

/** The visitor's language: whatever their browser or device prefers (English if we don't speak it). */
export async function getLocale(): Promise<Locale> {
  return localeFromAcceptLanguage((await headers()).get("accept-language"));
}

/** A translator for the current visitor, for server components. */
export async function getT() {
  return createT(await getLocale());
}
