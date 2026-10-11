import { cta, links } from "@/lib/site-config";
import type { Faq } from "@/data/faqs";

const BOOK = links.book;

/**
 * Buy-and-sell FAQs. Visible answers and FAQPage schema stay in sync
 * through the same segment list. No fee amounts, rate quotes, or promises.
 */
export const buyFaqs: Faq[] = [
  {
    question: "How do I find a good house hack in Atlanta?",
    segments: [
      {
        type: "text",
        value:
          "Start with how you want to live: a spare bedroom, a basement, an ADU, or one unit of a small multifamily. A good house hack is a home where the rent from the part you do not live in can cover most of the housing cost. Caitlyn Verdugo helps buyers in metro Atlanta look for homes that fit that plan. If you want the short version of the idea first, read ",
      },
      { type: "link", label: "what house hacking is", href: "/what-is-house-hacking" },
      { type: "text", value: "." },
    ],
  },
  {
    question: "Can you run the numbers on a property?",
    segments: [
      {
        type: "text",
        value:
          "Yes. Caitlyn walks through the rent offset, what rooms might rent for, whether a basement or ADU could add income, and what cash flow looks like after the main costs. Bring a listing, or a home you are already considering, to the call. Those figures are a working estimate from the information available at the time. They are not a promise of rent or cash flow.",
      },
    ],
  },
  {
    question: "What loans work for house hacking?",
    segments: [
      {
        type: "text",
        value:
          "Owner-occupant loans are the usual fit, because you live in the property. FHA loans can cover a home with one to four units, and the FHA down payment can be as low as 3.5% when you occupy it. Conventional loans are another common path, including for a first home. A lender confirms what you qualify for, whether rental income can count, and what the payment looks like. This page does not quote interest rates or promise an approval. The general picture is in the ",
      },
      { type: "link", label: "Financing hub", href: "/financing" },
      { type: "text", value: "." },
    ],
  },
  {
    question: "Can I house hack my first home?",
    segments: [
      {
        type: "text",
        value:
          "Yes. A house hack can be the first home you live in. You occupy part of it and rent the rest, and owner-occupant financing is often how people buy that first house. Caitlyn can walk through whether a first home in metro Atlanta can work this way. Approval and terms come from a lender, not from this page.",
      },
    ],
  },
  {
    question: "Do you help with investment properties too?",
    segments: [
      {
        type: "text",
        value:
          "Yes. House hacking is the version where you live in the property. An investment property is one you do not live in, and Caitlyn helps with those purchases too. Coliving — rooms rented in a shared home, often when the owner lives elsewhere — is a related model, and it is not the same thing as house hacking. She can help with that when it is the plan you want.",
      },
    ],
  },
  {
    question: "Do you help with a primary residence?",
    segments: [
      {
        type: "text",
        value:
          "Yes. A primary residence is the home you live in. Many buyers want exactly that in metro Atlanta, with a room, basement, or extra unit to offset the cost. Caitlyn helps with a straight primary residence and with one that is set up as a house hack. She also helps when the purchase is an investment property instead.",
      },
    ],
  },
  {
    question: "Which areas do you cover?",
    segments: [
      {
        type: "text",
        value:
          "Caitlyn works across metro Atlanta, including Atlanta, Decatur, East Atlanta, and DeKalb County. If a home you like sits nearby, ask on the call and she will tell you whether she can help.",
      },
    ],
  },
  {
    question: "Can I house hack with a basement or ADU conversion?",
    segments: [
      {
        type: "text",
        value:
          "Both can work. A basement conversion is a rental under the same roof. An ADU is a separate unit, such as a backyard cottage or a garage conversion. Caitlyn began her own investing with a basement conversion, so that layout is familiar ground. Whether a specific house can support either one depends on the property, local rules, and the cost to build it. She will look at the potential with you. That is not a promise that every basement or yard can become a rental.",
      },
    ],
  },
  {
    question: "Do you help with coliving and rent-by-the-room?",
    segments: [
      {
        type: "text",
        value:
          "Rent-by-the-room can be a house hack when you live in one room and rent the others. Coliving is renting rooms in a shared home, and the owner often does not live there. The two are related, and they are not the same. Caitlyn helps with both, including PadSplit-style rentals when that is the plan. The coliving side of her work is at ",
      },
      { type: "link", label: "Coliving Cait", href: links.colivingCait },
      { type: "text", value: "." },
    ],
  },
  {
    question: "How do buyer-agent fees work?",
    segments: [
      {
        type: "text",
        value: "Buyer-agent fees are discussed one-on-one. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      {
        type: "text",
        value: " to go through them. Nothing on this page is a quote.",
      },
    ],
  },
  {
    question: "Do you help sell a house, or only buy?",
    segments: [
      {
        type: "text",
        value:
          "Both. Caitlyn helps buy and sell a house hack, a primary residence, or an investment property in metro Atlanta. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      { type: "text", value: " and say whether you are buying, selling, or both." },
    ],
  },
  {
    question: "Who is the Realtor I would work with?",
    segments: [
      {
        type: "text",
        value:
          "Caitlyn Verdugo, REALTOR® with Keller Williams Realty Metro Atlanta. She is a real estate investor and a coach, and she founded House Hacking Atlanta. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      { type: "text", value: " to talk through a purchase or a sale." },
    ],
  },
  {
    question: "Do you guarantee cash flow or a loan approval?",
    segments: [
      {
        type: "text",
        value:
          "No. Caitlyn will run the numbers with you so you can see how a property might work. Rent, cash flow, and appreciation are estimates, not promises. A lender decides loan approval. Legal questions belong with an attorney. This page is education about working together, not a lending offer or a legal opinion.",
      },
    ],
  },
  {
    question: "What happens on a call?",
    segments: [
      {
        type: "text",
        value:
          "It is a working conversation about what you want to buy or sell, how you want to live, and whether the numbers can work. Fees are discussed one-on-one on that call. ",
      },
      { type: "link", label: cta.book, href: BOOK },
      { type: "text", value: "." },
    ],
  },
];
