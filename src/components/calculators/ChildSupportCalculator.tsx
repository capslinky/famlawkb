'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Users, FileText, AlertCircle, CheckCircle, PrinterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

// Arizona Child Support Guidelines Schedule (simplified version for key amounts)
const SUPPORT_SCHEDULE = [
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
    parent2OtherSupport: ''
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getBasicSupport = (combinedIncome: number, numChildren: number): number => {
    for (const bracket of SUPPORT_SCHEDULE) {
      if (combinedIncome >= bracket.minIncome && combinedIncome < bracket.maxIncome) {
        return bracket.children[numChildren - 1] || 0;
      }
    }
    
    // For incomes above schedule, use proportional calculation
    if (combinedIncome >= 30000) {
      const baseAmount = SUPPORT_SCHEDULE[SUPPORT_SCHEDULE.length - 1].children[numChildren - 1] || 0;
      const factor = Math.min(combinedIncome / 30000, 2.5); // Cap at 2.5x
      return Math.round(baseAmount * factor);
    }
    
    return 0;
  };

  const calculateSupport = (): CalculationResult => {
    const parent1Income = parseFloat(inputs.parent1Income) || 0;
    const parent2Income = parseFloat(inputs.parent2Income) || 0;
    const combinedIncome = parent1Income + parent2Income;
    
    const parent1ParentingDays = parseFloat(inputs.parent1ParentingDays) || 0;
    const parent2ParentingDays = parseFloat(inputs.parent2ParentingDays) || 0;
    
    const parent1HealthInsurance = parseFloat(inputs.parent1HealthInsurance) || 0;
    const parent2HealthInsurance = parseFloat(inputs.parent2HealthInsurance) || 0;
    const childcareExpenses = parseFloat(inputs.childcareExpenses) || 0;
    
    const parent1OtherSupport = parseFloat(inputs.parent1OtherSupport) || 0;
    const parent2OtherSupport = parseFloat(inputs.parent2OtherSupport) || 0;

    // Basic support from schedule
    const basicSupport = getBasicSupport(combinedIncome, inputs.numChildren);
    
    // Income shares percentages
    const parent1Share = combinedIncome > 0 ? parent1Income / combinedIncome : 0.5;
    const parent2Share = combinedIncome > 0 ? parent2Income / combinedIncome : 0.5;
    
    // Add health insurance and childcare to basic support
    const totalSupport = basicSupport + parent1HealthInsurance + parent2HealthInsurance + childcareExpenses;
    
    // Calculate each parent's proportional obligation
    let parent1Obligation = totalSupport * parent1Share;
    let parent2Obligation = totalSupport * parent2Share;
    
    // Subtract other support obligations
    parent1Obligation = Math.max(0, parent1Obligation - parent1OtherSupport);
    parent2Obligation = Math.max(0, parent2Obligation - parent2OtherSupport);
    
    // Apply parenting time adjustment (simplified - if parent has significant time, reduce obligation)
    const totalDays = parent1ParentingDays + parent2ParentingDays;
    if (totalDays > 0) {
      const parent1TimePercent = parent1ParentingDays / totalDays;
      const parent2TimePercent = parent2ParentingDays / totalDays;
      
      // If parent has 40%+ parenting time, apply reduction (simplified calculation)
      if (parent1TimePercent >= 0.4) {
        parent1Obligation *= (1 - (parent1TimePercent - 0.35) * 0.5);
      }
      if (parent2TimePercent >= 0.4) {
        parent2Obligation *= (1 - (parent2TimePercent - 0.35) * 0.5);
      }
    }
    
    // Determine final support payment
    let finalSupport = 0;
    let payingParent: 'parent1' | 'parent2' | 'none' = 'none';
    
    if (parent1Obligation > parent2Obligation) {
      finalSupport = Math.round(parent1Obligation - parent2Obligation);
      payingParent = 'parent1';
    } else if (parent2Obligation > parent1Obligation) {
      finalSupport = Math.round(parent2Obligation - parent1Obligation);
      payingParent = 'parent2';
    }

    return {
      combinedIncome,
      basicSupport,
      parent1Share: Math.round(parent1Share * 100),
      parent2Share: Math.round(parent2Share * 100),
      parent1Obligation: Math.round(parent1Obligation),
      parent2Obligation: Math.round(parent2Obligation),
      finalSupport,
      payingParent
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
      parent2OtherSupport: ''
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

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Income Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Parent 1 (Petitioner)</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gross Monthly Income <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent1Income}
                    onChange={(e) => handleInputChange('parent1Income', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parenting Days per Year
                </label>
                <input
                  type="number"
                  value={inputs.parent1ParentingDays}
                  onChange={(e) => handleInputChange('parent1ParentingDays', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  max="365"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Health Insurance Premium (monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent1HealthInsurance}
                    onChange={(e) => handleInputChange('parent1HealthInsurance', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Other Child Support Obligations
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent1OtherSupport}
                    onChange={(e) => handleInputChange('parent1OtherSupport', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Parent 2 (Respondent)</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gross Monthly Income <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent2Income}
                    onChange={(e) => handleInputChange('parent2Income', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parenting Days per Year
                </label>
                <input
                  type="number"
                  value={inputs.parent2ParentingDays}
                  onChange={(e) => handleInputChange('parent2ParentingDays', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  max="365"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Health Insurance Premium (monthly)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent2HealthInsurance}
                    onChange={(e) => handleInputChange('parent2HealthInsurance', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Other Child Support Obligations
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.parent2OtherSupport}
                    onChange={(e) => handleInputChange('parent2OtherSupport', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Children <span className="text-red-500">*</span>
                </label>
                <select
                  value={inputs.numChildren}
                  onChange={(e) => handleInputChange('numChildren', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Childcare Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.childcareExpenses}
                    onChange={(e) => handleInputChange('childcareExpenses', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
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
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && result && (
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-green-900">Calculation Results</h2>
              </div>
              <Button variant="outline" size="sm" onClick={printResults}>
                <PrinterIcon className="w-4 h-4 mr-2" />
                Print
              </Button>
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

            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Estimated Monthly Child Support</h3>
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
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">Important Disclaimers:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• This is an estimate only. Actual court orders may differ.</li>
                    <li>• Arizona courts may deviate from guidelines based on specific circumstances.</li>
                    <li>• This calculator uses a simplified version of Arizona's guidelines.</li>
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
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Need Help?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2">Getting Accurate Income Information:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Use gross income before taxes and deductions</li>
                <li>• Include all sources: wages, self-employment, benefits</li>
                <li>• Average irregular income over 12 months</li>
                <li>• Include overtime if it's regular and consistent</li>
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