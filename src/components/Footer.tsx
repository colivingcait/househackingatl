import Link from "next/link";
import { links, licenseDisclosure, siteConfig } from "@/lib/site-config";
import { navLinks } from "@/data/nav";
import DoorMark from "./DoorMark";

function ExternalOrPlaceholder({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  if (!href) {
    return <span className="text-sage-400">{label} (link coming soon)</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-clay-300"
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-sage-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <DoorMark className="h-6 w-5 text-clay-400" />
              <span className="font-display text-base font-bold text-white">
                House Hacking Atlanta
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-sage-300">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-400">
              Explore
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-clay-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sage-400">
              Elsewhere
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <ExternalOrPlaceholder href={links.facebookGroup} label="Facebook Group" />
              </li>
              <li>
                <ExternalOrPlaceholder href={links.colivingCait} label="ColivingCait" />
              </li>
              <li>
                <ExternalOrPlaceholder
                  href={links.atlantaWomenInvestors}
                  label="Atlanta Women Investors"
                />
              </li>
              <li>
                <ExternalOrPlaceholder
                  href={links.roomsForRentAtl}
                  label="Rooms for Rent ATL"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-sage-800 pt-6">
          <p
            className={`text-xs leading-relaxed ${
              licenseDisclosure.confirmed ? "text-sage-400" : "text-clay-400"
            }`}
          >
            {licenseDisclosure.text}
          </p>
          <p className="mt-4 text-xs text-sage-500">
            © {new Date().getFullYear()} House Hacking Atlanta. {siteConfig.doorMotif}
          </p>
        </div>
      </div>
    </footer>
  );
}
