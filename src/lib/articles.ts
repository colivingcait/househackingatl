import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const ARTICLES_DIR = path.join(process.cwd(), "blog");

export type ArticleMeta = {
  /** Filesystem-safe route slug, no leading slash — e.g. "four-numbers-house-hack" */
  slug: string;
  seoTitle: string;
  h1: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Target slugs (no leading slash) this article should link to in-body. Not yet wired into body text. */
  internalLinks: string[];
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

function stripLeadingSlash(slug: string): string {
  return slug.startsWith("/") ? slug.slice(1) : slug;
}

function readFrontmatter(file: string) {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
  return matter(raw);
}

function listFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllArticleMeta(): ArticleMeta[] {
  return listFiles().map((file) => {
    const { data } = readFrontmatter(file);
    return {
      slug: stripLeadingSlash(data.slug as string),
      seoTitle: data.seo_title as string,
      h1: data.h1 as string,
      metaDescription: data.meta_description as string,
      primaryKeyword: data.primary_keyword as string,
      secondaryKeywords: (data.secondary_keywords as string[]) || [],
      internalLinks: ((data.internal_links as string[]) || []).map(stripLeadingSlash),
    };
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const file = listFiles().find((f) => {
    const { data } = readFrontmatter(f);
    return stripLeadingSlash(data.slug as string) === slug;
  });
  if (!file) return null;

  const { data, content } = readFrontmatter(file);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug: stripLeadingSlash(data.slug as string),
    seoTitle: data.seo_title as string,
    h1: data.h1 as string,
    metaDescription: data.meta_description as string,
    primaryKeyword: data.primary_keyword as string,
    secondaryKeywords: (data.secondary_keywords as string[]) || [],
    internalLinks: ((data.internal_links as string[]) || []).map(stripLeadingSlash),
    contentHtml: processed.toString(),
  };
}
