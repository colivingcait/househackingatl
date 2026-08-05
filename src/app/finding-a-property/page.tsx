import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("finding-a-property")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "What makes a house hack property actually work — walkthroughs, duplex vs single-family, where it pencils out in metro Atlanta, and renovation planning.",
};

export default function FindingAPropertyPage() {
  return <HubPage hub={hub} />;
}
