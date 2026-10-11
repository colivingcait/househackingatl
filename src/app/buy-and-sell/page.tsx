import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import StatsStrip from "@/components/StatsStrip";
import { cta, links } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/buy-and-sell",
  title: "Buy & Sell a House Hack in Atlanta",
  description:
    "Work with Caitlyn Verdugo, an Atlanta house-hacking REALTOR® at Keller Williams Realty Metro Atlanta, to buy or sell a home that can pay you back.",
});

export default function BuyAndSellPage() {
  return (
    <>
      <PageHero
        eyebrow="Realtor · Investor · Coach"
        title="Buy or sell a house hack in Atlanta"
        subtitle="Caitlyn Verdugo helps people buy and sell homes that can cover their housing cost — rent-by-the-room, a basement, a duplex, or an ADU. Most of that work is in metro Atlanta, including Decatur and East Atlanta."
      >
        <div>
          <CtaButton href={links.book} variant="primary" external>
            {cta.book}
          </CtaButton>
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900">What working together looks like</h2>
        <div className="mt-4 flex flex-col gap-4 text-pine-800">
          <p>
            She runs the numbers the way an investor would, then helps you find a property that fits how you actually want to live. If you already own and you&apos;re ready to sell, she handles that too.
          </p>
          <p>
            Buyer-agent fees are discussed one-on-one on the call. Nothing on this page is a quote or a promise of a result.
          </p>
        </div>
        <div className="mt-8">
          <CtaButton href={links.book} variant="primary" external>
            {cta.book}
          </CtaButton>
        </div>
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StatsStrip />
        </div>
      </section>
    </>
  );
}
