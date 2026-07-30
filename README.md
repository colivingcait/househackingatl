# househackingatl.com

Info/marketing site for House Hacking Atlanta — Next.js 14 (App Router),
TypeScript, Tailwind, deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you have; unset values render safe placeholders
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live

- `src/lib/site-config.ts` — single source of truth for editable values:
  venue, external links, Kit form IDs, Meta Pixel ID, license disclosure.
  Change the meetup venue here, not across pages.
- `src/data/meetups.ts` — the monthly topic calendar. One array entry per
  month; add `speaker` and `eventbriteUrl` as they're confirmed.
- `src/data/sponsors.ts` — anchor partners and event sponsors. Empty by
  default; the sponsor sections render a clean empty state until this has
  entries.
- `src/components/` — shared UI (Header, Footer, signup forms, sponsor
  grid, meetup schedule table, Meta Pixel loader).
- `src/app/` — one folder per route: `/`, `/what-is-house-hacking`,
  `/meetups`, `/group`, `/listings`, `/sponsors`, `/about`.

See **`NEEDS_CAITLYN.md`** for the full launch checklist — accounts, URLs,
and content still needed before this goes live publicly.

## Environment variables

See `.env.example`. All are optional for local dev / preview — pages
degrade to a "coming soon" placeholder rather than breaking when a value
is unset. Set real values in Vercel's Environment Variables before
production launch.

## Deploy

Connected to Vercel — pushes to the tracked branch deploy automatically.
