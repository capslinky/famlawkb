'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function HeroSection() {

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Navigate Arizona Family Law with Confidence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
        >
          Free legal guidance for divorce, custody, and family matters. 
          Get clear answers in plain English.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
        >
          <SearchBar />
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <Link href="/getting-divorced" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Getting Divorced
            </Button>
          </Link>
          <Link href="/child-custody" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Child Custody
            </Button>
          </Link>
          <Link href="/get-protection" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Get Protection
            </Button>
          </Link>
        </motion.div>

        {/* Secondary Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-base text-gray-600"
        >
          <span>Not sure where to start? </span>
          <Link href="/assessment" className="text-blue-600 hover:underline font-medium">
            Take our guided assessment →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}