import type { Metadata } from "next";
import { Check, HeartHandshake, KeyRound, ShieldOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { APPS_PUBLIC, HUB_APPS } from "@/lib/apps";
import { getLocale } from "@/lib/i18n/server";
import { createT, type MessageKey } from "@/lib/i18n/messages";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import Reveal from "../components/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  const t = createT(await getLocale());
  return { title: `${t("nav.pricing")} · MyPrivly`, description: t("pricing.lead") };
}

const FREE: MessageKey[] = ["pricing.free.f1", "pricing.free.f2", "pricing.free.f3", "pricing.free.f4", "pricing.free.f5", "pricing.free.f6", "pricing.free.f7"];
const PLUS: MessageKey[] = ["pricing.plus.p1", "pricing.plus.p2", "pricing.plus.p3", "pricing.plus.p4", "pricing.plus.p5", "pricing.plus.p6"];
const FAQ: [MessageKey, MessageKey][] = [
  ["pricing.q1", "pricing.a1"],
  ["pricing.q2", "pricing.a2"],
  ["pricing.q3", "pricing.a3"],
  ["pricing.q4", "pricing.a4"],
];

function Features({ keys, t }: { keys: MessageKey[]; t: ReturnType<typeof createT> }) {
  return (
    <ul className="mt-5 flex flex-col gap-3">
      {keys.map((k) => (
        <li key={k} className="flex items-start gap-3 text-subhead text-ink">
          <span className="neon-tile mt-0.5 !h-6 !w-6 flex-none !rounded-full">
            <Check size={14} strokeWidth={2.6} aria-hidden />
          </span>
          <span>{t(k)}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PricingPage() {
  const t = createT(await getLocale());
  const family = HUB_APPS.find((app) => app.id === "family");

  const promises: { Icon: LucideIcon; title: MessageKey; body: MessageKey }[] = [
    { Icon: KeyRound, title: "pricing.pr1.title", body: "pricing.pr1.body" },
    { Icon: ShieldOff, title: "pricing.pr2.title", body: "pricing.pr2.body" },
    { Icon: HeartHandshake, title: "pricing.pr3.title", body: "pricing.pr3.body" },
  ];

  return (
    <>
      <SiteHeader />
      <main id="content">
        <section className="mx-auto max-w-3xl px-6 pb-10 pt-14 text-center sm:pt-20">
          <h1 className="headline-neon mp-enter text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.05]">{t("pricing.title")}</h1>
          <p className="mp-enter mt-5 text-body text-ink-2" style={{ animationDelay: "80ms" }}>
            {t("pricing.lead")}
          </p>
        </section>

        <section aria-label={t("nav.pricing")} className="px-6 pb-16">
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {/* ---- Free */}
            <div className="mp-glass mp-edge flex flex-col p-7">
              <h2 className="text-title2">{t("pricing.free.name")}</h2>
              <p className="mt-3 text-[2.5rem] font-bold leading-none tracking-tight">{t("pricing.free.price")}</p>
              <p className="mt-2 text-subhead text-ink-2">{t("pricing.free.note")}</p>
              <Features keys={FREE} t={t} />
              {family?.href && APPS_PUBLIC ? (
                <a href={family.href} className="mp-glow-btn mt-8 min-h-12 w-full">
                  {t("pricing.free.cta")}
                </a>
              ) : (
                <p className="mt-8 rounded-2xl bg-surface-2 px-4 py-3 text-footnote text-ink-2">{t("pricing.free.soon")}</p>
              )}
            </div>

            {/* ---- Plus */}
            <div className="mp-glass mp-edge relative flex flex-col p-7">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-title2">{t("pricing.plus.name")}</h2>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-footnote font-semibold text-accent-ink">
                  {t("pricing.plus.badge")}
                </span>
              </div>
              <p className="mt-3 text-[2.5rem] font-bold leading-none tracking-tight">
                {t("pricing.plus.price")}
                <span className="ml-1 text-subhead font-medium text-ink-2">{t("pricing.plus.per")}</span>
              </p>
              <p className="mt-2 text-subhead text-ink-2">{t("pricing.plus.note")}</p>
              <p className="mt-5 text-subhead font-semibold">{t("pricing.plus.intro")}</p>
              <Features keys={PLUS} t={t} />
              <p className="mt-8 rounded-2xl bg-surface-2 px-4 py-3 text-footnote text-ink-2">{t("pricing.plus.soon")}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="promises-heading" className="px-6 pb-16">
          <div className="mx-auto max-w-5xl">
            <h2 id="promises-heading" className="text-title">
              {t("pricing.promises")}
            </h2>
            <Reveal>
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {promises.map(({ Icon, title, body }) => (
                  <li key={title} className="mp-glass mp-edge flex flex-col gap-3 p-6">
                    <span className="neon-tile">
                      <Icon size={22} strokeWidth={1.8} aria-hidden />
                    </span>
                    <h3 className="text-headline">{t(title)}</h3>
                    <p className="text-subhead text-ink-2">{t(body)}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <h2 id="faq-heading" className="text-title">
              {t("pricing.faq")}
            </h2>
            <dl className="mt-6 flex flex-col gap-6">
              {FAQ.map(([q, a]) => (
                <div key={q}>
                  <dt className="text-headline">{t(q)}</dt>
                  <dd className="mt-1 text-subhead text-ink-2">{t(a)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
