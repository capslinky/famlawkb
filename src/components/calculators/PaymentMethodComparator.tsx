'use client';

import React, { useState } from 'react';
import { Calculator, CreditCard, Building, Banknote, TrendingUp, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PaymentMethodInputs {
  monthlyAmount: string;
  yearsOfPayments: string;
  
  // Direct Deposit
  directDepositBankFee: string;
  
  // Check
  checkPrintingCost: string;
  checkMailingCost: string;
  checkProcessingTime: string;
  checkBounceRate: string;
  checkBounceFee: string;
  
  // Money Order
  moneyOrderFee: string;
  moneyOrderPurchaseTime: string;
  
  // Wage Garnishment
  garnishmentPercentage: string;
  garnishmentAdminFee: string;
  employerCompliance: boolean;
  
  // State Disbursement Unit
  sduProcessingFee: string;
  sduSetupFee: string;
  
  // Online Payment Portal
  onlinePortalFee: string;
  onlineConvenienceFee: string;
  
  // App-based (Venmo/Zelle/PayPal)
  appTransactionFee: string;
  appInstantTransferFee: string;
  
  // Preferences
  priorityTracking: boolean;
  priorityConvenience: boolean;
  prioritySecurity: boolean;
  priorityCost: boolean;
  prioritySpeed: boolean;
}

interface PaymentMethod {
  name: string;
  icon: React.ReactNode;
  monthlyFee: number;
  yearlyFee: number;
  totalCost: number;
  processingDays: number;
  trackability: 'excellent' | 'good' | 'fair' | 'poor';
  convenience: 'excellent' | 'good' | 'fair' | 'poor';
  security: 'excellent' | 'good' | 'fair' | 'poor';
  courtAcceptance: 'always' | 'usually' | 'sometimes' | 'rarely';
  proofOfPayment: 'automatic' | 'manual' | 'difficult';
  modificationEase: 'easy' | 'moderate' | 'difficult';
  pros: string[];
  cons: string[];
  score: number;
  recommended: boolean;
}

interface ComparisonResult {
  methods: PaymentMethod[];
  bestOverall: PaymentMethod;
  mostSecure: PaymentMethod;
  mostConvenient: PaymentMethod;
  leastExpensive: PaymentMethod;
  fastestProcessing: PaymentMethod;
  recommendations: string[];
  warnings: string[];
}

export default function PaymentMethodComparator() {
  const [inputs, setInputs] = useState<PaymentMethodInputs>({
    monthlyAmount: '',
    yearsOfPayments: '5',
    
    directDepositBankFee: '0',
    
    checkPrintingCost: '0.50',
    checkMailingCost: '0.66',
    checkProcessingTime: '5',
    checkBounceRate: '2',
    checkBounceFee: '35',
    
    moneyOrderFee: '1.45',
    moneyOrderPurchaseTime: '30',
    
    garnishmentPercentage: '25',
    garnishmentAdminFee: '25',
    employerCompliance: true,
    
    sduProcessingFee: '2',
    sduSetupFee: '25',
    
    onlinePortalFee: '2.95',
    onlineConvenienceFee: '2.5',
    
    appTransactionFee: '0',
    appInstantTransferFee: '1.75',
    
    priorityTracking: true,
    priorityConvenience: true,
    prioritySecurity: true,
    priorityCost: false,
    prioritySpeed: false
  });

  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof PaymentMethodInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateMethodCosts = (): ComparisonResult => {
    const monthlyAmount = parseFloat(inputs.monthlyAmount) || 0;
    const years = parseFloat(inputs.yearsOfPayments) || 1;
    const totalMonths = years * 12;
    const totalPayments = monthlyAmount * totalMonths;
    
    const methods: PaymentMethod[] = [];
    
    // 1. Direct Deposit / ACH
    const directDepositFee = parseFloat(inputs.directDepositBankFee) || 0;
    methods.push({
      name: 'Direct Deposit (ACH)',
      icon: <Building className="w-5 h-5 text-green-600" />,
      monthlyFee: directDepositFee,
      yearlyFee: directDepositFee * 12,
      totalCost: directDepositFee * totalMonths,
      processingDays: 1,
      trackability: 'excellent',
      convenience: 'excellent',
      security: 'excellent',
      courtAcceptance: 'always',
      proofOfPayment: 'automatic',
      modificationEase: 'easy',
      pros: [
        'Automatic and reliable',
        'Instant proof of payment',
        'No risk of lost payments',
        'Court-preferred method',
        'Easy to modify amounts'
      ],
      cons: [
        'Requires bank account',
        'Must maintain sufficient balance',
        'May have NSF fees if account is low'
      ],
      score: 95,
      recommended: true
    });
    
    // 2. State Disbursement Unit (SDU)
    const sduMonthlyFee = parseFloat(inputs.sduProcessingFee) || 0;
    const sduSetup = parseFloat(inputs.sduSetupFee) || 0;
    methods.push({
      name: 'State Disbursement Unit',
      icon: <Building className="w-5 h-5 text-blue-600" />,
      monthlyFee: sduMonthlyFee,
      yearlyFee: sduMonthlyFee * 12,
      totalCost: (sduMonthlyFee * totalMonths) + sduSetup,
      processingDays: 2,
      trackability: 'excellent',
      convenience: 'good',
      security: 'excellent',
      courtAcceptance: 'always',
      proofOfPayment: 'automatic',
      modificationEase: 'moderate',
      pros: [
        'Official payment record',
        'Court-integrated tracking',
        'Multiple payment options',
        'Protects both parties',
        'Handles distribution to multiple recipients'
      ],
      cons: [
        'Small processing fee',
        'Slight processing delay',
        'Setup required'
      ],
      score: 90,
      recommended: true
    });
    
    // 3. Wage Garnishment
    const garnishmentFee = parseFloat(inputs.garnishmentAdminFee) || 0;
    const garnishmentPercent = parseFloat(inputs.garnishmentPercentage) || 0;
    const maxGarnishment = monthlyAmount * (garnishmentPercent / 100);
    methods.push({
      name: 'Wage Garnishment',
      icon: <Banknote className="w-5 h-5 text-orange-600" />,
      monthlyFee: garnishmentFee,
      yearlyFee: garnishmentFee * 12,
      totalCost: garnishmentFee * totalMonths,
      processingDays: 7,
      trackability: 'excellent',
      convenience: inputs.employerCompliance ? 'good' : 'poor',
      security: 'excellent',
      courtAcceptance: 'always',
      proofOfPayment: 'automatic',
      modificationEase: 'difficult',
      pros: [
        'Automatic deduction',
        'No action required by payor',
        'Guaranteed payment if employed',
        'Court-enforced'
      ],
      cons: [
        'Employer awareness',
        'Only works with W-2 employment',
        'Difficult to modify',
        'May affect employment',
        `Limited to ${garnishmentPercent}% of disposable income`
      ],
      score: inputs.employerCompliance ? 75 : 50,
      recommended: false
    });
    
    // 4. Personal Check
    const checkCost = parseFloat(inputs.checkPrintingCost) || 0;
    const mailingCost = parseFloat(inputs.checkMailingCost) || 0;
    const bounceRate = parseFloat(inputs.checkBounceRate) || 0;
    const bounceFee = parseFloat(inputs.checkBounceFee) || 0;
    const expectedBounceCost = (bounceRate / 100) * bounceFee;
    methods.push({
      name: 'Personal Check',
      icon: <CreditCard className="w-5 h-5 text-gray-600" />,
      monthlyFee: checkCost + mailingCost + expectedBounceCost,
      yearlyFee: (checkCost + mailingCost + expectedBounceCost) * 12,
      totalCost: (checkCost + mailingCost + expectedBounceCost) * totalMonths,
      processingDays: parseInt(inputs.checkProcessingTime) || 5,
      trackability: 'fair',
      convenience: 'fair',
      security: 'fair',
      courtAcceptance: 'usually',
      proofOfPayment: 'manual',
      modificationEase: 'easy',
      pros: [
        'Familiar method',
        'Physical record',
        'No technology required'
      ],
      cons: [
        'Can bounce',
        'Can be lost in mail',
        'Slow processing',
        'Manual tracking required',
        'Risk of fraud'
      ],
      score: 60,
      recommended: false
    });
    
    // 5. Money Order
    const moneyOrderFee = parseFloat(inputs.moneyOrderFee) || 0;
    methods.push({
      name: 'Money Order',
      icon: <Banknote className="w-5 h-5 text-green-600" />,
      monthlyFee: moneyOrderFee + mailingCost,
      yearlyFee: (moneyOrderFee + mailingCost) * 12,
      totalCost: (moneyOrderFee + mailingCost) * totalMonths,
      processingDays: 5,
      trackability: 'good',
      convenience: 'poor',
      security: 'good',
      courtAcceptance: 'always',
      proofOfPayment: 'manual',
      modificationEase: 'easy',
      pros: [
        'Guaranteed funds',
        'No bank account needed',
        'Widely accepted',
        'Cannot bounce'
      ],
      cons: [
        'Must purchase in person',
        'Fee for each order',
        'Time-consuming',
        'Can be lost',
        'Manual record keeping'
      ],
      score: 65,
      recommended: false
    });
    
    // 6. Online Payment Portal
    const onlineFee = parseFloat(inputs.onlinePortalFee) || 0;
    const conveniencePct = parseFloat(inputs.onlineConvenienceFee) || 0;
    const onlineMonthlyFee = onlineFee + (monthlyAmount * conveniencePct / 100);
    methods.push({
      name: 'Online Payment Portal',
      icon: <CreditCard className="w-5 h-5 text-purple-600" />,
      monthlyFee: onlineMonthlyFee,
      yearlyFee: onlineMonthlyFee * 12,
      totalCost: onlineMonthlyFee * totalMonths,
      processingDays: 1,
      trackability: 'excellent',
      convenience: 'excellent',
      security: 'good',
      courtAcceptance: 'usually',
      proofOfPayment: 'automatic',
      modificationEase: 'easy',
      pros: [
        'Convenient 24/7 access',
        'Instant confirmation',
        'Payment history available',
        'Multiple payment methods',
        'Mobile friendly'
      ],
      cons: [
        'Convenience fees',
        'Requires internet',
        'Account setup needed',
        'Percentage-based fees can be high'
      ],
      score: 80,
      recommended: true
    });
    
    // 7. Payment Apps (Venmo/Zelle/PayPal)
    const appFee = parseFloat(inputs.appTransactionFee) || 0;
    methods.push({
      name: 'Payment Apps (Venmo/Zelle)',
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
      monthlyFee: appFee,
      yearlyFee: appFee * 12,
      totalCost: appFee * totalMonths,
      processingDays: 0,
      trackability: 'good',
      convenience: 'excellent',
      security: 'fair',
      courtAcceptance: 'sometimes',
      proofOfPayment: 'manual',
      modificationEase: 'easy',
      pros: [
        'Instant transfer',
        'Very convenient',
        'Mobile friendly',
        'Transaction history',
        'Often free'
      ],
      cons: [
        'Not court-integrated',
        'May not be accepted as official',
        'Privacy concerns',
        'Requires both parties to have accounts',
        'Daily/weekly limits'
      ],
      score: 70,
      recommended: false
    });
    
    // Calculate scores based on priorities
    methods.forEach(method => {
      let score = 50; // Base score
      
      // Adjust based on priorities
      if (inputs.priorityTracking) {
        score += method.trackability === 'excellent' ? 10 : 
                 method.trackability === 'good' ? 5 : 0;
      }
      if (inputs.priorityConvenience) {
        score += method.convenience === 'excellent' ? 10 : 
                 method.convenience === 'good' ? 5 : 0;
      }
      if (inputs.prioritySecurity) {
        score += method.security === 'excellent' ? 10 : 
                 method.security === 'good' ? 5 : 0;
      }
      if (inputs.priorityCost) {
        score -= method.monthlyFee > 10 ? 10 : 
                 method.monthlyFee > 5 ? 5 : 0;
      }
      if (inputs.prioritySpeed) {
        score += method.processingDays === 0 ? 10 : 
                 method.processingDays <= 1 ? 5 : 0;
      }
      
      // Court acceptance is critical
      score += method.courtAcceptance === 'always' ? 15 : 
               method.courtAcceptance === 'usually' ? 5 : 0;
      
      method.score = Math.min(100, Math.max(0, score));
    });
    
    // Sort by score
    methods.sort((a, b) => b.score - a.score);
    
    // Find best in each category
    const bestOverall = methods[0];
    const mostSecure = methods.reduce((prev, curr) => 
      curr.security === 'excellent' && curr.score > prev.score ? curr : prev
    );
    const mostConvenient = methods.reduce((prev, curr) => 
      curr.convenience === 'excellent' && curr.score > prev.score ? curr : prev
    );
    const leastExpensive = methods.reduce((prev, curr) => 
      curr.totalCost < prev.totalCost ? curr : prev
    );
    const fastestProcessing = methods.reduce((prev, curr) => 
      curr.processingDays < prev.processingDays ? curr : prev
    );
    
    // Generate recommendations
    const recommendations: string[] = [];
    const warnings: string[] = [];
    
    if (monthlyAmount > 2000) {
      recommendations.push('For large payments, use court-integrated methods like SDU or direct deposit for better tracking');
    }
    
    if (inputs.prioritySecurity && inputs.priorityTracking) {
      recommendations.push('State Disbursement Unit provides the best combination of security and tracking');
    }
    
    if (totalPayments > 50000) {
      recommendations.push(`Over ${years} years, even small fees add up - prioritize low-cost methods`);
    }
    
    if (!inputs.employerCompliance) {
      warnings.push('Without employer compliance, wage garnishment may be ineffective');
    }
    
    recommendations.push('Always keep records of all payments, regardless of method');
    recommendations.push('Consider setting up automatic payments to avoid missing deadlines');
    
    if (methods.find(m => m.name.includes('Apps'))) {
      warnings.push('Payment apps may not be accepted by all courts - verify before using');
    }
    
    return {
      methods,
      bestOverall,
      mostSecure,
      mostConvenient,
      leastExpensive,
      fastestProcessing,
      recommendations,
      warnings
    };
  };

  const handleCalculate = () => {
    if (!inputs.monthlyAmount) {
      alert('Please enter the monthly payment amount');
      return;
    }
    
    const comparison = calculateMethodCosts();
    setResult(comparison);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs({
      monthlyAmount: '',
      yearsOfPayments: '5',
      directDepositBankFee: '0',
      checkPrintingCost: '0.50',
      checkMailingCost: '0.66',
      checkProcessingTime: '5',
      checkBounceRate: '2',
      checkBounceFee: '35',
      moneyOrderFee: '1.45',
      moneyOrderPurchaseTime: '30',
      garnishmentPercentage: '25',
      garnishmentAdminFee: '25',
      employerCompliance: true,
      sduProcessingFee: '2',
      sduSetupFee: '25',
      onlinePortalFee: '2.95',
      onlineConvenienceFee: '2.5',
      appTransactionFee: '0',
      appInstantTransferFee: '1.75',
      priorityTracking: true,
      priorityConvenience: true,
      prioritySecurity: true,
      priorityCost: false,
      prioritySpeed: false
    });
    setResult(null);
    setShowResults(false);
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'fair': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Payment Method Comparator</h2>
          </div>
          
          {/* Basic Information */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Payment Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Payment Amount
                </label>
                <div className="relative">
                  <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={inputs.monthlyAmount}
                    onChange={(e) => handleInputChange('monthlyAmount', e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="1500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Duration (Years)
                </label>
                <input
                  type="number"
                  value={inputs.yearsOfPayments}
                  onChange={(e) => handleInputChange('yearsOfPayments', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="5"
                  min="1"
                  max="20"
                />
              </div>
            </div>
          </div>

          {/* Method-Specific Fees */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Method-Specific Costs & Fees</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Direct Deposit Fee (per month)
                </label>
                <input
                  type="number"
                  value={inputs.directDepositBankFee}
                  onChange={(e) => handleInputChange('directDepositBankFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  SDU Processing Fee
                </label>
                <input
                  type="number"
                  value={inputs.sduProcessingFee}
                  onChange={(e) => handleInputChange('sduProcessingFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="2"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Online Portal Fee (%)
                </label>
                <input
                  type="number"
                  value={inputs.onlineConvenienceFee}
                  onChange={(e) => handleInputChange('onlineConvenienceFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="2.5"
                  step="0.1"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Check + Mailing Cost
                </label>
                <input
                  type="number"
                  value={(parseFloat(inputs.checkPrintingCost) + parseFloat(inputs.checkMailingCost)).toFixed(2)}
                  onChange={(e) => {
                    const total = parseFloat(e.target.value) || 0;
                    handleInputChange('checkPrintingCost', (total * 0.43).toFixed(2));
                    handleInputChange('checkMailingCost', (total * 0.57).toFixed(2));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="1.16"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Money Order Fee
                </label>
                <input
                  type="number"
                  value={inputs.moneyOrderFee}
                  onChange={(e) => handleInputChange('moneyOrderFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="1.45"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Garnishment Admin Fee
                </label>
                <input
                  type="number"
                  value={inputs.garnishmentAdminFee}
                  onChange={(e) => handleInputChange('garnishmentAdminFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="25"
                  step="1"
                />
              </div>
            </div>
          </div>

          {/* Priorities */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Your Priorities</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.priorityTracking}
                  onChange={(e) => handleInputChange('priorityTracking', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Payment Tracking</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.priorityConvenience}
                  onChange={(e) => handleInputChange('priorityConvenience', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Convenience</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.prioritySecurity}
                  onChange={(e) => handleInputChange('prioritySecurity', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Security</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.priorityCost}
                  onChange={(e) => handleInputChange('priorityCost', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Low Cost</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.prioritySpeed}
                  onChange={(e) => handleInputChange('prioritySpeed', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Fast Processing</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.employerCompliance}
                  onChange={(e) => handleInputChange('employerCompliance', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Employer Cooperative</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleCalculate}
              className="flex-1 md:flex-none md:px-8"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Compare Methods
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
          {/* Best Methods Summary */}
          <Card className="border-2 border-indigo-200 bg-indigo-50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recommended Payment Methods</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold">Best Overall</h3>
                    </div>
                    <div className="text-lg font-bold mb-1">{result.bestOverall.name}</div>
                    <div className="text-sm text-gray-600">
                      Score: {result.bestOverall.score}/100
                    </div>
                    <div className="text-sm text-gray-600">
                      ${result.bestOverall.monthlyFee.toFixed(2)}/month
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold">Most Secure</h3>
                    </div>
                    <div className="text-lg font-bold mb-1">{result.mostSecure.name}</div>
                    <div className="text-sm text-gray-600">
                      Security: {result.mostSecure.security}
                    </div>
                    <div className="text-sm text-gray-600">
                      Court acceptance: {result.mostSecure.courtAcceptance}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Banknote className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold">Lowest Cost</h3>
                    </div>
                    <div className="text-lg font-bold mb-1">{result.leastExpensive.name}</div>
                    <div className="text-sm text-gray-600">
                      Total fees: ${result.leastExpensive.totalCost.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Over {inputs.yearsOfPayments} years
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Comparison Table */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Detailed Method Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Method</th>
                      <th className="text-center p-2">Score</th>
                      <th className="text-center p-2">Monthly Cost</th>
                      <th className="text-center p-2">Total Cost</th>
                      <th className="text-center p-2">Processing</th>
                      <th className="text-center p-2">Tracking</th>
                      <th className="text-center p-2">Security</th>
                      <th className="text-center p-2">Court Accept</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.methods.map((method, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            {method.icon}
                            <span className="font-medium">{method.name}</span>
                            {method.recommended && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                Recommended
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="text-center p-2">
                          <span className={`font-semibold ${
                            method.score >= 80 ? 'text-green-600' : 
                            method.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {method.score}
                          </span>
                        </td>
                        <td className="text-center p-2">${method.monthlyFee.toFixed(2)}</td>
                        <td className="text-center p-2">${method.totalCost.toFixed(2)}</td>
                        <td className="text-center p-2">{method.processingDays} days</td>
                        <td className="text-center p-2">
                          <span className={getRatingColor(method.trackability)}>
                            {method.trackability}
                          </span>
                        </td>
                        <td className="text-center p-2">
                          <span className={getRatingColor(method.security)}>
                            {method.security}
                          </span>
                        </td>
                        <td className="text-center p-2">{method.courtAcceptance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Method Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {result.methods.slice(0, 4).map((method, index) => (
              <Card key={index} className={method.recommended ? 'border-green-200 bg-green-50' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {method.icon}
                      <div>
                        <h3 className="font-semibold">{method.name}</h3>
                        <p className="text-sm text-gray-600">Score: {method.score}/100</p>
                      </div>
                    </div>
                    {method.recommended && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">Monthly Cost:</span>
                      <span className="ml-2 font-medium">${method.monthlyFee.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Processing:</span>
                      <span className="ml-2 font-medium">{method.processingDays} days</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Proof:</span>
                      <span className="ml-2 font-medium">{method.proofOfPayment}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Modify:</span>
                      <span className="ml-2 font-medium">{method.modificationEase}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-1">Pros:</h4>
                      <ul className="text-xs space-y-1">
                        {method.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-red-700 mb-1">Cons:</h4>
                      <ul className="text-xs space-y-1">
                        {method.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommendations and Warnings */}
          <div className="grid md:grid-cols-2 gap-6">
            {result.recommendations.length > 0 && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Recommendations
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {result.warnings.length > 0 && (
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    Important Considerations
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
          </div>
        </>
      )}
    </div>
  );
}