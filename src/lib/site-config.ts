/**
 * Single source of truth for values that change over time or are still
 * pending from Caitlyn. Update here — do not hardcode these elsewhere.
 *
 * Anything read from `process.env` needs to be set in Vercel project
 * settings (and locally in `.env.local`). See `.env.example`.
 */

export const siteConfig = {
  name: "House Hacking Atlanta",
  domain: "househackingatl.com",
  tagline: "Live for less. Build more wealth. Every door is an opportunity.",
  missionLine: "live for less, build more wealth",
  doorMotif: "Every door is an opportunity. 🚪",
  shortBlurb:
    "House hacking in the Atlanta metro — living in one part of your property and renting out another. Real numbers, real deals, real support. Live for less. Build more wealth. Every door is an opportunity.",
};

/**
 * Author box shown on every article — the trust signal for a stranger
 * arriving from search who's never seen this site before. NEEDS CAITLYN:
 * headshot (photo left blank until then; the author box shows a
 * placeholder circle).
 */
export const author = {
  name: "Caitlyn",
  bio: "Atlanta-based realtor, investor, and serial house hacker.",
  credential: "Licensed Georgia Real Estate Agent, Keller Williams Realty",
  photo: "",
};

export const meetup = {
  // Recurring cadence — shown as plain text, not derived from a date library,
  // so it reads correctly regardless of the current month.
  cadenceLabel: "Second Tuesday of every month",
  venue: {
    name: "New Realm Brewing",
    // NEEDS CAITLYN: venue agreement was pending — confirm before launch.
    confirmed: false,
    address: "Atlanta, GA", // Keep metro-level only until an exact address is approved for public listing.
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
  facebookGroup: "",
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
 * (Keller Williams) — this placeholder must not go live as-is.
 */
export const licenseDisclosure = {
  text:
    "Caitlyn [Last Name], Licensed Real Estate Agent, Keller Williams Realty. [Exact broker-approved disclosure wording pending — placeholder text, not for production use.]",
  confirmed: false,
};
