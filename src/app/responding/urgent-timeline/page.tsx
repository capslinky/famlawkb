import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Clock, Calendar, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Urgent Response Required - Within 10 Days - Arizona',
  description: 'What to do when you have less than 10 days to respond to legal papers in Arizona. Urgent timeline guidance.',
};

export default function UrgentTimelinePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">URGENT: Response Required</h1>
              <p className="text-red-100">You have limited time to protect your rights</p>
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
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">
                  Act Now - You Have Less Than 10 Days
                </h2>
                <p className="text-red-800 font-semibold mb-3">
                  Missing your deadline can result in a default judgment against you.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold mb-2">Calculate Your Exact Deadline:</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. Find the date you were served (on the papers)</li>
                    <li>2. If served in Arizona: Add 20 calendar days</li>
                    <li>3. If served outside Arizona: Add 30 calendar days</li>
                    <li>4. If deadline falls on weekend/holiday: Next business day</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-orange-300">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Days Remaining</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">1-10 Days</p>
                <p className="text-gray-600">
                  Every day counts. Start preparing your response immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Default Risk</h3>
                <p className="text-red-600 font-semibold mb-2">HIGH</p>
                <p className="text-gray-600">
                  The other party can get a default judgment if you don&apos;t respond on time.
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-red-900">Immediate Action Steps</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">TODAY: Get Legal Help</h3>
                      <p className="text-gray-700 mb-3">
                        With less than 10 days, professional help is strongly recommended.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <p className="font-semibold">Emergency Legal Resources:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Call the State Bar lawyer referral: 602-257-4434</li>
                          <li>• Contact legal aid if low income</li>
                          <li>• Many attorneys offer same-day consultations</li>
                          <li>• Ask about emergency filing assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Identify What You Were Served</h3>
                      <p className="text-gray-700 mb-3">
                        Your response depends on the type of legal papers:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div>
                            <span className="font-semibold">Divorce Petition:</span>
                            <span className="text-gray-600"> File a Response to Petition</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div>
                            <span className="font-semibold">Motion:</span>
                            <span className="text-gray-600"> File a Response to Motion</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
                          <div>
                            <span className="font-semibold">Order to Show Cause:</span>
                            <span className="text-gray-600"> Prepare for hearing</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Gather Essential Information</h3>
                      <p className="text-gray-700 mb-3">
                        Even with limited time, collect these critical items:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-sm mb-2">Documents:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Copy of papers served</li>
                            <li>• Case number</li>
                            <li>• Marriage certificate</li>
                            <li>• Financial records</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-2">Information:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Date of marriage</li>
                            <li>• Children&apos;s information</li>
                            <li>• Income details</li>
                            <li>• Property list</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">File Your Response</h3>
                      <p className="text-gray-700 mb-3">
                        Once prepared, file immediately:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• File at the same court where case was filed</li>
                        <li>• Bring original plus 2 copies</li>
                        <li>• Pay filing fee (or request waiver)</li>
                        <li>• Mail copy to other party or their attorney</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              If You Can&apos;t Meet the Deadline
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                Even if you think you&apos;ll miss the deadline, take action:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <div>
                    <span className="font-semibold">File Late:</span> Better late than never. 
                    You may still avoid default if other party hasn&apos;t filed for it yet.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <div>
                    <span className="font-semibold">Contact Other Party:</span> Their attorney 
                    may agree to an extension if asked professionally.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <div>
                    <span className="font-semibold">File Motion to Set Aside:</span> If default 
                    entered, you can ask court to set it aside for good cause.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Emergency Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Get Forms Now</h4>
                <div className="space-y-2">
                  <Link href="/forms/response-petition">
                    <Button className="w-full">Response to Petition Form</Button>
                  </Link>
                  <Link href="/forms/response-motion">
                    <Button variant="outline" className="w-full">Response to Motion Form</Button>
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Immediate Help</h4>
                <div className="space-y-2">
                  <a href="tel:602-257-4434">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Legal Referral
                    </Button>
                  </a>
                  <Link href="/resources/self-representation-guide">
                    <Button variant="outline" className="w-full">
                      Self-Help Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-red-100 rounded-lg text-center">
            <p className="font-bold text-red-900">
              Remember: Every hour counts when you have less than 10 days. 
              Take action TODAY.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}