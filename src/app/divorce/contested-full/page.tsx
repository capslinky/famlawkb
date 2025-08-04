import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Clock, DollarSign, Scale, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Contested Divorce Process - Arizona',
  description: 'Complete guide to contested divorce in Arizona when spouses disagree on terms. Understand the litigation process.',
};

export default function ContestedDivorcePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/getting-divorced" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Divorce Overview
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Contested Divorce Process</h1>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Complex Legal Process Ahead</h2>
                <p className="text-gray-700 mb-3">
                  A contested divorce involves court intervention to resolve disagreements. 
                  This process is longer, more expensive, and emotionally challenging.
                </p>
                <p className="text-sm font-semibold text-red-800">
                  Strong recommendation: Consult with an attorney for contested cases.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum: 6-12 months</li>
                  <li>• Complex cases: 1-2+ years</li>
                  <li>• Multiple court hearings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Attorney fees: $5,000-50,000+</li>
                  <li>• Expert witnesses</li>
                  <li>• Court costs and fees</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Common Disputes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Child custody/support</li>
                  <li>• Property division</li>
                  <li>• Spousal maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contested Divorce Timeline</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Filing and Service (Month 1)</h3>
                        <p className="text-gray-600 mb-2">
                          Petitioner files divorce papers. 
                          Respondent must be formally served.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• File Petition for Dissolution</li>
                          <li>• Serve spouse within 120 days</li>
                          <li>• Preliminary injunction takes effect</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Response and Temporary Orders (Months 1-3)</h3>
                        <p className="text-gray-600 mb-2">
                          Respondent files answer. Either party can request temporary orders.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Response due within 20 days (in-state)</li>
                          <li>• Request temporary support/custody</li>
                          <li>• Temporary orders hearing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Discovery Phase (Months 3-9)</h3>
                        <p className="text-gray-600 mb-2">
                          Exchange financial information and gather evidence.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Mandatory disclosure statements</li>
                          <li>• Interrogatories and depositions</li>
                          <li>• Subpoenas for documents</li>
                          <li>• Expert evaluations (custody, property)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Settlement Attempts (Months 6-10)</h3>
                        <p className="text-gray-600 mb-2">
                          Court often requires mediation or settlement conferences.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Mandatory mediation for custody</li>
                          <li>• Settlement conferences</li>
                          <li>• Negotiate through attorneys</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Trial Preparation (Months 10-12)</h3>
                        <p className="text-gray-600 mb-2">
                          If no settlement, prepare for trial.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Pre-trial statements</li>
                          <li>• Witness lists</li>
                          <li>• Exhibit preparation</li>
                          <li>• Trial briefs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
                        6
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Trial and Decision (Month 12+)</h3>
                        <p className="text-gray-600 mb-2">
                          Judge hears evidence and makes final decisions.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Present evidence and testimony</li>
                          <li>• Cross-examination</li>
                          <li>• Judge issues decree</li>
                          <li>• Possible appeals</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Strategies for Contested Cases</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <FileText className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-semibold mb-2">Document Everything</h3>
                    <p className="text-gray-600 text-sm">
                      Keep records of all communications, financial transactions, 
                      and parenting activities. These become evidence.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="w-6 h-6 text-green-600 mb-2" />
                    <h3 className="font-semibold mb-2">Focus on Children</h3>
                    <p className="text-gray-600 text-sm">
                      Courts prioritize best interests of children. 
                      Show you&apos;re the cooperative parent.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Scale className="w-6 h-6 text-purple-600 mb-2" />
                    <h3 className="font-semibold mb-2">Be Reasonable</h3>
                    <p className="text-gray-600 text-sm">
                      Extreme positions rarely win. Courts favor fair, 
                      reasonable proposals backed by evidence.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <DollarSign className="w-6 h-6 text-orange-600 mb-2" />
                    <h3 className="font-semibold mb-2">Consider Costs</h3>
                    <p className="text-gray-600 text-sm">
                      Fighting over $10,000 can cost $20,000 in legal fees. 
                      Choose battles wisely.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Critical Do&apos;s and Don&apos;ts
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">DO:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ Follow all court orders exactly</li>
                    <li>✓ Communicate through attorneys</li>
                    <li>✓ Keep emotions out of decisions</li>
                    <li>✓ Prepare thoroughly for hearings</li>
                    <li>✓ Consider settlement seriously</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">DON&apos;T:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✗ Hide assets or lie to court</li>
                    <li>✗ Violate preliminary injunction</li>
                    <li>✗ Discuss case on social media</li>
                    <li>✗ Use children as messengers</li>
                    <li>✗ Make major purchases/changes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Get Professional Help</h3>
              <p className="text-gray-700 mb-4">
                Contested divorces are complex. Most people need professional assistance 
                to protect their rights and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/resources/self-representation-guide">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Self-Representation Guide
                  </Button>
                </Link>
                <Link href="/resources/legal-representation">
                  <Button className="w-full sm:w-auto">
                    Finding an Attorney
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}