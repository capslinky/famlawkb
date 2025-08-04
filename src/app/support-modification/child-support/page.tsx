import Link from 'next/link';
import { ArrowLeft, Calculator, TrendingUp, FileText, AlertCircle, Scale, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Child Support Modification - Arizona',
  description: 'How to request a modification of child support in Arizona. Requirements, process, and what changes qualify.',
};

export default function ChildSupportModificationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Child Support Modification</h1>
              <p className="text-green-100">Request changes when circumstances change substantially</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/modules/modifications" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Modifications
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Calculator className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-green-900 mb-2">
                  When Can You Modify Child Support?
                </h2>
                <p className="text-green-800 mb-3">
                  Arizona law allows modification when there's a substantial and continuing change 
                  in circumstances.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold mb-2">Key Requirements:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Change would result in 15% or more difference in support amount</li>
                    <li>• Change is not temporary or short-term</li>
                    <li>• At least 12 months since last order (with exceptions)</li>
                    <li>• Based on current Arizona Child Support Guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Qualifying Changes in Circumstances</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Income Changes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Job loss or unemployment</li>
                    <li>• Significant salary increase/decrease</li>
                    <li>• Change in employment status</li>
                    <li>• Disability affecting earnings</li>
                    <li>• Retirement (if appropriate age)</li>
                    <li>• New employment benefits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Parenting Time Changes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Substantial change in custody</li>
                    <li>• Increased/decreased parenting time</li>
                    <li>• Child spending more nights with other parent</li>
                    <li>• Relocation affecting time-sharing</li>
                    <li>• Teen choosing different residence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Child-Related Changes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Child's medical needs change</li>
                    <li>• Special education requirements</li>
                    <li>• Childcare costs change significantly</li>
                    <li>• Health insurance changes</li>
                    <li>• Child becomes self-supporting</li>
                    <li>• Child turns 18 (still in high school)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <Scale className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Other Factors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• New child from another relationship</li>
                    <li>• Spousal support ends/begins</li>
                    <li>• Cost of living adjustments</li>
                    <li>• Tax law changes</li>
                    <li>• Military deployment</li>
                    <li>• Incarceration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">The Modification Process</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Calculate Potential New Amount</h3>
                      <p className="text-gray-700 mb-3">
                        Before filing, determine if change meets 15% threshold:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use Arizona Child Support Calculator</li>
                        <li>• Gather current income information</li>
                        <li>• Include all required factors</li>
                        <li>• Compare to current order amount</li>
                      </ul>
                      <div className="mt-3">
                        <Link href="https://www.azcourts.gov/familylaw/Child-Support-Calculator">
                          <Button variant="outline" size="sm">
                            <Calculator className="w-4 h-4 mr-2" />
                            Official Calculator
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">File Petition to Modify</h3>
                      <p className="text-gray-700 mb-3">
                        Submit required documents to court:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Petition to Modify Child Support</li>
                        <li>• Child Support Worksheet</li>
                        <li>• Affidavit of Financial Information</li>
                        <li>• Proof of changed circumstances</li>
                        <li>• Pay filing fee or request waiver</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Serve Other Parent</h3>
                      <p className="text-gray-700 mb-3">
                        Legal service required within 120 days:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use process server or sheriff</li>
                        <li>• Cannot serve them yourself</li>
                        <li>• They have 20 days to respond</li>
                        <li>• File proof of service with court</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Attend Hearing or Settlement</h3>
                      <p className="text-gray-700 mb-3">
                        Resolution through agreement or trial:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Try mediation first if available</li>
                        <li>• Bring financial documentation</li>
                        <li>• Present evidence of changes</li>
                        <li>• Judge decides based on guidelines</li>
                        <li>• New order takes effect on filing date</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modification is NOT retroactive - file as soon as circumstances change</li>
                  <li>• Continue paying current amount until new order is signed</li>
                  <li>• Both increases and decreases use same standards</li>
                  <li>• Voluntary unemployment/underemployment may not qualify</li>
                  <li>• Criminal conviction doesn't automatically reduce support</li>
                  <li>• Past due support (arrears) cannot be modified or forgiven</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Timeline Expectations</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto">
                      0
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">File Petition</h4>
                    <p className="text-sm text-gray-600">Submit all required documents and pay fees</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mx-auto">
                      30
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Service Complete</h4>
                    <p className="text-sm text-gray-600">Other parent served and response deadline passes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto">
                      60
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Discovery/Negotiation</h4>
                    <p className="text-sm text-gray-600">Exchange financial information, attempt settlement</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 text-center">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mx-auto">
                      90+
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Final Order</h4>
                    <p className="text-sm text-gray-600">Hearing held or agreement approved, new order entered</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Required Documentation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Financial Documents:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Last 3 months pay stubs</li>
                  <li>✓ Most recent tax return</li>
                  <li>✓ Proof of other income</li>
                  <li>✓ Health insurance costs</li>
                  <li>✓ Childcare receipts</li>
                  <li>✓ Extraordinary expenses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supporting Evidence:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Medical documentation</li>
                  <li>✓ Termination letter</li>
                  <li>✓ Court orders (custody)</li>
                  <li>✓ School enrollment</li>
                  <li>✓ Special needs documentation</li>
                  <li>✓ Parenting time records</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms/petition-modify-child-support">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Modification Forms
                </Button>
              </Link>
              <Link href="/resources/child-support-calculator">
                <Button variant="outline" className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate New Amount
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline" className="w-full">
                  Find Legal Help
                </Button>
              </Link>
              <Link href="/support-modification/spousal-support">
                <Button variant="outline" className="w-full">
                  Spousal Support Modification
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}