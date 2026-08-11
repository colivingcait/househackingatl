# Open items before launch

Everything below is built with a working placeholder so the site never
looks broken — nothing here blocks deploying to Vercel today. But these
need real values before the site should go live to the public.

## Content

- [ ] **House stacking definition** — drafted copy is live on
      `/what-is-house-hacking#house-stacking` per your confirmation. Flag if
      anything needs to change.
- [x] **Venue** — confirmed: New Realm Brewing, 550 Sommerset Terrace NE,
      Suite 101, Atlanta, GA (`src/lib/site-config.ts` → `meetup.venue`).
      Live on `/meetups` and in the Event schema. **Nice to have:** the ZIP
      code, if handy — schema.org doesn't require it, but it's a small
      completeness improvement.
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
- [x] **Headshot** — live on `/about` and in the author box on every
      article.
- [ ] **Fuller bio** — `/about` has your approved intro line live; the
      longer bio is still a placeholder.
- [ ] **Adam** — co-founder credit. Not included anywhere yet — confirm
      whether/how he should appear (About page, meetup hosting, etc.).

## Accounts / credentials (all in `src/lib/site-config.ts` + env vars)

- [x] **CRM cutover** — all three signup forms (listing alerts,
      newsletter, resource downloads) now POST directly to your CRM at
      `https://www.callcaitlyn.com/api/webhooks/house-hacking-site`
      (`crm.webhookUrl` in `src/lib/site-config.ts`). No more Kit form
      IDs, no dual-write — full cutover. Each submission sends
      `{ name, email, phone?, source, sourceDetail? }` with `source` one
      of `listing_alerts` / `newsletter` / `gated_download`.
      - **Dropped in the move:** the listing-alerts form used to also
        collect a target price range and target areas (Kit custom
        fields) — the CRM's documented payload doesn't have a place for
        these, so those two fields were removed from the form rather
        than silently collecting data that goes nowhere. Say the word if
        you want them folded into `sourceDetail` or added to the CRM
        schema properly.
- [ ] **Free guides** (`/resources`) — five PDFs are live at
      `public/downloads/`: House Hacking One Page, Which House Hack Fits
      You, The Four Numbers Worksheet, Property Walkthrough Checklist,
      and Before Anyone Moves In. All gated behind the CRM signup above.
      Send more whenever you have them and I'll add them the same way.
- [x] **Eventbrite collection URL** — confirmed:
      `https://www.eventbrite.com/cc/house-hacking-atl-4861227`, set on
      `meetup.eventbriteOrganizerUrl`. Individual events can still get
      their own link via `eventbriteUrl` on each entry in
      `src/data/meetups.ts`.
- [ ] **Meta Pixel ID** — `NEXT_PUBLIC_META_PIXEL_ID`. Once set, the pixel
      fires `PageView` on load and `Lead` on both signup forms. Sponsor
      inquiries fire a custom `SponsorInquiry` event.
- [ ] **Sponsor inquiry inbox** — `sponsorInquiry.contactEmail` is set to a
      placeholder `hello@househackingatl.com`. The "Become a Sponsor" form
      has no backend yet (no email provider confirmed) — it opens a
      pre-filled `mailto:` to that address. Confirm the real inbox, or say
      the word if you'd rather I wire up a real form handler (e.g. Resend)
      instead.

## URLs (blank ones render a "link coming soon" state)

- [ ] ColivingCait — defaulted to `colivingcait.com`, confirm
- [ ] Atlanta Women Investors — need URL
- [ ] Rooms for Rent ATL — need URL
- [x] Facebook group ("House Hacking Atlanta") — confirmed:
      `https://facebook.com/groups/househackingatl`

Live in `src/lib/site-config.ts` under `links` (Eventbrite moved to
`meetup.eventbriteOrganizerUrl`, now confirmed — see above).

## Legal

- [ ] **License/brokerage disclosure** — footer now shows your real name
      and brokerage (Caitlyn Verdugo, REALTOR®, Keller Williams Metro
      Atlanta) but still a flagged placeholder for the actual sentence
      (`src/lib/site-config.ts` → `licenseDisclosure`). **Do not launch
      publicly until your broker's exact approved wording replaces it** —
      Georgia advertising rules require this. Once you have it, update
      `licenseDisclosure.text` and set `confirmed: true`.

## Everything else

Definitions, meetup format, sponsor tiers, RESPA-safe sponsor copy, group
description, guidelines, voice, taglines, and the "landlord" /
"housing operator" word rule are all implemented from your approved copy
as written.
