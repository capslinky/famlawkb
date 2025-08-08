/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { BreadcrumbCompact } from '@/components/ui/breadcrumb';
import { ArrowLeft, FileText, Calculator, Users, Clock, Scale, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Getting Divorced in Arizona - Complete Guide',
  description: 'Everything you need to know about filing for divorce in Arizona, including requirements, process, and timeline.',
};

export default function GettingDivorcedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="mt-2">
            <BreadcrumbCompact />
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Getting Divorced in Arizona</h1>
          
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Arizona Divorce At a Glance</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Basic Requirements</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• No-fault divorce state (no blame required)</li>
                  <li>• 90-day residency requirement</li>
                  <li>• 60-day waiting period after service</li>
                  <li>• Community property division</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Typical Timeline</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Uncontested: 3-6 months</li>
                  <li>• Contested: 6-18 months</li>
                  <li>• Complex cases: 1-3 years</li>
                  <li>• Emergency orders: 1-2 weeks</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-white border border-primary-200 rounded p-4 text-sm text-gray-700">
              <p className="font-semibold mb-1">Note on Covenant Marriage (if applicable)</p>
              <p>
                Arizona recognizes covenant marriage, which requires premarital counseling and limits divorce to specific grounds by statute. Most marriages are not covenant marriages.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Choose Your Divorce Path</h2>
            <p className="text-gray-600 mb-6">
              The type of divorce you pursue depends on your specific circumstances. Use this decision framework to determine the best approach:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-green-200">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Uncontested (Simple)</h3>
                  <p className="text-gray-600 mb-4">
                    No children, minimal assets, both parties agree on all terms.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Married less than 5 years</li>
                    <li>• No children together</li>
                    <li>• Minimal shared property</li>
                    <li>• No spousal maintenance</li>
                  </ul>
                  <Link href="/divorce/uncontested-simple">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-primary-200">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Uncontested (Children)</h3>
                  <p className="text-gray-600 mb-4">
                    With children but both parties agree on custody and support.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Children under 18</li>
                    <li>• Agreed parenting plan</li>
                    <li>• Agreed child support</li>
                    <li>• Property agreement</li>
                  </ul>
                  <Link href="/divorce/uncontested-with-children">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-red-200">
                <CardContent className="p-6">
                  <Scale className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Contested</h3>
                  <p className="text-gray-600 mb-4">
                    Disagreements on major issues requiring court intervention.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>• Custody disputes</li>
                    <li>• Complex property</li>
                    <li>• Spousal maintenance</li>
                    <li>• High-conflict situations</li>
                  </ul>
                  <Link href="/divorce/contested-full">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Legal Basis (Arizona)</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Core Statutes</h3>
                <ul className="space-y-1">
                  <li>• A.R.S. § 25-312 — Grounds; residency; 60-day period</li>
                  <li>• A.R.S. § 25-211 — Community property defined</li>
                  <li>• A.R.S. § 25-318 — Property/debt division</li>
                  <li>• A.R.S. § 25-319 — Spousal maintenance factors</li>
                  <li>• A.R.S. § 25-403 et seq. — Children & parenting</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Key Principles</h3>
                <ul className="space-y-1">
                  <li>• No-fault: “irretrievably broken” marriage (non-covenant)</li>
                  <li>• Community vs. separate property analysis</li>
                  <li>• Equitable division may differ from strict 50/50</li>
                  <li>• Parenting decisions guided by “best interests”</li>
                  <li>• Support based on statutory factors, not formulas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step-by-Step Process Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">1. Pre-Filing Preparation</h3>
                  <p className="text-gray-600 mb-4">
                    Gather documents, understand your rights, and prepare for the process.
                  </p>
                  <Link href="/assessment">
                    <Button variant="outline">Start Here</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">2. Filing Your Case</h3>
                  <p className="text-gray-600 mb-4">
                    Complete forms, file with the court, and serve your spouse.
                  </p>
                  <Link href="/forms/divorce-petition-children">
                    <Button variant="outline">File Your Petition</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Calculator className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">3. Financial Disclosures</h3>
                  <p className="text-gray-600 mb-4">
                    Exchange financial information and complete mandatory disclosures.
                  </p>
                  <Link href="/modules/disclosures">
                    <Button variant="outline">Disclosure Guide</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">4. Court Appearances</h3>
                  <p className="text-gray-600 mb-4">
                    Navigate hearings, conferences, and potential trial proceedings.
                  </p>
                  <Link href="/modules/first-appearance">
                    <Button variant="outline">Court Process</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Financial Considerations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Property Division</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Arizona is a community property state. Assets and debts acquired during marriage are typically divided 50/50.
                  </p>
                  <Link href="/topics/property-division">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Child Support</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Based on Arizona Child Support Guidelines using both parents income and custody time.
                  </p>
                  <Link href="/topics/child-support">
                    <Button variant="outline" size="sm">Calculate Support</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Spousal Maintenance</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Court may award temporary or permanent support based on specific factors and marriage duration.
                  </p>
                  <Link href="/topics/spousal-maintenance">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <AlertTriangle className="w-6 h-6 text-amber-600 mb-2" />
              <h3 className="font-semibold mb-2">Need Emergency Help?</h3>
              <p className="text-gray-700 mb-3">
                If you're facing domestic violence, need immediate custody protection, or require emergency financial support, don't wait.
              </p>
              <Link href="/emergency-help">
                <Button className="bg-amber-600 hover:bg-amber-700">Get Emergency Help</Button>
              </Link>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
              <h3 className="font-semibold mb-2">Not Sure Where to Start?</h3>
              <p className="text-gray-700 mb-3">
                Take our guided assessment to determine your specific situation and get personalized next steps.
              </p>
              <Link href="/assessment">
                <Button className="bg-green-600 hover:bg-green-700">Take Assessment</Button>
              </Link>
            </div>
          </div>

          <section className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Court Forms & Documents</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <Link href="/forms" className="text-primary-600 hover:underline">Court Forms Hub</Link></li>
                  <li>• <Link href="/forms/divorce-petition-children" className="text-primary-600 hover:underline">Petition Assistant</Link></li>
                  <li>• <Link href="/forms/response-petition" className="text-primary-600 hover:underline">Response Assistant</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Legal Support Options</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <Link href="/resources/self-representation-guide" className="text-primary-600 hover:underline">Self-Representation Guide</Link></li>
                  <li>• <Link href="/resources/legal-representation" className="text-primary-600 hover:underline">Finding an Attorney</Link></li>
                  <li>• <Link href="/reference/faq" className="text-primary-600 hover:underline">Frequently Asked Questions</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
