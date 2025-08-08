import Link from 'next/link';
import { ArrowLeft, AlertOctagon, Clock, Scale, FileText, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Late Response - After 20 Days - Arizona',
  description: 'What to do if you missed the deadline to respond to legal papers in Arizona. Options for late responses.',
};

export default function LateResponsePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertOctagon className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Response Deadline Passed</h1>
              <p className="text-gray-300">You may still have options - act immediately</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/modules/responding" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Responding Overview
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 border-2 border-gray-400 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-gray-700 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Your Response Deadline Has Passed
                </h2>
                <p className="text-gray-700 mb-3">
                  Missing the deadline doesn&apos;t mean your case is over, but you must act quickly 
                  to protect your rights. The other party may seek a default judgment against you.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-300">
                  <h3 className="font-semibold mb-2">Current Status Check:</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. Check if default has been entered (call court clerk)</li>
                    <li>2. Determine how many days past deadline</li>
                    <li>3. Find out if other party has taken action</li>
                    <li>4. Act based on current status</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-red-300">
              <CardContent className="p-6">
                <Gavel className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Default Risk</h3>
                <p className="text-red-600 font-semibold mb-2">CRITICAL</p>
                <p className="text-gray-600">
                  Other party can request default judgment, giving them everything they asked for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300">
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Legal Help</h3>
                <p className="text-blue-600 font-semibold mb-2">STRONGLY ADVISED</p>
                <p className="text-gray-600">
                  An attorney can best help you navigate late response options and procedures.
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Your Options Based on Case Status</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-900">
                    Scenario 1: No Default Entered Yet
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If the other party hasn&apos;t filed for default judgment:
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Immediate Actions:</h4>
                    <ol className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">1.</span>
                        <div>
                          <span className="font-semibold">File Response TODAY</span>
                          <p className="text-sm text-gray-600">
                            Even late, filing before default prevents automatic judgment
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">2.</span>
                        <div>
                          <span className="font-semibold">Contact Other Party&apos;s Attorney</span>
                          <p className="text-sm text-gray-600">
                            They may agree to accept late filing without seeking default
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">3.</span>
                        <div>
                          <span className="font-semibold">File Motion for Extension</span>
                          <p className="text-sm text-gray-600">
                            Ask court to accept late filing for good cause
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-orange-900">
                    Scenario 2: Default Entered, No Judgment Yet
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If default was entered but no final judgment:
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Required Actions:</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-700">1.</span>
                        <div>
                          <span className="font-semibold">File Motion to Set Aside Default</span>
                          <p className="text-sm text-gray-600">
                            Must show: (1) good reason for delay, (2) meritorious defense, 
                            (3) no prejudice to other party
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-700">2.</span>
                        <div>
                          <span className="font-semibold">Include Proposed Response</span>
                          <p className="text-sm text-gray-600">
                            Attach your response to show you have valid defenses
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-700">3.</span>
                        <div>
                          <span className="font-semibold">Request Hearing</span>
                          <p className="text-sm text-gray-600">
                            Judge will decide whether to set aside default
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-900">
                    Scenario 3: Default Judgment Entered
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If final judgment was entered by default:
                  </p>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Limited Options:</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">1.</span>
                        <div>
                          <span className="font-semibold">Rule 60 Motion (within 6 months)</span>
                          <p className="text-sm text-gray-600">
                            Must prove: mistake, inadvertence, surprise, excusable neglect, 
                            or fraud
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">2.</span>
                        <div>
                          <span className="font-semibold">Appeal (within 30 days)</span>
                          <p className="text-sm text-gray-600">
                            Limited grounds - usually must show legal error
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">3.</span>
                        <div>
                          <span className="font-semibold">Negotiate with Other Party</span>
                          <p className="text-sm text-gray-600">
                            They may agree to set aside judgment by stipulation
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Excuses Courts May Accept</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Valid Reasons</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Serious illness or hospitalization</li>
                    <li>✓ Death in immediate family</li>
                    <li>✓ Never properly served</li>
                    <li>✓ Mental health crisis</li>
                    <li>✓ Incarceration</li>
                    <li>✓ Natural disaster</li>
                    <li>✓ Attorney error (if you had one)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-3">Usually Not Accepted</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ Didn&apos;t understand importance</li>
                    <li>✗ Too busy with work</li>
                    <li>✗ Forgot about deadline</li>
                    <li>✗ Hoped it would go away</li>
                    <li>✗ Couldn&apos;t afford attorney</li>
                    <li>✗ Disagreed with lawsuit</li>
                    <li>✗ Out of town (unless extended)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertOctagon className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Critical Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Every day of delay makes it harder to fix</li>
                  <li>• Default judgments are enforceable immediately</li>
                  <li>• Wages can be garnished, accounts frozen</li>
                  <li>• Property liens can be placed</li>
                  <li>• Custody/support orders take effect</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Service & Court Basics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">If No Default Yet</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• File your response immediately</li>
                    <li>• Serve the other party and file proof</li>
                    <li>• Ask for an extension if needed</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">If Default Entered</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• File motion to set aside default</li>
                    <li>• Attach your proposed response</li>
                    <li>• Request a prompt hearing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">If Judgment Entered</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Consider Rule 60 motion (time-limited)</li>
                    <li>• Consider appeal (strict timelines)</li>
                    <li>• Seek legal advice immediately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Immediate Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Today:</h4>
                <Link href="/resources/legal-representation">
                  <Button className="w-full mb-2">Find Emergency Legal Help</Button>
                </Link>
                <Link href="tel:602-252-3432" className="block">
                  <Button variant="outline" className="w-full" >
                  <FileText className="w-4 h-4 mr-2" />
                  Call Court Clerk
                </Button>
                </Link>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Forms You May Need:</h4>
                <Link href="/forms">
                  <Button variant="outline" className="w-full mb-2">
                    Motion to Set Aside Default
                  </Button>
                </Link>
                <Link href="/forms">
                  <Button variant="outline" className="w-full">
                    Late Response Forms
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-gray-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Don&apos;t give up! Even with a late response, you may still be able to 
              participate in your case. Get help immediately.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
