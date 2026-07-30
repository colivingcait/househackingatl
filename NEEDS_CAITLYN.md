# Open items before launch

Everything below is built with a working placeholder so the site never
looks broken — nothing here blocks deploying to Vercel today. But these
need real values before the site should go live to the public.

## Content

- [ ] **House stacking definition** — drafted copy is live on
      `/what-is-house-hacking#house-stacking` per your confirmation. Flag if
      anything needs to change.
- [ ] **Venue** — New Realm Brewing is used throughout (`src/lib/site-config.ts`
      → `meetup.venue`), flagged as unconfirmed. Once the agreement is
      signed, set `meetup.venue.confirmed = true` to remove the "(venue TBC)"
      note on `/meetups`.
- [ ] **Speaker names** for the topic calendar — currently render as
      "Speaker TBA" in `src/data/meetups.ts`. Fill in `speaker: "..."` as
      each is confirmed.
- [ ] **Sponsor logos / partners** — `src/data/sponsors.ts` is empty on
      purpose; the site shows a clean "opportunities available" card
      instead of a blank grid. Add entries to `anchorPartners` /
      `eventSponsors` as deals close.
- [ ] **Rooms for Rent ATL photos** — `/listings` shows 6 "Photo coming
      soon" placeholders. Send 3–6 photos and I'll swap them in.
      Reminder of the privacy rule already baked into the page copy: no
      property addresses, nothing more specific than "Atlanta metro."
- [ ] **Caitlyn's bio + headshot** — `/about` has your approved intro line
      live; the fuller bio and headshot are placeholders.
- [ ] **Adam** — co-founder credit. Not included anywhere yet — confirm
      whether/how he should appear (About page, meetup hosting, etc.).

## Accounts / credentials (all in `src/lib/site-config.ts` + env vars)

- [ ] **Kit form IDs** — `NEXT_PUBLIC_KIT_LISTING_ALERTS_FORM_ID` and
      `NEXT_PUBLIC_KIT_NEWSLETTER_FORM_ID` (see `.env.example`). These are
      the public numeric form IDs from Kit → Grow → Landing Pages & Forms
      → (form) → Embed — **not** the private API key, nothing secret is
      needed for the signup forms themselves to work.
      - In Kit, set each form's automation to tag new subscribers:
        - Listing alerts form → `hh-site` + `listing-alerts`
        - Newsletter form → `hh-site`
      - Both forms collect first name + email; the listing-alerts form
        also collects a price range and target areas as custom fields —
        confirm those field keys exist in your Kit account
        (`price_range`, `target_areas`) or tell me the actual keys so I
        can match them.
      - Before launch: submit a test entry through both forms in staging
        and confirm the subscriber shows up correctly tagged in Kit — the
        POST endpoint/field names were built from Kit's documented
        conventions but I haven't tested against your live account.
- [ ] **Eventbrite organizer URL** — `links.eventbriteOrganizer` /
      `meetup.eventbriteOrganizerUrl`. Individual events can also get their
      own link via `eventbriteUrl` on each entry in `src/data/meetups.ts`.
- [ ] **Meta Pixel ID** — `NEXT_PUBLIC_META_PIXEL_ID`. Once set, the pixel
      fires `PageView` on load and `Lead` on both signup forms. Sponsor
      inquiries fire a custom `SponsorInquiry` event.
- [ ] **Sponsor inquiry inbox** — `sponsorInquiry.contactEmail` is set to a
      placeholder `hello@househackingatl.com`. The "Become a Sponsor" form
      has no backend yet (no email provider confirmed) — it opens a
      pre-filled `mailto:` to that address. Confirm the real inbox, or say
      the word if you'd rather I wire up a real form handler (e.g. Resend)
      instead.

## URLs (all currently blank — pages render a "link coming soon" state)

- [ ] ColivingCait — defaulted to `colivingcait.com`, confirm
- [ ] Atlanta Women Investors — need URL
- [ ] Rooms for Rent ATL — need URL
- [ ] Facebook group ("House Hacking Atlanta") — need URL
- [ ] Eventbrite organizer page — need URL

All five live in `src/lib/site-config.ts` under `links`.

## Legal

- [ ] **License/brokerage disclosure** — footer currently shows a clearly
      flagged placeholder (`src/lib/site-config.ts` → `licenseDisclosure`).
      **Do not launch publicly until your broker's exact approved wording
      replaces it** — Georgia advertising rules require this. Once you
      have it, update `licenseDisclosure.text` and set `confirmed: true`.

## Everything else

Definitions, meetup format, sponsor tiers, RESPA-safe sponsor copy, group
description, guidelines, voice, taglines, and the "landlord" /
"housing operator" word rule are all implemented from your approved copy
as written.
