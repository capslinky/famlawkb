'use client';

import React, { useState } from 'react';
import { Home, Car, DollarSign, TrendingUp, Download, AlertTriangle, PieChart, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfoCard } from '@/components/ui/info-card';

interface Asset {
  id: string;
  name: string;
  category: 'real_estate' | 'vehicle' | 'retirement' | 'bank' | 'investment' | 'personal' | 'business' | 'other';
  value: number;
  debt: number;
  isSeparate: boolean;
  separatePercentage: number;
  owner: 'spouse1' | 'spouse2' | 'joint';
  notes?: string;
}

interface Debt {
  id: string;
  name: string;
  amount: number;
  responsibility: 'spouse1' | 'spouse2' | 'joint';
  isMarital: boolean;
}

interface DivisionResult {
  totalMaritalAssets: number;
  totalMaritalDebts: number;
  netMaritalEstate: number;
  spouse1Share: number;
  spouse2Share: number;
  spouse1Assets: Asset[];
  spouse2Assets: Asset[];
  spouse1Debts: Debt[];
  spouse2Debts: Debt[];
  equalDistribution: boolean;
  distributionRatio: { spouse1: number; spouse2: number };
  recommendations: string[];
}

const ASSET_CATEGORIES = [
  { value: 'real_estate', label: 'Real Estate', icon: Home },
  { value: 'vehicle', label: 'Vehicles', icon: Car },
  { value: 'retirement', label: 'Retirement Accounts', icon: TrendingUp },
  { value: 'bank', label: 'Bank Accounts', icon: DollarSign },
  { value: 'investment', label: 'Investments', icon: PieChart },
  { value: 'personal', label: 'Personal Property', icon: Home },
  { value: 'business', label: 'Business Interests', icon: TrendingUp },
  { value: 'other', label: 'Other Assets', icon: DollarSign }
];

export default function PropertyDivisionAnalyzer() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [debts, setDebts] = useState<Debt[]>([]);
  const [divisionType, setDivisionType] = useState<'equal' | 'equitable'>('equal');
  const [equitableFactors, setEquitableFactors] = useState({
    incomeDisparity: false,
    lengthOfMarriage: 10,
    ageDisparity: false,
    healthIssues: false,
    childCustody: 'joint',
    wasteOfAssets: false,
    contributions: 'equal'
  });
  const [result, setResult] = useState<DivisionResult | null>(null);
  const [showAssetForm, setShowAssetForm] = useState(false);
  const [showDebtForm, setShowDebtForm] = useState(false);
  const [currentAsset, setCurrentAsset] = useState<Partial<Asset>>({
    category: 'real_estate',
    value: 0,
    debt: 0,
    isSeparate: false,
    separatePercentage: 0,
    owner: 'joint'
  });
  const [currentDebt, setCurrentDebt] = useState<Partial<Debt>>({
    amount: 0,
    responsibility: 'joint',
    isMarital: true
  });

  const addAsset = () => {
    if (!currentAsset.name || currentAsset.value === undefined) return;

    const newAsset: Asset = {
      id: `asset-${Date.now()}`,
      name: currentAsset.name,
      category: currentAsset.category as Asset['category'],
      value: currentAsset.value,
      debt: currentAsset.debt || 0,
      isSeparate: currentAsset.isSeparate || false,
      separatePercentage: currentAsset.separatePercentage || 0,
      owner: currentAsset.owner || 'joint',
      notes: currentAsset.notes
    };

    setAssets([...assets, newAsset]);
    setCurrentAsset({
      category: 'real_estate',
      value: 0,
      debt: 0,
      isSeparate: false,
      separatePercentage: 0,
      owner: 'joint'
    });
    setShowAssetForm(false);
  };

  const removeAsset = (id: string) => {
    setAssets(assets.filter(a => a.id !== id));
  };

  const addDebt = () => {
    if (!currentDebt.name || currentDebt.amount === undefined) return;

    const newDebt: Debt = {
      id: `debt-${Date.now()}`,
      name: currentDebt.name,
      amount: currentDebt.amount,
      responsibility: currentDebt.responsibility || 'joint',
      isMarital: currentDebt.isMarital !== false
    };

    setDebts([...debts, newDebt]);
    setCurrentDebt({
      amount: 0,
      responsibility: 'joint',
      isMarital: true
    });
    setShowDebtForm(false);
  };

  const removeDebt = (id: string) => {
    setDebts(debts.filter(d => d.id !== id));
  };

  const calculateDivision = () => {
    // Calculate marital property
    let totalMaritalAssets = 0;
    let totalMaritalDebts = 0;
    const maritalAssets: Asset[] = [];
    
    assets.forEach(asset => {
      if (asset.isSeparate) {
        const maritalPortion = asset.value * (1 - asset.separatePercentage / 100);
        totalMaritalAssets += maritalPortion - asset.debt;
        if (maritalPortion > 0) {
          maritalAssets.push({
            ...asset,
            value: maritalPortion
          });
        }
      } else {
        totalMaritalAssets += asset.value - asset.debt;
        maritalAssets.push(asset);
      }
    });

    debts.forEach(debt => {
      if (debt.isMarital) {
        totalMaritalDebts += debt.amount;
      }
    });

    const netMaritalEstate = totalMaritalAssets - totalMaritalDebts;

    // Determine distribution ratio
    let spouse1Ratio = 0.5;
    let spouse2Ratio = 0.5;

    if (divisionType === 'equitable') {
      // Adjust based on equitable factors
      if (equitableFactors.incomeDisparity) {
        spouse1Ratio += 0.05;
      }
      if (equitableFactors.lengthOfMarriage > 20) {
        spouse1Ratio += 0.05;
      }
      if (equitableFactors.healthIssues) {
        spouse1Ratio += 0.05;
      }
      if (equitableFactors.childCustody === 'spouse1') {
        spouse1Ratio += 0.1;
      } else if (equitableFactors.childCustody === 'spouse2') {
        spouse1Ratio -= 0.1;
      }
      if (equitableFactors.wasteOfAssets) {
        spouse2Ratio -= 0.1;
      }
      
      spouse2Ratio = 1 - spouse1Ratio;
    }

    const spouse1Target = netMaritalEstate * spouse1Ratio;
    const spouse2Target = netMaritalEstate * spouse2Ratio;

    // Allocate assets and debts
    const spouse1Assets: Asset[] = [];
    const spouse2Assets: Asset[] = [];
    const spouse1Debts: Debt[] = [];
    const spouse2Debts: Debt[] = [];

    let spouse1Total = 0;
    let spouse2Total = 0;

    // First, assign based on current ownership
    assets.forEach(asset => {
      const netValue = asset.value - asset.debt;
      if (asset.owner === 'spouse1') {
        spouse1Assets.push(asset);
        spouse1Total += netValue;
      } else if (asset.owner === 'spouse2') {
        spouse2Assets.push(asset);
        spouse2Total += netValue;
      }
    });

    // Assign joint assets to balance
    assets.filter(a => a.owner === 'joint').forEach(asset => {
      const netValue = asset.value - asset.debt;
      if (spouse1Total < spouse1Target) {
        spouse1Assets.push(asset);
        spouse1Total += netValue;
      } else {
        spouse2Assets.push(asset);
        spouse2Total += netValue;
      }
    });

    // Allocate debts
    debts.forEach(debt => {
      if (debt.responsibility === 'spouse1' || 
          (debt.responsibility === 'joint' && spouse1Total > spouse1Target)) {
        spouse1Debts.push(debt);
        spouse1Total -= debt.amount;
      } else {
        spouse2Debts.push(debt);
        spouse2Total -= debt.amount;
      }
    });

    const recommendations: string[] = [];

    // Generate recommendations
    if (Math.abs(spouse1Total - spouse1Target) > 10000) {
      recommendations.push('Consider equalizing payment or asset transfer to achieve target distribution');
    }

    if (spouse1Assets.some(a => a.category === 'retirement')) {
      recommendations.push('Retirement accounts may require QDRO (Qualified Domestic Relations Order)');
    }

    if (spouse1Assets.some(a => a.category === 'real_estate') || 
        spouse2Assets.some(a => a.category === 'real_estate')) {
      recommendations.push('Real estate transfers require deed preparation and recording');
    }

    if (totalMaritalDebts > totalMaritalAssets * 0.5) {
      recommendations.push('High debt load - consider bankruptcy consultation');
    }

    setResult({
      totalMaritalAssets,
      totalMaritalDebts,
      netMaritalEstate,
      spouse1Share: spouse1Total,
      spouse2Share: spouse2Total,
      spouse1Assets,
      spouse2Assets,
      spouse1Debts,
      spouse2Debts,
      equalDistribution: divisionType === 'equal',
      distributionRatio: { spouse1: spouse1Ratio, spouse2: spouse2Ratio },
      recommendations
    });
  };

  const exportAnalysis = () => {
    if (!result) return;

    const report = `ARIZONA PROPERTY DIVISION ANALYSIS
=====================================
Generated: ${new Date().toLocaleDateString()}

MARITAL ESTATE SUMMARY:
----------------------
Total Marital Assets: $${result.totalMaritalAssets.toLocaleString()}
Total Marital Debts: $${result.totalMaritalDebts.toLocaleString()}
Net Marital Estate: $${result.netMaritalEstate.toLocaleString()}

DISTRIBUTION TYPE: ${result.equalDistribution ? 'Equal (50/50)' : 'Equitable'}
Distribution Ratio: Spouse 1: ${(result.distributionRatio.spouse1 * 100).toFixed(1)}% | Spouse 2: ${(result.distributionRatio.spouse2 * 100).toFixed(1)}%

SPOUSE 1 ALLOCATION:
-------------------
Assets:
${result.spouse1Assets.map(a => `• ${a.name}: $${a.value.toLocaleString()} (Net: $${(a.value - a.debt).toLocaleString()})`).join('\n')}

Debts:
${result.spouse1Debts.map(d => `• ${d.name}: $${d.amount.toLocaleString()}`).join('\n') || 'None'}

Total Net Value: $${result.spouse1Share.toLocaleString()}

SPOUSE 2 ALLOCATION:
-------------------
Assets:
${result.spouse2Assets.map(a => `• ${a.name}: $${a.value.toLocaleString()} (Net: $${(a.value - a.debt).toLocaleString()})`).join('\n')}

Debts:
${result.spouse2Debts.map(d => `• ${d.name}: $${d.amount.toLocaleString()}`).join('\n') || 'None'}

Total Net Value: $${result.spouse2Share.toLocaleString()}

RECOMMENDATIONS:
---------------
${result.recommendations.map(r => `• ${r}`).join('\n')}

DISCLAIMER:
----------
This analysis is for informational purposes only. Property division in Arizona
follows community property laws with equitable distribution considerations.
Consult with a qualified attorney for legal advice specific to your situation.
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `property-division-analysis-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  const getCategoryIcon = (category: Asset['category']) => {
    const cat = ASSET_CATEGORIES.find(c => c.value === category);
    return cat ? cat.icon : DollarSign;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Property Division Analyzer</h2>
            </div>
            {result && (
              <Button variant="outline" size="sm" onClick={exportAnalysis}>
                <Download className="w-4 h-4 mr-2" />
                Export Analysis
              </Button>
            )}
          </div>

          <InfoCard type="info" className="mb-6">
            Arizona is a community property state. Property acquired during marriage is generally divided 
            equally, but courts may consider equitable factors for fair distribution.
          </InfoCard>

          {/* Division Type Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Division Type</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="equal"
                  checked={divisionType === 'equal'}
                  onChange={(e) => setDivisionType('equal')}
                  className="text-blue-600"
                />
                <span>Equal Distribution (50/50)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="equitable"
                  checked={divisionType === 'equitable'}
                  onChange={(e) => setDivisionType('equitable')}
                  className="text-blue-600"
                />
                <span>Equitable Distribution</span>
              </label>
            </div>
          </div>

          {/* Equitable Factors */}
          {divisionType === 'equitable' && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-3">Equitable Factors</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={equitableFactors.incomeDisparity}
                    onChange={(e) => setEquitableFactors({ ...equitableFactors, incomeDisparity: e.target.checked })}
                    className="rounded"
                  />
                  <span>Significant income disparity</span>
                </label>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Length of Marriage (years)
                  </label>
                  <input
                    type="number"
                    value={equitableFactors.lengthOfMarriage}
                    onChange={(e) => setEquitableFactors({ ...equitableFactors, lengthOfMarriage: parseInt(e.target.value) || 0 })}
                    className="w-32 px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={equitableFactors.healthIssues}
                    onChange={(e) => setEquitableFactors({ ...equitableFactors, healthIssues: e.target.checked })}
                    className="rounded"
                  />
                  <span>Health issues affecting earning capacity</span>
                </label>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Child Custody
                  </label>
                  <select
                    value={equitableFactors.childCustody}
                    onChange={(e) => setEquitableFactors({ ...equitableFactors, childCustody: e.target.value })}
                    className="w-48 px-3 py-2 border rounded-md"
                  >
                    <option value="joint">Joint Custody</option>
                    <option value="spouse1">Spouse 1 Primary</option>
                    <option value="spouse2">Spouse 2 Primary</option>
                  </select>
                </div>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={equitableFactors.wasteOfAssets}
                    onChange={(e) => setEquitableFactors({ ...equitableFactors, wasteOfAssets: e.target.checked })}
                    className="rounded"
                  />
                  <span>Waste or dissipation of assets by Spouse 2</span>
                </label>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Assets Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Assets</h3>
            <Button size="sm" onClick={() => setShowAssetForm(!showAssetForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Asset
            </Button>
          </div>

          {/* Asset Form */}
          {showAssetForm && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Asset Name *
                  </label>
                  <input
                    type="text"
                    value={currentAsset.name || ''}
                    onChange={(e) => setCurrentAsset({ ...currentAsset, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g., Family Home"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={currentAsset.category}
                    onChange={(e) => setCurrentAsset({ ...currentAsset, category: e.target.value as Asset['category'] })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    {ASSET_CATEGORIES.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Value *
                  </label>
                  <input
                    type="number"
                    value={currentAsset.value}
                    onChange={(e) => setCurrentAsset({ ...currentAsset, value: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Debt/Loan Amount
                  </label>
                  <input
                    type="number"
                    value={currentAsset.debt}
                    onChange={(e) => setCurrentAsset({ ...currentAsset, debt: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Owner
                  </label>
                  <select
                    value={currentAsset.owner}
                    onChange={(e) => setCurrentAsset({ ...currentAsset, owner: e.target.value as Asset['owner'] })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="joint">Joint</option>
                    <option value="spouse1">Spouse 1</option>
                    <option value="spouse2">Spouse 2</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={currentAsset.isSeparate}
                      onChange={(e) => setCurrentAsset({ ...currentAsset, isSeparate: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Separate Property</span>
                  </label>
                  
                  {currentAsset.isSeparate && (
                    <input
                      type="number"
                      value={currentAsset.separatePercentage}
                      onChange={(e) => setCurrentAsset({ ...currentAsset, separatePercentage: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="% Separate"
                      min="0"
                      max="100"
                    />
                  )}
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={addAsset}>Add Asset</Button>
                <Button size="sm" variant="outline" onClick={() => setShowAssetForm(false)}>Cancel</Button>
              </div>
            </div>
          )}

          {/* Assets List */}
          <div className="space-y-2">
            {assets.map(asset => {
              const Icon = getCategoryIcon(asset.category);
              const netValue = asset.value - asset.debt;
              
              return (
                <div key={asset.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-sm text-gray-600">
                        Value: ${asset.value.toLocaleString()} | 
                        Debt: ${asset.debt.toLocaleString()} | 
                        Net: ${netValue.toLocaleString()}
                        {asset.isSeparate && ` (${asset.separatePercentage}% separate)`}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeAsset(asset.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              );
            })}
          </div>

          {assets.length === 0 && (
            <p className="text-center text-gray-500 py-4">No assets added yet</p>
          )}
        </CardContent>
      </Card>

      {/* Debts Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Debts</h3>
            <Button size="sm" onClick={() => setShowDebtForm(!showDebtForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Debt
            </Button>
          </div>

          {/* Debt Form */}
          {showDebtForm && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Debt Name *
                  </label>
                  <input
                    type="text"
                    value={currentDebt.name || ''}
                    onChange={(e) => setCurrentDebt({ ...currentDebt, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g., Credit Card"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount *
                  </label>
                  <input
                    type="number"
                    value={currentDebt.amount}
                    onChange={(e) => setCurrentDebt({ ...currentDebt, amount: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Responsibility
                  </label>
                  <select
                    value={currentDebt.responsibility}
                    onChange={(e) => setCurrentDebt({ ...currentDebt, responsibility: e.target.value as Debt['responsibility'] })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="joint">Joint</option>
                    <option value="spouse1">Spouse 1</option>
                    <option value="spouse2">Spouse 2</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={currentDebt.isMarital}
                      onChange={(e) => setCurrentDebt({ ...currentDebt, isMarital: e.target.checked })}
                      className="rounded"
                    />
                    <span>Marital Debt</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={addDebt}>Add Debt</Button>
                <Button size="sm" variant="outline" onClick={() => setShowDebtForm(false)}>Cancel</Button>
              </div>
            </div>
          )}

          {/* Debts List */}
          <div className="space-y-2">
            {debts.map(debt => (
              <div key={debt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{debt.name}</div>
                  <div className="text-sm text-gray-600">
                    Amount: ${debt.amount.toLocaleString()} | 
                    Responsibility: {debt.responsibility}
                    {!debt.isMarital && ' (Separate)'}
                  </div>
                </div>
                <button
                  onClick={() => removeDebt(debt.id)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            ))}
          </div>

          {debts.length === 0 && (
            <p className="text-center text-gray-500 py-4">No debts added yet</p>
          )}
        </CardContent>
      </Card>

      {/* Calculate Button */}
      <div className="flex justify-center">
        <Button 
          size="lg" 
          onClick={calculateDivision}
          disabled={assets.length === 0 && debts.length === 0}
        >
          <PieChart className="w-5 h-5 mr-2" />
          Analyze Division
        </Button>
      </div>

      {/* Results */}
      {result && (
        <>
          <Card className="border-2 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Division Analysis</h3>

              {/* Summary */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Assets</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.totalMaritalAssets.toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Debts</p>
                  <p className="text-2xl font-bold text-red-600">
                    ${result.totalMaritalDebts.toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Net Estate</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${result.netMaritalEstate.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Distribution */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Proposed Distribution</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium mb-2">Spouse 1</h5>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      ${result.spouse1Share.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {(result.distributionRatio.spouse1 * 100).toFixed(1)}% of net estate
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium mb-2">Spouse 2</h5>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      ${result.spouse2Share.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {(result.distributionRatio.spouse2 * 100).toFixed(1)}% of net estate
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Important Considerations
                  </h4>
                  <ul className="space-y-1">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-yellow-800">• {rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Detailed Allocation */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Detailed Allocation</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Spouse 1 */}
                <div>
                  <h4 className="font-medium mb-3">Spouse 1 Receives</h4>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Assets:</div>
                    {result.spouse1Assets.map(asset => (
                      <div key={asset.id} className="pl-4 text-sm">
                        • {asset.name}: ${(asset.value - asset.debt).toLocaleString()}
                      </div>
                    ))}
                    {result.spouse1Assets.length === 0 && (
                      <div className="pl-4 text-sm text-gray-500">None</div>
                    )}
                    
                    <div className="text-sm font-medium text-gray-700 mt-3">Debts:</div>
                    {result.spouse1Debts.map(debt => (
                      <div key={debt.id} className="pl-4 text-sm">
                        • {debt.name}: ${debt.amount.toLocaleString()}
                      </div>
                    ))}
                    {result.spouse1Debts.length === 0 && (
                      <div className="pl-4 text-sm text-gray-500">None</div>
                    )}
                  </div>
                </div>

                {/* Spouse 2 */}
                <div>
                  <h4 className="font-medium mb-3">Spouse 2 Receives</h4>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Assets:</div>
                    {result.spouse2Assets.map(asset => (
                      <div key={asset.id} className="pl-4 text-sm">
                        • {asset.name}: ${(asset.value - asset.debt).toLocaleString()}
                      </div>
                    ))}
                    {result.spouse2Assets.length === 0 && (
                      <div className="pl-4 text-sm text-gray-500">None</div>
                    )}
                    
                    <div className="text-sm font-medium text-gray-700 mt-3">Debts:</div>
                    {result.spouse2Debts.map(debt => (
                      <div key={debt.id} className="pl-4 text-sm">
                        • {debt.name}: ${debt.amount.toLocaleString()}
                      </div>
                    ))}
                    {result.spouse2Debts.length === 0 && (
                      <div className="pl-4 text-sm text-gray-500">None</div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}