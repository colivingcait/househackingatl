import Link from "next/link";
import { anchorPartners } from "@/data/sponsors";

/**
 * A directory for people looking for a lender, insurance agent, etc. —
 * not a sponsor-credits wall. Per the brand's RESPA rules: describes what
 * category each partner covers and where you'd have met them, never
 * "preferred"/"recommended," and never implies a personal endorsement of
 * their work.
 */
export default function SponsorGrid() {
  if (anchorPartners.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-sage-300 bg-sage-50 p-10 text-center">
        <p className="font-display text-lg font-semibold text-pine-900">
          Partners coming soon
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-pine-700">
          We&apos;re still lining up local pros for each category. Check back,
          or come to a meetup — most categories get covered there first.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {anchorPartners.map((partner) => (
        <div
          key={partner.name}
          className="flex flex-col rounded-2xl border border-pine-200 bg-white p-6 shadow-sm"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-clay-600">
            {partner.category}
          </span>
          <span className="mt-1 font-display text-lg font-semibold text-pine-900">
            {partner.name}
          </span>
          {partner.contactName && (
            <span className="mt-1 text-sm text-pine-700">{partner.contactName}</span>
          )}
          {partner.speakingMonth && (
            <Link
              href="/meetups"
              className="mt-3 text-sm font-semibold text-clay-600 hover:text-clay-700"
            >
              Meet them at the {partner.speakingMonth} meetup →
            </Link>
          )}
          {partner.url && (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
            >
              Visit website →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
