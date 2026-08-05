import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";

const hub = getHub("money-and-taxes")!;

export const metadata: Metadata = {
  title: hub.name,
  description:
    "How real estate is treated differently for tax purposes — depreciation, deductions, and what changes when you sell or move out. Education, not advice.",
};

export default function MoneyAndTaxesPage() {
  return <HubPage hub={hub} />;
}
