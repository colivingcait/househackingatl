/**
 * Thin wrapper around the Meta Pixel global. Safe to call even when the
 * pixel isn't loaded (no NEXT_PUBLIC_META_PIXEL_ID set, or script blocked) —
 * it just no-ops.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
}

export function trackStandardEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}
