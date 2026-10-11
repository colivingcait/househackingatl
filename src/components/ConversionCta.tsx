import CtaButton from "./CtaButton";
import { cta, links, meetup } from "@/lib/site-config";

/**
 * The one CTA block used on every hub and article page — per BUILD-SPEC.md
 * §16, research-phase readers get the low-commitment ask (meetup or group),
 * never "work with me" / "book a call." That ask lives on /about instead.
 */
export default function ConversionCta({ lead }: { lead?: string }) {
  return (
    <section className="bg-sage-950 py-14 text-center text-white sm:py-16">
      <div className="mx-auto max-w-lg px-4 sm:px-6">
        {lead && <p className="text-sage-100">{lead}</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CtaButton href={meetup.eventbriteCollectionUrl} variant="primary" external>
            {cta.register}
          </CtaButton>
          <CtaButton
            href={links.facebookGroup}
            variant="ghost"
            external
            className="!border-white !text-white hover:!bg-white/10"
          >
            {cta.group}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
