/**
 * Single source of truth for values that change over time or are still
 * pending from Caitlyn. Update here — do not hardcode these elsewhere.
 *
 * Anything read from `process.env` needs to be set in Vercel project
 * settings (and locally in `.env.local`). See `.env.example`.
 */

export const siteConfig = {
  name: "House Hacking Atlanta",
  // The site resolves at www — non-www redirects to this (see
  // next.config.mjs). Every canonical/og:url/sitemap URL is built from
  // this value, so it's the single place to change if that ever flips.
  domain: "www.househackingatl.com",
  tagline: "Live for less. Build more wealth. Every door is an opportunity.",
  missionLine: "live for less, build more wealth",
  doorMotif: "Every door is an opportunity. 🚪",
  shortBlurb:
    "House hacking in the Atlanta metro — living in one part of your property and renting out another. Real numbers, real deals, real support. Live for less. Build more wealth. Every door is an opportunity.",
};

/**
 * Author box shown on every article — the trust signal for a stranger
 * arriving from search who's never seen this site before.
 */
export const author = {
  name: "Caitlyn Verdugo",
  bio: "Atlanta REALTOR®, investor, and serial house hacker.",
  credential: "REALTOR®, Keller Williams Metro Atlanta",
  photo: "/images/caitlyn-headshot.jpg",
  email: "cv.sellshomes@gmail.com",
  // Longer version for /about. Deliberately free of specific numbers
  // (properties owned, years active, dollar figures) since none have been
  // confirmed — swap in real specifics whenever Caitlyn wants to add them.
  fullBio: [
    "I bought my first house hack because the math made too much sense to ignore — live in part of the property, rent out the rest, and let someone else cover most of my mortgage. It worked. So I did it again. That's the whole idea behind this site: the same math, laid out plainly, for anyone willing to run the numbers before they buy.",
    "I'm a licensed REALTOR® with Keller Williams Metro Atlanta, and house hacking isn't a side note to my business — it's the center of it. I work with buyers who are looking at a property specifically because of what it could rent for, not just what it looks like on a Sunday tour, and I built the monthly meetup and this whole library of articles because there wasn't a single place in Atlanta covering the real mechanics: financing, running the numbers, and the day-to-day of actually sharing a home with a tenant.",
    "If you're past the first house hack and thinking about what a more intentional shared-living setup could look like, that's ColivingCait — a different brand, a more advanced model, for when you're ready for it. Most people start here, though: one property, one extra bedroom or unit, and the question of whether the numbers actually work. That's exactly what I help people figure out.",
  ],
};

export const meetup = {
  // Recurring cadence — shown as plain text, not derived from a date library,
  // so it reads correctly regardless of the current month.
  cadenceLabel: "Second Tuesday of every month",
  // Single source of truth for the venue — used on the meetups page, Event
  // schema, and Eventbrite listings. This is a public commercial venue, not
  // one of Caitlyn's properties, so the full street address rule (privacy —
  // see CLAUDE.md) doesn't apply here; unlike her own listings, people need
  // to be able to find this address.
  venue: {
    name: "New Realm Brewing",
    confirmed: true,
    street: "550 Sommerset Terrace NE, Suite 101",
    city: "Atlanta",
    state: "GA",
    // NEEDS CAITLYN: ZIP code — optional for the schema/display address
    // below, but nice to have for a fully-specified PostalAddress.
    address: "550 Sommerset Terrace NE, Suite 101, Atlanta, GA",
  },
  schedule: [
    { label: "Doors & food ordering", time: "6:30 – 7:00 PM" },
    { label: "Host intro & speaker", time: "7:00 – 7:30 PM" },
    { label: "Q&A", time: "7:30 – 7:45 PM" },
    { label: "Open networking", time: "7:45 – 9:00 PM" },
  ],
  sizeLabel: "~20–30 people",
  // House Hacking Atlanta collection — groups all the recurring meetup
  // events. Individual events can still override with their own
  // `eventbriteUrl` in src/data/meetups.ts.
  eventbriteOrganizerUrl: "https://www.eventbrite.com/cc/house-hacking-atl-4861227",
};

export const womensGroup = {
  name: "Atlanta Women Investors",
  cadenceLabel: "Fourth Tuesday of every month",
  // NEEDS CAITLYN: exact URL.
  url: "",
};

/**
 * External links. Empty string = not yet provided by Caitlyn.
 * Components should render a graceful "coming soon" state rather than
 * a broken or dead link when a URL is empty.
 */
export const links = {
  colivingCait: "https://colivingcait.com",
  atlantaWomenInvestors: "",
  roomsForRentAtl: "",
  facebookGroup: "https://facebook.com/groups/househackingatl",
  // Base scheduling link — the month/back params on the URL you sent are
  // just view-state from whatever month you were looking at when you
  // copied it, not part of the permanent link, so they're dropped here.
  calendly: "https://calendly.com/colivingcait/buyer-or-seller-discovery-call",
};

/**
 * Caitlyn's custom CRM. All three signup forms (listing alerts, newsletter,
 * resource downloads) POST straight to this one webhook — no per-form ID,
 * unlike the old Kit setup. Each submission includes a `source` field
 * ("listing_alerts" | "newsletter" | "gated_download") so the CRM can tell
 * them apart. Full cutover from Kit — not dual-writing.
 */
export const crm = {
  webhookUrl: "https://crm.callcaitlyn.com/api/webhooks/house-hacking-site",
};

/**
 * Meta (Facebook) Pixel. Only loads if an ID is set — safe to leave unset
 * in every environment except production once Caitlyn confirms the ID.
 */
export const metaPixel = {
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

/**
 * Google Analytics (GA4). Only loads if a Measurement ID is set — get one
 * from Google Analytics → Admin → Data Streams → (web stream) → Measurement
 * ID (looks like "G-XXXXXXXXXX").
 */
export const googleAnalytics = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
};

/**
 * Sponsor inquiry submissions. No form backend is wired up yet (no email
 * provider confirmed), so the sponsor inquiry form falls back to a mailto:
 * link pre-filled with the submission. Swap in a real form handler
 * (Resend, Formspree, a Kit tag call, etc.) later without changing the UI.
 */
export const sponsorInquiry = {
  // NEEDS CAITLYN: which inbox should sponsor inquiries land in?
  contactEmail: "hello@househackingatl.com",
};

/**
 * Required Georgia real estate advertising disclosure. Georgia Real Estate
 * Commission rules require brokerage attribution on real estate
 * advertising. NEEDS CAITLYN: exact approved wording from her broker
 * (Keller Williams Metro Atlanta) — name/brokerage below are real, but the
 * specific disclosure phrasing is still pending approval. Do not go live
 * as-is.
 */
export const licenseDisclosure = {
  text: "Caitlyn Verdugo, REALTOR®, Keller Williams Metro Atlanta",
  confirmed: false,
};
