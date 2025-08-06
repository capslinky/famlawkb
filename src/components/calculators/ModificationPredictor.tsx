'use client';

import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, CheckCircle, XCircle, Info, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface ModificationFactors {
  modificationType: 'child_support' | 'spousal_maintenance' | 'custody' | 'parenting_time';
  
  // Financial changes (for support modifications)
  payorIncomeOld: number;
  payorIncomeNew: number;
  payeeIncomeOld: number;
  payeeIncomeNew: number;
  
  // Child-related changes
  childrenAgeChange: boolean;
  childcareChange: boolean;
  healthInsuranceChange: boolean;
  educationExpenseChange: boolean;
  
  // Custody/Parenting time factors
  parentingTimeOld: number; // percentage
  parentingTimeNew: number; // percentage
  relocation: boolean;
  substanceAbuse: boolean;
  domesticViolence: boolean;
  childPreference: boolean;
  parentalFitness: boolean;
  
  // General factors
  timeSinceLastOrder: number; // months
  agreementType: 'mutual' | 'contested';
  emergencyCircumstances: boolean;
}

interface PredictionResult {
  likelihood: 'very_high' | 'high' | 'moderate' | 'low' | 'very_low';
  percentage: number;
  qualifyingFactors: string[];
  disqualifyingFactors: string[];
  recommendations: string[];
  estimatedTimeframe: string;
  estimatedCost: { low: number; high: number };
  requiredEvidence: string[];
}

export default function ModificationPredictor() {
  const [factors, setFactors] = useState<ModificationFactors>({
    modificationType: 'child_support',
    payorIncomeOld: 0,
    payorIncomeNew: 0,
    payeeIncomeOld: 0,
    payeeIncomeNew: 0,
    childrenAgeChange: false,
    childcareChange: false,
    healthInsuranceChange: false,
    educationExpenseChange: false,
    parentingTimeOld: 50,
    parentingTimeNew: 50,
    relocation: false,
    substanceAbuse: false,
    domesticViolence: false,
    childPreference: false,
    parentalFitness: false,
    timeSinceLastOrder: 0,
    agreementType: 'contested',
    emergencyCircumstances: false
  });

  const [result, setResult] = useState<PredictionResult | null>(null);

  const calculatePrediction = () => {
    let score = 50; // Base score
    const qualifyingFactors: string[] = [];
    const disqualifyingFactors: string[] = [];
    const recommendations: string[] = [];
    const requiredEvidence: string[] = [];

    // Time since last order check
    if (factors.timeSinceLastOrder < 12) {
      score -= 30;
      disqualifyingFactors.push('Less than 12 months since last order');
      recommendations.push('Wait until 12 months have passed unless emergency circumstances exist');
    } else {
      qualifyingFactors.push(`${factors.timeSinceLastOrder} months since last order`);
    }

    // Check for emergency circumstances
    if (factors.emergencyCircumstances) {
      score += 20;
      qualifyingFactors.push('Emergency circumstances present');
    }

    // Agreement type
    if (factors.agreementType === 'mutual') {
      score += 30;
      qualifyingFactors.push('Both parties agree to modification');
      recommendations.push('File stipulated agreement for faster processing');
    }

    // Type-specific calculations
    switch (factors.modificationType) {
      case 'child_support':
        score = calculateChildSupportModification(score, factors, qualifyingFactors, disqualifyingFactors, requiredEvidence);
        break;
      case 'spousal_maintenance':
        score = calculateSpousalMaintenanceModification(score, factors, qualifyingFactors, disqualifyingFactors, requiredEvidence);
        break;
      case 'custody':
        score = calculateCustodyModification(score, factors, qualifyingFactors, disqualifyingFactors, requiredEvidence);
        break;
      case 'parenting_time':
        score = calculateParentingTimeModification(score, factors, qualifyingFactors, disqualifyingFactors, requiredEvidence);
        break;
    }

    // Determine likelihood
    let likelihood: PredictionResult['likelihood'];
    if (score >= 80) likelihood = 'very_high';
    else if (score >= 65) likelihood = 'high';
    else if (score >= 50) likelihood = 'moderate';
    else if (score >= 35) likelihood = 'low';
    else likelihood = 'very_low';

    // Estimate timeframe
    let estimatedTimeframe = '';
    if (factors.agreementType === 'mutual') {
      estimatedTimeframe = '2-4 months';
    } else if (factors.emergencyCircumstances) {
      estimatedTimeframe = '1-2 months';
    } else {
      estimatedTimeframe = '4-8 months';
    }

    // Estimate costs
    let estimatedCost = { low: 0, high: 0 };
    if (factors.agreementType === 'mutual') {
      estimatedCost = { low: 500, high: 2000 };
    } else {
      switch (factors.modificationType) {
        case 'child_support':
        case 'spousal_maintenance':
          estimatedCost = { low: 2000, high: 5000 };
          break;
        case 'custody':
        case 'parenting_time':
          estimatedCost = { low: 3000, high: 10000 };
          break;
      }
    }

    // Generate recommendations
    if (score < 50) {
      recommendations.push('Consider waiting for more substantial changes before filing');
      recommendations.push('Document all changes thoroughly before proceeding');
    } else {
      recommendations.push('Gather all supporting documentation immediately');
      recommendations.push('Consider mediation before filing if not mutually agreed');
    }

    if (factors.modificationType === 'custody' || factors.modificationType === 'parenting_time') {
      recommendations.push('Consider best interests of the child factors');
      recommendations.push('Document all parenting concerns with dates and details');
    }

    setResult({
      likelihood,
      percentage: Math.min(100, Math.max(0, score)),
      qualifyingFactors,
      disqualifyingFactors,
      recommendations,
      estimatedTimeframe,
      estimatedCost,
      requiredEvidence
    });
  };

  const calculateChildSupportModification = (
    baseScore: number,
    factors: ModificationFactors,
    qualifyingFactors: string[],
    disqualifyingFactors: string[],
    requiredEvidence: string[]
  ): number => {
    let score = baseScore;
    
    // Calculate income changes
    const payorIncomeChange = Math.abs(factors.payorIncomeNew - factors.payorIncomeOld) / factors.payorIncomeOld * 100;
    const payeeIncomeChange = Math.abs(factors.payeeIncomeNew - factors.payeeIncomeOld) / factors.payeeIncomeOld * 100;
    
    // Arizona 15% or $50/month rule
    const oldSupport = factors.payorIncomeOld * 0.15; // Simplified calculation
    const newSupport = factors.payorIncomeNew * 0.15;
    const supportChange = Math.abs(newSupport - oldSupport);
    
    if (supportChange >= 50 || (supportChange / oldSupport * 100) >= 15) {
      score += 25;
      qualifyingFactors.push('Meets 15% or $50/month threshold');
    } else {
      score -= 20;
      disqualifyingFactors.push('Does not meet 15% or $50/month threshold');
    }

    if (payorIncomeChange >= 20) {
      score += 15;
      qualifyingFactors.push(`Payor income changed by ${payorIncomeChange.toFixed(1)}%`);
    }

    if (payeeIncomeChange >= 20) {
      score += 15;
      qualifyingFactors.push(`Payee income changed by ${payeeIncomeChange.toFixed(1)}%`);
    }

    // Other factors
    if (factors.childcareChange) {
      score += 10;
      qualifyingFactors.push('Childcare expenses changed');
      requiredEvidence.push('Childcare receipts and enrollment documents');
    }

    if (factors.healthInsuranceChange) {
      score += 10;
      qualifyingFactors.push('Health insurance costs changed');
      requiredEvidence.push('Insurance premium statements');
    }

    if (factors.educationExpenseChange) {
      score += 5;
      qualifyingFactors.push('Education expenses changed');
      requiredEvidence.push('Tuition statements and education costs');
    }

    requiredEvidence.push('Current pay stubs (both parties)');
    requiredEvidence.push('Tax returns (2 years)');
    requiredEvidence.push('Updated financial affidavit');

    return score;
  };

  const calculateSpousalMaintenanceModification = (
    baseScore: number,
    factors: ModificationFactors,
    qualifyingFactors: string[],
    disqualifyingFactors: string[],
    requiredEvidence: string[]
  ): number => {
    let score = baseScore;
    
    const payorIncomeChange = Math.abs(factors.payorIncomeNew - factors.payorIncomeOld) / factors.payorIncomeOld * 100;
    const payeeIncomeChange = Math.abs(factors.payeeIncomeNew - factors.payeeIncomeOld) / factors.payeeIncomeOld * 100;
    
    // Substantial and continuing change
    if (payorIncomeChange >= 25 || payeeIncomeChange >= 25) {
      score += 30;
      qualifyingFactors.push('Substantial change in financial circumstances');
    } else if (payorIncomeChange >= 15 || payeeIncomeChange >= 15) {
      score += 15;
      qualifyingFactors.push('Moderate change in financial circumstances');
    } else {
      score -= 15;
      disqualifyingFactors.push('Insufficient change in circumstances');
    }

    requiredEvidence.push('Employment records');
    requiredEvidence.push('Medical records if disability claimed');
    requiredEvidence.push('Evidence of job search if unemployed');
    requiredEvidence.push('Current financial statements');

    return score;
  };

  const calculateCustodyModification = (
    baseScore: number,
    factors: ModificationFactors,
    qualifyingFactors: string[],
    disqualifyingFactors: string[],
    requiredEvidence: string[]
  ): number => {
    let score = baseScore;
    
    // Major factors
    if (factors.domesticViolence) {
      score += 35;
      qualifyingFactors.push('Domestic violence concerns');
      requiredEvidence.push('Police reports');
      requiredEvidence.push('Protection order documentation');
      requiredEvidence.push('Medical records of injuries');
    }

    if (factors.substanceAbuse) {
      score += 30;
      qualifyingFactors.push('Substance abuse issues');
      requiredEvidence.push('Drug test results');
      requiredEvidence.push('Treatment records');
      requiredEvidence.push('DUI or criminal records');
    }

    if (factors.relocation) {
      score += 25;
      qualifyingFactors.push('Parent relocation affecting custody');
      requiredEvidence.push('Proof of new residence');
      requiredEvidence.push('Distance and travel time analysis');
    }

    if (factors.parentalFitness) {
      score += 20;
      qualifyingFactors.push('Concerns about parental fitness');
      requiredEvidence.push('CPS reports if applicable');
      requiredEvidence.push('Witness statements');
    }

    if (factors.childPreference && factors.childrenAgeChange) {
      score += 15;
      qualifyingFactors.push('Child old enough to express preference');
      requiredEvidence.push('Child interview or testimony (if appropriate)');
    }

    // Need substantial change for custody
    if (score < 70 && factors.agreementType === 'contested') {
      disqualifyingFactors.push('May not meet substantial change threshold for custody');
    }

    requiredEvidence.push('School records');
    requiredEvidence.push('Medical records for children');
    requiredEvidence.push('Parenting time logs');

    return score;
  };

  const calculateParentingTimeModification = (
    baseScore: number,
    factors: ModificationFactors,
    qualifyingFactors: string[],
    disqualifyingFactors: string[],
    requiredEvidence: string[]
  ): number => {
    let score = baseScore;
    
    const parentingTimeChange = Math.abs(factors.parentingTimeNew - factors.parentingTimeOld);
    
    if (parentingTimeChange >= 20) {
      score += 25;
      qualifyingFactors.push(`Requesting ${parentingTimeChange}% change in parenting time`);
    } else if (parentingTimeChange >= 10) {
      score += 15;
      qualifyingFactors.push(`Requesting ${parentingTimeChange}% change in parenting time`);
    } else {
      score -= 10;
      disqualifyingFactors.push('Minimal change in parenting time requested');
    }

    // Factors similar to custody but less stringent
    if (factors.relocation) {
      score += 20;
      qualifyingFactors.push('Relocation affecting parenting time');
    }

    if (factors.childrenAgeChange) {
      score += 10;
      qualifyingFactors.push('Children\'s needs changed with age');
    }

    requiredEvidence.push('Current parenting time records');
    requiredEvidence.push('Proposed parenting schedule');
    requiredEvidence.push('Evidence of missed or denied parenting time');

    return score;
  };

  const exportPrediction = () => {
    if (!result) return;

    const report = `MODIFICATION LIKELIHOOD PREDICTION
====================================
Generated: ${new Date().toLocaleDateString()}

MODIFICATION TYPE: ${factors.modificationType.replace('_', ' ').toUpperCase()}
AGREEMENT TYPE: ${factors.agreementType === 'mutual' ? 'Mutual Agreement' : 'Contested'}
TIME SINCE LAST ORDER: ${factors.timeSinceLastOrder} months

PREDICTION RESULTS:
==================
Likelihood of Success: ${result.likelihood.replace('_', ' ').toUpperCase()}
Confidence Score: ${result.percentage}%
Estimated Timeframe: ${result.estimatedTimeframe}
Estimated Cost: $${result.estimatedCost.low.toLocaleString()} - $${result.estimatedCost.high.toLocaleString()}

QUALIFYING FACTORS:
${result.qualifyingFactors.map(f => `✓ ${f}`).join('\n')}

DISQUALIFYING FACTORS:
${result.disqualifyingFactors.map(f => `✗ ${f}`).join('\n') || 'None identified'}

REQUIRED EVIDENCE:
${result.requiredEvidence.map(e => `• ${e}`).join('\n')}

RECOMMENDATIONS:
${result.recommendations.map(r => `• ${r}`).join('\n')}

DISCLAIMER:
This prediction is based on general factors and does not guarantee any specific outcome.
Court decisions depend on many factors and judicial discretion.
Always consult with a qualified attorney before filing for modification.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `modification-prediction-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  const getLikelihoodColor = (likelihood: PredictionResult['likelihood']) => {
    switch (likelihood) {
      case 'very_high': return 'text-green-600 bg-green-50';
      case 'high': return 'text-green-500 bg-green-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-orange-600 bg-orange-50';
      case 'very_low': return 'text-red-600 bg-red-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Modification Success Predictor</h2>
            </div>
            {result && (
              <Button variant="outline" size="sm" onClick={exportPrediction}>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            )}
          </div>

          <InfoCard type="info" className="mb-6">
            This tool predicts the likelihood of successfully modifying court orders based on Arizona law.
            Results are estimates only and do not guarantee any specific outcome.
          </InfoCard>

          {/* Modification Type */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">What do you want to modify?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="child_support"
                    checked={factors.modificationType === 'child_support'}
                    onChange={(e) => setFactors({ ...factors, modificationType: 'child_support' })}
                  />
                  <span>Child Support</span>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="spousal_maintenance"
                    checked={factors.modificationType === 'spousal_maintenance'}
                    onChange={(e) => setFactors({ ...factors, modificationType: 'spousal_maintenance' })}
                  />
                  <span>Spousal Maintenance</span>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="custody"
                    checked={factors.modificationType === 'custody'}
                    onChange={(e) => setFactors({ ...factors, modificationType: 'custody' })}
                  />
                  <span>Child Custody</span>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="parenting_time"
                    checked={factors.modificationType === 'parenting_time'}
                    onChange={(e) => setFactors({ ...factors, modificationType: 'parenting_time' })}
                  />
                  <span>Parenting Time</span>
                </label>
              </div>
            </div>

            {/* General Factors */}
            <div>
              <h3 className="font-semibold mb-3">General Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Months Since Last Order
                  </label>
                  <input
                    type="number"
                    value={factors.timeSinceLastOrder}
                    onChange={(e) => setFactors({ ...factors, timeSinceLastOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Agreement Type
                  </label>
                  <select
                    value={factors.agreementType}
                    onChange={(e) => setFactors({ ...factors, agreementType: e.target.value as 'mutual' | 'contested' })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="contested">Contested (Other party disagrees)</option>
                    <option value="mutual">Mutual (Both parties agree)</option>
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  checked={factors.emergencyCircumstances}
                  onChange={(e) => setFactors({ ...factors, emergencyCircumstances: e.target.checked })}
                  className="rounded"
                />
                <span>Emergency circumstances exist</span>
              </label>
            </div>

            {/* Financial Factors (for support modifications) */}
            {(factors.modificationType === 'child_support' || factors.modificationType === 'spousal_maintenance') && (
              <div>
                <h3 className="font-semibold mb-3">Income Changes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payor\'s Old Monthly Income
                    </label>
                    <input
                      type="number"
                      value={factors.payorIncomeOld}
                      onChange={(e) => setFactors({ ...factors, payorIncomeOld: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payor\'s New Monthly Income
                    </label>
                    <input
                      type="number"
                      value={factors.payorIncomeNew}
                      onChange={(e) => setFactors({ ...factors, payorIncomeNew: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payee\'s Old Monthly Income
                    </label>
                    <input
                      type="number"
                      value={factors.payeeIncomeOld}
                      onChange={(e) => setFactors({ ...factors, payeeIncomeOld: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payee\'s New Monthly Income
                    </label>
                    <input
                      type="number"
                      value={factors.payeeIncomeNew}
                      onChange={(e) => setFactors({ ...factors, payeeIncomeNew: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      min="0"
                    />
                  </div>
                </div>

                {factors.modificationType === 'child_support' && (
                  <div className="mt-4 space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.childcareChange}
                        onChange={(e) => setFactors({ ...factors, childcareChange: e.target.checked })}
                        className="rounded"
                      />
                      <span>Childcare expenses changed significantly</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.healthInsuranceChange}
                        onChange={(e) => setFactors({ ...factors, healthInsuranceChange: e.target.checked })}
                        className="rounded"
                      />
                      <span>Health insurance costs changed</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={factors.educationExpenseChange}
                        onChange={(e) => setFactors({ ...factors, educationExpenseChange: e.target.checked })}
                        className="rounded"
                      />
                      <span>Education expenses changed</span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* Custody/Parenting Time Factors */}
            {(factors.modificationType === 'custody' || factors.modificationType === 'parenting_time') && (
              <div>
                <h3 className="font-semibold mb-3">Custody/Parenting Time Factors</h3>
                
                {factors.modificationType === 'parenting_time' && (
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Parenting Time %
                      </label>
                      <input
                        type="number"
                        value={factors.parentingTimeOld}
                        onChange={(e) => setFactors({ ...factors, parentingTimeOld: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border rounded-md"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Requested Parenting Time %
                      </label>
                      <input
                        type="number"
                        value={factors.parentingTimeNew}
                        onChange={(e) => setFactors({ ...factors, parentingTimeNew: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border rounded-md"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.relocation}
                      onChange={(e) => setFactors({ ...factors, relocation: e.target.checked })}
                      className="rounded"
                    />
                    <span>Parent relocation affecting custody/time</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.domesticViolence}
                      onChange={(e) => setFactors({ ...factors, domesticViolence: e.target.checked })}
                      className="rounded"
                    />
                    <span>Domestic violence concerns</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.substanceAbuse}
                      onChange={(e) => setFactors({ ...factors, substanceAbuse: e.target.checked })}
                      className="rounded"
                    />
                    <span>Substance abuse issues</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.parentalFitness}
                      onChange={(e) => setFactors({ ...factors, parentalFitness: e.target.checked })}
                      className="rounded"
                    />
                    <span>Concerns about parental fitness</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.childPreference}
                      onChange={(e) => setFactors({ ...factors, childPreference: e.target.checked })}
                      className="rounded"
                    />
                    <span>Child old enough to express preference</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={factors.childrenAgeChange}
                      onChange={(e) => setFactors({ ...factors, childrenAgeChange: e.target.checked })}
                      className="rounded"
                    />
                    <span>Children\'s needs changed with age</span>
                  </label>
                </div>
              </div>
            )}

            {/* Calculate Button */}
            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={calculatePrediction}>
                <TrendingUp className="w-5 h-5 mr-2" />
                Predict Likelihood
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <>
          <Card className="border-2 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Prediction Results</h3>

              {/* Likelihood Score */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getLikelihoodColor(result.likelihood)}`}>
                  {result.likelihood === 'very_high' && <CheckCircle className="w-5 h-5" />}
                  {result.likelihood === 'high' && <CheckCircle className="w-5 h-5" />}
                  {result.likelihood === 'moderate' && <Info className="w-5 h-5" />}
                  {result.likelihood === 'low' && <AlertTriangle className="w-5 h-5" />}
                  {result.likelihood === 'very_low' && <XCircle className="w-5 h-5" />}
                  <span className="font-semibold">
                    {result.likelihood.replace('_', ' ').toUpperCase()} LIKELIHOOD OF SUCCESS
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Confidence Score</span>
                    <span className="font-semibold">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${
                        result.percentage >= 65 ? 'bg-green-500' :
                        result.percentage >= 50 ? 'bg-yellow-500' :
                        result.percentage >= 35 ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${result.percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Estimates */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Estimated Timeframe</p>
                  <p className="text-lg font-semibold">{result.estimatedTimeframe}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Estimated Legal Costs</p>
                  <p className="text-lg font-semibold">
                    ${result.estimatedCost.low.toLocaleString()} - ${result.estimatedCost.high.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Factors */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {result.qualifyingFactors.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Supporting Factors</h4>
                    <ul className="space-y-2">
                      {result.qualifyingFactors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.disqualifyingFactors.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Challenging Factors</h4>
                    <ul className="space-y-2">
                      {result.disqualifyingFactors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Required Evidence */}
              {result.requiredEvidence.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Required Evidence</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {result.requiredEvidence.map((evidence, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-sm">{evidence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Recommendations</h4>
                  <div className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg">
                        <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-yellow-800">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <InfoCard type="warning">
            <p className="font-semibold mb-2">Legal Disclaimer</p>
            <p>This prediction tool provides estimates based on general factors. Court decisions depend on specific facts, evidence quality, and judicial discretion. Always consult with a qualified attorney before filing for modification.</p>
          </InfoCard>
        </>
      )}
    </div>
  );
}