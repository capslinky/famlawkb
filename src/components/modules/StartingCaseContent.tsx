/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Scale, Users, Home, AlertCircle, ExternalLink, MapPin, Search, Calendar, Building } from 'lucide-react';

export default function StartingCaseContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🔍 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Starting your family law case involves finding the correct court, completing the proper forms, and filing them correctly. This step officially begins the legal process and starts important deadlines running.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span><strong>Time to Complete:</strong> 1-2 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Filing Fees:</strong> $248-$349 (waiver available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who This Affects:</strong> Anyone initiating family court action</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Filing starts 120-day service deadline</span>
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
                <span className="text-sm">File in Superior Court (family law division only)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Use current court forms (check dates monthly)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Complete all required attachments and schedules</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Make multiple copies before filing</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bring filing fees or fee waiver application</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Get case number and summons at filing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Service must be completed within 120 days</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Consider e-filing for 24/7 access</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Finding the Correct Court */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            🏛️ Step 1: Finding the Correct Court
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Critical: Family Law Cases ONLY in Superior Court</h3>
                  <p className="text-red-700 text-sm">
                    Arizona family law cases must be filed in Superior Court, not Justice Court or Municipal Court. Filing in the wrong court will cause delays and additional fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Court Location Guide */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Court Location Requirements
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">File in County Where:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• You live (most common)</li>
                        <li>• Your spouse/partner lives</li>
                        <li>• Children primarily live</li>
                        <li>• Marriage occurred (less common)</li>
                        <li>• Property is located (property cases)</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-700 text-xs">
                        <strong>Tip:</strong> If multiple counties apply, choose the one most convenient for you, as most hearings will be there.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Major County Courts */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Major County Courts
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="border-b pb-2">
                      <h4 className="font-medium">Maricopa County (Phoenix)</h4>
                      <p className="text-gray-600">Central Court Building, 201 W Jefferson</p>
                      <p className="text-xs text-blue-600">E-filing required, extensive self-help</p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-medium">Pima County (Tucson)</h4>
                      <p className="text-gray-600">Pima County Superior Court, 110 W Congress</p>
                      <p className="text-xs text-blue-600">Strong mediation program</p>
                    </div>
                    <div className="border-b pb-2">
                      <h4 className="font-medium">Pinal County</h4>
                      <p className="text-gray-600">Two locations: Florence & Casa Grande</p>
                      <p className="text-xs text-blue-600">Growing population, modern facilities</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Rural Counties</h4>
                      <p className="text-gray-600">15 smaller counties</p>
                      <p className="text-xs text-blue-600">May have traveling judges, less frequent hearings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Finding Court Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-800 mb-3">📍 How to Find Your Court Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Online Resources:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• <a href="https://www.azcourts.gov/find-a-court" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Arizona Courts Court Locator</a></li>
                      <li>• County superior court websites</li>
                      <li>• Self-help center locations</li>
                      <li>• Hours and contact information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">What You'll Find:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Physical courthouse address</li>
                      <li>• Family court department/division</li>
                      <li>• Clerk's office hours</li>
                      <li>• Parking and security information</li>
                      <li>• Local court rules and procedures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Form Selection and Completion */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            📋 Step 2: Selecting and Completing Forms
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Use Current Court Forms Only</h3>
                  <p className="text-green-700 text-sm">
                    Court forms are updated regularly. Always download the most current version from the court website. Using outdated forms can cause rejection and delays.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Types by Case */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">📄 Common Case Types and Required Forms</h3>
              
              <div className="grid gap-4">
                {/* Divorce Forms */}
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-700 mb-3">Divorce/Legal Separation</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">Without Children:</h5>
                        <ul className="space-y-1 ml-4 text-gray-600">
                          <li>• Petition for Dissolution</li>
                          <li>• Summons</li>
                          <li>• Preliminary Injunction</li>
                          <li>• Cover Sheet</li>
                          <li>• Sensitive Data Sheet</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">With Children:</h5>
                        <ul className="space-y-1 ml-4 text-gray-600">
                          <li>• All forms from "without children"</li>
                          <li>• Parenting Plan</li>
                          <li>• Child Support Worksheet</li>
                          <li>• Affidavit re: Minor Children</li>
                          <li>• Information Sheet (Children)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Paternity Forms */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-700 mb-3">Paternity Cases</h4>
                    <div className="text-sm">
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Petition to Establish Paternity</li>
                        <li>• Summons</li>
                        <li>• Cover Sheet</li>
                        <li>• Parenting Plan</li>
                        <li>• Child Support Worksheet</li>
                        <li>• Affidavit re: Minor Children</li>
                        <li>• Information Sheet (Children)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Modification Forms */}
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-purple-700 mb-3">Modifications</h4>
                    <div className="text-sm">
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Petition for Modification</li>
                        <li>• Summons (if needed)</li>
                        <li>• Affidavit Supporting Motion</li>
                        <li>• Updated worksheets/plans</li>
                        <li>• Cover Sheet</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Protection Order Forms */}
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-orange-700 mb-3">Protection Orders (FREE)</h4>
                    <div className="text-sm">
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Petition for Order of Protection</li>
                        <li>• Affidavit in Support</li>
                        <li>• Request for Hearing</li>
                        <li>• Confidential Information Form</li>
                        <li>• Service Information Sheet</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form Completion Tips */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">✍️ Form Completion Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Technical Requirements:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Use black ink only (if handwriting)</li>
                      <li>• Type forms when possible</li>
                      <li>• Print clearly in block letters</li>
                      <li>• Fill in all required fields</li>
                      <li>• Use "N/A" for non-applicable fields</li>
                      <li>• Sign and date where required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Content Guidelines:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Be specific and factual</li>
                      <li>• Avoid emotional language</li>
                      <li>• Include complete addresses</li>
                      <li>• Use full legal names</li>
                      <li>• Double-check all numbers</li>
                      <li>• Include all required attachments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Form Completion Errors */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Common Form Errors to Avoid</h3>
                <div className="space-y-2">
                  {[
                    {
                      error: "Using old form versions",
                      fix: "Always download forms fresh from court website"
                    },
                    {
                      error: "Incomplete case caption (heading)",
                      fix: "Include full names, case number (after filing), and court name"
                    },
                    {
                      error: "Missing required attachments",
                      fix: "Check form instructions for all required schedules and attachments"
                    },
                    {
                      error: "Inconsistent information across forms",
                      fix: "Review all forms together before filing to ensure consistency"
                    },
                    {
                      error: "Missing signatures or dates",
                      fix: "Check every form for signature and date requirements"
                    },
                    {
                      error: "Illegible handwriting",
                      fix: "Type forms when possible, or print very clearly in block letters"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-red-700 font-medium">❌ {item.error}</span>
                        <br />
                        <span className="text-green-700">✅ {item.fix}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Filing Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-purple-600" />
            🏛️ Step 3: Filing Your Case
          </h2>
          
          <div className="space-y-6">
            {/* Filing Methods */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">📤 Filing Methods</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* E-Filing */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      E-Filing (Recommended)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <h5 className="font-medium">Advantages:</h5>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Available 24/7</li>
                        <li>• Instant confirmation</li>
                        <li>• No travel to courthouse</li>
                        <li>• Electronic case tracking</li>
                        <li>• Automatic service options</li>
                      </ul>
                      <h5 className="font-medium mt-3">Requirements:</h5>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Create court e-filing account</li>
                        <li>• Upload documents as PDFs</li>
                        <li>• Pay filing fees online</li>
                        <li>• Maricopa County: Mandatory</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Paper Filing */}
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Paper Filing (In-Person)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <h5 className="font-medium">When to Use:</h5>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• E-filing not available</li>
                        <li>• Need immediate assistance</li>
                        <li>• Fee waiver applications</li>
                        <li>• Complex documents</li>
                      </ul>
                      <h5 className="font-medium mt-3">What to Bring:</h5>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Original documents</li>
                        <li>• 3 copies of everything</li>
                        <li>• Filing fees or waiver</li>
                        <li>• Photo ID</li>
                        <li>• Self-addressed stamped envelopes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step-by-Step Filing Process */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-purple-800 mb-3">📋 Step-by-Step Filing Process</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1. Review Documents",
                      description: "Double-check all forms for completeness and accuracy",
                      timeframe: "30 minutes"
                    },
                    {
                      step: "2. Make Copies",
                      description: "Original for court, copy for other party, copy for your records",
                      timeframe: "15 minutes"
                    },
                    {
                      step: "3. Go to Clerk's Office",
                      description: "Find family law division clerk (usually separate from other divisions)",
                      timeframe: "Travel time"
                    },
                    {
                      step: "4. Submit Documents",
                      description: "Hand documents to clerk, pay filing fees",
                      timeframe: "15-30 minutes"
                    },
                    {
                      step: "5. Receive Case Number",
                      description: "Clerk assigns case number and returns date-stamped copies",
                      timeframe: "Immediate"
                    },
                    {
                      step: "6. Get Summons",
                      description: "Clerk issues summons for service on other party",
                      timeframe: "Immediate"
                    },
                    {
                      step: "7. Plan Service",
                      description: "Arrange to serve other party within 120 days",
                      timeframe: "Next priority"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-purple-800">{item.step}</h4>
                        <p className="text-sm text-gray-700">{item.description}</p>
                        <span className="text-xs text-purple-600 font-medium">{item.timeframe}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What Happens After Filing */}
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-700 mb-3">✅ What Happens After Filing</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">You'll Receive:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• <strong>Case Number:</strong> Your permanent case identifier</li>
                      <li>• <strong>Date-Stamped Copies:</strong> Official filed documents</li>
                      <li>• <strong>Summons:</strong> Papers to serve other party</li>
                      <li>• <strong>Filing Receipt:</strong> Proof of payment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Important Deadlines Start:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• <strong>120 days:</strong> Service deadline</li>
                      <li>• <strong>20/30 days:</strong> Response time (after service)</li>
                      <li>• <strong>40 days:</strong> Financial disclosure due</li>
                      <li>• <strong>60 days:</strong> Preliminary injunction expires</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Costs and Fees */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            💰 Filing Costs and Fee Waivers
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Filing Fees Table */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">2024 Filing Fees</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Divorce/Legal Separation</span>
                      <span className="text-sm font-bold">$349</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Paternity Case</span>
                      <span className="text-sm font-bold">$248</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Modification Petition</span>
                      <span className="text-sm font-bold">$129</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Motion Filing</span>
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
                  <h3 className="font-semibold text-orange-700 mb-3">Additional Costs to Plan For</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1">
                      <span>Service of process</span>
                      <span>$75-150</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Certified copies</span>
                      <span>$0.50/page</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Publication service</span>
                      <span>$75-100</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Parenting classes</span>
                      <span>$50-100</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Mediation (if required)</span>
                      <span>$100-300/hr</span>
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
                  💡 Fee Waiver/Deferral Options
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Automatic Qualification:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• SNAP (food stamps)</li>
                      <li>• AHCCCS (Medicaid)</li>
                      <li>• TANF benefits</li>
                      <li>• SSI benefits</li>
                      <li>• General assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Income-Based Qualification:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Below federal poverty line</li>
                      <li>• Cannot pay and meet basic needs</li>
                      <li>• Judge reviews application</li>
                      <li>• May require proof of income</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">How to Apply:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Complete waiver application</li>
                      <li>• Attach proof of benefits/income</li>
                      <li>• File with initial documents</li>
                      <li>• Clerk will process application</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes to Avoid */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ Common Filing Mistakes to Avoid
          </h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Filing in wrong county or court",
                consequence: "Case dismissed, must refile in correct location",
                solution: "Verify residency requirements and court jurisdiction before filing"
              },
              {
                mistake: "Using outdated court forms",
                consequence: "Forms rejected, case delayed",
                solution: "Always download current forms from official court website"
              },
              {
                mistake: "Incomplete or inconsistent information",
                consequence: "Forms rejected, additional filing fees",
                solution: "Review all documents together for consistency before filing"
              },
              {
                mistake: "Not making enough copies",
                consequence: "Delays, additional trips to courthouse",
                solution: "Always bring original plus 3 copies of all documents"
              },
              {
                mistake: "Filing without fee or waiver application",
                consequence: "Documents not accepted",
                solution: "Bring exact filing fees or completed fee waiver application"
              },
              {
                mistake: "Not understanding service deadline",
                consequence: "Case dismissed after 120 days if not served",
                solution: "Plan service immediately after filing, hire process server"
              },
              {
                mistake: "Missing required attachments",
                consequence: "Forms rejected as incomplete",
                solution: "Check form instructions carefully for all required attachments"
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

      {/* Next Steps After Filing */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            🚀 Next Steps After Filing
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Time-Sensitive: Service Must Be Completed</h3>
                  <p className="text-blue-700 text-sm">
                    You have exactly 120 days from the date of filing to serve the other party. If you miss this deadline, your case will be dismissed and you'll need to refile (and pay fees again).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Immediate Priorities
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Arrange service of process</li>
                    <li>• Update case caption on all future documents</li>
                    <li>• Calendar important deadlines</li>
                    <li>• Organize case file with case number</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Upcoming Requirements
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prepare financial disclosures</li>
                    <li>• Complete parenting classes (if children)</li>
                    <li>• Consider temporary orders if needed</li>
                    <li>• Plan for first court appearance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Long-Term Planning
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gather evidence for your case</li>
                    <li>• Consider settlement options</li>
                    <li>• Prepare for mediation</li>
                    <li>• Plan witness testimony</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-3">📋 Post-Filing Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Case number written on all future documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Service of process arranged</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Important deadlines calendared</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Case file organized</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Financial document gathering begun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Parenting class scheduled (if applicable)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Temporary orders considered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Next steps planned</span>
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
                  <a href="https://www.azcourts.gov/find-a-court" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Court Locator <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter/Forms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Current Court Forms <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Self-Help Centers <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://superiorcourt.maricopa.gov" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Maricopa County E-Filing <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Form Help & Guidance</h3>
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
                  <a href="https://clsaz.org" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Community Legal Services <ExternalLink className="w-3 h-3" />
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