import type { Metadata } from 'next';
import CourtProceduresContent from '@/components/procedures/CourtProceduresContent';

export const metadata: Metadata = {
  title: 'Arizona Family Court Procedures | Step-by-Step Guide',
  description: 'Complete guide to Arizona family court procedures - filing, deadlines, hearings, disclosure requirements, and what to expect in court. Essential for self-represented litigants.',
  keywords: 'court procedures, filing, deadlines, hearings, Arizona family court, self-help, motions, trial preparation, disclosure requirements',
  openGraph: {
    title: 'Arizona Family Court Procedures | Step-by-Step Guide',
    description: 'Complete guide to Arizona family court procedures - filing, deadlines, hearings, disclosure requirements, and what to expect in court. Essential for self-represented litigants.',
    type: 'article',
    url: 'https://azfamilylaw.com/procedures/court-procedures',
    siteName: 'Arizona Family Law Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Family Court Procedures | Step-by-Step Guide',
    description: 'Complete guide to Arizona family court procedures - filing, deadlines, hearings, disclosure requirements, and what to expect in court. Essential for self-represented litigants.',
  },
  alternates: {
    canonical: 'https://azfamilylaw.com/procedures/court-procedures',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CourtProceduresPage() {
  return <CourtProceduresContent />;
}