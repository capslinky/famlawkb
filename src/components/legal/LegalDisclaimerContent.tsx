/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Scale, Shield, BookOpen, ExternalLink, Info, AlertCircle, Gavel, Mail, Globe, CheckCircle, XCircle, HelpCircle, Users, Building } from 'lucide-react';
import Link from 'next/link';

export default function LegalDisclaimerContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Legal Disclaimer</h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Important legal disclaimers and limitations regarding the use of this website and its content
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Critical Notice */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-3">⚠️ Critical Notice</h2>
              <div className="space-y-3 text-red-800">
                <p><strong>THIS WEBSITE DOES NOT PROVIDE LEGAL ADVICE.</strong> The information contained on this website is for general informational purposes only and is not intended as legal advice for any particular situation.</p>
                <p><strong>NO ATTORNEY-CLIENT RELATIONSHIP</strong> is created by using this website or any information contained herein.</p>
                <p><strong>SEEK PROFESSIONAL LEGAL COUNSEL</strong> before making any legal decisions affecting your rights.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-600" />
            In This Disclaimer
          </h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <Link href="#no-legal-advice" className="text-blue-600 hover:text-blue-800 hover:underline">• No Legal Advice</Link>
            <Link href="#no-attorney-client" className="text-blue-600 hover:text-blue-800 hover:underline">• No Attorney-Client Relationship</Link>
            <Link href="#information-accuracy" className="text-blue-600 hover:text-blue-800 hover:underline">• Information Accuracy</Link>
            <Link href="#jurisdictional-limitations" className="text-blue-600 hover:text-blue-800 hover:underline">• Jurisdictional Limitations</Link>
            <Link href="#external-links" className="text-blue-600 hover:text-blue-800 hover:underline">• External Links</Link>
            <Link href="#limitation-liability" className="text-blue-600 hover:text-blue-800 hover:underline">• Limitation of Liability</Link>
            <Link href="#professional-responsibility" className="text-blue-600 hover:text-blue-800 hover:underline">• Professional Responsibility</Link>
            <Link href="#when-seek-help" className="text-blue-600 hover:text-blue-800 hover:underline">• When to Seek Help</Link>
          </div>
        </div>

        {/* No Legal Advice Section */}
        <div id="no-legal-advice" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-red-600" />
            No Legal Advice
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-red-700">This Website Is Not Legal Advice</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                The information provided on this website is for <strong>general educational and informational purposes only</strong>. 
                It is not intended to constitute legal advice for any specific situation or individual circumstances.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">What This Means:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-700">
                    <XCircle className="h-4 w-4" />
                    <span>This website cannot replace personalized legal counsel</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <XCircle className="h-4 w-4" />
                    <span>Information here may not apply to your specific situation</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <XCircle className="h-4 w-4" />
                    <span>Laws change frequently and may not be current</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <XCircle className="h-4 w-4" />
                    <span>Court procedures vary by county and judge</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Why Legal Advice Requires an Attorney:</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• <strong>Individual Analysis:</strong> Your situation has unique facts requiring personalized analysis</li>
                  <li>• <strong>Current Law:</strong> Attorneys stay current on law changes and court interpretations</li>
                  <li>• <strong>Strategy Development:</strong> Legal strategy requires professional judgment and experience</li>
                  <li>• <strong>Risk Assessment:</strong> Understanding consequences of different legal approaches</li>
                  <li>• <strong>Court Experience:</strong> Practical knowledge of how courts and judges operate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Information vs. Legal Advice</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What This Website Provides:
                </h4>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• General information about Arizona family law</li>
                  <li>• Explanations of legal processes and procedures</li>
                  <li>• Common forms and their purposes</li>
                  <li>• Court rules and filing requirements</li>
                  <li>• Resources for finding legal help</li>
                  <li>• Educational content about legal concepts</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  What This Website Cannot Provide:
                </h4>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Advice specific to your case</li>
                  <li>• Legal strategy recommendations</li>
                  <li>• Analysis of your documents</li>
                  <li>• Predictions about case outcomes</li>
                  <li>• Representation in court</li>
                  <li>• Legal opinions on your situation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* No Attorney-Client Relationship Section */}
        <div id="no-attorney-client" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-blue-600" />
            No Attorney-Client Relationship
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">No Professional Relationship Created</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Using this website does not create an attorney-client relationship</strong> between you and any attorney, law firm, or the creators of this website.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">What This Means:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-800">No Confidentiality Protection</p>
                      <p className="text-sm text-yellow-700">Information you provide or communications through this website are not protected by attorney-client privilege.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-800">No Duty of Representation</p>
                      <p className="text-sm text-yellow-700">No attorney has a duty to represent your interests or protect your rights based on your use of this website.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-800">No Professional Obligations</p>
                      <p className="text-sm text-yellow-700">Professional rules of conduct governing attorneys do not apply to information on this website.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">How Attorney-Client Relationships Are Actually Created:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Formal retainer agreement signed by both parties</li>
                  <li>• Payment of fees or costs to an attorney</li>
                  <li>• Express agreement to represent you in a specific matter</li>
                  <li>• Direct consultation with an attorney about your case</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Information Accuracy Section */}
        <div id="information-accuracy" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Info className="h-8 w-8 text-green-600" />
            Information Accuracy
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Best Efforts, No Guarantees</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  While we strive to provide accurate and current information, <strong>we make no warranties or guarantees</strong> about the accuracy, completeness, or reliability of the information on this website.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">What We Do:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Research current Arizona law</li>
                      <li>• Review official court resources</li>
                      <li>• Update content regularly</li>
                      <li>• Cite authoritative sources</li>
                      <li>• Focus on practical guidance</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Limitations:</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Laws change between updates</li>
                      <li>• Court interpretations evolve</li>
                      <li>• Local rules vary by county</li>
                      <li>• Procedures may differ by judge</li>
                      <li>• Forms are updated periodically</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">User Responsibility</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 mb-3"><strong>You are responsible for:</strong></p>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• <strong>Verifying Information:</strong> Check current law and local rules before relying on any information</li>
                  <li>• <strong>Seeking Professional Help:</strong> Consult with attorneys for legal advice and strategy</li>
                  <li>• <strong>Understanding Limitations:</strong> Recognizing that general information may not apply to your situation</li>
                  <li>• <strong>Making Informed Decisions:</strong> Using this information as one resource among many</li>
                  <li>• <strong>Staying Current:</strong> Checking for updates to laws, rules, and procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Sources and Citations</h3>
              <div className="space-y-3">
                <p className="text-gray-700">Information on this website is derived from:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Primary Sources:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Arizona Revised Statutes (A.R.S.)</li>
                      <li>• Arizona Rules of Family Law Procedure</li>
                      <li>• Arizona Court Rules</li>
                      <li>• Published court decisions</li>
                      <li>• Arizona Supreme Court orders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Official Resources:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Arizona Judicial Branch website</li>
                      <li>• County superior court websites</li>
                      <li>• Arizona State Bar resources</li>
                      <li>• Court self-help centers</li>
                      <li>• Official court forms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jurisdictional Limitations Section */}
        <div id="jurisdictional-limitations" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-purple-600" />
            Jurisdictional Limitations
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Arizona Law Only</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 mb-3"><strong>This website focuses exclusively on Arizona family law.</strong></p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Arizona state statutes and court rules</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Arizona Superior Court procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Arizona county-specific requirements</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Not Applicable Outside Arizona:</h4>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Other states have different laws and procedures</li>
                  <li>• Federal law may apply differently</li>
                  <li>• Tribal courts operate under different rules</li>
                  <li>• Military divorces have additional requirements</li>
                  <li>• International cases require specialized expertise</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">County Variations</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Even within Arizona, <strong>local rules and procedures vary significantly by county</strong>. 
                What works in one county may not work in another.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Common Variations:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Filing procedures and requirements</li>
                    <li>• Court calendaring systems</li>
                    <li>• Local court rules</li>
                    <li>• Form requirements</li>
                    <li>• Electronic filing systems</li>
                    <li>• Self-help center services</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Always Check Locally:</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Your county's superior court website</li>
                    <li>• Local court rules and procedures</li>
                    <li>• Current forms and instructions</li>
                    <li>• Filing fee schedules</li>
                    <li>• Self-help center resources</li>
                    <li>• Electronic filing requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* External Links Section */}
        <div id="external-links" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ExternalLink className="h-8 w-8 text-indigo-600" />
            External Links and Resources
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Third-Party Websites</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                This website contains links to external websites for your convenience and reference. 
                <strong>We do not control or endorse these external sites</strong> and are not responsible for their content.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">External Link Disclaimer:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-yellow-700"><strong>No Control:</strong> We cannot control the content, accuracy, or availability of external websites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-yellow-700"><strong>No Endorsement:</strong> Links do not constitute endorsement of products, services, or information</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-yellow-700"><strong>Your Risk:</strong> You access external sites at your own risk and subject to their terms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-yellow-700"><strong>Currency:</strong> External information may be outdated or incorrect</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Recommended Verification:</h4>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Verify information from multiple authoritative sources</li>
                  <li>• Check publication dates and currency</li>
                  <li>• Confirm applicability to your jurisdiction</li>
                  <li>• Review terms of use for external websites</li>
                  <li>• Consider the source's expertise and reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Limitation of Liability Section */}
        <div id="limitation-liability" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-gray-600" />
            Limitation of Liability
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Use at Your Own Risk</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">Important Legal Notice:</h4>
                <p className="text-red-700 text-sm mb-3">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE CREATORS AND CONTRIBUTORS OF THIS WEBSITE 
                  DISCLAIM ALL LIABILITY FOR ANY DAMAGES ARISING FROM YOUR USE OF THIS WEBSITE OR RELIANCE ON ITS CONTENT.</strong>
                </p>
                <p className="text-red-700 text-sm">
                  This includes, but is not limited to, direct, indirect, incidental, consequential, or punitive damages, 
                  even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Types of Potential Damages Disclaimed:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Legal Consequences:</strong> Adverse court rulings or legal outcomes</li>
                      <li>• <strong>Financial Losses:</strong> Costs, fees, or monetary damages</li>
                      <li>• <strong>Missed Deadlines:</strong> Failure to meet court deadlines</li>
                      <li>• <strong>Procedural Errors:</strong> Incorrect filing or service</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Strategic Mistakes:</strong> Poor legal strategy decisions</li>
                      <li>• <strong>Opportunity Costs:</strong> Lost settlement opportunities</li>
                      <li>• <strong>Emotional Distress:</strong> Stress from legal proceedings</li>
                      <li>• <strong>Third-Party Claims:</strong> Claims by other parties</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Your Responsibility:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Seek professional legal advice for your specific situation</li>
                  <li>• Verify all information before acting upon it</li>
                  <li>• Understand the risks of self-representation</li>
                  <li>• Make informed decisions about your legal matters</li>
                  <li>• Consider the potential consequences of your actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Responsibility Section */}
        <div id="professional-responsibility" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Gavel className="h-8 w-8 text-purple-600" />
            Professional Responsibility
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Compliance with Arizona Bar Rules</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  This website is designed to comply with Arizona State Bar rules regarding the provision of legal information 
                  to the public, including rules about unauthorized practice of law.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">What We Don't Do (To Avoid Unauthorized Practice):</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-1 text-sm text-purple-700">
                        <li>• Provide legal advice for specific cases</li>
                        <li>• Analyze individual legal documents</li>
                        <li>• Recommend specific legal strategies</li>
                        <li>• Make predictions about case outcomes</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-sm text-purple-700">
                        <li>• Draft legal documents for individuals</li>
                        <li>• Represent parties in legal proceedings</li>
                        <li>• Communicate with opposing parties</li>
                        <li>• Provide attorney work product</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">What We Do Provide (Permissible Legal Information):</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• General information about Arizona law</li>
                        <li>• Explanations of legal procedures</li>
                        <li>• Descriptions of court processes</li>
                        <li>• Links to official resources</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• Educational content about legal concepts</li>
                        <li>• Information about available options</li>
                        <li>• Resources for finding legal help</li>
                        <li>• General guidance on procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Reporting Concerns</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  If you believe any content on this website constitutes unauthorized practice of law or violates 
                  professional responsibility rules, please report your concerns.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Contact Information:</h4>
                  <div className="space-y-2 text-sm text-orange-700">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span><strong>Arizona State Bar:</strong> (602) 252-4804</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span><strong>Ethics Hotline:</strong> ethics@azbar.org</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span><strong>Website:</strong> azbar.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Seek Help Section */}
        <div id="when-seek-help" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-green-600" />
            When to Seek Professional Help
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">You Should Consult an Attorney If:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Complex or High-Stakes Cases:</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Significant assets or debts</li>
                      <li>• Business ownership issues</li>
                      <li>• Complex custody disputes</li>
                      <li>• Domestic violence involved</li>
                      <li>• Mental health concerns</li>
                      <li>• Substance abuse issues</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Legal Challenges:</h4>
                    <ul className="space-y-1 text-sm text-orange-700">
                      <li>• Other party has an attorney</li>
                      <li>• Disagreement about facts or law</li>
                      <li>• Court orders being violated</li>
                      <li>• Appeals or complex motions</li>
                      <li>• Constitutional issues</li>
                      <li>• Interstate jurisdictional issues</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Time-Sensitive Situations:</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Emergency court orders needed</li>
                      <li>• Approaching deadlines</li>
                      <li>• Immediate safety concerns</li>
                      <li>• Asset protection needed</li>
                      <li>• Default judgments threatened</li>
                      <li>• Contempt proceedings</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Personal Limitations:</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Feeling overwhelmed</li>
                      <li>• Limited English proficiency</li>
                      <li>• Disability accommodations needed</li>
                      <li>• Lack of legal knowledge</li>
                      <li>• Emotional difficulties</li>
                      <li>• Geographic constraints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Types of Legal Help Available</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Full Representation</h4>
                  <ul className="space-y-1 text-xs text-blue-700">
                    <li>• Attorney handles entire case</li>
                    <li>• All court appearances</li>
                    <li>• Complete legal strategy</li>
                    <li>• Document preparation</li>
                    <li>• Negotiations</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Limited Scope</h4>
                  <ul className="space-y-1 text-xs text-green-700">
                    <li>• Specific legal tasks only</li>
                    <li>• Document review</li>
                    <li>• Legal advice sessions</li>
                    <li>• Coaching for court</li>
                    <li>• Settlement negotiations</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Legal Clinics</h4>
                  <ul className="space-y-1 text-xs text-purple-700">
                    <li>• Free or low-cost advice</li>
                    <li>• Brief consultations</li>
                    <li>• Document assistance</li>
                    <li>• Referral services</li>
                    <li>• Group workshops</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Finding Legal Help</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Free and Low-Cost Options:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>Community Legal Services:</strong>{' '}
                      <Link href="https://www.clsaz.org" className="text-blue-600 hover:underline" target="_blank">
                        clsaz.org
                      </Link>
                    </li>
                    <li>
                      <strong>Legal Aid:</strong>{' '}
                      <Link href="https://www.azlawhelp.org" className="text-blue-600 hover:underline" target="_blank">
                        azlawhelp.org
                      </Link>
                    </li>
                    <li>
                      <strong>Court Self-Help Centers:</strong>{' '}
                      <Link href="https://www.azcourts.gov/selfservicecenter" className="text-blue-600 hover:underline" target="_blank">
                        azcourts.gov/selfservicecenter
                      </Link>
                    </li>
                    <li>
                      <strong>Modest Means Program:</strong> Reduced-fee attorneys
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">Attorney Referral Services:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>State Bar Referral:</strong>{' '}
                      <Link href="https://www.azbar.org/FindLawyer" className="text-blue-600 hover:underline" target="_blank">
                        azbar.org/FindLawyer
                      </Link>
                    </li>
                    <li>
                      <strong>Phone:</strong> (602) 252-4804
                    </li>
                    <li>
                      <strong>Maricopa County Bar:</strong> (602) 257-4200
                    </li>
                    <li>
                      <strong>Pima County Bar:</strong> (520) 623-4625
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Updates Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mail className="h-6 w-6 text-blue-600" />
            Updates and Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Content Updates</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>We strive to keep information current, but laws and procedures change frequently.</p>
                <p><strong>Last Major Update:</strong> January 2024</p>
                <p><strong>Review Schedule:</strong> Quarterly</p>
                <p>Always verify current information with official sources before taking action.</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-700">Reporting Issues</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>If you find outdated information, broken links, or other issues:</p>
                <ul className="space-y-1">
                  <li>• Check with official court websites first</li>
                  <li>• Verify with current statutes or rules</li>
                  <li>• Consider consulting with an attorney</li>
                  <li>• Report concerns to appropriate authorities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Warning */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-3">⚠️ Final Reminder</h2>
              <div className="space-y-3 text-red-800">
                <p><strong>YOUR LEGAL RIGHTS ARE IMPORTANT.</strong> Don't risk them by relying solely on general information.</p>
                <p><strong>WHEN IN DOUBT, SEEK PROFESSIONAL HELP.</strong> The cost of a consultation is usually much less than the cost of making mistakes.</p>
                <p><strong>TIME IS OFTEN CRITICAL</strong> in legal matters. Don't delay in seeking appropriate help.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="text-center text-sm text-gray-500 mt-12">
          <p className="mb-4">
            By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
          </p>
          <p><em>Last updated: January 30, 2024</em></p>
        </div>
      </div>
    </div>
  );
}