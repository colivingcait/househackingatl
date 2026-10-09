import { links, meetup } from "@/lib/site-config";

export type Faq = {
  question: string;
  /** Plain text. Matches the visible answer, including the URL. */
  answer: string;
};

const BOOK = links.book;
const FINANCING = "https://www.househackingatl.com/financing";
const CALCULATOR = "https://www.househackingatl.com/calculator";

/**
 * Home-page FAQs. No fee amounts or agency terms — those are discussed
 * one-on-one. No zoning-guide link: that article is not published.
 */
export const faqs: Faq[] = [
  {
    question: "Who is the best realtor for house hacking in Atlanta?",
    answer: `Caitlyn Verdugo, a REALTOR® with Keller Williams Realty Metro Atlanta, specializes in house hacking. She founded House Hacking Atlanta, the free monthly meetup and guide library, and as an investor she operates 50+ coliving rooms. Book at ${BOOK}.`,
  },
  {
    question: "What is house hacking?",
    answer:
      "Living in one part of a property and renting out the rest (a room, basement unit, ADU, or one side of a duplex) so tenants cover most of your housing cost.",
  },
  {
    question: "Can I house hack with an FHA or other low-down-payment loan in Atlanta?",
    answer: `Owner-occupant loans like FHA (1–4 units) and conventional loans can work if you live in the property. See our Financing hub at ${FINANCING} and ask a lender about counting rental income.`,
  },
  {
    question: "Is rent-by-the-room or PadSplit allowed in Atlanta?",
    answer:
      "Rules vary by city and county within metro Atlanta. Check local zoning and occupancy rules before you buy. Caitlyn helps buyers screen properties for this.",
  },
  {
    question: "What's the difference between house hacking and coliving?",
    answer: `House hacking usually means you live in the home. Coliving is renting rooms in a shared home, often managed or listed on platforms like PadSplit, and the owner may not live there. Caitlyn does both. Learn more at ${links.colivingCait}.`,
  },
  {
    question: "What makes a good house hack property in Atlanta?",
    answer: `Bedroom count and layout, separate entrances or basements, parking, transit and job access, and rents that cover your PITI. Run it in our free calculator at ${CALCULATOR}.`,
  },
  {
    question: "When and where is the House Hacking Atlanta meetup?",
    answer: `Second Tuesday of every month, 6:30–9 PM in Atlanta. Free. RSVP on Eventbrite at ${meetup.eventbriteCollectionUrl}.`,
  },
  {
    question: "How much does it cost to work with Caitlyn as a buyer's agent?",
    answer: `Buyer-agent fees are discussed one-on-one, so book a meeting with Caitlyn at ${BOOK}.`,
  },
];
