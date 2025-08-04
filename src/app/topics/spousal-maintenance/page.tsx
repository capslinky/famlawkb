import type { Metadata } from 'next';
import SpousalMaintenanceContent from '@/components/topics/SpousalMaintenanceContent';

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
  return <SpousalMaintenanceContent />;
}