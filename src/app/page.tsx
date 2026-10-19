import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import FadeIn from "@/components/FadeIn";
import FaqSection from "@/components/FaqSection";
import { houseHackModels } from "@/data/models";
import { meetupSchedule } from "@/data/meetups";
import { author, cta, links, meetup, siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
import { isUpcomingMeetup } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: siteConfig.homeTitle,
  description: siteConfig.homeDescription,
  absoluteTitle: true,
});

const cardClass =
  "flex h-full flex-col rounded-2xl border border-pine-200 bg-white p-6 transition-shadow hover:shadow-md";

export default function Home() {
  const nextMeetup = meetupSchedule.find((event) => isUpcomingMeetup(event.month));

  return (
    <>
      <section className="relative overflow-hidden bg-sage-950 text-white">
        <Image
          src="/images/hero-house.jpg"
          alt=""
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 62%" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-sage-700/70 via-sage-600/40 to-sage-500/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
          <FadeIn>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] text-balance sm:text-5xl">
              Live for less in Atlanta by renting out part of your home.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-sage-100">
              Learn house hacking with Atlanta house hacking Realtor and agent Caitlyn Verdugo of Keller Williams, plus free monthly meetups and a community of local investors.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
                <Image
                  src={author.photo}
                  alt="Caitlyn Verdugo"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <p className="max-w-xl text-base font-semibold text-white sm:text-lg">
                Caitlyn Verdugo · Realtor (KW) · Investor · Coach · 6+ years ·{" "}
                <a
                  href={links.zillow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/40 underline-offset-2 hover:text-clay-100"
                >
                  5.0★ Zillow
                </a>
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-9">
              <CtaButton href={links.book} variant="primary" external>
                {cta.bookHero}
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FadeIn>
            <Link href="/meetups" className={cardClass}>
              <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">Show up</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">Meetups</h2>
              <p className="mt-3 flex-1 text-pine-700">
                Free monthly House Hacking Atlanta meetup. One topic, one guest speaker, and time to talk.
              </p>
              <span className="mt-4 text-sm font-semibold text-clay-600">See the meetup →</span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link href="/buy-and-sell" className={cardClass}>
              <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">Work together</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">Buy &amp; Sell</h2>
              <p className="mt-3 flex-1 text-pine-700">
                An investor-forward REALTOR® for buying or selling a house hack in metro Atlanta, including Decatur and East Atlanta.
              </p>
              <span className="mt-4 text-sm font-semibold text-clay-600">Buy &amp; sell →</span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.16}>
            <Link href="/learn" className={cardClass}>
              <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">Read first</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">Learn</h2>
              <p className="mt-3 flex-1 text-pine-700">
                What house hacking is, 83 guides, and a calculator you can run before you talk to anyone.
              </p>
              <span className="mt-4 text-sm font-semibold text-clay-600">Start learning →</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">The idea</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold text-pine-900 sm:text-4xl">
            Four ways to house hack
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-pine-800">
            You live in one part of a property and rent out the rest, so the rent covers most of your housing cost. Four common setups in Atlanta:
          </p>
        </FadeIn>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {houseHackModels.map((model) => (
            <li key={model.name} className="overflow-hidden rounded-2xl border border-pine-200 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={model.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-semibold text-pine-900">{model.name}</p>
                <p className="mt-2 text-sm text-pine-700">{model.short}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/what-is-house-hacking"
          className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
        >
          Read the full explanation →
        </Link>
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Community</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">Next meetup</h2>
            {nextMeetup ? (
              <p className="mt-3 text-pine-800">
                <span className="font-semibold text-pine-900">{nextMeetup.month}</span>
                {" · "}
                {nextMeetup.topic}. {meetup.cadenceLabel}, 6:30–9 PM at {meetup.venue.name}
              </p>
            ) : (
              <p className="mt-3 text-pine-800">
                {meetup.cadenceLabel}, 6:30–9 PM at {meetup.venue.name}
              </p>
            )}
            <div className="mt-6">
              <CtaButton href={meetup.eventbriteCollectionUrl} variant="primary" external>
                {cta.register}
              </CtaButton>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Online</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">Facebook group</h2>
            <p className="mt-3 text-pine-800">
              Real numbers from Atlanta-area deals, between meetups. Whether you&apos;re buying your first home or your fifth, you&apos;re in the right place.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton href={links.facebookGroup} variant="primary" external>
                {cta.group}
              </CtaButton>
              <CtaButton href="/group" variant="ghost">
                See guidelines
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <section id="get-listings" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Listings</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">{cta.listings}</h2>
            <p className="mt-3 max-w-sm text-pine-700">
              A metro-wide search for genuine house hack candidates, sent when they hit the market.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <KitSignupForm variant="listing-alerts" />
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-pine-100 py-10">
        <p className="mx-auto max-w-3xl px-4 text-center text-sm text-pine-700 sm:px-6">
          Want an agent who house hacks?{" "}
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800"
          >
            {cta.book}
          </a>
        </p>
      </section>
    </>
  );
}
