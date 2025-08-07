import Link from 'next/link';
import { Users, Calculator, DollarSign, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Support & Custody - Arizona Family Law',
  description: 'Child support, spousal maintenance, parenting plans, and modifications in Arizona.',
};

export default function SupportCustodyHubPage() {
  const actions = [
    { label: 'Child Support Calculator', href: '/support/calculator', icon: <Calculator className="w-5 h-5" /> },
    { label: 'Spousal Maintenance Info', href: '/topics/spousal-maintenance', icon: <DollarSign className="w-5 h-5" /> },
    { label: 'Parenting Plan Builder', href: '/tools#parenting-plan', icon: <Users className="w-5 h-5" /> },
    { label: 'Modify Child Support', href: '/support-modification/child-support', icon: <FileText className="w-5 h-5" /> },
    { label: 'Modify Spousal Support', href: '/support-modification/spousal-support', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Support & Custody</h1>
              <p className="text-emerald-100 mt-1">Calculate support, build parenting plans, and manage changes.</p>
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
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600">
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

        <div className="bg-white border rounded-lg p-4 text-sm text-gray-700">
          <div className="font-medium mb-1">Helpful to have</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Recent income info for both parents.</li>
            <li>Parenting schedule and childcare costs.</li>
            <li>10–15 minutes for calculators and plan builder.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
