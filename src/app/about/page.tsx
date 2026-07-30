import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import { links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Caitlyn — Atlanta-based realtor, investor, and serial house hacker, and the sites behind House Hacking Atlanta.",
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
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* NEEDS CAITLYN: headshot */}
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed border-pine-300 bg-pine-50 text-xs text-pine-400">
            Headshot
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-pine-900">Caitlyn</h2>
            <p className="mt-3 text-lg text-pine-800">
              I&apos;m Caitlyn, your go-to for all things house hacking.
              Atlanta-based realtor, investor, and serial house hacker.
            </p>
            <p className="mt-3 text-sm text-pine-500">
              Fuller bio coming soon.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-pine-100 bg-pine-50 p-4 text-xs leading-relaxed text-pine-500">
          Caitlyn is a licensed Georgia real estate agent with Keller
          Williams. See the site footer for full brokerage disclosure.
        </div>
      </section>

      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Elsewhere
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {elsewhere.map((site) => (
              <div
                key={site.name}
                className="flex flex-col justify-between rounded-2xl border border-pine-200 bg-white p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-pine-900">
                    {site.name}
                  </h3>
                  <p className="mt-2 text-sm text-pine-700">{site.description}</p>
                </div>
                <div className="mt-5">
                  <CtaButton
                    href={site.href || "#"}
                    variant="ghost"
                    external={Boolean(site.href)}
                    className="!px-4 !py-2 !text-xs"
                  >
                    {site.href ? "Visit site" : "Link coming soon"}
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
