import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("financing")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "How owner-occupant financing works for a house hack — questions to ask a lender, qualifying with rental income, FHA 203k, and funding your next property.",
};

export default function FinancingPage() {
  return <HubPage hub={hub} />;
}
