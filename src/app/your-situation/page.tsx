import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

const hub = getHub("your-situation")!;

export const metadata = pageMetadata({
  path: "/your-situation",
  title: hub.name,
  description:
    "House hacking with a partner, kids, or on one income — plus the long game from your first house hack to house stacking.",
});

export default function YourSituationPage() {
  return <HubPage hub={hub} />;
}
