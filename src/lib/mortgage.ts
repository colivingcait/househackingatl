/** Standard fixed-rate amortization formula for monthly principal + interest. */
export function monthlyPrincipalAndInterest({
  loanAmount,
  annualRatePercent,
  termYears,
}: {
  loanAmount: number;
  annualRatePercent: number;
  termYears: number;
}): number {
  if (loanAmount <= 0) return 0;
  const monthlyRate = annualRatePercent / 100 / 12;
  const numPayments = termYears * 12;
  if (monthlyRate === 0) return loanAmount / numPayments;
  const factor = Math.pow(1 + monthlyRate, numPayments);
  return (loanAmount * monthlyRate * factor) / (factor - 1);
}

export type CostToOwnInputs = {
  homePrice: number;
  downPayment: number;
  annualRatePercent: number;
  termYears: number;
  annualPropertyTax: number;
  annualHomeInsurance: number;
  monthlyHoa: number;
  monthlyPmi: number;
};

export type CostToOwnBreakdown = {
  principalAndInterest: number;
  propertyTax: number;
  homeInsurance: number;
  hoa: number;
  pmi: number;
  costToOwn: number;
};

/** The full monthly "cost to own" — P&I plus taxes, insurance, HOA, and PMI. */
export function calculateCostToOwn(inputs: CostToOwnInputs): CostToOwnBreakdown {
  const loanAmount = Math.max(inputs.homePrice - inputs.downPayment, 0);
  const principalAndInterest = monthlyPrincipalAndInterest({
    loanAmount,
    annualRatePercent: inputs.annualRatePercent,
    termYears: inputs.termYears,
  });
  const propertyTax = inputs.annualPropertyTax / 12;
  const homeInsurance = inputs.annualHomeInsurance / 12;

  const costToOwn =
    principalAndInterest + propertyTax + homeInsurance + inputs.monthlyHoa + inputs.monthlyPmi;

  return {
    principalAndInterest,
    propertyTax,
    homeInsurance,
    hoa: inputs.monthlyHoa,
    pmi: inputs.monthlyPmi,
    costToOwn,
  };
}

/** What's left to actually pay out of pocket once expected rental income is applied. */
export function calculateEffectiveHousingCost(costToOwn: number, monthlyRentalIncome: number): number {
  return costToOwn - monthlyRentalIncome;
}
