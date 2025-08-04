import Link from 'next/link';
import { ArrowLeft, CheckCircle, FileText, Clock, Users, AlertCircle, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Uncontested Divorce With Children - Arizona',
  description: 'Guide to filing an uncontested divorce with children in Arizona. Includes parenting plan and child support requirements.',
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
              <Users className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">Additional Requirements for Parents</h2>
                <p className="text-gray-700">
                  When children are involved, you must address custody, support, and complete 
                  required parenting education, even in uncontested cases.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 60-day waiting period</li>
                  <li>• Parenting class: 4+ hours</li>
                  <li>• Total time: 3-5 months typical</li>
                  <li>• May require brief court hearing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Additional Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Parenting Plan</li>
                  <li>• Child Support Worksheet</li>
                  <li>• Order of Assignment (wage garnishment)</li>
                  <li>• Parenting class certificates</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Requirements Beyond Basic Divorce</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Parenting Plan Agreement
                    </h3>
                    <ul className="space-y-2 text-gray-600 ml-7">
                      <li>• Legal Decision Making (joint or sole)</li>
                      <li>• Parenting Time schedule</li>
                      <li>• Holiday and vacation schedules</li>
                      <li>• Transportation arrangements</li>
                      <li>• Communication methods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-green-600" />
                      Child Support Agreement
                    </h3>
                    <ul className="space-y-2 text-gray-600 ml-7">
                      <li>• Calculate using Arizona Guidelines</li>
                      <li>• Include health insurance costs</li>
                      <li>• Address childcare expenses</li>
                      <li>• Set up wage assignment</li>
                      <li>• Cannot waive child support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Parent Education Program
                    </h3>
                    <p className="text-gray-600 ml-7">
                      Both parents must complete court-approved parenting class before 
                      divorce can be finalized. Classes cover co-parenting and minimizing 
                      impact on children.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Complete All Standard Divorce Forms</h3>
                        <p className="text-gray-600">
                          Include Petition, Summons, and Preliminary Injunction
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Create Detailed Parenting Plan</h3>
                        <p className="text-gray-600">
                          Work together to create comprehensive schedule. Use court&apos;s 
                          template or online tools.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Calculate Child Support</h3>
                        <p className="text-gray-600">
                          Use Arizona Child Support Calculator. Include both incomes, 
                          parenting time, and expenses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Enroll in Parent Education</h3>
                        <p className="text-gray-600">
                          Both parents must register and complete class. Keep certificates 
                          for court.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">File and Serve</h3>
                        <p className="text-gray-600">
                          File all documents with court. Serve spouse (can use Acceptance 
                          of Service if cooperative).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                        6
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Finalize with Court</h3>
                        <p className="text-gray-600">
                          After 60 days and completing all requirements, submit final 
                          decree. May need brief hearing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Common Parenting Schedules</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Week On/Week Off</h3>
                    <p className="text-gray-600">
                      Children alternate weeks with each parent. Works well for 
                      older children and close proximity.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">2-2-3 Schedule</h3>
                    <p className="text-gray-600">
                      Mon-Tue with one parent, Wed-Thu with other, alternate weekends. 
                      Good for younger children.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Every Other Weekend</h3>
                    <p className="text-gray-600">
                      One parent has weekdays, other has alternating weekends 
                      plus one evening. Traditional schedule.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Custom Schedule</h3>
                    <p className="text-gray-600">
                      Create your own based on work schedules, school, and 
                      children&apos;s needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Important Reminders</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Child support is the right of the child and cannot be waived</li>
                    <li>• Court will review parenting plan for best interests of children</li>
                    <li>• Both parents must complete parenting class before finalization</li>
                    <li>• Consider future changes (school, activities, relocation)</li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Resources & Next Steps</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/support/calculator">
                  <Button className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Child Support
                  </Button>
                </Link>
                <Link href="/resources/parenting-plan-flowchart">
                  <Button className="w-full" variant="outline">
                    Create Parenting Plan
                  </Button>
                </Link>
                <Link href="/forms/divorce-with-children">
                  <Button className="w-full" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Forms Package
                  </Button>
                </Link>
                <Link href="/resources/parenting-class">
                  <Button className="w-full" variant="outline">
                    Find Parenting Classes
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