"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { trackStandardEvent } from "@/lib/analytics";
import { crm } from "@/lib/site-config";

type Variant = "listing-alerts" | "newsletter";

const SOURCE: Record<Variant, string> = {
  "listing-alerts": "listing_alerts",
  newsletter: "newsletter",
};

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

export default function KitSignupForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const copy = COPY[variant];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first_name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");

    try {
      const res = await fetch(crm.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName,
          email,
          ...(phone ? { phone } : {}),
          source: SOURCE[variant],
        }),
      });
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
        <p className="mt-1 text-sm text-pine-700">Thanks for signing up.</p>
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
          name="first_name"
          placeholder="First name"
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
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className="rounded-lg border border-pine-200 px-4 py-2.5 text-sm focus:border-clay-500 focus:outline-none"
        />

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

        <p className="text-xs text-pine-500">
          By signing up you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-pine-700">
            privacy policy
          </Link>
          . Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
