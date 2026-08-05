import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("what-is-house-hacking")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "House hacking is living in one part of your property and renting out another — the four models, how the financing works, and whether it's right for you.",
};

export default function WhatIsHouseHackingPage() {
  return <HubPage hub={hub} />;
}
