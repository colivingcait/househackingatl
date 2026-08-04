"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import CtaButton from "./CtaButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pine-100 bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-bold text-pine-900">
          House Hacking Atlanta
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pine-800 hover:text-clay-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="/#get-listings" variant="primary">
            Get Listings
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
        <nav className="flex flex-col gap-1 border-t border-pine-100 px-4 pb-4 lg:hidden">
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
          <div className="pt-2">
            <CtaButton href="/#get-listings" variant="primary" className="w-full">
              Get Listings
            </CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}
