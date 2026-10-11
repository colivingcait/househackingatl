import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { author, cta, links, meetup, womensGroup } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/about",
  title: "About House Hacking Atlanta",
  description:
    "House Hacking Atlanta is a free monthly meetup and guide library for people who want to live for less by renting out part of a home in metro Atlanta.",
});

const places = [
  {
    name: "Monthly meetup",
    description: `${meetup.cadenceLabel}, 6:30–9 PM at ${meetup.venue.name} One topic, one guest speaker, and time to ask questions.`,
    href: "/meetups",
    external: false,
  },
  {
    name: "Facebook group",
    description: "Real numbers from Atlanta-area deals, between meetups.",
    href: links.facebookGroup,
    external: true,
  },
  {
    name: "Guides",
    description: "83 articles on finding a property, financing, the numbers, and running the home.",
    href: "/learn",
    external: false,
  },
  {
    name: womensGroup.name,
    description: `A related, women-only meetup, ${womensGroup.cadenceLabel.toLowerCase()}.`,
    href: womensGroup.url,
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The meetup and the library"
        title="About House Hacking Atlanta"
        subtitle="A free monthly meetup and a guide library for people in metro Atlanta who want their housing cost covered by rent from the same property."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900">What this is</h2>
        <div className="mt-4 flex flex-col gap-4 text-pine-800">
          <p>
            House hacking is living in one part of a home and renting out the rest. This site is the practical version of that idea: how the models work, how to run the numbers, and a room where people compare notes.
          </p>
          <p>
            The meetup is the second Tuesday of every month. The guides stay up so you can read before you come. The Facebook group is where the conversation continues.
          </p>
        </div>
        <div className="mt-8">
          <CtaButton href="/meetups" variant="primary">
            {cta.nextMeetup}
          </CtaButton>
        </div>
      </section>

      <section className="border-t border-pine-100 bg-sage-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 sm:py-16">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
            <Image src={author.photo} alt="Caitlyn Verdugo" fill sizes="112px" className="object-cover object-top" />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Founder and host</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">Caitlyn Verdugo, REALTOR®</h2>
            <p className="mt-3 text-pine-800">{author.hostBio}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">Where to go next</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {places.map((place, i) => (
            <FadeIn key={place.name} delay={i * 0.06}>
              {place.external ? (
                <a
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl border border-pine-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-semibold text-pine-900">{place.name}</h3>
                  <p className="mt-2 text-sm text-pine-700">{place.description}</p>
                </a>
              ) : (
                <Link
                  href={place.href}
                  className="block h-full rounded-2xl border border-pine-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-semibold text-pine-900">{place.name}</h3>
                  <p className="mt-2 text-sm text-pine-700">{place.description}</p>
                </Link>
              )}
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
