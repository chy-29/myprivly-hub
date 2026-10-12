import { APPS, type App } from "@myprivly/brand/apps";

/**
 * Where each app is reachable *today*. Money is still served from app.myprivly.com until it moves
 * to money.myprivly.com (see the plan, phase 4); delete the override then.
 */
const LIVE_URL: Record<string, string> = {
  money: "https://app.myprivly.com",
};

export type HubApp = App & { href: string };

export const HUB_APPS: HubApp[] = APPS.map((app) => ({ ...app, href: LIVE_URL[app.id] ?? app.url }));
