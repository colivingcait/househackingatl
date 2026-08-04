"use client";

import { useState, type FormEvent } from "react";
import { trackStandardEvent } from "@/lib/analytics";
import type { Resource } from "@/data/resources";
import { kit } from "@/lib/site-config";

export default function GatedDownload({ resource }: { resource: Resource }) {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!kit.resourcesFormId) {
    return (
      <div className="rounded-2xl border border-pine-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
          {resource.stage}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-pine-900">
          {resource.title}
        </h3>
        <p className="mt-2 text-sm text-pine-700">{resource.description}</p>
        <p className="mt-4 text-xs text-pine-500">
          Download coming soon — connect a Kit form ID to enable this.
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
        `https://app.kit.com/forms/${kit.resourcesFormId}/subscriptions`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );
      if (res.ok) {
        setStatus("success");
        trackStandardEvent("Lead", { content_name: `resource:${resource.slug}` });
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
          <input type="hidden" name="fields[resource]" value={resource.title} />
          <input
            type="text"
            name="fields[first_name]"
            placeholder="First name"
            required
            className="rounded-lg border border-pine-200 px-3 py-2 text-sm focus:border-clay-500 focus:outline-none"
          />
          <input
            type="email"
            name="email_address"
            placeholder="Email address"
            required
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
