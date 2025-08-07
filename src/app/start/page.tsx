import Link from 'next/link';
import { Home, HelpCircle, FileText, BookOpen, Gavel, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DecisionTreeWizard from '@/components/DecisionTreeWizard';

export const metadata = {
  title: 'Start Here - Arizona Family Law',
  description: 'Begin your journey: assessment, pre-filing overview, and starting a case in Arizona family court.',
};

export default function StartHubPage() {
  const actions = [
    { label: 'Take the Assessment', href: '/assessment', icon: <HelpCircle className="w-5 h-5" /> },
    { label: 'Pre‑Filing Overview', href: '/modules/pre-filing', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Start a Case', href: '/modules/starting-case', icon: <FileText className="w-5 h-5" /> },
    { label: 'Getting Divorced', href: '/getting-divorced', icon: <Gavel className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3">
            <Home className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Start Here</h1>
              <p className="text-blue-100 mt-1">Answer a few questions, then follow clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {actions.map((a) => (
            <Link key={a.href} href={a.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-600">
                    {a.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{a.label}</h3>
                    <p className="text-sm text-gray-600">Go to {a.label.toLowerCase()}.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Not sure where to start?</h2>
          <p className="text-gray-600 mb-4">Use this quick triage to get to the right place.</p>
          <div className="bg-white rounded-lg border p-4">
            <DecisionTreeWizard />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
          <div className="font-medium mb-1">What to expect</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Takes about 3–5 minutes to answer.</li>
            <li>Have your county and case type (if known).</li>
            <li>We’ll guide you to forms and clear next steps.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
