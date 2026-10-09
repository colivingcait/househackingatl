import { siteConfig, author, meetup, links, contact, brokerage } from "./site-config";
import { testimonialsForSchema, zillowReviews } from "../data/testimonials";
import type { Crumb } from "@/components/Breadcrumb";

const BASE = `https://${siteConfig.domain}`;
const DEFAULT_IMAGE = `${BASE}/images/og-default.jpg`;

/** Same @id colivingcait.com uses, so the two sites are one Person. */
export const PERSON_ID = "https://www.colivingcait.com/#caitlyn";
export const ORG_ID = `${BASE}/#org`;
export const WEBSITE_ID = `${BASE}/#website`;

function absoluteUrl(path: string): string {
  if (path === "/") return BASE;
  return `${BASE}${path}`;
}

/** Builds schema.org BreadcrumbList from the same Crumb[] shape the visual Breadcrumb component uses. */
export function breadcrumbListSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [image ? absoluteUrl(image) : DEFAULT_IMAGE],
    ...(datePublished ? { datePublished } : {}),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
  };
}

/** Only for a real Q&A block whose visible answers match these strings. */
export function faqPageSchema(qas: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };
}

/**
 * Sitewide Person + Organization + WebSite graph.
 * Homes.com and Realtor.com are omitted — those profiles are unverified.
 * Person.founder is omitted: that property means "who founded this
 * person," which would invert the relationship. The meetup's founder
 * edge points at Caitlyn instead.
 * aggregateRating and review are valid on RealEstateAgent (a LocalBusiness),
 * not on Person alone, so Caitlyn is both types. Only reviews shown on the
 * page are included. The 5.0 / 18 count is the Zillow total.
 */
export function entityGraphSchema() {
  const reviews = testimonialsForSchema().map((item) => ({
    "@type": "Review",
    author: { "@type": "Person", name: item.name },
    datePublished: item.datePublished,
    reviewBody: item.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    publisher: {
      "@type": "Organization",
      name: "Zillow",
      sameAs: zillowReviews.profileUrl,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "RealEstateAgent"],
        "@id": PERSON_ID,
        name: author.name,
        alternateName: "Coliving Cait",
        jobTitle: "REALTOR®",
        description:
          "Atlanta REALTOR® with Keller Williams Realty Metro Atlanta specializing in house hacking, rent-by-the-room, coliving and PadSplit-ready properties; real estate investor and coliving operator.",
        image: absoluteUrl(author.photo),
        url: "https://www.colivingcait.com/about",
        email: contact.emailHref,
        telephone: contact.phoneE164,
        worksFor: {
          "@type": "RealEstateAgent",
          name: brokerage.name,
          telephone: brokerage.telephone,
          address: {
            "@type": "PostalAddress",
            streetAddress: brokerage.streetAddress,
            addressLocality: brokerage.addressLocality,
            addressRegion: brokerage.addressRegion,
            postalCode: brokerage.postalCode,
            addressCountry: brokerage.addressCountry,
          },
        },
        knowsAbout: [
          "House hacking",
          "Rent by the room",
          "Coliving",
          "PadSplit",
          "Small multifamily",
          "ADUs",
          "FHA owner-occupant financing",
          "Atlanta real estate",
        ],
        sameAs: [
          links.colivingCait,
          links.linkedin,
          links.instagram,
          links.zillow,
          meetup.eventbriteOrganizerUrl,
          links.womensColivingSummit,
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: zillowReviews.ratingValue,
          bestRating: "5",
          reviewCount: zillowReviews.reviewCount,
        },
        review: reviews,
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: siteConfig.name,
        url: BASE,
        logo: DEFAULT_IMAGE,
        description:
          "Free monthly house hacking meetup and guide library for metro Atlanta, founded and hosted by REALTOR® Caitlyn Verdugo (Keller Williams Realty Metro Atlanta).",
        founder: { "@id": PERSON_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Metro Atlanta, GA" },
        sameAs: [
          links.facebookGroup,
          meetup.eventbriteOrganizerUrl,
          meetup.eventbriteCollectionUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE,
        name: siteConfig.name,
        publisher: { "@id": ORG_ID },
        author: { "@id": PERSON_ID },
      },
    ],
  };
}

// ---- Meetup date math -------------------------------------------------

/** The nth occurrence of a weekday in a given month (0-indexed month, 0=Sunday..6=Saturday). */
function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, month, 1 + offset + (n - 1) * 7);
}

/** US Eastern DST runs 2nd Sunday of March through 1st Sunday of November. Atlanta is always Eastern. */
function isEasternDaylightSaving(date: Date): boolean {
  const year = date.getFullYear();
  const start = nthWeekdayOfMonth(year, 2, 0, 2); // 2nd Sunday of March
  const end = nthWeekdayOfMonth(year, 10, 0, 1); // 1st Sunday of November
  return date >= start && date < end;
}

function easternIso(year: number, month: number, day: number, hour: number, minute: number): string {
  const offset = isEasternDaylightSaving(new Date(year, month, day)) ? "-04:00" : "-05:00";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${year}-${pad(month + 1)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00${offset}`;
}

/** Parses "August 2026" into a real 2nd-Tuesday Date, per meetup.cadenceLabel. */
function secondTuesdayOf(monthLabel: string): Date {
  const parsed = new Date(`1 ${monthLabel}`);
  return nthWeekdayOfMonth(parsed.getFullYear(), parsed.getMonth(), 2, 2);
}

export function meetupEventSchema({
  monthLabel,
  topic,
  category,
  speaker,
  speakerCompany,
  eventbriteUrl,
}: {
  monthLabel: string;
  topic: string;
  category: string;
  speaker?: string;
  speakerCompany?: string;
  eventbriteUrl?: string;
}) {
  const date = secondTuesdayOf(monthLabel);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const url = eventbriteUrl || meetup.eventbriteCollectionUrl || absoluteUrl("/meetups");
  const speakerLine = speaker
    ? `, with guest speaker ${speaker}${speakerCompany ? ` (${speakerCompany})` : ""}`
    : "";

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `House Hacking Atlanta Monthly Meetup: ${topic}`,
    startDate: easternIso(year, month, day, 18, 30),
    endDate: easternIso(year, month, day, 21, 0),
    image: [DEFAULT_IMAGE],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: meetup.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: meetup.venue.street,
        addressLocality: meetup.venue.city,
        addressRegion: meetup.venue.state,
        postalCode: meetup.venue.postalCode,
        addressCountry: "US",
      },
    },
    description: `Free monthly meetup on house hacking in Atlanta, hosted by Caitlyn Verdugo, REALTOR® (Keller Williams Realty Metro Atlanta). This month: ${topic} (${category})${speakerLine}.`,
    organizer: { "@id": ORG_ID },
    performer: { "@id": PERSON_ID },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url,
      availability: "https://schema.org/InStock",
    },
    url,
  };
}
