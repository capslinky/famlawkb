/* eslint-disable react/no-unescaped-entities */
import { AlertTriangle, Calculator, DollarSign, Scale, Phone, ExternalLink, Info, CheckCircle, XCircle, AlertCircle, Shield, BookOpen, Gavel, Target, Zap, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SpousalMaintenanceContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <Scale className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Spousal Maintenance (Alimony)</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Complete guide to spousal maintenance in Arizona - eligibility, calculation, modification, and enforcement
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
                <p><strong>Quick Summary:</strong> Spousal maintenance (alimony) provides financial support from one spouse to another after divorce. Arizona adopted spousal maintenance guidelines in 2023 that provide formulas for amount and duration, though judges can deviate.</p>
                <p><strong>Who This Affects:</strong> Lower-earning spouses who can't meet reasonable needs through property or employment. Common after long marriages or when one spouse sacrificed career for family.</p>
                <p><strong>Key Point:</strong> Must first prove eligibility under A.R.S. § 25-319, then court applies guidelines or deviates with findings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2025 Guidelines Update Warning */}
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-amber-900 mb-3">⚠️ Important Update Coming</h2>
              <div className="space-y-3 text-amber-800">
                <p><strong>2025 Spousal Maintenance Guidelines:</strong> New guidelines will be effective <strong>September 1, 2025</strong> by Arizona Supreme Court Administrative Order 2025-101.</p>
                <p><strong>Current Information:</strong> This page reflects the 2023 guidelines (effective July 10, 2023). If you're filing after September 1, 2025, check with the court or calculator for updated formulas.</p>
                <p><strong>Recommendation:</strong> Always verify current guidelines with the <a href="https://www.superiorcourt.maricopa.gov/app/selfsuffcalc/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">official Arizona Spousal Maintenance Calculator</a>.</p>
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
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" />
                <span>Must prove eligibility before amount/duration</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" />
                <span><strong>NEW 2023:</strong> Guidelines provide formulas for amount and duration</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" />
                <span>Guideline amount: Based on income difference and marriage length</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" />
                <span>Guideline duration: 30-50% of marriage length (varies by years)</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="h-4 w-4" />
                <span>Tax rules changed in 2019 (not deductible)</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="h-4 w-4" />
                <span>Remarriage ends it automatically</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <ArrowRight className="h-4 w-4" />
                <span>Can be modified if circumstances change</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <ArrowRight className="h-4 w-4" />
                <span>Court can deviate from guidelines with written findings</span>
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
            <Link href="#do-i-qualify" className="text-blue-600 hover:text-blue-800 hover:underline">• Do I Qualify?</Link>
            <Link href="#types-of-support" className="text-blue-600 hover:text-blue-800 hover:underline">• Types of Support</Link>
            <Link href="#how-much-how-long" className="text-blue-600 hover:text-blue-800 hover:underline">• How Much & How Long?</Link>
            <Link href="#the-process" className="text-blue-600 hover:text-blue-800 hover:underline">• The Process</Link>
            <Link href="#modifying-support" className="text-blue-600 hover:text-blue-800 hover:underline">• Modifying Support</Link>
            <Link href="#when-it-ends" className="text-blue-600 hover:text-blue-800 hover:underline">• When It Ends</Link>
            <Link href="#tax-impact" className="text-blue-600 hover:text-blue-800 hover:underline">• Tax Impact</Link>
            <Link href="#common-questions" className="text-blue-600 hover:text-blue-800 hover:underline">• Common Questions</Link>
          </div>
        </div>

        {/* Do I Qualify Section */}
        <div id="do-i-qualify" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-green-600" />
            Do I Qualify?
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-red-700">Must Meet ONE of These (A.R.S. § 25-319)</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-800 mb-2">1. Not Enough Property 📊</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Your share of assets won't cover reasonable needs</li>
                  <li>• Includes what you're getting in divorce</li>
                  <li>• Looking at monthly income from assets</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-800 mb-2">2. Can't Support Yourself 💼</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• No appropriate job available</li>
                  <li>• Health problems limit work</li>
                  <li>• Skills outdated or never developed</li>
                  <li>• Not just "don't want to work"</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-800 mb-2">3. Caring for Young Child 👶</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Child's needs require you home</li>
                  <li>• Special needs situations</li>
                  <li>• Daycare not appropriate/available</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-800 mb-2">4. Helped Spouse's Career 🎓</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Put them through school</li>
                  <li>• Supported their business</li>
                  <li>• Gave up your career</li>
                  <li>• Moved for their job</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-red-800 mb-2">5. Long Marriage + Older Age ⏰</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Married 15+ years</li>
                  <li>• Age 50+ typically</li>
                  <li>• Limited work history</li>
                  <li>• Can't realistically start career</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4">
                <h4 className="font-semibold text-indigo-800 mb-2">6. Lost Earning Ability 📉</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Stayed home with kids</li>
                  <li>• Gave up promotions</li>
                  <li>• Part-time only for family</li>
                  <li>• Now can't catch up</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">What You Need to Prove</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Documents Required:</h4>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Financial affidavit (income/expenses)</li>
                  <li>• Work history/resume</li>
                  <li>• Medical records if disabled</li>
                  <li>• Education transcripts</li>
                  <li>• Expert evaluation (sometimes)</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded">
                <p className="font-semibold text-yellow-800">Key Point: Just needing money isn't enough - must fit a category above!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Support Section */}
        <div id="types-of-support" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-green-600" />
            Types of Support
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Temporary Support (During Divorce)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>What:</strong> Monthly payments while case pending</p>
                  <p className="mb-2"><strong>How Long:</strong> Until final decree (60 days - 2+ years)</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Amount:</strong> Based on maintaining status quo</p>
                  <p className="mb-2"><strong>Get It By:</strong> Filing motion with financial affidavit</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Rehabilitative Support (Most Common)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>What:</strong> Help becoming self-supporting</p>
                  <p className="mb-2"><strong>How Long:</strong> Usually 2-5 years</p>
                  <p className="mb-2"><strong>May Extend If:</strong> Making good faith efforts but need more time</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Examples:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Finish college degree</li>
                    <li>• Get job training/certification</li>
                    <li>• Re-enter workforce</li>
                    <li>• Start a business</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Compensatory Support</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>What:</strong> Payback for career sacrifices</p>
                  <p className="mb-2"><strong>Duration:</strong> Often longer than rehabilitative</p>
                </div>
                <div>
                  <p className="mb-2"><strong>When Used:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• You put spouse through school</li>
                    <li>• Moved repeatedly for their job</li>
                    <li>• Stayed home so they could work</li>
                    <li>• Helped build their business</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Permanent Support (Rare)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>Requirements:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Very long marriage (20+ years)</li>
                    <li>• Traditional roles throughout</li>
                    <li>• Too old/sick to work</li>
                    <li>• Never going to be self-sufficient</li>
                  </ul>
                </div>
                <div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700 font-semibold">Note: "Permanent" still ends at remarriage/death</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Hybrid Arrangements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><strong>Stepped-Down:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Year 1: $3,000/month</li>
                    <li>• Year 2: $2,000/month</li>
                    <li>• Year 3: $1,000/month</li>
                    <li>• Then ends</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong>Review Date:</strong></p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Support for 3 years</li>
                    <li>• Then court reviews need</li>
                    <li>• May continue or end</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Much & How Long Section */}
        <div id="how-much-how-long" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calculator className="h-8 w-8 text-blue-600" />
            How Much & How Long?
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">2023 Arizona Spousal Maintenance Guidelines</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Guideline Calculator Formula:</h4>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <p><strong>Step 1: Calculate Monthly Amount</strong></p>
                  <p>Combined Monthly Income × Applicable Percentage</p>
                  <p>- Lower Earner's Monthly Income</p>
                  <p>= Preliminary Maintenance Amount</p>
                  <br />
                  <p>Then apply range: 15% to 20% of income difference</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Marriage Length Percentages:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 0-3 years: Not applicable (rarely awarded)</li>
                    <li>• 3-5 years: 31-32%</li>
                    <li>• 5-10 years: 33-35%</li>
                    <li>• 10-15 years: 36-38%</li>
                    <li>• 15-20 years: 39-41%</li>
                    <li>• 20+ years: 42-44%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Duration Percentages by Length:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 0-3 years: 20-30%</li>
                    <li>• 3-5 years: 30-35%</li>
                    <li>• 5-10 years: 35-40%</li>
                    <li>• 10-15 years: 40-45%</li>
                    <li>• 15-20 years: 45-50%</li>
                    <li>• 20+ years: 50%+ or indefinite</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Step 2: Duration Formula</h4>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <p>Marriage Length × Duration Percentage = Months of Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">2023 Guideline Examples</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Example with Guidelines:</h4>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  <p>Marriage: 12 years</p>
                  <p>Husband's Income: $8,000/month</p>
                  <p>Wife's Income: $3,000/month</p>
                  <p>No minor children</p>
                  <br />
                  <p><strong>Step 1 - Amount:</strong></p>
                  <p>Combined income: $11,000</p>
                  <p>Applicable %: 37% (for 12-year marriage)</p>
                  <p>$11,000 × 0.37 = $4,070</p>
                  <p>$4,070 - $3,000 = $1,070/month</p>
                  <br />
                  <p><strong>Step 2 - Duration:</strong></p>
                  <p>12 years × 42% = 5 years (60 months)</p>
                  <br />
                  <p><strong>Guideline Result: $1,070/month for 5 years</strong></p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Example 1: Short Marriage</h4>
                  <div className="bg-white p-3 rounded border text-sm">
                    <p>Married: 4 years</p>
                    <p>Wife: Teacher $3,333/month</p>
                    <p>Husband: Engineer $7,500/month</p>
                    <p>No kids</p>
                    <br />
                    <p><strong>Guideline Calculation:</strong></p>
                    <p>Combined: $10,833 × 31.5% = $3,412</p>
                    <p>$3,412 - $3,333 = $79 (too low)</p>
                    <p>Minimum 15% of difference:</p>
                    <p>($7,500-$3,333) × 0.15 = $625</p>
                    <p>Duration: 4 years × 32% = 1.3 years (16 months)</p>
                    <br />
                    <p><strong>Result: $625/month for 16 months</strong></p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Example 2: Long Marriage</h4>
                  <div className="bg-white p-3 rounded border text-sm">
                    <p>Married: 25 years</p>
                    <p>Wife: Homemaker $0/month</p>
                    <p>Husband: Doctor $16,667/month</p>
                    <p>Kids grown</p>
                    <br />
                    <p><strong>Guideline Calculation:</strong></p>
                    <p>Combined: $16,667 × 43% = $7,167</p>
                    <p>$7,167 - $0 = $7,167/month</p>
                    <p>Duration: 25 years × 50%+ = Indefinite</p>
                    <br />
                    <p><strong>Result: $7,167/month indefinitely</strong></p>
                    <p className="text-gray-600">(Court may deviate based on assets received)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-red-700">The A.R.S. § 25-319(B) Factors</h3>
            <p className="mb-4 text-gray-700"><strong>Guidelines are Starting Point - Court Also Considers:</strong></p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">1</span>
                  <span className="text-sm"><strong>Standard of living</strong> during marriage</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">2</span>
                  <span className="text-sm"><strong>Marriage duration</strong> - Affects percentage</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">3</span>
                  <span className="text-sm"><strong>Age and health</strong> of spouse seeking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">4</span>
                  <span className="text-sm"><strong>Earning abilities</strong> of both parties</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">5</span>
                  <span className="text-sm"><strong>Vocational skills</strong> and employability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">6</span>
                  <span className="text-sm"><strong>Contribution to earning ability</strong> of other</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">7</span>
                  <span className="text-sm"><strong>Sacrificed opportunities</strong> during marriage</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">8</span>
                  <span className="text-sm"><strong>Ability to contribute</strong> to own needs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">9</span>
                  <span className="text-sm"><strong>Financial resources</strong> after property division</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">10</span>
                  <span className="text-sm"><strong>Time needed</strong> for education/training</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">11</span>
                  <span className="text-sm"><strong>Excessive expenditures</strong> or destruction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">12</span>
                  <span className="text-sm"><strong>Cost of health insurance</strong></span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">13</span>
                <span className="text-sm"><strong>Actual damages</strong> from criminal conduct</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">14</span>
                <span className="text-sm"><strong>All relevant factors</strong> court deems appropriate <em>(2023 Addition)</em></span>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 p-3 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">Deviation Factors</h4>
              <p className="text-sm text-yellow-700"><strong>Court Can Deviate If:</strong></p>
              <ul className="space-y-1 text-sm text-yellow-700 mt-2">
                <li>• Unusual financial needs</li>
                <li>• Health issues</li>
                <li>• Property division affects</li>
                <li>• Earning capacity disparities</li>
                <li>• Domestic violence history</li>
                <li>• Other factors under A.R.S. § 25-319</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Process Section */}
        <div id="the-process" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ArrowRight className="h-8 w-8 text-purple-600" />
            The Process
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Step 1</span>
                Request in Divorce Papers
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">In Your Petition/Response:</p>
                <ul className="space-y-1 text-sm">
                  <li>☑️ Check box requesting spousal maintenance</li>
                  <li>☑️ Don't specify amount (decided later)</li>
                  <li>☑️ Can't add after decree without agreement</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Step 2</span>
                Financial Disclosure
              </h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Both Parties Provide:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-sm">
                    <li>• Affidavit of Financial Information</li>
                    <li>• Tax returns (3 years)</li>
                    <li>• Pay stubs (6 months)</li>
                  </ul>
                  <ul className="space-y-1 text-sm">
                    <li>• Bank statements</li>
                    <li>• Monthly expense list</li>
                    <li>• Debt documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Step 3</span>
                Temporary Support
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">If Needed During Divorce:</p>
                <ol className="space-y-1 text-sm list-decimal list-inside">
                  <li>File motion for temporary orders</li>
                  <li>Attach financial affidavit</li>
                  <li>Hearing within 30-60 days</li>
                  <li>Order until final decree</li>
                </ol>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Step 4</span>
                Build Your Case
              </h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Gather Evidence:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Employment history</li>
                      <li>• Education records</li>
                      <li>• Medical documentation</li>
                      <li>• Career sacrifice proof</li>
                      <li>• Standard of living evidence</li>
                      <li>• Future expense projections</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Consider Experts:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Vocational evaluator</li>
                      <li>• Financial planner</li>
                      <li>• Medical professionals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Step 5</span>
                Negotiate or Trial
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Settlement (90% of cases):</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Exchange proposals</li>
                    <li>• Mediation often helps</li>
                    <li>• Creative solutions possible</li>
                    <li>• Faster and cheaper</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Trial (10% of cases):</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Present evidence</li>
                    <li>• Expert testimony</li>
                    <li>• Judge decides all terms</li>
                    <li>• Detailed findings required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Impact Section */}
        <div id="tax-impact" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Calculator className="h-8 w-8 text-red-600" />
            Tax Impact
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Current Rules (2019 & Later)</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">For New Orders:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span>NOT tax deductible for payor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span>NOT taxable income for recipient</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    <span>Results in lower payment amounts</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Example Impact:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-gray-800 mb-2">Old Law (pre-2019):</h5>
                    <p className="text-sm">Pay $3,000 (deduct it) = $2,100 actual cost</p>
                    <p className="text-sm">Recipient pays tax on $3,000</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-gray-800 mb-2">Current Law (2019+):</h5>
                    <p className="text-sm">Pay $3,000 (no deduction) = $3,000 actual cost</p>
                    <p className="text-sm">Recipient receives $3,000 tax-free</p>
                  </div>
                </div>
                <div className="mt-3 bg-yellow-100 p-2 rounded">
                  <p className="text-sm font-semibold text-yellow-800">Net result: Higher cost to payor, same benefit to recipient</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Pre-2019 Orders</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Keep Old Tax Treatment If:</h4>
                  <ul className="space-y-1 text-sm text-green-600">
                    <li>• Divorce finalized before 2019</li>
                    <li>• Don't modify amount substantially</li>
                    <li>• Don't change to non-modifiable</li>
                  </ul>
                </div>
                <div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="font-semibold text-red-700">Warning: Major modifications may trigger new tax rules!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Tax-Smart Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Instead of Monthly Payments:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Larger property share</li>
                    <li>• Keep the house</li>
                    <li>• More retirement assets</li>
                    <li>• Lump sum buyout</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Note: Guidelines don't apply to property division</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Calculate True Cost:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Factor your tax bracket</li>
                    <li>• Consider recipient's taxes</li>
                    <li>• Look at total family tax</li>
                    <li>• May affect amount agreed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modifying Support Section */}
        <div id="modifying-support" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ArrowRight className="h-8 w-8 text-indigo-600" />
            Modifying Support
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">When You Can Modify</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">Need "Substantial & Continuing" Change:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Valid Reasons:
                    </h5>
                    <ul className="space-y-1 text-sm text-green-600">
                      <li>• Lost job (laid off)</li>
                      <li>• Serious illness/disability</li>
                      <li>• Recipient gets good job</li>
                      <li>• Recipient inherits money</li>
                      <li>• Payor legitimately retires</li>
                      <li>• Recipient living with partner</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-700 mb-2 flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      Invalid Reasons:
                    </h5>
                    <ul className="space-y-1 text-sm text-red-600">
                      <li>• Voluntarily quit job</li>
                      <li>• Temporary problems</li>
                      <li>• Just don't want to pay</li>
                      <li>• Minor income changes</li>
                      <li>• Knew it would happen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Modification Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800">Step 1: Document Change</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• When it happened</li>
                    <li>• Why it matters</li>
                    <li>• Financial impact</li>
                    <li>• Expected duration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800">Step 2: Try Agreement First</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Faster</li>
                    <li>• Cheaper</li>
                    <li>• More control</li>
                    <li>• Can be creative</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800">Step 3: File if Necessary</h4>
                  <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                    <li>Petition to Modify</li>
                    <li>New financial affidavits</li>
                    <li>Serve other party</li>
                    <li>Discovery/negotiations</li>
                    <li>Hearing if no agreement</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Living Together (Cohabitation)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">May Reduce/End Support If:</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Romantic relationship</li>
                    <li>• Sharing expenses</li>
                    <li>• Acting like married couple</li>
                    <li>• Reduced financial need</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Not Just Roommates:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Must be romantic</li>
                    <li>• Financial interdependence</li>
                    <li>• Continuous (not occasional)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Investigation Often Needed:</h4>
                <ul className="space-y-1 text-sm text-blue-700 grid md:grid-cols-2 gap-2">
                  <li>• Private investigator</li>
                  <li>• Social media evidence</li>
                  <li>• Financial records</li>
                  <li>• Witness testimony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* When It Ends Section */}
        <div id="when-it-ends" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-red-600" />
            When It Ends
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">Automatic Termination</h3>
              <p className="mb-4 font-semibold">Ends Immediately When:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2">1. Recipient Remarries 💑</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Legal marriage only</li>
                    <li>• Not just engaged</li>
                    <li>• No revival if re-divorced</li>
                    <li>• Past-due amounts still owed</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2. Either Party Dies ⚰️</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• No payments to estate</li>
                    <li>• Get life insurance!</li>
                    <li>• Past-due survives death</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">3. Date in Order Arrives 📅</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• "36 months from date"</li>
                    <li>• "When completes degree"</li>
                    <li>• "At retirement age"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-700">Possible Termination</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Living with New Partner:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Not automatic</li>
                    <li>• Must go to court</li>
                    <li>• Prove romantic relationship</li>
                    <li>• Show reduced need</li>
                    <li>• Judge decides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Agreement to End:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Both must agree in writing</li>
                    <li>• File with court</li>
                    <li>• Can trade for something</li>
                    <li>• Calculate buyout value</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What DOESN'T End It</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span>Just living together</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span>Dating someone</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span>Payor remarrying</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span>Kids turning 18</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-4 w-4" />
                    <span>Bankruptcy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Protecting Yourself</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">If Paying:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Define cohabitation clearly</li>
                    <li>• Set review dates</li>
                    <li>• Require employment efforts</li>
                    <li>• Get life insurance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">If Receiving:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Get life insurance on payor</li>
                    <li>• Secure with property lien</li>
                    <li>• Wage assignment order</li>
                    <li>• Clear termination terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Questions Section */}
        <div id="common-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Is there a calculator?</h3>
              <p className="text-gray-700"><strong>Yes!</strong> As of 2023, Arizona has official spousal maintenance guidelines with formulas. Courts use these as a starting point but can deviate. Some counties have online calculators, and many attorneys use software that incorporates the guidelines. The official guidelines are in the Arizona Rules of Family Law Procedure.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Can I waive spousal maintenance?</h3>
              <p className="text-gray-700 mb-2"><strong>Yes</strong>, through:</p>
              <ul className="space-y-1 text-sm text-gray-600 mb-3">
                <li>• Prenuptial agreement</li>
                <li>• Postnuptial agreement</li>
                <li>• Divorce settlement</li>
              </ul>
              <p className="text-gray-700">Must be voluntary and fair when signed.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">What if my ex refuses to work?</h3>
              <p className="text-gray-700 mb-2"><strong>Court can impute income</strong> based on:</p>
              <ul className="space-y-1 text-sm text-gray-600 mb-3">
                <li>• Education level</li>
                <li>• Work history</li>
                <li>• Job market</li>
                <li>• Reasonable efforts</li>
              </ul>
              <p className="text-gray-700">Not required to take any job - must be "appropriate."</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Does cheating affect support?</h3>
              <p className="text-gray-700 mb-2"><strong>Not directly</strong>, but:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Spending on affair = marital waste</li>
                <li>• May affect property division</li>
                <li>• Doesn't bar maintenance</li>
                <li>• Judge has discretion</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Can it be discharged in bankruptcy?</h3>
              <p className="text-gray-700 mb-2"><strong>No</strong> - spousal maintenance is:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Domestic support obligation</li>
                <li>• Non-dischargeable debt</li>
                <li>• Priority claim</li>
                <li>• Survives bankruptcy</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">What about temporary decreases?</h3>
              <p className="text-gray-700 mb-2"><strong>Options:</strong></p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Agreement to defer</li>
                <li>• Partial payments</li>
                <li>• Temporary modification</li>
                <li>• Document everything</li>
                <li>• Catch up when able</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">How do I prepare for court?</h3>
              <p className="text-gray-700 mb-2"><strong>Key Evidence:</strong></p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Detailed budget/expenses</li>
                <li>• Income documentation</li>
                <li>• Health records</li>
                <li>• Work history</li>
                <li>• Contributions to marriage</li>
                <li>• Standard of living proof</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            Common Mistakes
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-700">During Divorce</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-800 mb-2">1. Not Requesting It ❌</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Must ask in initial papers</li>
                    <li>• Can't add later without agreement</li>
                    <li>• Don't assume you'll work it out</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-800 mb-2">2. Accepting Too Little 💸</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Calculate true needs</li>
                    <li>• Consider future costs</li>
                    <li>• Factor in taxes</li>
                    <li>• Don't just take first offer</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">3. No Security Measures 🔓</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Get life insurance</li>
                    <li>• Income withholding order</li>
                    <li>• Property liens</li>
                    <li>• Clear terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">After Divorce</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-2">4. Not Enforcing ⚖️</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Track every payment</li>
                    <li>• Act on first miss</li>
                    <li>• Document everything</li>
                    <li>• Use enforcement tools</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800 mb-2">5. Lifestyle Changes 🏠</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Moving in together too soon</li>
                    <li>• Social media posts</li>
                    <li>• Not being discrete</li>
                    <li>• Giving ammunition</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">6. DIY Modifications 📝</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Informal agreements fail</li>
                    <li>• Must go through court</li>
                    <li>• Get it in writing</li>
                    <li>• File properly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Strategic Errors</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-400 pl-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">7. Short-Term Thinking ⏰</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Consider 5-10 years out</li>
                    <li>• Inflation impact</li>
                    <li>• Career changes</li>
                    <li>• Health issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h4 className="font-semibold text-pink-800 mb-2">8. Emotional Decisions 😤</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Revenge isn't profitable</li>
                    <li>• Think financially</li>
                    <li>• Get therapy</li>
                    <li>• Use professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Gavel className="h-8 w-8 text-gray-600" />
            The Law
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Statutes</h3>
              <ul className="space-y-2">
                <li><strong>A.R.S. § 25-319</strong> - Eligibility and factors</li>
                <li><strong>A.R.S. § 25-327</strong> - Modification and termination</li>
                <li><strong>A.R.S. § 25-530</strong> - Income withholding</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Important Cases</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Must achieve self-sufficiency if possible</li>
                <li>• Long marriages may justify permanent support</li>
                <li>• Cohabitation must be proven substantial</li>
              </ul>
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
            <Link href="/topics/property-division" className="text-blue-600 hover:text-blue-800 hover:underline">• Property Division - Trade property for support</Link>
            <Link href="/getting-divorced" className="text-blue-600 hover:text-blue-800 hover:underline">• Divorce Process - How to request</Link>
            <Link href="/modules/disclosures" className="text-blue-600 hover:text-blue-800 hover:underline">• Financial Issues - Budgeting help</Link>
            <Link href="/modules/modifications" className="text-blue-600 hover:text-blue-800 hover:underline">• Post-Decree Issues - Modifications</Link>
          </div>
        </div>

        {/* Get Help Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Phone className="h-6 w-6 text-green-600" />
            Get Help
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Calculate Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://superiorcourt.maricopa.gov/family/spousal-maintenance/" 
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Maricopa County Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="https://www.azcourts.gov/selfservicecenter" 
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Financial Affidavit Form
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-700">Find Assistance</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Legal Aid:</strong>{' '}
                  <Link href="https://www.azlawhelp.org" 
                        className="text-blue-600 hover:text-blue-800 hover:underline">
                    azlawhelp.org
                  </Link>
                </li>
                <li>
                  <strong>Court Help:</strong>{' '}
                  <Link href="https://www.azcourts.gov/selfservicecenter" 
                        className="text-blue-600 hover:text-blue-800 hover:underline">
                    Self-Service Centers
                  </Link>
                </li>
                <li>
                  <strong>Find Attorney:</strong>{' '}
                  <Link href="https://www.azbar.org/FindLawyer" 
                        className="text-blue-600 hover:text-blue-800 hover:underline">
                    State Bar Referral
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-purple-700">Key Takeaway</h3>
              <p className="text-sm text-gray-700">
                While Arizona now has spousal maintenance guidelines (2023), every case remains unique. The guidelines provide a starting point, but courts can and do deviate based on the statutory factors. Document everything, understand both the guidelines and deviation factors, and consider getting professional help for complex situations.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <Link href="/topics/property-division" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            ← Property Division
          </Link>
          <Link href="/modules/disclosures" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            Financial Issues →
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p><em>Last updated: January 30, 2024</em></p>
        </div>
      </div>
    </div>
  );
}