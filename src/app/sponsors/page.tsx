import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SponsorGrid from "@/components/SponsorGrid";
import SponsorInquiryForm from "@/components/SponsorInquiryForm";
import { sponsorTiers } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Advertising and marketing opportunities with House Hacking Atlanta — Anchor Partner and Event Sponsor tiers.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advertising & marketing"
        title="Sponsors"
        subtitle="Reach a room of engaged Atlanta house hackers every month — logo placement, email inclusion, and speaking time."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
          Current partners
        </h2>
        <div className="mt-8">
          <SponsorGrid />
        </div>
      </section>

      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Sponsorship tiers
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-pine-200 bg-white p-8"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-600">
                  {tier.cadence}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-pine-900">
                  {tier.name}
                </h3>
                <p className="mt-1 font-display text-lg font-semibold text-pine-700">
                  {tier.priceLabel}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-pine-800">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                {tier.categoriesNote && (
                  <p className="mt-5 text-xs text-pine-500">{tier.categoriesNote}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-pine-500">
            Sponsorship is advertising and marketing — logo placement, email
            inclusion, and speaking time. Sponsors are never labeled
            &ldquo;preferred&rdquo; or &ldquo;recommended,&rdquo; and the
            attendee list is never shared as part of any sponsorship.
          </p>
        </div>
      </section>

      <section id="become-a-sponsor" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
          Become a sponsor
        </h2>
        <p className="mt-3 text-pine-700">
          Tell us a bit about you and we&apos;ll follow up to talk details.
        </p>
        <div className="mt-8">
          <SponsorInquiryForm />
        </div>
      </section>
    </>
  );
}
