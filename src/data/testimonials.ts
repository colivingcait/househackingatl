/**
 * Zillow reviews Caitlyn approved for the site. Quotes are verbatim.
 * Featured lines are the approved sentences. The longer set is the full
 * review text, already complete sentences, with no locations added.
 * Kelly is attributed as Kelly M. The Zillow display string that contained
 * an email handle is never published.
 */
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  /** ISO date from the Zillow review. Used in schema, not shown on the card. */
  datePublished: string;
};

export const zillowReviews = {
  ratingValue: "5.0",
  reviewCount: 18,
  profileUrl: "https://www.zillow.com/profile/caitlynverdugo",
  label: "5.0 from 18 Zillow reviews",
};

export const featuredTestimonials: Testimonial[] = [
  {
    name: "Ariana S.",
    role: "investor",
    quote: "As an investor, I really appreciated how knowledgeable she is about the market and how thoughtful her guidance was when evaluating opportunities.",
    datePublished: "2026-01-17",
  },
  {
    name: "BurkeCapital",
    role: "repeat buyer",
    quote: "She can walk through a property and tell you almost exactly what things are going to cost to fix, which has saved our butts like in the sewer situation.",
    datePublished: "2026-01-12",
  },
  {
    name: "Malika D.",
    role: "seller",
    quote: "I highly recommend Caitlyn, we had been trying to sell an investment property on our own for months and we’re about to give up when Caitlyn came and offered her services.",
    datePublished: "2026-01-17",
  },
  {
    name: "Adam U.",
    role: "seller",
    quote: "She’s a process and organization QUEEN!!!",
    datePublished: "2024-04-11",
  },
];

export const moreTestimonials: Testimonial[] = [
  {
    name: "David W.",
    role: "buyer",
    quote: "Good service, fast document handling, solid negotiations, good network of contractors, good construction knowledge. We were able to walk the property together and quickly identify what was needed for goals in mind and how we would proceed to project completion.",
    datePublished: "2024-04-15",
  },
  {
    name: "Kevin F.",
    role: "first-time buyer",
    quote: "Caitlyn was the best realtor I encountered in my home buying experience. Since the beginning she was very proactive about showing me properties with attributes I was interested in and organizing tours promptly. Once we finally arrived at a house to close on, Caitlyn made the process as easy as possible for me, a first time homebuyer. During price negotiations with the seller, Caitlyn was very patient with the back and forth between me and the seller, ultimately achieving a very hefty concession from the seller. She's undoubtedly my go to realtor for my next property. She is prompt, professional, and cordial!",
    datePublished: "2024-06-05",
  },
  {
    name: "trammell kevin r",
    role: "buyer",
    quote: "Our experience with Caitlyn was amazing. She is responsive, professional, diligent, trustworthy and really knows her stuff. She provided all of the knowledge, confidence and education that we could have hoped for throughout our home purchase. We couldn’t be happier with our new home, and we will be sure to recommend Caitlyn to all of our family and friends when they need to buy or sell! 10/10 would recommend and will use again!",
    datePublished: "2022-12-22",
  },
  {
    name: "Vladimir T.",
    role: "first-time buyer",
    quote: "After dealing with many real estate agents I have found the one who gets it done. Caitlyn Verdugo helped me buy my first house in an insane Market. Working with her made the whole transaction go very smoothly. Hands down the Best Real Estate Agent to work with. She explained how everything works with ease and brought me a sense of peace working with her. Caitlyn went above and beyond for me. I stand behind her work 100% and will recommend her to anyone who is in the Market for a new home any day. She is friendly, easy to work with and hassle free.",
    datePublished: "2021-08-16",
  },
  {
    name: "Kelly M.",
    role: "buyer",
    quote: "Caitlyn Verdugo is the best realtor we have ever dealt with. After dealing with several other realtors in the past and being disappointed, We felt extremely lucky to find her. Caitlyn really cared about us and understood our needs throughout the entire process. Caitlyn was extremely communicative and was always available to answer our questions. Very professional, experienced, and absolutely wonderful to work with. Highly recommend.",
    datePublished: "2021-05-11",
  },
  {
    name: "theernataylor",
    role: "first-time buyer",
    quote: "Caitlyn was extremely patient with this first time home buyer. She answered all my questions and, if for some reason she couldn’t, she found the answer for me. She was quick to respond whenever I reached out to her. Caitlyn was especially helpful during the inspection period. She did some great negotiating, always remaining professional. Well done, Caitlyn. Thank you for finding me a perfect fit!",
    datePublished: "2021-01-01",
  },
];

/** One schema review per person. Kevin's card sentence is inside his full review. */
export function testimonialsForSchema(): Testimonial[] {
  const byName = new Map<string, Testimonial>();
  for (const item of [...featuredTestimonials, ...moreTestimonials]) {
    const existing = byName.get(item.name);
    if (!existing || item.quote.length > existing.quote.length) byName.set(item.name, item);
  }
  return Array.from(byName.values());
}
