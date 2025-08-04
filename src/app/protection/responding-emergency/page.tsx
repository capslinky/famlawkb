import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Shield, FileText, Gavel, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Responding to Emergency Protection Order - Arizona',
  description: 'What to do if you have been served with an emergency order of protection or injunction. Understanding your rights and required actions.',
};

export default function RespondingEmergencyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Served with Emergency Protection Order</h1>
              <p className="text-red-100">Immediate compliance required - Hearing coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/get-protection" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Protection Orders
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">
                  This Order is Immediately Effective
                </h2>
                <p className="text-red-800 font-semibold mb-3">
                  You must comply with all terms NOW - violations are criminal offenses
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-300">
                  <h3 className="font-semibold mb-2">Typical Emergency Order Requirements:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• No contact with protected person(s)</li>
                    <li>• Stay away from home, work, school</li>
                    <li>• No weapons possession</li>
                    <li>• Move out immediately if ordered</li>
                    <li>• Surrender firearms to law enforcement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Immediate Actions Required</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Read the Order Carefully</h3>
                      <p className="text-gray-700 mb-3">
                        Understand every requirement - ignorance is not a defense:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Who is protected (may include children/others)</li>
                        <li>• Prohibited locations and distances</li>
                        <li>• Communication restrictions (including third-party)</li>
                        <li>• Custody/parenting time changes</li>
                        <li>• Property you must return</li>
                        <li>• Hearing date and time</li>
                      </ul>
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
                      <h3 className="font-bold text-lg mb-2">Comply Immediately</h3>
                      <div className="bg-orange-50 rounded-lg p-4 mb-3">
                        <p className="font-semibold text-orange-900">
                          Even if you disagree, you MUST comply now and challenge it at the hearing
                        </p>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Leave immediately</span> if ordered to 
                            vacate shared residence
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Do not contact</span> protected person, 
                            even to discuss the order
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Turn in weapons</span> to law enforcement 
                            if required
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Get Legal Help Immediately</h3>
                      <p className="text-gray-700 mb-3">
                        You have very limited time before the hearing:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Contact Today:</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Criminal defense attorney</li>
                            <li>• Family law attorney</li>
                            <li>• Legal aid if qualified</li>
                            <li>• Bar referral service</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Attorney Can Help:</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Explain your rights</li>
                            <li>• Prepare defense</li>
                            <li>• Gather evidence</li>
                            <li>• Represent at hearing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Prepare for the Hearing</h3>
                      <p className="text-gray-700 mb-3">
                        The hearing will determine if order continues:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Mark hearing date/time - typically within 10-15 days</li>
                        <li>• Gather evidence disproving allegations</li>
                        <li>• List witnesses who can testify for you</li>
                        <li>• Document compliance with order</li>
                        <li>• Prepare your testimony</li>
                        <li>• Dress appropriately for court</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Understanding Violations</h2>
            <Card className="border-2 border-red-400 bg-red-50">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 text-red-900">Violation Consequences</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Criminal Penalties:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Immediate arrest</li>
                      <li>• Class 1 misdemeanor (minimum)</li>
                      <li>• Up to 6 months jail</li>
                      <li>• Fines up to $2,500</li>
                      <li>• Felony if aggravated</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What Counts as Violation:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Any contact (calls, texts, emails, social media)</li>
                      <li>• Having someone else contact for you</li>
                      <li>• Going to prohibited places</li>
                      <li>• &quot;Accidental&quot; encounters you don&apos;t immediately leave</li>
                      <li>• Sending gifts or messages</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Gavel className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">At the Hearing</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Present evidence and testimony</li>
                    <li>• Cross-examine witnesses</li>
                    <li>• Have attorney representation</li>
                    <li>• Request modifications</li>
                    <li>• Challenge false allegations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Order doesn&apos;t mean guilt</li>
                    <li>• Standard is preponderance</li>
                    <li>• Can request mutual order</li>
                    <li>• May affect other cases</li>
                    <li>• Can appeal if extended</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Critical Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Do NOT try to &quot;work it out&quot; with protected person</li>
                  <li>• Do NOT respond if they contact you - report it</li>
                  <li>• Keep proof of compliance (receipts, witnesses)</li>
                  <li>• Understand this may affect gun rights</li>
                  <li>• May impact professional licenses</li>
                  <li>• Can affect immigration status</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Immediate Action Checklist</h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Read entire order and understand all requirements</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Comply with all terms immediately</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Contact attorney today</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Calendar hearing date and time</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Begin gathering evidence and witnesses</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>Document your compliance</span>
              </label>
            </div>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="tel:602-257-4434" className="block w-full">
              <Button className="w-full" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Legal Referral Service
              </Button>
            </Link>
            <Link href="/resources/emergency-legal-help">
              <Button variant="outline" className="w-full" size="lg">
                Find Emergency Legal Help
              </Button>
            </Link>
          </div>

          <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Remember: Compliance now, challenge at hearing. Your safety and freedom 
              depend on following the order exactly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}