import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import ConversionCta from "@/components/ConversionCta";
import FadeIn from "@/components/FadeIn";
import type { Hub } from "@/data/hubs";
import { getAllArticleMeta } from "@/lib/articles";

function PillarCallout({
  pillarMeta,
}: {
  pillarMeta: { slug: string; h1: string; metaDescription: string };
}) {
  return (
    <Link
      href={`/${pillarMeta.slug}`}
      className="flex gap-4 rounded-xl border-l-4 border-clay-500 bg-clay-50 p-5 hover:bg-clay-100/60"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-wide text-clay-700">
          Start here
        </span>
        <p className="mt-1 font-display text-lg font-semibold text-pine-900">{pillarMeta.h1}</p>
        <p className="mt-1 text-sm text-pine-700">{pillarMeta.metaDescription}</p>
      </div>
    </Link>
  );
}

export default function HubPage({ hub }: { hub: Hub }) {
  const articleMeta = new Map(getAllArticleMeta().map((a) => [a.slug, a]));
  const pillarMeta = articleMeta.get(hub.pillar);
  const articleCount = hub.sections.reduce(
    (n, s) => n + s.items.filter((item) => item.kind !== "resource").length,
    0
  );

  return (
    <>
      <PageHero
        eyebrow={hub.eyebrow}
        title={hub.name}
        breadcrumb={
          <Breadcrumb
            variant="dark"
            items={[{ label: "Home", href: "/" }, { label: "Learn", href: "/learn" }, { label: hub.name }]}
          />
        }
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px] lg:items-start">
          <div>
            <FadeIn>
              <p className="font-display text-2xl font-medium leading-snug text-pine-900 sm:text-3xl">
                {hub.intro[0]}
              </p>
            </FadeIn>

            {pillarMeta && (
              <FadeIn delay={0.1} className="mt-6 lg:hidden">
                <PillarCallout pillarMeta={pillarMeta} />
              </FadeIn>
            )}

            {hub.intro.slice(1).map((paragraph, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.06}>
                <p className="mt-4 text-pine-700">{paragraph}</p>
              </FadeIn>
            ))}

            {hub.note && (
              <FadeIn delay={0.3}>
                <p className="mt-6 rounded-xl border border-pine-200 bg-sage-50 p-4 text-sm italic text-pine-600">
                  {hub.note}
                </p>
              </FadeIn>
            )}

            {hub.disclaimer && (
              <FadeIn delay={0.3}>
                <p className="mt-6 rounded-xl border-l-4 border-clay-500 bg-clay-50 p-4 text-sm font-medium text-pine-900">
                  {hub.disclaimer}
                </p>
              </FadeIn>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {pillarMeta && (
              <FadeIn delay={0.15} className="hidden lg:block">
                <PillarCallout pillarMeta={pillarMeta} />
              </FadeIn>
            )}
            <FadeIn delay={0.25}>
              <div className="rounded-xl border border-pine-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-pine-500">
                  In this hub
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-pine-900">
                  {articleCount}
                </p>
                <p className="text-sm text-pine-600">
                  articles across {hub.sections.length}{" "}
                  {hub.sections.length === 1 ? "section" : "sections"}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {hub.sections.map((section, sIdx) => (
        <section key={section.heading ?? sIdx} className="border-t border-pine-100 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {section.heading && (
              <h2 className="font-display text-xl font-bold text-pine-900 sm:text-2xl">
                {section.heading}
              </h2>
            )}
            <div className="mt-4 divide-y divide-pine-100">
              {section.items
                .filter((item) => item.slug !== hub.pillar)
                .map((item) => {
                  const isResource = item.kind === "resource";
                  const meta = isResource ? undefined : articleMeta.get(item.slug);
                  const href = isResource ? "/resources" : `/${item.slug}`;
                  const title = isResource
                    ? "Before Anyone Moves In — free conversation guide"
                    : meta?.h1 ?? item.slug;
                  const description = isResource
                    ? "A ten-minute checklist of screening and expectations questions, free to download."
                    : meta?.metaDescription;

                  return (
                    <FadeIn key={item.slug}>
                      <Link href={href} className="group block py-4">
                        <span className="font-display text-lg font-semibold text-pine-900 group-hover:text-clay-600">
                          {title}
                        </span>
                        {description && (
                          <p className="mt-1 text-sm text-pine-600">{description}</p>
                        )}
                      </Link>
                    </FadeIn>
                  );
                })}
            </div>
          </div>
        </section>
      ))}

      <ConversionCta lead={hub.nextStep.description} />
    </>
  );
}
