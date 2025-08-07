import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationHeader from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/Footer";
import CrisisSafetyFeatures from "@/components/CrisisSafetyFeatures";
import { ReassuranceWidget } from "@/components/EmotionalSupport";
import CrisisDetection from "@/components/CrisisDetection";
import { ThemeProvider } from "@/components/ui/theme-toggle";
import { ToastProvider } from "@/components/ui/toast";
import { ScreenReaderProvider } from "@/components/ui/screen-reader-announcements";
import { SkipNavigation } from "@/components/ui/skip-navigation";
import BottomNav from "@/components/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arizona Family Law Guide - Free Legal Information",
  description: "Navigate Arizona divorce, custody, and family law with confidence. Free step-by-step guides and resources from practicing attorneys.",
  metadataBase: new URL('https://azfamilylaw.info'),
  openGraph: {
    title: 'Arizona Family Law Guide - Free Legal Information',
    description: 'Navigate Arizona divorce, custody, and family law with confidence. Free step-by-step guides and resources.',
    url: 'https://azfamilylaw.info',
    siteName: 'Arizona Family Law Knowledge Base',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arizona Family Law Knowledge Base',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Family Law Guide',
    description: 'Navigate Arizona divorce, custody, and family law with confidence.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ToastProvider>
            <ScreenReaderProvider>
              <SkipNavigation />
              <CrisisSafetyFeatures />
              <CrisisDetection />
              <NavigationHeader />
              <main id="main-content" className="flex-1 pb-16 lg:pb-0" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              <ReassuranceWidget />
              <BottomNav />
            </ScreenReaderProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
