import Link from "next/link";
import Image from "next/image";
import { author, cta, links } from "@/lib/site-config";

const linkClass =
  "font-semibold text-clay-700 underline decoration-clay-300 underline-offset-2 hover:text-clay-800";

/** Short credit at the end of every guide: photo, one line, and two ways to work together. */
export default function AuthorBox() {
  return (
    <div className="flex gap-4 rounded-xl border border-pine-200 bg-sage-50 p-5">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
        <Image src={author.photo} alt={author.name} fill sizes="56px" className="object-cover object-top" />
      </div>
      <div>
        <p className="font-display text-base font-semibold text-pine-900">
          <Link href="/about" className="hover:text-clay-600">
            {author.name}
          </Link>
        </p>
        <p className="mt-0.5 text-sm text-pine-700">{author.oneLiner}</p>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <Link href="/buy-and-sell" className={linkClass}>
            Buy &amp; Sell
          </Link>
          <a href={links.book} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {cta.book}
          </a>
        </p>
      </div>
    </div>
  );
}
