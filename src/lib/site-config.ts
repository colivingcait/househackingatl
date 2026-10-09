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
  homeTitle:
    "House Hacking Atlanta — Caitlyn Verdugo, Atlanta House Hacking Realtor (KW)",
  homeDescription:
    "Atlanta house hacking realtor Caitlyn Verdugo (Keller Williams Metro Atlanta) helps you buy a home that pays you back — rent-by-the-room, coliving, PadSplit-ready, duplex and ADU. Free monthly meetup + 83 guides.",
};

/** Public contact. This is the only phone and email the site publishes. */
export const contact = {
  email: "CV.SellsHomes@gmail.com",
  emailHref: "mailto:CV.SellsHomes@gmail.com",
  phoneDisplay: "678-884-4494",
  phoneHref: "tel:+16788844494",
  phoneE164: "+1-678-884-4494",
};

/**
 * Keller Williams Realty Metro Atlanta office, used only in JSON-LD
 * worksFor. Not rendered as Caitlyn's own address or phone.
 */
export const brokerage = {
  name: "Keller Williams Realty Metro Atlanta",
  telephone: "+1-404-564-5560",
  streetAddress: "101 W Ponce de Leon Ave",
  addressLocality: "Decatur",
  addressRegion: "GA",
  postalCode: "30030",
  addressCountry: "US",
};

/**
 * Author box shown on every article — the trust signal for a stranger
 * arriving from search who's never seen this site before.
 */
export const author = {
  name: "Caitlyn Verdugo",
  /** Identity order: realtor, investor, coliving operator, women's community leader. Coach is omitted — this site doesn't offer a coaching program. */
  bio: "Atlanta REALTOR® with Keller Williams Realty Metro Atlanta, real estate investor, and coliving operator. Co-founder of the Women's Coliving Summit and She Leads Coliving.",
  credential: "REALTOR®, Keller Williams Realty Metro Atlanta",
  byline: "REALTOR®, KW Metro Atlanta",
  photo: "/images/caitlyn-headshot.jpg",
  email: contact.email,
  fullBio: [
    "I'm Caitlyn Verdugo, an Atlanta REALTOR® with Keller Williams Realty Metro Atlanta and a serial house hacker. I help buyers find homes that pay them back: rent-by-the-room, basement apartments, small multifamily, and ADUs.",
    "As an investor, I operate 50+ coliving rooms across metro Atlanta. Coliving is a different model from house hacking — rooms rented in a shared home, often when the owner does not live there — and I can help with that, including PadSplit-style rentals, when you're ready. I co-founded the Women's Coliving Summit and She Leads Coliving.",
    "I started House Hacking Atlanta and the monthly meetup because no one place in Atlanta covered the real mechanics: financing, running the numbers, and the day-to-day of sharing a home. If you're past the first house hack, Coliving Cait is the brand for that next step. Most people start here: one property, one extra bedroom or unit, and the question of whether the numbers work.",
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
    name: "New Realm Brewing Co.",
    confirmed: true,
    street: "550 Somerset Terrace NE, Suite 101",
    city: "Atlanta",
    state: "GA",
    postalCode: "30306",
    address: "550 Somerset Terrace NE, Suite 101, Atlanta, GA 30306",
  },
  schedule: [
    { label: "Doors & food ordering", time: "6:30 – 7:00 PM" },
    { label: "Host intro & speaker", time: "7:00 – 7:30 PM" },
    { label: "Q&A", time: "7:30 – 7:45 PM" },
    { label: "Open networking", time: "7:45 – 9:00 PM" },
  ],
  sizeLabel: "~20–30 people",
  // Collection of the recurring meetup events. Register buttons use this
  // unless an event has its own `eventbriteUrl` in src/data/meetups.ts.
  eventbriteCollectionUrl: "https://www.eventbrite.com/cc/house-hacking-atl-4861227",
  // Organizer profile — Caitlyn Verdugo | House Hacking Atlanta.
  eventbriteOrganizerUrl:
    "https://www.eventbrite.com/o/caitlyn-verdugo-house-hacking-atlanta-119802863511",
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
  colivingCait: "https://www.colivingcait.com",
  book: "https://www.colivingcait.com/book",
  linkedin: "https://www.linkedin.com/in/coliving-cait",
  instagram: "https://instagram.com/colivingcait",
  zillow: "https://www.zillow.com/profile/caitlynverdugo",
  womensColivingSummit: "https://www.womenscolivingsummit.com/about/",
  atlantaWomenInvestors: "",
  roomsForRentAtl: "",
  facebookGroup: "https://facebook.com/groups/househackingatl",
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
  text: "Caitlyn Verdugo, REALTOR® · Keller Williams Realty Metro Atlanta",
  confirmed: false,
};
