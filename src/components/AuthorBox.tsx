import Link from "next/link";
import { author } from "@/lib/site-config";

/**
 * The trust signal for a stranger arriving from search who's never seen
 * this site before — per BUILD-SPEC.md §16, every article gets one.
 */
export default function AuthorBox() {
  return (
    <div className="flex gap-4 rounded-xl border border-pine-200 bg-sage-50 p-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dashed border-sage-300 bg-white text-[10px] text-pine-400">
        Photo
      </div>
      <div>
        <p className="font-display text-base font-semibold text-pine-900">
          <Link href="/about" className="hover:text-clay-600">
            {author.name}
          </Link>
        </p>
        <p className="mt-0.5 text-sm text-pine-700">{author.bio}</p>
        <p className="mt-1 text-xs text-pine-500">{author.credential}</p>
      </div>
    </div>
  );
}
