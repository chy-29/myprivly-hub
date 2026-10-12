"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/locale";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n/locales";

/** Two small buttons that save the visitor's language and reload the page text. */
export default function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function choose(locale: Locale) {
    if (locale === current) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div
      role="group"
      aria-label={label}
      aria-busy={pending}
      className="inline-flex rounded-full border border-line bg-surface p-1"
    >
      {LOCALES.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          aria-pressed={locale === current}
          onClick={() => choose(locale)}
          className={`min-h-9 rounded-full px-3.5 text-subhead font-medium transition ${
            locale === current ? "bg-accent text-on-accent" : "text-ink-2 hover:text-ink"
          }`}
        >
          {LOCALE_NAMES[locale]}
        </button>
      ))}
    </div>
  );
}
