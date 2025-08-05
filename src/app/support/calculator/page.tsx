import Link from 'next/link';
import { ArrowLeft, Calculator, Info, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ChildSupportCalculator from '@/components/calculators/ChildSupportCalculator';

export const metadata = {
  title: 'Child Support Calculator - Arizona Income Shares Model',
  description: 'Interactive child support calculator for Arizona. Calculate estimated support payments based on Arizona Income Shares Model guidelines with parenting time adjustments.',
  keywords: 'Arizona child support calculator, income shares model, child support guidelines, parenting time, support calculation'
};

export default function ChildSupportCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Child Support Calculator</h1>
              <p className="text-blue-100">Arizona Income Shares Model - Interactive Calculator</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Important Disclaimers */}
          <Card className="mb-8 border-2 border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-amber-900 mb-3">Important Information</h2>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
                    <div>
                      <h3 className="font-semibold mb-2">This Calculator Provides:</h3>
                      <ul className="space-y-1">
                        <li>• Estimates based on Arizona Income Shares Model</li>
                        <li>• Simplified calculation for educational purposes</li>
                        <li>• Approximate monthly support amounts</li>
                        <li>• Parenting time adjustment factors</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Remember:</h3>
                      <ul className="space-y-1">
                        <li>• Court orders may differ from these estimates</li>
                        <li>• Judges can deviate based on circumstances</li>
                        <li>• Professional legal advice is recommended</li>
                        <li>• All support must be court-approved to be binding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Calculator */}
          <ChildSupportCalculator />

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Arizona Guidelines</h3>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    Arizona uses the Income Shares Model, which assumes that children should receive the same proportion of parental income they would have received if the parents lived together.
                  </p>
                  <p>
                    The guidelines were last updated in 2022 and are based on economic studies of child-rearing costs.
                  </p>
                  <p>
                    Courts may deviate from guidelines when it would be inappropriate or unjust to apply them.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Next Steps</h3>
                </div>
                <div className="space-y-3">
                  <Link href="/topics/child-support" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Complete Child Support Guide</div>
                    <div className="text-sm text-gray-600">Comprehensive information about Arizona child support</div>
                  </Link>
                  <Link href="/modules/disclosures" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Financial Disclosures</div>
                    <div className="text-sm text-gray-600">Required financial information exchange</div>
                  </Link>
                  <Link href="/support-modification/child-support" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Modify Child Support</div>
                    <div className="text-sm text-gray-600">How to change existing support orders</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Official Resources */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Official Arizona Resources</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Arizona Courts</h4>
                  <p className="text-gray-600 mb-2">Official child support worksheets and guidelines</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Official Worksheet
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legal Aid</h4>
                  <p className="text-gray-600 mb-2">Free legal assistance for qualifying individuals</p>
                  <Link href="/resources/legal-representation">
                    <Button variant="outline" size="sm" className="w-full">
                      Find Legal Help
                    </Button>
                  </Link>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Self-Help Centers</h4>
                  <p className="text-gray-600 mb-2">Court assistance for self-represented parties</p>
                  <Link href="/resources/self-representation-guide">
                    <Button variant="outline" size="sm" className="w-full">
                      Self-Help Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}