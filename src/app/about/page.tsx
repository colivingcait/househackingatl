import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import TestimonialsStrip from "@/components/TestimonialsStrip";
import { author, contact, links } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Caitlyn Verdugo — Atlanta House Hacking Realtor",
  description:
    "Caitlyn Verdugo is an Atlanta house hacking REALTOR® with Keller Williams Realty Metro Atlanta. She hosts the monthly meetup and writes the guide library.",
  absoluteTitle: true,
});

const elsewhere = [
  {
    name: "Coliving Cait",
    description: "Coliving-focused content and community — the more advanced model, for when you're ready.",
    href: links.colivingCait,
  },
  {
    name: "Atlanta Women Investors",
    description: "A women-only investing community and meetup, fourth Tuesdays.",
    href: links.atlantaWomenInvestors,
  },
  {
    name: "Rooms for Rent ATL",
    description: "Rooms and homes available now around the Atlanta metro.",
    href: links.roomsForRentAtl,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who's behind this" title="About Caitlyn Verdugo" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {author.photo ? (
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <Image src={author.photo} alt={author.name} fill sizes="112px" className="object-cover object-top" />
            </div>
          ) : (
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed border-sage-300 bg-sage-50 text-xs text-pine-400">
              Headshot
            </div>
          )}
          <div>
            <h2 className="font-display text-2xl font-bold text-pine-900">{author.name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-clay-600">
              {author.credential}
            </p>
            <p className="mt-3 text-lg text-pine-800">{author.bio}</p>
            <p className="mt-3 text-sm text-pine-700">
              <a href={contact.phoneHref} className="font-semibold text-clay-700 hover:text-clay-800">
                {contact.phoneDisplay}
              </a>
              {" · "}
              <a href={contact.emailHref} className="font-semibold text-clay-700 hover:text-clay-800">
                {contact.email}
              </a>
            </p>
            <div className="mt-5">
              <CtaButton href={links.book} variant="primary" external>
                Book a discovery call
              </CtaButton>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 flex flex-col gap-4">
          {author.fullBio.map((paragraph, i) => (
            <p key={i} className="text-pine-800">
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <div className="mt-6 rounded-xl border border-pine-100 bg-sage-50 p-4 text-xs leading-relaxed text-pine-500">
          {author.name} is a licensed Georgia real estate agent with Keller
          Williams Metro Atlanta. See the site footer for full brokerage
          disclosure.
        </div>
      </section>

      <TestimonialsStrip />

      <section className="border-t border-pine-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Elsewhere
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {elsewhere
              .filter((site) => site.href)
              .map((site, i) => (
              <FadeIn key={site.name} delay={i * 0.08} className="group">
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-pine-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-semibold text-pine-900">
                    {site.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-pine-700">{site.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600">
                    Visit site
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
