"use client";

import { useState } from "react";
import type { ArticleHeading } from "@/lib/articles";

export function TableOfContentsMobile({ headings }: { headings: ArticleHeading[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8 rounded-xl border border-pine-200 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-pine-900"
      >
        On this page
        <span className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>
      {open && (
        <ul className="flex flex-col gap-2 border-t border-pine-100 px-4 py-3">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm text-pine-700 hover:text-clay-600"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TableOfContentsDesktop({ headings }: { headings: ArticleHeading[] }) {
  return (
    <aside className="sticky top-24 hidden w-56 shrink-0 lg:block">
      <p className="text-xs font-semibold uppercase tracking-wide text-pine-500">On this page</p>
      <ul className="mt-3 flex flex-col gap-2.5 border-l border-pine-200 pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-sm leading-snug text-pine-700 hover:text-clay-600">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
