import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("your-situation")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "House hacking with a partner, kids, or on one income — plus the long game from your first house hack to house stacking.",
};

export default function YourSituationPage() {
  return <HubPage hub={hub} />;
}
