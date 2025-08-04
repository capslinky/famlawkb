import Link from 'next/link';
import { ArrowLeft, CheckCircle, FileText, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Uncontested Divorce Without Children - Arizona',
  description: 'Guide to filing an uncontested divorce without children in Arizona. Simplified process for mutual agreement.',
};

export default function UncontestedSimplePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/getting-divorced" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Divorce Overview
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Uncontested Divorce Without Children</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">You May Qualify for Simplified Process</h2>
                <p className="text-gray-700">
                  Since you and your spouse agree on all terms and have no minor children, 
                  you can use Arizona&apos;s simplified divorce process.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 60-day waiting period</li>
                  <li>• Total time: 2-4 months typical</li>
                  <li>• No court appearance may be required</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Filing fee: ~$350</li>
                  <li>• Can request fee waiver if eligible</li>
                  <li>• No attorney required (but recommended)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>One spouse has lived in Arizona for at least 90 days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Both agree the marriage is &quot;irretrievably broken&quot;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>No minor children together (under 18)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Wife is not pregnant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Agreement on all property and debt division</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <GlossaryContent>
                        No request for spousal maintenance or agreement reached
                      </GlossaryContent>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Prepare Documents</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• <GlossaryContent>Petition for Dissolution of Marriage</GlossaryContent></li>
                          <li>• Summons</li>
                          <li>• Preliminary Injunction</li>
                          <li>• Notice of Right to Convert Health Insurance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">File with Court</h3>
                        <p className="text-gray-600">
                          File at Superior Court in your county. Pay filing fee or submit fee waiver application.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Serve Your Spouse</h3>
                        <p className="text-gray-600">
                          If uncontested, spouse can sign Acceptance of Service. Otherwise, use process server.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Complete Financial Disclosures</h3>
                        <p className="text-gray-600">
                          Exchange Affidavit of Financial Information within 40 days.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Draft Consent Decree</h3>
                        <p className="text-gray-600">
                          Create agreement covering all property, debts, and any other issues. Both sign.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        6
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Submit Final Documents</h3>
                        <p className="text-gray-600">
                          After 60-day waiting period, submit <GlossaryContent>Decree</GlossaryContent> for judge&apos;s signature.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Before You File</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Make sure you have all financial records</li>
                      <li>• Consider tax implications of property division</li>
                      <li>• Update beneficiaries on insurance and accounts</li>
                      <li>• Even in uncontested cases, consider consulting an attorney</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Next Steps</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/forms/divorce-petition">
                  <Button className="w-full sm:w-auto">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Divorce Forms
                  </Button>
                </Link>
                <Link href="/resources/property-division-worksheet">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Complete Property Worksheet
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}