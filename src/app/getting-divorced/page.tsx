import Link from 'next/link';
import { ArrowLeft, FileText, Calculator, Users, Clock } from 'lucide-react';
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
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Getting Divorced in Arizona</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-2">Quick Overview</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Arizona is a &quot;no-fault&quot; divorce state</li>
              <li>• At least one spouse must live in Arizona for 90 days before filing</li>
              <li>• Minimum 60-day waiting period after service</li>
              <li>• Community property state (50/50 division)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Start Your Divorce</h3>
                <p className="text-gray-600 mb-4">
                  Learn about requirements, gather documents, and file your petition.
                </p>
                <Link href="/modules/starting-case">
                  <Button variant="outline">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calculator className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Financial Planning</h3>
                <p className="text-gray-600 mb-4">
                  Understand property division, support calculations, and financial disclosures.
                </p>
                <Link href="/support/calculator">
                  <Button variant="outline">Calculate Support</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Children & Custody</h3>
                <p className="text-gray-600 mb-4">
                  Create parenting plans and understand custody arrangements.
                </p>
                <Link href="/child-custody">
                  <Button variant="outline">Custody Info</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Timeline & Process</h3>
                <p className="text-gray-600 mb-4">
                  Understand each step and how long your divorce might take.
                </p>
                <Link href="/modules/first-appearance">
                  <Button variant="outline">View Timeline</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Not sure which type of divorce applies to you?</h3>
            <p className="text-gray-700 mb-3">
              Take our assessment to determine if you qualify for an uncontested divorce or need to prepare for a contested case.
            </p>
            <Link href="/assessment">
              <Button>Take Assessment</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}