/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Users, AlertCircle, Calendar, Gavel, Shield, Target, Info, ArrowRight, User, Search, Eye, Lock, Folder } from 'lucide-react';
import Link from 'next/link';

export default function DisclosuresContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-orange-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">📋 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Arizona family courts require both parties to exchange detailed financial and case information through "Initial Disclosures." This mandatory process ensures transparency and helps courts make informed decisions about property, support, and custody.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span><strong>Deadline:</strong> 40 days after service of response</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Cost:</strong> Free (but may need document copies)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who Must Comply:</strong> Both parties in family law cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span><strong>Key Point:</strong> Failure to disclose can result in sanctions</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Warning */}
      <Card className="border-l-4 border-l-red-600 bg-red-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-800">
            <AlertTriangle className="w-5 h-5" />
            🚨 DISCLOSURE REQUIREMENTS ARE MANDATORY
          </h2>
          <div className="space-y-3 text-red-800">
            <p className="font-semibold">Arizona Rule of Family Law Procedure 49 requires complete financial disclosure</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Sanctions for non-compliance:</strong> Contempt of court, attorney fees, adverse inferences</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Ongoing duty:</strong> Must update disclosures if circumstances change</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Penalties for hiding assets:</strong> May forfeit claim to undisclosed property</span>
              </li>
            </ul>
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
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Complete honesty required:</strong> Disclose everything, even if unfavorable</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Gather documents early:</strong> Start collecting records immediately</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Three-year lookback:</strong> Most financial records need 3 years history</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Reciprocal process:</strong> Both parties exchange the same information</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Organize methodically:</strong> Label and index all documents clearly</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Continuing obligation:</strong> Update if anything changes significantly</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline and Deadlines */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            ⏰ Timeline and Deadlines
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Standard Disclosure Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Within 40 days of service of Response</p>
                    <p className="text-sm text-gray-600">Initial disclosures must be exchanged</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Within 40 days of disclosure exchange</p>
                    <p className="text-sm text-gray-600">Parties may request additional documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ongoing until case resolution</p>
                    <p className="text-sm text-gray-600">Duty to supplement and update disclosures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">What Triggers Disclosure Duty</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Divorce/dissolution cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Legal separation cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Child support modification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Spousal maintenance cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Property division disputes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">Exceptions and Modifications</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Court may modify deadlines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Parties may stipulate to extensions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Limited income cases may have reduced requirements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Emergency cases may expedite process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Required Documents and Information */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Folder className="w-5 h-5 text-purple-600" />
            📁 Required Documents and Information
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Financial Affidavit (Required for All Cases)</h3>
              <p className="text-sm text-gray-700 mb-3">Complete Arizona Supreme Court approved form detailing income, expenses, assets, and debts</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1">
                  <li>• Monthly gross income from all sources</li>
                  <li>• Detailed monthly expenses</li>
                  <li>• All assets and their current values</li>
                  <li>• All debts and monthly payments</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Tax filing status and exemptions</li>
                  <li>• Health insurance costs</li>
                  <li>• Child care expenses</li>
                  <li>• Other court-ordered support payments</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Income Documentation (3 years)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Federal and state tax returns with all schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>W-2s, 1099s, and other income statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pay stubs for last 12 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Profit and loss statements for businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Social Security, disability, or pension statements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Asset Documentation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bank statements (all accounts, 12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Investment account statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retirement account statements (401k, IRA, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real estate deeds and current appraisals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vehicle titles and current values</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Debt and Liability Documentation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Credit card statements (12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Loan documents and payment records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Mortgage statements and loan documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Medical bills and other major debts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Credit reports from all three bureaus</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Business and Professional Practice</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Business tax returns (3 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Financial statements and balance sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Partnership or corporate agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Professional licenses and credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Buy-sell agreements and valuations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Considerations for High-Asset Cases */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            💰 Special Considerations for High-Asset Cases
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Additional Documentation Often Required</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Professional business valuations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Real estate appraisals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Stock option agreements and schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Trust documents and statements</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Art, jewelry, and collectible appraisals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Life insurance policies and cash values</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Foreign bank account statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Cryptocurrency holdings and transactions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">⚠️ Complex Asset Disclosure Challenges</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Closely held businesses:</strong> May require forensic accounting to determine value</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Professional practices:</strong> Goodwill valuation can be complex and contested</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Restricted stock/options:</strong> Vesting schedules affect current vs. future value</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>International assets:</strong> May require foreign legal assistance to properly disclose</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Organization and Exchange Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            📋 Document Organization and Exchange Process
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Step-by-Step Organization Process</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <span className="text-indigo-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Create Master Document List</p>
                    <p className="text-sm text-gray-600">Inventory all documents by category with brief descriptions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <span className="text-indigo-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Label and Number Each Document</p>
                    <p className="text-sm text-gray-600">Use consistent labeling system (e.g., "Bank-001", "Tax-001")</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <span className="text-indigo-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Make Clean, Legible Copies</p>
                    <p className="text-sm text-gray-600">Original documents stay with you; provide copies to other party</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <span className="text-indigo-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Prepare Certificate of Service</p>
                    <p className="text-sm text-gray-600">Document how and when you provided disclosures to other party</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Best Practices for Organization</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Use chronological order within categories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Include index/table of contents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Keep electronic copies as backup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Use tabs or dividers for categories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Include transmittal letter explaining contents</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Common Organization Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Providing illegible or partial copies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Missing pages or incomplete documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>No organization or indexing system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Mixing different types of documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Failing to update when circumstances change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Discovery Requests and Additional Information */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-purple-600" />
            🔍 Discovery Requests and Additional Information
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Types of Discovery Available After Initial Disclosures</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Interrogatories:</strong> Written questions requiring sworn answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Requests for Production:</strong> Specific documents or records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Requests for Admission:</strong> Facts to be admitted or denied</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Depositions:</strong> Sworn testimony outside of court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Subpoenas:</strong> Compelling third parties to provide records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Expert Witnesses:</strong> Professional valuations and opinions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">When Additional Discovery is Needed</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Complex business valuations</li>
                  <li>• Suspicion of hidden assets</li>
                  <li>• Incomplete or questionable disclosures</li>
                  <li>• Professional practice valuations</li>
                  <li>• Tracing separate vs. community property</li>
                  <li>• Determining earning capacity</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">Discovery Limitations and Costs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Each side limited to 40 interrogatories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Discovery costs can add up quickly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Court approval required for extensive discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Depositions require court reporter fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Confidentiality */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-600" />
            🔒 Privacy and Confidentiality
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Protecting Sensitive Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Social Security Numbers:</strong> Redact or use only last 4 digits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Account Numbers:</strong> May be partially redacted in some cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Children's Information:</strong> Limited disclosure for their protection</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Medical Records:</strong> Only relevant portions typically required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Trade Secrets:</strong> May be subject to protective orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Domestic Violence:</strong> Special protections for victim addresses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Protective Orders and Confidentiality Agreements</h3>
              <p className="text-sm text-gray-700 mb-3">When sensitive business or personal information must be disclosed, parties can request:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Court-ordered protective orders limiting use of information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Confidentiality agreements between parties</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Sealed court filings for highly sensitive documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Attorney's eyes only designations for privileged information</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Consequences of Non-Compliance */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-red-600" />
            ⚖️ Consequences of Non-Compliance
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Court Sanctions for Disclosure Violations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Monetary sanctions:</strong> Pay other party's attorney fees and costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Adverse inferences:</strong> Court assumes hidden information is unfavorable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Contempt of court:</strong> Fines or even jail time for willful violations</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Striking pleadings:</strong> Removal of claims or defenses from case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Default judgment:</strong> Automatic loss on undisclosed issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Asset forfeiture:</strong> Loss of claim to hidden assets</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Real-World Consequences</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Case Example:</strong> Party hid $500,000 in assets, lost entire claim to those assets plus paid $50,000 in attorney fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Case Example:</strong> Business owner failed to provide complete records, court valued business at highest expert estimate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Case Example:</strong> Parent understated income, ordered to pay support based on earning capacity rather than reported income</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Working with Professionals */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            👥 Working with Professionals
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">When to Hire Help</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Complex business ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>High-value asset portfolio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Suspicion of hidden assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Professional practice valuations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>International assets or income</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Types of Professional Help</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Forensic Accountants:</strong> Trace assets and analyze financial records</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Business Appraisers:</strong> Value closely held businesses and practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Document Review Services:</strong> Organize and index large document productions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Legal Assistants:</strong> Help organize and prepare disclosure documents</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-600" />
            🎯 Next Steps After Disclosure Exchange
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Additional Discovery</h3>
                <p className="text-sm text-gray-600">Request specific documents or information</p>
                <p className="text-blue-600 text-xs mt-2">If gaps or questions remain</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Mediation</h3>
                <p className="text-sm text-gray-600">Negotiate settlement with full information</p>
                <Link href="/modules/mediation" className="text-green-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Gavel className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Trial Preparation</h3>
                <p className="text-sm text-gray-600">Prepare evidence and witnesses</p>
                <Link href="/modules/trial-prep" className="text-purple-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Disclosure is an ongoing process. You must supplement your disclosures if your 
                financial situation changes significantly during the case. Keep organized records and consult with an attorney 
                for complex disclosure issues.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}