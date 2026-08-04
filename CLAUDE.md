# House Hacking Atlanta — content & brand guide

This file is read automatically at the start of future sessions in this
repo. It exists so blog posts and copy stay consistent without having to
re-explain the brand every time.

## Publishing a blog post

Posts are markdown files in `content/blog/<slug>.md` with frontmatter:

```md
---
title: "Post title"
date: "2026-08-11"
excerpt: "One or two sentences — shows on the blog index and in search results."
tags: ["financing", "case study"]      # optional
coverImage: "/images/blog/slug.jpg"    # optional — omit to use the default placeholder tile
---

Body copy in plain markdown (headings, bold, links, lists all work).
```

No other wiring needed — `/blog` and `/blog/[slug]` read every file in
`content/blog/` automatically, and the post is added to the sitemap.

Workflow: the user gives a topic → draft the post → show it for review
before writing the file → once approved, write the `.md` file, run
`npm run build` to confirm it compiles, commit, and push.

## Voice

- Helpful, professional, encouraging, motivating. Resource first, opinion
  second.
- Plain language, real numbers, no hype, no guru energy.
- Warm but not soft — register is "encouraging older sister," not
  corporate and not soft/feminine-coded.
- Avoid jabs, contrarian framing, and "most people are wrong about X"
  constructions. (Her TikTok voice is contrarian; this brand is not.)

## Hard word/style rules

- Never use "landlord." Use "housing operator" or "community builder."
- "coliving" is always one word, lowercase.
- House hacking is **not** the same thing as coliving — coliving is a
  related but more advanced model. Don't conflate them.
- Tagline: "Live for less. Build more wealth. Every door is an
  opportunity." The door motif (🚪 / the phrase "every door is an
  opportunity") is used once per page, not repeated.

## Compliance — RESPA (non-negotiable)

Caitlyn is a licensed Georgia real estate agent. Lenders, appraisers, and
home inspectors are settlement service providers under RESPA, which
restricts anything that looks like payment for referrals. In any post
that mentions a sponsor, lender, inspector, or similar:

- Never use "preferred lender," "recommended lender," "our lender," or
  any referral language.
- Use "Event Sponsor" or "Anchor Partner" instead.
- Frame sponsorship as advertising/marketing (logo placement, speaking
  time), never as an endorsement of quality or service.

## Privacy (non-negotiable)

- Never publish a property address.
- Never publish location detail more specific than "Atlanta metro" for
  Caitlyn's own properties. Neighborhood-level references are fine for
  general market education (e.g. "this pencils out better in X"), but
  not for identifying a specific property.

## License disclosure

Caitlyn is a licensed Georgia real estate agent with Keller Williams.
Blog posts giving financing/market guidance should read as educational,
not as personalized advice or a guarantee of outcome. The site footer
carries the full brokerage disclosure — don't restate it in every post,
but don't write anything that reads as a specific promise or
individualized recommendation either.

## Stack notes

Next.js 14 (App Router) / TypeScript / Tailwind, deployed on Vercel.
Editable site-wide values (venue, external links, Kit form IDs, license
disclosure) live in `src/lib/site-config.ts`. See `NEEDS_CAITLYN.md` for
what's still pending from Caitlyn before public launch.
