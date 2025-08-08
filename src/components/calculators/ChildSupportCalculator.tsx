 
'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, Users, FileText, AlertCircle, CheckCircle, PrinterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { calculateChildSupport, Inputs as EngineInputs } from '@/lib/childSupport';

interface CalculatorInputs {
  parent1Income: string;
  parent2Income: string;
  numChildren: number;
  parent1ParentingDays: string;
  parent2ParentingDays: string;
  parent1HealthInsurance: string;
  parent2HealthInsurance: string;
  childcareExpenses: string;
  parent1OtherSupport: string;
  parent2OtherSupport: string;
  extraordinaryExpenses: string;
  deviationAdjustment: string;
}

interface CalculationResult {
  combinedIncome: number;
  basicSupport: number;
  parent1Share: number;
  parent2Share: number;
  parent1Obligation: number;
  parent2Obligation: number;
  finalSupport: number;
  payingParent: 'parent1' | 'parent2' | 'none';
}

export default function ChildSupportCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    parent1Income: '',
    parent2Income: '',
    numChildren: 1,
    parent1ParentingDays: '',
    parent2ParentingDays: '',
    parent1HealthInsurance: '',
    parent2HealthInsurance: '',
    childcareExpenses: '',
    parent1OtherSupport: '',
    parent2OtherSupport: '',
    extraordinaryExpenses: '',
    deviationAdjustment: ''
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSupport = (): CalculationResult => {
    const parent1Income = parseFloat(inputs.parent1Income) || 0;
    const parent2Income = parseFloat(inputs.parent2Income) || 0;
    const engineInputs: EngineInputs = {
      parent1Income,
      parent2Income,
      numChildren: inputs.numChildren,
      parent1ParentingDays: parseFloat(inputs.parent1ParentingDays) || 0,
      parent2ParentingDays: parseFloat(inputs.parent2ParentingDays) || 0,
      parent1HealthInsurance: parseFloat(inputs.parent1HealthInsurance) || 0,
      parent2HealthInsurance: parseFloat(inputs.parent2HealthInsurance) || 0,
      childcareExpenses: parseFloat(inputs.childcareExpenses) || 0,
      parent1OtherSupport: parseFloat(inputs.parent1OtherSupport) || 0,
      parent2OtherSupport: parseFloat(inputs.parent2OtherSupport) || 0,
      extraordinaryExpenses: parseFloat(inputs.extraordinaryExpenses) || 0,
      deviationAdjustment: parseFloat(inputs.deviationAdjustment) || 0,
    };

    const r = calculateChildSupport(engineInputs);
    return {
      combinedIncome: r.combinedIncome,
      basicSupport: r.basicSupport,
      parent1Share: r.parent1SharePct,
      parent2Share: r.parent2SharePct,
      parent1Obligation: r.parent1Obligation,
      parent2Obligation: r.parent2Obligation,
      finalSupport: r.finalSupport,
      payingParent: r.payingParent,
    };
  };

  const handleCalculate = () => {
    const calculation = calculateSupport();
    setResult(calculation);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs({
      parent1Income: '',
      parent2Income: '',
      numChildren: 1,
      parent1ParentingDays: '',
      parent2ParentingDays: '',
      parent1HealthInsurance: '',
      parent2HealthInsurance: '',
      childcareExpenses: '',
      parent1OtherSupport: '',
      parent2OtherSupport: '',
      extraordinaryExpenses: '',
      deviationAdjustment: ''
    });
    setResult(null);
    setShowResults(false);
  };

  const printResults = () => {
    window.print();
  };

  const isFormValid = () => {
    return inputs.parent1Income && inputs.parent2Income && inputs.numChildren > 0;
  };

  const totalParentingDays =
    (parseFloat(inputs.parent1ParentingDays) || 0) + (parseFloat(inputs.parent2ParentingDays) || 0);
  const parentingDaysWarning = totalParentingDays > 0 && totalParentingDays !== 365;

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card className="print:hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Income Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Parent 1 (Petitioner)</h3>
              
              <div>
                <label htmlFor="parent1-income" className="block text-sm font-medium text-gray-700 mb-1">
                  Gross Monthly Income <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent1-income"
                    type="number"
                    value={inputs.parent1Income}
                    onChange={(e) => handleInputChange('parent1Income', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    aria-required="true"
                    aria-describedby="parent1-income-help"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parent1-parenting-days" className="block text-sm font-medium text-gray-700 mb-1">
                  Parenting Days per Year
                </label>
                <input
                  id="parent1-parenting-days"
                  type="number"
                  value={inputs.parent1ParentingDays}
                  onChange={(e) => handleInputChange('parent1ParentingDays', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  max="365"
                  min="0"
                  aria-describedby="parenting-days-help"
                />
                <p id="parenting-days-help" className="mt-1 text-xs text-gray-500">Total overnights for both parents should equal 365.</p>
              </div>

              <div>
                <label htmlFor="parent1-health-insurance" className="block text-sm font-medium text-gray-700 mb-1">
                  Health Insurance Premium (monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent1-health-insurance"
                    type="number"
                    value={inputs.parent1HealthInsurance}
                    onChange={(e) => handleInputChange('parent1HealthInsurance', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parent1-other-support" className="block text-sm font-medium text-gray-700 mb-1">
                  Other Child Support Obligations
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent1-other-support"
                    type="number"
                    value={inputs.parent1OtherSupport}
                    onChange={(e) => handleInputChange('parent1OtherSupport', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Parent 2 (Respondent)</h3>
              
              <div>
                <label htmlFor="parent2-income" className="block text-sm font-medium text-gray-700 mb-1">
                  Gross Monthly Income <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent2-income"
                    type="number"
                    value={inputs.parent2Income}
                    onChange={(e) => handleInputChange('parent2Income', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    aria-required="true"
                    aria-describedby="parent2-income-help"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parent2-parenting-days" className="block text-sm font-medium text-gray-700 mb-1">
                  Parenting Days per Year
                </label>
                <input
                  id="parent2-parenting-days"
                  type="number"
                  value={inputs.parent2ParentingDays}
                  onChange={(e) => handleInputChange('parent2ParentingDays', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  max="365"
                  min="0"
                  aria-describedby="parenting-days-help"
                />
              </div>

              <div>
                <label htmlFor="parent2-health-insurance" className="block text-sm font-medium text-gray-700 mb-1">
                  Health Insurance Premium (monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent2-health-insurance"
                    type="number"
                    value={inputs.parent2HealthInsurance}
                    onChange={(e) => handleInputChange('parent2HealthInsurance', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parent2-other-support" className="block text-sm font-medium text-gray-700 mb-1">
                  Other Child Support Obligations
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="parent2-other-support"
                    type="number"
                    value={inputs.parent2OtherSupport}
                    onChange={(e) => handleInputChange('parent2OtherSupport', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-medium text-gray-900">Children & Expenses</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="num-children" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Children <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  id="num-children"
                  value={inputs.numChildren}
                  onChange={(e) => handleInputChange('numChildren', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-required="true"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="childcare-expenses" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Childcare Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="childcare-expenses"
                    type="number"
                    value={inputs.childcareExpenses}
                    onChange={(e) => handleInputChange('childcareExpenses', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="extraordinary-expenses" className="block text-sm font-medium text-gray-700 mb-1">
                  Extraordinary Expenses (monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="extraordinary-expenses"
                    type="number"
                    value={inputs.extraordinaryExpenses}
                    onChange={(e) => handleInputChange('extraordinaryExpenses', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional Adjustments */}
          <div className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="deviation-adjustment" className="block text-sm font-medium text-gray-700 mb-1">
                  Deviation Adjustment (optional)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <input
                    id="deviation-adjustment"
                    type="number"
                    value={inputs.deviationAdjustment}
                    onChange={(e) => handleInputChange('deviationAdjustment', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00 (can be negative)"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Positive increases final payment; negative decreases it.</p>
              </div>
            </div>
          </div>

          <div className="mt-2">
            {parentingDaysWarning && (
              <div className="mb-4 p-3 text-sm rounded border border-amber-300 bg-amber-50 text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <div>
                  The total overnights for both parents should equal 365. Adjust one or both values for a more accurate estimate.
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-3 flex-wrap">
            <Button 
              onClick={handleCalculate}
              disabled={!isFormValid()}
              className="flex-1 md:flex-none md:px-8"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Support
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="outline" onClick={() => {
              try {
                const payload = { inputs };
                localStorage.setItem('childSupportDraft', JSON.stringify(payload));
              } catch {}
            }}>
              Save Draft
            </Button>
            <Button variant="outline" onClick={() => {
              try {
                const raw = localStorage.getItem('childSupportDraft');
                if (!raw) return;
                const data = JSON.parse(raw);
                if (data && data.inputs) {
                  setInputs(data.inputs);
                }
              } catch {}
            }}>
              Load Draft
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && result && (
        <Card className="border-2 border-green-200 bg-green-50" role="region" aria-labelledby="results-heading">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
                <h2 id="results-heading" className="text-xl font-semibold text-green-900">Calculation Results</h2>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" onClick={() => {
                  const summary = `Arizona Child Support Estimate\n` +
                    `Combined income: $${result.combinedIncome.toLocaleString()}\n` +
                    `Basic support: $${result.basicSupport.toLocaleString()}\n` +
                    `Parent shares: P1 ${result.parent1Share}% / P2 ${result.parent2Share}%\n` +
                    `Final payment: $${result.finalSupport.toLocaleString()} by ${result.payingParent === 'parent1' ? 'Parent 1' : result.payingParent === 'parent2' ? 'Parent 2' : 'None'}`;
                  navigator.clipboard.writeText(summary).catch(() => {});
                }}>
                  Copy Summary
                </Button>
                <Button variant="outline" size="sm" onClick={() => {
                  const rows = [
                    ['Field','Value'],
                    ['Parent 1 Income', parseFloat(inputs.parent1Income || '0')],
                    ['Parent 2 Income', parseFloat(inputs.parent2Income || '0')],
                    ['Combined Income', result.combinedIncome],
                    ['Children', inputs.numChildren],
                    ['P1 Parenting Days', parseFloat(inputs.parent1ParentingDays || '0')],
                    ['P2 Parenting Days', parseFloat(inputs.parent2ParentingDays || '0')],
                    ['Health Insurance Total', (parseFloat(inputs.parent1HealthInsurance || '0') + parseFloat(inputs.parent2HealthInsurance || '0'))],
                    ['Childcare', parseFloat(inputs.childcareExpenses || '0')],
                    ['Extraordinary Expenses', parseFloat(inputs.extraordinaryExpenses || '0')],
                    ['Basic Support', result.basicSupport],
                    ['Parent 1 Share %', result.parent1Share],
                    ['Parent 2 Share %', result.parent2Share],
                    ['Parent 1 Obligation', result.parent1Obligation],
                    ['Parent 2 Obligation', result.parent2Obligation],
                    ['Paying Parent', result.payingParent],
                    ['Final Support', result.finalSupport],
                  ];
                  const csv = rows.map(r => r.join(',')).join('\n');
                  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'child-support-estimate.csv';
                  a.click();
                  URL.revokeObjectURL(url);
                }}>
                  Download CSV
                </Button>
                <Button variant="outline" size="sm" onClick={() => {
                  const data = {
                    inputs: {
                      parent1Income: parseFloat(inputs.parent1Income || '0'),
                      parent2Income: parseFloat(inputs.parent2Income || '0'),
                      numChildren: inputs.numChildren,
                      parent1ParentingDays: parseFloat(inputs.parent1ParentingDays || '0'),
                      parent2ParentingDays: parseFloat(inputs.parent2ParentingDays || '0'),
                      parent1HealthInsurance: parseFloat(inputs.parent1HealthInsurance || '0'),
                      parent2HealthInsurance: parseFloat(inputs.parent2HealthInsurance || '0'),
                      childcareExpenses: parseFloat(inputs.childcareExpenses || '0'),
                      extraordinaryExpenses: parseFloat(inputs.extraordinaryExpenses || '0'),
                      deviationAdjustment: parseFloat(inputs.deviationAdjustment || '0'),
                    },
                    result,
                  };
                  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'child-support-estimate.json';
                  a.click();
                  URL.revokeObjectURL(url);
                }}>
                  Download JSON
                </Button>
                <Button variant="outline" size="sm" onClick={printResults}>
                  <PrinterIcon className="w-4 h-4 mr-2" />
                  Print
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-3">Income Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Parent 1 Income:</span>
                    <span className="font-medium">${parseFloat(inputs.parent1Income || '0').toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parent 2 Income:</span>
                    <span className="font-medium">${parseFloat(inputs.parent2Income || '0').toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span>Combined Income:</span>
                    <span>${result.combinedIncome.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-3">Support Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Basic Support:</span>
                    <span className="font-medium">${result.basicSupport.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health Insurance:</span>
                    <span className="font-medium">${(parseFloat(inputs.parent1HealthInsurance || '0') + parseFloat(inputs.parent2HealthInsurance || '0')).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Childcare:</span>
                    <span className="font-medium">${parseFloat(inputs.childcareExpenses || '0').toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extraordinary Expenses:</span>
                    <span className="font-medium">${parseFloat(inputs.extraordinaryExpenses || '0').toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Proportional Responsibility</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Parent 1 Share</div>
                  <div className="text-2xl font-bold text-blue-600">{result.parent1Share}%</div>
                  <div className="text-sm text-gray-600">Monthly Obligation: ${result.parent1Obligation.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Parent 2 Share</div>
                  <div className="text-2xl font-bold text-purple-600">{result.parent2Share}%</div>
                  <div className="text-sm text-gray-600">Monthly Obligation: ${result.parent2Obligation.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Court-Ready Summary */}
            <div className="bg-white rounded-lg p-6 mb-6 border">
              <h3 className="font-semibold mb-3">Court-Ready Summary (Print)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Combined Income</td>
                      <td className="py-2 font-medium">${result.combinedIncome.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Children</td>
                      <td className="py-2 font-medium">{inputs.numChildren}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Basic Support</td>
                      <td className="py-2 font-medium">${result.basicSupport.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Health Insurance (total)</td>
                      <td className="py-2 font-medium">${(parseFloat(inputs.parent1HealthInsurance || '0') + parseFloat(inputs.parent2HealthInsurance || '0')).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Childcare</td>
                      <td className="py-2 font-medium">${parseFloat(inputs.childcareExpenses || '0').toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Extraordinary Expenses</td>
                      <td className="py-2 font-medium">${parseFloat(inputs.extraordinaryExpenses || '0').toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Parent 1 Share / Obligation</td>
                      <td className="py-2 font-medium">{result.parent1Share}% — ${result.parent1Obligation.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Parent 2 Share / Obligation</td>
                      <td className="py-2 font-medium">{result.parent2Share}% — ${result.parent2Obligation.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-600">Final Payment (monthly)</td>
                      <td className="py-2 font-bold text-green-700">${result.finalSupport.toLocaleString()} by {result.payingParent === 'parent1' ? 'Parent 1' : result.payingParent === 'parent2' ? 'Parent 2' : 'None'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2" role="heading" aria-level={3}>Estimated Monthly Child Support</h3>
              {result.payingParent === 'none' ? (
                <div>
                  <div className="text-3xl font-bold text-gray-600 mb-2">$0</div>
                  <p className="text-sm text-gray-600">Obligations are approximately equal</p>
                </div>
              ) : (
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">${result.finalSupport.toLocaleString()}</div>
                  <p className="text-sm text-gray-700">
                    Paid by Parent {result.payingParent === 'parent1' ? '1' : '2'} to Parent {result.payingParent === 'parent1' ? '2' : '1'}
                  </p>
                  {Boolean(parseFloat(inputs.deviationAdjustment || '0')) && (
                    <p className="mt-1 text-xs text-gray-600">Includes deviation adjustment of ${parseFloat(inputs.deviationAdjustment || '0').toLocaleString()}.</p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">Important Disclaimers:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• This is an estimate only. Actual court orders may differ.</li>
                    <li>• Arizona courts may deviate from guidelines based on specific circumstances.</li>
                    <li>• This calculator uses a simplified version of Arizona&apos;s guidelines.</li>
                    <li>• Consult with a family law attorney for advice on your specific situation.</li>
                    <li>• All support orders must be approved by the court to be legally binding.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Information */}
      <Card role="region" aria-labelledby="help-heading" className="print:hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h3 id="help-heading" className="font-semibold">Need Help?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2">Getting Accurate Income Information:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Use gross income before taxes and deductions</li>
                <li>• Include all sources: wages, self-employment, benefits</li>
                <li>• Average irregular income over 12 months</li>
                <li>• Include overtime if it&apos;s regular and consistent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Calculating Parenting Time:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Count overnight stays per year</li>
                <li>• Standard schedule: every other weekend = ~92 days</li>
                <li>• Add holidays and vacation time</li>
                <li>• 40%+ time may reduce support obligation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
