import { getAllArticleMeta } from "@/lib/articles";
import { getHubsForArticle } from "@/data/hubs";

export type SearchEntry = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  hubName: string | null;
  hubId: string | null;
};

/**
 * Search only covers title/description/keywords for now (spec section 6
 * also calls for body content — a larger lift, left for a follow-up pass).
 * Server-only (reads the filesystem via getAllArticleMeta); compute once
 * and pass down rather than calling from client components.
 */
export function getSearchIndex(): SearchEntry[] {
  return getAllArticleMeta().map((article) => {
    const hub = getHubsForArticle(article.slug)[0];
    return {
      slug: article.slug,
      title: article.h1,
      description: article.metaDescription,
      keywords: [article.primaryKeyword, ...article.secondaryKeywords].filter(Boolean).join(", "),
      hubName: hub?.name ?? null,
      hubId: hub?.id ?? null,
    };
  });
}
