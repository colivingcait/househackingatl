import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FadeIn from "@/components/FadeIn";
import { author, links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Caitlyn Verdugo — Atlanta REALTOR®, investor, and serial house hacker, and the sites behind House Hacking Atlanta.",
};

const elsewhere = [
  {
    name: "ColivingCait",
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
      <PageHero eyebrow="Who's behind this" title="About" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {author.photo ? (
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <Image src={author.photo} alt={author.name} fill className="object-cover" />
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
            <p className="mt-3 text-lg text-pine-800">
              I&apos;m Caitlyn, your go-to for all things house hacking. {author.bio}
            </p>
            <p className="mt-3 text-sm text-pine-500">
              Fuller bio coming soon.
            </p>
          </div>
        </FadeIn>

        <div className="mt-6 rounded-xl border border-pine-100 bg-sage-50 p-4 text-xs leading-relaxed text-pine-500">
          {author.name} is a licensed Georgia real estate agent with Keller
          Williams Metro Atlanta. See the site footer for full brokerage
          disclosure.
        </div>
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Elsewhere
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {elsewhere.map((site, i) => (
              <FadeIn key={site.name} delay={i * 0.08} className="group">
                <a
                  href={site.href || "#"}
                  target={site.href ? "_blank" : undefined}
                  rel={site.href ? "noopener noreferrer" : undefined}
                  className="flex h-full flex-col rounded-2xl border border-pine-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <PhotoPlaceholder className="aspect-[4/3] w-full" />
                  <div className="mt-4 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-pine-900">
                        {site.name}
                      </h3>
                      <p className="mt-2 text-sm text-pine-700">{site.description}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600">
                      {site.href ? "Visit site" : "Link coming soon"}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
