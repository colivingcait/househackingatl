import { proofStats } from "@/lib/site-config";

export default function StatsStrip() {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {proofStats.map((stat) => (
        <div key={stat.label}>
          <dt className="font-display text-2xl font-bold text-pine-900">{stat.figure}</dt>
          <dd className="mt-1 text-sm text-pine-700">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
