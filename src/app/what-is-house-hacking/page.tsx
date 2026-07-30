import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import { kit } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What Is House Hacking",
  description:
    "House hacking is living in one part of your property and renting out another — real models, owner-occupant financing, and how to run the numbers. Atlanta metro.",
};

const models = [
  {
    name: "Rent by the room",
    description:
      "You live in one bedroom of the house and rent the others, individually, to roommates. The most accessible model — works in almost any single-family home with spare bedrooms.",
  },
  {
    name: "Basement or in-law conversion",
    description:
      "A finished basement or separate suite becomes a self-contained rental with its own entrance, while you live in the rest of the house.",
  },
  {
    name: "Small multifamily (2–4 units)",
    description:
      "You buy a duplex, triplex, or fourplex, live in one unit, and rent the others. Owner-occupant financing still applies up to four units — this is the classic house hack.",
  },
  {
    name: "ADU / detached unit",
    description:
      "A backyard cottage, garage conversion, or accessory dwelling unit becomes a separate rental — or becomes your own unit while you rent out the main house.",
  },
];

export default function WhatIsHouseHackingPage() {
  return (
    <>
      <PageHero
        eyebrow="The education page"
        title="What is house hacking?"
        subtitle="Living in one part of your property and renting out another. Here's what that actually looks like, and how the financing works."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-lg text-pine-800">
          House hacking is living in one part of your property and renting
          out another. A spare bedroom. A converted basement apartment. A
          backyard ADU. Renting your parking pad or backyard to an
          RV&apos;er. Weekend Airbnb&apos;ing. One side of a duplex. All of
          it counts.
        </p>
        <p className="mt-4 text-lg text-pine-800">
          The core promise: lower your housing costs while building wealth,
          in the same house, at the same time. For most people in this
          audience the mechanism is owner-occupant financing — they&apos;re
          buying with around 5% down, on terms an investor could never get,
          and renting out the extra space.
        </p>
        <p className="mt-4 text-pine-700">
          One note on language: house hacking is not the same thing as{" "}
          <span className="lowercase">coliving</span>. Coliving is a related
          but more advanced model, and it&apos;s not what most people
          reading this are doing on their first property.
        </p>
      </section>

      {/* Four models */}
      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Four ways to house hack
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {models.map((model) => (
              <div
                key={model.name}
                className="rounded-2xl border border-pine-200 bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-pine-900">
                  {model.name}
                </h3>
                <p className="mt-2 text-sm text-pine-700">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
          How owner-occupant financing works
        </h2>
        <p className="mt-4 text-pine-800">
          Because you&apos;re planning to live in the home, you qualify for
          loan programs built for owner-occupants rather than investors —
          often with down payments as low as ~3–5%, versus the 15–25% (or
          more) an investor would need to put down on the same property.
          Lenders also let you count a portion of the expected rental income
          toward qualifying, in some cases. The exact numbers depend on the
          loan program and your lender — this is a topic we cover in depth
          at the monthly meetup.
        </p>
        <div className="mt-6">
          <CtaButton href="/meetups" variant="primary">
            See the meetup schedule
          </CtaButton>
        </div>
      </section>

      {/* House stacking */}
      <section id="house-stacking" className="bg-pine-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-400">
            The long game
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            House stacking
          </h2>
          <p className="mt-5 text-lg text-pine-100">
            House stacking is what happens after the first one. You house
            hack a property, your housing cost drops, and that gap becomes
            your savings rate. A few years in, you move out, keep it as a
            rental, and do it again.
          </p>
          <p className="mt-4 text-lg text-pine-100">
            The first house is hard. The second is a different conversation
            entirely.
          </p>
        </div>
      </section>

      {/* Listing alerts CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <KitSignupForm variant="listing-alerts" formId={kit.listingAlertsFormId} />
        </div>
      </section>
    </>
  );
}
