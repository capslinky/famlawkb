/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, MapPin, AlertCircle, Phone, Clock, CheckCircle, Users, Scale, Eye, UserCheck, Calendar, Gavel, AlertTriangle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Complete Guide to Filing Protection Orders - Arizona',
  description: 'Comprehensive step-by-step guide to filing Orders of Protection and Injunctions Against Harassment in Arizona. Includes legal requirements, court procedures, and safety planning.',
};

export default function HowToFilePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">How to File for a Protection Order</h1>
              <p className="text-purple-100">Free process available 24/7 at any court</p>
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
            <div className="flex items-start gap-3">
              <Shield className="w-8 h-8 text-purple-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-3">
                  Free Legal Protection Available 24/7
                </h2>
                <p className="text-purple-800 mb-4">
                  Protection orders are completely FREE to file and no attorney is required. Arizona courts are required to provide assistance and forms in multiple languages.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h3 className="font-semibold mb-2 text-purple-900">Court Access:</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• All 15 Arizona Superior Courts</li>
                      <li>• Most Justice Courts and Municipal Courts</li>
                      <li>• After-hours filing through law enforcement</li>
                      <li>• Emergency orders available weekends/holidays</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h3 className="font-semibold mb-2 text-purple-900">Free Support:</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Court clerks help with forms</li>
                      <li>• Victim advocates available</li>
                      <li>• Spanish and other language interpreters</li>
                      <li>• Self-help centers in most courts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Understanding Protection Orders in Arizona</h2>
            <p className="text-gray-600 mb-6">
              Arizona offers three main types of court-issued protection orders. Choosing the right one depends on your relationship to the person and the type of behavior you're experiencing.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Order of Protection</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">For Domestic Relationships:</h4>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        <li>• Current or former spouse</li>
                        <li>• Dating or romantic partner</li>
                        <li>• Person you live/lived with</li>
                        <li>• Parent of your child</li>
                        <li>• Related by blood or marriage</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Requires:</h4>
                      <p className="text-xs text-gray-600">Domestic violence or credible threat of domestic violence</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1 text-green-700">Duration:</h4>
                      <p className="text-xs text-gray-600">Up to 1 year, renewable</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Injunction Against Harassment</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">For Non-Domestic Situations:</h4>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        <li>• Neighbors</li>
                        <li>• Coworkers</li>
                        <li>• Acquaintances</li>
                        <li>• Strangers</li>
                        <li>• Anyone not in domestic relationship</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Requires:</h4>
                      <p className="text-xs text-gray-600">Series of acts that harass, annoy, or alarm with no legitimate purpose</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1 text-green-700">Duration:</h4>
                      <p className="text-xs text-gray-600">Up to 1 year, renewable</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <Scale className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Workplace Harassment Injunction</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">For Work-Related Issues:</h4>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        <li>• Current employees</li>
                        <li>• Former employees</li>
                        <li>• Contractors</li>
                        <li>• Customers/clients</li>
                        <li>• Anyone at workplace</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Requires:</h4>
                      <p className="text-xs text-gray-600">Harassment at workplace that affects work environment</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1 text-green-700">Duration:</h4>
                      <p className="text-xs text-gray-600">Up to 1 year, renewable</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold mb-4">💡 Quick Decision Guide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Choose Order of Protection if:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• You're married or were married to the person</li>
                    <li>• You're dating or have dated the person</li>
                    <li>• You live together or have lived together</li>
                    <li>• You have a child together</li>
                    <li>• You're related by blood or marriage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Choose Injunction Against Harassment if:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• The person is a neighbor, coworker, or stranger</li>
                    <li>• You have no domestic relationship</li>
                    <li>• The harassment occurs in multiple settings</li>
                    <li>• You need protection from stalking behavior</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Legal Basis & Your Rights</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-800">
                  <div>
                    <h4 className="font-semibold mb-2">Arizona Statutes</h4>
                    <ul className="space-y-1">
                      <li>• Order of Protection: A.R.S. § 13-3602</li>
                      <li>• Injunction Against Harassment: A.R.S. § 12-1809</li>
                      <li>• Workplace Harassment: A.R.S. § 12-1810</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hearings & Service</h4>
                    <ul className="space-y-1">
                      <li>• Orders must be served to be enforceable</li>
                      <li>• Either party may request a hearing</li>
                      <li>• Courts set hearings promptly after request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Safety & Privacy</h4>
                    <ul className="space-y-1">
                      <li>• Firearm restrictions may be ordered</li>
                      <li>• Consider the Address Confidentiality Program (ACP)</li>
                      <li>• Keep a certified copy of your order</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Complete Step-by-Step Filing Process</h2>
            <p className="text-gray-600">
              Follow this detailed guide to successfully file for protection. Each step includes specific requirements and helpful tips from court experience.
            </p>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Assess Your Situation and Gather Evidence</h3>
                      <p className="text-gray-600 mb-4">
                        Before filing, ensure you meet the legal requirements and collect supporting evidence to strengthen your case.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Legal Standards You Must Meet:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium mb-1 text-red-700">Order of Protection:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Domestic violence occurred OR</li>
                                <li>• Credible threat of domestic violence AND</li>
                                <li>• Qualifying relationship exists</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium mb-1 text-blue-700">Harassment Injunction:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Series of acts that harass, annoy, alarm AND</li>
                                <li>• Acts serve no legitimate purpose AND</li>
                                <li>• You reasonably fear for safety</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Evidence to Collect (If Safe to Do So):</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Police reports and incident numbers</li>
                              <li>• Photos of injuries or property damage</li>
                              <li>• Screenshots of threatening messages</li>
                              <li>• Medical records documenting injuries</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Witness contact information</li>
                              <li>• Documentation of violations</li>
                              <li>• Records of missed work/expenses</li>
                              <li>• Any video or audio recordings</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-4">
                          <p className="text-sm text-amber-700 font-medium">
                            ⚠️ Safety First: Don't put yourself at risk to gather evidence. Documentation helps but isn't required to file.
                          </p>
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
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Choose Your Filing Location</h3>
                      <p className="text-gray-600 mb-4">
                        Protection orders can be filed 24/7 at multiple locations. Choose the option that works best for your schedule and safety needs.
                      </p>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-5 h-5 text-green-600" />
                              <h4 className="font-semibold">During Court Hours (8 AM - 5 PM)</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>Superior Courts:</strong> All 15 counties accept filings</li>
                              <li>• <strong>Justice Courts:</strong> Most accept protection orders</li>
                              <li>• <strong>Self-help centers:</strong> Free assistance available</li>
                              <li>• <strong>Victim advocates:</strong> Often available on-site</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="w-5 h-5 text-orange-600" />
                              <h4 className="font-semibold">After Hours & Weekends</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>Police stations:</strong> Any department can assist</li>
                              <li>• <strong>911 emergency:</strong> If in immediate danger</li>
                              <li>• <strong>On-call judge:</strong> Reviews by phone 24/7</li>
                              <li>• <strong>Sheriff's offices:</strong> Can help with filing</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">What to Ask For:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• \"I need to file for a protection order\"</li>
                              <li>• \"Where is the Protective Order Office?\"</li>
                              <li>• \"Is there a victim advocate available?\"</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• \"Do you have forms in Spanish?\" (if needed)</li>
                              <li>• \"Can someone help me fill out the forms?\"</li>
                              <li>• \"Is there a fee?\" (Answer: No, it's free)</li>
                            </ul>
                          </div>
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
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Complete the Petition Forms</h3>
                      <p className="text-gray-600 mb-4">
                        Court staff or victim advocates will help you complete the forms. The petition is your opportunity to tell the judge exactly why you need protection.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Critical Information to Include:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• <strong>Specific incidents:</strong> Dates, times, locations</li>
                              <li>• <strong>Detailed descriptions:</strong> What happened, what was said</li>
                              <li>• <strong>Physical harm:</strong> Injuries, threats, property damage</li>
                              <li>• <strong>Pattern of behavior:</strong> Frequency and escalation</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• <strong>Fear explanation:</strong> Why you fear future harm</li>
                              <li>• <strong>Witnesses:</strong> Names and contact information</li>
                              <li>• <strong>Evidence:</strong> Police reports, photos, messages</li>
                              <li>• <strong>Defendant info:</strong> Full name, address, description</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Protection Requests to Consider:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• No contact (in person, phone, text, email)</li>
                              <li>• Stay away from home, work, school</li>
                              <li>• No possession of firearms</li>
                              <li>• Return of personal property</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Exclusive use of residence</li>
                              <li>• Temporary child custody/support</li>
                              <li>• Counseling requirements</li>
                              <li>• Other specific protections needed</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-red-700">Writing Tips for Success:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• <strong>Be specific:</strong> "He punched me in the face" not "He hurt me"</li>
                            <li>• <strong>Include dates:</strong> "On March 15, 2024" not "Last month"</li>
                            <li>• <strong>Describe fear:</strong> "I fear he will seriously injure or kill me because..."</li>
                            <li>• <strong>Avoid opinions:</strong> State facts, not interpretations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Judge Reviews Your Petition</h3>
                      <p className="text-gray-600 mb-4">
                        A judge will review your petition immediately to determine if a temporary order should be issued. This review happens the same day, often within hours.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-orange-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <h4 className="font-semibold text-green-700">If Temporary Order is Granted:</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Immediate protection:</strong> Order is effective right away</li>
                            <li>• <strong>Temporary duration:</strong> Valid until full hearing (10-15 days)</li>
                            <li>• <strong>Must be served:</strong> Defendant must receive legal notice</li>
                            <li>• <strong>Certified copies:</strong> You'll receive multiple copies to keep</li>
                            <li>• <strong>Hearing scheduled:</strong> Date set for permanent order hearing</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <h4 className="font-semibold text-red-700">If Petition is Denied:</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>You have options:</strong> Denial doesn't end your case</li>
                            <li>• <strong>Request hearing anyway:</strong> You can still get a hearing date</li>
                            <li>• <strong>Revise petition:</strong> Add more details or evidence</li>
                            <li>• <strong>Seek help:</strong> Ask advocate or attorney to review</li>
                            <li>• <strong>Appeal possible:</strong> In some circumstances</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">What Judges Look For:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Clear evidence of qualifying relationship or harassment</li>
                            <li>• Specific, detailed descriptions of incidents</li>
                            <li>• Reasonable fear of future harm</li>
                            <li>• Recent incidents (within past year preferred)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Service of Process and Hearing Preparation</h3>
                      <p className="text-gray-600 mb-4">
                        If you received a temporary order, the defendant must be legally served before the hearing. This is a critical step that cannot be skipped.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <UserCheck className="w-5 h-5 text-red-600" />
                            <h4 className="font-semibold text-red-700">Service Requirements:</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• <strong>Personal service required:</strong> Papers must be handed directly to defendant</li>
                            <li>• <strong>Must be served at least 24 hours before hearing</strong> (48+ hours recommended)</li>
                            <li>• <strong>Cannot serve yourself:</strong> Must be done by sheriff, process server, or adult</li>
                            <li>• <strong>Court provides forms:</strong> Instructions and service forms given to you</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <h4 className="font-semibold text-blue-700">Hearing Information:</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• <strong>Scheduled automatically:</strong> Usually 10-15 days from filing</li>
                            <li>• <strong>You MUST attend:</strong> Order expires if you don't appear</li>
                            <li>• <strong>Defendant may attend:</strong> They can contest the order</li>
                            <li>• <strong>Bring evidence:</strong> All documents, photos, witnesses</li>
                            <li>• <strong>Brief proceeding:</strong> Usually 15-30 minutes</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Eye className="w-5 h-5 text-green-600" />
                            <h4 className="font-semibold text-green-700">Preparing for Your Hearing:</h4>
                          </div>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• <strong>Organize evidence:</strong> Chronological order, labeled clearly</li>
                            <li>• <strong>Practice testimony:</strong> Be ready to tell your story clearly</li>
                            <li>• <strong>Arrive early:</strong> Get there 30 minutes before your time</li>
                            <li>• <strong>Bring support:</strong> Friend/family can attend (but not testify unless called)</li>
                            <li>• <strong>Stay calm:</strong> Answer only what's asked, stick to facts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">What to Bring When Filing</h2>
            <p className="text-gray-600 mb-6">
              Come prepared with as much information and documentation as possible. While evidence strengthens your case, don't delay filing if you don't have everything.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <h3 className="font-semibold text-lg">Essential Documents</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Required:</h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>• Valid photo ID (driver's license, state ID, passport)</li>
                        <li>• Birth certificate (if name differs from ID)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Helpful Evidence:</h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>• Police reports with incident numbers</li>
                        <li>• Medical records showing injuries</li>
                        <li>• Photos of injuries or property damage</li>
                        <li>• Screenshots of threatening texts/emails</li>
                        <li>• Voice recordings (if legal in your state)</li>
                        <li>• Witness statements or contact info</li>
                        <li>• Prior court orders or legal documents</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-8 h-8 text-green-600" />
                    <h3 className="font-semibold text-lg">Information About Defendant</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Basic Information:</h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>• Full legal name (and any aliases)</li>
                        <li>• Date of birth (if known)</li>
                        <li>• Current address</li>
                        <li>• Phone number</li>
                        <li>• Email address</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-1">Additional Details:</h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>• Workplace and work address</li>
                        <li>• Physical description (height, weight, hair, eyes)</li>
                        <li>• Vehicle information (make, model, license plate)</li>
                        <li>• Weapon ownership or access</li>
                        <li>• Criminal history (if known)</li>
                        <li>• Substance abuse issues</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2 text-amber-800">Don't Delay for Perfect Documentation</h3>
                  <p className="text-gray-700 mb-2">
                    While evidence strengthens your case, your safety is more important than having perfect documentation. You can:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• File immediately with whatever evidence you have</li>
                    <li>• Submit additional evidence later</li>
                    <li>• Bring witnesses to testify at the hearing</li>
                    <li>• Use your own testimony as evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">After Your Hearing: What Happens Next</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gavel className="w-8 h-8 text-green-600" />
                    <h3 className="font-semibold text-lg text-green-700">If Order is Granted</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Immediate Effect:</strong> Order becomes legally binding immediately
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Duration:</strong> Typically valid for up to 1 year
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Certified Copies:</strong> You'll receive multiple copies
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Police Database:</strong> Order entered into statewide system
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <strong>Renewal Available:</strong> Can request extension before expiration
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h3 className="font-semibold text-lg text-red-700">If Order is Denied</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <strong>Review Options:</strong> Ask judge to explain reasons for denial
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <strong>Refile Possible:</strong> Can file new petition with additional evidence
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <strong>Legal Help:</strong> Consider consulting with an attorney
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <strong>Other Remedies:</strong> Explore criminal charges or civil suits
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <strong>Safety Planning:</strong> Develop alternative safety strategies
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-4 text-amber-800">Critical Legal Warnings & Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-red-700">Legal Obligations:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Truthful statements only:</strong> False information is perjury (felony)</li>
                      <li>• <strong>Both parties bound:</strong> You cannot violate your own order</li>
                      <li>• <strong>Service required:</strong> Order invalid until defendant is served</li>
                      <li>• <strong>Carry copies:</strong> Keep certified copy with you always</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-blue-700">Important Distinctions:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Civil vs. Criminal:</strong> Protection orders are civil, not criminal charges</li>
                      <li>• <strong>Separate proceedings:</strong> Criminal cases proceed independently</li>
                      <li>• <strong>Violation consequences:</strong> Can result in arrest and criminal charges</li>
                      <li>• <strong>Court jurisdiction:</strong> Valid throughout Arizona and most other states</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-sm font-semibold text-red-800">
                    ⚠️ Violations of protection orders are crimes. Call 911 immediately if the order is violated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Serve + Proof + Hearing: Quick Facts</h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-800">
                  <div>
                    <h3 className="font-semibold mb-2">Service</h3>
                    <ul className="space-y-1">
                      <li>• Order is enforceable only after service</li>
                      <li>• Law enforcement can serve at no cost</li>
                      <li>• Provide addresses/locations to help serve</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Proof</h3>
                    <ul className="space-y-1">
                      <li>• Keep a certified copy with you</li>
                      <li>• Ask clerk how to get additional copies</li>
                      <li>• Share copies with school and employer</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hearing</h3>
                    <ul className="space-y-1">
                      <li>• Either party can request a hearing</li>
                      <li>• Courts set hearings promptly after request</li>
                      <li>• Bring witnesses, evidence, and timelines</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12 bg-red-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-red-600" />
              <h3 className="font-bold text-xl text-red-700">Emergency Safety Resources & Next Steps</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold mb-3">Immediate Emergency Help:</h4>
                <Link href="tel:911" className="block w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 911 - Immediate Danger
                  </Button>
                </Link>
                <Link href="tel:1-800-799-7233" className="block w-full">
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    <Phone className="w-4 h-4 mr-2" />
                    National DV Hotline: 1-800-799-7233
                  </Button>
                </Link>
                <div className="text-sm text-gray-600 mt-2">
                  <p>• Available 24/7 in 200+ languages</p>
                  <p>• Text "START" to 88788</p>
                  <p>• Chat available at thehotline.org</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold mb-3">Planning & Support Resources:</h4>
                <Link href="/protection/safety-plan" className="block w-full">
                  <Button className="w-full mb-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Create Personal Safety Plan
                  </Button>
                </Link>
                <Link href="/protection/emergency" className="block w-full">
                  <Button variant="outline" className="w-full mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Emergency Shelter
                  </Button>
                </Link>
                <Link href="/assessment" className="block w-full">
                  <Button variant="outline" className="w-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Personalized Help
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <h4 className="font-semibold mb-3 text-red-700">Remember:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <ul className="space-y-1">
                  <li>• You are not alone - help is available 24/7</li>
                  <li>• Filing a protection order is completely free</li>
                  <li>• Court staff are trained to help you</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Your safety is more important than perfect paperwork</li>
                  <li>• You deserve to live free from fear and violence</li>
                  <li>• Legal protection is your right</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
