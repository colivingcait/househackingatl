import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CtaButton from "@/components/CtaButton";
import DoorMark from "@/components/DoorMark";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { buyFaqs } from "@/data/buy-faqs";
import { zillowReviews } from "@/data/testimonials";
import { pageMetadata } from "@/lib/metadata";
import { author, cta, links } from "@/lib/site-config";
import { breadcrumbListSchema, buyAndSellPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  path: "/buy-and-sell",
  title: "Buy or Sell a House Hack in Atlanta",
  description:
    "Caitlyn Verdugo, REALTOR® with Keller Williams Realty Metro Atlanta, helps buyers find house hacking deals, run the numbers, and buy or sell a primary residence or an investment property.",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Buy & Sell" },
];

export default function BuyAndSellPage() {
  return (
    <>
      <JsonLd data={buyAndSellPageSchema()} />
      <JsonLd data={breadcrumbListSchema(breadcrumbItems)} />

      <section className="relative overflow-hidden bg-sage-950 text-white">
        <Image
          src="/images/hero-house.jpg"
          alt=""
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 62%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(23,24,16,0.92), rgba(36,38,30,0.88) 55%, rgba(36,38,30,0.75))",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb items={breadcrumbItems} variant="dark" />
          <DoorMark className="h-10 w-8 text-clay-400" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80 sm:h-32 sm:w-32">
              <Image
                src={author.photo}
                alt="Caitlyn Verdugo"
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
            <div style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay-300">
                REALTOR® · Keller Williams Realty Metro Atlanta
              </p>
              <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold text-balance sm:text-5xl">
                Buy or sell a house hack in Atlanta
              </h1>
              <p className="mt-4 max-w-xl text-base text-sage-100 sm:text-lg">
                Caitlyn Verdugo, REALTOR® with Keller Williams Realty Metro Atlanta, helps buyers identify good house hacking deals, run the numbers, and buy a primary residence or an investment property.
              </p>
            </div>
          </div>
          <div>
            <CtaButton href={links.book} variant="primary" external>
              {cta.book}
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">How I help</h2>
        <div className="mt-4 flex flex-col gap-4 text-pine-800">
          <p>
            I help buyers find house hacking deals in metro Atlanta: a home where you live in one part and rent the rest.
          </p>
          <p>
            I run the numbers before you get attached to a house. That means the rent offset, what rooms might rent for, whether a basement or ADU could add income, and what cash flow looks like after the main costs.
          </p>
          <p>
            I also help you buy a primary residence or an investment property, and I help when it is time to sell. I started as an investor with a basement conversion. House hacking is the live-in model. Coliving is a different one, and I can help with that too when you are ready.
          </p>
        </div>
        <div className="mt-8">
          <CtaButton href={links.book} variant="primary" external>
            {cta.book}
          </CtaButton>
        </div>
      </section>

      <section className="border-t border-pine-100 py-10">
        <p className="mx-auto max-w-3xl px-4 text-pine-800 sm:px-6">
          <a
            href={zillowReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800"
          >
            {zillowReviews.label}
          </a>
        </p>
      </section>

      <FaqSection items={buyFaqs} title="Working with a house-hacking Realtor in Atlanta" />
    </>
  );
}
