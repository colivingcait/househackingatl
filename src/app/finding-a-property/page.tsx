import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

const hub = getHub("finding-a-property")!;

export const metadata = pageMetadata({
  path: "/finding-a-property",
  title: hub.name,
  description:
    "What makes a house hack property actually work — walkthroughs, duplex vs single-family, where it pencils out in metro Atlanta, and renovation planning.",
});

export default function FindingAPropertyPage() {
  return <HubPage hub={hub} />;
}
