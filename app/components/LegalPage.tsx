import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/**
 * Shared frame for the legal pages: header, a clear "draft" notice, the title, and the text.
 * Legal wording is English only until a lawyer has reviewed it, so the article is marked lang="en".
 */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="content" className="px-6 pb-24 pt-12 sm:pt-16">
        <article lang="en" className="legal mx-auto max-w-3xl">
          <p role="note" className="rounded-2xl border border-line bg-surface-2 px-4 py-3 text-subhead text-ink-2">
            <strong className="text-ink">Draft, not in effect.</strong> This text was prepared for review by a lawyer and is not
            yet our policy. Items in <span className="ph">[BRACKETS]</span> still need an answer. Spanish will follow once the English is final.
          </p>
          <h1 className="headline-neon mt-8 text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05]">{title}</h1>
          <p className="mt-3 text-subhead text-ink-3">Draft version 0.1 · {updated}</p>
          <div className="mt-8">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

/** A placeholder that still needs a real answer; shown highlighted so it cannot be missed. */
export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">[{children}]</span>;
}
