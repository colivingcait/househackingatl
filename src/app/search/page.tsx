import Link from "next/link";
import Fuse from "fuse.js";
import PageHero from "@/components/PageHero";
import { getSearchIndex } from "@/lib/search";
import { hubs } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/search",
  title: "Search",
  description: "Search 83 articles on house hacking in the Atlanta metro.",
  noIndex: true,
});

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = (searchParams.q || "").trim();
  const index = getSearchIndex();
  const fuse = new Fuse(index, {
    keys: [
      { name: "title", weight: 2 },
      { name: "description", weight: 1 },
      { name: "keywords", weight: 1 },
    ],
    threshold: 0.35,
    minMatchCharLength: 2,
  });
  const results = query.length >= 2 ? fuse.search(query).map((r) => r.item) : [];

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={query ? `Results for "${query}"` : "Search the library"}
        subtitle="83 articles across 8 topics — screening housemates, running the numbers, taxes, and more."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <form action="/search" className="flex gap-2">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search the library…"
            aria-label="Search articles"
            className="w-full rounded-full border border-pine-200 bg-sage-50 px-5 py-3 text-sm text-pine-900 placeholder:text-pine-400 focus:border-clay-400 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-clay-600 px-6 py-3 text-sm font-semibold text-white hover:bg-clay-700"
          >
            Search
          </button>
        </form>

        {query.length >= 2 && results.length > 0 && (
          <div className="mt-10 flex flex-col divide-y divide-pine-100">
            {results.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group py-5">
                {item.hubName && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
                    {item.hubName}
                  </p>
                )}
                <p className="mt-1 font-display text-lg font-semibold text-pine-900 group-hover:text-clay-600">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-pine-700">{item.description}</p>
              </Link>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <p className="mt-10 text-pine-700">
            No matches for &ldquo;{query}&rdquo;. Try a different word, or browse by topic below.
          </p>
        )}

        {(query.length < 2 || results.length === 0) && (
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              Browse by topic instead
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {hubs.map((hub) => (
                <Link
                  key={hub.id}
                  href={`/${hub.id}`}
                  className="rounded-xl border border-pine-200 px-4 py-3 text-sm font-medium text-pine-800 hover:border-clay-400 hover:text-clay-600"
                >
                  {hub.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
