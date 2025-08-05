/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Shield, Phone, MapPin, Package, CreditCard, Users, FileText, AlertCircle, Clock, Eye, Home, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// import SafetyPlanChecklist from '@/components/SafetyPlanChecklist';

export const metadata = {
  title: 'Complete Safety Planning Guide - Arizona',
  description: 'Comprehensive, personalized safety planning guide for domestic violence situations. Step-by-step strategies to protect yourself, your children, and your future.',
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
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-purple-600 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-3">What is a Safety Plan?</h2>
                <p className="text-gray-700 mb-4">
                  A safety plan is a personalized, practical strategy that helps improve your safety whether you're currently experiencing abuse, preparing to leave an abusive situation, or have already left. Research shows that having a detailed safety plan significantly reduces the risk of future violence and helps you respond more effectively during dangerous situations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Safety Planning Helps You:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Think clearly during crisis situations</li>
                      <li>• Identify safe places and trusted people</li>
                      <li>• Recognize warning signs of escalation</li>
                      <li>• Prepare practical escape strategies</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Important Reminders:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• You know your situation best</li>
                      <li>• No plan guarantees complete safety</li>
                      <li>• Plans should be updated regularly</li>
                      <li>• Trust your instincts above all else</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-100 rounded-lg p-3 border border-amber-300">
                  <p className="text-sm text-amber-800 font-semibold">
                    🔒 <strong>Privacy Note:</strong> Consider printing this guide or saving it on a safe device. Clear your browser history after visiting this page if your internet activity might be monitored.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Types of Safety Planning</h2>
            <p className="text-gray-600 mb-6">
              Different situations require different safety strategies. Choose the sections most relevant to your current circumstances, but consider reviewing all areas as your situation may change.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Crisis Safety</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Immediate safety strategies during violent incidents or escalating situations.
                  </p>
                  <div className="text-xs text-gray-500">
                    Best for: Currently in dangerous situation
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Package className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Leaving Preparation</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Planning and preparation strategies for safely leaving an abusive relationship.
                  </p>
                  <div className="text-xs text-gray-500">
                    Best for: Planning to leave relationship
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Home className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Post-Separation Safety</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Ongoing safety strategies after leaving, including workplace and home security.
                  </p>
                  <div className="text-xs text-gray-500">
                    Best for: After leaving abusive relationship
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Crisis Safety: During Violent Incidents</h2>
            <p className="text-gray-600">
              These strategies can help protect you when violence seems imminent or is occurring. Remember: your safety is the priority, not fighting back or "winning" an argument.
            </p>
            
            <div className="space-y-6">
              <Card className="border-2 border-red-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                    <h3 className="font-bold text-lg text-red-900">Recognizing Escalation Warning Signs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Learn to identify behaviors that typically happen before violence occurs in your situation:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-red-700">Common Warning Signs:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Increased yelling or verbal abuse</li>
                        <li>• Throwing or breaking objects</li>
                        <li>• Pacing, clenched fists, intense staring</li>
                        <li>• Increased alcohol or drug use</li>
                        <li>• Bringing up past grievances repeatedly</li>
                        <li>• Extreme jealousy or accusations</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-amber-700">Your Personal Signs:</h4>
                      <p className="text-sm text-gray-600 mb-2">Think about patterns in your situation:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• What happens right before violence?</li>
                        <li>• Are there certain triggers or topics?</li>
                        <li>• Does the abuser's mood change gradually?</li>
                        <li>• Are there time patterns (day/week/month)?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-8 h-8 text-orange-600" />
                    <h3 className="font-bold text-lg text-orange-900">When Violence Seems Likely</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-orange-700">Room Safety:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• <strong>Avoid:</strong> Kitchen, bathroom, garage, basement</li>
                          <li>• <strong>Avoid:</strong> Rooms with weapons or hard surfaces</li>
                          <li>• <strong>Go to:</strong> Room with phone access</li>
                          <li>• <strong>Go to:</strong> Room with outside door or low window</li>
                          <li>• <strong>Go to:</strong> Room where neighbors might hear</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-blue-700">Communication Strategies:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Stay calm, speak in low, soothing voice</li>
                          <li>• Agree with abuser to de-escalate if possible</li>
                          <li>• Don't argue about the abuse or "facts"</li>
                          <li>• Avoid eye contact if it increases anger</li>
                          <li>• Give the abuser space and time to cool down</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-red-700">Emergency Preparations:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Keep cell phone charged and nearby</li>
                          <li>• Memorize 911 and crisis hotline numbers</li>
                          <li>• Have car keys easily accessible</li>
                          <li>• Know locations of weapons in home</li>
                        </ul>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Keep important documents in grab bag</li>
                          <li>• Have cash and credit cards accessible</li>
                          <li>• Plan multiple escape routes from home</li>
                          <li>• Identify safe neighbors who would help</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-8 h-8 text-purple-600" />
                    <h3 className="font-bold text-lg text-purple-900">Communication & Code Words</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-purple-700">Establish Code Words/Signals:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• <strong>For children:</strong> "Pack your backpack" = go to safe room</li>
                          <li>• <strong>For family/friends:</strong> "I need to borrow your car" = send help</li>
                          <li>• <strong>For texting:</strong> "Can you pick up milk?" = call 911</li>
                          <li>• <strong>For social media:</strong> Specific photo or post = I'm in danger</li>
                        </ul>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• <strong>Visual signals:</strong> Light on/off, curtain position</li>
                          <li>• <strong>For neighbors:</strong> "Play music loud" = call police</li>
                          <li>• <strong>At work:</strong> "I'm sick" = danger at home</li>
                          <li>• <strong>Email subject:</strong> Specific phrase = emergency</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-700">Important Numbers to Memorize:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Emergency:</strong> 911</p>
                          <p><strong>National DV Hotline:</strong> 1-800-799-7233</p>
                          <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                        </div>
                        <div>
                          <p><strong>Trusted friend/family:</strong> _______________</p>
                          <p><strong>Local police:</strong> _______________</p>
                          <p><strong>Workplace security:</strong> _______________</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

          <section className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckSquare className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Interactive Safety Plan Checklist</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Use this personalized checklist to track your safety planning progress. Your progress is saved locally on your device, and you can print it anytime.
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm text-blue-800 font-medium">
                  💡 <strong>Tip:</strong> You don't need to complete everything at once. Focus on high-priority items first, and work through the list at your own pace. Your safety and well-being are what matter most.
                </p>
              </div>
            </div>
            
            {/* <SafetyPlanChecklist /> */}
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