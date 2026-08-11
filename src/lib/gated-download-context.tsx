"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Subscriber = { email: string; firstName: string; phone: string };
type GatedDownloadCtx = {
  subscriber: Subscriber | null;
  unlock: (subscriber: Subscriber) => void;
};

const GatedDownloadContext = createContext<GatedDownloadCtx | null>(null);

/**
 * Shares one visitor's email across every GatedDownload on the page, so
 * grabbing all five resources means filling out the form once, not five
 * times. Components outside this provider (e.g. a single inline lead
 * magnet embedded in an article) just get `null` back and fall back to
 * their own independent form — see useGatedDownload.
 */
export function GatedDownloadProvider({ children }: { children: ReactNode }) {
  const [subscriber, setSubscriber] = useState<Subscriber | null>(null);
  return (
    <GatedDownloadContext.Provider value={{ subscriber, unlock: setSubscriber }}>
      {children}
    </GatedDownloadContext.Provider>
  );
}

export function useGatedDownload() {
  return useContext(GatedDownloadContext);
}
