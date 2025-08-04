import Link from 'next/link';
import { ArrowLeft, Shield, Phone, MapPin, Package, CreditCard, Users, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Create a Safety Plan - Arizona',
  description: 'Comprehensive safety planning guide for domestic violence situations. Create a personalized plan to protect yourself and your children.',
};

export default function SafetyPlanPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Create Your Safety Plan</h1>
              <p className="text-purple-100">Personalized strategies to keep you safe</p>
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
          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-3">What is a Safety Plan?</h2>
            <p className="text-gray-700 mb-3">
              A safety plan is a personalized, practical plan to improve your safety while 
              experiencing abuse, preparing to leave, or after you leave. Having a plan 
              increases your safety and helps you think through options during stressful times.
            </p>
            <p className="text-sm text-purple-800 font-semibold">
              This guide helps you create your own plan. Consider printing or saving it somewhere safe.
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Safety During a Violent Incident</h2>
            
            <Card className="border-2 border-red-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-red-900">If Violence Seems Likely</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <div>
                          <span className="font-semibold">Avoid dangerous rooms:</span> Stay out of 
                          kitchens, bathrooms, garages where weapons might be available
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <div>
                          <span className="font-semibold">Get to safe room:</span> Go to a room with 
                          a door or window to escape
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <div>
                          <span className="font-semibold">Have phone accessible:</span> Keep charged 
                          phone hidden but accessible
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <div>
                          <span className="font-semibold">Create a code word:</span> With children, 
                          family, friends to signal need for help
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <div>
                          <span className="font-semibold">Practice escape routes:</span> Know all 
                          exits from your home
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Planning to Leave</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Important Documents to Gather</h3>
                      <p className="text-gray-700 mb-3">
                        Keep these in a safe place or give copies to someone you trust:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Driver&apos;s license/ID</li>
                          <li>• Birth certificates (yours & children&apos;s)</li>
                          <li>• Social Security cards</li>
                          <li>• Immigration papers</li>
                          <li>• Protection orders</li>
                          <li>• Divorce/custody papers</li>
                        </ul>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Medical records/prescriptions</li>
                          <li>• School records</li>
                          <li>• Insurance policies</li>
                          <li>• Bank account info</li>
                          <li>• Lease/deed</li>
                          <li>• Car registration/title</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CreditCard className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Financial Preparation</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Open bank account in your name only at different bank</li>
                        <li>• Save money secretly if possible (even small amounts help)</li>
                        <li>• Get credit card in your name only</li>
                        <li>• Keep change for phone calls/transportation</li>
                        <li>• Keep evidence of joint assets</li>
                        <li>• Get copies of tax returns</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Package className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Emergency Bag</h3>
                      <p className="text-gray-700 mb-3">
                        Pack and hide at trusted friend&apos;s house or safe location:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Clothes for you and children</li>
                          <li>• Toiletries</li>
                          <li>• Medications</li>
                          <li>• Keys (house, car, work)</li>
                          <li>• Cash/cards</li>
                        </ul>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Important documents</li>
                          <li>• Children&apos;s favorite toys</li>
                          <li>• Phone charger</li>
                          <li>• Photos (evidence & sentimental)</li>
                          <li>• Address book</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Safety After Leaving</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold mb-3">Location Safety</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Change locks immediately</li>
                    <li>• Install security system</li>
                    <li>• Change routes to work/school</li>
                    <li>• Shop at different stores</li>
                    <li>• Alert neighbors to call 911</li>
                    <li>• Screen all calls</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Workplace Safety</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Inform security/reception</li>
                    <li>• Provide abuser&apos;s photo</li>
                    <li>• Change work schedule if possible</li>
                    <li>• Have escorts to car</li>
                    <li>• Document all contact attempts</li>
                    <li>• Change parking spots</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Technology Safety</h2>
            <Card className="border-2 border-amber-300">
              <CardContent className="p-6">
                <AlertCircle className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-lg mb-3">Protect Your Digital Privacy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Phone Safety:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Get new phone/number abuser doesn&apos;t know</li>
                      <li>• Turn off location services</li>
                      <li>• Check for tracking apps</li>
                      <li>• Use passwords/biometrics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Online Safety:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Change all passwords</li>
                      <li>• Use safe computer at library/friend&apos;s</li>
                      <li>• Create new email account</li>
                      <li>• Block on social media</li>
                      <li>• Clear browser history</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Safety</h2>
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-lg mb-3">Protecting Your Children</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Teach them how and when to call 911</li>
                  <li>• Create code word for danger/need to leave</li>
                  <li>• Practice escape routes with them</li>
                  <li>• Teach them not to intervene in violence</li>
                  <li>• Inform school about situation and custody orders</li>
                  <li>• Provide school with copy of protection order</li>
                  <li>• Establish safe pickup/dropoff procedures</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Remember These Safety Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Trust Your Instincts</h4>
                <p className="text-gray-700 text-sm">
                  If a situation or person makes you uncomfortable, trust that feeling. 
                  Your intuition is a powerful safety tool.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">You&apos;re Not Alone</h4>
                <p className="text-gray-700 text-sm">
                  Advocates are available 24/7 to help you plan, provide support, and 
                  connect you with resources.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Document Everything</h4>
                <p className="text-gray-700 text-sm">
                  Keep records of all incidents, threats, and violations. Photos, texts, 
                  and witnesses can help with legal protection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Plan Ahead</h4>
                <p className="text-gray-700 text-sm">
                  Having a plan before you need it can save precious time in a crisis. 
                  Review and update your plan regularly.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 space-y-4">
            <Card className="bg-red-50 border-red-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-bold">24/7 Crisis Support Available</p>
                    <p className="text-gray-700">National DV Hotline: 1-800-799-7233</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/protection/emergency">
                <Button className="w-full" size="lg">
                  Emergency Resources
                </Button>
              </Link>
              <Link href="/protection/how-to-file">
                <Button variant="outline" className="w-full" size="lg">
                  Get Protection Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}