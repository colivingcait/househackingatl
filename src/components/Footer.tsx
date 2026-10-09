import Link from "next/link";
import { contact, licenseDisclosure, links, meetup, siteConfig } from "@/lib/site-config";
import { navLinks, secondaryLinks } from "@/data/nav";
import { withUtm } from "@/lib/utm";
import DoorMark from "./DoorMark";

const profileLinks = [
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.zillow, label: "Zillow" },
  { href: meetup.eventbriteOrganizerUrl, label: "Eventbrite" },
  { href: links.instagram, label: "Instagram" },
  { href: links.colivingCait, label: "Coliving Cait" },
  {
    href: links.facebookGroup && withUtm(links.facebookGroup, { source: "facebook" }),
    label: "Facebook Group",
  },
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
            <p className="mt-3 max-w-xs text-sm font-semibold text-white">
              Caitlyn Verdugo, REALTOR®
            </p>
            <p className="mt-1 max-w-xs text-sm text-sage-300">
              Keller Williams Realty Metro Atlanta
            </p>
            <p className="mt-3 flex flex-col gap-1 text-sm">
              <a href={contact.phoneHref} className="hover:text-clay-300">
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="hover:text-clay-300">
                {contact.email}
              </a>
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

          {profileLinks.length > 0 && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sage-400">
                Profiles
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                {profileLinks.map((link) => (
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
