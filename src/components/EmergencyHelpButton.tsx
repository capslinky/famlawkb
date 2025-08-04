'use client';

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EmergencyHelpButton() {
  return (
    <Link href="/emergency-help" aria-label="24/7 Crisis Help">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-4 right-4 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50"
      >
        <div className="relative group">
          {/* Pulsing background */}
          <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-25"></div>
          
          {/* Button */}
          <button className="relative bg-red-600 hover:bg-red-700 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300">
            <Phone className="w-5 h-5 md:w-6 md:h-6" fill="white" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              24/7 Crisis Help
              <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}