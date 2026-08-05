export type Resource = {
  slug: string;
  title: string;
  stage: string;
  description: string;
  file: string;
  /** Article slug (no leading slash) to embed this download inline in, per BUILD-SPEC.md §8. */
  articleSlug?: string;
};

export const resources: Resource[] = [
  {
    slug: "one-page",
    title: "House Hacking, One Page",
    stage: "Start here",
    description:
      "Everything that matters, on one sheet — the four models, the financing mechanism, and the four numbers to run before you buy.",
    file: "/downloads/house-hacking-one-page.pdf",
  },
  {
    slug: "which-fits-you",
    title: "Which House Hack Fits You?",
    stage: "Decide",
    description:
      "A decision guide for how much sharing, capital, and work you actually want — answered honestly, not aspirationally.",
    file: "/downloads/which-house-hack-fits-you.pdf",
  },
  {
    slug: "four-numbers",
    title: "The Four Numbers Worksheet",
    stage: "Analyze",
    description:
      "Run these on any property in twenty minutes. Fillable worksheet for cost to own, realistic rent, effective housing cost, and the move-out math.",
    file: "/downloads/four-numbers-worksheet.pdf",
    articleSlug: "four-numbers-house-hack",
  },
  {
    slug: "walkthrough-checklist",
    title: "Property Walkthrough Checklist",
    stage: "Tour",
    description:
      "Print one per property. Sightlines, entrances, sound, bathrooms, systems to photograph — everything that's easy to miss in person.",
    file: "/downloads/property-walkthrough-checklist.pdf",
    articleSlug: "house-hack-walkthrough",
  },
  {
    slug: "before-anyone-moves-in",
    title: "Before Anyone Moves In",
    stage: "Operate",
    description:
      "Ten minutes of unglamorous screening and expectations questions that prevent most of what would otherwise become a problem two months in.",
    file: "/downloads/before-anyone-moves-in.pdf",
  },
];
