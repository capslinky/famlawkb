/* eslint-disable react/no-unescaped-entities */
import { Gavel, Building, FileText, Clock, DollarSign, Users, AlertTriangle, CheckCircle, XCircle, Info, ExternalLink, Calendar, Scale, BookOpen, HelpCircle, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CourtProceduresContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <Gavel className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Court Procedures</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Step-by-step guide to Arizona family court - filing, deadlines, hearings, and what to expect
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* At a Glance */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">🔍 At a Glance</h2>
              <div className="space-y-3 text-blue-800">
                <p><strong>Quick Summary:</strong> Understanding court procedures helps you navigate the family court system successfully. Know the deadlines, filing requirements, and what happens at each stage.</p>
                <p><strong>Who This Affects:</strong> Anyone filing or responding to family court cases - divorce, custody, support, modifications, or protective orders.</p>
                <p><strong>Key Point:</strong> Missing deadlines or filing incorrectly can hurt your case. When in doubt, ask the self-help center.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            Key Takeaways
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700">
                <Clock className="h-4 w-4" />
                <span><strong>Response time:</strong> 20 days (in-state) or 30 days (out-of-state)</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <FileText className="h-4 w-4" />
                <span><strong>Most counties</strong> require electronic filing</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700">
                <Calendar className="h-4 w-4" />
                <span><strong>Financial disclosure</strong> due within 40 days</span>
              </div>
              <div className="flex items-center gap-2 text-orange-700">
                <Building className="h-4 w-4" />
                <span><strong>Each county</strong> has different local rules</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <span><strong>Missing deadlines</strong> can cause default judgment</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <HelpCircle className="h-4 w-4" />
                <span><strong>Self-help centers</strong> provide free assistance</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <DollarSign className="h-4 w-4" />
                <span><strong>Fee waivers</strong> available if you qualify</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-600" />
            In This Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <Link href="#getting-started" className="text-blue-600 hover:text-blue-800 hover:underline">• Getting Started</Link>
            <Link href="#filing-your-case" className="text-blue-600 hover:text-blue-800 hover:underline">• Filing Your Case</Link>
            <Link href="#service-response" className="text-blue-600 hover:text-blue-800 hover:underline">• Service & Response</Link>
            <Link href="#court-hearings" className="text-blue-600 hover:text-blue-800 hover:underline">• Court Hearings</Link>
            <Link href="#disclosure-requirements" className="text-blue-600 hover:text-blue-800 hover:underline">• Disclosure Requirements</Link>
            <Link href="#motion-practice" className="text-blue-600 hover:text-blue-800 hover:underline">• Motion Practice</Link>
            <Link href="#trial-preparation" className="text-blue-600 hover:text-blue-800 hover:underline">• Trial Preparation</Link>
            <Link href="#local-court-rules" className="text-blue-600 hover:text-blue-800 hover:underline">• Local Court Rules</Link>
          </div>
        </div>

        {/* Getting Started Section */}
        <div id="getting-started" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-green-600" />
            Getting Started
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Where to File</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800 mb-2"><strong>Superior Court</strong> - Family law cases only</p>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Find your county courthouse</li>
                  <li>• Family law division/department</li>
                  <li>• Self-help center location</li>
                </ul>
                <Link href="https://www.azcourts.gov/find-a-court" 
                      className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2" 
                      target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Court Locator
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">What You'll Need</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-3">Essential Documents:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Photo ID</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Case information</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Filing fees or waiver</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Completed forms</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Copies (keep originals)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Filing Fees (2024)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Case Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Filing Fee</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Response Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Divorce/Legal Separation</td>
                      <td className="border border-gray-300 px-4 py-2">$349</td>
                      <td className="border border-gray-300 px-4 py-2">$274</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Paternity</td>
                      <td className="border border-gray-300 px-4 py-2">$248</td>
                      <td className="border border-gray-300 px-4 py-2">$274</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Modification</td>
                      <td className="border border-gray-300 px-4 py-2">$129</td>
                      <td className="border border-gray-300 px-4 py-2">$129</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Motion</td>
                      <td className="border border-gray-300 px-4 py-2">$45</td>
                      <td className="border border-gray-300 px-4 py-2">No fee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Protective Order</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">FREE</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-yellow-50 p-3 rounded">
                <p className="text-yellow-800"><strong>Can't Afford?</strong> Apply for fee waiver at self-service centers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filing Your Case Section */}
        <div id="filing-your-case" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            Filing Your Case
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Step-by-Step Process</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">1</span>
                    Prepare Your Documents
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Get forms from court or online</li>
                    <li>• Fill out completely in black ink</li>
                    <li>• Make 3 copies of everything</li>
                    <li>• Organize in order</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2</span>
                    File with Court Clerk
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Go to family court clerk's office</li>
                    <li>• Submit original + copies</li>
                    <li>• Pay filing fee (or waiver)</li>
                    <li>• Get case number</li>
                    <li>• Receive date-stamped copies</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">3</span>
                    Get Your Summons
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Clerk issues after filing</li>
                    <li>• Valid for 120 days</li>
                    <li>• Multiple copies if needed</li>
                    <li>• Instructions included</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">What Happens Next?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-800 mb-3"><strong>Your case number</strong> = Your case ID forever</p>
                <ul className="space-y-1 text-sm text-indigo-700">
                  <li>• Write on all future documents</li>
                  <li>• Use for online access</li>
                  <li>• Need for all hearings</li>
                </ul>
                <div className="mt-3 bg-white p-2 rounded border">
                  <p className="text-sm text-gray-700"><strong>Example:</strong> FC2024-123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service & Response Section */}
        <div id="service-response" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-red-600" />
            Service & Response
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Getting Papers to Other Party</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Option 1: Process Server (Most Common)</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Licensed professional</li>
                      <li>• $75-150 typical cost</li>
                      <li>• 1-2 weeks usually</li>
                      <li>• Provides proof of service</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Option 2: Sheriff</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• $30-50 fee</li>
                      <li>• May take longer</li>
                      <li>• Good for difficult service</li>
                      <li>• Official proof</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Option 3: Acceptance</h4>
                    <ul className="space-y-1 text-sm text-purple-700">
                      <li>• Other party signs acceptance</li>
                      <li>• Free and fast</li>
                      <li>• Must be voluntary</li>
                      <li>• File with court</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Last Resort: Publication</h4>
                    <ul className="space-y-1 text-sm text-orange-700">
                      <li>• Can't find other party</li>
                      <li>• Publish in newspaper</li>
                      <li>• Court permission needed</li>
                      <li>• Limited orders available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Response Deadlines ⏰</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-3">Count carefully!</p>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <p>Served in Arizona → 20 days to respond</p>
                  <p>Served out of state → 30 days to respond</p>
                  <p>Day 1 = Day after service</p>
                  <p>Weekends/holidays = Next business day</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="font-semibold text-yellow-800"><strong>Missing deadline</strong> = Default judgment possible!</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">What's in a Response?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-blue-800 mb-3">Must Include:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Answer to each allegation</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Your position on requests</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Any counterclaims</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700">
                      <CheckCircle className="h-4 w-4" />
                      <span>Certificate of service</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-3">Options for Each Item:</p>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    <li><strong>Admit</strong> - Yes, this is true</li>
                    <li><strong>Deny</strong> - No, this is false</li>
                    <li><strong>No knowledge</strong> - I don't know</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Court Hearings Section */}
        <div id="court-hearings" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Gavel className="h-8 w-8 text-purple-600" />
            Court Hearings
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Types of Hearings</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">1. Temporary Orders ⚡</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• While case pending</li>
                      <li>• Support, custody, home use</li>
                      <li>• Usually within 60 days</li>
                      <li>• Bring financial docs</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">2. Status Conferences 📅</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Check case progress</li>
                      <li>• Set deadlines</li>
                      <li>• Discuss settlement</li>
                      <li>• Plan for trial</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">3. Motion Hearings 📋</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Specific requests</li>
                      <li>• Usually 15-30 minutes</li>
                      <li>• Focused issues only</li>
                      <li>• Judge decides that day</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">4. Trial ⚖️</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Final decisions</li>
                      <li>• Present all evidence</li>
                      <li>• Witnesses testify</li>
                      <li>• Judge's ruling final</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">What to Expect</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">Before Court:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Arrive 30 minutes early</li>
                    <li>• Check in with clerk</li>
                    <li>• Find your courtroom</li>
                    <li>• Turn off phone</li>
                    <li>• Dress professionally</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">In the Courtroom:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Wait for your case call</li>
                    <li>• Stand when speaking</li>
                    <li>• Address judge as "Your Honor"</li>
                    <li>• Speak clearly</li>
                    <li>• Stay calm and respectful</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Common Phrases:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• "May I approach?" (to show evidence)</li>
                  <li>• "Objection" (if improper question)</li>
                  <li>• "May I respond?" (to clarify)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Courtroom Tips</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    DO:
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Bring all documents</li>
                    <li>• Have copies ready</li>
                    <li>• Take notes</li>
                    <li>• Ask for clarification</li>
                    <li>• Be honest</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    DON'T:
                  </h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Interrupt anyone</li>
                    <li>• Argue with ex</li>
                    <li>• Make faces/gestures</li>
                    <li>• Bring children</li>
                    <li>• Chew gum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosure Requirements Section */}
        <div id="disclosure-requirements" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-orange-600" />
            Disclosure Requirements
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Financial Disclosure Timeline</h3>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orange-800">Due within 40 days of response filed</p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">1. Financial Affidavit 📋</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Monthly income</li>
                    <li>• Monthly expenses</li>
                    <li>• Assets and debts</li>
                    <li>• Signed under oath</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">2. Income Documents 💰</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Tax returns (2 years)</li>
                    <li>• Pay stubs (6 months)</li>
                    <li>• Profit/loss if self-employed</li>
                    <li>• Unemployment/disability benefits</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">3. Asset Documents 🏠</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Bank statements (12 months)</li>
                    <li>• Retirement statements</li>
                    <li>• Property deeds</li>
                    <li>• Vehicle titles</li>
                    <li>• Investment accounts</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2">4. Debt Documents 💳</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Credit card statements</li>
                    <li>• Loan documents</li>
                    <li>• Mortgage statements</li>
                    <li>• Medical bills</li>
                    <li>• Student loans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">What If They Don't Disclose?</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Your Options:</h4>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    <li>Send reminder letter</li>
                    <li>File motion to compel</li>
                    <li>Request sanctions</li>
                    <li>Exclusion of their evidence</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Penalties for Hiding Assets:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pay other side's attorney fees</li>
                    <li>• Contempt of court</li>
                    <li>• Unequal property division</li>
                    <li>• Criminal charges possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motion Practice Section */}
        <div id="motion-practice" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-indigo-600" />
            Motion Practice
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">What's a Motion?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Simple Definition: Asking the judge to order something before trial</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Common Examples:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Temporary support</li>
                    <li>• Parenting time schedule</li>
                    <li>• Exclusive home use</li>
                    <li>• Attorney fee help</li>
                    <li>• Drug testing</li>
                    <li>• Freeze bank accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">How to File a Motion</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Step 1: Write Your Motion</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• State what you want</li>
                    <li>• Explain why needed</li>
                    <li>• Provide facts (with proof)</li>
                    <li>• Cite the law</li>
                    <li>• Attach proposed order</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">Step 2: File and Serve</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• File with court clerk</li>
                    <li>• Serve other party</li>
                    <li>• File proof of service</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Step 3: Wait for Response</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• They have 10 business days</li>
                    <li>• Read their arguments</li>
                    <li>• You can file reply (5 days)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Step 4: Attend Hearing</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Or wait for ruling</li>
                    <li>• Some decided without hearing</li>
                    <li>• Check court's process</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Emergency Motions 🚨</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">When to Use:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Child in danger</li>
                    <li>• Money disappearing</li>
                    <li>• Leaving with kids</li>
                    <li>• Violence threatened</li>
                    <li>• Evidence being destroyed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Special Requirements:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Explain the emergency</li>
                    <li>• Show "irreparable harm"</li>
                    <li>• Try to notify other side</li>
                    <li>• Limited to urgent issues</li>
                    <li>• Judge reviews quickly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Motion Timeline</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <p>File motion → Serve party → Wait for response (10 days)</p>
                  <p>→ File reply (5 days) → Hearing scheduled → Judge rules</p>
                </div>
                <p className="mt-3 text-gray-700"><strong>Typical Total Time:</strong> 3-6 weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trial Preparation Section */}
        <div id="trial-preparation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-green-600" />
            Trial Preparation
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Pre-Trial Conference</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Usually 30-60 days before trial</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-800 mb-3">What Happens:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Confirm trial date</li>
                  <li>• Exchange witness lists</li>
                  <li>• Mark exhibits</li>
                  <li>• Discuss time needed</li>
                  <li>• Last settlement chance</li>
                  <li>• Get trial instructions</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Witness Lists</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Due: Usually 30 days before trial</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Include for Each Witness:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Full name</li>
                    <li>• Contact info</li>
                    <li>• What they'll testify about</li>
                    <li>• Time estimate</li>
                    <li>• Expert qualification (if any)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Types:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Fact witnesses</strong> - What they saw/know</li>
                    <li>• <strong>Expert witnesses</strong> - Professional opinions</li>
                    <li>• <strong>Character witnesses</strong> - Your reputation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Exhibit Preparation</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">What Can Be Evidence:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 📄 Documents (texts, emails, records)</li>
                    <li>• 📸 Photos</li>
                    <li>• 📹 Videos</li>
                    <li>• 💰 Financial records</li>
                    <li>• 📊 Charts/summaries</li>
                    <li>• 🔊 Audio recordings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Exhibit Rules:</h4>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    <li>Make 4 copies (you, them, judge, witness)</li>
                    <li>Number/letter each (Petitioner 1, 2...)</li>
                    <li>Create exhibit list</li>
                    <li>Exchange 5 days before trial</li>
                    <li>Bring originals to court</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Trial Day Checklist</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Night Before:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Organize all exhibits</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Prepare questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Confirm witnesses</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Plan what to wear</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Get directions/parking info</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">What to Bring:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>All exhibits (organized)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Witness information</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Notes/outline</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Calculator</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Important dates list</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Pen and paper</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Court Rules Section */}
        <div id="local-court-rules" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building className="h-8 w-8 text-gray-600" />
            Local Court Rules
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Why Local Rules Matter</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800"><strong>Each county is different!</strong></p>
                <ul className="space-y-1 text-sm text-yellow-700 mt-2">
                  <li>• Filing procedures</li>
                  <li>• Hearing schedules</li>
                  <li>• Form requirements</li>
                  <li>• E-filing rules</li>
                  <li>• Time limits</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Major County Differences</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Maricopa County (Phoenix)</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• E-filing required</li>
                    <li>• Online scheduling</li>
                    <li>• Expedited services</li>
                    <li>• Extensive self-help</li>
                  </ul>
                  <Link href="https://superiorcourt.maricopa.gov" 
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2" 
                        target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Maricopa Rules
                  </Link>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Pima County (Tucson)</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Different forms</li>
                    <li>• Conciliation court emphasis</li>
                    <li>• Settlement conferences</li>
                  </ul>
                  <Link href="https://www.pima.gov/925/Superior-Court" 
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2" 
                        target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Pima Rules
                  </Link>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Rural Counties</h4>
                  <ul className="space-y-1 text-sm text-purple-700">
                    <li>• Paper filing common</li>
                    <li>• Traveling judges</li>
                    <li>• Less frequent hearings</li>
                    <li>• Combined departments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Finding Your Local Rules</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                    <li><strong>Check county website</strong></li>
                    <li><strong>Ask self-help center</strong></li>
                    <li><strong>Call clerk's office</strong></li>
                    <li><strong>Posted in courthouse</strong></li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Common Local Variations:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Motion hearing days</li>
                    <li>• Page limits</li>
                    <li>• Scheduling procedures</li>
                    <li>• Mediation requirements</li>
                    <li>• Parenting class rules</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">E-Filing Basics</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Available 24/7 for most documents</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Benefits:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• File from home</li>
                    <li>• Instant confirmation</li>
                    <li>• Track your case</li>
                    <li>• Get email notices</li>
                    <li>• Pay fees online</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">How to Start:</h4>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    <li>Create account on county website</li>
                    <li>Watch training videos</li>
                    <li>Upload documents as PDFs</li>
                    <li>Pay and submit</li>
                    <li>Serve electronically</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Still Need Paper?</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Self-help centers</li>
                  <li>• Fee waiver applications</li>
                  <li>• Some exhibits</li>
                  <li>• Sealed documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Filing Errors</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2">1. Wrong Forms ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Using outdated versions</li>
                    <li>• Wrong county forms</li>
                    <li>• Missing required attachments</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Always get current forms from court website</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-800 mb-2">2. Missing Deadlines ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Counting days wrong</li>
                    <li>• Forgetting holidays</li>
                    <li>• Not allowing mail time</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Calendar immediately and set reminders</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">3. Improper Service ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Wrong person served</li>
                    <li>• Invalid method used</li>
                    <li>• No proof filed</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Use licensed process server</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Court Hearing Mistakes</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">4. Not Prepared ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Missing documents</li>
                    <li>• No witness list</li>
                    <li>• Exhibits not ready</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Use checklist, prepare early</p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">5. Wrong Behavior ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Arguing with ex</li>
                    <li>• Interrupting judge</li>
                    <li>• Emotional outbursts</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Stay calm, be respectful</p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">6. No Follow-Up ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Not drafting orders</li>
                    <li>• Missing deadlines after hearing</li>
                    <li>• Not serving minute entries</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Ask what happens next</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Help Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            Getting Help
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Self-Help Centers</h3>
              <div className="space-y-2 text-sm">
                <div className="space-y-1">
                  <p className="font-semibold text-green-700">FREE Services:</p>
                  <div className="space-y-1 text-gray-700">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Court forms</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Filing instructions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Computer access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Copy/print services</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Procedural info</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-red-700">They CANNOT:</p>
                  <div className="space-y-1 text-gray-700">
                    <div className="flex items-center gap-1">
                      <XCircle className="h-3 w-3 text-red-600" />
                      <span>Give legal advice</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <XCircle className="h-3 w-3 text-red-600" />
                      <span>Tell you what to say</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <XCircle className="h-3 w-3 text-red-600" />
                      <span>Review your documents</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <XCircle className="h-3 w-3 text-red-600" />
                      <span>Predict outcomes</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="https://www.azcourts.gov/selfservicecenter" 
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2" 
                    target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Find Yours
              </Link>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-700">Fee Waivers</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-green-800 mb-1">You May Qualify If:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Get food stamps/AHCCCS</li>
                    <li>• Income below poverty line</li>
                    <li>• Can't pay and meet basic needs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-800 mb-1">How to Apply:</p>
                  <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                    <li>Get waiver application</li>
                    <li>List income/expenses</li>
                    <li>Attach proof</li>
                    <li>File with first documents</li>
                    <li>Judge decides</li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-purple-700">Other Resources</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold text-blue-800">Legal Aid (Free if qualify)</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      <Link href="https://clsaz.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Community Legal Services
                      </Link>
                    </li>
                    <li>• Income limits apply</li>
                    <li>• Not all case types</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Law Library</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Legal research help</li>
                    <li>• Form examples</li>
                    <li>• Computer access</li>
                    <li>• Quiet workspace</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-800">Court Interpreters</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• FREE for hearings</li>
                    <li>• Request in advance</li>
                    <li>• Many languages</li>
                    <li>• Sign language too</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-600" />
            Related Topics
          </h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <Link href="/getting-divorced" className="text-blue-600 hover:text-blue-800 hover:underline">• Divorce Process - Start to finish</Link>
            <Link href="/reference/faq" className="text-blue-600 hover:text-blue-800 hover:underline">• FAQ - Common questions</Link>
            <Link href="/forms" className="text-blue-600 hover:text-blue-800 hover:underline">• Forms & Documents - What you need</Link>
            <Link href="/resources/legal-representation" className="text-blue-600 hover:text-blue-800 hover:underline">• Legal Help - Attorney options</Link>
          </div>
        </div>

        {/* Final Key Takeaway */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Key Takeaway</h2>
              <p className="text-blue-800">
                Court procedures seem complex but follow patterns. Use self-help centers, meet all deadlines, and stay organized. 
                When unsure, ask court staff about procedures (not legal advice). Being prepared and respectful goes far.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <Link href="/resources/legal-representation" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            ← Legal Representation
          </Link>
          <Link href="/reference/faq" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            FAQ →
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p><em>Last updated: January 30, 2024</em></p>
        </div>
      </div>
    </div>
  );
}