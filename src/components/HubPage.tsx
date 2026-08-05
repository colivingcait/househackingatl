import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import ConversionCta from "@/components/ConversionCta";
import FadeIn from "@/components/FadeIn";
import type { Hub } from "@/data/hubs";
import { getAllArticleMeta } from "@/lib/articles";

export default function HubPage({ hub }: { hub: Hub }) {
  const articleMeta = new Map(getAllArticleMeta().map((a) => [a.slug, a]));
  const pillarMeta = articleMeta.get(hub.pillar);

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

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        {hub.intro.map((paragraph, i) => (
          <p key={i} className={`text-lg text-pine-800 ${i > 0 ? "mt-4" : ""}`}>
            {paragraph}
          </p>
        ))}

        {pillarMeta && (
          <FadeIn>
            <Link
              href={`/${pillarMeta.slug}`}
              className="mt-8 flex gap-4 rounded-xl border-l-4 border-clay-500 bg-clay-50 p-5 hover:bg-clay-100/60"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-clay-700">
                  Start here
                </span>
                <p className="mt-1 font-display text-lg font-semibold text-pine-900">
                  {pillarMeta.h1}
                </p>
                <p className="mt-1 text-sm text-pine-700">{pillarMeta.metaDescription}</p>
              </div>
            </Link>
          </FadeIn>
        )}
      </section>

      {hub.sections.map((section, sIdx) => (
        <section key={section.heading ?? sIdx} className="border-t border-pine-100 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
