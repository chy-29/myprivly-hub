import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { themeInitScript } from "@myprivly/brand/prefs";
import { getT, getLocale } from "@/lib/i18n/server";
import "./globals.css";

// "latin" covers Spanish accents. Self-hosted at build time, so no request to Google.
const sans = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return {
    title: t("site.title"),
    applicationName: t("site.title"),
    description: t("site.description"),
    metadataBase: new URL("https://myprivly.com"),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070616" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  return (
    // suppressHydrationWarning: the script below may set data-theme before React loads.
    <html lang={locale} className={`${sans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Applies a saved Light/Dark choice (shared across MyPrivly apps) before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
