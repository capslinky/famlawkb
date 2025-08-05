/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, CheckCircle, FileText, Clock, DollarSign, AlertCircle, Users, Calculator, Scale, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Uncontested Divorce Without Children - Arizona',
  description: 'Complete guide to filing an uncontested divorce without children in Arizona. Simplified process for mutual agreement cases.',
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
                <h2 className="text-lg font-semibold mb-2">Simplified Divorce Process Available</h2>
                <p className="text-gray-700 mb-3">
                  Since you and your spouse agree on all terms and have no minor children, 
                  you can use Arizona&apos;s streamlined uncontested divorce process.
                </p>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <h3 className="font-medium mb-2">This process is ideal when:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Marriage duration is less than 5 years</li>
                    <li>• Combined assets under $50,000</li>
                    <li>• No real estate owned together</li>
                    <li>• Both parties employed or financially stable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 60-day waiting period</li>
                  <li>• Total time: 2-4 months typical</li>
                  <li>• No court appearance required if agreed</li>
                  <li>• Can be completed entirely on paper</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Filing fee: $349 (varies by county)</li>
                  <li>• Service fee: $75-150 (if needed)</li>
                  <li>• Fee waiver available if qualifying</li>
                  <li>• Total: $350-500 without attorney</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Both parties agree on all terms</li>
                  <li>• No minor children together</li>
                  <li>• Wife not pregnant</li>
                  <li>• 90-day Arizona residency</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Detailed Eligibility Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-green-700">✓ You Qualify If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>One spouse has lived in Arizona for at least 90 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>Both agree the marriage is irretrievably broken</span>
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
                        <span>Complete agreement on property division</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>No spousal maintenance requested (or agreed upon)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-red-700">✗ You DON'T Qualify If:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Any minor children from this marriage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Disagreement on any major issue</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Complex property or significant assets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Business ownership together</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Retirement account disputes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span>Domestic violence concerns</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Complete Step-by-Step Process</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Gather Required Documents</h3>
                        <p className="text-gray-600 mb-3">
                          Before filing, collect all necessary personal and financial documents:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Personal Documents:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Marriage certificate</li>
                                <li>• Driver's licenses or IDs</li>
                                <li>• Social Security cards</li>
                                <li>• Birth certificates</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Financial Documents:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Bank statements (3 months)</li>
                                <li>• Pay stubs or tax returns</li>
                                <li>• Property deeds or lease agreements</li>
                                <li>• Credit card and loan statements</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Complete Court Forms</h3>
                        <p className="text-gray-600 mb-3">
                          Download and complete the required divorce forms:
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Petition for Dissolution of Marriage</strong> - Your request for divorce</li>
                            <li>• <strong>Summons</strong> - Official notice to your spouse</li>
                            <li>• <strong>Preliminary Injunction</strong> - Automatic court orders</li>
                            <li>• <strong>Notice of Right to Convert Health Insurance</strong> - COBRA information</li>
                          </ul>
                          <div className="mt-3">
                            <Link href="/forms/divorce-petition-children">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                <FileText className="w-4 h-4 mr-2" />
                                Get Forms & Instructions
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">File with Superior Court</h3>
                        <p className="text-gray-600 mb-3">
                          Submit your completed forms to the court clerk:
                        </p>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Filing Options:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• In-person at courthouse clerk's office</li>
                              <li>• By mail (check county requirements)</li>
                              <li>• Online filing (if available in your county)</li>
                            </ul>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Filing Fee:</h4>
                            <p className="text-sm text-gray-600">
                              $349 in most counties. Request fee deferral if you cannot afford the fee.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Serve Your Spouse</h3>
                        <p className="text-gray-600 mb-3">
                          Legally notify your spouse about the divorce case:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2 text-green-700">Option 1: Acceptance of Service</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              If your spouse agrees to the divorce, they can sign an Acceptance of Service form.
                            </p>
                            <p className="text-xs text-green-600 font-medium">Recommended for uncontested cases</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2 text-blue-700">Option 2: Process Server</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              Hire a process server or have sheriff's department serve the papers.
                            </p>
                            <p className="text-xs text-blue-600 font-medium">Cost: $75-150</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Exchange Financial Information</h3>
                        <p className="text-gray-600 mb-3">
                          Both parties must complete and exchange financial disclosures within 40 days:
                        </p>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Required Form:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• <strong>Affidavit of Financial Information</strong> - Complete income and asset disclosure</li>
                            <li>• Attach supporting documents (pay stubs, bank statements, etc.)</li>
                            <li>• Exchange with spouse and file with court</li>
                          </ul>
                          <div className="mt-3">
                            <Link href="/modules/disclosures">
                              <Button size="sm" variant="outline">
                                <Calculator className="w-4 h-4 mr-2" />
                                Financial Disclosure Guide
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        6
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Create Settlement Agreement</h3>
                        <p className="text-gray-600 mb-3">
                          Draft a comprehensive agreement covering all aspects of your divorce:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Agreement Must Include:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Property division (assets and debts)</li>
                              <li>• Spousal maintenance (if applicable)</li>
                              <li>• Insurance continuation</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Name change requests</li>
                              <li>• Retirement account division</li>
                              <li>• Tax considerations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                        7
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Wait and File Final Decree</h3>
                        <p className="text-gray-600 mb-3">
                          After the 60-day waiting period, submit your final documents:
                        </p>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Final Documents:</h4>
                          <ul className="text-sm text-gray-600 space-y-1 mb-3">
                            <li>• <strong>Consent Decree of Dissolution</strong> - Your signed agreement</li>
                            <li>• <strong>Request for Default or Uncontested Dissolution</strong></li>
                            <li>• Any additional required local forms</li>
                          </ul>
                          <div className="bg-white rounded p-3">
                            <p className="text-sm font-medium text-green-700">
                              ⏰ 60-Day Rule: Cannot finalize until 60 days after spouse was served
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Important Considerations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                      <h3 className="font-semibold text-amber-700">Before You File</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Ensure you have complete financial records and understand all assets/debts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Consider tax implications of property division and timing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Update beneficiaries on insurance policies and retirement accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Consider legal consultation even for simple cases</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                      <h3 className="font-semibold text-green-700">Common Mistakes to Avoid</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Forgetting to disclose all assets, even small accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Not considering future pension or retirement benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Failing to address health insurance continuation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Missing county-specific filing requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Property Division Guidelines</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-blue-700">Community Property (Shared)</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Income earned during marriage</li>
                        <li>• Property bought with marital funds</li>
                        <li>• Retirement contributions during marriage</li>
                        <li>• Debts incurred for family purposes</li>
                        <li>• Business interests acquired during marriage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-purple-700">Separate Property (Individual)</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Property owned before marriage</li>
                        <li>• Inheritances and gifts to one spouse</li>
                        <li>• Personal injury settlements</li>
                        <li>• Property acquired after service of petition</li>
                        <li>• Items specified in prenuptial agreement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">
                      💡 Tip: Create a detailed inventory of all assets and debts, noting which are community vs. separate property.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">After Your Divorce is Final</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">Update Legal Documents</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Will and estate planning</li>
                      <li>• Power of attorney</li>
                      <li>• Beneficiary designations</li>
                      <li>• Insurance policies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-2">Financial Updates</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bank account changes</li>
                      <li>• Credit card updates</li>
                      <li>• Tax filing status</li>
                      <li>• Social Security benefits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <FileText className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold mb-2">Name Change Process</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Driver's license/ID</li>
                      <li>• Social Security card</li>
                      <li>• Passport</li>
                      <li>• Employment records</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Choose your next step based on where you are in the process:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/forms/divorce-petition-children">
                  <Button className="w-full sm:w-auto">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Divorce Forms
                  </Button>
                </Link>
                <Link href="/topics/property-division">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Scale className="w-4 h-4 mr-2" />
                    Property Division Guide
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Take Assessment
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