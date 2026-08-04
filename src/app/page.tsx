import Link from "next/link";
import Image from "next/image";
import DoorMark from "@/components/DoorMark";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import SponsorGrid from "@/components/SponsorGrid";
import FadeIn from "@/components/FadeIn";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { meetupSchedule } from "@/data/meetups";
import { houseHackModels } from "@/data/models";
import { kit, links, meetup, siteConfig } from "@/lib/site-config";

const stats = [
  { value: meetup.sizeLabel.replace("~", ""), label: "at every meetup" },
  { value: "12", label: "topics a year, no repeats" },
  { value: "4", label: "ways to house hack — see below" },
];

export default function Home() {
  const nextEvent = meetupSchedule[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pine-950 text-white">
        <Image
          src="/images/hero-house.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/85 to-pine-950/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-16 sm:px-6 sm:pb-32 sm:pt-24">
          <FadeIn>
            <DoorMark className="h-12 w-9 text-clay-400" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-xl font-display text-5xl font-bold leading-[1.05] text-balance sm:text-6xl">
              Live for less.
              <br />
              Build more wealth.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-pine-100">
              You live in part of the house. You rent out the rest. Every door
              is an opportunity.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
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
          </FadeIn>
        </div>

        {/* Next meetup — a ticket-style card overlapping the hero edge */}
        <FadeIn
          delay={0.4}
          className="relative mx-4 -mb-16 max-w-sm rounded-2xl bg-white p-6 text-pine-900 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:-mb-20"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
              Next Meetup
            </p>
            <p className="text-xs text-pine-500">{meetup.cadenceLabel}</p>
          </div>
          <p className="mt-2 font-display text-2xl font-bold">{nextEvent.month}</p>
          <p className="text-pine-700">{nextEvent.topic}</p>
          <div className="my-4 border-t border-dashed border-pine-200" />
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-pine-500">
              {meetup.venue.name} · {meetup.sizeLabel}
            </p>
            <CtaButton
              href={nextEvent.eventbriteUrl || meetup.eventbriteOrganizerUrl || "/meetups"}
              variant="primary"
              external={Boolean(nextEvent.eventbriteUrl || meetup.eventbriteOrganizerUrl)}
              className="!px-4 !py-2 !text-xs shrink-0"
            >
              Register
            </CtaButton>
          </div>
        </FadeIn>
      </section>

      {/* Stat strip */}
      <section className="border-b border-pine-100 bg-white pb-10 pt-24 sm:pt-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-pine-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="px-6 py-6 text-center sm:py-0">
              <p className="font-display text-4xl font-bold text-pine-900">{stat.value}</p>
              <p className="mt-1 text-sm text-pine-600">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Four models — photo-topped cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            The idea
          </p>
          <h2 className="mt-2 max-w-lg font-display text-3xl font-bold text-pine-900 sm:text-4xl">
            Four ways to house hack
          </h2>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {houseHackModels.map((model, i) => (
            <FadeIn key={model.name} delay={0.1 + i * 0.08} className="group">
              <Link href="/what-is-house-hacking" className="block">
                <PhotoPlaceholder label={model.name} className="aspect-[4/3] w-full" />
                <p className="mt-3 text-sm text-pine-700">{model.short}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <Link
            href="/what-is-house-hacking"
            className="group mt-8 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
          >
            Read the full breakdown, including how the financing works
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </FadeIn>
      </section>

      {/* House stacking — pull quote instead of another paragraph block */}
      <section className="bg-pine-950 py-20 text-white sm:py-24">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-400">
            The long game
          </p>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-balance sm:text-4xl">
            &ldquo;The first house is hard. The second is a different
            conversation entirely.&rdquo;
          </p>
          <Link
            href="/what-is-house-hacking#house-stacking"
            className="mt-6 inline-block text-sm font-semibold text-clay-400 hover:text-clay-300"
          >
            What house stacking looks like →
          </Link>
        </FadeIn>
      </section>

      {/* Listing alerts */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              Straight to your inbox
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
              Never miss a real candidate
            </h2>
            <p className="mt-3 max-w-sm text-pine-700">
              A metro-wide MLS search built to surface genuine house hack
              opportunities — not just any duplex listing.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <KitSignupForm variant="listing-alerts" formId={kit.listingAlertsFormId} />
          </FadeIn>
        </div>
      </section>

      {/* The group */}
      <section className="bg-pine-50 py-16 sm:py-20">
        <FadeIn className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            Community
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
            The Facebook group
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pine-700">
            Whether you&apos;re buying your first home or your fifth,
            you&apos;re in the right place.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
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
        </FadeIn>
      </section>

      {/* Sponsors */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              With thanks to
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
              Our partners
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SponsorGrid />
          </FadeIn>
        </div>
      </section>

      {/* Sign off */}
      <section className="border-t border-pine-100 bg-pine-950 py-16 text-center text-white">
        <FadeIn>
          <DoorMark className="mx-auto h-8 w-6 text-clay-400" />
          <p className="mt-4 font-display text-xl font-semibold">
            {siteConfig.doorMotif}
          </p>
        </FadeIn>
      </section>
    </>
  );
}
