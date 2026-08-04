import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GatedDownload from "@/components/GatedDownload";
import FadeIn from "@/components/FadeIn";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Free Guides",
  description:
    "Free worksheets and checklists for every stage of house hacking — deciding, running the numbers, touring a property, and screening housemates.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free guides"
        title="Tools for every stage"
        subtitle="From deciding if this is for you to screening your first housemate — free, real, no fluff."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <FadeIn key={resource.slug} delay={i * 0.06}>
              <GatedDownload resource={resource} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
