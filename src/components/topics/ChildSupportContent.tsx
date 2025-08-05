/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Scale, Users, Calculator, AlertCircle, ExternalLink, TrendingUp, CreditCard, Target } from 'lucide-react';

export default function ChildSupportContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🔍 At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Arizona child support is calculated using both parents' incomes, the amount of parenting time, and specific child-related expenses. The state uses mandatory guidelines that courts must follow unless there are extraordinary circumstances.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who This Affects:</strong> All parents with children under 18</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Typical Amounts:</strong> $400-800/month for one child</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span><strong>Method:</strong> Income Shares Model</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Cannot be discharged in bankruptcy</span>
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
                <span className="text-sm">Both parents financially responsible regardless of custody</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Amount based on combined incomes and time with child</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Includes health insurance and childcare costs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Automatically withheld from wages in most cases</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Can be modified when circumstances change (15% rule)</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Interest accrues on unpaid support at 10% annually</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Cannot be discharged in bankruptcy</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Official calculator available online</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Support is Calculated */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            💰 How Support is Calculated
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Income Shares Model</h3>
                  <p className="text-blue-700 text-sm">
                    Arizona uses the "Income Shares Model" which considers what intact families spend on children at various income levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculation Steps */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">📊 Step-by-Step Calculation Process</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1. Combine Both Parents' Incomes",
                    description: "Add gross monthly income from all sources",
                    example: "Parent A: $5,000 + Parent B: $3,000 = $8,000 combined"
                  },
                  {
                    step: "2. Determine Basic Support from Guidelines Table",
                    description: "Use state guidelines table for combined income level",
                    example: "1 child at $8,000 combined income = $1,102 basic support"
                  },
                  {
                    step: "3. Divide Proportionally by Income",
                    description: "Each parent pays based on their income percentage",
                    example: "Parent A: 62.5% = $689, Parent B: 37.5% = $413"
                  },
                  {
                    step: "4. Adjust for Parenting Time",
                    description: "More time with child = lower payment amount",
                    example: "Adjust based on overnights per year"
                  },
                  {
                    step: "5. Add Health Insurance and Childcare",
                    description: "Include mandatory additional expenses",
                    example: "Add children's portion of health insurance + work-related childcare"
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-blue-800">{item.step}</h4>
                          <p className="text-sm text-gray-700 mb-1">{item.description}</p>
                          <p className="text-xs text-blue-600 font-medium">{item.example}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Costs */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-3">💡 Additional Costs Added to Basic Support</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Always Included:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Medical/dental insurance (children's portion)</li>
                      <li>• Work-related childcare costs</li>
                      <li>• Court-ordered special expenses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Sometimes Included:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Extraordinary medical expenses</li>
                      <li>• Special needs costs</li>
                      <li>• Private school tuition (if agreed)</li>
                      <li>• Long-distance parenting travel costs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* What Counts as Income */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            📊 What Counts as Income
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Included Income */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Included Income Sources
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Employment:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Wages and salary</li>
                        <li>• Tips and commissions</li>
                        <li>• Bonuses (regular or averaged)</li>
                        <li>• Overtime (if consistent)</li>
                        <li>• Self-employment profit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Benefits:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Unemployment compensation</li>
                        <li>• Workers' compensation</li>
                        <li>• Disability benefits</li>
                        <li>• Social Security (not SSI)</li>
                        <li>• Veterans' benefits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">Other Sources:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Rental income</li>
                        <li>• Investment income</li>
                        <li>• Spousal maintenance received</li>
                        <li>• Trust distributions</li>
                        <li>• Gambling winnings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Excluded Income */}
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Excluded Income Sources
                  </h3>
                  <div className="space-y-3 text-sm">
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Child support received for other children</li>
                      <li>• Public assistance (TANF)</li>
                      <li>• Food stamps (SNAP)</li>
                      <li>• SSI benefits</li>
                      <li>• Loans or gifts</li>
                      <li>• One-time inheritance</li>
                      <li>• Foster care payments</li>
                      <li>• Adoption subsidies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Self-Employment Adjustments */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">🏢 Self-Employment Income Adjustments</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Add Back to Income:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Excessive car expenses</li>
                      <li>• Personal meals/entertainment</li>
                      <li>• Depreciation (non-cash expense)</li>
                      <li>• Home office (if excessive)</li>
                      <li>• Personal phone/utilities</li>
                      <li>• Family member wages (if excessive)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Legitimate Business Deductions:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Actual cost of goods sold</li>
                      <li>• Employee wages (arm's length)</li>
                      <li>• Necessary business equipment</li>
                      <li>• Business rent and utilities</li>
                      <li>• Professional fees and licenses</li>
                      <li>• Business insurance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* The Support Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            🔄 The Support Process
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-800 mb-2">Timeline: 3-6 Months Total</h3>
                  <p className="text-indigo-700 text-sm">
                    The process can be expedited with temporary orders while the final calculation is determined.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">📅 Step-by-Step Process</h3>
              
              {[
                {
                  phase: "Filing (Week 1)",
                  items: ["Petition for support", "Financial affidavit", "Proposed worksheet", "Filing fee (~$300)"],
                  timeframe: "1 week"
                },
                {
                  phase: "Service (Week 2-3)",
                  items: ["Serve other parent", "20-30 day response time", "Default if no response"],
                  timeframe: "2-3 weeks"
                },
                {
                  phase: "Temporary Orders (Week 4-6)",
                  items: ["Quick hearing", "Basic calculation", "Immediate withholding", "Pending final orders"],
                  timeframe: "4-6 weeks"
                },
                {
                  phase: "Discovery (Month 2-3)",
                  items: ["Income verification", "Expense documentation", "Employer information", "Asset disclosure"],
                  timeframe: "2-3 months"
                },
                {
                  phase: "Final Orders (Month 3-6)",
                  items: ["Settlement or trial", "Detailed calculation", "Payment method set", "Enforcement tools"],
                  timeframe: "3-6 months"
                }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-indigo-500">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-200 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-indigo-800 mb-2">{item.phase}</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.items.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                        <span className="text-xs text-indigo-600 font-medium mt-2 block">Timeline: {item.timeframe}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Income Withholding */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  💳 Automatic Income Withholding Process
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {[
                      "Court issues support order",
                      "Order sent to employer",
                      "Employer withholds from paycheck",
                      "Sent to Payment Clearinghouse",
                      "Forwarded to receiving parent"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                        {index < 4 && <span className="text-green-600 font-bold">→</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <p><strong>Multiple Jobs:</strong> Support divided proportionally across employers</p>
                    <p><strong>Self-Employed:</strong> Direct payment required, no automatic withholding</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Modifying Support */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-600" />
            🔧 Modifying Child Support
          </h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">15% Rule for Modifications</h3>
                  <p className="text-orange-700 text-sm">
                    Support can be modified when the new calculation differs from the current order by 15% or more, or $50/month minimum, whichever is less.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* When You Can Modify */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3">When You Can Modify</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Substantial & Continuing Change:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Income change of 15%+ (up or down)</li>
                        <li>• Significant parenting time change</li>
                        <li>• Child's needs change substantially</li>
                        <li>• Health insurance changes</li>
                        <li>• Childcare needs end or begin</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-700 text-xs">
                        <strong>Simplified Review:</strong> Every 3 years without showing substantial change
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modification Process */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">Modification Process</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      {
                        step: "Calculate New Amount",
                        details: "Use current incomes, expenses, parenting time"
                      },
                      {
                        step: "Compare to Existing",
                        details: "Must be 15% different or $50/month minimum, whichever is less"
                      },
                      {
                        step: "File Petition",
                        details: "In same case number, serve other parent"
                      },
                      {
                        step: "Effective Date",
                        details: "From filing date, no retroactive changes"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-green-800">{item.step}</h4>
                          <p className="text-gray-600 text-xs">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Common Modification Scenarios */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-3">🔄 Common Modification Scenarios</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Job Loss:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• File immediately</li>
                      <li>• May get temporary reduction</li>
                      <li>• Must show job search efforts</li>
                      <li>• Cannot voluntarily reduce income</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Income Increase:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Either parent can request</li>
                      <li>• Promotion, raise, new job</li>
                      <li>• Bonus consideration</li>
                      <li>• Overtime if consistent</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Child Ages Out:</h4>
                    <ul className="space-y-1 ml-4 text-gray-600">
                      <li>• Support ends at 18 (or 19 in high school)</li>
                      <li>• Recalculate for remaining children</li>
                      <li>• May need new order</li>
                      <li>• Automatic adjustment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Enforcement Options */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-600" />
            ⚖️ Enforcement Options
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Serious Consequences for Non-Payment</h3>
                  <p className="text-red-700 text-sm">
                    Arizona has strong enforcement tools. Interest accrues at 10% annually, and unpaid support cannot be discharged in bankruptcy.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Immediate Actions */}
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-orange-700 mb-3">Immediate Actions</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Income withholding order</li>
                    <li>• Intercept tax refunds</li>
                    <li>• Freeze bank accounts</li>
                    <li>• Place liens on property</li>
                    <li>• Credit bureau reporting</li>
                    <li>• Seize assets</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Court Actions */}
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-700 mb-3">Court Actions</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Contempt of court proceedings</li>
                    <li>• Judgment for arrears</li>
                    <li>• Attorney fee awards</li>
                    <li>• Jail time (last resort)</li>
                    <li>• Income withholding from multiple sources</li>
                    <li>• Asset seizure orders</li>
                  </ul>
                </CardContent>
              </Card>

              {/* License Suspensions */}
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-purple-700 mb-3">License Suspensions</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Driver's license suspension</li>
                    <li>• Professional license suspension</li>
                    <li>• Recreational license suspension</li>
                    <li>• Passport application denial</li>
                    <li>• Business license issues</li>
                    <li>• Hunting/fishing licenses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Interest on Arrears */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">💰 Interest on Unpaid Support (Arrears)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Rate:</strong> 10% per year (simple interest)</li>
                      <li><strong>Automatic:</strong> No court order needed</li>
                      <li><strong>Compounds:</strong> Monthly calculation</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Cannot Waive:</strong> Required by Arizona law</li>
                      <li><strong>Survives Bankruptcy:</strong> Always owed</li>
                      <li><strong>Judgment:</strong> Can be entered for full amount plus interest</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-green-600" />
            💳 Payment Methods
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Support Payment Clearinghouse (Recommended)</h3>
                  <p className="text-green-700 text-sm">
                    Arizona's centralized payment system provides automatic record keeping, direct deposit, and online access to payment history.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Clearinghouse Benefits */}
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-green-700 mb-3">Clearinghouse Benefits</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Automatic record keeping</li>
                    <li>• Direct deposit to receiving parent</li>
                    <li>• Online payment portal 24/7</li>
                    <li>• Complete payment history access</li>
                    <li>• Automatic processing</li>
                    <li>• Receipt confirmation</li>
                    <li>• Court-admissible records</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Payment Options */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-700 mb-3">How to Pay</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Automatic (Recommended):</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Employer payroll withholding</li>
                        <li>• Bank account auto-debit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-1">Manual Payment Options:</h4>
                      <ul className="space-y-1 ml-4 text-gray-600">
                        <li>• Online: <a href="https://www.azsos.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AZSOS portal</a></li>
                        <li>• Phone: 1-855-556-5513</li>
                        <li>• Mail: Check or money order</li>
                        <li>• Debit/credit card (fees apply)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Tips */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-800 mb-3">💡 Payment Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Do's:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Pay through official clearinghouse</li>
                      <li>• Keep payment confirmation records</li>
                      <li>• Pay on time every month</li>
                      <li>• Include case number on payments</li>
                      <li>• Set up automatic payments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Don'ts:</h4>
                    <ul className="space-y-1 ml-4 text-gray-700">
                      <li>• Don't pay cash directly to other parent</li>
                      <li>• Don't skip payments for any reason</li>
                      <li>• Don't "trade" support for other expenses</li>
                      <li>• Don't stop paying if visitation is denied</li>
                      <li>• Don't assume late is okay</li>
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
                question: "Can I stop paying child support if I lose my job?",
                answer: "No. Support continues until modified by the court. File for modification immediately if you lose your job, but continue paying what you can until the court changes the order."
              },
              {
                question: "What if the other parent won't let me see my child?",
                answer: "Child support and visitation are separate issues. You must continue paying support even if visitation is denied. File a separate motion for parenting time enforcement."
              },
              {
                question: "Do I have to pay support if my child lives with me most of the time?",
                answer: "Possibly. Support is based on both parents' incomes and parenting time. Even with majority time, you might owe support if your income is significantly higher."
              },
              {
                question: "Can child support be modified retroactively?",
                answer: "No. Modifications are effective from the filing date forward. You cannot get credit for unofficial arrangements or changed circumstances before filing."
              },
              {
                question: "What happens to unpaid child support?",
                answer: "It becomes a judgment debt with 10% annual interest. It cannot be discharged in bankruptcy and can be collected through wage garnishment, asset seizure, and license suspension."
              },
              {
                question: "When does child support end?",
                answer: "Generally at age 18, or 19 if the child is still in high school. Support may continue longer for disabled children. It does not automatically terminate - you may need a court order."
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

      {/* Resources Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-gray-600" />
            📞 Resources & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Official Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.azcourts.gov/familylaw/2022-Child-Support-Calculator" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Arizona Child Support Calculator <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azsos.gov" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Support Payment Clearinghouse <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.azcourts.gov/selfservicecenter/Forms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Child Support Forms <ExternalLink className="w-3 h-3" />
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
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support & Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">Payment Help:</span> 1-855-556-5513
                </li>
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
                  <a href="https://www.azcourts.gov/selfservicecenter" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                    Self-Help Centers <ExternalLink className="w-3 h-3" />
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