/**
 * Appends UTM parameters to an outbound URL so Eventbrite/Facebook
 * traffic from this site is attributable in analytics, without
 * clobbering any params the URL already has.
 */
export function withUtm(
  url: string,
  { source, medium = "referral", campaign = "hhatl_site" }: { source: string; medium?: string; campaign?: string }
): string {
  try {
    const u = new URL(url);
    if (!u.searchParams.has("utm_source")) u.searchParams.set("utm_source", source);
    if (!u.searchParams.has("utm_medium")) u.searchParams.set("utm_medium", medium);
    if (!u.searchParams.has("utm_campaign")) u.searchParams.set("utm_campaign", campaign);
    return u.toString();
  } catch {
    // Relative URL, mailto:, or otherwise not a full URL — nothing to tag.
    return url;
  }
}
