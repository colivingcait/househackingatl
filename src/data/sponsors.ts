/**
 * Sponsor data. Empty arrays are expected at launch — the sponsor
 * components render a clean "opportunities available" empty state rather
 * than a broken/blank grid when these are empty.
 *
 * Compliance note (RESPA): never label a sponsor "preferred," "recommended,"
 * or "our" lender/inspector/insurer. Use "Anchor Partner" or "Event Sponsor."
 * Never state or imply sponsors receive the attendee list.
 */

export type AnchorPartner = {
  name: string; // business name, e.g. "Highland Mortgage"
  contactName?: string; // the person, e.g. "Krishen Shah"
  category: string; // e.g. "Lender", "Insurance"
  logoUrl?: string;
  url?: string;
  /** Which meetup they've spoken at / are speaking at — see src/data/meetups.ts. */
  speakingMonth?: string;
};

export type EventSponsor = {
  name: string;
  month: string; // which meetup they're sponsoring/speaking at
  logoUrl?: string;
  url?: string;
  bio?: string;
};

export const anchorPartners: AnchorPartner[] = [
  {
    name: "Highland Mortgage",
    contactName: "Krishen Shah",
    category: "Lender",
    speakingMonth: "September 2026",
  },
  {
    name: "Allstate Insurance",
    contactName: "Whitney Mckee",
    category: "Insurance",
    speakingMonth: "November 2026",
  },
];

export const eventSponsors: EventSponsor[] = [];

export const sponsorTiers = [
  {
    name: "Anchor Partner",
    cadence: "Annual, category-exclusive",
    priceLabel: "$1,000–1,500/yr",
    features: [
      "Category exclusivity for the year (one partner per category)",
      "Logo on the site sponsor section and event graphics",
      "Named in event emails",
      "One speaking slot per year, plus a brief intro at every event",
    ],
    categoriesNote: "Current categories: lender, insurance. More may be added.",
  },
  {
    name: "Event Sponsor",
    cadence: "Per event",
    priceLabel: "~$200",
    features: [
      "20-minute speaking slot",
      "Logo and bio on that month's event page",
      "Included in that month's event marketing",
    ],
  },
];
