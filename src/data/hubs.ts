export type HubItem = {
  /** Route slug, no leading slash. */
  slug: string;
  /**
   * Most cluster items are articles at /<slug>. A small number of spec
   * entries (e.g. "before-anyone-moves-in" in Hub 5) point at a gated
   * resource rather than a written article — those resolve to /resources
   * instead of a flat article route.
   */
  kind?: "article" | "resource";
};

export type HubSection = {
  heading?: string;
  items: HubItem[];
};

export type Hub = {
  id: string;
  name: string;
  eyebrow: string;
  intro: string[];
  pillar: string;
  sections: HubSection[];
  nextStep: { label: string; href: string; description: string };
};

export const hubs: Hub[] = [
  {
    id: "what-is-house-hacking",
    name: "What Is House Hacking",
    eyebrow: "Start here",
    intro: [
      "House hacking is living in one part of your property and renting out another. A spare bedroom. A converted basement apartment. A backyard ADU. One side of a duplex. Weekend Airbnb'ing your extra space while you're out of town. All of it counts, and the models are different enough that \"house hacking\" as a single idea can mean very different day-to-day lives.",
      "The core promise is the same across all of them: lower your housing cost while building wealth, in the same house, at the same time. For most people that's possible because of owner-occupant financing — loan programs built for someone who's going to live in the property, with down payments an investor buying the same building could never touch.",
      "This hub is where to start if you're still asking \"does this actually work, and is it for me?\" The articles below walk through the four ways people do this, how to tell if a space will actually rent, and the honest comparisons — house hacking against renting, against buying a straightforward rental, against Airbnb — so you can see where it fits before you get further in.",
      "One note on language: house hacking is not the same thing as coliving. Coliving is a related but more advanced model, built around shared living as the product rather than a byproduct of owning a bigger property. Almost nobody starts there, and nothing on this page assumes you will.",
    ],
    pillar: "four-ways-to-house-hack",
    sections: [
      {
        heading: "The basics",
        items: [
          { slug: "four-ways-to-house-hack" },
          { slug: "which-space-rents" },
          { slug: "house-hack-home-you-already-own" },
          { slug: "rental-arbitrage-house-hack" },
        ],
      },
      {
        heading: "Is this right for me?",
        items: [
          { slug: "house-hacking-vs-rental-property" },
          { slug: "house-hacking-vs-renting" },
          { slug: "house-hacking-vs-airbnb" },
          { slug: "first-house-hack-forever-home" },
          { slug: "expensive-market" },
          { slug: "house-hacking-mistakes" },
        ],
      },
    ],
    nextStep: {
      label: "Find out what makes a property actually work →",
      href: "/finding-a-property",
      description:
        "Once you know which model fits you, the next question is what to look for on paper and in person.",
    },
  },
  {
    id: "finding-a-property",
    name: "Finding a Property",
    eyebrow: "Hub",
    intro: [
      "Not every house is a house hack. Some floor plans give you real separation and privacy for a resident; others technically \"could\" work but will make both of you miserable. This hub is about recognizing the difference before you're under contract, not after.",
      "That starts with what actually makes a property work — sightlines, entrances, sound, and the systems that get complicated once someone else is living there — and extends into decisions like duplex versus single-family, whether to buy more house than you'd otherwise choose on purpose, and how much renovation budget to plan for if a space needs work before it's rentable.",
      "Atlanta metro is a big, uneven market. What pencils out in one neighborhood doesn't in another, and \"good house hack\" doesn't always mean \"nicest house.\" A few of these articles get specific about where and why, without publishing anything more precise than the neighborhood level — we don't share exact addresses of properties, including our own.",
      "If you're actively touring, come back for the walkthrough checklist — it's built to catch what photos and a quick visit don't.",
    ],
    pillar: "what-makes-a-good-house-hack",
    sections: [
      {
        items: [
          { slug: "what-makes-a-good-house-hack" },
          { slug: "house-hack-walkthrough" },
          { slug: "which-space-rents" },
          { slug: "duplex-vs-single-family" },
          { slug: "buy-more-house-on-purpose" },
          { slug: "where-house-hacks-work-atlanta" },
          { slug: "planning-a-renovation" },
        ],
      },
    ],
    nextStep: {
      label: "See how the financing actually works →",
      href: "/financing",
      description:
        "Found a property you like? The next step is understanding what you can actually qualify for and how lenders treat the rental income.",
    },
  },
  {
    id: "financing",
    name: "Financing",
    eyebrow: "Hub",
    intro: [
      "Owner-occupant financing is the mechanism that makes house hacking possible for most people — loan programs built for someone who's going to live in the property, with down payments as low as roughly 3–5%, against the 15–25%+ an investor would need to put down on the same building. It's the single biggest reason this works better as a first move than jumping straight into buying a standalone rental.",
      "This hub covers the practical side: what to actually ask a lender before you fall in love with a property, how rental income from the space you're planning to rent gets counted toward qualifying, and loan-specific paths like FHA 203k for a property that needs work built into the purchase.",
      "It also covers two situations that change the math — buying on one income, and funding a second property once the first one is working. Financing details shift with rates, guidelines, and your specific lender, so treat these as the questions to bring to a real conversation, not a substitute for one.",
    ],
    pillar: "owner-occupant-financing-house-hacking",
    sections: [
      {
        items: [
          { slug: "owner-occupant-financing-house-hacking" },
          { slug: "questions-to-ask-a-lender" },
          { slug: "rental-income-to-qualify" },
          { slug: "fha-203k-explained" },
          { slug: "house-hacking-one-income" },
          { slug: "funding-property-two" },
        ],
      },
    ],
    nextStep: {
      label: "Run the numbers on a real property →",
      href: "/running-the-numbers",
      description:
        "Once you know what you can qualify for, it's time to find out whether a specific property actually works.",
    },
  },
  {
    id: "running-the-numbers",
    name: "Running the Numbers",
    eyebrow: "Hub",
    intro: [
      "The most expensive mistake in house hacking isn't buying a bad house — it's buying a fine house on numbers you never actually ran. This hub is the twenty-minute habit that prevents that: what it really costs to own a property, what a space will realistically rent for, what that leaves as your effective housing cost, and what happens to the numbers after you eventually move out.",
      "It also covers how real estate actually builds wealth beyond the monthly cash flow number most people fixate on — appreciation, debt paydown, and the tax pieces that show up elsewhere on this site. Cash flow matters, but it isn't everything, and treating it as the only number that counts causes people to walk away from deals that were actually strong.",
      "None of this tells you whether you'll like living in a property. It tells you whether the math holds up — which is the part worth eliminating bad options on before you let yourself get emotionally attached to a good-looking listing.",
    ],
    pillar: "four-numbers-house-hack",
    sections: [
      {
        heading: "Evaluating a deal",
        items: [
          { slug: "four-numbers-house-hack" },
          { slug: "what-your-space-is-worth" },
          { slug: "what-percentage-mortgage" },
          { slug: "works-after-you-move-out" },
        ],
      },
      {
        heading: "How real estate actually pays",
        items: [
          { slug: "four-ways-real-estate-makes-money" },
          { slug: "cash-flow-isnt-everything" },
          { slug: "what-is-appreciation" },
          { slug: "debt-paydown-explained" },
          { slug: "what-to-do-with-house-hack-savings" },
        ],
      },
    ],
    nextStep: {
      label: "Get the free Four Numbers Worksheet →",
      href: "/resources",
      description: "A fillable version of the exact math covered in this hub — run it on any listing in twenty minutes.",
    },
  },
  {
    id: "being-a-landlord",
    name: "Being a Landlord",
    eyebrow: "Hub",
    intro: [
      "This is the largest hub on the site, because operating a house hack is where most of the real, ongoing work actually happens — and it's the part almost nobody researches before closing. Buying the property is one decision. Screening well, setting up a fair lease, handling a maintenance request at 9pm, and knowing what to do when a housemate situation goes sideways are dozens of smaller ones, made continuously.",
      "The articles below are grouped by where you are: getting oriented if this is your first time doing anything like it, finding and screening the person who's going to live near you, setting the lease and systems up correctly from day one, the actual day-to-day of sharing a home, and — because it happens — what to do when something goes wrong. A short section on turnover closes the loop for when a resident moves out and it's time to do it again.",
      "One word note: we use \"landlord\" deliberately in this hub. It's the term people actually search for, and this is education about the role, not a rebrand of it. Elsewhere on this site, and in anything coliving-related, you'll see \"housing operator\" or \"community builder\" instead — but here, we're calling it what most people are looking for help with.",
    ],
    pillar: "house-hacking-landlord-playbook",
    sections: [
      {
        heading: "Start here",
        items: [
          { slug: "house-hacking-landlord-playbook" },
          { slug: "first-time-landlord-renting-a-room" },
          { slug: "three-tips-house-hacking-landlord" },
          { slug: "good-landlord-live-in" },
          { slug: "landlord-responsibilities-house-hack" },
        ],
      },
      {
        heading: "Finding and screening residents",
        items: [
          { slug: "finding-good-housemates" },
          { slug: "looking-people-up-screening-tools" },
          { slug: "house-hack-listing" },
          { slug: "safety-renting-a-room" },
          { slug: "mrs-murphy-exemption" },
        ],
      },
      {
        heading: "Setting it up",
        items: [
          { slug: "before-anyone-moves-in", kind: "resource" },
          { slug: "house-hack-lease" },
          { slug: "security-deposits" },
          { slug: "utilities-included-or-separate" },
          { slug: "insurance-renting-a-room" },
          { slug: "smart-locks-house-hack" },
          { slug: "first-30-days-house-hack" },
        ],
      },
      {
        heading: "Day to day",
        items: [
          { slug: "what-its-like-to-live-with-your-tenants" },
          { slug: "shared-spaces-that-work" },
          { slug: "keeping-neighbors-happy" },
          { slug: "get-rent-paid-on-time" },
          { slug: "what-breaks-house-hack-maintenance" },
          { slug: "self-manage-house-hack" },
        ],
      },
      {
        heading: "When things go wrong",
        items: [
          { slug: "difficult-housemate" },
          { slug: "prevent-eviction-house-hack" },
          { slug: "raising-rent-house-hack" },
        ],
      },
      {
        heading: "Turnover",
        items: [{ slug: "house-hack-turnover" }, { slug: "returning-security-deposits" }],
      },
    ],
    nextStep: {
      label: "See rental strategy options →",
      href: "/rental-strategies",
      description: "Long-term isn't the only way to rent a space — mid-term and furnished strategies can change the math.",
    },
  },
  {
    id: "rental-strategies",
    name: "Rental Strategies",
    eyebrow: "Hub",
    intro: [
      "Long-term, unfurnished, one lease at a time isn't the only way to rent out a space — and depending on your property and your tolerance for turnover, it might not be the best one. This hub covers the other models: furnished versus unfurnished, mid-term rentals for people relocating for work, and short-term stays through a platform like Airbnb.",
      "Each comes with real tradeoffs. Furnished spaces and mid-term stays can command more per month but come with more setup cost and more turnover. Renting to travel nurses or corporate relocations can mean steadier, more qualified residents than the open market, but a narrower pool. A basement or accessory space run as a short-term rental behaves nothing like a long-term lease, for better and worse.",
      "None of these are more \"legitimate\" than a standard lease. They're different tools for different properties and different amounts of hands-on involvement — read through and see which matches how much you actually want to be doing.",
    ],
    pillar: "furnished-vs-unfurnished-house-hack",
    sections: [
      {
        items: [
          { slug: "furnished-vs-unfurnished-house-hack" },
          { slug: "mid-term-rental-house-hack" },
          { slug: "midterm-vs-longterm" },
          { slug: "house-hacking-travel-nurses" },
          { slug: "corporate-rentals" },
          { slug: "basement-airbnb" },
          { slug: "furnishing-a-rental" },
        ],
      },
    ],
    nextStep: {
      label: "Understand the tax side →",
      href: "/money-and-taxes",
      description: "Whatever strategy you pick, it changes how the property gets treated at tax time.",
    },
  },
  {
    id: "money-and-taxes",
    name: "Money & Taxes",
    eyebrow: "Hub",
    intro: [
      "Real estate is treated differently by the tax code than most other income — not as a loophole, but as a deliberate set of policy choices about housing. This hub is an overview of the concepts worth understanding: depreciation, what's deductible, how the primary-residence rules interact with a property you're partly renting out, and what changes at the moment you sell or move out.",
      "A house hack sits in a genuinely interesting position for tax purposes, because part of the property is your home and part is a rental — which means some of this gets allocated between the two rather than falling cleanly on one side. That allocation is exactly why record-keeping matters more here than in a straightforward rental.",
      "Every article in this hub carries the same honest disclaimer, and it's worth saying plainly up front: I'm a real estate agent, not a CPA. This is general education about how these concepts work, meant to make your actual conversation with a tax professional far more useful — not a substitute for having that conversation. The specifics depend on your income, your entity structure, and rules that change. Treat this as the map, not the advice.",
    ],
    pillar: "tax-benefits-of-real-estate",
    sections: [
      {
        items: [
          { slug: "tax-benefits-of-real-estate" },
          { slug: "depreciation-explained" },
          { slug: "depreciation-house-hack" },
          { slug: "house-hack-tax-deductions" },
          { slug: "records-for-your-cpa" },
          { slug: "moving-out-tax-changes" },
          { slug: "primary-residence-exclusion" },
          { slug: "capital-gains-explained" },
          { slug: "1031-exchange-basics" },
          { slug: "real-estate-professional-status" },
        ],
      },
    ],
    nextStep: {
      label: "Think about your specific situation →",
      href: "/your-situation",
      description: "How all of this applies changes depending on who you are and where you are in life.",
    },
  },
  {
    id: "your-situation",
    name: "Your Situation & The Long Game",
    eyebrow: "Hub",
    intro: [
      "There's no single house hacker. This hub is for the parts of the decision that depend on who you are and what your life actually looks like — buying with a partner and agreeing on the parts that get messy if you don't talk about them first, doing this with kids in the house, multigenerational setups, making it work on one income, and how the calculus tends to shift by age and life stage.",
      "It's also where the long game lives. The first house hack is the hard one — the second is a different conversation entirely, because now you have a track record, some equity, and a much clearer sense of what you actually want out of the next property. This section covers what a realistic first year looks like month by month, what \"house stacking\" means as you go from one property to two, and — just as importantly — how to know when to stop adding properties rather than treating more as automatically better.",
      "If you're earlier in the process, the other seven hubs will matter more right now. Come back here once you're living it, or once you're starting to think about what comes after the first one.",
    ],
    pillar: "house-stacking",
    sections: [
      {
        heading: "Your situation",
        items: [
          { slug: "house-hacking-with-a-partner" },
          { slug: "house-hacking-with-kids" },
          { slug: "multigenerational-house-hacking" },
          { slug: "house-hacking-one-income" },
          { slug: "house-hacking-by-age" },
        ],
      },
      {
        heading: "The long game",
        items: [
          { slug: "first-year-house-hacking" },
          { slug: "house-stacking" },
          { slug: "one-property-to-two" },
          { slug: "when-to-stop" },
        ],
      },
    ],
    nextStep: {
      label: "Talk it through at a meetup →",
      href: "/meetups",
      description: "Whatever stage you're at, House Hacking Atlanta meets monthly with people at every point in this process.",
    },
  },
];

export function getHub(id: string): Hub | undefined {
  return hubs.find((hub) => hub.id === id);
}

/** All (hubId, articleSlug) pairs, for looking up which hub(s) an article belongs to. */
export function getHubsForArticle(articleSlug: string): Hub[] {
  return hubs.filter((hub) =>
    hub.sections.some((section) =>
      section.items.some((item) => item.slug === articleSlug && item.kind !== "resource")
    )
  );
}
