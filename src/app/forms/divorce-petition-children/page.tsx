import Link from 'next/link';
import { ArrowLeft, FileText, Download, Printer, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Petition for Dissolution with Children - Form DR11 - Arizona',
  description: 'Download Arizona divorce petition form for cases with minor children. Includes instructions and requirements.',
};

export default function DivorcePetitionChildrenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Petition for Dissolution (Divorce) - With Children</h1>
              <p className="text-primary-100">Form DR11 - Start a divorce case with minor children</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/forms" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Forms
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-primary-50 border-2 border-primary-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-primary-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-primary-900 mb-2">
                  About This Form
                </h2>
                <p className="text-primary-800 mb-3">
                  Use this form to start a divorce case when you and your spouse have children 
                  under 18 years old together. This includes adopted children and children born 
                  during the marriage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary-600 hover:bg-primary-700">
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
                <p className="text-2xl font-bold text-primary-600">DR11</p>
                <p className="text-sm text-gray-600">Official court form</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Pages</h3>
                <p className="text-2xl font-bold text-gray-800">12</p>
                <p className="text-sm text-gray-600">Plus instructions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Filing Fee</h3>
                <p className="text-2xl font-bold text-green-600">$349</p>
                <p className="text-sm text-gray-600">Fee waiver available</p>
              </CardContent>
            </Card>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Before You Begin</h2>
            
            <Card className="border-l-4 border-amber-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Requirements to File</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You OR your spouse must have lived in Arizona for at least 90 days</li>
                      <li>• Your marriage must be &quot;irretrievably broken&quot; (no chance of reconciliation)</li>
                      <li>• You must include all minor children of the marriage</li>
                      <li>• If wife is pregnant, include unborn child information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold">What You&apos;ll Need</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Basic Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Full legal names and addresses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Date and place of marriage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Date of separation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Social Security numbers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Children Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Full names and birthdates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Current living arrangements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>5-year address history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Other custody cases</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Financial Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Employment details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Income amounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Major assets and debts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Health insurance info</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Your Requests</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Custody preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Child support needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Property division wishes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Spousal support request</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">How to Complete This Form</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-primary-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 1: Fill Out the Form</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Type or print clearly in black ink</li>
                    <li>• Answer all questions completely</li>
                    <li>• Use &quot;N/A&quot; if something doesn&apos;t apply</li>
                    <li>• Be honest - forms are signed under oath</li>
                    <li>• Attach additional pages if needed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 2: Make Copies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Original for the court</li>
                    <li>• Copy for yourself</li>
                    <li>• Copy to serve on spouse</li>
                    <li>• Extra copy for your records</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Step 3: File with Court</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Take to Superior Court clerk</li>
                    <li>• Pay filing fee or request waiver</li>
                    <li>• Get case number assigned</li>
                    <li>• Receive stamped copies back</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Reminders</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• You must serve your spouse within 120 days of filing</li>
                  <li>• Cannot finalize divorce for at least 60 days after service</li>
                  <li>• Both parents must complete Parent Information Program</li>
                  <li>• Temporary orders may be needed for immediate issues</li>
                  <li>• Consider mediation for contested issues</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Related Forms & Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Parenting Plan Form
                </Button>
              </Link>
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Child Support Worksheet
                </Button>
              </Link>
              <Link href="/forms">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Summons Form
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Divorce Checklist
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-8 p-4 bg-primary-800 text-white rounded-lg text-center">
            <p className="font-bold">
              This form starts your divorce case. After filing, you must properly serve your 
              spouse and follow all court procedures. Consider legal advice for complex situations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
