'use client';

import { useState } from "react";
import { Menu, X, Phone, Home, HelpCircle, Shield, FileText, Users, Gavel, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

const navItems = [
  { href: "/start", label: "Start", icon: Home },
  { href: "/responding", label: "Respond", icon: Gavel },
  { href: "/support-custody", label: "Support & Custody", icon: Users },
  { href: "/protection", label: "Protection", icon: Shield },
  { href: "/forms", label: "Forms", icon: FileText },
  { href: "/learning", label: "Learn", icon: GraduationCap },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-lg font-semibold">
            AZ Family Law
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="lg:hidden h-16"></div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Menu</h2>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Search Bar */}
                <SearchBar 
                  placeholder="Search..." 
                  onSearch={() => setIsOpen(false)}
                />
              </div>

              {/* Navigation Links */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-800">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Emergency Help */}
              <div className="p-4 border-t">
                <Link href="/emergency-help" onClick={toggleMenu}>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Help
                  </Button>
                </Link>
              </div>

              {/* Schedule Consult */}
              <div className="p-4">
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
