import type { Metadata } from 'next';
import LegalDisclaimerContent from '@/components/legal/LegalDisclaimerContent';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | Arizona Family Law Guide',
  description: 'Important legal disclaimers and limitations regarding the use of this website. This website does not provide legal advice and no attorney-client relationship is created.',
  keywords: 'legal disclaimer, no legal advice, attorney-client relationship, Arizona Bar compliance, professional responsibility, liability limitation',
  openGraph: {
    title: 'Legal Disclaimer | Arizona Family Law Guide',
    description: 'Important legal disclaimers and limitations regarding the use of this website. This website does not provide legal advice and no attorney-client relationship is created.',
    type: 'article',
    url: 'https://azfamilylaw.com/legal-disclaimer',
    siteName: 'Arizona Family Law Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Disclaimer | Arizona Family Law Guide',
    description: 'Important legal disclaimers and limitations regarding the use of this website. This website does not provide legal advice and no attorney-client relationship is created.',
  },
  alternates: {
    canonical: 'https://azfamilylaw.com/legal-disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalDisclaimerPage() {
  return <LegalDisclaimerContent />;
}