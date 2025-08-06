import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import CrisisSafetyFeatures from "@/components/CrisisSafetyFeatures";
import { ReassuranceWidget } from "@/components/EmotionalSupport";
import CrisisDetection from "@/components/CrisisDetection";

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
        <CrisisSafetyFeatures />
        <CrisisDetection />
        <Breadcrumb />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ReassuranceWidget />
      </body>
    </html>
  );
}
