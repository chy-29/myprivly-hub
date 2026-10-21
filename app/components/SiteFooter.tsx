import Link from "next/link";
import { HUB_APPS } from "@/lib/apps";
import { getLocale } from "@/lib/i18n/server";
import { createT } from "@/lib/i18n/messages";
import BrandMark from "./BrandMark";

export default async function SiteFooter() {
  const t = createT(await getLocale());
  const link = "text-subhead text-ink-2 underline-offset-4 hover:text-ink hover:underline";
  return (
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
                <a href={app.href!} translate="no" className={link}>
                  {app.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/pricing" className={link}>
                {t("nav.pricing")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
