export type PayingParent = 'parent1' | 'parent2' | 'none';

export interface Inputs {
  parent1Income: number;
  parent2Income: number;
  numChildren: number; // 1..5
  parent1ParentingDays: number; // 0..365
  parent2ParentingDays: number; // 0..365
  parent1HealthInsurance: number;
  parent2HealthInsurance: number;
  childcareExpenses: number;
  parent1OtherSupport: number;
  parent2OtherSupport: number;
  extraordinaryExpenses?: number; // e.g., extraordinary medical/education
  deviationAdjustment?: number; // positive increases payer obligation, negative decreases
}

export interface Result {
  combinedIncome: number;
  basicSupport: number;
  parent1SharePct: number;
  parent2SharePct: number;
  parent1Obligation: number;
  parent2Obligation: number;
  finalSupport: number;
  payingParent: PayingParent;
  totalSupportBeforeShares: number;
}

export const SUPPORT_SCHEDULE: { minIncome: number; maxIncome: number; children: number[] }[] = [
  { minIncome: 0, maxIncome: 1000, children: [0, 0, 0, 0, 0] },
  { minIncome: 1000, maxIncome: 2000, children: [167, 263, 333, 381, 422] },
  { minIncome: 2000, maxIncome: 3000, children: [250, 394, 500, 571, 633] },
  { minIncome: 3000, maxIncome: 4000, children: [333, 525, 667, 762, 844] },
  { minIncome: 4000, maxIncome: 5000, children: [417, 656, 833, 952, 1056] },
  { minIncome: 5000, maxIncome: 6000, children: [500, 788, 1000, 1143, 1267] },
  { minIncome: 6000, maxIncome: 7000, children: [583, 919, 1167, 1333, 1478] },
  { minIncome: 7000, maxIncome: 8000, children: [667, 1050, 1333, 1524, 1689] },
  { minIncome: 8000, maxIncome: 9000, children: [750, 1181, 1500, 1714, 1900] },
  { minIncome: 9000, maxIncome: 10000, children: [833, 1313, 1667, 1905, 2111] },
  { minIncome: 10000, maxIncome: 15000, children: [1042, 1641, 2083, 2381, 2639] },
  { minIncome: 15000, maxIncome: 20000, children: [1250, 1969, 2500, 2857, 3167] },
  { minIncome: 20000, maxIncome: 30000, children: [1458, 2297, 2917, 3333, 3694] }
];

export function getBasicSupport(combinedIncome: number, numChildren: number): number {
  for (const bracket of SUPPORT_SCHEDULE) {
    if (combinedIncome >= bracket.minIncome && combinedIncome < bracket.maxIncome) {
      return bracket.children[numChildren - 1] || 0;
    }
  }
  if (combinedIncome >= 30000) {
    const baseAmount = SUPPORT_SCHEDULE[SUPPORT_SCHEDULE.length - 1].children[numChildren - 1] || 0;
    const factor = Math.min(combinedIncome / 30000, 2.5); // Cap growth at 2.5x for high incomes
    return Math.round(baseAmount * factor);
  }
  return 0;
}

export function calculateChildSupport(inputs: Inputs): Result {
  const {
    parent1Income,
    parent2Income,
    numChildren,
    parent1ParentingDays,
    parent2ParentingDays,
    parent1HealthInsurance,
    parent2HealthInsurance,
    childcareExpenses,
    parent1OtherSupport,
    parent2OtherSupport,
    extraordinaryExpenses = 0,
    deviationAdjustment = 0,
  } = inputs;

  const combinedIncome = parent1Income + parent2Income;
  const basicSupport = getBasicSupport(combinedIncome, numChildren);

  const parent1Share = combinedIncome > 0 ? parent1Income / combinedIncome : 0.5;
  const parent2Share = combinedIncome > 0 ? parent2Income / combinedIncome : 0.5;

  const totalSupport = basicSupport + parent1HealthInsurance + parent2HealthInsurance + childcareExpenses + extraordinaryExpenses;

  let parent1Obligation = totalSupport * parent1Share;
  let parent2Obligation = totalSupport * parent2Share;

  parent1Obligation = Math.max(0, parent1Obligation - parent1OtherSupport);
  parent2Obligation = Math.max(0, parent2Obligation - parent2OtherSupport);

  const totalDays = parent1ParentingDays + parent2ParentingDays;
  if (totalDays > 0) {
    const parent1TimePercent = parent1ParentingDays / totalDays;
    const parent2TimePercent = parent2ParentingDays / totalDays;
    if (parent1TimePercent >= 0.4) {
      parent1Obligation *= 1 - (parent1TimePercent - 0.35) * 0.5;
    }
    if (parent2TimePercent >= 0.4) {
      parent2Obligation *= 1 - (parent2TimePercent - 0.35) * 0.5;
    }
  }

  let finalSupport = 0;
  let payingParent: PayingParent = 'none';
  if (parent1Obligation > parent2Obligation) {
    finalSupport = Math.round(parent1Obligation - parent2Obligation);
    payingParent = 'parent1';
  } else if (parent2Obligation > parent1Obligation) {
    finalSupport = Math.round(parent2Obligation - parent1Obligation);
    payingParent = 'parent2';
  }

  // Apply deviation adjustment to final support (does not change paying parent selection)
  if (finalSupport > 0) {
    finalSupport = Math.max(0, Math.round(finalSupport + deviationAdjustment));
  }

  return {
    combinedIncome,
    basicSupport,
    parent1SharePct: Math.round(parent1Share * 100),
    parent2SharePct: Math.round(parent2Share * 100),
    parent1Obligation: Math.round(parent1Obligation),
    parent2Obligation: Math.round(parent2Obligation),
    finalSupport,
    payingParent,
    totalSupportBeforeShares: Math.round(totalSupport),
  };
}
