import type { ReactNode } from "react";
import DoorMark from "./DoorMark";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-pine-100 bg-pine-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20">
        <DoorMark className="h-10 w-8 text-clay-400" />
        <div>
          {eyebrow && (
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-clay-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold text-balance sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base text-pine-100 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
