import { useId } from "react";
import { MARK_HEIGHT, MARK_PATH, MARK_VIEWBOX, MARK_WIDTH } from "@/lib/brandMark";

/**
 * The MyPrivly mark: a violet hexagon with a P. Decorative; the app's name is always
 * next to it. `size` is the height in pixels (the mark is a little taller than wide).
 */
export default function BrandMark({ className, size = 40 }: { className?: string; size?: number }) {
  const gradient = useId();
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox={MARK_VIEWBOX}
      width={(size * MARK_WIDTH) / MARK_HEIGHT}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id={gradient} gradientUnits="userSpaceOnUse" x1="302" y1="418" x2="955" y2="1008">
          <stop offset="0" stopColor="#5b4bff" />
          <stop offset="1" stopColor="#9b3dff" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradient})`} fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}
