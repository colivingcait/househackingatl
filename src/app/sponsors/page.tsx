import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import SponsorGrid from "@/components/SponsorGrid";
import SponsorInquiryForm from "@/components/SponsorInquiryForm";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  path: "/sponsors",
  title: "Local Pros",
  description:
    "Lenders, insurance agents, and other local pros who speak at the House Hacking Atlanta meetup — a directory, not a recommendation.",
});

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Local Pros" }];

export default function SponsorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbItems)} />

      <PageHero
        eyebrow="Find a local pro"
        title="Local Pros"
        subtitle="Lenders, insurance agents, and other specialists who show up at the meetup and talk shop — start here if you need to make an introduction."
        breadcrumb={<Breadcrumb variant="dark" items={breadcrumbItems} />}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <SponsorGrid />

        <p className="mt-10 rounded-xl border border-pine-100 bg-sage-50 p-4 text-xs leading-relaxed text-pine-500">
          These are meetup speakers and advertisers, not personally vetted or endorsed
          recommendations — House Hacking Atlanta doesn&apos;t receive referral compensation for
          any introduction made here. Do your own due diligence before choosing who to work with,
          same as you would with anyone else.
        </p>
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6" id="become-a-sponsor">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            For local businesses
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">
            Want to reach this audience?
          </h2>
          <p className="mt-2 text-pine-700">
            A handful of speaking slots open up each year for lenders, insurance agents, and other
            specialists relevant to house hackers. Send a note and we&apos;ll follow up.
          </p>
          <div className="mt-6">
            <SponsorInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
