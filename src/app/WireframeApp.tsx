'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { modules } from "@/data/modules";
import Link from "next/link";
import PersonalizedHero from "@/components/PersonalizedHero";
import EmergencyHelpButton from "@/components/EmergencyHelpButton";
import MobileNav from "@/components/MobileNav";
import { ProgressTracker, RandomEncouragement } from "@/components/EmotionalSupport";
import DecisionTreeWizard from "@/components/DecisionTreeWizard";

export default function WireframeApp() {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Emergency Help Button */}
      <EmergencyHelpButton />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-between p-6 shadow-sm bg-white">
        <div className="text-xl font-semibold">AZ Family Law Guide</div>
        <Button variant="outline">Schedule Consult</Button>
      </nav>

      {/* Hero Section */}
      <PersonalizedHero />

      {/* Progress and Encouragement Section */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <DecisionTreeWizard />
          <ProgressTracker />
          <div className="text-center mb-4">
            <RandomEncouragement />
          </div>
        </div>
      </section>

      {/* Modules - Below the Fold */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Browse All Topics</h2>
                <span className="text-gray-500 group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </summary>
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {modules.map((m) => (
                <Card
                  key={m.slug}
                  className="hover:shadow-lg transition-shadow focus-within:ring-2 ring-blue-500"
                >
                  <CardContent className="p-6 flex flex-col gap-4 items-start">
                    <h3 className="text-xl font-medium">{m.title}</h3>
                    <p className="text-sm text-gray-600">{m.description}</p>
                    <Link href={`/modules/${m.slug}`}>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </details>
        </div>
      </section>

    </div>
  );
} 