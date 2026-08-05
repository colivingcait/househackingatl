import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("running-the-numbers")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "The four numbers to run before buying a house hack, and how real estate actually builds wealth beyond monthly cash flow.",
};

export default function RunningTheNumbersPage() {
  return <HubPage hub={hub} />;
}
