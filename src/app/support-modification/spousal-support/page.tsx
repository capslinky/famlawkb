import Link from 'next/link';
import { ArrowLeft, Users, Clock, TrendingDown, FileText, AlertCircle, Scale, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Spousal Support Modification - Arizona',
  description: 'How to modify spousal maintenance (alimony) in Arizona. Understand when changes are allowed and the modification process.',
};

export default function SpousalSupportModificationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Spousal Support Modification</h1>
              <p className="text-indigo-100">Modify maintenance when circumstances substantially change</p>
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
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-indigo-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-indigo-900 mb-2">
                  Understanding Spousal Support Modification
                </h2>
                <p className="text-indigo-800 mb-3">
                  Unlike child support, spousal maintenance modification depends heavily on your 
                  specific divorce decree language.
                </p>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <h3 className="font-semibold mb-2">Check Your Decree First:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Some orders are "non-modifiable" by agreement</li>
                    <li>• Others may limit modification circumstances</li>
                    <li>• Duration and amount may have different rules</li>
                    <li>• Review exact language with an attorney</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Types of Spousal Support Orders</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Modifiable Support</h3>
                  <p className="text-gray-700 mb-3">
                    Standard orders that can be changed upon substantial change in circumstances:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Court can modify amount and/or duration</li>
                    <li>• Must show substantial and continuing change</li>
                    <li>• Changes weren't contemplated at divorce</li>
                    <li>• Burden on party seeking modification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-900">Non-Modifiable Support</h3>
                  <p className="text-gray-700 mb-3">
                    Orders with specific non-modification language:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Parties agreed to no future modifications</li>
                    <li>• Often in exchange for other benefits</li>
                    <li>• Court cannot change even if circumstances change</li>
                    <li>• Very limited exceptions (fraud, coercion)</li>
                  </ul>
                  <div className="bg-red-50 rounded-lg p-3 mt-3">
                    <p className="text-sm text-red-800 font-semibold">
                      If your decree says "non-modifiable," consult an attorney before proceeding
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Qualifying Changes for Modification</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-indigo-300">
                <CardContent className="p-6">
                  <TrendingDown className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Payor's Circumstances</h3>
                  <h4 className="font-semibold text-sm mb-2 text-indigo-700">May Decrease Support:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm mb-3">
                    <li>• Job loss (not voluntary)</li>
                    <li>• Disability or illness</li>
                    <li>• Actual retirement</li>
                    <li>• Significant income decrease</li>
                  </ul>
                  <h4 className="font-semibold text-sm mb-2 text-orange-700">Won't Decrease Support:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Voluntary unemployment</li>
                    <li>• Early retirement</li>
                    <li>• Criminal incarceration</li>
                    <li>• New family obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-300">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Recipient's Circumstances</h3>
                  <h4 className="font-semibold text-sm mb-2 text-purple-700">May Reduce/Terminate:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm mb-3">
                    <li>• Remarriage (usually terminates)</li>
                    <li>• Cohabitation with partner</li>
                    <li>• Significant income increase</li>
                    <li>• Achieved self-sufficiency</li>
                  </ul>
                  <h4 className="font-semibold text-sm mb-2 text-green-700">May Increase Support:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Medical conditions</li>
                    <li>• Inability to work</li>
                    <li>• Failed to become self-sufficient</li>
                    <li>• Cost of living increases</li>
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
                      <h3 className="font-bold text-lg mb-2">Review Your Decree</h3>
                      <p className="text-gray-700 mb-3">
                        Critical first step before proceeding:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Find spousal maintenance section</li>
                        <li>• Check for "non-modifiable" language</li>
                        <li>• Review termination conditions</li>
                        <li>• Understand current obligations</li>
                        <li>• Consult attorney if unclear</li>
                      </ul>
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
                      <h3 className="font-bold text-lg mb-2">Gather Evidence</h3>
                      <p className="text-gray-700 mb-3">
                        Document the substantial change:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-sm mb-2">Financial Changes:</p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Income documentation</li>
                            <li>• Medical bills/records</li>
                            <li>• Termination letters</li>
                            <li>• Retirement accounts</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-2">Life Changes:</p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Marriage certificate</li>
                            <li>• Cohabitation proof</li>
                            <li>• Medical diagnosis</li>
                            <li>• Job search efforts</li>
                          </ul>
                        </div>
                      </div>
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
                      <h3 className="font-bold text-lg mb-2">File Petition</h3>
                      <p className="text-gray-700 mb-3">
                        Submit modification request to court:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Petition to Modify Spousal Maintenance</li>
                        <li>• Affidavit of Financial Information</li>
                        <li>• Supporting documentation</li>
                        <li>• Proposed modified order</li>
                        <li>• File in same court as divorce</li>
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
                      <h3 className="font-bold text-lg mb-2">Court Process</h3>
                      <p className="text-gray-700 mb-3">
                        Resolution through hearing or agreement:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Serve other party within 120 days</li>
                        <li>• Exchange financial disclosures</li>
                        <li>• Attempt settlement conference</li>
                        <li>• Trial if no agreement</li>
                        <li>• Judge decides based on evidence</li>
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
                <h3 className="font-semibold mb-2">Critical Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modification only affects future payments - no retroactive changes</li>
                  <li>• Past due amounts (arrears) cannot be modified or forgiven</li>
                  <li>• Continue paying current amount until court orders otherwise</li>
                  <li>• Remarriage typically terminates support automatically</li>
                  <li>• Cohabitation may require proving financial interdependence</li>
                  <li>• Tax implications may change with modification</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Special Circumstances</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Termination Events</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Support typically ends upon:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Death of either party</li>
                    <li>• Remarriage of recipient</li>
                    <li>• Date specified in decree</li>
                    <li>• Court-ordered termination</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-3">Timing Matters</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    File modification when:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Change is permanent</li>
                    <li>• Not just temporary setback</li>
                    <li>• Before support ends</li>
                    <li>• As soon as change occurs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Evidence Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">For Decrease/Termination:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Income reduction proof</li>
                  <li>✓ Medical disability documentation</li>
                  <li>✓ Retirement account statements</li>
                  <li>✓ Job search records</li>
                  <li>✓ Recipient's new marriage/partner</li>
                  <li>✓ Recipient's increased income</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Increase/Extension:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Failed self-sufficiency efforts</li>
                  <li>✓ Medical conditions developed</li>
                  <li>✓ Payor's increased income</li>
                  <li>✓ Cost of living documentation</li>
                  <li>✓ Job market analysis</li>
                  <li>✓ Education/training attempts</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms/petition-modify-spousal-maintenance">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Modification Forms
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline" className="w-full">
                  Find an Attorney
                </Button>
              </Link>
              <Link href="/support-modification/child-support">
                <Button variant="outline" className="w-full">
                  Child Support Modification
                </Button>
              </Link>
              <Link href="/resources/financial-affidavit-guide">
                <Button variant="outline" className="w-full">
                  Financial Affidavit Help
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-8 p-4 bg-indigo-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Spousal support modification is complex. The specific language in your 
              decree matters. Consider consulting an attorney before proceeding.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}