import type { ReactNode } from "react";
import Image from "next/image";
import DoorMark from "./DoorMark";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: ReactNode;
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
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,24,16,0.92), rgba(36,38,30,0.88) 55%, rgba(36,38,30,0.75))",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20">
        {breadcrumb && <div style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}>{breadcrumb}</div>}
        <DoorMark className="h-10 w-8 text-clay-400" />
        <div style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
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
