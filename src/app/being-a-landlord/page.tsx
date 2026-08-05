import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

const hub = getHub("being-a-landlord")!;

export const metadata = pageMetadata({
  path: "/being-a-landlord",
  title: hub.name,
  description:
    "Everything about operating a house hack — screening residents, leases and security deposits, day-to-day living together, and what to do when something goes wrong.",
});

export default function BeingALandlordPage() {
  return <HubPage hub={hub} />;
}
