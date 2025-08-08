import Link from 'next/link';
import { Gavel, Clock, FileText, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Respond to Papers - Arizona Family Law',
  description: 'Understand deadlines and file your response to divorce or custody papers in Arizona.',
};

export default function RespondHubPage() {
  const actions = [
    { label: 'Urgent Timeline', href: '/responding/urgent-timeline', icon: <AlertTriangle className="w-5 h-5" /> },
    { label: 'Standard Timeline', href: '/responding/standard-timeline', icon: <Clock className="w-5 h-5" /> },
    { label: 'File a Response', href: '/forms/response-petition', icon: <FileText className="w-5 h-5" /> },
    { label: 'Deadline Calculator', href: '/tools#deadline-calculator', icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3">
            <Gavel className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Respond to Papers</h1>
              <p className="text-indigo-100 mt-1">Check your deadlines and file the correct forms.</p>
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
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600">
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

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
          Missing a deadline can affect your rights. If you were just served, start with the Urgent Timeline.
        </div>

        <div className="bg-white border rounded-lg p-4 text-sm text-gray-700 mt-4">
          <div className="font-medium mb-1">What you’ll need</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>The papers you were served (look for the date).</li>
            <li>Your case number (if available).</li>
            <li>10–20 minutes to complete the response form.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">Service & Hearing Basics</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Serve your filed response and keep proof</li>
                <li>• Watch for notices of conferences/hearings</li>
                <li>• Organize exhibits and a short case timeline</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">Helpful References</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• A.R.S. Title 25 — Family law procedures</li>
                <li>• Arizona Rules of Family Law Procedure</li>
                <li>• Court self-help centers by county</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
