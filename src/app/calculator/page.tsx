import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import HousingCostCalculator from "@/components/HousingCostCalculator";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbListSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  path: "/calculator",
  title: "Effective Housing Cost Calculator",
  description:
    "Estimate the real monthly cost of a house hack — cost to own minus expected rental income, by rental strategy.",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Running the Numbers", href: "/running-the-numbers" },
  { label: "Calculator" },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbItems)} />

      <PageHero
        eyebrow="Run the numbers"
        title="Effective Housing Cost Calculator"
        subtitle="Cost to own, minus what you expect to collect in rent. The number that actually tells you whether a house hack works."
        breadcrumb={<Breadcrumb variant="dark" items={breadcrumbItems} />}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <HousingCostCalculator />
      </section>
    </>
  );
}
