import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FadeIn from "@/components/FadeIn";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Real numbers, real Atlanta-area deals, and practical house hacking advice — from House Hacking Atlanta.",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Real numbers. Real deals."
        subtitle="Practical house hacking advice from the Atlanta metro — no hype, no guru energy."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {posts.length === 0 ? (
          <p className="text-pine-600">First post is on the way.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06} className="group">
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
                    <PhotoPlaceholder className="aspect-[4/3] w-full" />
                  )}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-clay-600">
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-pine-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-pine-700">{post.excerpt}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
