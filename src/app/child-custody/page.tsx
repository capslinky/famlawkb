/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Shield, Calendar, FileCheck, AlertCircle, Book, Scale, Clock, Info, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Child Custody in Arizona - Complete Legal Guide | Legal Decision-Making & Parenting Time',
  description: 'Comprehensive guide to Arizona child custody laws, legal decision-making, parenting time, best interests factors, and custody process.',
  keywords: 'Arizona child custody, legal decision-making, parenting time, best interests, custody process, custody modification'
};

export default function ChildCustodyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Child Custody (Legal Decision-Making) in Arizona</h1>

            {/* At a Glance Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-blue-900">At a Glance</h2>
                  <p className="text-blue-800 mb-3">
                    <strong>Quick Summary:</strong> Arizona uses "legal decision-making" instead of "custody" to emphasize both parents' roles. 
                    Courts focus on the child's best interests, with a preference for joint decision-making unless it would harm the child.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Who This Affects:</strong> All parents going through divorce, separation, or paternity cases with minor children under 18.
                    </div>
                    <div>
                      <strong>Typical Timeline:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Temporary orders: 30-60 days</li>
                        <li>Final orders: 6-12 months</li>
                        <li>Modifications: 3-6 months</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-green-700 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    What You Should Know
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Both parents have equal rights - no gender preference
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Joint custody is preferred but not guaranteed
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      "Best interests" determined by specific factors
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Children's wishes considered but not controlling
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-amber-700 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important Warnings
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Domestic violence creates presumption against joint custody
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Must wait 1 year to modify (except emergencies)
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Parenting time is separate from decision-making
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Never withhold children without court orders
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Legal Basis & Statutes */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-3">Legal Basis & Key Statutes</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <h3 className="font-medium mb-2">Arizona Statutes</h3>
                  <ul className="space-y-1">
                    <li>• A.R.S. § 25-403 — Best interests factors</li>
                    <li>• A.R.S. § 25-403.01 — Legal decision-making; parenting time</li>
                    <li>• A.R.S. § 25-403.02 — Parenting plans; requirements</li>
                    <li>• A.R.S. § 25-403.03 — Domestic violence; presumption</li>
                    <li>• A.R.S. § 25-411 — Modification of orders</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Important Principles</h3>
                  <ul className="space-y-1">
                    <li>• Courts must consider all § 25-403 best interests factors</li>
                    <li>• Significant domestic violence creates a presumption against joint decision-making</li>
                    <li>• Parenting time and decision-making are separate determinations</li>
                    <li>• Modifying orders generally requires a substantial and continuing change</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards - Keep existing UX */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Establish Custody</h3>
                <p className="text-gray-600 mb-4">
                  File for custody orders if you don't have any court orders yet.
                </p>
                <Link href="/custody/establish-order">
                  <Button variant="outline" size="sm">Start Process</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Parenting Plans</h3>
                <p className="text-gray-600 mb-4">
                  Create a detailed schedule for holidays, vacations, and daily care.
                </p>
                <Link href="/modules/temporary-orders">
                  <Button variant="outline" size="sm">Plan Templates</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileCheck className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Modify Custody</h3>
                <p className="text-gray-600 mb-4">
                  Change existing orders due to relocation or changed circumstances.
                </p>
                <Link href="/modules/modifications">
                  <Button variant="outline" size="sm">Modification Guide</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertCircle className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Emergency Orders</h3>
                <p className="text-gray-600 mb-4">
                  Get immediate help if your child is in danger.
                </p>
                <Link href="/emergency-help">
                  <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-50">
                    Emergency Help
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Understanding Legal Terms */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Book className="w-6 h-6 text-blue-600" />
                Understanding Legal Terms
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Arizona's 2013 Terminology Change</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Old Terms ❌</h4>
                      <ul className="space-y-1">
                        <li>• Custody</li>
                        <li>• Physical Custody</li>
                        <li>• Visitation</li>
                        <li>• Custodial Parent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">New Terms ✅</h4>
                      <ul className="space-y-1">
                        <li>• Legal Decision-Making</li>
                        <li>• Parenting Time</li>
                        <li>• Parenting Time</li>
                        <li>• Primary Residential Parent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Legal Decision-Making</h4>
                  <p className="text-sm text-gray-700 mb-2">Authority to make major decisions about:</p>
                  <ul className="text-sm space-y-1">
                    <li>🏫 Education (school choice, special needs)</li>
                    <li>🏥 Healthcare (medical, dental, mental health)</li>
                    <li>⛪ Religious upbringing</li>
                    <li>🏠 Personal care decisions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Parenting Time</h4>
                  <p className="text-sm text-gray-700 mb-2">Each parent's scheduled time with the child, including:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Overnights and day visits</li>
                    <li>• Holidays and vacations</li>
                    <li>• Regular weekly schedule</li>
                    <li>• Summer break arrangements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of Custody */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-blue-600" />
                Types of Custody
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Joint Legal Decision-Making</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What It Means:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Both parents share major decisions</li>
                      <li>• Must consult and attempt agreement</li>
                      <li>• Neither has "tie-breaking" authority</li>
                      <li>• Can be joint even with unequal parenting time</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">When Courts Order It:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Parents can communicate reasonably</li>
                      <li>• Both are fit parents</li>
                      <li>• No domestic violence history</li>
                      <li>• Child benefits from both parents' input</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-amber-200 bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-amber-800">Sole Legal Decision-Making</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What It Means:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• One parent makes final decisions</li>
                      <li>• Other parent still has input rights</li>
                      <li>• Usually includes parenting time for both</li>
                      <li>• Must still inform other parent</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">When Courts Order It:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• History of domestic violence</li>
                      <li>• Substance abuse issues</li>
                      <li>• Mental health concerns</li>
                      <li>• Complete inability to cooperate</li>
                      <li>• One parent absent/uninvolved</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Hybrid Arrangements</h4>
                <p className="text-sm mb-2">Courts can divide decision-making by category:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div><strong>Education</strong> → Parent A</div>
                  <div><strong>Healthcare</strong> → Parent B</div>
                  <div><strong>Religion</strong> → Joint</div>
                  <div><strong>Activities</strong> → By residence</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Interests Factors */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-blue-600" />
                Best Interests Factors
              </h2>
              
              <div className="mb-4">
                <p className="text-gray-700">Arizona law requires courts to consider ALL relevant factors (A.R.S. § 25-403):</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">1. Past, Present & Future Relationships</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Each parent's relationship with child</li>
                      <li>• Historical caregiving roles</li>
                      <li>• Emotional bonds</li>
                      <li>• Time spent together</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">2. Child's Adjustment</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Current living situation</li>
                      <li>• School performance</li>
                      <li>• Community ties</li>
                      <li>• Stability needs</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2">3. Mental & Physical Health</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• All parties' health status</li>
                      <li>• Special needs considerations</li>
                      <li>• Ability to care for child</li>
                      <li>• Treatment compliance</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold mb-2">4. Domestic Violence/Abuse</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Creates presumption against custody</li>
                      <li>• Safety paramount</li>
                      <li>• Protection order impact</li>
                      <li>• Supervised visitation possible</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2">5. Substance Abuse</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Current or past issues</li>
                      <li>• Treatment participation</li>
                      <li>• Testing may be required</li>
                      <li>• Impact on parenting ability</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2">6. Who's More Likely to Allow Contact</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Encouraging other parent's relationship</li>
                      <li>• Not alienating child</li>
                      <li>• Following court orders</li>
                      <li>• Communication facilitation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Additional Considerations</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>• Child's wishes (if mature enough)</div>
                  <div>• Primary caregiver history</div>
                  <div>• Work schedules and availability</div>
                  <div>• Geographic proximity</div>
                  <div>• False abuse allegations</div>
                  <div>• Coercion or duress</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Custody Process */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                The Custody Process
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Filing (Week 1)</h3>
                    <div className="mb-3">
                      <h4 className="font-medium text-sm mb-1">Required Documents:</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div>☐ Petition for Custody/Divorce</div>
                        <div>☐ Parenting Plan proposal</div>
                        <div>☐ Child support worksheet</div>
                        <div>☐ Affidavit regarding children</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Filing Fees:</strong> ~$350 (waivable if low-income)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Temporary Orders (Week 2-8)</h3>
                    <p className="text-sm text-gray-700 mb-2"><strong>Purpose:</strong> Immediate stability for children</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-1">What's Decided:</h4>
                        <ul className="space-y-1">
                          <li>• Where children live</li>
                          <li>• Temporary schedule</li>
                          <li>• Decision-making authority</li>
                          <li>• Child support amount</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Process:</h4>
                        <ol className="space-y-1">
                          <li>1. File motion for temporary orders</li>
                          <li>2. Serve other parent</li>
                          <li>3. Attend hearing (usually 30-60 days)</li>
                          <li>4. Present evidence briefly</li>
                          <li>5. Judge issues temporary orders</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Discovery & Evaluation (Months 2-6)</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-1">Information Gathering:</h4>
                        <ul className="space-y-1">
                          <li>• Financial records</li>
                          <li>• School/medical records</li>
                          <li>• Witness statements</li>
                          <li>• Expert evaluations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Custody Evaluation (if ordered):</h4>
                        <ul className="space-y-1">
                          <li>• Court-appointed expert</li>
                          <li>• Home visits</li>
                          <li>• Parent/child interviews</li>
                          <li>• Psychological testing</li>
                          <li>• Report with recommendations</li>
                          <li>• Cost: $3,000-10,000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Mediation (Months 3-7)</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <h4 className="font-medium mb-1">Required for Custody Disputes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Court-ordered mediation</li>
                        <li>• Confidential process</li>
                        <li>• Focus on agreement</li>
                        <li>• If successful, binding</li>
                        <li>• If not, proceed to trial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Trial or Settlement (Months 6-12)</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <h4 className="font-medium mb-1 text-green-800">Settlement (80% of cases):</h4>
                        <ul className="space-y-1">
                          <li>• Negotiate agreement</li>
                          <li>• Submit to court</li>
                          <li>• Brief hearing</li>
                          <li>• Court approval</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <h4 className="font-medium mb-1 text-red-800">Trial (20% of cases):</h4>
                        <ul className="space-y-1">
                          <li>• Present evidence</li>
                          <li>• Witness testimony</li>
                          <li>• Expert opinions</li>
                          <li>• Judge decides</li>
                          <li>• Detailed orders issued</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Questions */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">At what age can a child choose?</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>No magic age in Arizona</strong>. Courts consider:
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600 ml-4">
                    <li>• Child's maturity level</li>
                    <li>• Reasoning ability</li>
                    <li>• Understanding consequences</li>
                    <li>• Whether preference is genuine</li>
                    <li>• More weight as child gets older (12+)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Can I move with my child?</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Relocation requires:</strong>
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600 ml-4">
                    <li>• 60 days written notice</li>
                    <li>• Other parent can object</li>
                    <li>• Court hearing if contested</li>
                    <li>• Best interests analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What if my ex won't follow orders?</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Enforcement options:</strong>
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600 ml-4">
                    <li>• File for contempt</li>
                    <li>• Request make-up time</li>
                    <li>• Seek attorney fees</li>
                    <li>• Modify orders</li>
                    <li>• Criminal charges (severe cases)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How does domestic violence affect custody?</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Significant impact:</strong>
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600 ml-4">
                    <li>• Presumption against joint custody</li>
                    <li>• Possible supervised visits</li>
                    <li>• Safety measures required</li>
                    <li>• Batterer's intervention ordered</li>
                    <li>• Protection orders considered</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Common Mistakes to Avoid
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-red-700">During the Case</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Bad-mouthing other parent</strong> to children</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Withholding children</strong> without court order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Making unilateral decisions</strong> during case</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Discussing case</strong> with children</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Social media posts</strong> about other parent</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-red-700">Evidence Mistakes</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Secret recordings</strong> (often inadmissible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Hearsay evidence</strong> without witnesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Character attacks</strong> vs. parenting focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Old incidents</strong> unless pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Involving children</strong> as witnesses</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-red-700">Strategic Errors</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>All-or-nothing approach</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Refusing reasonable requests</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ignoring court orders</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Missing deadlines</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Alienating behaviors</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Get Help Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get Help</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Do You Need a Lawyer?</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-green-700">Consider self-representation if:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Both parents agree</li>
                      <li>• Simple situation</li>
                      <li>• No abuse/addiction issues</li>
                      <li>• Good communication</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-red-700">Get a lawyer if:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• High conflict</li>
                      <li>• Abuse allegations</li>
                      <li>• Complex schedules needed</li>
                      <li>• Interstate issues</li>
                      <li>• Evaluation ordered</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Legal Resources</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-medium">Free/Low-Cost Help:</h4>
                      <ul className="mt-1 space-y-1">
                        <li>• <a href="https://www.azcourts.gov/selfservicecenter" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Court Self-Help Centers</a></li>
                        <li>• <a href="https://www.azlawhelp.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Arizona Legal Aid</a></li>
                        <li>• <a href="https://www.vlparizona.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Volunteer Lawyers</a></li>
                        <li>• <a href="https://www.azbar.org/FindLawyer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">State Bar Referral</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Parenting Resources:</h4>
                      <ul className="mt-1 space-y-1">
                        <li>• <a href="https://www.ourfamilywizard.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Our Family Wizard</a> - Co-parenting app</li>
                        <li>• <a href="https://www.azcourts.gov/familylaw/Parenting-Time-Calculator" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Parenting Time Calculator</a></li>
                        <li>• <a href="https://www.superiorcourt.maricopa.gov/family/parent-information-program/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Co-Parent Classes</a></li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <h4 className="font-medium text-red-800 mb-1">Emergency Contacts:</h4>
                      <ul className="space-y-1 text-red-700">
                        <li>• <strong>Child Crisis:</strong> <a href="tel:1-800-969-5437" className="underline">1-800-969-5437</a></li>
                        <li>• <strong>Domestic Violence:</strong> <a href="tel:1-800-799-7233" className="underline">1-800-799-7233</a></li>
                        <li>• <strong>Emergency:</strong> <a href="tel:911" className="underline">911</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Need personalized guidance?</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Answer a few questions to get specific information for your custody situation.
                </p>
                <Link href="/assessment">
                  <Button className="w-full">Take Assessment</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Legal Terms Glossary</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Understand legal terminology used in custody cases.
                </p>
                <Link href="/glossary">
                  <Button variant="outline" className="w-full">
                    <Book className="w-4 h-4 mr-2" />
                    View Glossary
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. 
              Laws change frequently, and every situation is unique. Always consult with a qualified Arizona attorney for specific legal matters.
              Last updated: January 30, 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
