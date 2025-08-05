import Link from 'next/link';
import { ArrowLeft, FileText, Download, Printer, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Response to Petition - Form DR40 - Arizona',
  description: 'Download Arizona response to petition form. Respond to divorce, custody, or support petitions within deadlines.',
};

export default function ResponsePetitionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Response to Petition</h1>
              <p className="text-orange-100">Form DR40 - Respond to family court petitions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/forms" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Forms
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">
                  Time-Sensitive Document
                </h2>
                <p className="text-orange-800 mb-3">
                  You have limited time to respond after being served with a petition. Missing 
                  the deadline can result in a default judgment against you.
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-200 mb-4">
                  <h3 className="font-semibold mb-2">Response Deadlines:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Served in Arizona:</strong> 20 days to respond</li>
                    <li>• <strong>Served outside Arizona:</strong> 30 days to respond</li>
                    <li>• <strong>Count from:</strong> Day after you were served</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Form (PDF)
                  </Button>
                  <Button variant="outline">
                    <Printer className="w-4 h-4 mr-2" />
                    Print Form
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Form Number</h3>
                <p className="text-2xl font-bold text-orange-600">DR40</p>
                <p className="text-sm text-gray-600">General response form</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Pages</h3>
                <p className="text-2xl font-bold text-gray-800">8</p>
                <p className="text-sm text-gray-600">Varies by case type</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Filing Fee</h3>
                <p className="text-2xl font-bold text-green-600">$274</p>
                <p className="text-sm text-gray-600">Fee waiver available</p>
              </CardContent>
            </Card>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">When to Use This Form</h2>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Use this form to respond to:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-blue-700">Family Law Petitions:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Petition for Dissolution (Divorce)</li>
                      <li>• Petition for Legal Separation</li>
                      <li>• Petition for Annulment</li>
                      <li>• Petition to Establish Custody</li>
                      <li>• Petition to Establish Child Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-purple-700">Modification Petitions:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Petition to Modify Custody</li>
                      <li>• Petition to Modify Child Support</li>
                      <li>• Petition to Modify Spousal Support</li>
                      <li>• Other modification requests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold">How to Complete Your Response</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 1: Review the Petition</h3>
                  <p className="text-gray-700 mb-3">
                    Before responding, carefully read the entire petition you were served:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Note the case number (you&apos;ll need this)</li>
                    <li>• Identify what the other party is requesting</li>
                    <li>• Check each allegation made</li>
                    <li>• Determine what you agree/disagree with</li>
                    <li>• Consider what you want to request</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 2: Complete Your Response</h3>
                  <p className="text-gray-700 mb-3">
                    For each numbered paragraph in the petition:
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <strong>Admit:</strong> If you agree with the statement
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <strong>Deny:</strong> If you disagree with the statement
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <strong>Lack Information:</strong> If you don&apos;t know
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 3: State Your Position</h3>
                  <p className="text-gray-700 mb-3">
                    Include what YOU want the court to order:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your custody/visitation preferences</li>
                    <li>• Child support calculations</li>
                    <li>• Property division proposals</li>
                    <li>• Spousal support position</li>
                    <li>• Any other requests (counterclaims)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 4: File and Serve</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• File original with court clerk</li>
                    <li>• Pay filing fee (or request waiver)</li>
                    <li>• Mail copy to other party/attorney</li>
                    <li>• File proof of mailing with court</li>
                    <li>• Keep copy for your records</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Critical Warnings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Do NOT ignore the petition - you will lose by default</li>
                  <li>• File your response before the deadline, not on the deadline</li>
                  <li>• Admitting to allegations doesn&apos;t mean you agree with everything</li>
                  <li>• You can file your own requests (counterpetition) with response</li>
                  <li>• Consider legal advice if issues are complex</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">What Happens After Filing</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Next Steps in Your Case:</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li>
                      <strong>1. Initial Disclosures:</strong> Exchange financial information 
                      within 40 days
                    </li>
                    <li>
                      <strong>2. Temporary Orders:</strong> Either party can request temporary 
                      custody, support, etc.
                    </li>
                    <li>
                      <strong>3. Case Management:</strong> Court may schedule conference to 
                      set timeline
                    </li>
                    <li>
                      <strong>4. Discovery/Negotiation:</strong> Gather information and try 
                      to reach agreements
                    </li>
                    <li>
                      <strong>5. Trial or Settlement:</strong> Resolve through agreement or 
                      court decision
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Related Forms & Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Financial Affidavit
                </Button>
              </Link>
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Temporary Orders Motion
                </Button>
              </Link>
              <Link href="/responding/urgent-timeline">
                <Button variant="outline" className="w-full">
                  Urgent Response Help
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="w-full">
                  Response Checklist
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-8 p-4 bg-orange-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Missing your response deadline can result in losing your case by default. 
              File on time and consider getting legal help if you&apos;re unsure about any part 
              of your response.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}