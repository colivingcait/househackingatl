"use client";

import { useState, type FormEvent } from "react";
import { trackStandardEvent } from "@/lib/analytics";

type Variant = "listing-alerts" | "newsletter";

const COPY: Record<
  Variant,
  { heading: string; sub: string; cta: string; fbEvent: string }
> = {
  "listing-alerts": {
    heading: "Get new house hack listings",
    sub: "A metro-wide search for genuine house hack candidates, sent straight to your inbox as they hit the market.",
    cta: "Send me listings",
    fbEvent: "Lead",
  },
  newsletter: {
    heading: "Stay in the loop",
    sub: "Meetup reminders and the occasional useful thing about house hacking in Atlanta. No spam.",
    cta: "Sign me up",
    fbEvent: "Lead",
  },
};

export default function KitSignupForm({
  variant,
  formId,
}: {
  variant: Variant;
  formId: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const copy = COPY[variant];

  if (!formId) {
    return (
      <div className="rounded-2xl border border-dashed border-sage-300 bg-sage-50 p-6">
        <p className="font-display font-semibold text-pine-800">{copy.heading}</p>
        <p className="mt-1 text-sm text-pine-700">
          Signup coming soon — connect a Kit form ID to enable this.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://app.kit.com/forms/${formId}/subscriptions`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );
      if (res.ok) {
        setStatus("success");
        trackStandardEvent(copy.fbEvent, { content_name: variant });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-pine-200 bg-sage-50 p-6">
        <p className="font-display font-semibold text-pine-800">You&apos;re in.</p>
        <p className="mt-1 text-sm text-pine-700">
          Check your inbox to confirm — that&apos;s how we know it&apos;s really you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-pine-200 bg-white p-6 shadow-sm"
    >
      <p className="font-display text-lg font-semibold text-pine-900">{copy.heading}</p>
      <p className="mt-1 text-sm text-pine-700">{copy.sub}</p>

      <div className="mt-4 flex flex-col gap-3">
        <input
          type="text"
          name="fields[first_name]"
          placeholder="First name"
          required
          className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
        />
        <input
          type="email"
          name="email_address"
          placeholder="Email address"
          required
          className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
        />

        {variant === "listing-alerts" && (
          <>
            <input
              type="text"
              name="fields[price_range]"
              placeholder="Target price range (e.g. $350k–$450k)"
              className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
            />
            <input
              type="text"
              name="fields[target_areas]"
              placeholder="Areas you're watching (e.g. East Point, Decatur)"
              className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
            />
          </>
        )}

        <button
          type="submit"
          className="mt-1 rounded-full bg-clay-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-clay-700"
        >
          {copy.cta}
        </button>

        {status === "error" && (
          <p className="text-sm text-clay-700">
            Something went wrong — mind trying again?
          </p>
        )}
      </div>
    </form>
  );
}
