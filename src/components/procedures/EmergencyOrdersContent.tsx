/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Shield, Clock, Phone, Users, FileText, Gavel, ExternalLink, Info, CheckCircle, XCircle, Target, Zap, BookOpen, HelpCircle, Calendar, Home, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function EmergencyOrdersContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Emergency Orders</h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Getting emergency court orders when urgent action is needed to protect children, property, or safety
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Critical Notice */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-3">🚨 Immediate Danger?</h2>
              <div className="space-y-3 text-red-800">
                <p><strong>CALL 911 FIRST</strong> if you or your children are in immediate physical danger.</p>
                <p><strong>Emergency protective orders</strong> are available 24/7 through police and judges.</p>
                <p><strong>Don't wait</strong> - emergency situations require immediate action.</p>
              </div>
            </div>
          </div>
        </div>

        {/* At a Glance */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">🔍 At a Glance</h2>
              <div className="space-y-3 text-blue-800">
                <p><strong>Quick Summary:</strong> Emergency orders provide immediate court protection when waiting for a normal hearing would cause serious harm. Available 24/7 for true emergencies.</p>
                <p><strong>Who This Affects:</strong> Anyone facing immediate threats to safety, children being taken away, or urgent situations requiring court intervention.</p>
                <p><strong>Key Point:</strong> Must show immediate and irreparable harm that can't wait for regular court process.</p>
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
              <div className="flex items-center gap-2 text-red-700">
                <Clock className="h-4 w-4" />
                <span><strong>Available 24/7</strong> through emergency procedures</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Shield className="h-4 w-4" />
                <span><strong>Immediate protection</strong> for urgent situations</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <FileText className="h-4 w-4" />
                <span><strong>No filing fee</strong> for protection orders</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700">
                <Users className="h-4 w-4" />
                <span><strong>Temporary orders</strong> until full hearing</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-700">
                <Gavel className="h-4 w-4" />
                <span><strong>Judge decides immediately</strong> or within hours</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-700">
                <Calendar className="h-4 w-4" />
                <span><strong>Follow-up hearing</strong> scheduled within days</span>
              </div>
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <span><strong>High legal standard</strong> - must show emergency</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Phone className="h-4 w-4" />
                <span><strong>Police enforcement</strong> available immediately</span>
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
            <Link href="#what-qualifies" className="text-blue-600 hover:text-blue-800 hover:underline">• What Qualifies as Emergency</Link>
            <Link href="#types-of-orders" className="text-blue-600 hover:text-blue-800 hover:underline">• Types of Emergency Orders</Link>
            <Link href="#how-to-get" className="text-blue-600 hover:text-blue-800 hover:underline">• How to Get Emergency Orders</Link>
            <Link href="#evidence-needed" className="text-blue-600 hover:text-blue-800 hover:underline">• Evidence Needed</Link>
            <Link href="#what-happens-next" className="text-blue-600 hover:text-blue-800 hover:underline">• What Happens Next</Link>
            <Link href="#enforcement" className="text-blue-600 hover:text-blue-800 hover:underline">• Enforcement & Violations</Link>
            <Link href="#common-mistakes" className="text-blue-600 hover:text-blue-800 hover:underline">• Common Mistakes</Link>
            <Link href="#get-help" className="text-blue-600 hover:text-blue-800 hover:underline">• Get Help</Link>
          </div>
        </div>

        {/* What Qualifies Section */}
        <div id="what-qualifies" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-red-600" />
            What Qualifies as Emergency
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Legal Standard: "Immediate and Irreparable Harm"</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-3">Must show ALL of these:</p>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Immediate threat</strong> - Harm is happening now or very soon</li>
                  <li>• <strong>Irreparable harm</strong> - Damage that can't be undone or compensated</li>
                  <li>• <strong>No adequate remedy</strong> - Normal court process won't prevent harm</li>
                  <li>• <strong>Clear evidence</strong> - Strong proof of the emergency</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-yellow-800"><strong>Not an emergency:</strong> Disagreements, inconvenience, or situations that can wait for regular hearing</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Situations That Usually Qualify</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Safety Threats
                    </h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Domestic violence</li>
                      <li>• Threats of physical harm</li>
                      <li>• Child abuse/neglect</li>
                      <li>• Stalking or harassment</li>
                      <li>• Weapons threats</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Child Emergencies
                    </h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Parent taking child out of state</li>
                      <li>• Child being hidden/kidnapped</li>
                      <li>• Serious medical decisions</li>
                      <li>• Child in immediate danger</li>
                      <li>• Abandonment situations</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Financial Emergencies
                    </h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Assets being hidden/destroyed</li>
                      <li>• Bank accounts being emptied</li>
                      <li>• Property being sold secretly</li>
                      <li>• Business being destroyed</li>
                      <li>• Records being destroyed</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Housing Emergencies
                    </h4>
                    <ul className="space-y-1 text-sm text-purple-700">
                      <li>• Being locked out of home</li>
                      <li>• Utilities being shut off</li>
                      <li>• Property being damaged</li>
                      <li>• Foreclosure proceedings</li>
                      <li>• Essential items being removed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Situations That Usually DON'T Qualify</h3>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Not Emergency Situations:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Disagreements about parenting time</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Late child support payments</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Wanting faster court process</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>School or activity disputes</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Communication problems</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Minor rule violations</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Inconvenience or frustration</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700">
                      <XCircle className="h-4 w-4" />
                      <span>Old incidents (not ongoing)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Orders Section */}
        <div id="types-of-orders" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Gavel className="h-8 w-8 text-blue-600" />
            Types of Emergency Orders
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Emergency Protective Orders</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Available Through:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Police (24/7):</strong> When called to domestic violence scene</li>
                    <li>• <strong>Court (business hours):</strong> Walk-in emergency orders</li>
                    <li>• <strong>On-call judge:</strong> After hours through police/sheriff</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Protection Includes:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• No contact orders</li>
                    <li>• Stay-away requirements</li>
                    <li>• Removal from home</li>
                    <li>• Temporary custody</li>
                    <li>• Weapon surrender</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-red-50 p-3 rounded">
                <p className="text-red-800"><strong>Duration:</strong> Up to 1 year, with hearing within 10 days</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Emergency Custody Orders</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">When Available:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Child being taken out of state</li>
                    <li>• Child in immediate physical danger</li>
                    <li>• Parent has disappeared with child</li>
                    <li>• Medical emergency decisions needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Court Can Order:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Immediate custody change</li>
                    <li>• Return of child</li>
                    <li>• Supervised visitation only</li>
                    <li>• No parenting time</li>
                    <li>• Passport surrender</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded">
                <p className="text-blue-800"><strong>Standard:</strong> Clear and present danger to child's safety</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Emergency Financial Orders</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Asset Protection:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Freeze bank accounts</li>
                    <li>• Stop sale of property</li>
                    <li>• Prevent asset transfers</li>
                    <li>• Preserve business assets</li>
                    <li>• Stop loan applications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Support Orders:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Temporary spousal support</li>
                    <li>• Emergency child support</li>
                    <li>• Payment of bills</li>
                    <li>• Health insurance continuation</li>
                    <li>• Housing costs</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-green-50 p-3 rounded">
                <p className="text-green-800"><strong>Requirement:</strong> Risk of dissipation or immediate financial harm</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Emergency Use and Possession Orders</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Home and Property:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Exclusive use of family home</li>
                    <li>• Access to personal belongings</li>
                    <li>• Use of vehicles</li>
                    <li>• Control of utilities</li>
                    <li>• Security deposits/keys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Business Interests:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Control of business operations</li>
                    <li>• Access to business accounts</li>
                    <li>• Management decisions</li>
                    <li>• Prevent business damage</li>
                    <li>• Preserve customer relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Get Section */}
        <div id="how-to-get" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Clock className="h-8 w-8 text-orange-600" />
            How to Get Emergency Orders
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Immediate Danger - Call 911 First</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-3">If you or children are in immediate physical danger:</p>
                <ol className="space-y-2 text-red-700 list-decimal list-inside">
                  <li><strong>Call 911</strong> - Police can issue emergency protective orders on-scene</li>
                  <li><strong>Go to safe location</strong> - Hospital, police station, family/friend</li>
                  <li><strong>Document everything</strong> - Photos, witness names, medical treatment</li>
                  <li><strong>Contact court next business day</strong> - Get longer-term protection</li>
                </ol>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-blue-800"><strong>Emergency Protective Orders:</strong> Police can issue these 24/7, last up to 72 hours</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Court Emergency Orders - Business Hours</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Step 1: Go to Court Immediately</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Go to family court clerk's office</li>
                    <li>• Ask for emergency/ex parte forms</li>
                    <li>• Request to see duty judge</li>
                    <li>• Bring all evidence with you</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">Step 2: Complete Emergency Motion</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• State exactly what emergency exists</li>
                    <li>• Explain why you can't wait for regular hearing</li>
                    <li>• Describe harm that will occur</li>
                    <li>• Request specific relief needed</li>
                    <li>• Attach all supporting documents</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Step 3: Meet with Judge</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Present your case clearly and quickly</li>
                    <li>• Show evidence of emergency</li>
                    <li>• Answer judge's questions honestly</li>
                    <li>• Be prepared to testify under oath</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Step 4: If Granted</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Get certified copies of order</li>
                    <li>• Serve on other party immediately</li>
                    <li>• File proof of service</li>
                    <li>• Schedule follow-up hearing</li>
                    <li>• Contact police if needed for enforcement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">After Hours Emergency Orders</h3>
              
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800 mb-2">When Courts are Closed:</p>
                <ul className="space-y-1 text-sm text-indigo-700">
                  <li>• Call 911 if immediate danger</li>
                  <li>• Police can contact on-call judge</li>
                  <li>• Judge can issue orders by phone</li>
                  <li>• Emergency protective orders available</li>
                  <li>• Go to court first business day for follow-up</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Weekends/Holidays:</h4>
                  <ul className="space-y-1 text-xs text-red-700">
                    <li>• Most counties have duty judges</li>
                    <li>• Call main court number for emergency line</li>
                    <li>• May need to go through police</li>
                    <li>• Limited to true emergencies only</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">After 5 PM:</h4>
                  <ul className="space-y-1 text-xs text-blue-700">
                    <li>• Emergency protective orders through police</li>
                    <li>• Justice courts may be available</li>
                    <li>• Hospital social workers can help</li>
                    <li>• Domestic violence advocates available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Needed Section */}
        <div id="evidence-needed" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-green-600" />
            Evidence Needed
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">What Courts Want to See</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800 mb-3">Emergency orders require STRONG evidence. Bring:</p>
                <ul className="space-y-1 text-green-700">
                  <li>• <strong>Recent incidents</strong> - Within days or weeks, not months</li>
                  <li>• <strong>Clear documentation</strong> - Photos, texts, emails, recordings</li>
                  <li>• <strong>Witness information</strong> - Names and contact info</li>
                  <li>• <strong>Official reports</strong> - Police reports, medical records</li>
                  <li>• <strong>Pattern of behavior</strong> - Not just one isolated incident</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Types of Evidence by Situation</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Domestic Violence/Safety:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Photos of injuries</li>
                      <li>• Medical records/hospital visits</li>
                      <li>• Police reports</li>
                      <li>• Threatening texts/emails</li>
                      <li>• Voicemails or recordings</li>
                    </ul>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Witness statements</li>
                      <li>• Photos of property damage</li>
                      <li>• 911 call records</li>
                      <li>• Protective order violations</li>
                      <li>• Social media threats</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Child Safety/Custody:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• CPS reports</li>
                      <li>• School incident reports</li>
                      <li>• Medical records showing neglect</li>
                      <li>• Photos of unsafe conditions</li>
                      <li>• Witness statements from teachers</li>
                    </ul>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Evidence of substance abuse</li>
                      <li>• Travel documents/tickets</li>
                      <li>• Communications about leaving</li>
                      <li>• Child's statements (if age appropriate)</li>
                      <li>• Mental health evaluations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Financial Emergencies:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Bank statements showing transfers</li>
                      <li>• Property sale documents</li>
                      <li>• Business records</li>
                      <li>• Evidence of hidden assets</li>
                      <li>• Loan applications</li>
                    </ul>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Email/text about selling assets</li>
                      <li>• Financial advisor communications</li>
                      <li>• Account closure notices</li>
                      <li>• Credit card statements</li>
                      <li>• Asset valuations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Documentation Tips</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    DO:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Take photos immediately</li>
                    <li>• Save all messages/emails</li>
                    <li>• Write down exact quotes and dates</li>
                    <li>• Get witness contact information</li>
                    <li>• Keep originals safe</li>
                    <li>• Document everything chronologically</li>
                    <li>• Seek medical attention if injured</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    DON'T:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Wait to document incidents</li>
                    <li>• Delete threatening messages</li>
                    <li>• Rely on memory for dates/details</li>
                    <li>• Confront the other person</li>
                    <li>• Violate orders while gathering evidence</li>
                    <li>• Take children for evidence gathering</li>
                    <li>• Destroy or hide evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens Next Section */}
        <div id="what-happens-next" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-indigo-600" />
            What Happens Next
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">If Emergency Order is Granted</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">Immediate Steps (Day 1):</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Get multiple certified copies of order</li>
                    <li>• Give copies to police departments</li>
                    <li>• Serve other party as soon as possible</li>
                    <li>• Keep copy with you at all times</li>
                    <li>• Inform schools, daycare, employers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Follow-Up Hearing (Within 10 days usually):</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Other party gets chance to respond</li>
                    <li>• Present additional evidence</li>
                    <li>• Judge decides whether to continue order</li>
                    <li>• May modify terms of protection</li>
                    <li>• Sets longer-term arrangements</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Prepare for Full Hearing:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Gather additional evidence</li>
                    <li>• Line up witnesses</li>
                    <li>• Document any new incidents</li>
                    <li>• Consider getting attorney</li>
                    <li>• Prepare to testify in detail</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">If Emergency Order is Denied</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Reasons for Denial:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Insufficient evidence of emergency</li>
                    <li>• Situation not urgent enough</li>
                    <li>• Harm can be prevented other ways</li>
                    <li>• Missing required documentation</li>
                    <li>• Legal standard not met</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Your Options:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• File regular motion for hearing</li>
                    <li>• Gather more evidence</li>
                    <li>• Seek safety through other means</li>
                    <li>• Contact domestic violence services</li>
                    <li>• Appeal (in some circumstances)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 p-3 rounded">
                <p className="text-yellow-800"><strong>Important:</strong> Denial doesn't mean you have no case - it may just mean emergency standard wasn't met</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Timeline Expectations</h3>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="font-semibold">Emergency Order Hearing: Same day or next business day</p>
                      <p className="text-sm text-gray-600">Judge decides immediately, order effective right away</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="font-semibold">Service on Other Party: Within 1-2 days</p>
                      <p className="text-sm text-gray-600">Must be served before enforcement can begin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="font-semibold">Response Hearing: 5-10 days after service</p>
                      <p className="text-sm text-gray-600">Other party can contest, present their side</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">4</div>
                    <div>
                      <p className="font-semibold">Final Order: After full hearing</p>
                      <p className="text-sm text-gray-600">Can last up to 1 year, may become permanent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enforcement Section */}
        <div id="enforcement" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-red-600" />
            Enforcement & Violations
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">If Order is Violated</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-3">IMMEDIATE ACTIONS:</p>
                <ol className="space-y-2 text-red-700 list-decimal list-inside">
                  <li><strong>Call 911</strong> if in immediate danger</li>
                  <li><strong>Document the violation</strong> - Photos, screenshots, recordings</li>
                  <li><strong>Call police</strong> for non-emergency violations</li>
                  <li><strong>Get police report number</strong> for your records</li>
                  <li><strong>File contempt motion</strong> with court</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Police Response:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Mandatory arrest for protection order violations</li>
                    <li>• Don't need to see violation occur</li>
                    <li>• Can arrest based on your complaint</li>
                    <li>• Must have certified copy of order</li>
                    <li>• Can enforce 24/7</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Court Penalties:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Contempt of court charges</li>
                    <li>• Jail time up to 6 months</li>
                    <li>• Fines up to $2,500</li>
                    <li>• Extended protection orders</li>
                    <li>• Additional restrictions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">How to Ensure Enforcement</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Give Copies To:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• All local police departments</li>
                    <li>• Your workplace security</li>
                    <li>• Children's schools/daycare</li>
                    <li>• Family members who might be contacted</li>
                    <li>• Your attorney (if you have one)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">Keep With You:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Certified copy at all times</li>
                    <li>• Photo on your phone</li>
                    <li>• Copy in your car</li>
                    <li>• Copy at work</li>
                    <li>• Give copy to babysitters</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Document Everything:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Keep violation diary with dates/times</li>
                    <li>• Save all messages/calls</li>
                    <li>• Take photos of any contact/damage</li>
                    <li>• Get witness contact information</li>
                    <li>• Keep all police report numbers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Common Enforcement Problems</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Police May Not Act If:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• You don't have certified copy</li>
                    <li>• Order is unclear or confusing</li>
                    <li>• Violation is technical/minor</li>
                    <li>• No evidence of contact occurred</li>
                    <li>• Order wasn't properly served</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Solutions:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Always carry certified copies</li>
                    <li>• Ask for supervisor if officer refuses</li>
                    <li>• File contempt motion with court</li>
                    <li>• Contact prosecutor's office</li>
                    <li>• Call domestic violence advocates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div id="common-mistakes" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            Common Mistakes
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Filing Mistakes</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    1. Not Showing True Emergency
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Describing old incidents instead of recent ones</li>
                    <li>• Focusing on inconvenience rather than harm</li>
                    <li>• Not explaining why it can't wait</li>
                    <li>• Vague descriptions of danger</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Be specific about immediate, ongoing threats</p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    2. Insufficient Evidence
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Relying only on your word</li>
                    <li>• No photos, recordings, or documents</li>
                    <li>• Missing witness information</li>
                    <li>• No police reports or medical records</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Bring all available documentation</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    3. Wrong Legal Standard
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Asking for emergency relief for non-emergencies</li>
                    <li>• Not understanding "irreparable harm" requirement</li>
                    <li>• Confusing emergency with expedited</li>
                    <li>• Misunderstanding burden of proof</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Understand emergency legal standards first</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">After Order is Granted</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    4. Poor Service/Notice
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Delaying service to other party</li>
                    <li>• Improper service methods</li>
                    <li>• Not filing proof of service</li>
                    <li>• Serving wrong person</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Serve immediately and properly</p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    5. Not Preparing for Follow-Up
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Assuming emergency order will continue automatically</li>
                    <li>• Not gathering additional evidence</li>
                    <li>• Missing follow-up hearing</li>
                    <li>• Not preparing for other party's response</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Treat emergency order as first step, not final solution</p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-4">
                  <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    6. Violating Your Own Order
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Contacting other party when order says no contact</li>
                    <li>• Allowing violations "just this once"</li>
                    <li>• Not reporting violations</li>
                    <li>• Confusing about what order actually says</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-sm mt-2">Fix: Follow ALL terms of order exactly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Help Section */}
        <div id="get-help" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            Get Help
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-red-700">Emergency Resources</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-800">Immediate Danger:</p>
                  <p className="text-red-700">Call 911</p>
                </div>
                <div>
                  <p className="font-semibold">Domestic Violence Hotline:</p>
                  <p>1-800-799-7233 (24/7)</p>
                </div>
                <div>
                  <p className="font-semibold">Crisis Text Line:</p>
                  <p>Text HOME to 741741</p>
                </div>
                <div>
                  <p className="font-semibold">Local DV Shelters:</p>
                  <Link href="https://www.azdomesticviolence.org" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    azdomesticviolence.org
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Court Help</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Court Self-Help Centers:</p>
                  <Link href="https://www.azcourts.gov/selfservicecenter" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 inline mr-1" />
                    Find Location
                  </Link>
                </div>
                <div>
                  <p className="font-semibold">Emergency Forms:</p>
                  <p>Available at all court clerks</p>
                </div>
                <div>
                  <p className="font-semibold">Protective Order Help:</p>
                  <p>Free assistance at courts</p>
                </div>
                <div>
                  <p className="font-semibold">Interpreter Services:</p>
                  <p>Available for emergency hearings</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-700">Legal Assistance</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Legal Aid:</p>
                  <Link href="https://www.azlawhelp.org" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    azlawhelp.org
                  </Link>
                </div>
                <div>
                  <p className="font-semibold">Emergency Attorney:</p>
                  <Link href="https://www.azbar.org/FindLawyer" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    State Bar Referral
                  </Link>
                </div>
                <div>
                  <p className="font-semibold">Pro Bono Programs:</p>
                  <p>Emergency assistance available</p>
                </div>
                <div>
                  <p className="font-semibold">Victim Advocates:</p>
                  <p>Free help with court process</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-yellow-800 mb-2">Safety Planning</p>
                <p className="text-yellow-700 text-sm">
                  If you're in an abusive relationship, work with domestic violence advocates to create a safety plan. 
                  Know where to go, what to take, and how to leave safely. Emergency orders are one tool, but comprehensive 
                  safety planning is essential.
                </p>
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
            <Link href="/get-protection" className="text-blue-600 hover:text-blue-800 hover:underline">• Protection Orders - Complete guide</Link>
            <Link href="/procedures/court-procedures" className="text-blue-600 hover:text-blue-800 hover:underline">• Court Procedures - Filing basics</Link>
            <Link href="/emergency-help" className="text-blue-600 hover:text-blue-800 hover:underline">• Emergency Help - Immediate assistance</Link>
            <Link href="/child-custody" className="text-blue-600 hover:text-blue-800 hover:underline">• Child Custody - Emergency custody orders</Link>
          </div>
        </div>

        {/* Final Critical Reminder */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-3">🚨 Remember</h2>
              <div className="space-y-2 text-red-800">
                <p><strong>Emergency orders are powerful legal tools</strong> - use them only for true emergencies.</p>
                <p><strong>Your safety comes first</strong> - don't hesitate to seek help when truly needed.</p>
                <p><strong>Documentation is crucial</strong> - courts need evidence, not just stories.</p>
                <p><strong>Follow all order terms exactly</strong> - violations can hurt your case.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <Link href="/procedures/court-procedures" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            ← Court Procedures
          </Link>
          <Link href="/get-protection" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            Protection Orders →
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p><em>Last updated: January 30, 2024</em></p>
        </div>
      </div>
    </div>
  );
}