import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Users, Clock, Heart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Establish Custody Order - Arizona',
  description: 'How to establish initial custody and parenting time orders in Arizona when no court order exists.',
};

export default function EstablishCustodyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/child-custody" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Child Custody
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Establish Custody Order</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-2">No Current Court Order?</h2>
                <p className="text-gray-700">
                  If you&apos;ve never had a court order for custody, you need to establish 
                  legal decision making and 
                  parenting time through the court.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Who Can File</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Biological parents</li>
                  <li>• Legal parents (adoption)</li>
                  <li>• Some third parties (limited)</li>
                  <li>• Child must live in AZ 6+ months</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uncontested: 2-4 months</li>
                  <li>• Contested: 6-12+ months</li>
                  <li>• Emergency: 24-72 hours</li>
                  <li>• Temporary orders: 30-60 days</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cases</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Parents Were Married</h3>
                    <p className="text-gray-600 mb-3">
                      File as part of divorce or legal separation. Both parents have equal rights initially.
                    </p>
                    <Link href="/getting-divorced">
                      <Button variant="outline" size="sm">Divorce Process</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Parents Never Married</h3>
                    <p className="text-gray-600 mb-3">
                      Must establish paternity first. Mother has sole custody 
                      until court order.
                    </p>
                    <Link href="/custody-special-cases/paternity">
                      <Button variant="outline" size="sm">Paternity Info</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Third Party (Non-Parent)</h3>
                    <p className="text-gray-600 mb-3">
                      Grandparents or others must prove parents are unfit or 
                      it would harm child to be with parents.
                    </p>
                    <Link href="/child-custody">
                      <Button variant="outline" size="sm">Third Party Rights</Button>
                    </Link>
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
                        <h3 className="font-semibold mb-2">Determine Case Type</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Divorce with children</li>
                          <li>• Paternity/custody only</li>
                          <li>• Legal separation</li>
                          <li>• Third party petition</li>
                        </ul>
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
                        <h3 className="font-semibold mb-2">File Initial Documents</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Petition for custody/paternity</li>
                          <li>• Proposed parenting plan</li>
                          <li>• Child support worksheet</li>
                          <li>• UCCJEA affidavit (jurisdiction)</li>
                        </ul>
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
                        <h3 className="font-semibold mb-2">Serve Other Parent</h3>
                        <p className="text-gray-600 text-sm mb-2">
                          Must formally serve within 120 days of filing.
                        </p>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Use process server or sheriff</li>
                          <li>• Cannot serve yourself</li>
                          <li>• Get proof of service</li>
                        </ul>
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
                        <h3 className="font-semibold mb-2">Attend Parent Education</h3>
                        <p className="text-gray-600 text-sm">
                          Both parents must complete court-approved parenting class 
                          focused on impact of divorce/separation on children.
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
                        <h3 className="font-semibold mb-2">Attempt Agreement</h3>
                        <p className="text-gray-600 text-sm">
                          Courts prefer parents to agree. May require 
                          mediation to help reach agreement.
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
                        <h3 className="font-semibold mb-2">Final Orders</h3>
                        <p className="text-gray-600 text-sm">
                          If agreement: Submit consent decree. If not: Prepare for 
                          trial where judge decides.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What Courts Consider (Best Interests)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <Heart className="w-6 h-6 text-red-600 mb-2" />
                    <h3 className="font-semibold mb-2">Parent-Child Relationship</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Historical caregiving roles</li>
                      <li>• Emotional bonds</li>
                      <li>• Parent&apos;s involvement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-6 h-6 text-blue-600 mb-2" />
                    <h3 className="font-semibold mb-2">Cooperation</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Willingness to co-parent</li>
                      <li>• Supporting other parent&apos;s relationship</li>
                      <li>• Communication ability</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <FileText className="w-6 h-6 text-green-600 mb-2" />
                    <h3 className="font-semibold mb-2">Stability</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Home environment</li>
                      <li>• School/community ties</li>
                      <li>• Work schedules</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <AlertCircle className="w-6 h-6 text-orange-600 mb-2" />
                    <h3 className="font-semibold mb-2">Safety Concerns</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Domestic violence history</li>
                      <li>• Substance abuse</li>
                      <li>• Mental health issues</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Arizona presumes joint legal decision-making is best (with exceptions)</li>
                    <li>• No preference for mothers over fathers</li>
                    <li>• Child&apos;s wishes considered if mature enough</li>
                    <li>• Past caregiving roles are important but not determinative</li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Next Steps</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/forms">
                  <Button className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Custody Forms
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="w-full">
                    Create Parenting Plan
                  </Button>
                </Link>
                <Link href="/modules/temporary-orders">
                  <Button variant="outline" className="w-full">
                    Request Temporary Orders
                  </Button>
                </Link>
                <Link href="/support/calculator">
                  <Button variant="outline" className="w-full">
                    Calculate Child Support
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