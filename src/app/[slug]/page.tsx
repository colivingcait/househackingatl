import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import DoorMark from "@/components/DoorMark";
import { getAllArticleMeta, getArticleBySlug } from "@/lib/articles";
import { getHubsForArticle } from "@/data/hubs";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllArticleMeta().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const parentHubs = getHubsForArticle(article.slug);
  const primaryHub = parentHubs[0];

  // Auto-generated "Related" section: other articles from the same hub
  // section(s), per BUILD-SPEC section 5 item 6.
  const related = primaryHub
    ? primaryHub.sections
        .flatMap((section) => section.items)
        .filter((item) => item.kind !== "resource" && item.slug !== article.slug)
        .slice(0, 4)
  : [];
  const relatedMeta = getAllArticleMeta();

  return (
    <>
      <article className="border-b border-pine-100 bg-sage-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <DoorMark className="h-9 w-7 text-clay-400" />
            {primaryHub && (
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-clay-400">
                <Link href={`/${primaryHub.id}`} className="hover:text-clay-300">
                  {primaryHub.name}
                </Link>
              </p>
            )}
            <h1 className="mt-2 font-display text-3xl font-bold text-balance sm:text-5xl">
              {article.h1}
            </h1>
            <p className="mt-6 text-sm text-sage-200">
              By{" "}
              <Link href="/about" className="font-semibold text-clay-400 hover:text-clay-300">
                Caitlyn
              </Link>
            </p>
          </FadeIn>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div
          className="prose prose-pine max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </section>

      {related.length > 0 && (
        <section className="border-t border-pine-100 bg-sage-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">Related</p>
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {related.map((item) => {
                const meta = relatedMeta.find((a) => a.slug === item.slug);
                if (!meta) return null;
                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="font-medium text-pine-800 hover:text-clay-600"
                  >
                    {meta.h1} →
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {primaryHub && (
        <section className="py-12 text-center sm:py-16">
          <Link
            href={`/${primaryHub.id}`}
            className="text-sm font-semibold text-clay-600 hover:text-clay-700"
          >
            ← See the full {primaryHub.name} hub
          </Link>
        </section>
      )}

      <section className="border-t border-pine-100 bg-sage-950 py-16 text-center text-white">
        <FadeIn>
          <DoorMark className="mx-auto h-8 w-6 text-clay-400" />
          <p className="mt-4 font-display text-xl font-semibold">{siteConfig.doorMotif}</p>
        </FadeIn>
      </section>
    </>
  );
}
