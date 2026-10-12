/**
 * Whether the visitor looks signed in to a MyPrivly app. Sign-in is shared across subdomains through
 * a Supabase cookie on .myprivly.com (see @myprivly/brand/auth), so the hub can see it. This only
 * checks that the cookie exists, to choose a button label; it grants nothing and is not verified.
 */
export function looksSignedIn(cookieNames: string[]): boolean {
  return cookieNames.some((name) => /^sb-.+-auth-token(\.\d+)?$/.test(name));
}
