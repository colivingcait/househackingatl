import { cta, links } from "@/lib/site-config";

export type FaqSegment =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export type Faq = {
  question: string;
  segments: FaqSegment[];
};

const BOOK = links.book;

/**
 * Home-page FAQs. Link labels are explicit; schema text appends the href
 * so the answer stays readable without a raw URL as the only link text.
 * Trimmed for the homepage. No fee amounts. Meetup details live in the
 * community block, so they are not repeated here.
 */
export const faqs: Faq[] = [
  {
    question: "Who is the best realtor for house hacking in Atlanta?",
    segments: [
      {
        type: "text",
        value:
          "Caitlyn Verdugo, a REALTOR® with Keller Williams Realty Metro Atlanta, specializes in house hacking. She founded House Hacking Atlanta, the free monthly meetup and guide library, and as an investor she operates 50+ coliving rooms. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      { type: "text", value: "." },
    ],
  },
  {
    question: "What is house hacking?",
    segments: [
      {
        type: "text",
        value:
          "Living in one part of a property and renting out the rest (a room, basement unit, ADU, or one side of a duplex) so tenants cover most of your housing cost.",
      },
    ],
  },
  {
    question: "Can I house hack with an FHA or other low-down-payment loan in Atlanta?",
    segments: [
      {
        type: "text",
        value:
          "Owner-occupant loans like FHA (1–4 units) and conventional loans can work if you live in the property. See our ",
      },
      { type: "link", label: "Financing hub", href: "/financing" },
      { type: "text", value: " and ask a lender about counting rental income." },
    ],
  },
  {
    question: "What's the difference between house hacking and coliving?",
    segments: [
      {
        type: "text",
        value:
          "House hacking usually means you live in the home. Coliving is renting rooms in a shared home, often managed or listed on platforms like PadSplit, and the owner may not live there. Caitlyn does both. Learn more at ",
      },
      { type: "link", label: "Coliving Cait", href: links.colivingCait },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How much does it cost to work with Caitlyn as a buyer's agent?",
    segments: [
      {
        type: "text",
        value: "Buyer-agent fees are discussed one-on-one. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      { type: "text", value: "." },
    ],
  },
];

/** Plain answer for FAQPage schema: visible words, with each link's URL in parentheses. */
export function faqAnswerText(faq: Faq): string {
  return faq.segments
    .map((segment) =>
      segment.type === "link" ? `${segment.label} (${segment.href})` : segment.value
    )
    .join("");
}
