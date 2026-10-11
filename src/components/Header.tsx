"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { cta, links } from "@/lib/site-config";
import CtaButton from "./CtaButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pine-100 bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 font-display text-lg font-bold text-pine-900">
          House Hacking Atlanta
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-pine-800 hover:text-clay-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <CtaButton href={links.book} variant="ghost" external className="!px-4 !py-2 !shadow-none hover:!shadow-none">
            {cta.book}
          </CtaButton>
          <CtaButton href="/meetups" variant="primary">
            {cta.nextMeetup}
          </CtaButton>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-pine-900" />
          <span className="h-0.5 w-6 bg-pine-900" />
          <span className="h-0.5 w-6 bg-pine-900" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-t border-pine-100 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-pine-800 hover:bg-sage-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <CtaButton href="/meetups" variant="primary" className="w-full" onClick={() => setOpen(false)}>
            {cta.nextMeetup}
          </CtaButton>
          <CtaButton href={links.book} variant="ghost" external className="w-full">
            {cta.book}
          </CtaButton>
        </div>
      )}
    </header>
  );
}
