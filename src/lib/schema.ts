import { siteConfig, author, meetup } from "./site-config";
import type { Crumb } from "@/components/Breadcrumb";

const BASE = `https://${siteConfig.domain}`;
const DEFAULT_IMAGE = `${BASE}/images/og-default.jpg`;

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
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [image ? absoluteUrl(image) : DEFAULT_IMAGE],
    author: { "@type": "Person", name: author.name, url: absoluteUrl("/about") },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: DEFAULT_IMAGE },
    },
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

/**
 * Not yet applied anywhere — none of the 83 articles currently have a
 * genuine Q&A section (checked: no explicit question/answer pairs, just
 * rhetorical section headers). Ready to use once/if one does; forcing this
 * onto content that isn't really FAQ-shaped risks a Google structured-data
 * manual action for mismatched markup.
 */
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

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: author.name,
    url: BASE,
    image: absoluteUrl(author.photo),
    description: siteConfig.shortBlurb,
    areaServed: { "@type": "City", name: "Atlanta" },
    sameAs: [], // NEEDS CAITLYN: sister-site URLs once confirmed (see NEEDS_CAITLYN.md)
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
  eventbriteUrl,
}: {
  monthLabel: string;
  topic: string;
  category: string;
  speaker?: string;
  eventbriteUrl?: string;
}) {
  const date = secondTuesdayOf(monthLabel);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const url = eventbriteUrl || meetup.eventbriteOrganizerUrl || absoluteUrl("/meetups");

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `House Hacking Atlanta: ${topic}`,
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
      },
    },
    description: `${topic} — a house hacking meetup topic with a ${category.toLowerCase()} guest${
      speaker ? ` (${speaker})` : ""
    }. Second Tuesday of the month, doors 6:30pm.`,
    organizer: { "@type": "Organization", name: siteConfig.name, url: BASE },
    performer: speaker ? { "@type": "Person", name: speaker } : undefined,
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
