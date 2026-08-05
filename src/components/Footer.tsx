import Link from "next/link";
import { links, licenseDisclosure, siteConfig } from "@/lib/site-config";
import { navLinks, secondaryLinks } from "@/data/nav";
import DoorMark from "./DoorMark";

const elsewhereLinks = [
  { href: links.facebookGroup, label: "Facebook Group" },
  { href: links.colivingCait, label: "ColivingCait" },
  { href: links.atlantaWomenInvestors, label: "Atlanta Women Investors" },
  { href: links.roomsForRentAtl, label: "Rooms for Rent ATL" },
].filter((link) => link.href);

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
              {[...navLinks, ...secondaryLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-clay-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {elsewhereLinks.length > 0 && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sage-400">
                Elsewhere
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {elsewhereLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-clay-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-sage-800 pt-6">
          <p className="text-xs leading-relaxed text-sage-400">{licenseDisclosure.text}</p>
          <p className="mt-4 text-xs text-sage-500">
            © {new Date().getFullYear()} House Hacking Atlanta. {siteConfig.doorMotif}
          </p>
        </div>
      </div>
    </footer>
  );
}
