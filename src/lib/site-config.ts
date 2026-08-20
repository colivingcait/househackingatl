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
  fullerBio:
    "Caitlyn Verdugo is a licensed Georgia REALTOR® with Keller Williams Realty Metro Atlanta, serving buyers and sellers throughout Decatur and east Atlanta. She works with first-time buyers, move-up sellers, and investors, and specializes in house hacking, small multifamily, and rent-by-the-room conversions.\n\nShe is also a coliving operator, sourcing, converting, and running a portfolio of shared homes across the Atlanta metro through Lustra House LLC. She co-founded Atlanta Women Investors, a monthly meetup for women building wealth through real estate, and She Leads Coliving, a community of more than 500 women; she also founded the first Women's Coliving Summit in 2025.\n\nCaitlyn bought her first house hack in 2022, co-authored \"Coliving Authority,\" and founded House Hacking Atlanta. She hosts two free monthly real estate meetups in Atlanta and takes on a small number of one-on-one coaching clients.",
  credential: "REALTOR®, Keller Williams Metro Atlanta",
  photo: "/images/caitlyn-headshot.jpg",
  // Public-facing canonical business email — matches the NAP in
  // ENTITY-FACTS.md. Used in schema.org output; keep in sync with the
  // ColivingCait repo's lib/entity.ts.
  email: "Caitlyn@CallCaitlyn.com",
};

/**
 * Canonical name/address/phone — sourced from ENTITY-FACTS.md. Every site
 * must agree with this file. Do not hardcode these values elsewhere.
 */
export const nap = {
  name: "Caitlyn Verdugo",
  title: "REALTOR® | Investor",
  brokerage: "Keller Williams Metro Atlanta",
  license: "Georgia Real Estate License #414610",
  address: {
    street: "101 W Ponce De Leon STE 200",
    city: "Decatur",
    state: "GA",
    zip: "30030",
  },
  phone: "(678) 884-4494",
  email: "Caitlyn@CallCaitlyn.com",
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
  colivingCait: "https://www.colivingcait.com",
  atlantaWomenInvestors: "",
  roomsForRentAtl: "",
  facebookGroup: "https://facebook.com/groups/househackingatl",
  // Base scheduling link — the month/back params on the URL you sent are
  // just view-state from whatever month you were looking at when you
  // copied it, not part of the permanent link, so they're dropped here.
  calendly: "https://calendly.com/colivingcait/buyer-or-seller-discovery-call",
};

/**
 * The profile graph — confirmed URLs only (a 404 or placeholder in sameAs
 * actively hurts). Mirrors the `sameAs` array in ColivingCait's
 * lib/entity.ts. Add entries once created/located; never guess a URL.
 */
export const sameAs = [
  "https://kw.com/agent/caitlyn-verdugo/811213",
  "https://caitlynverdugo.kw.com",
  "https://www.facebook.com/caitlynverdugorealtor",
  "https://www.linkedin.com/in/caitlyn-verdugo-realtor/",
  "https://www.instagram.com/colivingcait/",
  "https://www.colivingcait.com",
  links.facebookGroup,
].filter(Boolean);

/**
 * Caitlyn's custom CRM. All three signup forms (listing alerts, newsletter,
 * resource downloads) POST straight to this one webhook — no per-form ID,
 * unlike the old Kit setup. Each submission includes a `source` field
 * ("listing_alerts" | "newsletter" | "gated_download") so the CRM can tell
 * them apart. Full cutover from Kit — not dual-writing.
 */
export const crm = {
  webhookUrl: "https://www.callcaitlyn.com/api/webhooks/house-hacking-site",
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
