/* eslint-disable react/no-unescaped-entities */
import { HelpCircle, Heart, Users, DollarSign, Home, Shield, Scale, Clock, ExternalLink, AlertTriangle, Search, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

export default function FAQContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Quick answers to the most common questions about divorce, custody, support, and family law in Arizona
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick Navigation */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            Quick Navigation
          </h2>
          <p className="text-gray-600 mb-4">Jump to your topic:</p>
          <div className="grid md:grid-cols-3 gap-3">
            <Link href="#divorce-questions" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <Heart className="h-5 w-5 text-red-600" />
              <span className="text-red-700 font-medium">Divorce Questions</span>
            </Link>
            <Link href="#custody-questions" className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Child Custody</span>
            </Link>
            <Link href="#support-questions" className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span className="text-green-700 font-medium">Child Support</span>
            </Link>
            <Link href="#property-questions" className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Home className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Property & Money</span>
            </Link>
            <Link href="#spousal-questions" className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Scale className="h-5 w-5 text-orange-600" />
              <span className="text-orange-700 font-medium">Spousal Maintenance</span>
            </Link>
            <Link href="#protection-questions" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <Shield className="h-5 w-5 text-red-600" />
              <span className="text-red-700 font-medium">Protection Orders</span>
            </Link>
            <Link href="#legal-questions" className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <Scale className="h-5 w-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Legal Process</span>
            </Link>
            <Link href="#after-divorce-questions" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Clock className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">After Divorce</span>
            </Link>
            <Link href="#special-questions" className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium">Special Situations</span>
            </Link>
          </div>
        </div>

        {/* Divorce Questions Section */}
        <div id="divorce-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Heart className="h-8 w-8 text-red-600" />
            Divorce Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">How long does divorce take in Arizona?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Minimum 60 days from serving papers.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Details:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Uncontested:</strong> 60-90 days</li>
                  <li>• <strong>Simple contested:</strong> 6-9 months</li>
                  <li>• <strong>Complex contested:</strong> 12-24 months</li>
                  <li>• <strong>High conflict:</strong> 2+ years</li>
                </ul>
                <Link href="/getting-divorced" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Full Divorce Timeline <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">How much does divorce cost?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Court fees ~$350, attorney fees vary widely.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Typical Costs:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Filing fee:</strong> $350-400</li>
                  <li>• <strong>Uncontested w/attorney:</strong> $1,500-3,500</li>
                  <li>• <strong>Contested w/attorney:</strong> $5,000-50,000+</li>
                  <li>• <strong>Fee waivers available</strong> if low income</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">What are grounds for divorce?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Only need to state marriage is "irretrievably broken."</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Details:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• No fault required</li>
                  <li>• No proof of wrongdoing needed</li>
                  <li>• Spouse's agreement not required</li>
                  <li>• Covenant marriages have extra requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Do I need to live in Arizona?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: One spouse must live here 90 days before filing.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Requirements:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 90-day residency</li>
                  <li>• Military stationed here counts</li>
                  <li>• No county-specific requirement</li>
                  <li>• Can file immediately after 90 days</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Can we use the same lawyer?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: No, it's a conflict of interest.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Options:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Each get own lawyer</li>
                  <li>• One gets lawyer, other self-represents</li>
                  <li>• Both self-represent</li>
                  <li>• Use mediator + one lawyer drafts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">What's legal separation vs divorce?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Legal separation divides everything but you stay married.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Key Differences:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Can't remarry with separation</li>
                  <li>• Keep insurance benefits</li>
                  <li>• Religious considerations</li>
                  <li>• Can convert to divorce later</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Child Custody Questions Section */}
        <div id="custody-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-blue-600" />
            Child Custody Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">At what age can kids choose?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: No set age - judge considers maturity.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Reality:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• More weight given as kids get older</li>
                  <li>• Usually influential at 12+</li>
                  <li>• Never completely controlling</li>
                  <li>• Must show good reasoning</li>
                </ul>
                <Link href="/child-custody" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Custody Factors <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Does Arizona favor mothers?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: No, law requires gender-neutral decisions.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Facts:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Both parents have equal rights</li>
                  <li>• Decision based on best interests</li>
                  <li>• No preference for mothers</li>
                  <li>• Statistics show fairly even outcomes</li>
                </ul>
                <Link href="/child-custody" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Best Interests Standard <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">What is 50/50 custody?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: Equal time with each parent.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Common Schedules:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Week on/week off</li>
                  <li>• 2-2-5-5 rotation</li>
                  <li>• Alternating 2 weeks</li>
                  <li>• Split weeks</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Can I move with kids?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: Need permission if other parent has rights.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Process:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 60 days written notice</li>
                  <li>• Other parent can object</li>
                  <li>• Court hearing if disputed</li>
                  <li>• Best interests test applied</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">How do I change custody?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: Show substantial change in circumstances.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Requirements:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wait 1 year (usually)</li>
                  <li>• Major change occurred</li>
                  <li>• Benefits child</li>
                  <li>• Higher standard than initial order</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Can grandparents get visitation?</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-800">Quick Answer: Yes, but it's difficult.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Must Prove:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Best interests of child</li>
                  <li>• Substantial existing relationship</li>
                  <li>• Parent unreasonably denying</li>
                  <li>• Harm without visitation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Child Support Questions Section */}
        <div id="support-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-green-600" />
            Child Support Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">How is support calculated?</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Quick Answer: Both incomes + time with child = support amount.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Formula:</p>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Add both parents' incomes</li>
                  <li>Find amount on state table</li>
                  <li>Adjust for parenting time</li>
                  <li>Add healthcare/childcare</li>
                </ol>
                <Link href="/topics/child-support" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Support Calculator <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Does 50/50 mean no support?</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Quick Answer: Not necessarily - depends on incomes.</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Example:</strong> If one parent earns $6,000/month and other earns $2,000/month, higher earner pays even with equal time.</p>
                <Link href="/topics/child-support" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  50/50 Support <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">When does support end?</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Quick Answer: Age 18 or high school graduation.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Specifics:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 18 AND graduated = ends</li>
                  <li>• Still in school = until 19</li>
                  <li>• Can't extend for college</li>
                  <li>• May continue if disabled</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Can support be changed?</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Quick Answer: Yes, if 15%+ difference or major change.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Common Reasons:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Job loss/new job</li>
                  <li>• Parenting time change</li>
                  <li>• Child's needs change</li>
                  <li>• Every 3 years automatic review</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">What if they won't pay?</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-800">Quick Answer: Many enforcement tools available.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Options:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wage garnishment</li>
                  <li>• Tax refund intercept</li>
                  <li>• License suspension</li>
                  <li>• Contempt/jail</li>
                  <li>• Credit reporting</li>
                </ul>
                <Link href="/topics/child-support" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Enforcement Help <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Property & Money Questions Section */}
        <div id="property-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Home className="h-8 w-8 text-purple-600" />
            Property & Money Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">How is property divided?</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-purple-800">Quick Answer: Community property split 50/50 usually.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Rules:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Acquired during marriage = community</li>
                  <li>• Owned before = separate</li>
                  <li>• Gifts/inheritance = separate</li>
                  <li>• Name on title doesn't matter</li>
                </ul>
                <Link href="/topics/property-division" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Property Division <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Who keeps the house?</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-purple-800">Quick Answer: Depends - often sold and split.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Options:</p>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Sell and divide proceeds</li>
                  <li>One buys out other</li>
                  <li>Continue co-owning</li>
                  <li>Trade for other assets</li>
                </ol>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">What about retirement?</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-purple-800">Quick Answer: Portion earned during marriage is divided.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Process:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Calculate marital portion</li>
                  <li>• Need QDRO for most plans</li>
                  <li>• Can trade for other assets</li>
                  <li>• Taxes considered</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Are debts divided too?</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-purple-800">Quick Answer: Yes, debts during marriage are split.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Important:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Community debts divided</li>
                  <li>• Name on debt doesn't control</li>
                  <li>• Creditors not bound by divorce</li>
                  <li>• Need to refinance when possible</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">What's spousal support?</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-purple-800">Quick Answer: Monthly payments to lower-earning spouse.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Factors:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Length of marriage</li>
                  <li>• Income difference</li>
                  <li>• Ability to work</li>
                  <li>• Standard of living</li>
                  <li>• Not automatic</li>
                </ul>
                <Link href="/topics/spousal-maintenance" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Spousal Maintenance <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Spousal Maintenance Questions Section */}
        <div id="spousal-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-orange-600" />
            Spousal Maintenance Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">How is alimony calculated in Arizona?</h3>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orange-800">Quick Answer: Arizona uses guidelines as of 2023 based on income and marriage length.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Formula Basics:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Income difference × percentage (31-44% based on marriage length)</li>
                  <li>• Duration: 30-50% of marriage length</li>
                  <li>• Court can deviate with findings</li>
                  <li>• Not automatic - must qualify first</li>
                </ul>
                <Link href="/topics/spousal-maintenance" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Spousal Maintenance Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">Can I get alimony if I cheated?</h3>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orange-800">Quick Answer: Yes - Arizona is no-fault, infidelity doesn't bar support.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">But:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Marital waste (spending on affair) matters</li>
                  <li>• May affect amount</li>
                  <li>• Not a complete bar</li>
                  <li>• Need and ability still control</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">When does alimony end?</h3>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orange-800">Quick Answer: Remarriage, death, or date in order.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Automatic Termination:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Recipient remarries (immediately)</li>
                  <li>• Either party dies</li>
                  <li>• End date arrives</li>
                  <li>• Cohabitation (maybe)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Protection Order Questions Section */}
        <div id="protection-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-red-600" />
            Protection Order Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">How fast can I get protection?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Immediately - 24/7 through police.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Options:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Emergency order: Same day</li>
                  <li>• Ex parte order: Court hours</li>
                  <li>• After hearing: 1 year</li>
                  <li>• All are FREE</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">What protection is included?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: No contact, stay away, exclusive home use.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Can Include:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Remove abuser from home</li>
                  <li>• Temporary custody</li>
                  <li>• No guns</li>
                  <li>• Stay 100+ yards away</li>
                  <li>• Pet protection</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Will it affect custody?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Yes - creates presumption against abuser.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Impact:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Presumption against joint custody</li>
                  <li>• Supervised visitation likely</li>
                  <li>• Must complete treatment</li>
                  <li>• Long-term effects</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-700">What if order is violated?</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800">Quick Answer: Call 911 - mandatory arrest.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Consequences:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Criminal charges</li>
                  <li>• Jail time</li>
                  <li>• Contempt of court</li>
                  <li>• Extended protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Process Questions Section */}
        <div id="legal-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-indigo-600" />
            Legal Process Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Do I need a lawyer?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Quick Answer: Depends on complexity.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-800 mb-2">Consider Self-Help If:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Both agree</li>
                    <li>• Simple assets</li>
                    <li>• No kids</li>
                    <li>• No abuse</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-800 mb-2">Get Lawyer If:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Disagreements</li>
                    <li>• Complex finances</li>
                    <li>• Custody disputes</li>
                    <li>• Feel overwhelmed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Where do I file?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Quick Answer: Superior Court in any county where either spouse lives.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Find Your Court:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• No specific county requirement</li>
                  <li>• E-filing available most places</li>
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
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">What forms do I need?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Quick Answer: Depends on your situation.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Basic Divorce:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Petition</li>
                  <li>• Summons</li>
                  <li>• Financial affidavit</li>
                  <li>• Parenting plan (if kids)</li>
                </ul>
                <Link href="/forms" className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2">
                  Form Finder <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">How long do I have to respond?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Quick Answer: 20 days if served in Arizona.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Deadlines:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• In-state: 20 days</li>
                  <li>• Out-of-state: 30 days</li>
                  <li>• Default if no response</li>
                  <li>• Extensions possible</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Can I change judges?</h3>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-indigo-800">Quick Answer: One change as a matter of right.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Rules:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• File within 10 days</li>
                  <li>• No reason needed first time</li>
                  <li>• Very limited after that</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* After Divorce Questions Section */}
        <div id="after-divorce-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Clock className="h-8 w-8 text-gray-600" />
            After Divorce Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">Can I modify my divorce decree?</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-800">Quick Answer: Support/custody yes, property division no.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-800 mb-2">What Can Change:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Child support amount</li>
                    <li>• Custody arrangements</li>
                    <li>• Parenting time</li>
                    <li>• Spousal maintenance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-800 mb-2">What Cannot:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Property division</li>
                    <li>• Debt allocation</li>
                    <li>• Past due amounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">What if my ex won't follow orders?</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-800">Quick Answer: File for enforcement/contempt.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Enforcement Options:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wage garnishment</li>
                  <li>• Contempt of court</li>
                  <li>• License suspension</li>
                  <li>• Property liens</li>
                  <li>• Jail (last resort)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">Can I move out of state with kids?</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-800">Quick Answer: Need 45-day notice and may need permission.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Process:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Written notice to other parent</li>
                  <li>• Include proposed parenting plan</li>
                  <li>• They have 30 days to object</li>
                  <li>• Court hearing if contested</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Situations Questions Section */}
        <div id="special-questions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
            Special Situations Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">What if I'm pregnant during divorce?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Can still divorce, but paternity issues arise.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Considerations:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Husband presumed father</li>
                  <li>• May need paternity test</li>
                  <li>• Child support starts at birth</li>
                  <li>• Custody decided separately</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Can same-sex couples divorce in Arizona?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Yes - same process as any divorce.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Key Points:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Legal since 2014</li>
                  <li>• Same rights/procedures</li>
                  <li>• Child custody same rules</li>
                  <li>• Property division identical</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">What about military divorce?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Special rules apply but Arizona courts have jurisdiction.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Special Considerations:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• SCRA stay rights</li>
                  <li>• Military pension division</li>
                  <li>• BAH/BAS calculations</li>
                  <li>• Deployment affects custody</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Do I need to change my name?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Optional - can restore maiden name in divorce.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Options:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Keep married name</li>
                  <li>• Restore maiden/former name</li>
                  <li>• Choose entirely new name</li>
                  <li>• Free in divorce decree</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">What if there's domestic violence?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Get immediate protection and affects custody.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Important:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Order of Protection available</li>
                  <li>• Emergency custody possible</li>
                  <li>• DV presumption against custody</li>
                  <li>• Criminal charges separate</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">What if we were never married?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Need paternity/custody case, not divorce.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Process:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Establish paternity first</li>
                  <li>• Then custody/support</li>
                  <li>• No property division</li>
                  <li>• No spousal support</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Can I get an annulment?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Rarely - only if marriage was invalid.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Requirements:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Fraud, force, or incapacity</li>
                  <li>• Blood relations</li>
                  <li>• Already married</li>
                  <li>• Time limits apply</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Do grandparents have rights?</h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-yellow-800">Quick Answer: Limited - can petition for visitation.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Requirements:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Parent deceased/missing</li>
                  <li>• Parents divorced 3+ months</li>
                  <li>• Child born out of wedlock</li>
                  <li>• Best interests of child</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Didn't Find Your Answer Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            Didn't Find Your Answer?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">Browse by Topic</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/getting-divorced" className="text-blue-600 hover:underline">• Divorce Guide</Link>
                </li>
                <li>
                  <Link href="/child-custody" className="text-blue-600 hover:underline">• Child Custody</Link>
                </li>
                <li>
                  <Link href="/topics/child-support" className="text-blue-600 hover:underline">• Child Support</Link>
                </li>
                <li>
                  <Link href="/topics/property-division" className="text-blue-600 hover:underline">• Property Division</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-700">Get Personal Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Court Self-Help:</strong>{' '}
                  <Link href="https://www.azcourts.gov/selfservicecenter" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    Find Location
                  </Link>
                </li>
                <li>
                  <strong>Legal Aid:</strong>{' '}
                  <Link href="https://www.azlawhelp.org" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    azlawhelp.org
                  </Link>
                </li>
                <li>
                  <strong>Find Attorney:</strong>{' '}
                  <Link href="https://www.azbar.org/FindLawyer" 
                        className="text-blue-600 hover:underline" 
                        target="_blank" rel="noopener noreferrer">
                    State Bar
                  </Link>
                </li>
                <li><strong>Crisis Help:</strong> 1-800-799-7233</li>
                <li><strong>Child Support Help:</strong> 1-855-222-2670</li>
                <li><strong>DV Hotline:</strong> 1-800-799-7233 (24/7)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-purple-700">Search This Site</h3>
            <p className="text-sm text-gray-700">Use the search bar at the top of any page to find specific information.</p>
          </div>
        </div>

        {/* Important Reminder */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-yellow-800 mb-2">
                <strong>Remember:</strong> Laws change and every situation is unique. This FAQ provides general information only. 
                For specific legal advice, consult with an attorney.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-center items-center mt-12 pt-6 border-t border-gray-200">
          <Link href="/" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline">
            ← Home
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p><em>Last updated: January 30, 2024</em></p>
        </div>
      </div>
    </div>
  );
}