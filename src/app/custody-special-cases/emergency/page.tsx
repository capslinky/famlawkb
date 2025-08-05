import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Shield, Phone, Clock, Gavel, FileText, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Emergency Custody Orders - Arizona',
  description: 'How to get emergency custody orders in Arizona when children are in immediate danger. Ex parte orders and emergency procedures.',
};

export default function EmergencyCustodyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Emergency Custody Orders</h1>
              <p className="text-red-100">When children are in immediate danger</p>
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
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">
                  If Children Are in Immediate Danger
                </h2>
                <p className="text-red-800 font-semibold mb-3">
                  Call 911 immediately. Police can remove children from dangerous situations.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-300">
                  <h3 className="font-semibold mb-2">Emergency Resources:</h3>
                  <div className="space-y-2">
                    <Link href="tel:911" className="block">
                  <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700"
                      
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call 911
                    </Button>
                </Link>
                    <p className="text-sm">
                      Child Protective Services: 1-888-SOS-CHILD (1-888-767-2445)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Types of Emergency Orders</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Gavel className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Ex Parte Emergency Orders</h3>
                      <p className="text-gray-700 mb-3">
                        Immediate orders without notice to other parent:
                      </p>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Child in immediate danger of abuse or abduction</li>
                          <li>• Specific facts showing irreparable harm</li>
                          <li>• Why notice shouldn&apos;t be required</li>
                          <li>• Sworn testimony or affidavit</li>
                        </ul>
                        <div className="mt-3 p-3 bg-white rounded border border-red-200">
                          <p className="text-sm font-semibold text-red-800">
                            Temporary only - hearing within 5-10 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Emergency Temporary Orders</h3>
                      <p className="text-gray-700 mb-3">
                        Expedited hearing with shortened notice:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Filed with regular motion</li>
                        <li>• Request shortened notice period</li>
                        <li>• Other parent gets 24-48 hours notice</li>
                        <li>• Hearing within days instead of weeks</li>
                        <li>• Must show good cause for emergency</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Qualifying Emergencies</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-3">Immediate Physical Danger</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Physical abuse occurring</li>
                    <li>• Sexual abuse suspected</li>
                    <li>• Severe neglect (no food, medical care)</li>
                    <li>• Exposure to violence</li>
                    <li>• Drug manufacturing in home</li>
                    <li>• Parent incapacitated</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-orange-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-orange-900 mb-3">Risk of Abduction</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Threats to take child</li>
                    <li>• Preparations to flee</li>
                    <li>• No ties to community</li>
                    <li>• Passport applications</li>
                    <li>• Liquidating assets</li>
                    <li>• History of hiding child</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">The Emergency Order Process</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Document the Emergency</h3>
                      <p className="text-gray-700 mb-3">
                        Gather evidence quickly:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Photos of injuries or dangerous conditions</li>
                        <li>• Medical records or reports</li>
                        <li>• Police reports (even if just filed)</li>
                        <li>• Text messages with threats</li>
                        <li>• Witness statements</li>
                        <li>• CPS reports</li>
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
                      <h3 className="font-bold text-lg mb-2">File Emergency Motion</h3>
                      <p className="text-gray-700 mb-3">
                        Submit to court immediately:
                      </p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Required Documents:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Emergency motion/petition</li>
                          <li>• Detailed affidavit of facts</li>
                          <li>• Proposed emergency order</li>
                          <li>• All supporting evidence</li>
                          <li>• Certificate of attempted notice (ex parte)</li>
                        </ul>
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
                      <h3 className="font-bold text-lg mb-2">Emergency Hearing</h3>
                      <p className="text-gray-700 mb-3">
                        What happens at court:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Judge reviews immediately or same day</li>
                        <li>• You may testify under oath</li>
                        <li>• Judge asks clarifying questions</li>
                        <li>• Decision often made immediately</li>
                        <li>• If granted, temporary orders issued</li>
                        <li>• Return hearing scheduled quickly</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• False allegations can result in criminal charges</li>
                  <li>• Judges scrutinize emergency requests carefully</li>
                  <li>• Misuse can harm your credibility permanently</li>
                  <li>• Other parent will get chance to respond soon</li>
                  <li>• Orders are temporary until full hearing</li>
                  <li>• Must follow up with permanent order request</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">What Emergency Orders Can Include</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Custody Changes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Temporary sole custody</li>
                    <li>• Suspend other parent&apos;s time</li>
                    <li>• Supervised visitation only</li>
                    <li>• No contact orders</li>
                    <li>• Restrict who can be around child</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-semibold mb-3">Protective Measures</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Order counseling/evaluation</li>
                    <li>• Drug/alcohol testing</li>
                    <li>• Surrender passports</li>
                    <li>• Prohibit travel</li>
                    <li>• Law enforcement assistance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">After Emergency Orders</h2>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-lg mb-3">What Happens Next</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Return Hearing (5-10 days):</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Other parent can present their side</li>
                      <li>• Both parties present evidence</li>
                      <li>• Judge decides if orders continue</li>
                      <li>• May modify or terminate orders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Case:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• File for permanent orders</li>
                      <li>• Complete required disclosures</li>
                      <li>• Possible custody evaluation</li>
                      <li>• Work toward final orders</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Evidence Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Strong Evidence:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Police reports</li>
                  <li>✓ Medical records</li>
                  <li>✓ Photos of injuries</li>
                  <li>✓ CPS investigations</li>
                  <li>✓ Witness affidavits</li>
                  <li>✓ Drug test results</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supporting Evidence:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Text messages/emails</li>
                  <li>✓ Social media posts</li>
                  <li>✓ School reports</li>
                  <li>✓ Therapy records</li>
                  <li>✓ Video/audio (if legal)</li>
                  <li>✓ Past court orders</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Immediate Actions</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="tel:911" className="block">
                  <Button className="w-full bg-red-600 hover:bg-red-700" 
                size="lg"
                
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 911 if Immediate Danger
              </Button>
                </Link>
              <Link href="/forms">
                <Button className="w-full" size="lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Emergency Motion Forms
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="w-full">
                  Find Emergency Legal Help
                </Button>
              </Link>
              <Link href="/protection/how-to-file">
                <Button variant="outline" className="w-full">
                  Protection Order Info
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-8 p-4 bg-red-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Children&apos;s safety is paramount. If you believe a child is in immediate danger, 
              act now. Contact emergency services first, then pursue legal remedies.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}