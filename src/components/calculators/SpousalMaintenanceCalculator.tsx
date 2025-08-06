'use client';

import React, { useState } from 'react';
import { Calculator, Info, Download, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface MaintenanceFactors {
  // Duration factors
  marriageLength: number;
  ageAtDivorce: number;
  
  // Income factors
  payorMonthlyIncome: number;
  payeeMonthlyIncome: number;
  payorExpenses: number;
  payeeExpenses: number;
  
  // Special circumstances
  hasDisability: boolean;
  careerSacrifice: boolean;
  domesticViolence: boolean;
  educationContribution: boolean;
  propertyDistribution: number;
  
  // Children
  hasMinorChildren: boolean;
  childSupportAmount: number;
}

interface MaintenanceResult {
  eligibleForMaintenance: boolean;
  recommendedAmount: number;
  recommendedDuration: string;
  durationMonths: number;
  factors: string[];
  taxImplications: {
    payorAfterTax: number;
    payeeAfterTax: number;
    taxNote: string;
  };
}

const ARIZONA_FACTORS = {
  marriageDuration: {
    short: { years: 5, multiplier: 0.3 },
    medium: { years: 10, multiplier: 0.5 },
    long: { years: 20, multiplier: 0.7 }
  },
  incomeThreshold: {
    combined: 10000, // Monthly combined income threshold
    differential: 0.25 // 25% income differential threshold
  },
  guidelines: {
    maxPercentOfPayorIncome: 0.33,
    maxCombinedMaintAndSupport: 0.50
  }
};

export default function SpousalMaintenanceCalculator() {
  const [factors, setFactors] = useState<MaintenanceFactors>({
    marriageLength: 0,
    ageAtDivorce: 0,
    payorMonthlyIncome: 0,
    payeeMonthlyIncome: 0,
    payorExpenses: 3000,
    payeeExpenses: 3000,
    hasDisability: false,
    careerSacrifice: false,
    domesticViolence: false,
    educationContribution: false,
    propertyDistribution: 0,
    hasMinorChildren: false,
    childSupportAmount: 0
  });

  const [result, setResult] = useState<MaintenanceResult | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const calculateMaintenance = () => {
    const qualifyingFactors: string[] = [];
    
    // Check basic eligibility
    const incomeDifferential = factors.payorMonthlyIncome - factors.payeeMonthlyIncome;
    const incomeRatio = factors.payeeMonthlyIncome / factors.payorMonthlyIncome;
    
    if (incomeDifferential < 500) {
      setResult({
        eligibleForMaintenance: false,
        recommendedAmount: 0,
        recommendedDuration: 'Not applicable',
        durationMonths: 0,
        factors: ['Income differential too small'],
        taxImplications: {
          payorAfterTax: factors.payorMonthlyIncome,
          payeeAfterTax: factors.payeeMonthlyIncome,
          taxNote: 'No maintenance awarded'
        }
      });
      return;
    }

    // Calculate base amount (using income equalization approach)
    const combinedIncome = factors.payorMonthlyIncome + factors.payeeMonthlyIncome;
    const targetIncome = combinedIncome * 0.4; // Target 40% for payee
    let baseAmount = Math.max(0, targetIncome - factors.payeeMonthlyIncome);

    // Apply payor income cap
    const payorCap = factors.payorMonthlyIncome * ARIZONA_FACTORS.guidelines.maxPercentOfPayorIncome;
    baseAmount = Math.min(baseAmount, payorCap);

    // Apply combined maintenance and support cap
    if (factors.hasMinorChildren && factors.childSupportAmount > 0) {
      const combinedCap = factors.payorMonthlyIncome * ARIZONA_FACTORS.guidelines.maxCombinedMaintAndSupport;
      const availableForMaintenance = Math.max(0, combinedCap - factors.childSupportAmount);
      baseAmount = Math.min(baseAmount, availableForMaintenance);
    }

    // Determine duration based on marriage length
    let durationMonths = 0;
    let durationDescription = '';

    if (factors.marriageLength < 5) {
      durationMonths = Math.floor(factors.marriageLength * 12 * 0.3);
      durationDescription = `${durationMonths} months (short marriage)`;
      qualifyingFactors.push('Short-term marriage (under 5 years)');
    } else if (factors.marriageLength < 10) {
      durationMonths = Math.floor(factors.marriageLength * 12 * 0.5);
      durationDescription = `${durationMonths} months (medium marriage)`;
      qualifyingFactors.push('Medium-term marriage (5-10 years)');
    } else if (factors.marriageLength < 20) {
      durationMonths = Math.floor(factors.marriageLength * 12 * 0.7);
      durationDescription = `${Math.floor(durationMonths/12)} years (long marriage)`;
      qualifyingFactors.push('Long-term marriage (10-20 years)');
    } else {
      durationDescription = 'Indefinite (very long marriage)';
      durationMonths = -1; // Indefinite
      qualifyingFactors.push('Very long marriage (20+ years)');
    }

    // Adjust for special circumstances
    if (factors.hasDisability) {
      baseAmount *= 1.2;
      if (durationMonths > 0) durationMonths *= 1.5;
      qualifyingFactors.push('Disability affecting earning capacity');
    }

    if (factors.careerSacrifice) {
      baseAmount *= 1.15;
      qualifyingFactors.push('Career sacrifice for family');
    }

    if (factors.domesticViolence) {
      baseAmount *= 1.1;
      qualifyingFactors.push('History of domestic violence');
    }

    if (factors.educationContribution) {
      baseAmount *= 1.1;
      qualifyingFactors.push('Contributed to spouse\'s education/career');
    }

    // Consider age
    if (factors.ageAtDivorce > 50) {
      if (durationMonths > 0) durationMonths *= 1.2;
      qualifyingFactors.push('Age over 50 at divorce');
    }

    // Round to nearest $50
    const recommendedAmount = Math.round(baseAmount / 50) * 50;

    // Calculate tax implications (post-2019 tax law)
    const payorAfterTax = factors.payorMonthlyIncome - recommendedAmount;
    const payeeAfterTax = factors.payeeMonthlyIncome + recommendedAmount;

    setResult({
      eligibleForMaintenance: recommendedAmount > 0,
      recommendedAmount,
      recommendedDuration: durationDescription,
      durationMonths,
      factors: qualifyingFactors,
      taxImplications: {
        payorAfterTax,
        payeeAfterTax,
        taxNote: 'Note: Post-2019, alimony is not tax-deductible for payor or taxable for recipient'
      }
    });
  };

  const exportCalculation = () => {
    if (!result) return;

    const report = `ARIZONA SPOUSAL MAINTENANCE CALCULATION
========================================
Generated: ${new Date().toLocaleDateString()}

MARRIAGE INFORMATION:
- Length of Marriage: ${factors.marriageLength} years
- Age at Divorce: ${factors.ageAtDivorce} years

FINANCIAL INFORMATION:
Payor Monthly Income: $${factors.payorMonthlyIncome.toLocaleString()}
Payee Monthly Income: $${factors.payeeMonthlyIncome.toLocaleString()}
Income Differential: $${(factors.payorMonthlyIncome - factors.payeeMonthlyIncome).toLocaleString()}

${factors.hasMinorChildren ? `Child Support: $${factors.childSupportAmount.toLocaleString()}/month` : ''}

CALCULATION RESULTS:
====================
Recommended Maintenance: $${result.recommendedAmount.toLocaleString()}/month
Duration: ${result.recommendedDuration}

QUALIFYING FACTORS:
${result.factors.map(f => `• ${f}`).join('\n')}

POST-MAINTENANCE INCOME:
Payor: $${result.taxImplications.payorAfterTax.toLocaleString()}/month
Payee: $${result.taxImplications.payeeAfterTax.toLocaleString()}/month

TAX NOTE:
${result.taxImplications.taxNote}

DISCLAIMER:
This is an estimate based on general guidelines. Actual spousal maintenance
awards vary based on specific circumstances and judicial discretion.
Always consult with a qualified attorney for your specific situation.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spousal-maintenance-calculation-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold">Spousal Maintenance Calculator</h2>
            </div>
            {result && (
              <Button variant="outline" size="sm" onClick={exportCalculation}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            )}
          </div>

          <InfoCard type="info" className="mb-6">
            Arizona uses statutory factors to determine spousal maintenance. This calculator provides estimates 
            based on common guidelines, but judges have discretion in final awards.
          </InfoCard>

          {/* Basic Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Marriage Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Length of Marriage (years)
                  </label>
                  <input
                    type="number"
                    value={factors.marriageLength}
                    onChange={(e) => setFactors({ ...factors, marriageLength: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Age at Divorce
                  </label>
                  <input
                    type="number"
                    value={factors.ageAtDivorce}
                    onChange={(e) => setFactors({ ...factors, ageAtDivorce: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="18"
                    max="100"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Income Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Higher Earner's Monthly Gross Income
                  </label>
                  <input
                    type="number"
                    value={factors.payorMonthlyIncome}
                    onChange={(e) => setFactors({ ...factors, payorMonthlyIncome: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                    step="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lower Earner's Monthly Gross Income
                  </label>
                  <input
                    type="number"
                    value={factors.payeeMonthlyIncome}
                    onChange={(e) => setFactors({ ...factors, payeeMonthlyIncome: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                    step="100"
                  />
                </div>
              </div>
            </div>

            {/* Child Support */}
            <div>
              <h3 className="font-semibold mb-4">Child Support (if applicable)</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={factors.hasMinorChildren}
                    onChange={(e) => setFactors({ ...factors, hasMinorChildren: e.target.checked })}
                    className="rounded"
                  />
                  <span>There are minor children from the marriage</span>
                </label>
                
                {factors.hasMinorChildren && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Child Support Amount
                    </label>
                    <input
                      type="number"
                      value={factors.childSupportAmount}
                      onChange={(e) => setFactors({ ...factors, childSupportAmount: parseFloat(e.target.value) || 0 })}
                      className="w-full md:w-1/2 px-3 py-2 border rounded-md"
                      min="0"
                      step="50"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Advanced Options */}
            <div>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {showAdvanced ? 'Hide' : 'Show'} Special Circumstances
              </button>
              
              {showAdvanced && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3">Special Circumstances</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.hasDisability}
                        onChange={(e) => setFactors({ ...factors, hasDisability: e.target.checked })}
                        className="rounded"
                      />
                      <span>Disability affecting earning capacity</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.careerSacrifice}
                        onChange={(e) => setFactors({ ...factors, careerSacrifice: e.target.checked })}
                        className="rounded"
                      />
                      <span>Sacrificed career for family/spouse's career</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.educationContribution}
                        onChange={(e) => setFactors({ ...factors, educationContribution: e.target.checked })}
                        className="rounded"
                      />
                      <span>Contributed to spouse's education or career advancement</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.domesticViolence}
                        onChange={(e) => setFactors({ ...factors, domesticViolence: e.target.checked })}
                        className="rounded"
                      />
                      <span>History of domestic violence affecting earning capacity</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={calculateMaintenance}>
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Maintenance
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card className={result.eligibleForMaintenance ? 'border-2 border-green-500' : 'border-2 border-gray-300'}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Calculation Results
            </h3>

            {result.eligibleForMaintenance ? (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Recommended Amount</p>
                    <p className="text-3xl font-bold text-green-600">
                      ${result.recommendedAmount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">per month</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Recommended Duration</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {result.recommendedDuration}
                    </p>
                    {result.durationMonths > 0 && (
                      <p className="text-sm text-gray-600 mt-1">
                        Total: ${(result.recommendedAmount * result.durationMonths).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Qualifying Factors</h4>
                  <ul className="space-y-2">
                    {result.factors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Post-Maintenance Income</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Payor (after payment)</p>
                      <p className="font-semibold">${result.taxImplications.payorAfterTax.toLocaleString()}/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Recipient (after receipt)</p>
                      <p className="font-semibold">${result.taxImplications.payeeAfterTax.toLocaleString()}/month</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <p className="text-sm text-yellow-800">{result.taxImplications.taxNote}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-gray-700">No Maintenance Recommended</p>
                <p className="text-gray-600 mt-2">Based on the information provided, spousal maintenance may not be warranted.</p>
                {result.factors.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Reason: {result.factors.join(', ')}</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Disclaimer */}
      <InfoCard type="warning">
        <p className="font-semibold mb-2">Important Disclaimer</p>
        <p>This calculator provides estimates only. Actual spousal maintenance awards depend on judicial discretion and consideration of all statutory factors under A.R.S. § 25-319. Always consult with a qualified attorney for your specific situation.</p>
      </InfoCard>
    </div>
  );
}