import type { Metadata } from 'next';
import FAQContent from '@/components/reference/FAQContent';

export const metadata: Metadata = {
  title: 'Arizona Family Law FAQ | Frequently Asked Questions',
  description: 'Quick answers to the most common questions about divorce, custody, support, and family law in Arizona. Get immediate answers to pressing legal questions.',
  keywords: 'FAQ, questions, family law, Arizona, divorce, custody, support, legal questions, quick answers',
  openGraph: {
    title: 'Arizona Family Law FAQ | Frequently Asked Questions',
    description: 'Quick answers to the most common questions about divorce, custody, support, and family law in Arizona. Get immediate answers to pressing legal questions.',
    type: 'article',
    url: 'https://azfamilylaw.com/reference/faq',
    siteName: 'Arizona Family Law Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Family Law FAQ | Frequently Asked Questions',
    description: 'Quick answers to the most common questions about divorce, custody, support, and family law in Arizona. Get immediate answers to pressing legal questions.',
  },
  alternates: {
    canonical: 'https://azfamilylaw.com/reference/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return <FAQContent />;
}