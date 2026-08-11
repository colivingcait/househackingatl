"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { navLinks } from "@/data/nav";
import type { SearchEntry } from "@/lib/search";
import CtaButton from "./CtaButton";

export default function Header({ searchIndex }: { searchIndex: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const ctaHref = "/#get-listings";
  const ctaLabel = "Get Listings";

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1 },
          { name: "keywords", weight: 1 },
        ],
        threshold: 0.35,
        minMatchCharLength: 2,
      }),
    [searchIndex]
  );

  const results = query.trim().length >= 2 ? fuse.search(query, { limit: 6 }) : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchOpen(false);
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-pine-100 bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 font-display text-lg font-bold text-pine-900">
          House Hacking Atlanta
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
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

        <div ref={searchBoxRef} className="relative ml-auto hidden max-w-xs flex-1 lg:block">
          <form onSubmit={submitSearch}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search the library…"
              aria-label="Search articles"
              className="w-full rounded-full border border-pine-200 bg-sage-50 px-4 py-2 text-sm text-pine-900 placeholder:text-pine-400 focus:border-clay-400 focus:outline-none"
            />
          </form>
          {searchOpen && results.length > 0 && (
            <div className="absolute right-0 top-full z-10 mt-2 w-96 rounded-xl border border-pine-200 bg-white py-2 shadow-lg">
              {results.map(({ item }) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex flex-col gap-0.5 px-4 py-2 hover:bg-sage-50"
                >
                  <span className="text-sm font-semibold text-pine-900">{item.title}</span>
                  {item.hubName && (
                    <span className="text-xs text-clay-600">{item.hubName}</span>
                  )}
                </Link>
              ))}
              <button
                type="button"
                onClick={submitSearch}
                className="mt-1 w-full border-t border-pine-100 px-4 pt-2 text-left text-sm font-semibold text-clay-600 hover:text-clay-700"
              >
                See all results for &ldquo;{query}&rdquo; →
              </button>
            </div>
          )}
          {searchOpen && query.trim().length >= 2 && results.length === 0 && (
            <div className="absolute right-0 top-full z-10 mt-2 w-96 rounded-xl border border-pine-200 bg-white p-4 text-sm text-pine-600 shadow-lg">
              No matches yet — try{" "}
              <Link href="/learn" className="font-semibold text-clay-600 hover:text-clay-700">
                browsing the 8 topics
              </Link>{" "}
              instead.
            </div>
          )}
        </div>

        <div className="hidden shrink-0 lg:block">
          <CtaButton href={ctaHref} variant="primary">
            {ctaLabel}
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
          <form onSubmit={submitSearch} className="pt-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the library…"
              aria-label="Search articles"
              className="w-full rounded-full border border-pine-200 bg-sage-50 px-4 py-2.5 text-sm text-pine-900 placeholder:text-pine-400 focus:border-clay-400 focus:outline-none"
            />
          </form>
          {results.length > 0 && (
            <div className="flex flex-col divide-y divide-pine-100 rounded-xl border border-pine-100">
              {results.map(({ item }) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-pine-800"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
          <nav className="flex flex-col gap-1">
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
          <CtaButton href={ctaHref} variant="primary" className="w-full">
            {ctaLabel}
          </CtaButton>
        </div>
      )}
    </header>
  );
}
