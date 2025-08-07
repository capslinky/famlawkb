import Link from 'next/link';
import { ArrowLeft, Calculator, Home, TrendingUp, DollarSign, FileText, PieChart, AlertTriangle, CreditCard, Receipt } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SpousalMaintenanceCalculator from '@/components/calculators/SpousalMaintenanceCalculator';
import PropertyDivisionAnalyzer from '@/components/calculators/PropertyDivisionAnalyzer';
import ModificationPredictor from '@/components/calculators/ModificationPredictor';
import TaxImpactCalculator from '@/components/calculators/TaxImpactCalculator';
import ArrearsCalculator from '@/components/calculators/ArrearsCalculator';
import PaymentMethodComparator from '@/components/calculators/PaymentMethodComparator';

export const metadata = {
  title: 'Financial Calculators - Arizona Family Law',
  description: 'Advanced financial calculators for Arizona family law including spousal maintenance, property division, tax impact, arrears, and payment method comparison.',
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Financial Calculators Suite</h1>
              <p className="text-green-100 mt-1">Complete set of financial planning tools for family law</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
            >
              <FileText className="w-4 h-4" />
              View All Tools
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Calculator Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">All Financial Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="#spousal-maintenance" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Spousal Maintenance</h3>
                      <p className="text-sm text-gray-600">Calculate alimony</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Estimate spousal maintenance amounts and duration based on Arizona guidelines
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#property-division" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Property Division</h3>
                      <p className="text-sm text-gray-600">Analyze assets</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Analyze community property division with equitable distribution factors
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#modification-predictor" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Modification Predictor</h3>
                      <p className="text-sm text-gray-600">Success likelihood</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Predict the likelihood of successfully modifying court orders
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#tax-impact" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Receipt className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Tax Impact</h3>
                      <p className="text-sm text-gray-600">Divorce tax analysis</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Compare tax implications before and after divorce
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#arrears" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Arrears Calculator</h3>
                      <p className="text-sm text-gray-600">Unpaid support</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Calculate accumulated support arrears and interest
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#payment-methods" className="block">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Payment Methods</h3>
                      <p className="text-sm text-gray-600">Compare options</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Compare different support payment methods and costs
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Additional Calculator Links */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-3">Related Financial Tools</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/support/calculator" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <Calculator className="w-4 h-4" />
              Child Support Calculator
            </Link>
            <Link href="/tools#cost-estimator" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <DollarSign className="w-4 h-4" />
              Legal Cost Estimator
            </Link>
            <Link href="/tools#deadline-calculator" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <TrendingUp className="w-4 h-4" />
              Deadline Calculator
            </Link>
          </div>
        </div>

        {/* Spousal Maintenance Calculator */}
        <div id="spousal-maintenance" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Spousal Maintenance Calculator</h2>
            <p className="text-gray-600">
              Calculate estimated spousal maintenance (alimony) based on Arizona statutory factors. 
              This tool considers marriage length, income disparity, and special circumstances.
            </p>
          </div>
          <SpousalMaintenanceCalculator />
        </div>

        <div className="border-t pt-12" />

        {/* Property Division Analyzer */}
        <div id="property-division" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Property Division Analyzer</h2>
            <p className="text-gray-600">
              Analyze the division of community property and debts. Arizona follows community property 
              laws with equitable distribution considerations.
            </p>
          </div>
          <PropertyDivisionAnalyzer />
        </div>

        <div className="border-t pt-12" />

        {/* Modification Predictor */}
        <div id="modification-predictor" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Modification Success Predictor</h2>
            <p className="text-gray-600">
              Evaluate the likelihood of successfully modifying existing court orders for child support, 
              custody, or spousal maintenance based on changed circumstances.
            </p>
          </div>
          <ModificationPredictor />
        </div>

        <div className="border-t pt-12" />

        {/* Tax Impact Calculator */}
        <div id="tax-impact" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Tax Impact Calculator</h2>
            <p className="text-gray-600">
              Compare your tax situation before and after divorce. Understand the impact of filing status changes, 
              support payments, and asset division on your federal taxes.
            </p>
          </div>
          <TaxImpactCalculator />
        </div>

        <div className="border-t pt-12" />

        {/* Arrears Calculator */}
        <div id="arrears" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Support Arrears Calculator</h2>
            <p className="text-gray-600">
              Calculate accumulated unpaid support, interest charges, and potential enforcement actions. 
              Arizona charges 10% annual interest on unpaid support.
            </p>
          </div>
          <ArrearsCalculator />
        </div>

        <div className="border-t pt-12" />

        {/* Payment Method Comparator */}
        <div id="payment-methods" className="mb-12 scroll-mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Payment Method Comparator</h2>
            <p className="text-gray-600">
              Compare different methods for paying support including direct deposit, wage garnishment, 
              state disbursement unit, and other options to find the best method for your situation.
            </p>
          </div>
          <PaymentMethodComparator />
        </div>

        {/* Tax Implications Notice */}
        <Card className="bg-yellow-50 border-yellow-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-yellow-600" />
              Important Tax Considerations
            </h3>
            <div className="space-y-2 text-sm text-yellow-800">
              <p>• Spousal maintenance is NOT tax-deductible for the payor (post-2019 divorces)</p>
              <p>• Spousal maintenance is NOT taxable income for the recipient (post-2019 divorces)</p>
              <p>• Child support is never tax-deductible or taxable income</p>
              <p>• Property transfers incident to divorce are generally tax-free</p>
              <p>• Consult a tax professional for specific advice on your situation</p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> These calculators provide estimates based on general guidelines and formulas. 
            Actual court orders may vary based on specific circumstances and judicial discretion. 
            Always consult with a qualified Arizona family law attorney for legal advice specific to your situation.
          </p>
        </div>
      </div>
    </main>
  );
}
