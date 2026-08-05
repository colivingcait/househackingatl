import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { hubs } from "@/data/hubs";
import { getAllArticleMeta } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/learn",
  title: "Learn",
  description:
    "83 articles on house hacking, organized into 8 topics — finding a property, financing, running the numbers, being a landlord, and more.",
});

export default function LearnPage() {
  const allArticles = getAllArticleMeta();
  const popular = hubs.map((hub) => {
    const meta = allArticles.find((a) => a.slug === hub.pillar)!;
    return { hub, meta };
  });

  const byLetter = new Map<string, typeof allArticles>();
  [...allArticles]
    .sort((a, b) => a.h1.localeCompare(b.h1))
    .forEach((article) => {
      const letter = article.h1[0].toUpperCase();
      if (!byLetter.has(letter)) byLetter.set(letter, []);
      byLetter.get(letter)!.push(article);
    });

  return (
    <>
      <PageHero
        eyebrow="83 articles · 8 topics"
        title="Learn"
        subtitle="Everything we know about house hacking, organized so you can find the part that matters to you right now."
      >
        <form action="/search" className="mt-2 flex max-w-md gap-2">
          <input
            type="search"
            name="q"
            placeholder="Search the library…"
            aria-label="Search articles"
            className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-sage-200 focus:border-clay-300 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-clay-600 px-6 py-3 text-sm font-semibold text-white hover:bg-clay-700"
          >
            Search
          </button>
        </form>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            Browse by topic
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, i) => (
            <FadeIn key={hub.id} delay={i * 0.05}>
              <Link
                href={`/${hub.id}`}
                className="block h-full rounded-2xl border border-pine-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
                  Hub {i + 1}
                </p>
                <h2 className="mt-1 font-display text-lg font-semibold text-pine-900">
                  {hub.name}
                </h2>
                <p className="mt-2 text-sm text-pine-700">{hub.blurb}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Popular</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-pine-900">
              One from each topic
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map(({ hub, meta }, i) => (
              <FadeIn key={hub.id} delay={i * 0.04}>
                <Link
                  href={`/${meta.slug}`}
                  className="block h-full rounded-xl border border-pine-200 bg-white p-4 hover:border-clay-400"
                >
                  <p className="text-xs font-semibold text-clay-600">{hub.name}</p>
                  <p className="mt-1 text-sm font-semibold text-pine-900">{meta.h1}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            Every article, A–Z
          </p>
        </FadeIn>
        <div className="columns-1 gap-x-10 sm:columns-2 lg:columns-3">
          {Array.from(byLetter.entries()).map(([letter, articles]) => (
            <div key={letter} className="mb-6 break-inside-avoid">
              <p className="font-display text-sm font-bold text-clay-600">{letter}</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/${article.slug}`}
                      className="text-sm text-pine-800 hover:text-clay-600"
                    >
                      {article.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
