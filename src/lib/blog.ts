import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

/**
 * Posts are scheduled by their frontmatter `date`. A post with a future
 * date exists in the repo but is hidden from the index, the homepage
 * teaser, and the sitemap, and its own page 404s — until that date
 * arrives, at which point it goes live with no redeploy needed.
 */
function isPublished(date: string): boolean {
  return new Date(date).getTime() <= Date.now();
}

function listSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return listSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        coverImage: data.coverImage as string | undefined,
        tags: data.tags as string[] | undefined,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post) => isPublished(post.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  if (!isPublished(data.date as string)) return null;

  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string | undefined,
    tags: data.tags as string[] | undefined,
    readingTime: readingTime(content).text,
    contentHtml: processed.toString(),
  };
}
