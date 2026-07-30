import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import KitSignupForm from "@/components/KitSignupForm";
import { kit, links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Group",
  description:
    "House Hacking Atlanta on Facebook — real numbers from real Atlanta-area deals, financing questions answered, and a community that shares openly.",
};

const whoFor = [
  "First-time buyers who want their housing payment covered",
  "Homeowners sitting on unused space",
  "Investors already house hacking who want to run it better",
  "Anyone still deciding whether the numbers work in this market",
];

const guidelines = [
  "No pitching, recruiting, or unsolicited DMs. Contribute first.",
  "Share numbers when you can. Specifics help everyone.",
  "No question is too basic. Someone else has it too.",
  "Disagree with the strategy, not the person.",
];

export default function GroupPage() {
  return (
    <>
      <PageHero
        eyebrow="Facebook Group"
        title="House Hacking Atlanta"
        subtitle="Helping people across the Atlanta metro lower their housing costs and build wealth through house hacking. Whether you're buying your first home or your fifth, you're in the right place."
      >
        <div>
          <CtaButton
            href={links.facebookGroup || "#"}
            variant="primary"
            external={Boolean(links.facebookGroup)}
          >
            {links.facebookGroup ? "Join the Group" : "Link coming soon"}
          </CtaButton>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-pine-900">
              Who this is for
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-pine-800">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-pine-900">
              What you&apos;ll find here
            </h2>
            <p className="mt-4 text-pine-800">
              Real numbers from real Atlanta-area deals. Financing and
              logistics questions answered by people who&apos;ve done it.
              Wins worth celebrating and lessons worth sharing. Practical
              advice grounded in experience — including an honest
              &ldquo;here&apos;s why that one doesn&apos;t pencil out.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pine-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900">
            Group guidelines
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {guidelines.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine-800 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-pine-800">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton
              href={links.facebookGroup || "#"}
              variant="primary"
              external={Boolean(links.facebookGroup)}
            >
              {links.facebookGroup ? "Join the Group" : "Link coming soon"}
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <KitSignupForm variant="newsletter" formId={kit.newsletterFormId} />
        </div>
      </section>
    </>
  );
}
