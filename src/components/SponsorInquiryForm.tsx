"use client";

import { useState, type FormEvent } from "react";
import { sponsorInquiry } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

/**
 * No form backend is wired up yet (no email provider confirmed), so this
 * builds a pre-filled mailto: link on submit. It works with zero
 * configuration on day one — swap in a real form handler later without
 * changing the layout.
 */
export default function SponsorInquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const category = data.get("category") as string;
    const message = data.get("message") as string;
    const email = data.get("email") as string;

    const subject = encodeURIComponent(
      `Sponsorship inquiry: ${company || name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nCategory: ${category}\nEmail: ${email}\n\n${message}`
    );

    trackEvent("SponsorInquiry", { content_name: company });
    window.location.href = `mailto:${sponsorInquiry.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-pine-200 bg-white p-6 shadow-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        required
        className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
      />
      <select
        name="category"
        required
        defaultValue=""
        className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm text-pine-800 focus:border-clay-500 focus:outline-none"
      >
        <option value="" disabled>
          Category of interest
        </option>
        <option value="Anchor Partner — Lender">Anchor Partner — Lender</option>
        <option value="Anchor Partner — Insurance">Anchor Partner — Insurance</option>
        <option value="Event Sponsor">Event Sponsor</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Anything else we should know?"
        rows={4}
        className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
      />
      <button
        type="submit"
        className="mt-1 rounded-full bg-clay-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-clay-700"
      >
        Send inquiry
      </button>
      {sent && (
        <p className="text-sm text-pine-700">
          Your email app should be open with a pre-filled message — send it
          over and we&apos;ll follow up.
        </p>
      )}
    </form>
  );
}
