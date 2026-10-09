import Link from "next/link";
import { author } from "@/lib/site-config";

/** Visible credit line so articles are tied to Caitlyn, not an unnamed group. */
export default function AuthorByline({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm ${className}`}>
      By{" "}
      <Link href="/about" className="font-semibold text-inherit underline decoration-clay-400/70 underline-offset-2 hover:text-clay-600">
        {author.name}
      </Link>
      , {author.byline}
    </p>
  );
}
