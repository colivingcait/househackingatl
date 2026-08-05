import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

const hub = getHub("running-the-numbers")!;

export const metadata = pageMetadata({
  path: "/running-the-numbers",
  title: hub.name,
  description:
    "The four numbers to run before buying a house hack, and how real estate actually builds wealth beyond monthly cash flow.",
});

export default function RunningTheNumbersPage() {
  return <HubPage hub={hub} />;
}
