import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FadeIn from "@/components/FadeIn";
import { links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "See It In Practice",
  description:
    "A look at what house hacking looks like in practice around the Atlanta metro, courtesy of Rooms for Rent ATL.",
};

// NEEDS CAITLYN: more photos to round this out — 4 of 6 tiles are real,
// the rest are placeholders sized to drop photos in without a layout
// change. Privacy rule: never publish a property address, and never
// publish location detail more specific than "Atlanta metro" for her own
// properties.
const tiles = [
  { label: "Rent by the room", span: "sm:row-span-2", image: "/images/models/rent-by-the-room.jpg" },
  { label: "Basement conversion", span: "", image: "/images/models/basement-conversion.jpg" },
  { label: "Backyard ADU", span: "", image: "/images/models/adu-detached-unit.jpg" },
  { label: "Small multifamily", span: "sm:row-span-2", image: "/images/hero-house.jpg" },
  { label: "Shared common space", span: "" },
  { label: "One side of a duplex", span: "" },
];

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

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:auto-rows-[12rem] sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <FadeIn key={tile.label} delay={i * 0.05} className={`group ${tile.span}`}>
              {tile.image ? (
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={tile.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-pine-700 backdrop-blur">
                    {tile.label}
                  </span>
                </div>
              ) : (
                <PhotoPlaceholder label={tile.label} className="h-full w-full" />
              )}
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
