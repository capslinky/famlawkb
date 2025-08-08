import Link from 'next/link';
import { Shield, Phone, FileText, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Protection Orders & Safety - Arizona Family Law',
  description: 'Emergency help, safety planning, and filing for protection orders in Arizona.',
};

export default function ProtectionHubPage() {
  const actions = [
    { label: 'Emergency Help', href: '/emergency-help', icon: <Phone className="w-5 h-5" /> },
    { label: 'Safety Plan', href: '/protection/safety-plan', icon: <Shield className="w-5 h-5" /> },
    { label: 'Types of Orders', href: '/protection/types', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'How to File', href: '/protection/how-to-file', icon: <FileText className="w-5 h-5" /> },
    { label: 'Responding to Emergency', href: '/protection/responding-emergency', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-700 to-rose-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Protection & Safety</h1>
              <p className="text-rose-100 mt-1">Quick access to safety resources and filing steps.</p>
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
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-rose-600">
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
        <div className="bg-white border border-rose-200 text-rose-900 rounded-lg p-4 text-sm">
          If you’re in danger now, call 911. Use the Quick Exit button to leave this site fast.
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="border border-rose-200">
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">Legal Basis (Arizona)</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Order of Protection: A.R.S. § 13-3602</li>
                <li>• Injunction Against Harassment: A.R.S. § 12-1809</li>
                <li>• Workplace Harassment: A.R.S. § 12-1810</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-rose-200">
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">Service & Hearing Fundamentals</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Orders must be served to be enforceable</li>
                <li>• Either party can request a hearing</li>
                <li>• Violations can result in arrest</li>
                <li>• Consider the Address Confidentiality Program (ACP)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
