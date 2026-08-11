"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { trackStandardEvent } from "@/lib/analytics";
import type { Resource } from "@/data/resources";
import { crm } from "@/lib/site-config";
import { useGatedDownload } from "@/lib/gated-download-context";

function submitToCrm(resource: Resource, name: string, email: string, phone: string) {
  return fetch(crm.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      ...(phone ? { phone } : {}),
      source: "gated_download",
      sourceDetail: resource.title,
    }),
  });
}

export default function GatedDownload({ resource }: { resource: Resource }) {
  const shared = useGatedDownload();
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Already gave us their info for another resource on this page this
  // visit — unlock this one immediately instead of asking again. The
  // per-resource detail still gets sent to the CRM for tracking, just
  // silently in the background; we don't gate the download on it.
  useEffect(() => {
    if (shared?.subscriber && status === "idle") {
      setStatus("success");
      submitToCrm(
        resource,
        shared.subscriber.firstName,
        shared.subscriber.email,
        shared.subscriber.phone
      ).catch(() => {});
    }
  }, [shared?.subscriber, status, resource]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first_name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");

    try {
      const res = await submitToCrm(resource, firstName, email, phone);
      if (res.ok) {
        setStatus("success");
        trackStandardEvent("Lead", { content_name: `resource:${resource.slug}` });
        shared?.unlock({ firstName, email, phone });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-pine-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
        {resource.stage}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold text-pine-900">
        {resource.title}
      </h3>
      <p className="mt-2 text-sm text-pine-700">{resource.description}</p>

      {status === "success" ? (
        <div className="mt-4 rounded-lg bg-sage-50 p-4">
          <p className="text-sm font-semibold text-pine-800">You&apos;re in.</p>
          <a
            href={resource.file}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
          >
            Download {resource.title} →
          </a>
        </div>
      ) : formOpen ? (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="rounded-lg border border-pine-200 px-3 py-2 text-sm focus:border-clay-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="rounded-lg border border-pine-200 px-3 py-2 text-sm focus:border-clay-500 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="rounded-lg border border-pine-200 px-3 py-2 text-sm focus:border-clay-500 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-1 rounded-full bg-clay-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-clay-700"
          >
            Get the download
          </button>
          {status === "error" && (
            <p className="text-sm text-clay-700">
              Something went wrong — mind trying again?
            </p>
          )}
          <p className="text-xs text-pine-500">
            By downloading you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-pine-700">
              privacy policy
            </Link>
            .
          </p>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setFormOpen(true)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
        >
          Get the free download →
        </button>
      )}
    </div>
  );
}
