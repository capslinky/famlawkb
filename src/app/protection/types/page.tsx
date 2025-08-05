import Link from 'next/link';
import { ArrowLeft, Shield, Users, User, Scale, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Types of Protection Orders - Arizona',
  description: 'Understanding the differences between Orders of Protection, Injunctions Against Harassment, and Emergency Orders in Arizona.',
};

export default function TypesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Types of Protection Orders</h1>
              <p className="text-purple-100">Choose the right order for your situation</p>
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
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-3">Quick Decision Guide</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Have/had a relationship with the person?</p>
                  <p className="text-gray-700">→ Order of Protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">No relationship with the person?</p>
                  <p className="text-gray-700">→ Injunction Against Harassment</p>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Protection Order Comparison</h2>
            
            <div className="space-y-6">
              <Card className="border-2 border-purple-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Shield className="w-10 h-10 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Order of Protection</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-purple-900">Who Can File:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Current or former spouse</li>
                            <li>• Dating/intimate partner</li>
                            <li>• Parent of your child</li>
                            <li>• Blood relatives</li>
                            <li>• In-laws (current/former)</li>
                            <li>• Current/former roommates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-purple-900">Requirements:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Act of domestic violence</li>
                            <li>• Within past year (usually)</li>
                            <li>• Reasonable fear of future harm</li>
                            <li>• No filing fee</li>
                            <li>• Criminal penalties for violation</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Can Include:</h4>
                        <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                          <li>• No contact order</li>
                          <li>• Stay away from home/work</li>
                          <li>• Temporary custody</li>
                          <li>• Pet protection</li>
                          <li>• Weapon restrictions</li>
                          <li>• Counseling requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Scale className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Injunction Against Harassment</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-900">Who Can File:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Anyone not eligible for OOP</li>
                            <li>• Neighbors</li>
                            <li>• Coworkers</li>
                            <li>• Acquaintances</li>
                            <li>• Strangers</li>
                            <li>• Online harassers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-900">Requirements:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Series of acts (2+ usually)</li>
                            <li>• Directed at you</li>
                            <li>• Would alarm/annoy reasonable person</li>
                            <li>• No legitimate purpose</li>
                            <li>• May have filing fee</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Can Include:</h4>
                        <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                          <li>• No contact order</li>
                          <li>• Stay away orders</li>
                          <li>• Workplace restrictions</li>
                          <li>• No following/surveillance</li>
                          <li>• Online contact prohibition</li>
                          <li>• Third-party contact ban</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="w-10 h-10 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Emergency Orders of Protection</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-red-900">When Available:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Courts closed</li>
                            <li>• After hours/weekends</li>
                            <li>• Immediate danger</li>
                            <li>• Through police</li>
                            <li>• Judge approval by phone</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-red-900">Key Features:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Valid until next court day</li>
                            <li>• Must file regular order ASAP</li>
                            <li>• Same protections available</li>
                            <li>• Immediate enforcement</li>
                            <li>• No fee</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 bg-red-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-red-900">
                          Emergency orders are temporary bridges to regular orders - you must follow 
                          up with court filing on the next business day
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Duration and Renewal</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Initial Order</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">1 Year</p>
                  <p className="text-gray-600 text-sm">
                    Standard duration for both OOP and IAH after hearing
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Renewal</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">1+ Years</p>
                  <p className="text-gray-600 text-sm">
                    Can be renewed before expiration, potentially indefinitely
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Modification</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">Anytime</p>
                  <p className="text-gray-600 text-sm">
                    Either party can request changes with good cause
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Common Misconceptions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• You do NOT need physical violence for a protection order</li>
                  <li>• Threats, stalking, and harassment qualify</li>
                  <li>• Protection orders are NOT criminal charges</li>
                  <li>• You can have both criminal case AND protection order</li>
                  <li>• Orders are valid nationwide once served</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Which Order Should I File?</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold mb-2">File Order of Protection if:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ You have/had intimate or family relationship</li>
                  <li>✓ Domestic violence occurred</li>
                  <li>✓ You need custody/support provisions</li>
                  <li>✓ You want strongest criminal penalties</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold mb-2">File Injunction Against Harassment if:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ No qualifying relationship exists</li>
                  <li>✓ Multiple incidents of harassment</li>
                  <li>✓ Neighbor, coworker, stranger</li>
                  <li>✓ Online/cyber harassment</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/protection/how-to-file">
                <Button className="w-full">
                  How to File
                </Button>
              </Link>
              <Link href="/protection/emergency">
                <Button variant="outline" className="w-full">
                  Emergency Protection
                </Button>
              </Link>
              <Link href="/protection/safety-plan">
                <Button variant="outline" className="w-full">
                  Create Safety Plan
                </Button>
              </Link>
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  Download Forms
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}