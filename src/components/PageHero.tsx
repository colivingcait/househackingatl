import type { ReactNode } from "react";
import Image from "next/image";
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
    <section className="relative overflow-hidden bg-sage-950 text-white">
      <Image
        src="/images/hero-house.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "62% 62%" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-sage-900/88 via-sage-800/65 to-sage-700/30"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20">
        <DoorMark className="h-10 w-8 text-clay-400" />
        <div>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-clay-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold text-balance sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base text-sage-100 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
