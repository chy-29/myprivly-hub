import { APPS, type App } from "@myprivly/brand/apps";

/**
 * Where each app is reachable *today*; `null` means not open yet, so the hub shows "Coming soon"
 * instead of a link. Apps not listed here use the address in @myprivly/brand. Add an entry with
 * `null` when listing a new app before it is live.
 */
const LIVE_URL: Record<string, string | null> = {};

export type HubApp = App & { href: string | null };

export const HUB_APPS: HubApp[] = APPS.map((app) => ({
  ...app,
  href: app.id in LIVE_URL ? LIVE_URL[app.id] : app.url,
}));

/**
 * While Family and Money are still in development, the hub is the only public page. Visitors see
 * "Coming soon" cards; only people who already have a sign-in (the shared cookie) see links into the
 * apps. The real gate is on the server (invite-only sign-up in Supabase); this just keeps the front
 * door honest. Set to true on launch day.
 */
export const APPS_PUBLIC = false;

/** Whether to show links into the apps to this visitor. */
export const appsOpenFor = (signedIn: boolean) => APPS_PUBLIC || signedIn;
