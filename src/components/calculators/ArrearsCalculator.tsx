'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, TrendingUp, AlertTriangle, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Payment {
  date: string;
  amountDue: number;
  amountPaid: number;
  note?: string;
}

interface ArrearsInputs {
  supportType: 'child' | 'spousal' | 'both';
  monthlyChildSupport: string;
  monthlySpousalSupport: string;
  startDate: string;
  currentDate: string;
  interestRate: string;
  payments: Payment[];
  
  // Enforcement Options
  wageGarnishment: boolean;
  taxRefundIntercept: boolean;
  licenseSuspension: boolean;
  contemptOfCourt: boolean;
  
  // Additional Factors
  unemploymentPeriods: { start: string; end: string }[];
  modificationRequests: { date: string; newAmount: string; approved: boolean }[];
}

interface ArrearsResult {
  totalOriginalOwed: number;
  totalPaid: number;
  principalArrears: number;
  interestAccrued: number;
  totalArrears: number;
  monthsBehind: number;
  oldestUnpaidMonth: string;
  
  // Breakdown by type
  childSupportArrears: number;
  spousalSupportArrears: number;
  
  // Payment Analysis
  paymentRate: number;
  averageMonthlyShortfall: number;
  projectedPayoffMonths: number;
  
  // Interest Details
  monthlyInterestAccrual: number;
  yearlyInterestAccrual: number;
  
  // Enforcement Thresholds
  eligibleForContempt: boolean;
  eligibleForLicenseSuspension: boolean;
  eligibleForTaxIntercept: boolean;
  eligibleForCriminalCharges: boolean;
  
  // Payment Plan Options
  minimumMonthlyPayment: number;
  catchUpPayment3Months: number;
  catchUpPayment6Months: number;
  catchUpPayment12Months: number;
  
  // Legal Consequences
  consequences: string[];
  recommendations: string[];
}

export default function ArrearsCalculator() {
  const [inputs, setInputs] = useState<ArrearsInputs>({
    supportType: 'child',
    monthlyChildSupport: '',
    monthlySpousalSupport: '',
    startDate: '',
    currentDate: new Date().toISOString().split('T')[0],
    interestRate: '10', // Arizona default
    payments: [],
    wageGarnishment: false,
    taxRefundIntercept: false,
    licenseSuspension: false,
    contemptOfCourt: false,
    unemploymentPeriods: [],
    modificationRequests: []
  });

  const [result, setResult] = useState<ArrearsResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);

  const handleInputChange = (field: keyof ArrearsInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addPayment = () => {
    const newPayment: Payment = {
      date: new Date().toISOString().split('T')[0],
      amountDue: 0,
      amountPaid: 0,
      note: ''
    };
    handleInputChange('payments', [...inputs.payments, newPayment]);
  };

  const updatePayment = (index: number, field: keyof Payment, value: any) => {
    const updatedPayments = [...inputs.payments];
    updatedPayments[index] = {
      ...updatedPayments[index],
      [field]: value
    };
    handleInputChange('payments', updatedPayments);
  };

  const removePayment = (index: number) => {
    const updatedPayments = inputs.payments.filter((_, i) => i !== index);
    handleInputChange('payments', updatedPayments);
  };

  const calculateMonthsBetween = (start: Date, end: Date): number => {
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                  (end.getMonth() - start.getMonth());
    return Math.max(0, months);
  };

  const calculateArrears = (): ArrearsResult => {
    const monthlyChild = parseFloat(inputs.monthlyChildSupport) || 0;
    const monthlySpousal = parseFloat(inputs.monthlySpousalSupport) || 0;
    const monthlyTotal = monthlyChild + monthlySpousal;
    const interestRate = parseFloat(inputs.interestRate) / 100 / 12; // Monthly interest rate
    
    const startDate = new Date(inputs.startDate);
    const currentDate = new Date(inputs.currentDate);
    const totalMonths = calculateMonthsBetween(startDate, currentDate);
    
    // Calculate total owed
    const totalOriginalOwed = monthlyTotal * totalMonths;
    
    // Calculate total paid from payment history
    const totalPaid = inputs.payments.reduce((sum, payment) => sum + (payment.amountPaid || 0), 0);
    
    // Principal arrears
    const principalArrears = Math.max(0, totalOriginalOwed - totalPaid);
    
    // Calculate interest (compound monthly)
    let runningBalance = 0;
    let totalInterest = 0;
    let currentBalance = 0;
    
    for (let month = 0; month < totalMonths; month++) {
      // Add monthly obligation
      runningBalance += monthlyTotal;
      
      // Subtract any payments made in this month
      const monthDate = new Date(startDate);
      monthDate.setMonth(startDate.getMonth() + month);
      const monthPayments = inputs.payments
        .filter(p => {
          const payDate = new Date(p.date);
          return payDate.getFullYear() === monthDate.getFullYear() && 
                 payDate.getMonth() === monthDate.getMonth();
        })
        .reduce((sum, p) => sum + (p.amountPaid || 0), 0);
      
      runningBalance -= monthPayments;
      
      // Add interest on unpaid balance
      if (runningBalance > 0) {
        const monthlyInterest = runningBalance * interestRate;
        totalInterest += monthlyInterest;
        runningBalance += monthlyInterest;
      }
      
      currentBalance = runningBalance;
    }
    
    // Calculate months behind
    const monthsBehind = Math.floor(principalArrears / monthlyTotal);
    
    // Find oldest unpaid month
    let oldestUnpaidMonth = '';
    if (monthsBehind > 0) {
      const oldestDate = new Date(currentDate);
      oldestDate.setMonth(currentDate.getMonth() - monthsBehind);
      oldestUnpaidMonth = oldestDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    
    // Calculate payment rate
    const paymentRate = totalOriginalOwed > 0 ? (totalPaid / totalOriginalOwed) * 100 : 0;
    
    // Average monthly shortfall
    const averageMonthlyShortfall = totalMonths > 0 ? principalArrears / totalMonths : 0;
    
    // Interest accruals
    const monthlyInterestAccrual = currentBalance * interestRate;
    const yearlyInterestAccrual = monthlyInterestAccrual * 12;
    
    // Projected payoff (assuming current payment pattern continues)
    const recentPaymentAvg = inputs.payments.slice(-6).reduce((sum, p) => sum + (p.amountPaid || 0), 0) / 6;
    const projectedPayoffMonths = recentPaymentAvg > monthlyInterestAccrual 
      ? Math.ceil(currentBalance / (recentPaymentAvg - monthlyInterestAccrual))
      : 999; // Won't pay off at current rate
    
    // Enforcement eligibility (Arizona thresholds)
    const eligibleForContempt = principalArrears > monthlyTotal * 2; // 2+ months behind
    const eligibleForLicenseSuspension = principalArrears > monthlyTotal * 6; // 6+ months behind
    const eligibleForTaxIntercept = principalArrears > 150; // Federal threshold
    const eligibleForCriminalCharges = principalArrears > monthlyTotal * 12; // 12+ months can be criminal
    
    // Payment plan options
    const minimumMonthlyPayment = monthlyTotal + (currentBalance * 0.01); // Current + 1% of arrears
    const catchUpPayment3Months = monthlyTotal + (currentBalance / 3);
    const catchUpPayment6Months = monthlyTotal + (currentBalance / 6);
    const catchUpPayment12Months = monthlyTotal + (currentBalance / 12);
    
    // Consequences and recommendations
    const consequences: string[] = [];
    const recommendations: string[] = [];
    
    if (eligibleForContempt) {
      consequences.push('Eligible for contempt of court proceedings');
    }
    if (eligibleForLicenseSuspension) {
      consequences.push('Driver\'s and professional licenses may be suspended');
    }
    if (eligibleForTaxIntercept) {
      consequences.push('Tax refunds can be intercepted');
    }
    if (eligibleForCriminalCharges) {
      consequences.push('May face criminal non-support charges (Class 6 felony in Arizona)');
    }
    if (principalArrears > monthlyTotal * 3) {
      consequences.push('Credit report will be negatively impacted');
    }
    if (currentBalance > 5000) {
      consequences.push('Property liens may be placed');
    }
    
    if (principalArrears > 0) {
      recommendations.push('Contact the court immediately to discuss payment arrangements');
    }
    if (averageMonthlyShortfall > 0) {
      recommendations.push('File for modification if circumstances have changed substantially');
    }
    if (totalInterest > 1000) {
      recommendations.push('Consider negotiating a lump sum settlement to reduce interest');
    }
    if (inputs.unemploymentPeriods.length > 0) {
      recommendations.push('Document unemployment periods for potential retroactive modification');
    }
    recommendations.push('Keep detailed records of all payments made');
    
    return {
      totalOriginalOwed,
      totalPaid,
      principalArrears,
      interestAccrued: totalInterest,
      totalArrears: currentBalance,
      monthsBehind,
      oldestUnpaidMonth,
      
      childSupportArrears: inputs.supportType !== 'spousal' ? (principalArrears * monthlyChild / monthlyTotal) : 0,
      spousalSupportArrears: inputs.supportType !== 'child' ? (principalArrears * monthlySpousal / monthlyTotal) : 0,
      
      paymentRate,
      averageMonthlyShortfall,
      projectedPayoffMonths,
      
      monthlyInterestAccrual,
      yearlyInterestAccrual,
      
      eligibleForContempt,
      eligibleForLicenseSuspension,
      eligibleForTaxIntercept,
      eligibleForCriminalCharges,
      
      minimumMonthlyPayment,
      catchUpPayment3Months,
      catchUpPayment6Months,
      catchUpPayment12Months,
      
      consequences,
      recommendations
    };
  };

  const handleCalculate = () => {
    if (!inputs.startDate || !inputs.monthlyChildSupport && !inputs.monthlySpousalSupport) {
      alert('Please enter support amount and start date');
      return;
    }
    
    const calculation = calculateArrears();
    setResult(calculation);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs({
      supportType: 'child',
      monthlyChildSupport: '',
      monthlySpousalSupport: '',
      startDate: '',
      currentDate: new Date().toISOString().split('T')[0],
      interestRate: '10',
      payments: [],
      wageGarnishment: false,
      taxRefundIntercept: false,
      licenseSuspension: false,
      contemptOfCourt: false,
      unemploymentPeriods: [],
      modificationRequests: []
    });
    setResult(null);
    setShowResults(false);
    setShowPaymentHistory(false);
  };

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold">Support Arrears Calculator</h2>
          </div>
          
          {/* Support Details */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Support Obligation</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Support Type
                </label>
                <select
                  value={inputs.supportType}
                  onChange={(e) => handleInputChange('supportType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="child">Child Support Only</option>
                  <option value="spousal">Spousal Support Only</option>
                  <option value="both">Both Child and Spousal</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interest Rate (Annual %)
                </label>
                <input
                  type="number"
                  value={inputs.interestRate}
                  onChange={(e) => handleInputChange('interestRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="10"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 mt-1">Arizona default is 10% annually</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {(inputs.supportType === 'child' || inputs.supportType === 'both') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Child Support Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.monthlyChildSupport}
                      onChange={(e) => handleInputChange('monthlyChildSupport', e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="1500"
                    />
                  </div>
                </div>
              )}
              
              {(inputs.supportType === 'spousal' || inputs.supportType === 'both') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Spousal Support Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="number"
                      value={inputs.monthlySpousalSupport}
                      onChange={(e) => handleInputChange('monthlySpousalSupport', e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="800"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Date Range */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Time Period</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Support Start Date
                </label>
                <input
                  type="date"
                  value={inputs.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Calculate Through Date
                </label>
                <input
                  type="date"
                  value={inputs.currentDate}
                  onChange={(e) => handleInputChange('currentDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Payment History (Optional)</h3>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => setShowPaymentHistory(!showPaymentHistory)}
              >
                {showPaymentHistory ? 'Hide' : 'Show'} Payment Entry
              </Button>
            </div>
            
            {showPaymentHistory && (
              <div className="space-y-3">
                {inputs.payments.map((payment, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 items-end">
                    <div>
                      <label className="block text-xs text-gray-600">Date</label>
                      <input
                        type="date"
                        value={payment.date}
                        onChange={(e) => updatePayment(index, 'date', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600">Amount Due</label>
                      <input
                        type="number"
                        value={payment.amountDue}
                        onChange={(e) => updatePayment(index, 'amountDue', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600">Amount Paid</label>
                      <input
                        type="number"
                        value={payment.amountPaid}
                        onChange={(e) => updatePayment(index, 'amountPaid', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                        placeholder="0"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removePayment(index)}
                      className="text-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addPayment}>
                  Add Payment Record
                </Button>
              </div>
            )}
            
            {!showPaymentHistory && inputs.payments.length > 0 && (
              <p className="text-sm text-gray-600">
                {inputs.payments.length} payment records entered
              </p>
            )}
          </div>

          {/* Enforcement Actions */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Current Enforcement Actions</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.wageGarnishment}
                  onChange={(e) => handleInputChange('wageGarnishment', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Wage Garnishment Active</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.taxRefundIntercept}
                  onChange={(e) => handleInputChange('taxRefundIntercept', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Tax Refund Intercept</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.licenseSuspension}
                  onChange={(e) => handleInputChange('licenseSuspension', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">License Suspension</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inputs.contemptOfCourt}
                  onChange={(e) => handleInputChange('contemptOfCourt', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Contempt Proceedings</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleCalculate}
              className="flex-1 md:flex-none md:px-8"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Arrears
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
          {/* Arrears Summary */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Arrears Summary
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Total Owed</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Original Amount:</span>
                      <span className="font-medium">${result.totalOriginalOwed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount Paid:</span>
                      <span className="font-medium text-green-600">-${result.totalPaid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Principal Arrears:</span>
                      <span className="font-medium text-red-600">${result.principalArrears.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Interest Accrued:</span>
                      <span className="font-medium text-red-600">${result.interestAccrued.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total Arrears:</span>
                      <span className="text-red-600">${result.totalArrears.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Payment Status</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Months Behind:</span>
                      <span className="font-medium text-red-600">{result.monthsBehind} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Rate:</span>
                      <span className="font-medium">{result.paymentRate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Shortfall:</span>
                      <span className="font-medium">${result.averageMonthlyShortfall.toFixed(2)}</span>
                    </div>
                    {result.oldestUnpaidMonth && (
                      <div className="flex justify-between">
                        <span>Oldest Unpaid:</span>
                        <span className="font-medium text-xs">{result.oldestUnpaidMonth}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-2">
                      <span>Payoff Time:</span>
                      <span className="font-medium">
                        {result.projectedPayoffMonths < 999 
                          ? `${result.projectedPayoffMonths} months`
                          : 'Never at current rate'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Interest Impact</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Monthly Interest</div>
                      <div className="text-xl font-bold text-red-600">
                        ${result.monthlyInterestAccrual.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Yearly Interest</div>
                      <div className="text-xl font-bold text-red-600">
                        ${result.yearlyInterestAccrual.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3">Payment Plan Options</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Minimum Payment</div>
                    <div className="font-semibold">${result.minimumMonthlyPayment.toFixed(2)}/mo</div>
                    <div className="text-xs text-gray-500">Current + 1% arrears</div>
                  </div>
                  <div>
                    <div className="text-gray-600">3-Month Catch-up</div>
                    <div className="font-semibold">${result.catchUpPayment3Months.toFixed(2)}/mo</div>
                    <div className="text-xs text-gray-500">Pay off in 3 months</div>
                  </div>
                  <div>
                    <div className="text-gray-600">6-Month Catch-up</div>
                    <div className="font-semibold">${result.catchUpPayment6Months.toFixed(2)}/mo</div>
                    <div className="text-xs text-gray-500">Pay off in 6 months</div>
                  </div>
                  <div>
                    <div className="text-gray-600">12-Month Catch-up</div>
                    <div className="font-semibold">${result.catchUpPayment12Months.toFixed(2)}/mo</div>
                    <div className="text-xs text-gray-500">Pay off in 1 year</div>
                  </div>
                </div>
              </div>

              {/* Enforcement Status */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-3">Enforcement Eligibility</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${result.eligibleForContempt ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span>Contempt of Court {result.eligibleForContempt && '(Eligible)'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${result.eligibleForLicenseSuspension ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span>License Suspension {result.eligibleForLicenseSuspension && '(Eligible)'}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${result.eligibleForTaxIntercept ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span>Tax Refund Intercept {result.eligibleForTaxIntercept && '(Eligible)'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${result.eligibleForCriminalCharges ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span>Criminal Charges {result.eligibleForCriminalCharges && '(Possible)'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consequences and Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            {result.consequences.length > 0 && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Legal Consequences
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.consequences.map((consequence, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        <span>{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {result.recommendations.length > 0 && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Recommendations
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>{recommendation}</span>
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