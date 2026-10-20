type Copy = {
  label: string;
  sample: string;
  moneyTitle: string;
  moneyChange: string;
  familyTitle: string;
  events: [string, string, string];
};

// Sample sparkline: a gentle climb with two dips, in a 240 x 72 box.
const POINTS: [number, number][] = [
  [0, 58], [24, 50], [48, 54], [72, 40], [96, 44], [120, 30], [144, 36], [168, 22], [192, 26], [216, 12], [240, 8],
];
const LINE = POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
const AREA = `${LINE} L240,72 L0,72 Z`;

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * Two floating glass cards that hint at what is inside the apps. Illustration only, with sample
 * data: hidden from assistive technology, and labelled "Sample" so nobody reads it as real numbers.
 */
export default function HeroPreview({ t }: { t: Copy }) {
  const events = [
    { label: t.events[0], color: "var(--accent)", day: "Fri" },
    { label: t.events[1], color: "var(--accent-2)", day: "Sat" },
    { label: t.events[2], color: "var(--success)", day: "Mon" },
  ];
  return (
    <div className="preview-stack mp-enter" style={{ animationDelay: "320ms" }} aria-hidden="true" data-label={t.label}>
      {/* ---- Money */}
      <div className="preview-card preview-money mp-glass mp-edge">
        <div className="flex items-center justify-between">
          <span className="text-subhead text-ink-2">{t.moneyTitle}</span>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-footnote font-semibold text-accent-ink">{t.sample}</span>
        </div>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="text-[2.25rem] font-bold leading-none tracking-tight text-ink">$35.4K</span>
          <span className="text-footnote font-semibold text-success">{t.moneyChange}</span>
        </div>
        <svg viewBox="0 0 240 72" className="mt-4 h-24 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spark-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <path d={AREA} fill="url(#spark-fill)" />
          <path
            className="spark-line"
            d={LINE}
            pathLength={1}
            fill="none"
            stroke="url(#spark-stroke)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ---- Family */}
      <div className="preview-card preview-family mp-glass mp-edge">
        <div className="flex items-center justify-between">
          <span className="text-subhead text-ink-2">{t.familyTitle}</span>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-footnote font-semibold text-accent-ink">{t.sample}</span>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-footnote text-ink-3">
          {DAYS.map((d, i) => (
            <span key={i} className={i === 4 ? "rounded-lg bg-accent py-1 font-bold text-on-accent" : "py-1"}>
              {d}
            </span>
          ))}
        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {events.map((e) => (
            <li key={e.label} className="flex items-center gap-3 rounded-xl bg-surface-2 px-3 py-2 text-subhead text-ink">
              <span className="h-6 w-1 flex-none rounded-full" style={{ background: e.color }} />
              <span className="truncate">{e.label}</span>
              <span className="ml-auto flex-none text-footnote text-ink-3">{e.day}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
