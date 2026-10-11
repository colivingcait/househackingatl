import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";
import { articleDatesByFile } from "@/lib/article-dates";

const ARTICLES_DIR = path.join(process.cwd(), "blog");

/**
 * Interiors only. Exteriors (the hero house, the ADU cottage) stay off
 * article images. Anything not listed here keeps the site og-default.
 */
const INTERIOR_IMAGES: Record<string, string> = {
  "basement-airbnb": "/images/models/basement-conversion.jpg",
  "furnishing-a-rental": "/images/models/rent-by-the-room.jpg",
  "furnished-vs-unfurnished-house-hack": "/images/models/rent-by-the-room.jpg",
  "which-space-rents": "/images/models/rent-by-the-room.jpg",
  "shared-spaces-that-work": "/images/models/rent-by-the-room.jpg",
  "what-its-like-to-live-with-your-tenants": "/images/models/rent-by-the-room.jpg",
};

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
  /** ISO 8601. Frontmatter wins; otherwise git first-commit, then the committed snapshot. */
  datePublished: string;
  /** ISO 8601. Frontmatter wins; otherwise git last-commit, then the committed snapshot. */
  dateModified: string;
  /** Root-relative interior image, when one is relevant. Omit to use og-default. */
  image?: string;
};

export type ArticleHeading = { id: string; text: string };

export type Article = ArticleMeta & {
  contentHtml: string;
  readingTime: string;
  wordCount: number;
  headings: ArticleHeading[];
};

function stripLeadingSlash(slug: string): string {
  return slug.startsWith("/") ? slug.slice(1) : slug;
}

/**
 * Every article body opens with its own "# H1", and most (not all) follow
 * it with "*House Hacking Atlanta*" and a "---" rule. The template renders
 * h1 and the byline itself, so both would otherwise appear twice on the
 * page — once in the hero, once again at the top of the body.
 */
function stripLeadingBoilerplate(content: string): string {
  const withoutH1 = content.replace(/^\s*#[^\n]*\n+/, "");
  return withoutH1.replace(/^\*House Hacking Atlanta\*\n+---\n+/, "");
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractHeadings(content: string): ArticleHeading[] {
  const matches = Array.from(content.matchAll(/^##\s+(.+)$/gm));
  return matches.map((m) => ({ id: slugifyHeading(m[1].trim()), text: m[1].trim() }));
}

/** Injects `id` attributes into <h2> tags, in document order, matching extractHeadings(). */
function addHeadingIds(html: string, headings: ArticleHeading[]): string {
  let i = 0;
  return html.replace(/<h2>/g, () => {
    const heading = headings[i];
    i += 1;
    return heading ? `<h2 id="${heading.id}">` : "<h2>";
  });
}

function readFrontmatter(file: string) {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
  return matter(raw);
}

function frontmatterDate(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return value;
}

function datesFor(file: string, data: Record<string, unknown>) {
  const git = articleDatesByFile()[`blog/${file}`];
  const datePublished =
    frontmatterDate(data.date_published) ||
    frontmatterDate(data.datePublished) ||
    git?.datePublished;
  let dateModified =
    frontmatterDate(data.date_modified) ||
    frontmatterDate(data.dateModified) ||
    git?.dateModified ||
    datePublished;
  if (!datePublished || !dateModified) {
    throw new Error(`Missing publish dates for blog/${file}`);
  }
  if (new Date(dateModified).getTime() < new Date(datePublished).getTime()) {
    dateModified = datePublished;
  }
  return { datePublished, dateModified };
}

function metaFrom(file: string, data: Record<string, unknown>): ArticleMeta {
  const slug = stripLeadingSlash(data.slug as string);
  return {
    slug,
    seoTitle: data.seo_title as string,
    h1: data.h1 as string,
    metaDescription: data.meta_description as string,
    primaryKeyword: data.primary_keyword as string,
    secondaryKeywords: (data.secondary_keywords as string[]) || [],
    internalLinks: ((data.internal_links as string[]) || []).map(stripLeadingSlash),
    ...datesFor(file, data),
    ...(INTERIOR_IMAGES[slug] ? { image: INTERIOR_IMAGES[slug] } : {}),
  };
}

function listFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllArticleMeta(): ArticleMeta[] {
  return listFiles().map((file) => {
    const { data } = readFrontmatter(file);
    return metaFrom(file, data as Record<string, unknown>);
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const file = listFiles().find((f) => {
    const { data } = readFrontmatter(f);
    return stripLeadingSlash(data.slug as string) === slug;
  });
  if (!file) return null;

  const { data, content } = readFrontmatter(file);
  const body = stripLeadingBoilerplate(content);
  const headings = extractHeadings(body);
  const processed = await remark().use(remarkHtml).process(body);
  const stats = readingTime(body);

  return {
    ...metaFrom(file, data as Record<string, unknown>),
    contentHtml: addHeadingIds(processed.toString(), headings),
    readingTime: stats.text,
    wordCount: Math.round(stats.words),
    headings,
  };
}
