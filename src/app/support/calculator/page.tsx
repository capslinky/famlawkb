import Link from 'next/link';
import { ArrowLeft, Calculator, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Child Support Calculator - Arizona',
  description: 'Calculate estimated child support payments based on Arizona guidelines.',
};

export default function ChildSupportCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Child Support Calculator</h1>
            <p className="text-lg text-gray-600">
              Estimate child support payments based on Arizona guidelines
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-6">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="mb-2">
                    This calculator provides estimates only. Actual support amounts are determined by the court
                    and may vary based on specific circumstances.
                  </p>
                  <p>
                    Arizona uses Income Shares Model guidelines updated in 2022.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
                <h2 className="text-lg font-semibold mb-2">Calculator Coming Soon</h2>
                <p className="text-gray-700 mb-4">
                  We&apos;re building an interactive calculator to help you estimate support payments.
                </p>
                <p className="text-sm text-gray-600">
                  In the meantime, you can download the official worksheet from the Arizona Courts.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Factors Considered</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Both parents&apos; gross incomes</li>
                  <li>• Number of children</li>
                  <li>• Parenting time (days per year)</li>
                  <li>• Health insurance costs</li>
                  <li>• Childcare expenses</li>
                  <li>• Other children&apos;s support obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Gather income documentation</li>
                  <li>2. Calculate parenting time days</li>
                  <li>3. Document childcare costs</li>
                  <li>4. Review health insurance premiums</li>
                  <li>5. Complete official worksheet</li>
                </ol>
                <div className="mt-4">
                  <Link href="/modules/disclosures">
                    <Button variant="outline" className="w-full">
                      Learn About Financial Disclosures
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}