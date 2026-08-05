import Link from "next/link";
import Image from "next/image";
import DoorMark from "@/components/DoorMark";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import FadeIn from "@/components/FadeIn";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { houseHackModels } from "@/data/models";
import { resources } from "@/data/resources";
import { hubs } from "@/data/hubs";
import { getAllPosts } from "@/lib/blog";
import { kit, links, siteConfig } from "@/lib/site-config";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sage-950 text-white">
        <Image
          src="/images/hero-house.jpg"
          alt=""
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 62%" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-sage-700/70 via-sage-600/40 to-sage-500/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
          <FadeIn>
            <DoorMark className="h-12 w-9 text-clay-400" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-6 max-w-xl font-display text-5xl font-bold leading-[1.05] text-balance sm:text-6xl">
              Live for less.
              <br />
              Build more wealth.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-sage-100">
              You live in part of the house. You rent out the rest. Every door
              is an opportunity.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaButton
                href={kit.listingAlertsFormId ? "#get-listings" : "/learn"}
                variant="primary"
              >
                {kit.listingAlertsFormId ? "Get New House Hack Listings" : "Browse the Library"}
              </CtaButton>
              <CtaButton
                href={links.facebookGroup || "/group"}
                variant="ghost"
                external={Boolean(links.facebookGroup)}
                className="!border-white !text-white hover:!bg-white/10"
              >
                Join the Facebook Group
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Listing alerts — the primary conversion goal, right up top. Hidden
          entirely (not just the form) until a real Kit form ID is set —
          a headline promising a signup with no way to sign up is its own
          broken-feature problem. */}
      {kit.listingAlertsFormId && (
        <section id="get-listings" className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
                Straight to your inbox
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
                Never miss a real candidate
              </h2>
              <p className="mt-3 max-w-sm text-pine-700">
                A metro-wide MLS search built to surface genuine house hack
                opportunities — not just any duplex listing.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <KitSignupForm variant="listing-alerts" formId={kit.listingAlertsFormId} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Four models — photo-topped cards */}
      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              The idea
            </p>
            <h2 className="mt-2 max-w-lg font-display text-3xl font-bold text-pine-900 sm:text-4xl">
              Four ways to house hack
            </h2>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {houseHackModels.map((model, i) => (
              <FadeIn key={model.name} delay={0.1 + i * 0.08} className="group">
                <Link href={model.href} className="block">
                  {model.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={model.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-pine-700 backdrop-blur">
                        {model.name}
                      </span>
                    </div>
                  ) : (
                    <PhotoPlaceholder label={model.name} className="aspect-[4/3] w-full" />
                  )}
                  <p className="mt-3 text-sm text-pine-700">{model.short}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <Link
              href="/what-is-house-hacking"
              className="group mt-8 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
            >
              Read the full breakdown, including how the financing works
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* The library — 8 hub cards, the entry point into all 83 articles */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              Learn
            </p>
            <h2 className="mt-2 max-w-lg font-display text-3xl font-bold text-pine-900 sm:text-4xl">
              Everything we know, organized by topic
            </h2>
          </div>
          <Link
            href="/learn"
            className="hidden text-sm font-semibold text-clay-600 hover:text-clay-700 sm:block"
          >
            See the full library →
          </Link>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, i) => (
            <FadeIn key={hub.id} delay={0.1 + i * 0.05}>
              <Link
                href={`/${hub.id}`}
                className="block h-full rounded-2xl border border-pine-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-base font-semibold text-pine-900">
                  {hub.name}
                </h3>
                <p className="mt-2 text-sm text-pine-700">{hub.blurb}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <Link
          href="/learn"
          className="mt-8 inline-block text-sm font-semibold text-clay-600 hover:text-clay-700 sm:hidden"
        >
          See the full library →
        </Link>
      </section>

      {/* Free guides teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              Free guides
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
              Worksheets & checklists
            </h2>
          </div>
          <Link
            href="/resources"
            className="hidden text-sm font-semibold text-clay-600 hover:text-clay-700 sm:block"
          >
            See all guides →
          </Link>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {resources.slice(0, 3).map((resource, i) => (
            <FadeIn key={resource.slug} delay={0.1 + i * 0.08}>
              <Link
                href="/resources"
                className="block rounded-2xl border border-pine-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
                  {resource.stage}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-pine-900">
                  {resource.title}
                </p>
                <p className="mt-2 text-sm text-pine-700">{resource.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
        <Link
          href="/resources"
          className="mt-8 inline-block text-sm font-semibold text-clay-600 hover:text-clay-700 sm:hidden"
        >
          See all guides →
        </Link>
      </section>

      {/* House stacking — pull quote instead of another paragraph block */}
      <section className="bg-sage-950 py-20 text-white sm:py-24">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-400">
            The long game
          </p>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-balance sm:text-4xl">
            &ldquo;The first house is hard. The second is a different
            conversation entirely.&rdquo;
          </p>
          <Link
            href="/house-stacking"
            className="mt-6 inline-block text-sm font-semibold text-clay-400 hover:text-clay-300"
          >
            What house stacking looks like →
          </Link>
        </FadeIn>
      </section>

      {/* Latest from the blog */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
                From the blog
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
                Latest posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-clay-600 hover:text-clay-700 sm:block"
            >
              View all →
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {latestPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={0.1 + i * 0.08} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.coverImage ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <PhotoPlaceholder label={post.title} className="aspect-[4/3] w-full" />
                  )}
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-clay-600">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-pine-900">{post.title}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Community — Facebook group is the lead CTA; the meetup is a modest mention, not a front-page draw */}
      <section className="bg-sage-50 py-16 sm:py-20">
        <FadeIn className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            Community
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-pine-900">
            The Facebook group
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pine-700">
            Whether you&apos;re buying your first home or your fifth,
            you&apos;re in the right place.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <CtaButton
              href={links.facebookGroup || "/group"}
              variant="primary"
              external={Boolean(links.facebookGroup)}
            >
              Join the Group
            </CtaButton>
            <CtaButton href="/group" variant="ghost">
              See guidelines
            </CtaButton>
          </div>
          <p className="mx-auto mt-8 max-w-lg border-t border-pine-200 pt-6 text-sm text-pine-600">
            Want to meet other investors and connect with local lending,
            insurance, and inspection professionals in person?{" "}
            <Link href="/meetups" className="font-semibold text-clay-600 hover:text-clay-700">
              See the monthly meetup →
            </Link>
          </p>
        </FadeIn>
      </section>

      {/* Sign off */}
      <section className="border-t border-pine-100 bg-sage-950 py-16 text-center text-white">
        <FadeIn>
          <DoorMark className="mx-auto h-8 w-6 text-clay-400" />
          <p className="mt-4 font-display text-xl font-semibold">
            {siteConfig.doorMotif}
          </p>
        </FadeIn>
      </section>
    </>
  );
}
