import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import { houseHackModels } from "@/data/models";
import { kit } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "What Is House Hacking",
  description:
    "House hacking is living in one part of your property and renting out another — real models, owner-occupant financing, and how to run the numbers. Atlanta metro.",
};

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

      {/* Four models — editorial numbered list, not another card grid */}
      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Four ways to house hack
          </h2>
          <div className="mt-8 divide-y divide-pine-200 border-t border-pine-200">
            {houseHackModels.map((model, i) => (
              <div key={model.name} className="flex gap-6 py-6 sm:gap-10">
                <span className="font-display text-2xl font-medium text-clay-500 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-pine-900">
                    {model.name}
                  </h3>
                  <p className="mt-1 text-sm text-pine-700">{model.description}</p>
                </div>
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
      <section id="house-stacking" className="bg-sage-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-400">
            The long game
          </p>
          <p className="mt-4 text-lg text-pine-100">
            House stacking is what happens after the first one. You house
            hack a property, your housing cost drops, and that gap becomes
            your savings rate. A few years in, you move out, keep it as a
            rental, and do it again.
          </p>
          <p className="mt-8 font-display text-3xl font-medium leading-snug text-balance sm:text-4xl">
            &ldquo;The first house is hard. The second is a different
            conversation entirely.&rdquo;
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
