import Link from "next/link";
import DoorMark from "@/components/DoorMark";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import SponsorGrid from "@/components/SponsorGrid";
import { meetupSchedule } from "@/data/meetups";
import { kit, links, meetup, siteConfig } from "@/lib/site-config";

export default function Home() {
  const nextEvent = meetupSchedule[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-pine-900 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <DoorMark className="h-12 w-9 text-clay-400" />
            <h1 className="mt-4 font-display text-4xl font-bold text-balance sm:text-5xl">
              Live for less. Build more wealth.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-pine-100">
              House hacking is living in one part of your property and
              renting out another — a spare bedroom, a basement apartment, an
              ADU, one side of a duplex. Lower your housing cost while
              building wealth, in the same house, at the same time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/meetups" variant="primary">
                Join the Next Meetup
              </CtaButton>
              <CtaButton
                href={links.facebookGroup || "/group"}
                variant="ghost"
                external={Boolean(links.facebookGroup)}
                className="!border-white !text-white hover:!bg-white/10"
              >
                Join the Facebook Group
              </CtaButton>
            </div>
          </div>

          <div className="rounded-2xl border border-pine-700 bg-pine-800/60 p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-400">
              Next Meetup
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              {nextEvent.month}
            </p>
            <p className="mt-1 text-pine-100">{nextEvent.topic}</p>
            <p className="mt-4 text-sm text-pine-300">
              {meetup.cadenceLabel} · {meetup.venue.name} · {meetup.sizeLabel}
            </p>
            <div className="mt-5">
              <CtaButton
                href={nextEvent.eventbriteUrl || meetup.eventbriteOrganizerUrl || "/meetups"}
                variant="primary"
                external={Boolean(nextEvent.eventbriteUrl || meetup.eventbriteOrganizerUrl)}
              >
                Register on Eventbrite
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* What is house hacking, condensed */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-600">
              The idea
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900 sm:text-3xl">
              What is house hacking?
            </h2>
            <div className="mt-4">
              <Link
                href="/what-is-house-hacking"
                className="text-sm font-semibold text-clay-600 hover:text-clay-700"
              >
                Read the full breakdown →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-pine-800">
              A spare bedroom. A converted basement apartment. A backyard ADU.
              Renting your parking pad or backyard to an RV&apos;er. Weekend
              Airbnb&apos;ing. One side of a duplex. All of it counts. For
              most people in this audience the mechanism is owner-occupant
              financing — buying with as little as ~5% down on terms an
              investor could never get, and renting out the extra space.
            </p>
            <p className="mt-4 text-lg text-pine-800">
              And it doesn&apos;t stop at one house.{" "}
              <Link
                href="/what-is-house-hacking#house-stacking"
                className="font-semibold text-clay-600 hover:text-clay-700"
              >
                House stacking
              </Link>{" "}
              is what happens after the first: you house hack, your housing
              cost drops, that gap becomes your savings rate, and a few years
              in you move out, keep it as a rental, and do it again.
            </p>
          </div>
        </div>
      </section>

      {/* Listing alerts */}
      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-600">
              Straight to your inbox
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900 sm:text-3xl">
              Never miss a real house hack candidate
            </h2>
            <p className="mt-4 max-w-md text-pine-800">
              A metro-wide MLS search built specifically to surface genuine
              house hack opportunities — not just any duplex listing.
            </p>
          </div>
          <KitSignupForm variant="listing-alerts" formId={kit.listingAlertsFormId} />
        </div>
      </section>

      {/* The group */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-600">
              Community
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900 sm:text-3xl">
              The Facebook group
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-pine-800">
              Helping people across the Atlanta metro lower their housing
              costs and build wealth through house hacking. Whether
              you&apos;re buying your first home or your fifth, you&apos;re
              in the right place.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton
                href={links.facebookGroup || "/group"}
                variant="primary"
                external={Boolean(links.facebookGroup)}
              >
                Join the Group
              </CtaButton>
              <CtaButton href="/group" variant="ghost">
                See guidelines
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-600">
              With thanks to
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900 sm:text-3xl">
              Our partners
            </h2>
          </div>
          <SponsorGrid />
        </div>
      </section>

      {/* Sign off */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <p className="font-display text-xl font-semibold text-pine-900">
          {siteConfig.doorMotif}
        </p>
      </section>
    </>
  );
}
