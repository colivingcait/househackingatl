/**
 * Monthly meetup topic calendar. One line = one line edit.
 *
 * `speaker` is intentionally optional — layout must not break when a
 * speaker isn't confirmed yet (render "Speaker TBA").
 *
 * `eventbriteUrl` is optional per-event. When empty, the CTA falls back to
 * the Eventbrite organizer page (see site-config.ts) instead of a dead link.
 */

export type MeetupEvent = {
  month: string; // e.g. "August 2026"
  topic: string;
  category: string;
  speaker?: string;
  /** Kept separate from `speaker` so Event schema can set performer.worksFor correctly. */
  speakerCompany?: string;
  eventbriteUrl?: string;
  note?: string;
};

export const meetupSchedule: MeetupEvent[] = [
  {
    month: "September 2026",
    topic: "Financing the Deal",
    category: "Lender",
    speaker: "Krishen Shah",
    speakerCompany: "Highland Mortgage",
  },
  {
    month: "October 2026",
    topic: "Finding the Deal",
    category: "Realtor",
    speaker: "Caitlyn",
  },
  {
    month: "November 2026",
    topic: "Protecting Your Assets",
    category: "Insurance",
    speaker: "Whitney Mckee",
    speakerCompany: "Allstate Insurance",
  },
  {
    month: "December 2026",
    topic: "Screening Tenants",
    category: "Property Manager",
    note: "May become a holiday social, or be skipped.",
  },
  {
    month: "January 2027",
    topic: "House Hacking Panel: Learn From Their Experience",
    category: "Investor Panel",
  },
  {
    month: "February 2027",
    topic: "Inspecting Your Future",
    category: "Home Inspector",
  },
  {
    month: "March 2027",
    topic: "Hands-On Numbers Workshop",
    category: "Workshop",
    speaker: "Caitlyn",
  },
  {
    month: "April 2027",
    topic: "Lowering Maintenance Costs",
    category: "Home Warranty",
  },
  {
    month: "May 2027",
    topic: "Adding Value to Your House Hack",
    category: "Appraisal",
  },
];
