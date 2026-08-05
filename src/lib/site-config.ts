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
  // NEEDS CAITLYN: Eventbrite organizer page URL.
  eventbriteOrganizerUrl: "",
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
  eventbriteOrganizer: "",
};

/**
 * Kit (formerly ConvertKit) form embeds. These use Kit's public form UID —
 * NOT the private API key — so no secret is required for the signup forms
 * themselves to work. Get the UID from Kit: Grow > Landing Pages & Forms >
 * (form) > Embed > Embed code (the value looks like a short alphanumeric
 * string, e.g. "a1b2c3").
 *
 * Three distinct forms per the brief:
 *  - listingAlerts: the primary offer (new house-hack listings)
 *  - newsletter: general newsletter / meetup reminders
 *  - resources: gated guide/checklist downloads (see src/data/resources.ts)
 *
 * Tagging happens inside Kit's form configuration — tag any signup from
 * this site `hh-site`, tag listing-alert signups `listing-alerts`
 * additionally, tag resource-download signups `resource-download`, and use
 * `hh-researching` / `hh-looking` / `hh-under-contract` / `hh-owner` for
 * stage where captured. Each resource submission also sends a
 * `fields[resource]` value naming which guide was requested, since one
 * form/tag covers all five.
 */
export const kit = {
  listingAlertsFormId: process.env.NEXT_PUBLIC_KIT_LISTING_ALERTS_FORM_ID || "",
  newsletterFormId: process.env.NEXT_PUBLIC_KIT_NEWSLETTER_FORM_ID || "",
  resourcesFormId: process.env.NEXT_PUBLIC_KIT_RESOURCES_FORM_ID || "",
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
