import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import ConversionCta from "@/components/ConversionCta";
import { TableOfContentsMobile, TableOfContentsDesktop } from "@/components/TableOfContents";
import { getAllArticleMeta, getArticleBySlug } from "@/lib/articles";
import { getHubsForArticle } from "@/data/hubs";
import { resources } from "@/data/resources";

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

/**
 * Splits an HTML string at the </p> closest to the midpoint, so an inline
 * lead-magnet card can sit mid-article rather than bolted to the top or
 * bottom. Falls back to putting everything in the first half if there's no
 * paragraph break to split on.
 */
function splitHtmlAtMidpoint(html: string): [string, string] {
  const target = html.length / 2;
  let bestIndex = -1;
  let bestDistance = Infinity;
  const closeTag = "</p>";
  let searchFrom = 0;
  for (;;) {
    const idx = html.indexOf(closeTag, searchFrom);
    if (idx === -1) break;
    const endOfTag = idx + closeTag.length;
    const distance = Math.abs(endOfTag - target);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = endOfTag;
    }
    searchFrom = endOfTag;
  }
  if (bestIndex === -1) return [html, ""];
  return [html.slice(0, bestIndex), html.slice(bestIndex)];
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

  // Inline lead magnet — embedded where research intent is highest, per
  // BUILD-SPEC §8, not a popup.
  const leadMagnet = resources.find((r) => r.articleSlug === article.slug);
  const showToc = article.headings.length >= 2 && article.wordCount >= 400;
  const [firstHalf, secondHalf] = leadMagnet
    ? splitHtmlAtMidpoint(article.contentHtml)
    : [article.contentHtml, ""];

  return (
    <>
      <div className="mx-auto mt-10 max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14 lg:flex lg:items-start lg:gap-12">
        <div className="lg:min-w-0 lg:flex-1">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              ...(primaryHub ? [{ label: primaryHub.name, href: `/${primaryHub.id}` }] : []),
              { label: article.h1 },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl font-bold text-balance text-pine-900 sm:text-4xl">
            {article.h1}
          </h1>
          <p className="mt-3 text-sm text-pine-500">{article.readingTime}</p>

          {showToc && (
            <div className="mt-8">
              <TableOfContentsMobile headings={article.headings} />
            </div>
          )}

          <div
            className="prose prose-pine mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: firstHalf }}
          />

          {leadMagnet && (
            <Link
              href="/resources"
              className="my-8 flex items-center gap-4 rounded-xl border border-clay-200 bg-clay-50 p-5 hover:bg-clay-100/60"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-clay-700">
                  Free download
                </p>
                <p className="mt-1 font-display text-base font-semibold text-pine-900">
                  {leadMagnet.title}
                </p>
                <p className="mt-1 text-sm text-pine-700">{leadMagnet.description}</p>
              </div>
            </Link>
          )}

          {secondHalf && (
            <div
              className="prose prose-pine max-w-none"
              dangerouslySetInnerHTML={{ __html: secondHalf }}
            />
          )}

          <div className="mt-10">
            <AuthorBox />
          </div>
        </div>

        {showToc && <TableOfContentsDesktop headings={article.headings} />}
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-pine-100 bg-sage-50 py-16 sm:py-20">
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

      <ConversionCta />
    </>
  );
}
