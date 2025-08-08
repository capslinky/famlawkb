import type { Metadata } from 'next';
import SpousalMaintenanceContent from '@/components/topics/SpousalMaintenanceContent';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Spousal Maintenance (Alimony) in Arizona | Arizona Family Law Guide',
  description: 'Complete guide to spousal maintenance in Arizona - eligibility requirements, 2023 guidelines for calculation, modification process, and enforcement. Learn about alimony amounts, duration, and tax implications.',
  keywords: 'spousal maintenance, alimony, Arizona, divorce, financial support, guidelines, calculation, modification, enforcement',
  openGraph: {
    title: 'Spousal Maintenance (Alimony) in Arizona | Arizona Family Law Guide',
    description: 'Complete guide to spousal maintenance in Arizona - eligibility requirements, 2023 guidelines for calculation, modification process, and enforcement.',
    type: 'article',
    url: 'https://azfamilylaw.com/topics/spousal-maintenance',
    siteName: 'Arizona Family Law Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spousal Maintenance (Alimony) in Arizona | Arizona Family Law Guide',
    description: 'Complete guide to spousal maintenance in Arizona - eligibility requirements, 2023 guidelines for calculation, modification process, and enforcement.',
  },
  alternates: {
    canonical: 'https://azfamilylaw.com/topics/spousal-maintenance',
  },
};

export default function SpousalMaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Legal Basis (Arizona)</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800">
                <div>
                  <h3 className="font-medium mb-2">Core Statute</h3>
                  <ul className="space-y-1">
                    <li>• A.R.S. § 25-319 — Spousal maintenance; eligibility and factors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Key Principles</h3>
                  <ul className="space-y-1">
                    <li>• Maintenance is need-based; not automatic</li>
                    <li>• Amount and duration depend on statutory factors</li>
                    <li>• Tax treatment changed after 2019 (consult advisor)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <SpousalMaintenanceContent />
      </div>
    </div>
  );
}
