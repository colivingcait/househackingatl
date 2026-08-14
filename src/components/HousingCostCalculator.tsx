"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculateCostToOwn, calculateEffectiveHousingCost } from "@/lib/mortgage";

type Strategy = "ltr" | "mtr" | "str" | "room";

const STRATEGIES: { id: Strategy; label: string }[] = [
  { id: "ltr", label: "Long-term rental" },
  { id: "mtr", label: "Mid-term rental" },
  { id: "str", label: "Short-term rental" },
  { id: "room", label: "Room rental" },
];

// A reasonable starting point, not a real quote — every field is editable.
// Rate default is a flat, hand-set estimate rather than a live lookup.
const DEFAULT_RATE = 6.5;

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function NumberField({
  label,
  value,
  onChange,
  prefix = "$",
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-pine-800">{label}</span>
      <div className="mt-1 flex items-center gap-1 rounded-lg border border-pine-200 px-3 py-2 focus-within:border-clay-500">
        {prefix && <span className="text-sm text-pine-500">{prefix}</span>}
        <input
          type="number"
          value={Number.isNaN(value) ? "" : value}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          className="w-full min-w-0 text-sm text-pine-900 focus:outline-none"
        />
        {suffix && <span className="text-sm text-pine-500">{suffix}</span>}
      </div>
    </label>
  );
}

export default function HousingCostCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(17500);
  const [termYears, setTermYears] = useState<15 | 30>(30);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [annualPropertyTax, setAnnualPropertyTax] = useState(3850);
  const [annualHomeInsurance, setAnnualHomeInsurance] = useState(1800);
  const [monthlyHoa, setMonthlyHoa] = useState(0);
  const [includePmi, setIncludePmi] = useState(true);
  const [monthlyPmi, setMonthlyPmi] = useState(150);
  const [strategy, setStrategy] = useState<Strategy>("room");
  const [monthlyRentalIncome, setMonthlyRentalIncome] = useState(1200);

  const downPaymentPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;

  const breakdown = useMemo(
    () =>
      calculateCostToOwn({
        homePrice,
        downPayment,
        annualRatePercent: rate,
        termYears,
        annualPropertyTax,
        annualHomeInsurance,
        monthlyHoa,
        monthlyPmi: includePmi ? monthlyPmi : 0,
      }),
    [homePrice, downPayment, rate, termYears, annualPropertyTax, annualHomeInsurance, monthlyHoa, includePmi, monthlyPmi]
  );

  const effectiveHousingCost = calculateEffectiveHousingCost(breakdown.costToOwn, monthlyRentalIncome);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      {/* Inputs */}
      <div className="flex flex-col gap-4 rounded-2xl border border-pine-200 bg-white p-6 shadow-sm">
        <NumberField label="Home price" value={homePrice} onChange={setHomePrice} />

        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Down payment" value={downPayment} onChange={setDownPayment} />
          <NumberField
            label="Down payment %"
            value={Math.round(downPaymentPercent * 10) / 10}
            onChange={(pct) => setDownPayment(Math.round((homePrice * pct) / 100))}
            prefix=""
            suffix="%"
          />
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-pine-800">Loan term</span>
          <div className="mt-1 flex gap-2">
            {([30, 15] as const).map((years) => (
              <button
                key={years}
                type="button"
                onClick={() => setTermYears(years)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                  termYears === years
                    ? "border-clay-600 bg-clay-50 text-clay-700"
                    : "border-pine-200 text-pine-700 hover:bg-sage-50"
                }`}
              >
                {years}-year fixed
              </button>
            ))}
          </div>
        </label>

        <NumberField label="Interest rate" value={rate} onChange={setRate} prefix="" suffix="%" />
        <p className="-mt-2 text-xs text-pine-500">
          Editable estimate, not a live quote — check{" "}
          <a
            href="https://www.freddiemac.com/pmms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pine-700"
          >
            current average rates
          </a>{" "}
          or ask a lender for a real one.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Property tax" value={annualPropertyTax} onChange={setAnnualPropertyTax} suffix="/yr" />
          <NumberField label="Home insurance" value={annualHomeInsurance} onChange={setAnnualHomeInsurance} suffix="/yr" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <NumberField label="HOA dues" value={monthlyHoa} onChange={setMonthlyHoa} suffix="/mo" />
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-pine-800">
              <input
                type="checkbox"
                checked={includePmi}
                onChange={(e) => setIncludePmi(e.target.checked)}
                className="h-4 w-4 rounded border-pine-300 text-clay-600 focus:ring-clay-500"
              />
              Include PMI
            </label>
            {includePmi && (
              <div className="mt-1">
                <NumberField label="" value={monthlyPmi} onChange={setMonthlyPmi} suffix="/mo" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-2 border-t border-pine-100 pt-4">
          <span className="text-sm font-semibold text-pine-800">Rental strategy</span>
          <p className="mt-1 text-xs text-pine-500">
            Not sure which fits your space?{" "}
            <Link href="/rental-strategies" className="font-semibold text-clay-600 hover:text-clay-700">
              Read about rental strategies →
            </Link>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {STRATEGIES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStrategy(s.id)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  strategy === s.id
                    ? "border-clay-600 bg-clay-50 text-clay-700"
                    : "border-pine-200 text-pine-700 hover:bg-sage-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <NumberField
          label="Expected monthly rental income"
          value={monthlyRentalIncome}
          onChange={setMonthlyRentalIncome}
        />
      </div>

      {/* Results */}
      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-pine-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">Cost to own</p>
          <p className="mt-1 font-display text-3xl font-bold text-pine-900">{currency(breakdown.costToOwn)}</p>
          <p className="text-sm text-pine-500">per month, before rental income</p>

          <dl className="mt-4 flex flex-col gap-2 border-t border-pine-100 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-pine-600">Principal &amp; interest</dt>
              <dd className="font-medium text-pine-900">{currency(breakdown.principalAndInterest)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-pine-600">Property tax</dt>
              <dd className="font-medium text-pine-900">{currency(breakdown.propertyTax)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-pine-600">Home insurance</dt>
              <dd className="font-medium text-pine-900">{currency(breakdown.homeInsurance)}</dd>
            </div>
            {breakdown.hoa > 0 && (
              <div className="flex justify-between">
                <dt className="text-pine-600">HOA</dt>
                <dd className="font-medium text-pine-900">{currency(breakdown.hoa)}</dd>
              </div>
            )}
            {breakdown.pmi > 0 && (
              <div className="flex justify-between">
                <dt className="text-pine-600">PMI</dt>
                <dd className="font-medium text-pine-900">{currency(breakdown.pmi)}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="rounded-2xl border-l-4 border-clay-500 bg-clay-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-clay-700">
            Effective housing cost — {STRATEGIES.find((s) => s.id === strategy)?.label.toLowerCase()}
          </p>
          <p className="mt-1 font-display text-3xl font-bold text-pine-900">
            {currency(effectiveHousingCost)}
          </p>
          <p className="text-sm text-pine-700">
            what you actually pay out of pocket each month, after {currency(monthlyRentalIncome)} in
            expected rental income
          </p>
        </div>

        <p className="rounded-xl border border-pine-100 bg-sage-50 p-4 text-xs leading-relaxed text-pine-500">
          This is an estimate to help you compare properties and rental strategies — not a loan quote, a
          rent guarantee, or personalized financial advice. Actual rates, taxes, insurance, and achievable
          rent vary. Talk to a lender for real numbers on your specific situation.
        </p>
      </div>
    </div>
  );
}
