/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, Scale, Users, Home, AlertCircle, ExternalLink, TrendingUp, Building, Shield } from 'lucide-react';

export default function PropertyDivisionContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🔍 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Arizona is a community property state, meaning most assets and debts acquired during marriage belong equally to both spouses. The court divides property equitably (fairly), which usually means 50/50 but can vary based on circumstances.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who This Affects:</strong> Anyone divorcing in Arizona with assets/debts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-green-600" />
                  <span><strong>Key Principle:</strong> Community property presumption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span><strong>Critical Period:</strong> Date of marriage to service of divorce</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Title/name doesn't determine ownership</span>
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
                <span className="text-sm">Property acquired during marriage is presumed community (50/50)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Separate property remains with original owner</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Debts incurred during marriage are also divided</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">"Equitable" means fair, not always equal</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Hiding assets has serious consequences</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Mixed assets require careful tracing</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Some property can't be divided and must be sold</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Professional appraisals often required</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community vs Separate Property */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-600" />
            🏘️ Community vs. Separate Property
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Arizona Revised Statutes § 25-211 & § 25-213</h3>
                  <p className="text-purple-700 text-sm">
                    Arizona law creates a presumption that all property acquired during marriage is community property, regardless of whose name is on the title or account.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Community Property */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Community Property (Presumed Community)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Always Community:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Income earned during marriage</li>
                        <li>• Property bought during marriage</li>
                        <li>• Retirement benefits earned during marriage</li>
                        <li>• Business growth during marriage</li>
                        <li>• Investment gains during marriage</li>
                        <li>• Debt incurred during marriage</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <h4 className="font-medium text-green-700 mb-1">Critical Timing:</h4>
                      <ul className="space-y-1 text-gray-700 text-xs">
                        <li>• <strong>Starts:</strong> Date of marriage</li>
                        <li>• <strong>Ends:</strong> Date of service of divorce papers</li>
                        <li>• <strong>Not:</strong> Separation date or filing date</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Separate Property */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Separate Property (Remains Separate)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Always Separate:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Property owned before marriage</li>
                        <li>• Inheritances (even during marriage)</li>
                        <li>• Gifts to one spouse only</li>
                        <li>• Personal injury awards (pain/suffering portion)</li>
                        <li>• Property designated in valid prenuptial agreement</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-medium text-blue-700 mb-1">Burden of Proof:</h4>
                      <p className="text-gray-700 text-xs">
                        Must prove with <strong>clear and convincing evidence</strong> that property is separate - higher standard than typical civil cases.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mixed Property */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  🔄 Mixed Property (Commingling)
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Common Commingling Scenarios:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Separate money deposited into joint account</li>
                      <li>• Inheritance used to improve marital home</li>
                      <li>• Premarital savings mixed with marital funds</li>
                      <li>• Separate business expanded with marital labor/funds</li>
                      <li>• Retirement account with pre- and post-marriage contributions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Tracing Requirements:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Complete bank statements</li>
                      <li>• Detailed transaction history</li>
                      <li>• Clear documentation trail</li>
                      <li>• Professional accounting analysis</li>
                      <li>• Expert witness testimony</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-yellow-100 rounded">
                  <p className="text-yellow-800 text-xs">
                    <strong>Important:</strong> If separate property becomes too mixed to trace, it may become community property by law.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* What Gets Divided */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-indigo-600" />
            📦 What Gets Divided
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Real Estate */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">🏠 Real Estate</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Marital Home:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Current market value (professional appraisal)</li>
                        <li>• Minus outstanding mortgage balance</li>
                        <li>• Equals equity to be divided</li>
                        <li>• Options: Sell, buyout, or co-own temporarily</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Other Properties:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Rental properties and income</li>
                        <li>• Vacation homes and timeshares</li>
                        <li>• Undeveloped land</li>
                        <li>• Commercial real estate</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Assets */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3">💰 Financial Assets</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Bank Accounts:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Checking and savings accounts</li>
                        <li>• Certificates of deposit</li>
                        <li>• Money market accounts</li>
                        <li>• Joint and individual accounts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Investments:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Stocks, bonds, mutual funds</li>
                        <li>• Brokerage accounts</li>
                        <li>• Cryptocurrency holdings</li>
                        <li>• Investment partnerships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Retirement Assets */}
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-700 mb-3">🏦 Retirement Assets</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-purple-600 mb-1">Employer Plans:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• 401(k) and 403(b) plans</li>
                        <li>• Pension plans (defined benefit)</li>
                        <li>• Government employee retirement systems</li>
                        <li>• Military retirement benefits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-600 mb-1">Individual Accounts:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Traditional and Roth IRAs</li>
                        <li>• SEP-IRAs and Simple IRAs</li>
                        <li>• Annuities</li>
                        <li>• Deferred compensation plans</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business & Personal Property */}
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-orange-700 mb-3">🏢 Business & Personal Property</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-orange-600 mb-1">Business Interests:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Sole proprietorships</li>
                        <li>• Partnership interests</li>
                        <li>• Corporate stock (closely held)</li>
                        <li>• Professional practices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-600 mb-1">Personal Property:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Vehicles, boats, RVs</li>
                        <li>• Jewelry and collectibles</li>
                        <li>• Art and antiques</li>
                        <li>• Furniture and household items</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special Considerations */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Special Valuation Considerations</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Professional Appraisals Required:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Real estate</li>
                      <li>• Business interests</li>
                      <li>• Valuable personal property</li>
                      <li>• Collectibles and art</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Tax Implications:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Capital gains consequences</li>
                      <li>• Retirement account penalties</li>
                      <li>• Depreciation recapture</li>
                      <li>• State tax differences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Liquidity Issues:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Can't physically divide some assets</li>
                      <li>• Forced sale may be required</li>
                      <li>• Buyout arrangements needed</li>
                      <li>• Timeline for asset conversion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Division Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            🔄 The Division Process
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Timeline: 4-12 Months</h3>
                  <p className="text-green-700 text-sm">
                    Property division can be the most time-consuming part of divorce due to valuation, appraisals, and complex asset tracing requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">📅 Step-by-Step Division Process</h3>
              
              {[
                {
                  phase: "Asset Identification & Discovery",
                  items: ["Complete inventory of all assets and debts", "Gather financial statements and records", "Identify separate vs. community property", "Subpoena records if necessary"],
                  timeframe: "Month 1-2",
                  priority: "Critical"
                },
                {
                  phase: "Professional Valuations",
                  items: ["Real estate appraisals", "Business valuations", "Personal property assessments", "Retirement account valuations"],
                  timeframe: "Month 2-4",
                  priority: "High"
                },
                {
                  phase: "Classification Disputes",
                  items: ["Separate property claims", "Commingling analysis", "Tracing of funds", "Expert testimony preparation"],
                  timeframe: "Month 3-6",
                  priority: "High"
                },
                {
                  phase: "Division Negotiation",
                  items: ["Identify division preferences", "Calculate equalizing payments", "Consider tax implications", "Draft settlement agreements"],
                  timeframe: "Month 4-8",
                  priority: "Medium"
                },
                {
                  phase: "Implementation",
                  items: ["Execute property transfers", "Divide financial accounts", "Transfer retirement benefits", "Record deed changes"],
                  timeframe: "Month 6-12",
                  priority: "Medium"
                }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-green-800">{item.phase}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                            item.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.items.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                        <span className="text-xs text-green-600 font-medium mt-2 block">Timeline: {item.timeframe}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debt Division */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-600" />
            💳 Debt Division
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Critical: Both Spouses Remain Liable to Creditors</h3>
                  <p className="text-red-700 text-sm">
                    Even if the court assigns debt to one spouse, creditors can still collect from both. Consider refinancing or other protection strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Community Debts */}
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-orange-700 mb-3">Community Debts (Usually Divided)</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-orange-600 mb-1">Typical Community Debts:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Mortgage on marital home</li>
                        <li>• Credit cards used during marriage</li>
                        <li>• Auto loans for family vehicles</li>
                        <li>• Personal loans for family purposes</li>
                        <li>• Medical bills incurred during marriage</li>
                        <li>• Tax obligations from joint returns</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded">
                      <h4 className="font-medium text-orange-700 mb-1">Division Factors:</h4>
                      <ul className="space-y-1 text-gray-700 text-xs">
                        <li>• Who benefited from the debt</li>
                        <li>• Who has ability to pay</li>
                        <li>• Which spouse keeps related asset</li>
                        <li>• Overall equity in property division</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Separate Debts */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3">Separate Debts (Remain Individual)</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Typical Separate Debts:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Debts incurred before marriage</li>
                        <li>• Student loans (even if during marriage)</li>
                        <li>• Credit cards in one name for personal use</li>
                        <li>• Business debts of separate business</li>
                        <li>• Personal injury claims against one spouse</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-medium text-blue-700 mb-1">Proving Separate Debt:</h4>
                      <ul className="space-y-1 text-gray-700 text-xs">
                        <li>• Show debt incurred before marriage</li>
                        <li>• Demonstrate personal benefit only</li>
                        <li>• Prove no community benefit</li>
                        <li>• Provide clear documentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Debt Protection Strategies */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">🛡️ Debt Protection Strategies</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Refinancing Options:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Remove spouse from mortgage</li>
                      <li>• Refinance auto loans</li>
                      <li>• Transfer credit card balances</li>
                      <li>• Consolidate debts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Legal Protections:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Indemnification clauses</li>
                      <li>• Hold harmless agreements</li>
                      <li>• Contempt of court enforcement</li>
                      <li>• Attorney fee provisions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Monitoring:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Regular credit report checks</li>
                      <li>• Account closure confirmations</li>
                      <li>• Payment verification systems</li>
                      <li>• Alert notifications setup</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Common Questions */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            ❓ Common Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Do I get half of everything acquired during marriage?",
                answer: "Generally yes, but 'equitable' division means fair, not always exactly 50/50. Courts consider factors like waste of community assets, contribution to the marriage, and economic circumstances."
              },
              {
                question: "What if my spouse hid assets or spent money secretly?",
                answer: "Arizona law provides remedies for waste or concealment of community assets. The court can award the innocent spouse a larger share or monetary judgment. Hiding assets can result in perjury charges."
              },
              {
                question: "Can I keep my inheritance if I put it in a joint account?",
                answer: "Possibly, but you'll need to trace the inheritance funds through clear documentation. If the funds become too commingled to separate, they may become community property."
              },
              {
                question: "How is the house divided if we both want to keep it?",
                answer: "Options include: 1) One spouse buys out the other's equity, 2) Sell and divide proceeds, 3) Co-own temporarily with occupancy rights, or 4) Court-ordered sale if no agreement."
              },
              {
                question: "What about debts in only one spouse's name?",
                answer: "If the debt benefited the community (family living expenses, house repairs), it's usually considered community debt regardless of whose name is on it. The key is whether the community benefited."
              },
              {
                question: "How are retirement accounts divided?",
                answer: "Retirement benefits earned during marriage are community property. Division usually requires a Qualified Domestic Relations Order (QDRO) to avoid tax penalties and ensure proper transfer."
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Q: {item.question}</h3>
                  <p className="text-sm text-gray-700">A: {item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ Common Mistakes to Avoid
          </h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Transferring or hiding assets after filing",
                consequence: "Contempt of court, sanctions, larger award to other spouse",
                solution: "Follow preliminary injunction rules, disclose all transfers"
              },
              {
                mistake: "Not gathering complete financial records",
                consequence: "Inability to prove separate property claims, missed assets",
                solution: "Start collecting documents early, use subpoenas if necessary"
              },
              {
                mistake: "Assuming name on title determines ownership",
                consequence: "Incorrect property characterization, poor negotiation position",
                solution: "Understand community property presumption, gather proof of source"
              },
              {
                mistake: "Failing to get professional appraisals",
                consequence: "Inaccurate valuations, unfair division, court rejection",
                solution: "Hire qualified appraisers for significant assets"
              },
              {
                mistake: "Ignoring tax consequences of property division",
                consequence: "Unexpected tax bills, reduced net value of settlement",
                solution: "Consult tax professional, consider after-tax values"
              },
              {
                mistake: "Not addressing debt liability protection",
                consequence: "Continued liability for ex-spouse's assigned debts",
                solution: "Include indemnification clauses, monitor credit reports"
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

      {/* Resources Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-gray-600" />
            📞 Resources & Professional Help
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Court Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter/Forms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Property Division Forms <ExternalLink className="w-3 h-3" />
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
                  <a href="https://www.azcourts.gov/find-a-court" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Find Your Court <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-6">Legal Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.azbar.org/findlawyer" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Find an Attorney <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azlawhelp.org" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Arizona Legal Aid <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Professional Services</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">Real Estate Appraisers:</h4>
                  <p className="text-gray-600">Licensed residential and commercial appraisers for property valuation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Business Valuators:</h4>
                  <p className="text-gray-600">Certified Business Appraisers (CBA) or Accredited Senior Appraisers (ASA)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Forensic Accountants:</h4>
                  <p className="text-gray-600">CPAs specializing in asset tracing and hidden asset discovery</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Tax Professionals:</h4>
                  <p className="text-gray-600">CPAs or Enrolled Agents for tax consequence analysis</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Financial Planners:</h4>
                  <p className="text-gray-600">CFPs specializing in divorce financial planning</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}