import Link from "next/link";
import { anchorPartners, eventSponsors } from "@/data/sponsors";
import CtaButton from "./CtaButton";

export default function SponsorGrid() {
  const hasSponsors = anchorPartners.length > 0 || eventSponsors.length > 0;

  if (!hasSponsors) {
    return (
      <div className="rounded-2xl border border-dashed border-pine-300 bg-pine-50 p-10 text-center">
        <p className="font-display text-lg font-semibold text-pine-900">
          Sponsorship opportunities available
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-pine-700">
          We&apos;re taking on our first Anchor Partners and Event Sponsors
          for the meetup. Reach a room of engaged Atlanta house hackers every
          month.
        </p>
        <div className="mt-5">
          <CtaButton href="/sponsors#become-a-sponsor" variant="primary">
            Become a Sponsor
          </CtaButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {anchorPartners.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-pine-600">
            Anchor Partners
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {anchorPartners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url || "#"}
                className="flex items-center justify-center rounded-xl border border-pine-100 bg-white p-6"
              >
                <span className="font-medium text-pine-800">
                  {partner.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {eventSponsors.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-pine-600">
            This Month&apos;s Event Sponsor
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {eventSponsors.map((sponsor) => (
              <Link
                key={sponsor.name}
                href={sponsor.url || "#"}
                className="flex items-center justify-center rounded-xl border border-pine-100 bg-white p-6"
              >
                <span className="font-medium text-pine-800">
                  {sponsor.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
