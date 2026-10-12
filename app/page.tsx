import { ArrowDown, CalendarDays, Languages, LayoutGrid, Lock, Plus, Users, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HUB_APPS } from "@/lib/apps";
import { cookies } from "next/headers";
import { getLocale } from "@/lib/i18n/server";
import { looksSignedIn } from "@/lib/session";
import { createT } from "@/lib/i18n/messages";
import BrandMark from "./components/BrandMark";
import LanguageSwitch from "./components/LanguageSwitch";

const APP_ICONS: Record<string, LucideIcon> = { family: CalendarDays, money: Wallet };

export default async function HubPage() {
  const locale = await getLocale();
  const t = createT(locale);
  const signedIn = looksSignedIn((await cookies()).getAll().map((c) => c.name));
  // Family is the app with the sign-in page today; it signs people in for every MyPrivly app.
  const family = HUB_APPS.find((app) => app.id === "family");

  const principles: { Icon: LucideIcon; title: string; body: string }[] = [
    { Icon: Users, title: t("why.p1.title"), body: t("why.p1.body") },
    { Icon: Lock, title: t("why.p2.title"), body: t("why.p2.body") },
    { Icon: Languages, title: t("why.p3.title"), body: t("why.p3.body") },
  ];

  return (
    <>
      <a href="#content" className="skip-link">
        {t("skip")}
      </a>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pt-6">
        <div className="flex items-center gap-2.5">
          <BrandMark size={32} />
          {/* On very narrow screens the name steps aside for the buttons (the footer repeats it). */}
          <span translate="no" className="sr-only text-headline min-[480px]:not-sr-only">
            MyPrivly
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {family?.href && (
            <a
              href={family.href}
              className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full px-3 text-subhead font-semibold text-accent-ink transition hover:bg-accent-soft"
            >
              {signedIn ? t("nav.openFamily") : t("nav.signIn")}
            </a>
          )}
          <LanguageSwitch current={locale} label={t("lang.label")} />
        </div>
      </header>

      <main id="content">
        {/* ---- hero */}
        <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-14 text-center sm:pt-20">
          {/* The mark sits in a soft violet glow that fades into the page. */}
          <div className="bg-[radial-gradient(closest-side,rgba(109,74,255,0.28)_0%,rgba(150,60,255,0.1)_55%,rgba(109,74,255,0)_100%)] px-16 py-12">
            <BrandMark size={128} className="drop-shadow-[0_8px_28px_rgba(109,74,255,0.35)]" />
          </div>
          <h1 className="mt-4 text-[clamp(2.1rem,7vw,3.75rem)] font-bold leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-body text-ink-2">{t("hero.body")}</p>
          <a
            href="#apps"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 text-body font-semibold text-on-accent transition hover:bg-accent-press"
          >
            {t("hero.cta")}
            <ArrowDown size={18} strokeWidth={2} aria-hidden />
          </a>
        </section>

        {/* ---- apps */}
        <section id="apps" aria-labelledby="apps-heading" className="scroll-mt-6 bg-surface-2 px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 id="apps-heading" className="text-title">
              {t("apps.heading")}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HUB_APPS.map((app) => {
                const Icon = APP_ICONS[app.id] ?? LayoutGrid;
                return (
                  <li
                    key={app.id}
                    className="relative flex flex-col gap-4 rounded-card border border-line bg-surface p-6 shadow-card transition hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
                      <Icon size={24} strokeWidth={1.7} aria-hidden />
                    </span>
                    <div>
                      <h3 translate="no" className="text-title2">
                        {app.name}
                      </h3>
                      <p className="mt-1 text-subhead text-ink-2">{app.tagline[locale]}</p>
                    </div>
                    {app.href ? (
                      <a
                        href={app.href}
                        className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-line px-5 text-subhead font-semibold text-accent-ink transition hover:bg-accent-soft after:absolute after:inset-0 after:rounded-card"
                      >
                        {t("apps.open", { name: app.name })}
                      </a>
                    ) : (
                      <span className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full bg-surface-2 px-5 text-subhead font-semibold text-ink-2">
                        {t("apps.soon")}
                      </span>
                    )}
                  </li>
                );
              })}
              <li className="flex flex-col gap-4 rounded-card border border-dashed border-line p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-ink-3">
                  <Plus size={24} strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <h3 className="text-title2">{t("apps.moreTitle")}</h3>
                  <p className="mt-1 text-subhead text-ink-2">{t("apps.moreBody")}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ---- why */}
        <section aria-labelledby="why-heading" className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 id="why-heading" className="text-title">
              {t("why.heading")}
            </h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-3">
              {principles.map(({ Icon, title, body }) => (
                <li key={title} className="flex flex-col gap-3">
                  <Icon size={26} strokeWidth={1.6} className="text-accent" aria-hidden />
                  <h3 className="text-headline">{title}</h3>
                  <p className="text-subhead text-ink-2">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <BrandMark size={24} />
            <span translate="no" className="text-subhead font-semibold">
              MyPrivly
            </span>
            <span className="text-subhead text-ink-2">{t("footer.tagline")}</span>
          </div>
          <nav aria-label={t("apps.heading")}>
            <ul className="flex gap-5">
              {HUB_APPS.filter((app) => app.href).map((app) => (
                <li key={app.id}>
                  <a href={app.href!} translate="no" className="text-subhead text-ink-2 underline-offset-4 hover:text-ink hover:underline">
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
