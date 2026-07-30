import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import { links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "See It In Practice",
  description:
    "A look at what house hacking looks like in practice around the Atlanta metro, courtesy of Rooms for Rent ATL.",
};

// NEEDS CAITLYN: 3–6 photos to feature here. Until then this renders a
// clean placeholder grid rather than broken images. Privacy rule: never
// publish a property address, and never publish location detail more
// specific than "Atlanta metro" for her own properties.
const photoCount = 6;

export default function ListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="See it in practice"
        title="What a house hack actually looks like"
        subtitle="A few real rooms and homes from around the Atlanta metro, curated by Rooms for Rent ATL."
      >
        <div>
          <CtaButton
            href={links.roomsForRentAtl || "#"}
            variant="primary"
            external={Boolean(links.roomsForRentAtl)}
          >
            {links.roomsForRentAtl ? "Visit Rooms for Rent ATL" : "Link coming soon"}
          </CtaButton>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: photoCount }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-pine-300 bg-pine-50 text-xs text-pine-400"
            >
              Photo coming soon
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-pine-500">
          Addresses and identifying location details are never published
          here — Atlanta metro is as specific as it gets.
        </p>
      </section>
    </>
  );
}
