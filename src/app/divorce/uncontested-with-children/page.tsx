/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, CheckCircle, FileText, Clock, Users, AlertCircle, Calculator, Heart, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Uncontested Divorce With Children - Arizona',
  description: 'Complete guide to filing an uncontested divorce with children in Arizona. Includes parenting plan requirements, child support calculations, and parenting education.',
};

export default function UncontestedWithChildrenPage() {
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
          <h1 className="text-4xl font-bold mb-6">Uncontested Divorce With Children</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Protecting Your Children's Best Interests</h2>
                <p className="text-gray-700 mb-3">
                  When children are involved, Arizona courts require additional steps to ensure their wellbeing, 
                  even in uncontested cases where parents agree on everything.
                </p>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <h3 className="font-medium mb-2">This process requires:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Detailed parenting plan covering custody and visitation</li>
                    <li>• Child support calculation using Arizona guidelines</li>
                    <li>• Completion of court-approved parenting education program</li>
                    <li>• Court review of all child-related agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 60-day waiting period</li>
                  <li>• Parenting class: 4+ hours each parent</li>
                  <li>• Total time: 3-6 months typical</li>
                  <li>• Brief court hearing likely required</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Additional Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Parenting class: $45-75 per person</li>
                  <li>• Additional court fees: $50-100</li>
                  <li>• Child support setup fees may apply</li>
                  <li>• Total additional: $150-300</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comprehensive Parenting Plan</li>
                  <li>• Child Support Worksheet</li>
                  <li>• Order of Assignment for Support</li>
                  <li>• Parenting education certificates</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Child-Related Requirements</h2>
              <p className="text-gray-600 mb-6">
                Arizona courts take children's wellbeing seriously. Even in uncontested cases, you must address these three critical areas:
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="w-8 h-8 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">1. Comprehensive Parenting Plan</h3>
                        <p className="text-gray-600 mb-4">
                          A detailed written agreement covering all aspects of your children's care and custody.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Legal Decision Making:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Medical decisions</li>
                              <li>• Educational choices</li>
                              <li>• Religious upbringing</li>
                              <li>• Extracurricular activities</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Parenting Time Schedule:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Regular weekly schedule</li>
                              <li>• Holiday and vacation time</li>
                              <li>• Summer break arrangements</li>
                              <li>• Transportation details</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/child-custody">
                            <Button size="sm" variant="outline">
                              <Calendar className="w-4 h-4 mr-2" />
                              Parenting Plan Templates
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Calculator className="w-8 h-8 text-green-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">2. Child Support Calculation</h3>
                        <p className="text-gray-600 mb-4">
                          Arizona uses specific guidelines to calculate child support based on both parents' income and parenting time.
                        </p>
                        <div className="bg-green-50 rounded-lg p-4 mb-4">
                          <h4 className="font-medium mb-2">Calculation Factors:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Both parents' gross monthly income</li>
                              <li>• Number of children</li>
                              <li>• Parenting time percentage</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Health insurance premiums</li>
                              <li>• Childcare costs</li>
                              <li>• Special medical needs</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4 mb-4">
                          <p className="text-sm text-amber-700 font-medium">
                            ⚠️ Important: Child support cannot be waived or \"agreed away\" - it's the child's legal right.
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Link href="/support/calculator">
                            <Button size="sm">
                              <Calculator className="w-4 h-4 mr-2" />
                              Calculate Support
                            </Button>
                          </Link>
                          <Link href="/topics/child-support">
                            <Button size="sm" variant="outline">
                              Support Guidelines
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <BookOpen className="w-8 h-8 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">3. Parent Education Program</h3>
                        <p className="text-gray-600 mb-4">
                          Both parents must complete a court-approved parenting class focusing on helping children cope with divorce.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Class Topics Include:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Children's emotional reactions</li>
                              <li>• Effective co-parenting strategies</li>
                              <li>• Communication skills</li>
                              <li>• Managing conflict</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Requirements:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Minimum 4 hours duration</li>
                              <li>• Must be court-approved provider</li>
                              <li>• Certificate required for finalization</li>
                              <li>• Cost: typically $45-75 per person</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button size="sm" variant="outline">
                            <Users className="w-4 h-4 mr-2" />
                            Find Approved Classes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Complete Step-by-Step Process</h2>
              <p className="text-gray-600 mb-6">
                Follow this detailed roadmap to successfully complete your uncontested divorce with children:
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Preparation Phase</h3>
                        <p className="text-gray-600 mb-3">
                          Before filing, gather all documents and create your child-related agreements:
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Essential Tasks:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Collect all standard divorce documents</li>
                              <li>• Gather children's records (birth certificates, school, medical)</li>
                              <li>• Calculate both parents' income accurately</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Draft preliminary parenting schedule</li>
                              <li>• Research parenting education classes</li>
                              <li>• Discuss and agree on major decisions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Create Comprehensive Parenting Plan</h3>
                        <p className="text-gray-600 mb-3">
                          Develop a detailed parenting plan that covers all aspects of your children's care:
                        </p>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Core Components:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Regular parenting time schedule</li>
                                <li>• Holiday and special occasion schedule</li>
                                <li>• Summer vacation arrangements</li>
                                <li>• Transportation responsibilities</li>
                              </ul>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Decision-making authority</li>
                                <li>• Communication protocols</li>
                                <li>• Dispute resolution methods</li>
                                <li>• Future modification procedures</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Link href="/child-custody">
                              <Button size="sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                Parenting Plan Template
                              </Button>
                            </Link>
                            <Button size="sm" variant="outline">
                              <Users className="w-4 h-4 mr-2" />
                              Schedule Examples
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Calculate Child Support</h3>
                        <p className="text-gray-600 mb-3">
                          Use Arizona's official guidelines to determine the correct support amount:
                        </p>
                        <div className="bg-green-50 rounded-lg p-4 mb-3">
                          <h4 className="font-medium mb-2">Information You'll Need:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Both parents' gross monthly income</li>
                              <li>• Number of children from this relationship</li>
                              <li>• Percentage of parenting time for each parent</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Health insurance premium costs</li>
                              <li>• Childcare expenses (if applicable)</li>
                              <li>• Special needs or medical costs</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3 mb-3">
                          <p className="text-sm text-amber-700">
                            📝 Note: Even if you agree on an amount, it must be close to guideline calculations or the court may reject it.
                          </p>
                        </div>
                        <Link href="/support/calculator">
                          <Button size="sm">
                            <Calculator className="w-4 h-4 mr-2" />
                            Calculate Support Amount
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Enroll in Parent Education</h3>
                        <p className="text-gray-600 mb-3">
                          Both parents must complete parenting education before the divorce can be finalized:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Class Requirements:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Minimum 4 hours of instruction</li>
                              <li>• Court-approved curriculum</li>
                              <li>• In-person or online options available</li>
                              <li>• Certificate of completion required</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">What You'll Learn:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Effects of divorce on children</li>
                              <li>• Effective co-parenting strategies</li>
                              <li>• Communication and conflict resolution</li>
                              <li>• Supporting children through transition</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button size="sm" variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Find Approved Classes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Complete and File Court Documents</h3>
                        <p className="text-gray-600 mb-3">
                          Prepare all required forms including your child-specific documents:
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Required Forms Package:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium mb-1">Standard Divorce Forms:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Petition for Dissolution</li>
                                <li>• Summons</li>
                                <li>• Preliminary Injunction</li>
                                <li>• Financial Affidavit</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium mb-1">Child-Related Forms:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Parenting Plan</li>
                                <li>• Child Support Worksheet</li>
                                <li>• Order of Assignment</li>
                                <li>• Parenting education certificates</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href="/forms/divorce-petition-children">
                            <Button size="sm">
                              <FileText className="w-4 h-4 mr-2" />
                              Get Complete Forms Package
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
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        6
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Serve Your Spouse</h3>
                        <p className="text-gray-600 mb-3">
                          Provide legal notice to your spouse about the divorce proceedings:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2 text-green-700">Acceptance of Service (Recommended)</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              Since this is uncontested, your spouse can voluntarily accept service by signing the form.
                            </p>
                            <p className="text-xs text-green-600 font-medium">✓ Faster and less expensive</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2 text-blue-700">Formal Service</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              Use process server or sheriff's department if needed.
                            </p>
                            <p className="text-xs text-blue-600 font-medium">Cost: $75-150</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                        7
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-3 text-lg">Finalize Your Divorce</h3>
                        <p className="text-gray-600 mb-3">
                          After meeting all requirements, complete the final steps:
                        </p>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Final Requirements Checklist:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• ✓ 60-day waiting period has passed</li>
                              <li>• ✓ Both parents completed parenting education</li>
                              <li>• ✓ All financial disclosures exchanged</li>
                              <li>• ✓ Parenting plan and child support agreed upon</li>
                              <li>• ✓ Consent decree prepared and signed</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Court Review Process:</h4>
                            <p className="text-sm text-gray-600">
                              Unlike simple divorces, cases with children typically require a brief court hearing where the judge will review your parenting plan and child support arrangements to ensure they're in the children's best interests.
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
              <h2 className="text-2xl font-semibold mb-6">Common Parenting Schedule Options</h2>
              <p className="text-gray-600 mb-6">
                Choose a schedule that works for your family's unique situation. Consider children's ages, school schedules, work commitments, and proximity between homes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-blue-600 mt-0.5" />
                      <h3 className="font-semibold text-lg">Week On/Week Off</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Children alternate full weeks with each parent. Exchange typically occurs on Sunday evening or Monday morning.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• School-age children (8+)</li>
                        <li>• Parents living close together</li>
                        <li>• Stable work schedules</li>
                        <li>• Equal parenting time (50/50)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-green-600 mt-0.5" />
                      <h3 className="font-semibold text-lg">2-2-3 Schedule</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Monday-Tuesday with Parent A, Wednesday-Thursday with Parent B, alternating Friday-Sunday weekends.
                    </p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Younger children (under 8)</li>
                        <li>• More frequent contact with both parents</li>
                        <li>• Flexible work schedules</li>
                        <li>• Equal parenting time (50/50)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-purple-600 mt-0.5" />
                      <h3 className="font-semibold text-lg">Every Other Weekend</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      One parent has weekdays and alternating weekends, other parent gets every other weekend plus one weeknight.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Best For:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Traditional schedule preference</li>
                        <li>• Parents with different work demands</li>
                        <li>• School-focused arrangements</li>
                        <li>• Approximate 70/30 split</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-orange-600 mt-0.5" />
                      <h3 className="font-semibold text-lg">Custom Schedule</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Design your own schedule based on work shifts, school activities, children's preferences, and family needs.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium mb-1">Consider:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Shift work schedules</li>
                        <li>• Extended family involvement</li>
                        <li>• Special needs or activities</li>
                        <li>• Distance between homes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold mb-3">💡 Pro Tips for Creating Your Schedule</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Consider children's ages - younger children may need more frequent transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Factor in school and extracurricular activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Plan for holidays, birthdays, and special events</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Include flexibility for schedule changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Address transportation responsibilities clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Plan for summer breaks and school vacations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Important Considerations for Parents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                      <h3 className="font-semibold text-amber-700">Legal Requirements</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Child support is the child's legal right and cannot be waived</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Court will review all agreements for children's best interests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Both parents must complete parenting education before finalization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Parenting plans must be detailed and comprehensive</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Heart className="w-6 h-6 text-red-600 mt-0.5" />
                      <h3 className="font-semibold text-red-700">Children's Wellbeing</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Consider future changes (school moves, activities, growth)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Plan for children's input as they get older</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Maintain stability in schools and friendships when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Include provisions for communication between parents</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-4">
                Choose your next step based on where you are in the process:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/support/calculator">
                  <Button className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Support
                  </Button>
                </Link>
                <Link href="/child-custody">
                  <Button className="w-full" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Parenting Plans
                  </Button>
                </Link>
                <Link href="/forms/divorce-petition-children">
                  <Button className="w-full" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Forms
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button className="w-full" variant="outline">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Take Assessment
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