import { ArrowDown, CalendarDays, Languages, LayoutGrid, Lock, Plus, Users, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HUB_APPS } from "@/lib/apps";
import { cookies } from "next/headers";
import { getLocale } from "@/lib/i18n/server";
import { looksSignedIn } from "@/lib/session";
import { createT } from "@/lib/i18n/messages";
import BrandMark from "./components/BrandMark";
import HeroPreview from "./components/HeroPreview";
import Reveal from "./components/Reveal";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const APP_ICONS: Record<string, LucideIcon> = { family: CalendarDays, money: Wallet };

export default async function HubPage() {
  const locale = await getLocale();
  const t = createT(locale);
  const signedIn = looksSignedIn((await cookies()).getAll().map((c) => c.name));

  const principles: { Icon: LucideIcon; title: string; body: string }[] = [
    { Icon: Users, title: t("why.p1.title"), body: t("why.p1.body") },
    { Icon: Lock, title: t("why.p2.title"), body: t("why.p2.body") },
    { Icon: Languages, title: t("why.p3.title"), body: t("why.p3.body") },
  ];

  return (
    <>
      <SiteHeader />

      <main id="content">
        {/* ---- hero */}
        <section className="hero-grid relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-14 text-center sm:pt-20">
          {/* The mark floats in a violet-and-blue glow that fades into the page: the one bold moment. */}
          <div className="hero-glow mp-enter px-16 py-12">
            <BrandMark size={128} className="drop-shadow-[0_8px_32px_var(--nav-glow)]" />
          </div>
          <h1 className="headline-neon mp-enter mt-4 max-w-3xl text-[clamp(2.4rem,8vw,4.5rem)] font-bold leading-[1.03]" style={{ animationDelay: "80ms" }}>
            {t("hero.title")}
          </h1>
          <p className="mp-enter mt-5 max-w-xl text-body text-ink-2" style={{ animationDelay: "140ms" }}>
            {t("hero.body")}
          </p>
          <a href="#apps" className="mp-glow-btn mp-enter mt-8 min-h-12 px-8 text-body" style={{ animationDelay: "200ms" }}>
            {t("hero.cta")}
            <ArrowDown size={18} strokeWidth={2} aria-hidden />
          </a>
          <HeroPreview
            t={{
              label: t("preview.label"),
              sample: t("preview.sample"),
              moneyTitle: t("preview.money.title"),
              moneyChange: t("preview.money.change"),
              familyTitle: t("preview.family.title"),
              events: [t("preview.family.e1"), t("preview.family.e2"), t("preview.family.e3")],
            }}
          />
        </section>

        {/* ---- apps */}
        <section id="apps" aria-labelledby="apps-heading" className="scroll-mt-20 px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 id="apps-heading" className="text-title">
              {t("apps.heading")}
            </h2>
            <Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HUB_APPS.map((app) => {
                const Icon = APP_ICONS[app.id] ?? LayoutGrid;
                return (
                  <li
                    key={app.id}
                    className="app-card mp-glass mp-edge relative flex flex-col gap-4 p-6"
                  >
                    <span className="neon-tile neon-tile-lg">
                      <Icon size={24} strokeWidth={1.8} aria-hidden />
                    </span>
                    <div>
                      <h3 translate="no" className="text-title2">
                        {app.name}
                      </h3>
                      <p className="mt-1 text-subhead text-ink-2">{app.tagline[locale]}</p>
                    </div>
                    {app.href ? (
                      signedIn && (
                        <a
                          href={app.href}
                          className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-line px-5 text-subhead font-semibold text-accent-ink transition hover:bg-accent-soft after:absolute after:inset-0 after:rounded-card"
                        >
                          {t("apps.open", { name: app.name })}
                        </a>
                      )
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
            </Reveal>
          </div>
        </section>

        {/* ---- why */}
        <section aria-labelledby="why-heading" className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 id="why-heading" className="text-title">
              {t("why.heading")}
            </h2>
            <Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {principles.map(({ Icon, title, body }) => (
                <li key={title} className="mp-glass mp-edge flex flex-col gap-3 p-6">
                  <span className="neon-tile">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="text-headline">{title}</h3>
                  <p className="text-subhead text-ink-2">{body}</p>
                </li>
              ))}
            </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
