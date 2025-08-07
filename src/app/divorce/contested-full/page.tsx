/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { BreadcrumbCompact } from '@/components/ui/breadcrumb';
import { ArrowLeft, AlertTriangle, Clock, DollarSign, Scale, FileText, Users, BookOpen, Heart, CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Contested Divorce Process - Arizona',
  description: 'Complete guide to contested divorce in Arizona when spouses disagree on terms. Understand the litigation process, costs, and strategies.',
};

export default function ContestedDivorcePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/getting-divorced" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Divorce Overview
          </Link>
          <div className="mt-2">
            <BreadcrumbCompact />
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Contested Divorce Process</h1>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">When Spouses Can't Agree</h2>
                <p className="text-gray-700 mb-3">
                  A contested divorce occurs when spouses disagree on major issues like custody, property division, or spousal support. 
                  The court must intervene to make final decisions through a formal legal process.
                </p>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <h3 className="font-medium mb-2">This process involves:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Formal discovery and evidence gathering</li>
                    <li>• Multiple court hearings and deadlines</li>
                    <li>• Potential trial with judge's final decision</li>
                    <li>• Significantly higher costs and longer timeline</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                  <p className="text-sm font-semibold text-red-800">
                    ⚖️ Strong recommendation: Consult with an experienced family law attorney for contested cases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">What Makes a Divorce Contested?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Major Disagreements</h3>
                  <p className="text-gray-600 mb-3">Any significant dispute that can't be resolved through negotiation:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Child custody and parenting time</strong></li>
                    <li>• <strong>Child support amounts</strong></li>
                    <li>• <strong>Property and debt division</strong></li>
                    <li>• <strong>Spousal maintenance (alimony)</strong></li>
                    <li>• <strong>Business valuation and division</strong></li>
                    <li>• <strong>Retirement account division</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-3">High-Conflict Situations</h3>
                  <p className="text-gray-600 mb-3">Special circumstances requiring court protection:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Domestic violence allegations</strong></li>
                    <li>• <strong>Hidden or dissipated assets</strong></li>
                    <li>• <strong>Substance abuse concerns</strong></li>
                    <li>• <strong>Mental health issues affecting children</strong></li>
                    <li>• <strong>International custody disputes</strong></li>
                    <li>• <strong>Complex business interests</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Reality Check: What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Simple contested:</strong> 6-12 months</li>
                    <li>• <strong>Complex cases:</strong> 1-3 years</li>
                    <li>• <strong>High-conflict:</strong> 2+ years</li>
                    <li>• <strong>Multiple hearings</strong> and deadlines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Financial Reality</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Attorney fees:</strong> $5,000-$50,000+</li>
                    <li>• <strong>Expert witnesses:</strong> $2,000-$10,000</li>
                    <li>• <strong>Court costs:</strong> $500-$2,000</li>
                    <li>• <strong>Total cost:</strong> Often $10,000-$100,000+</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Emotional Impact</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>High stress</strong> for all family members</li>
                    <li>• <strong>Public court proceedings</strong></li>
                    <li>• <strong>Loss of control</strong> over final outcome</li>
                    <li>• <strong>Long-term effects</strong> on children</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Complete Contested Divorce Process</h2>
              <p className="text-gray-600 mb-6">
                Understanding each phase helps you prepare for what's ahead. Each step has specific deadlines and requirements that must be met.
              </p>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Filing and Service (Month 1)</h3>
                        <p className="text-gray-600 mb-3">
                          The petitioner initiates the divorce by filing formal court documents and ensuring proper legal notice to the spouse.
                        </p>
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Key Actions:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• File Petition for Dissolution with the court</li>
                            <li>• Serve spouse within 120 days (formal process server required)</li>
                            <li>• Preliminary injunction automatically takes effect</li>
                            <li>• Request temporary orders if immediate relief needed</li>
                          </ul>
                        </div>
                        <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                          <p className="text-sm text-amber-700">
                            💡 <strong>Pro Tip:</strong> Consider requesting temporary orders early for child support, custody, and exclusive use of residence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Response and Temporary Orders (Months 1-3)</h3>
                        <p className="text-gray-600 mb-3">
                          The respondent must file a formal response, and either party can request temporary court orders to address immediate needs while the case proceeds.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Response Requirements:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Response due within 20 days (Arizona residents)</li>
                              <li>• 30 days for out-of-state respondents</li>
                              <li>• Must admit or deny each allegation</li>
                              <li>• Can file counter-petition with own requests</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Temporary Orders May Include:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Exclusive use of family residence</li>
                              <li>• Temporary child custody and support</li>
                              <li>• Temporary spousal maintenance</li>
                              <li>• Restraining orders or protection</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-3">
                          <Link href="/modules/temporary-orders">
                            <Button size="sm" variant="outline">
                              <Clock className="w-4 h-4 mr-2" />
                              Temporary Orders Guide
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Discovery Phase (Months 3-9)</h3>
                        <p className="text-gray-600 mb-3">
                          The most intensive phase where both parties gather evidence, exchange financial information, and build their cases for trial.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-orange-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Mandatory Disclosures:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Complete financial affidavits within 40 days</li>
                              <li>• Exchange tax returns, pay stubs, bank statements</li>
                              <li>• List all assets, debts, and income sources</li>
                              <li>• Provide children's medical and school records</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Additional Discovery Tools:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Interrogatories (written questions under oath)</li>
                              <li>• Depositions (sworn testimony before court reporter)</li>
                              <li>• Document subpoenas to third parties</li>
                              <li>• Expert evaluations (custody, business, real estate)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                          <p className="text-sm text-amber-700">
                            ⚠️ <strong>Critical:</strong> Failure to comply with discovery deadlines can result in sanctions or default judgment.
                          </p>
                        </div>
                        <div className="mt-3">
                          <Link href="/modules/disclosures">
                            <Button size="sm" variant="outline">
                              <FileText className="w-4 h-4 mr-2" />
                              Discovery & Disclosures Guide
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Settlement Attempts (Months 6-10)</h3>
                        <p className="text-gray-600 mb-3">
                          Courts strongly encourage settlement to avoid the costs and uncertainty of trial. This phase focuses on resolving disputes through negotiation.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Mandatory Settlement Processes:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Court-ordered mediation for child custody disputes</li>
                              <li>• Settlement conferences facilitated by retired judges</li>
                              <li>• Early neutral evaluation for complex financial issues</li>
                              <li>• Collaborative law process (if both parties agree)</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Settlement Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Control over the outcome vs. judge's decision</li>
                              <li>• Significant cost savings (often 50-80% less)</li>
                              <li>• Faster resolution and less stress</li>
                              <li>• Privacy (vs. public trial proceedings)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-green-100 rounded-lg">
                          <p className="text-sm text-green-700">
                            💰 <strong>Financial Reality:</strong> 90% of contested cases settle before trial. Those that go to trial typically cost 3-5x more.
                          </p>
                        </div>
                        <div className="mt-3">
                          <Link href="/modules/mediation">
                            <Button size="sm" variant="outline">
                              <Users className="w-4 h-4 mr-2" />
                              Mediation & Settlement Guide
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Trial Preparation (Months 10-12+)</h3>
                        <p className="text-gray-600 mb-3">
                          If settlement attempts fail, both parties must prepare for trial where a judge will make final decisions about all disputed issues.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Pre-Trial Requirements:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Pre-trial statements outlining your case</li>
                              <li>• Witness lists and exhibit inventories</li>
                              <li>• Trial briefs on legal issues</li>
                              <li>• Final settlement conference with judge</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Evidence Preparation:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Organize all documents chronologically</li>
                              <li>• Prepare witness testimony and questions</li>
                              <li>• Create exhibits and demonstrative aids</li>
                              <li>• Anticipate opposing party's arguments</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-red-100 rounded-lg">
                          <p className="text-sm text-red-700">
                            ⚖️ <strong>Trial Reality:</strong> Judge controls the outcome. You lose control over decisions affecting your family and finances.
                          </p>
                        </div>
                        <div className="mt-3">
                          <Link href="/modules/trial-prep">
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Trial Preparation Guide
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg">
                        6
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Trial and Final Decision (Month 12+)</h3>
                        <p className="text-gray-600 mb-3">
                          The formal trial where both parties present their cases to a judge who will make binding decisions on all contested issues.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Trial Process:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Opening statements by both attorneys</li>
                              <li>• Presentation of evidence and witness testimony</li>
                              <li>• Cross-examination of witnesses</li>
                              <li>• Closing arguments summarizing positions</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">After Trial:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Judge issues written decree (may take weeks)</li>
                              <li>• Decree becomes final and binding</li>
                              <li>• 30-day window to file appeal</li>
                              <li>• Implementation of court orders begins</li>
                            </ul>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mt-3">
                          <div className="p-3 bg-red-100 rounded-lg">
                            <p className="text-sm text-red-700 font-medium">
                              ⚠️ No guaranteed outcome - judge's decision is final
                            </p>
                          </div>
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <p className="text-sm text-blue-700 font-medium">
                              📊 Only 10% of cases actually reach trial
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Strategic Considerations for Success</h2>
              <p className="text-gray-600 mb-6">
                Contested divorces require careful strategy and preparation. These approaches can significantly impact your outcome and costs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <FileText className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-3 text-lg">Document Everything Meticulously</h3>
                    <p className="text-gray-600 mb-3">
                      In contested cases, documentation becomes evidence. Start collecting and organizing records immediately.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Critical Records:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• All communications with spouse (emails, texts)</li>
                        <li>• Financial transactions and account statements</li>
                        <li>• Parenting time logs and school activities</li>
                        <li>• Photos, videos, and incident reports</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-3 text-lg">Prioritize Children's Best Interests</h3>
                    <p className="text-gray-600 mb-3">
                      Courts always prioritize children. Demonstrate you're the parent focused on their wellbeing.
                    </p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Show the Court:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent involvement in children's lives</li>
                        <li>• Willingness to cooperate with other parent</li>
                        <li>• Stable home environment and routines</li>
                        <li>• Support for children's relationship with both parents</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <Scale className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold mb-3 text-lg">Present Reasonable Positions</h3>
                    <p className="text-gray-600 mb-3">
                      Extreme demands hurt your credibility. Courts favor balanced, evidence-based proposals.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Winning Approach:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Base requests on facts and law, not emotions</li>
                        <li>• Show flexibility and willingness to compromise</li>
                        <li>• Focus on fairness and practical solutions</li>
                        <li>• Avoid personal attacks on your spouse</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <DollarSign className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold mb-3 text-lg">Conduct Cost-Benefit Analysis</h3>
                    <p className="text-gray-600 mb-3">
                      Fighting over every issue can cost more than what you're fighting for. Choose battles strategically.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Before Fighting, Ask:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• What will this dispute cost in legal fees?</li>
                        <li>• What's the realistic best-case outcome?</li>
                        <li>• Is this worth the emotional toll on family?</li>
                        <li>• Are there bigger issues to focus on?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Critical Do's and Don'ts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold text-green-700 text-lg">Essential DO's</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Follow all court orders exactly</strong> - Violations can result in contempt charges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Communicate through attorneys</strong> - Reduces conflict and creates records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Keep detailed records and evidence</strong> - Document everything relevant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Prepare thoroughly for all hearings</strong> - Know your facts and timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong>Consider settlement opportunities seriously</strong> - Control vs. uncertainty</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h3 className="font-semibold text-red-700 text-lg">Critical DON'Ts</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span><strong>Never hide assets or lie to court</strong> - Can result in sanctions and credibility loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span><strong>Don't violate preliminary injunctions</strong> - Can lead to contempt and jail time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span><strong>Avoid discussing case on social media</strong> - Everything can become evidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span><strong>Don't use children as messengers</strong> - Harms children and your case</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span><strong>Avoid major financial decisions</strong> - Wait until case is resolved</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Getting Professional Help</h2>
              <p className="text-gray-600 mb-6">
                Contested divorces involve complex legal procedures, strict deadlines, and significant financial consequences. 
                Most people benefit from professional guidance to protect their interests.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-3">When You Need an Attorney</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Complex property or business interests</li>
                      <li>• Child custody disputes</li>
                      <li>• Domestic violence allegations</li>
                      <li>• Hidden or dissipated assets</li>
                      <li>• High-conflict situations</li>
                      <li>• Significant income disparities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <BookOpen className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-3">Self-Representation Considerations</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Simple asset division cases only</li>
                      <li>• Both parties cooperative</li>
                      <li>• No children or custody disputes</li>
                      <li>• Limited financial resources</li>
                      <li>• Willingness to learn court procedures</li>
                      <li>• Understanding of legal risks</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Next Steps</h3>
                <p className="text-gray-700 mb-4">
                  Whether you choose self-representation or hire an attorney, understanding the process helps you make informed decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/resources/legal-representation">
                    <Button className="w-full sm:w-auto">
                      <Users className="w-4 h-4 mr-2" />
                      Find an Attorney
                    </Button>
                  </Link>
                  <Link href="/resources/self-representation-guide">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Self-Representation Guide
                    </Button>
                  </Link>
                  <Link href="/assessment">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Take Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
