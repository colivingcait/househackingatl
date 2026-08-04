import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { kit, links } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="border-b border-pine-100 bg-sage-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <Link
            href="/blog"
            className="text-sm font-semibold text-clay-400 hover:text-clay-300"
          >
            ← Back to the blog
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-clay-400">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-balance sm:text-5xl">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-pine-700 px-3 py-1 text-xs font-medium text-pine-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {post.coverImage && (
        <div className="relative aspect-[16/9] w-full">
          <Image src={post.coverImage} alt="" fill priority className="object-cover" />
        </div>
      )}

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div
          className="prose prose-pine max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>

      <section className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <KitSignupForm variant="newsletter" formId={kit.newsletterFormId} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <CtaButton
          href={links.facebookGroup || "/group"}
          variant="primary"
          external={Boolean(links.facebookGroup)}
        >
          Join the Facebook Group
        </CtaButton>
      </section>
    </>
  );
}
