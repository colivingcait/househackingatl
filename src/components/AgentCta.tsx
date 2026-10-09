import CtaButton from "./CtaButton";
import { contact, links } from "@/lib/site-config";

/**
 * Turns readers into agent leads. Lender referrals are left out on purpose
 * (RESPA): the copy does not point anyone at a specific lender.
 */
export default function AgentCta() {
  return (
    <section className="border-t border-pine-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
          Work with an agent
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-pine-900 sm:text-3xl">
          Work with an Atlanta house-hacking agent
        </h2>
        <p className="mt-4 text-pine-800">
          Thinking about buying a house hack in Atlanta? Work with a realtor who
          has done it herself. Caitlyn Verdugo (Keller Williams Realty Metro
          Atlanta) will help you run the numbers and find properties that fit
          rent-by-the-room, duplex, basement, or ADU plans.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CtaButton href={links.book} variant="primary" external>
            Book a free call
          </CtaButton>
          <a href={contact.phoneHref} className="text-sm font-semibold text-clay-700 hover:text-clay-800">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
