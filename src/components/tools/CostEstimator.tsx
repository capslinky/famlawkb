'use client';

import React, { useState } from 'react';
import { DollarSign, Calculator, Info, Download, AlertCircle, TrendingUp, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface CostItem {
  category: string;
  item: string;
  lowEstimate: number;
  highEstimate: number;
  isRequired: boolean;
  notes?: string;
}

interface CaseComplexity {
  level: 'simple' | 'moderate' | 'complex';
  factors: string[];
}

interface CostEstimate {
  caseType: string;
  complexity: CaseComplexity;
  courtCosts: CostItem[];
  attorneyFees: CostItem[];
  additionalCosts: CostItem[];
  totalLow: number;
  totalHigh: number;
}

const COURT_FILING_FEES = {
  'Petition for Dissolution (with children)': { low: 349, high: 349 },
  'Petition for Dissolution (no children)': { low: 274, high: 274 },
  'Response to Petition': { low: 274, high: 274 },
  'Motion (generic)': { low: 85, high: 85 },
  'Petition to Modify': { low: 274, high: 274 },
  'Order of Protection': { low: 0, high: 0 },
  'Petition to Establish Custody': { low: 274, high: 274 },
  'Appeal Filing': { low: 535, high: 535 }
};

const ATTORNEY_FEE_RANGES = {
  simple: { hourlyLow: 200, hourlyHigh: 350, hoursLow: 10, hoursHigh: 30 },
  moderate: { hourlyLow: 250, hourlyHigh: 450, hoursLow: 30, hoursHigh: 80 },
  complex: { hourlyLow: 350, hourlyHigh: 600, hoursLow: 80, hoursHigh: 200 }
};

const CASE_TEMPLATES = [
  {
    name: 'Uncontested Divorce (No Children)',
    complexity: 'simple' as const,
    courtCosts: [
      { item: 'Filing Fee', lowEstimate: 274, highEstimate: 274, isRequired: true },
      { item: 'Service of Process', lowEstimate: 50, highEstimate: 150, isRequired: true },
      { item: 'Parenting Class', lowEstimate: 0, highEstimate: 0, isRequired: false },
      { item: 'Final Decree', lowEstimate: 0, highEstimate: 0, isRequired: true }
    ],
    additionalCosts: [
      { item: 'Document Preparation Service', lowEstimate: 400, highEstimate: 800, isRequired: false },
      { item: 'Notary Fees', lowEstimate: 20, highEstimate: 50, isRequired: false },
      { item: 'Certified Copies', lowEstimate: 20, highEstimate: 40, isRequired: false }
    ]
  },
  {
    name: 'Uncontested Divorce (With Children)',
    complexity: 'simple' as const,
    courtCosts: [
      { item: 'Filing Fee', lowEstimate: 349, highEstimate: 349, isRequired: true },
      { item: 'Service of Process', lowEstimate: 50, highEstimate: 150, isRequired: true },
      { item: 'Parenting Class', lowEstimate: 50, highEstimate: 100, isRequired: true },
      { item: 'Final Decree', lowEstimate: 0, highEstimate: 0, isRequired: true }
    ],
    additionalCosts: [
      { item: 'Document Preparation Service', lowEstimate: 500, highEstimate: 1000, isRequired: false },
      { item: 'Notary Fees', lowEstimate: 20, highEstimate: 50, isRequired: false },
      { item: 'Certified Copies', lowEstimate: 30, highEstimate: 60, isRequired: false },
      { item: 'Child Support Calculation', lowEstimate: 0, highEstimate: 200, isRequired: false }
    ]
  },
  {
    name: 'Contested Divorce',
    complexity: 'complex' as const,
    courtCosts: [
      { item: 'Filing Fee', lowEstimate: 349, highEstimate: 349, isRequired: true },
      { item: 'Service of Process', lowEstimate: 50, highEstimate: 150, isRequired: true },
      { item: 'Parenting Class', lowEstimate: 50, highEstimate: 100, isRequired: true },
      { item: 'Motion Filings (multiple)', lowEstimate: 170, highEstimate: 510, isRequired: false },
      { item: 'Trial Fee', lowEstimate: 0, highEstimate: 0, isRequired: true }
    ],
    additionalCosts: [
      { item: 'Private Mediator', lowEstimate: 1500, highEstimate: 5000, isRequired: false },
      { item: 'Custody Evaluator', lowEstimate: 3000, highEstimate: 10000, isRequired: false },
      { item: 'Financial Expert', lowEstimate: 2000, highEstimate: 5000, isRequired: false },
      { item: 'Deposition Costs', lowEstimate: 500, highEstimate: 2000, isRequired: false },
      { item: 'Discovery Costs', lowEstimate: 1000, highEstimate: 5000, isRequired: false },
      { item: 'Expert Witnesses', lowEstimate: 2000, highEstimate: 10000, isRequired: false }
    ]
  },
  {
    name: 'Child Custody Modification',
    complexity: 'moderate' as const,
    courtCosts: [
      { item: 'Filing Fee', lowEstimate: 274, highEstimate: 274, isRequired: true },
      { item: 'Service of Process', lowEstimate: 50, highEstimate: 150, isRequired: true },
      { item: 'Motion Filings', lowEstimate: 85, highEstimate: 255, isRequired: false }
    ],
    additionalCosts: [
      { item: 'Custody Evaluator', lowEstimate: 2000, highEstimate: 7500, isRequired: false },
      { item: 'Mediation', lowEstimate: 500, highEstimate: 2000, isRequired: false },
      { item: 'Guardian ad Litem', lowEstimate: 1500, highEstimate: 5000, isRequired: false }
    ]
  },
  {
    name: 'Order of Protection',
    complexity: 'simple' as const,
    courtCosts: [
      { item: 'Filing Fee', lowEstimate: 0, highEstimate: 0, isRequired: true },
      { item: 'Service by Sheriff', lowEstimate: 0, highEstimate: 0, isRequired: true }
    ],
    additionalCosts: [
      { item: 'Private Attorney (if desired)', lowEstimate: 1500, highEstimate: 5000, isRequired: false },
      { item: 'Emergency Housing', lowEstimate: 0, highEstimate: 2000, isRequired: false },
      { item: 'Safety Planning Services', lowEstimate: 0, highEstimate: 0, isRequired: false }
    ]
  }
];

export default function CostEstimator() {
  const [selectedCase, setSelectedCase] = useState<string>('');
  const [complexity, setComplexity] = useState<CaseComplexity>({
    level: 'simple',
    factors: []
  });
  const [includeAttorney, setIncludeAttorney] = useState(false);
  const [attorneyHours, setAttorneyHours] = useState({ low: 0, high: 0 });
  const [attorneyRate, setAttorneyRate] = useState({ low: 0, high: 0 });
  const [customCosts, setCustomCosts] = useState<CostItem[]>([]);
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);

  const calculateEstimate = () => {
    const template = CASE_TEMPLATES.find(t => t.name === selectedCase);
    if (!template) return;

    const courtCosts: CostItem[] = template.courtCosts.map(cost => ({
      category: 'Court Fees',
      item: cost.item,
      lowEstimate: cost.lowEstimate,
      highEstimate: cost.highEstimate,
      isRequired: cost.isRequired
    }));

    let attorneyFees: CostItem[] = [];
    if (includeAttorney) {
      const feeRange = ATTORNEY_FEE_RANGES[complexity.level];
      attorneyFees = [
        {
          category: 'Attorney Fees',
          item: 'Legal Representation',
          lowEstimate: attorneyRate.low * attorneyHours.low,
          highEstimate: attorneyRate.high * attorneyHours.high,
          isRequired: false,
          notes: `${attorneyHours.low}-${attorneyHours.high} hours at $${attorneyRate.low}-$${attorneyRate.high}/hour`
        }
      ];
    }

    let additionalCosts: CostItem[] = template.additionalCosts.map(cost => ({
      category: 'Additional Services',
      item: cost.item,
      lowEstimate: cost.lowEstimate,
      highEstimate: cost.highEstimate,
      isRequired: cost.isRequired
    }));

    // Add custom costs
    additionalCosts = [...additionalCosts, ...customCosts];

    const totalLow = [...courtCosts, ...attorneyFees, ...additionalCosts]
      .reduce((sum, item) => sum + item.lowEstimate, 0);
    
    const totalHigh = [...courtCosts, ...attorneyFees, ...additionalCosts]
      .reduce((sum, item) => sum + item.highEstimate, 0);

    setEstimate({
      caseType: selectedCase,
      complexity,
      courtCosts,
      attorneyFees,
      additionalCosts,
      totalLow,
      totalHigh
    });
  };

  const loadTemplate = (templateName: string) => {
    setSelectedCase(templateName);
    const template = CASE_TEMPLATES.find(t => t.name === templateName);
    if (template) {
      setComplexity({ level: template.complexity, factors: [] });
      
      // Set default attorney hours based on complexity
      const feeRange = ATTORNEY_FEE_RANGES[template.complexity];
      setAttorneyHours({ low: feeRange.hoursLow, high: feeRange.hoursHigh });
      setAttorneyRate({ low: feeRange.hourlyLow, high: feeRange.hourlyHigh });
    }
  };

  const addCustomCost = () => {
    const newCost: CostItem = {
      category: 'Custom',
      item: '',
      lowEstimate: 0,
      highEstimate: 0,
      isRequired: false
    };
    setCustomCosts([...customCosts, newCost]);
  };

  const updateCustomCost = (index: number, field: keyof CostItem, value: any) => {
    const updated = [...customCosts];
    updated[index] = { ...updated[index], [field]: value };
    setCustomCosts(updated);
  };

  const removeCustomCost = (index: number) => {
    setCustomCosts(customCosts.filter((_, i) => i !== index));
  };

  const exportEstimate = () => {
    if (!estimate) return;

    let text = 'ARIZONA FAMILY LAW COST ESTIMATE\n';
    text += '==================================\n\n';
    text += `Case Type: ${estimate.caseType}\n`;
    text += `Complexity: ${estimate.complexity.level}\n`;
    text += `Date: ${new Date().toLocaleDateString()}\n\n`;

    text += 'COURT FEES:\n';
    estimate.courtCosts.forEach(cost => {
      text += `  ${cost.item}: $${cost.lowEstimate}`;
      if (cost.lowEstimate !== cost.highEstimate) {
        text += ` - $${cost.highEstimate}`;
      }
      text += cost.isRequired ? ' (Required)\n' : '\n';
    });

    if (estimate.attorneyFees.length > 0) {
      text += '\nATTORNEY FEES:\n';
      estimate.attorneyFees.forEach(cost => {
        text += `  ${cost.item}: $${cost.lowEstimate.toLocaleString()} - $${cost.highEstimate.toLocaleString()}\n`;
        if (cost.notes) text += `    (${cost.notes})\n`;
      });
    }

    text += '\nADDITIONAL SERVICES:\n';
    estimate.additionalCosts.forEach(cost => {
      text += `  ${cost.item}: $${cost.lowEstimate.toLocaleString()} - $${cost.highEstimate.toLocaleString()}\n`;
    });

    text += '\n' + '='.repeat(40) + '\n';
    text += `TOTAL ESTIMATED COST: $${estimate.totalLow.toLocaleString()} - $${estimate.totalHigh.toLocaleString()}\n`;
    text += '='.repeat(40) + '\n\n';

    text += 'DISCLAIMER:\n';
    text += 'This is an estimate only. Actual costs may vary based on case specifics,\n';
    text += 'attorney selection, and case duration. Always get written fee agreements.\n';

    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cost-estimate-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold">Legal Cost Estimator</h2>
            </div>
            {estimate && (
              <Button variant="outline" size="sm" onClick={exportEstimate}>
                <Download className="w-4 h-4 mr-2" />
                Export Estimate
              </Button>
            )}
          </div>

          <InfoCard type="warning" className="mb-6">
            These are estimates only. Actual costs vary based on case complexity, attorney rates, and duration. 
            Always get written fee agreements before hiring an attorney.
          </InfoCard>

          {/* Case Type Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Case Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {CASE_TEMPLATES.map(template => (
                  <button
                    key={template.name}
                    onClick={() => loadTemplate(template.name)}
                    className={`text-left p-3 rounded-lg border-2 transition-all ${
                      selectedCase === template.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-gray-600">
                      Complexity: {template.complexity}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity Factors */}
            {selectedCase && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complexity Level
                </label>
                <select
                  value={complexity.level}
                  onChange={(e) => {
                    const level = e.target.value as CaseComplexity['level'];
                    setComplexity({ ...complexity, level });
                    const feeRange = ATTORNEY_FEE_RANGES[level];
                    setAttorneyHours({ low: feeRange.hoursLow, high: feeRange.hoursHigh });
                    setAttorneyRate({ low: feeRange.hourlyLow, high: feeRange.hourlyHigh });
                  }}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="simple">Simple - Agreement on most issues</option>
                  <option value="moderate">Moderate - Some disputed issues</option>
                  <option value="complex">Complex - Many disputed issues, high assets</option>
                </select>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Attorney Fees Section */}
      {selectedCase && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              Attorney Fees
            </h3>

            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeAttorney}
                  onChange={(e) => setIncludeAttorney(e.target.checked)}
                  className="rounded"
                />
                <span className="font-medium">Include attorney representation</span>
              </label>

              {includeAttorney && (
                <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Hours (Range)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={attorneyHours.low}
                        onChange={(e) => setAttorneyHours({ ...attorneyHours, low: parseInt(e.target.value) || 0 })}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="Low"
                        min="0"
                      />
                      <span className="self-center">to</span>
                      <input
                        type="number"
                        value={attorneyHours.high}
                        onChange={(e) => setAttorneyHours({ ...attorneyHours, high: parseInt(e.target.value) || 0 })}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="High"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hourly Rate (Range)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={attorneyRate.low}
                        onChange={(e) => setAttorneyRate({ ...attorneyRate, low: parseInt(e.target.value) || 0 })}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="Low"
                        min="0"
                      />
                      <span className="self-center">to</span>
                      <input
                        type="number"
                        value={attorneyRate.high}
                        onChange={(e) => setAttorneyRate({ ...attorneyRate, high: parseInt(e.target.value) || 0 })}
                        className="flex-1 px-3 py-2 border rounded-md"
                        placeholder="High"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <InfoCard type="info">
                      Attorney fees in Arizona typically range from $200-600/hour depending on experience and location. 
                      Most attorneys require retainers of $2,500-10,000.
                    </InfoCard>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Custom Costs */}
      {selectedCase && (
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Additional Custom Costs</h3>
              <Button size="sm" variant="outline" onClick={addCustomCost}>
                Add Custom Cost
              </Button>
            </div>

            {customCosts.length > 0 && (
              <div className="space-y-3">
                {customCosts.map((cost, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={cost.item}
                        onChange={(e) => updateCustomCost(index, 'item', e.target.value)}
                        className="px-3 py-2 border rounded-md"
                        placeholder="Item description"
                      />
                      <input
                        type="number"
                        value={cost.lowEstimate}
                        onChange={(e) => updateCustomCost(index, 'lowEstimate', parseInt(e.target.value) || 0)}
                        className="px-3 py-2 border rounded-md"
                        placeholder="Low estimate"
                        min="0"
                      />
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={cost.highEstimate}
                          onChange={(e) => updateCustomCost(index, 'highEstimate', parseInt(e.target.value) || 0)}
                          className="flex-1 px-3 py-2 border rounded-md"
                          placeholder="High estimate"
                          min="0"
                        />
                        <button
                          onClick={() => removeCustomCost(index)}
                          className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Calculate Button */}
      {selectedCase && (
        <div className="flex justify-center">
          <Button size="lg" onClick={calculateEstimate}>
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Estimate
          </Button>
        </div>
      )}

      {/* Estimate Results */}
      {estimate && (
        <>
          <Card className="border-2 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Cost Estimate Summary
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Court Fees</h4>
                  <div className="space-y-2">
                    {estimate.courtCosts.map((cost, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{cost.item}</span>
                        <span className="font-medium">
                          ${cost.lowEstimate}
                          {cost.lowEstimate !== cost.highEstimate && ` - $${cost.highEstimate}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {estimate.attorneyFees.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Attorney Fees</h4>
                    <div className="space-y-2">
                      {estimate.attorneyFees.map((cost, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm">
                            <span>{cost.item}</span>
                            <span className="font-medium">
                              ${cost.lowEstimate.toLocaleString()} - ${cost.highEstimate.toLocaleString()}
                            </span>
                          </div>
                          {cost.notes && (
                            <p className="text-xs text-gray-600 ml-2">{cost.notes}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Additional Services</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {estimate.additionalCosts.map((cost, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{cost.item}</span>
                        <span className="font-medium">
                          ${cost.lowEstimate.toLocaleString()} - ${cost.highEstimate.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Estimated Cost:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${estimate.totalLow.toLocaleString()} - ${estimate.totalHigh.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cost Breakdown Chart */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-600" />
                Cost Breakdown
              </h3>

              <div className="space-y-3">
                {(() => {
                  const courtTotal = estimate.courtCosts.reduce((sum, c) => sum + c.highEstimate, 0);
                  const attorneyTotal = estimate.attorneyFees.reduce((sum, c) => sum + c.highEstimate, 0);
                  const additionalTotal = estimate.additionalCosts.reduce((sum, c) => sum + c.highEstimate, 0);
                  const total = courtTotal + attorneyTotal + additionalTotal;

                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <span>Court Fees</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${(courtTotal / total) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {Math.round((courtTotal / total) * 100)}%
                          </span>
                        </div>
                      </div>
                      {attorneyTotal > 0 && (
                        <div className="flex items-center justify-between">
                          <span>Attorney Fees</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${(attorneyTotal / total) * 100}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {Math.round((attorneyTotal / total) * 100)}%
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span>Additional Services</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: `${(additionalTotal / total) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {Math.round((additionalTotal / total) * 100)}%
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Payment Options & Resources</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Payment Plans</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Many attorneys offer payment plans</li>
                    <li>• Court filing fees can sometimes be deferred</li>
                    <li>• Credit cards or personal loans</li>
                    <li>• Legal financing companies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cost Reduction</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Limited scope representation</li>
                    <li>• Document preparation services</li>
                    <li>• Self-representation with coaching</li>
                    <li>• Fee waiver applications for court costs</li>
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