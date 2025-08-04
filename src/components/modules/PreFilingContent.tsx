/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Scale, Users, Home, AlertCircle, ExternalLink } from 'lucide-react';

export default function PreFilingContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🔍 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Before filing any legal action in Arizona family court, carefully consider whether legal action is truly necessary and gather all essential documents. This preparation can save months of delays and thousands in costs.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span><strong>Time to Complete:</strong> 1-4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Cost:</strong> Free (preparation only)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who This Affects:</strong> Anyone considering family court action</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Proper preparation prevents costly mistakes</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            ⚡ Key Takeaways
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Consider alternatives before filing (counseling, mediation)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gather financial documents (2+ years worth)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Document communication attempts and issues</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Determine correct county and court jurisdiction</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Understand filing fees and fee waiver options</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Secure children's records and important documents</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Create multiple copies of everything</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Consider legal representation or self-help resources</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Questions Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            🤔 Critical Questions: Should You File?
          </h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Warning: Think Before You File</h3>
                  <p className="text-yellow-700 text-sm">
                    Once you file, you start a legal process that can take 6+ months, cost thousands of dollars, and create lasting conflict. Always consider whether the issue can be resolved without court involvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Ask Yourself These Questions:</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">1. Have you tried to resolve this without court?</h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Direct communication with the other party</li>
                    <li>• Family counseling or mediation</li>
                    <li>• Collaborative law approach</li>
                    <li>• Arbitration for financial disputes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">2. Is this truly a legal matter that requires court intervention?</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-green-700 mb-1">✅ Court IS Needed For:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Legal divorce or separation</li>
                        <li>• Establishing paternity</li>
                        <li>• Child custody/support orders</li>
                        <li>• Protection from abuse</li>
                        <li>• Property division disputes</li>
                        <li>• Modifying existing orders</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700 mb-1">❌ Court May NOT Be Needed For:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Communication problems</li>
                        <li>• Minor parenting disagreements</li>
                        <li>• Financial planning issues</li>
                        <li>• Relationship counseling needs</li>
                        <li>• Temporary living arrangements</li>
                        <li>• Minor modifications by agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">3. Can you afford the time, money, and emotional cost?</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-blue-700 mb-1">⏰ Time Costs:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 6-18 months average</li>
                        <li>• Multiple court appearances</li>
                        <li>• Document preparation</li>
                        <li>• Meeting with attorneys</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-700 mb-1">💰 Financial Costs:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• $349+ filing fees</li>
                        <li>• $75+ service costs</li>
                        <li>• $200-500/hr attorney fees</li>
                        <li>• Court reporter, expert fees</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700 mb-1">💔 Emotional Costs:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Stress on children</li>
                        <li>• Family relationship strain</li>
                        <li>• Public court proceedings</li>
                        <li>• Adversarial atmosphere</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">4. Do you have what you need to succeed?</h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Complete financial documentation</li>
                    <li>• Evidence to support your position</li>
                    <li>• Realistic understanding of likely outcomes</li>
                    <li>• Legal representation or strong self-help resources</li>
                    <li>• Emotional support system during the process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Gathering Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            📋 Essential Document Gathering
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Start Early: Document Collection Takes Time</h3>
                <p className="text-green-700 text-sm">
                  Gathering complete documentation can take 2-4 weeks. Start this process before filing to avoid delays and ensure you meet disclosure deadlines.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Financial Documents */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Financial Documents (2+ Years)
                  </h3>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-medium">Income Documents:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Tax returns (last 2 years)</li>
                      <li>• Pay stubs (last 6 months)</li>
                      <li>• W-2s and 1099s</li>
                      <li>• Profit/loss statements (self-employed)</li>
                      <li>• Unemployment/disability benefits</li>
                      <li>• Social Security/pension statements</li>
                    </ul>
                    
                    <h4 className="font-medium mt-4">Bank & Investment Accounts:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Bank statements (12 months)</li>
                      <li>• Investment account statements</li>
                      <li>• Retirement account statements (401k, IRA)</li>
                      <li>• Life insurance policies</li>
                      <li>• Savings bonds</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Property Documents */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Property & Asset Documents
                  </h3>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-medium">Real Estate:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Property deeds</li>
                      <li>• Mortgage statements</li>
                      <li>• Property tax assessments</li>
                      <li>• Homeowner's insurance</li>
                      <li>• Recent appraisals</li>
                      <li>• Rental property leases</li>
                    </ul>
                    
                    <h4 className="font-medium mt-4">Personal Property:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Vehicle titles and registrations</li>
                      <li>• Vehicle loan statements</li>
                      <li>• Valuable personal property lists</li>
                      <li>• Collectibles appraisals</li>
                      <li>• Business ownership documents</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Debt Documents */}
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Debt & Liability Documents
                  </h3>
                  <div className="space-y-2 text-sm">
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Credit card statements (12 months)</li>
                      <li>• Loan documents (personal, auto, student)</li>
                      <li>• Medical bills and payment plans</li>
                      <li>• Tax debts and payment arrangements</li>
                      <li>• Court judgments</li>
                      <li>• Business debts and liabilities</li>
                      <li>• Credit reports (all three bureaus)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Children's Documents */}
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Children's Documents
                  </h3>
                  <div className="space-y-2 text-sm">
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Birth certificates</li>
                      <li>• Social Security cards</li>
                      <li>• School records and report cards</li>
                      <li>• Medical and dental records</li>
                      <li>• Insurance cards and policies</li>
                      <li>• Extracurricular activity records</li>
                      <li>• Childcare provider information</li>
                      <li>• Special needs documentation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Document Organization Tips */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-800 mb-3">📁 Document Organization Tips</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Create Multiple Copies:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Original for court</li>
                      <li>• Copy for other party</li>
                      <li>• Copy for your records</li>
                      <li>• Digital backup copies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Organization System:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Use binders with tabs</li>
                      <li>• Label everything clearly</li>
                      <li>• Keep chronological order</li>
                      <li>• Create document index</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Jurisdictional Considerations */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-600" />
            🏛️ Where to File: Jurisdictional Requirements
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Important: File in the Correct County</h3>
                  <p className="text-purple-700 text-sm">
                    Filing in the wrong county can delay your case by months. Arizona residency and jurisdictional requirements are specific and strictly enforced.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">✅ Arizona Residency Requirements</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">For Divorce/Legal Separation:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Either spouse must live in Arizona for 90+ days</li>
                        <li>• File in county where either spouse lives</li>
                        <li>• Domicile (permanent home) must be Arizona</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">For Child Custody:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Child must live in Arizona for 6+ months</li>
                        <li>• Arizona must be child's "home state"</li>
                        <li>• No other state has continuing jurisdiction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3">🏛️ County Selection Guide</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">Choose County Based On:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Where you currently live</li>
                        <li>• Where your spouse lives</li>
                        <li>• Where children primarily live</li>
                        <li>• Where marriage occurred (less common)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Major Counties:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• <strong>Maricopa:</strong> Phoenix metro area</li>
                        <li>• <strong>Pima:</strong> Tucson area</li>
                        <li>• <strong>Pinal:</strong> Casa Grande, Maricopa</li>
                        <li>• <strong>Yavapai:</strong> Prescott area</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Special Jurisdictional Issues</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700">Military Families:</h4>
                    <p className="text-gray-700 ml-4">Special rules apply for active duty military. Consult JAG or military family life counselors for guidance on residency requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700">Multi-State Issues:</h4>
                    <p className="text-gray-700 ml-4">If you or your spouse live in different states, or children have lived in multiple states, consult an attorney about jurisdictional issues before filing.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700">Existing Orders:</h4>
                    <p className="text-gray-700 ml-4">If there are existing court orders from another state, Arizona may not have jurisdiction to modify them. Check continuing jurisdiction rules.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Cost Considerations */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            💰 Understanding Costs & Fee Waivers
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Filing Fees */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">Court Filing Fees (2024)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Divorce/Legal Separation</span>
                      <span className="text-sm font-bold">$349</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Response to Petition</span>
                      <span className="text-sm font-bold">$274</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Paternity Action</span>
                      <span className="text-sm font-bold">$248</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Modification Motion</span>
                      <span className="text-sm font-bold">$129</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Regular Motion</span>
                      <span className="text-sm font-bold">$45</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium">Protection Orders</span>
                      <span className="text-sm font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Costs */}
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-orange-700 mb-3">Additional Costs</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Process Server</span>
                      <span className="text-sm">$75-150</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Sheriff Service</span>
                      <span className="text-sm">$30-50</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Certified Copies</span>
                      <span className="text-sm">$0.50/page</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Court Reporter</span>
                      <span className="text-sm">$3-5/page</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Attorney Hourly Rate</span>
                      <span className="text-sm">$200-500/hr</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium">Mediation</span>
                      <span className="text-sm">$100-300/hr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fee Waiver Information */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  💡 Fee Waiver Options
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">You May Qualify If You:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Receive SNAP (food stamps)</li>
                      <li>• Receive AHCCCS (Medicaid)</li>
                      <li>• Receive TANF benefits</li>
                      <li>• Income below federal poverty line</li>
                      <li>• Cannot pay fees and meet basic needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">How to Apply:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Complete application for deferral/waiver</li>
                      <li>• Attach proof of income/benefits</li>
                      <li>• File with your first court documents</li>
                      <li>• Judge decides whether to grant</li>
                      <li>• May be required to pay later if circumstances change</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ Common Pre-Filing Mistakes to Avoid
          </h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Filing in emotional crisis without preparation",
                consequence: "Poor legal strategy, missing important issues",
                solution: "Take time to gather documents and consider options first"
              },
              {
                mistake: "Not attempting resolution outside court",
                consequence: "Judge may require mediation anyway, wasted time/money",
                solution: "Try counseling, mediation, or collaborative law first"
              },
              {
                mistake: "Filing in wrong county",
                consequence: "Case dismissed, must refile, additional fees",
                solution: "Verify residency requirements and jurisdictional rules"
              },
              {
                mistake: "Incomplete financial documentation",
                consequence: "Court sanctions, delayed proceedings, poor outcomes",
                solution: "Gather 2+ years of complete financial records before filing"
              },
              {
                mistake: "Not considering children's best interests",
                consequence: "Harmful custody arrangements, ongoing conflict",
                solution: "Focus on children's stability and relationships with both parents"
              },
              {
                mistake: "Filing without understanding the process",
                consequence: "Procedural errors, missed deadlines, poor representation",
                solution: "Visit self-help center, read court rules, consider attorney consultation"
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-800 mb-1">❌ {item.mistake}</h3>
                      <p className="text-sm text-red-700 mb-2"><strong>Consequence:</strong> {item.consequence}</p>
                      <p className="text-sm text-green-700"><strong>✅ Solution:</strong> {item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            🚀 Ready to Move Forward? Next Steps
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Option 1: Self-Representation
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Visit court self-help center</li>
                    <li>• Complete forms carefully</li>
                    <li>• Attend required classes</li>
                    <li>• Follow all court rules</li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Best for: Simple, uncontested cases</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Option 2: Limited Scope Attorney
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Attorney helps with specific tasks</li>
                    <li>• Document review and drafting</li>
                    <li>• Court appearance coaching</li>
                    <li>• More affordable than full representation</li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Best for: Moderate complexity cases</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Option 3: Full Attorney Representation
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Attorney handles entire case</li>
                    <li>• All court appearances</li>
                    <li>• Complex legal strategy</li>
                    <li>• Highest level of advocacy</li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Best for: Complex, contested cases</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-3">📋 Pre-Filing Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Considered alternatives to court action</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Verified correct county for filing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Gathered 2+ years financial documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Secured children's important documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Researched filing fees and fee waiver options</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Created document organization system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Made multiple copies of all documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Decided on self-representation vs attorney</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Visited court self-help center or consulted attorney</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Prepared emotionally and financially for the process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-gray-600" />
            📞 Resources & Help
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Court Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Self-Help Centers <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/find-a-court" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Court Locator <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/rules" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Arizona Court Rules <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter/Forms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Court Forms <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Legal Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.azlawhelp.org" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Arizona Legal Aid <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azbar.org/findlawyer" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Find an Attorney <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://clsaz.org" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Community Legal Services <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/lawlibrary" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Law Library Research <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}