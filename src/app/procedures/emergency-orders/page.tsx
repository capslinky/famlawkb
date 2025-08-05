import type { Metadata } from 'next';
import EmergencyOrdersContent from '@/components/procedures/EmergencyOrdersContent';

export const metadata: Metadata = {
  title: 'Emergency Court Orders in Arizona | Urgent Legal Relief',
  description: 'Get emergency court orders in Arizona - temporary restraining orders, emergency custody, domestic violence protection. Step-by-step guide for urgent situations.',
  keywords: 'emergency orders, temporary restraining order, emergency custody, domestic violence, urgent court relief, Arizona family court, protective orders',
  openGraph: {
    title: 'Emergency Court Orders in Arizona | Urgent Legal Relief',
    description: 'Get emergency court orders in Arizona - temporary restraining orders, emergency custody, domestic violence protection. Step-by-step guide for urgent situations.',
    type: 'article',
    url: 'https://azfamilylaw.com/procedures/emergency-orders',
    siteName: 'Arizona Family Law Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Court Orders in Arizona | Urgent Legal Relief',
    description: 'Get emergency court orders in Arizona - temporary restraining orders, emergency custody, domestic violence protection. Step-by-step guide for urgent situations.',
  },
  alternates: {
    canonical: 'https://azfamilylaw.com/procedures/emergency-orders',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmergencyOrdersPage() {
  return <EmergencyOrdersContent />;
}