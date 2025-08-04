import Link from 'next/link';
import { ArrowLeft, Shield, FileText, Clock, MapPin, AlertCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'How to File for a Protection Order - Arizona',
  description: 'Step-by-step guide to filing for an Order of Protection or Injunction Against Harassment in Arizona courts.',
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
              <AlertCircle className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-2">
                  Free and Available 24/7
                </h2>
                <p className="text-purple-800 mb-3">
                  Protection orders are FREE to file. No attorney needed. Courts provide assistance.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="space-y-2 text-sm">
                    <li>• Available at all Superior Courts and most Justice Courts</li>
                    <li>• After-hours filing available through police</li>
                    <li>• Court staff will help you complete forms</li>
                    <li>• Interpreters available if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Step-by-Step Filing Process</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Determine Which Order You Need</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Order of Protection</h4>
                          <p className="text-gray-700 mb-2">
                            For relationships: spouse, ex-spouse, dating partner, family member, 
                            roommate, parent of your child
                          </p>
                          <p className="text-sm text-gray-600">
                            <GlossaryContent term="domestic violence" /> required
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Injunction Against Harassment</h4>
                          <p className="text-gray-700 mb-2">
                            For anyone else: neighbor, coworker, acquaintance, stranger
                          </p>
                          <p className="text-sm text-gray-600">
                            Requires series of acts constituting harassment
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
                      <h3 className="font-bold text-lg mb-2">Go to Court or Police Station</h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">During Court Hours</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Any Superior Court</li>
                            <li>• Most Justice Courts</li>
                            <li>• Municipal Courts (limited)</li>
                            <li>• Ask for Protective Order Office</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">After Hours/Weekends</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Any police station</li>
                            <li>• Call 911 if emergency</li>
                            <li>• Officer can help file</li>
                            <li>• Judge reviews by phone</li>
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
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Complete the Petition</h3>
                      <p className="text-gray-700 mb-3">
                        Court staff or advocates will help you fill out forms. Be prepared to:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Describe specific incidents with dates</li>
                        <li>• Explain why you fear future harm</li>
                        <li>• List any witnesses or evidence</li>
                        <li>• Provide defendant's information</li>
                        <li>• Request specific protections needed</li>
                      </ul>
                      <div className="bg-purple-50 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-purple-900">
                          Be specific and detailed - vague statements may result in denial
                        </p>
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
                      <h3 className="font-bold text-lg mb-2">Judge Reviews Your Petition</h3>
                      <p className="text-gray-700 mb-3">
                        A judge will review your petition immediately:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">If Granted:</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Temporary order issued immediately</li>
                            <li>• Valid until hearing (usually 10-15 days)</li>
                            <li>• Must be served on defendant</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">If Denied:</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• You can request a hearing anyway</li>
                            <li>• May revise and refile</li>
                            <li>• Consider getting legal help</li>
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
                      <h3 className="font-bold text-lg mb-2">Service and Hearing</h3>
                      <p className="text-gray-700 mb-3">
                        Critical next steps:
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">•</span>
                          <div>
                            <span className="font-semibold">Service Required:</span> Defendant must be 
                            legally served before hearing
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">•</span>
                          <div>
                            <span className="font-semibold">Hearing Date:</span> Usually within 10-15 days
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">•</span>
                          <div>
                            <span className="font-semibold">You MUST attend:</span> Order expires if you don't appear
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
            <h2 className="text-2xl font-bold mb-4">What to Bring</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Documents</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Photo ID</li>
                    <li>• Police reports</li>
                    <li>• Medical records</li>
                    <li>• Photos of injuries</li>
                    <li>• Threatening messages</li>
                    <li>• Witness statements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-3">Information Needed</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Defendant's full name</li>
                    <li>• Their address/workplace</li>
                    <li>• Physical description</li>
                    <li>• Vehicle information</li>
                    <li>• Weapon information</li>
                    <li>• Criminal history</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• False statements in petition are a crime</li>
                  <li>• Order only valid after defendant is served</li>
                  <li>• You cannot violate your own order by contacting defendant</li>
                  <li>• Criminal charges are separate from protection order</li>
                  <li>• Keep certified copy of order with you at all times</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Emergency Safety Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 mb-2"
                  onClick={() => window.location.href='tel:911'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 911 - Immediate Danger
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href='tel:1-800-799-7233'}
                >
                  National DV Hotline
                </Button>
              </div>
              <div>
                <Link href="/protection/safety-plan">
                  <Button variant="outline" className="w-full mb-2">
                    Create Safety Plan
                  </Button>
                </Link>
                <Link href="/protection/emergency">
                  <Button variant="outline" className="w-full">
                    Emergency Shelter Info
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}