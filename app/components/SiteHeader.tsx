import Link from "next/link";
import { cookies } from "next/headers";
import { APPS_PUBLIC, HUB_APPS } from "@/lib/apps";
import { getLocale } from "@/lib/i18n/server";
import { createT } from "@/lib/i18n/messages";
import { looksSignedIn } from "@/lib/session";
import BrandMark from "./BrandMark";

/** The frosted top bar shared by every page: logo, Pricing, and either Log in or Open Family. */
export default async function SiteHeader() {
  const t = createT(await getLocale());
  const signedIn = looksSignedIn((await cookies()).getAll().map((c) => c.name));
  // Family is the app with the sign-in page today; it signs people in for every MyPrivly app.
  const family = HUB_APPS.find((app) => app.id === "family");

  return (
    <>
      <a href="#content" className="skip-link">
        {t("skip")}
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-(--bar-bg) backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5 rounded-control" aria-label="MyPrivly">
            <BrandMark size={32} />
            {/* On very narrow screens the name steps aside for the buttons (the footer repeats it). */}
            <span translate="no" className="sr-only text-headline min-[480px]:not-sr-only">
              MyPrivly
            </span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              href="/pricing"
              className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full px-3 text-subhead font-semibold text-ink-2 transition hover:bg-accent-soft hover:text-accent-ink"
            >
              {t("nav.pricing")}
            </Link>
            {family?.href &&
              (signedIn || APPS_PUBLIC) &&
              (signedIn ? (
                <a
                  href={family.href}
                  className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full px-3 text-subhead font-semibold text-accent-ink transition hover:bg-accent-soft"
                >
                  {t("nav.openFamily")}
                </a>
              ) : (
                <a href={family.href} className="mp-glow-btn min-h-10 whitespace-nowrap px-4 text-subhead sm:px-5">
                  <span className="hidden min-[440px]:inline">{t("nav.login")}</span>
                  <span className="min-[440px]:hidden">{t("nav.loginShort")}</span>
                </a>
              ))}
          </div>
        </div>
      </header>
    </>
  );
}
