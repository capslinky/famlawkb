'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, TrendingDown, AlertCircle, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TaxCalculatorInputs {
  // Filing Status
  currentFilingStatus: 'married_joint' | 'married_separate' | 'single' | 'head_household';
  postDivorceStatus: 'single' | 'head_household';
  
  // Income
  yourIncome: string;
  spouseIncome: string;
  
  // Deductions & Credits
  mortgageInterest: string;
  propertyTax: string;
  stateLocalTax: string;
  charitableContributions: string;
  numberOfDependents: number;
  childcareExpenses: string;
  
  // Support Payments
  alimonyPaid: string;
  alimonyReceived: string;
  childSupportPaid: string;
  childSupportReceived: string;
  
  // Asset Division
  retirementTransfer: string;
  capitalGains: string;
  
  // Tax Year
  taxYear: '2024' | '2025';
}

interface TaxCalculationResult {
  // Current (Married) Tax Situation
  currentTotalIncome: number;
  currentAGI: number;
  currentStandardDeduction: number;
  currentTaxableIncome: number;
  currentFederalTax: number;
  currentEffectiveRate: number;
  currentAfterTaxIncome: number;
  
  // Post-Divorce Tax Situation
  postDivorceTotalIncome: number;
  postDivorceAGI: number;
  postDivorceStandardDeduction: number;
  postDivorceTaxableIncome: number;
  postDivorceFederalTax: number;
  postDivorceEffectiveRate: number;
  postDivorceAfterTaxIncome: number;
  
  // Comparison
  taxDifference: number;
  incomeDifference: number;
  betterScenario: 'current' | 'post-divorce';
  
  // Specific Impacts
  childTaxCredit: number;
  dependentCareCredit: number;
  earnedIncomeCredit: number;
  
  // Warnings
  warnings: string[];
  opportunities: string[];
}

// 2024 Tax Brackets
const TAX_BRACKETS_2024 = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  married_joint: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ],
  married_separate: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 365600, rate: 0.35 },
    { min: 365600, max: Infinity, rate: 0.37 }
  ],
  head_household: [
    { min: 0, max: 16550, rate: 0.10 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ]
};

// Standard Deductions for 2024
const STANDARD_DEDUCTIONS_2024 = {
  single: 14600,
  married_joint: 29200,
  married_separate: 14600,
  head_household: 21900
};

export default function TaxImpactCalculator() {
  const [inputs, setInputs] = useState<TaxCalculatorInputs>({
    currentFilingStatus: 'married_joint',
    postDivorceStatus: 'single',
    yourIncome: '',
    spouseIncome: '',
    mortgageInterest: '',
    propertyTax: '',
    stateLocalTax: '',
    charitableContributions: '',
    numberOfDependents: 0,
    childcareExpenses: '',
    alimonyPaid: '',
    alimonyReceived: '',
    childSupportPaid: '',
    childSupportReceived: '',
    retirementTransfer: '',
    capitalGains: '',
    taxYear: '2024'
  });

  const [result, setResult] = useState<TaxCalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof TaxCalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateFederalTax = (taxableIncome: number, filingStatus: keyof typeof TAX_BRACKETS_2024): number => {
    const brackets = TAX_BRACKETS_2024[filingStatus];
    let tax = 0;
    
    for (const bracket of brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
        tax += taxableInBracket * bracket.rate;
      }
    }
    
    return Math.round(tax);
  };

  const calculateChildTaxCredit = (income: number, dependents: number, filingStatus: string): number => {
    if (dependents === 0) return 0;
    
    const baseCredit = 2000 * dependents;
    let phaseoutThreshold = 200000;
    
    if (filingStatus === 'married_joint') {
      phaseoutThreshold = 400000;
    }
    
    if (income <= phaseoutThreshold) {
      return baseCredit;
    }
    
    const phaseoutAmount = Math.ceil((income - phaseoutThreshold) / 1000) * 50;
    return Math.max(0, baseCredit - phaseoutAmount);
  };

  const calculateDependentCareCredit = (expenses: number, income: number, dependents: number): number => {
    if (dependents === 0 || expenses === 0) return 0;
    
    const maxExpenses = dependents === 1 ? 3000 : 6000;
    const qualifiedExpenses = Math.min(expenses, maxExpenses);
    
    let creditRate = 0.35;
    if (income > 15000) creditRate = 0.34;
    if (income > 17000) creditRate = 0.33;
    if (income > 19000) creditRate = 0.32;
    if (income > 21000) creditRate = 0.31;
    if (income > 23000) creditRate = 0.30;
    if (income > 25000) creditRate = 0.29;
    if (income > 27000) creditRate = 0.28;
    if (income > 29000) creditRate = 0.27;
    if (income > 31000) creditRate = 0.26;
    if (income > 33000) creditRate = 0.25;
    if (income > 35000) creditRate = 0.24;
    if (income > 37000) creditRate = 0.23;
    if (income > 39000) creditRate = 0.22;
    if (income > 41000) creditRate = 0.21;
    if (income > 43000) creditRate = 0.20;
    
    return Math.round(qualifiedExpenses * creditRate);
  };

  const calculateTaxes = (): TaxCalculationResult => {
    const yourIncome = parseFloat(inputs.yourIncome) || 0;
    const spouseIncome = parseFloat(inputs.spouseIncome) || 0;
    const mortgageInterest = parseFloat(inputs.mortgageInterest) || 0;
    const propertyTax = parseFloat(inputs.propertyTax) || 0;
    const stateLocalTax = parseFloat(inputs.stateLocalTax) || 0;
    const charitableContributions = parseFloat(inputs.charitableContributions) || 0;
    const childcareExpenses = parseFloat(inputs.childcareExpenses) || 0;
    const alimonyPaid = parseFloat(inputs.alimonyPaid) || 0;
    const alimonyReceived = parseFloat(inputs.alimonyReceived) || 0;
    const childSupportPaid = parseFloat(inputs.childSupportPaid) || 0;
    const childSupportReceived = parseFloat(inputs.childSupportReceived) || 0;
    const capitalGains = parseFloat(inputs.capitalGains) || 0;
    
    // Current (Married) Situation
    const currentTotalIncome = yourIncome + spouseIncome;
    const currentDeductions = mortgageInterest + propertyTax + Math.min(stateLocalTax, 10000) + charitableContributions;
    const currentStandardDeduction = STANDARD_DEDUCTIONS_2024[inputs.currentFilingStatus];
    const currentDeductionUsed = Math.max(currentDeductions, currentStandardDeduction);
    const currentAGI = currentTotalIncome;
    const currentTaxableIncome = Math.max(0, currentAGI - currentDeductionUsed);
    const currentFederalTax = calculateFederalTax(currentTaxableIncome, inputs.currentFilingStatus);
    const currentChildCredit = calculateChildTaxCredit(currentAGI, inputs.numberOfDependents, inputs.currentFilingStatus);
    const currentDependentCareCredit = calculateDependentCareCredit(childcareExpenses, currentAGI, inputs.numberOfDependents);
    const currentTaxAfterCredits = Math.max(0, currentFederalTax - currentChildCredit - currentDependentCareCredit);
    const currentAfterTaxIncome = currentTotalIncome - currentTaxAfterCredits;
    const currentEffectiveRate = currentTotalIncome > 0 ? (currentTaxAfterCredits / currentTotalIncome) * 100 : 0;
    
    // Post-Divorce Situation
    // Note: Post-2018 tax reform - alimony is not deductible/taxable for divorces after 2018
    const postDivorceTotalIncome = yourIncome + alimonyReceived; // Child support is not taxable
    const postDivorceDeductions = (mortgageInterest + propertyTax) / 2 + Math.min(stateLocalTax / 2, 10000) + charitableContributions / 2;
    const postDivorceStandardDeduction = STANDARD_DEDUCTIONS_2024[inputs.postDivorceStatus];
    const postDivorceDeductionUsed = Math.max(postDivorceDeductions, postDivorceStandardDeduction);
    const postDivorceAGI = postDivorceTotalIncome + capitalGains;
    const postDivorceTaxableIncome = Math.max(0, postDivorceAGI - postDivorceDeductionUsed);
    const postDivorceFederalTax = calculateFederalTax(postDivorceTaxableIncome, inputs.postDivorceStatus);
    const postDivorceChildCredit = calculateChildTaxCredit(postDivorceAGI, inputs.numberOfDependents, inputs.postDivorceStatus);
    const postDivorceDependentCareCredit = calculateDependentCareCredit(childcareExpenses, postDivorceAGI, inputs.numberOfDependents);
    const postDivorceTaxAfterCredits = Math.max(0, postDivorceFederalTax - postDivorceChildCredit - postDivorceDependentCareCredit);
    
    // Account for support payments in after-tax income
    const postDivorceNetIncome = postDivorceTotalIncome - postDivorceTaxAfterCredits - alimonyPaid - childSupportPaid + childSupportReceived;
    const postDivorceEffectiveRate = postDivorceTotalIncome > 0 ? (postDivorceTaxAfterCredits / postDivorceTotalIncome) * 100 : 0;
    
    // Comparison
    const taxDifference = postDivorceTaxAfterCredits - (currentTaxAfterCredits / 2); // Compare to half of married tax
    const incomeDifference = postDivorceNetIncome - (currentAfterTaxIncome / 2);
    const betterScenario = taxDifference < 0 ? 'post-divorce' : 'current';
    
    // Generate warnings and opportunities
    const warnings: string[] = [];
    const opportunities: string[] = [];
    
    if (inputs.postDivorceStatus === 'single' && inputs.numberOfDependents > 0) {
      opportunities.push('Consider filing as Head of Household if you have custody - saves ~$7,300 in standard deduction');
    }
    
    if (capitalGains > 0) {
      warnings.push(`Capital gains of $${capitalGains.toLocaleString()} from asset division will increase your tax liability`);
    }
    
    if (alimonyPaid > 0 && inputs.taxYear === '2024') {
      warnings.push('Alimony payments are not tax-deductible for divorces finalized after 2018');
    }
    
    if (childcareExpenses > 0 && inputs.numberOfDependents > 0) {
      opportunities.push(`Dependent care credit can save up to $${currentDependentCareCredit} on your taxes`);
    }
    
    if (inputs.numberOfDependents > 0) {
      opportunities.push(`Child tax credit provides $${currentChildCredit} in tax savings`);
    }
    
    if (postDivorceDeductions < postDivorceStandardDeduction) {
      opportunities.push('Standard deduction is higher than itemized deductions - simplifies tax filing');
    }
    
    if (postDivorceEffectiveRate > 22) {
      opportunities.push('Consider maximizing retirement contributions to reduce taxable income');
    }
    
    return {
      currentTotalIncome,
      currentAGI,
      currentStandardDeduction: currentDeductionUsed,
      currentTaxableIncome,
      currentFederalTax: currentTaxAfterCredits,
      currentEffectiveRate,
      currentAfterTaxIncome,
      
      postDivorceTotalIncome,
      postDivorceAGI,
      postDivorceStandardDeduction: postDivorceDeductionUsed,
      postDivorceTaxableIncome,
      postDivorceFederalTax: postDivorceTaxAfterCredits,
      postDivorceEffectiveRate,
      postDivorceAfterTaxIncome: postDivorceNetIncome,
      
      taxDifference,
      incomeDifference,
      betterScenario,
      
      childTaxCredit: postDivorceChildCredit,
      dependentCareCredit: postDivorceDependentCareCredit,
      earnedIncomeCredit: 0, // Would need more complex calculation
      
      warnings,
      opportunities
    };
  };

  const handleCalculate = () => {
    const calculation = calculateTaxes();
    setResult(calculation);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs({
      currentFilingStatus: 'married_joint',
      postDivorceStatus: 'single',
      yourIncome: '',
      spouseIncome: '',
      mortgageInterest: '',
      propertyTax: '',
      stateLocalTax: '',
      charitableContributions: '',
      numberOfDependents: 0,
      childcareExpenses: '',
      alimonyPaid: '',
      alimonyReceived: '',
      childSupportPaid: '',
      childSupportReceived: '',
      retirementTransfer: '',
      capitalGains: '',
      taxYear: '2024'
    });
    setResult(null);
    setShowResults(false);
  };

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Tax Impact Calculator</h2>
          </div>
          
          {/* Filing Status Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Filing Status</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Filing Status
                </label>
                <select
                  value={inputs.currentFilingStatus}
                  onChange={(e) => handleInputChange('currentFilingStatus', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="married_joint">Married Filing Jointly</option>
                  <option value="married_separate">Married Filing Separately</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Post-Divorce Filing Status
                </label>
                <select
                  value={inputs.postDivorceStatus}
                  onChange={(e) => handleInputChange('postDivorceStatus', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="single">Single</option>
                  <option value="head_household">Head of Household</option>
                </select>
              </div>
            </div>
          </div>

          {/* Income Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Annual Income</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Annual Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.yourIncome}
                    onChange={(e) => handleInputChange('yourIncome', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="75000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Spouse's Annual Income
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.spouseIncome}
                    onChange={(e) => handleInputChange('spouseIncome', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="65000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Deductions Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Annual Deductions (if itemizing)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mortgage Interest
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.mortgageInterest}
                    onChange={(e) => handleInputChange('mortgageInterest', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="12000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Tax
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.propertyTax}
                    onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="5000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State & Local Tax (SALT)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.stateLocalTax}
                    onChange={(e) => handleInputChange('stateLocalTax', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="8000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Limited to $10,000</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Charitable Contributions
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.charitableContributions}
                    onChange={(e) => handleInputChange('charitableContributions', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="2000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Children & Credits Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Children & Credits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Dependent Children
                </label>
                <input
                  type="number"
                  value={inputs.numberOfDependents}
                  onChange={(e) => handleInputChange('numberOfDependents', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="2"
                  min="0"
                  max="10"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Childcare Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.childcareExpenses}
                    onChange={(e) => handleInputChange('childcareExpenses', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="6000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Support Payments Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Support Payments (Annual)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alimony You'll Pay
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.alimonyPaid}
                    onChange={(e) => handleInputChange('alimonyPaid', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alimony You'll Receive
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.alimonyReceived}
                    onChange={(e) => handleInputChange('alimonyReceived', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Child Support You'll Pay
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.childSupportPaid}
                    onChange={(e) => handleInputChange('childSupportPaid', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Child Support You'll Receive
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.childSupportReceived}
                    onChange={(e) => handleInputChange('childSupportReceived', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Note: Child support is not taxable income or deductible. Alimony tax treatment depends on when divorce was finalized.
            </p>
          </div>

          {/* Asset Division Section */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Asset Division Impact</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capital Gains from Asset Sales
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.capitalGains}
                    onChange={(e) => handleInputChange('capitalGains', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">From selling house, stocks, etc.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleCalculate}
              className="flex-1 md:flex-none md:px-8"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Tax Impact
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && result && (
        <>
          {/* Tax Comparison Summary */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Tax Impact Analysis
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Current Married Tax */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Current (Married)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Income:</span>
                      <span className="font-medium">${result.currentTotalIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Federal Tax:</span>
                      <span className="font-medium text-red-600">-${result.currentFederalTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Effective Rate:</span>
                      <span className="font-medium">{result.currentEffectiveRate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>After-Tax Income:</span>
                      <span className="text-green-600">${result.currentAfterTaxIncome.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Your Share (50%): ${(result.currentAfterTaxIncome / 2).toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Post-Divorce Tax */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Post-Divorce</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Your Income:</span>
                      <span className="font-medium">${result.postDivorceTotalIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Federal Tax:</span>
                      <span className="font-medium text-red-600">-${result.postDivorceFederalTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Effective Rate:</span>
                      <span className="font-medium">{result.postDivorceEffectiveRate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>After-Tax Income:</span>
                      <span className="text-green-600">${result.postDivorceAfterTaxIncome.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      After support payments
                    </div>
                  </div>
                </div>

                {/* Comparison */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Net Change</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Annual Tax Change</div>
                      <div className={`text-2xl font-bold ${result.taxDifference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {result.taxDifference > 0 ? '+' : ''}{result.taxDifference < 0 ? '-' : ''}
                        ${Math.abs(result.taxDifference).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Net Income Change</div>
                      <div className={`text-2xl font-bold ${result.incomeDifference < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {result.incomeDifference > 0 ? '+' : ''}{result.incomeDifference < 0 ? '-' : ''}
                        ${Math.abs(result.incomeDifference).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Credits */}
              {(result.childTaxCredit > 0 || result.dependentCareCredit > 0) && (
                <div className="mt-6 bg-white rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Available Tax Credits</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {result.childTaxCredit > 0 && (
                      <div className="flex justify-between">
                        <span>Child Tax Credit:</span>
                        <span className="font-medium text-green-600">${result.childTaxCredit.toLocaleString()}</span>
                      </div>
                    )}
                    {result.dependentCareCredit > 0 && (
                      <div className="flex justify-between">
                        <span>Dependent Care Credit:</span>
                        <span className="font-medium text-green-600">${result.dependentCareCredit.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Warnings and Opportunities */}
          <div className="grid md:grid-cols-2 gap-6">
            {result.warnings.length > 0 && (
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    Tax Considerations
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {result.opportunities.length > 0 && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Tax Opportunities
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Disclaimer */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Important Tax Information:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• This is a simplified estimate for federal taxes only - state taxes not included</li>
                    <li>• Actual taxes depend on many factors not captured here</li>
                    <li>• Consult a tax professional for accurate planning</li>
                    <li>• Tax laws change frequently - verify current rules</li>
                    <li>• Consider quarterly estimated tax payments if self-employed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}