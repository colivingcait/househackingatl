import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("rental-strategies")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "Furnished vs unfurnished, mid-term rentals, and other ways to rent out your space beyond a standard long-term lease.",
};

export default function RentalStrategiesPage() {
  return <HubPage hub={hub} />;
}
