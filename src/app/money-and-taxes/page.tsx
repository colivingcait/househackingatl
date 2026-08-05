import HubPage from "@/components/HubPage";
import { getHub } from "@/data/hubs";
import { pageMetadata } from "@/lib/metadata";

const hub = getHub("money-and-taxes")!;

export const metadata = pageMetadata({
  path: "/money-and-taxes",
  title: hub.name,
  description:
    "How real estate is treated differently for tax purposes — depreciation, deductions, and what changes when you sell or move out. Education, not advice.",
});

export default function MoneyAndTaxesPage() {
  return <HubPage hub={hub} />;
}
