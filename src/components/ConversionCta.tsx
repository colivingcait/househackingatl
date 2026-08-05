import CtaButton from "./CtaButton";

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
          <CtaButton href="/meetups" variant="primary">
            See the meetup schedule
          </CtaButton>
          <CtaButton
            href="/group"
            variant="ghost"
            className="!border-white !text-white hover:!bg-white/10"
          >
            Join the Facebook group
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
