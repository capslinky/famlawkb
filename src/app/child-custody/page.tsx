import Link from 'next/link';
import { ArrowLeft, Shield, Calendar, FileCheck, AlertCircle, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Child Custody in Arizona - Parenting Time & Legal Decision Making',
  description: 'Understanding Arizona child custody laws, parenting plans, and how courts make custody decisions.',
};

export default function ChildCustodyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Child Custody in Arizona</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-2">Arizona Custody Basics</h2>
            <div className="space-y-2 text-gray-700">
              <GlossaryContent>
                Legal Decision Making = authority to make major decisions
              </GlossaryContent>
              <GlossaryContent>
                Parenting Time = physical custody schedule
              </GlossaryContent>
              <div>• Courts prioritize the child&apos;s best interests</div>
              <div>• Both parents have equal rights unless proven otherwise</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Establish Custody</h3>
                <p className="text-gray-600 mb-4">
                  File for custody orders if you don&apos;t have any court orders yet.
                </p>
                <Link href="/modules/starting-case">
                  <Button variant="outline">Start Process</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Parenting Plans</h3>
                <p className="text-gray-600 mb-4">
                  Create a detailed schedule for holidays, vacations, and daily care.
                </p>
                <Link href="/modules/temporary-orders">
                  <Button variant="outline">Plan Templates</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileCheck className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Modify Custody</h3>
                <p className="text-gray-600 mb-4">
                  Change existing orders due to relocation or changed circumstances.
                </p>
                <Link href="/modules/modifications">
                  <Button variant="outline">Modification Guide</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertCircle className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Emergency Orders</h3>
                <p className="text-gray-600 mb-4">
                  Get immediate help if your child is in danger.
                </p>
                <Link href="/get-protection">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Emergency Help
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Best Interests Factors</h3>
              <p className="text-gray-700 mb-3">Arizona courts consider these factors:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>• Child&apos;s relationship with each parent</li>
                <li>• Child&apos;s adjustment to home/school</li>
                <li>• Mental and physical health of all parties</li>
                <li>• Which parent allows contact with other parent</li>
                <li>• Any history of domestic violence</li>
                <li>• Child&apos;s wishes (if mature enough)</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Need personalized guidance?</h3>
              <p className="text-gray-700 mb-3">
                Answer a few questions to get specific information for your custody situation.
              </p>
              <Link href="/assessment">
                <Button>Take Assessment</Button>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/glossary" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                <Book className="w-4 h-4" />
                View Legal Terms Glossary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}