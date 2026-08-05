import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import FadeIn from "@/components/FadeIn";
import { hubs, type Hub } from "@/data/hubs";
import { getAllArticleMeta } from "@/lib/articles";

export default function HubPage({ hub }: { hub: Hub }) {
  const articleMeta = new Map(getAllArticleMeta().map((a) => [a.slug, a]));
  const otherHubs = hubs.filter((h) => h.id !== hub.id);

  return (
    <>
      <PageHero eyebrow={hub.eyebrow} title={hub.name} />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        {hub.intro.map((paragraph, i) => (
          <p key={i} className={`text-lg text-pine-800 ${i > 0 ? "mt-4" : ""}`}>
            {paragraph}
          </p>
        ))}
      </section>

      {hub.sections.map((section, sIdx) => (
        <section
          key={section.heading ?? sIdx}
          className={`border-t border-pine-100 py-12 sm:py-16 ${sIdx % 2 === 1 ? "bg-sage-50" : ""}`}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {section.heading && (
              <h2 className="font-display text-xl font-bold text-pine-900 sm:text-2xl">
                {section.heading}
              </h2>
            )}
            <div className="mt-4 divide-y divide-pine-100">
              {section.items.map((item) => {
                const isResource = item.kind === "resource";
                const meta = isResource ? undefined : articleMeta.get(item.slug);
                const isPillar = item.slug === hub.pillar;
                const href = isResource ? "/resources" : `/${item.slug}`;
                const title = isResource
                  ? "Before Anyone Moves In — free conversation guide"
                  : meta?.h1 ?? item.slug;

                return (
                  <FadeIn key={item.slug}>
                    <Link href={href} className="group flex items-baseline gap-3 py-4">
                      {isPillar && (
                        <span className="shrink-0 rounded-full bg-clay-100 px-2.5 py-0.5 text-xs font-semibold text-clay-700">
                          Start here
                        </span>
                      )}
                      <span className="font-display text-lg font-semibold text-pine-900 group-hover:text-clay-600">
                        {title}
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-sage-950 py-16 text-center text-white sm:py-20">
        <FadeIn className="mx-auto max-w-lg px-4 sm:px-6">
          <p className="text-sage-100">{hub.nextStep.description}</p>
          <div className="mt-6">
            <CtaButton href={hub.nextStep.href} variant="primary">
              {hub.nextStep.label}
            </CtaButton>
          </div>
        </FadeIn>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            Browse other topics
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {otherHubs.map((h) => (
              <Link
                key={h.id}
                href={`/${h.id}`}
                className="rounded-full border border-pine-200 px-4 py-2 text-sm font-medium text-pine-800 hover:border-clay-400 hover:text-clay-600"
              >
                {h.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
