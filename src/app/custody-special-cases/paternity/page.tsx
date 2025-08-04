import Link from 'next/link';
import { ArrowLeft, Baby, FileText, Scale, AlertCircle, Shield, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Paternity Cases - Arizona',
  description: 'Establishing paternity, fathers rights, and custody for unmarried parents in Arizona. Legal process and rights explained.',
};

export default function PaternityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Baby className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Paternity & Unmarried Parents</h1>
              <p className="text-blue-100">Establishing legal rights for fathers and custody arrangements</p>
            </div>
          </div>
        </div>
      </div>

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

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Understanding Paternity in Arizona
                </h2>
                <p className="text-blue-800 mb-3">
                  When parents aren&apos;t married, establishing paternity is the first step to 
                  securing custody, visitation, and support rights.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold mb-2">Key Facts:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Mothers have sole custody until paternity is established</li>
                    <li>• Fathers have no legal rights without established paternity</li>
                    <li>• Paternity must be established before custody/support orders</li>
                    <li>• Can be established voluntarily or through court</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Ways to Establish Paternity</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Voluntary Acknowledgment</h3>
                      <p className="text-gray-700 mb-3">
                        Easiest method when both parents agree:
                      </p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">At Hospital:</h4>
                        <ul className="space-y-1 text-sm text-gray-700 mb-3">
                          <li>• Sign acknowledgment at birth</li>
                          <li>• Both parents must agree</li>
                          <li>• Added to birth certificate</li>
                          <li>• Immediate legal effect</li>
                        </ul>
                        <h4 className="font-semibold mb-2">After Birth:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Sign at Vital Records office</li>
                          <li>• Both parents present with ID</li>
                          <li>• Notarized signatures required</li>
                          <li>• Can rescind within 60 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Scale className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Court-Ordered Paternity</h3>
                      <p className="text-gray-700 mb-3">
                        When voluntary acknowledgment isn&apos;t possible:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">File Petition:</span> Either parent can 
                            file to establish paternity
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Genetic Testing:</span> Court can order 
                            DNA testing (99%+ accuracy)
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Legal Determination:</span> Judge issues 
                            order establishing paternity
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <div>
                            <span className="font-semibold">Rights Established:</span> Can then seek 
                            custody, visitation, support
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">After Paternity is Established</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-purple-300">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Father&apos;s Rights</h3>
                  <p className="text-gray-700 mb-3">
                    Once paternity is established:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Can petition for custody/visitation</li>
                    <li>• Equal consideration for custody</li>
                    <li>• Decision-making authority rights</li>
                    <li>• Access to child&apos;s records</li>
                    <li>• Can object to adoption</li>
                    <li>• Inheritance rights established</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-300">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Child&apos;s Benefits</h3>
                  <p className="text-gray-700 mb-3">
                    Establishing paternity helps children:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Financial support from both parents</li>
                    <li>• Health insurance coverage</li>
                    <li>• Social Security/veterans benefits</li>
                    <li>• Inheritance rights</li>
                    <li>• Medical history access</li>
                    <li>• Relationship with both parents</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">The Legal Process</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">File Paternity Action</h3>
                      <p className="text-gray-700 mb-3">
                        Either parent can initiate:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• File Petition to Establish Paternity</li>
                        <li>• Include request for custody/support if desired</li>
                        <li>• Serve other parent with papers</li>
                        <li>• May include temporary orders request</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Genetic Testing (If Needed)</h3>
                      <p className="text-gray-700 mb-3">
                        When paternity is disputed:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Court orders DNA testing</li>
                        <li>• Simple cheek swab for father, mother, child</li>
                        <li>• Results in 1-2 weeks</li>
                        <li>• Cost typically split between parents</li>
                        <li>• If father confirmed, he may pay full cost</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Custody & Support Orders</h3>
                      <p className="text-gray-700 mb-3">
                        After paternity established:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Create parenting plan</li>
                        <li>• Determine legal decision-making</li>
                        <li>• Set parenting time schedule</li>
                        <li>• Calculate child support</li>
                        <li>• Address health insurance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Signing birth certificate doesn&apos;t establish legal paternity in Arizona</li>
                  <li>• Married men are presumed fathers of children born during marriage</li>
                  <li>• Paternity can be challenged within specific time limits</li>
                  <li>• Once established, paternity is difficult to undo</li>
                  <li>• Child support may be ordered retroactively</li>
                  <li>• Mother cannot deny visitation once paternity established</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Mother Seeking Support</h3>
                  <p className="text-gray-700 mb-2">
                    If father won&apos;t acknowledge paternity:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• File paternity action</li>
                    <li>• Request genetic testing</li>
                    <li>• Seek child support order</li>
                    <li>• Can include past support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Father Seeking Rights</h3>
                  <p className="text-gray-700 mb-2">
                    If mother denies access:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• File to establish paternity</li>
                    <li>• Request immediate temporary orders</li>
                    <li>• Seek joint legal decision-making</li>
                    <li>• Establish parenting time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Disputed Paternity</h3>
                  <p className="text-gray-700 mb-2">
                    When father questions paternity:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Can request testing before acknowledging</li>
                    <li>• Court will order if reasonable doubt</li>
                    <li>• May contest within time limits</li>
                    <li>• Legal standards apply</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Timeline Considerations</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Voluntary Acknowledgment:</p>
                  <p className="text-gray-700 text-sm">60 days to rescind after signing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Court Process:</p>
                  <p className="text-gray-700 text-sm">3-6 months typical if contested</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Support Orders:</p>
                  <p className="text-gray-700 text-sm">Can be retroactive to birth or filing</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms/petition-establish-paternity">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Paternity Forms
                </Button>
              </Link>
              <Link href="/resources/paternity-acknowledgment">
                <Button variant="outline" className="w-full">
                  Acknowledgment Process
                </Button>
              </Link>
              <Link href="/child-custody/establish-order">
                <Button variant="outline" className="w-full">
                  Custody After Paternity
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline" className="w-full">
                  Find Legal Help
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}