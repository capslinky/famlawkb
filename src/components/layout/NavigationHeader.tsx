'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, Home, FileText, Calculator, Shield, 
  Users, HelpCircle, BookOpen, Briefcase, Gavel, Search,
  Settings, BarChart3, Zap, Globe, Rocket, FileCheck,
  MessageSquare, GraduationCap, Phone, ChevronRight
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const navigation: NavItem[] = [
    {
      label: 'Getting Started',
      icon: <Home className="w-4 h-4" />,
      children: [
        { label: 'Assessment Tool', href: '/assessment', icon: <HelpCircle className="w-4 h-4" /> },
        { label: 'Getting Divorced', href: '/getting-divorced', icon: <FileText className="w-4 h-4" /> },
        { label: 'Child Custody', href: '/child-custody', icon: <Users className="w-4 h-4" /> },
        { label: 'Get Protection', href: '/get-protection', icon: <Shield className="w-4 h-4" /> },
        { label: 'Emergency Help', href: '/emergency-help', icon: <Phone className="w-4 h-4" /> },
      ]
    },
    {
      label: 'Legal Processes',
      icon: <Gavel className="w-4 h-4" />,
      children: [
        { label: 'Divorce Types', icon: <FileText className="w-4 h-4" />, children: [
          { label: 'Uncontested (Simple)', href: '/divorce/uncontested-simple' },
          { label: 'Uncontested with Children', href: '/divorce/uncontested-with-children' },
          { label: 'Contested Divorce', href: '/divorce/contested-full' },
        ]},
        { label: 'Process Modules', icon: <BookOpen className="w-4 h-4" />, children: [
          { label: 'Responding to Divorce', href: '/modules/responding' },
          { label: 'First Appearance', href: '/modules/first-appearance' },
          { label: 'Financial Disclosures', href: '/modules/disclosures' },
          { label: 'Temporary Orders', href: '/modules/temporary-orders' },
          { label: 'Mediation', href: '/modules/mediation' },
          { label: 'Trial Preparation', href: '/modules/trial-prep' },
          { label: 'Modifications', href: '/modules/modifications' },
          { label: 'Enforcement & Appeals', href: '/modules/enforcement-appeals' },
        ]},
        { label: 'Court Procedures', href: '/procedures/court-procedures' },
        { label: 'Emergency Orders', href: '/procedures/emergency-orders' },
      ]
    },
    {
      label: 'Financial',
      icon: <Calculator className="w-4 h-4" />,
      children: [
        { label: 'All Calculators', href: '/calculators', icon: <Calculator className="w-4 h-4" /> },
        { label: 'Child Support Calculator', href: '/support/calculator', icon: <Users className="w-4 h-4" /> },
        { label: 'Child Support Info', href: '/topics/child-support' },
        { label: 'Spousal Maintenance', href: '/topics/spousal-maintenance' },
        { label: 'Property Division', href: '/topics/property-division' },
      ]
    },
    {
      label: 'Forms & Documents',
      icon: <FileText className="w-4 h-4" />,
      children: [
        { label: 'Court Forms Hub', href: '/forms', icon: <FileText className="w-4 h-4" /> },
        { label: 'Smart Form Wizard', href: '/forms/wizard' },
        { label: 'Packet Builder', href: '/forms/packet-builder' },
        { label: 'Divorce Petition (Children)', href: '/forms/divorce-petition-children' },
        { label: 'Response to Petition', href: '/forms/response-petition' },
        { label: 'Smart Divorce Petition', href: '/forms/smart/divorce-petition' },
      ]
    },
    {
      label: 'Tools',
      icon: <Zap className="w-4 h-4" />,
      children: [
        { label: 'All Tools', href: '/tools', icon: <Zap className="w-4 h-4" /> },
        { label: 'Case Management', href: '/case-management', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'Communication Hub', href: '/communication', icon: <MessageSquare className="w-4 h-4" /> },
        { label: 'Learning Resources', href: '/learning', icon: <GraduationCap className="w-4 h-4" /> },
        { label: 'Search', href: '/search', icon: <Search className="w-4 h-4" /> },
      ]
    },
    {
      label: 'Resources',
      icon: <BookOpen className="w-4 h-4" />,
      children: [
        { label: 'Resource Center', href: '/resources' },
        { label: 'Self-Representation Guide', href: '/resources/self-representation-guide' },
        { label: 'Legal Representation', href: '/resources/legal-representation' },
        { label: 'FAQ', href: '/reference/faq' },
        { label: 'Glossary', href: '/glossary' },
        { label: 'Legal Disclaimer', href: '/legal-disclaimer' },
      ]
    },
    {
      label: 'Admin',
      icon: <Settings className="w-4 h-4" />,
      children: [
        { label: 'Launch Dashboard', href: '/launch', icon: <Rocket className="w-4 h-4" /> },
        { label: 'Content Audit', href: '/content-audit', icon: <FileCheck className="w-4 h-4" /> },
        { label: 'Integration Hub', href: '/integration', icon: <Globe className="w-4 h-4" /> },
        { label: 'Site Map', href: '/sitemap-dev', icon: <BarChart3 className="w-4 h-4" /> },
      ]
    }
  ];

  const isActive = (href: string) => pathname === href;

  const toggleDropdown = (label: string) => {
    const next = openDropdown === label ? null : label;
    setOpenDropdown(next);
    if (next) {
      // Focus first menu item after open
      setTimeout(() => {
        const menu = containerRef.current?.querySelector('[role="menu"]');
        const firstItem = menu?.querySelector('[role="menuitem"]') as HTMLElement | null;
        firstItem?.focus();
      }, 0);
    }
  };

  // Close dropdowns on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close on click outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  // Keyboard navigation within open dropdown menu
  const onMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!openDropdown) return;
    const menu = e.currentTarget;
    const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    if (items.length === 0) return;
    const currentIndex = items.findIndex((el) => el === document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[(currentIndex + 1 + items.length) % items.length];
      next?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === 'Tab') {
      // trap focus within dropdown
      e.preventDefault();
      if (e.shiftKey) {
        const prev = items[(currentIndex - 1 + items.length) % items.length];
        prev?.focus();
      } else {
        const next = items[(currentIndex + 1 + items.length) % items.length];
        next?.focus();
      }
    }
  };

  return (
    <header id="primary-navigation" className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary" role="navigation">
        <div ref={containerRef} className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Gavel className="w-8 h-8 text-blue-600" />
              <div>
                <span className="text-xl font-bold text-gray-900">AZ Family Law</span>
                <span className="hidden sm:block text-xs text-gray-500">Knowledge Base</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      aria-haspopup="menu"
                      aria-expanded={openDropdown === item.label}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          if (openDropdown !== item.label) {
                            toggleDropdown(item.label);
                          } else {
                            const menu = containerRef.current?.querySelector('[role="menu"]');
                            const firstItem = menu?.querySelector('[role="menuitem"]') as HTMLElement | null;
                            firstItem?.focus();
                          }
                        }
                      }}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        openDropdown === item.label
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                        role="menu"
                        aria-label={item.label}
                        onKeyDown={onMenuKeyDown}
                      >
                        {item.children.map((child) => (
                          <div key={child.label}>
                            {child.children ? (
                              <div>
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                  {child.label}
                                </div>
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.href || '#'}
                                    onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                                      isActive(subChild.href || '') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                                    }`}
                                role="menuitem"
                                tabIndex={-1}
                              >
                                    <span className="ml-4">{subChild.label}</span>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <Link
                                href={child.href || '#'}
                                onClick={() => setOpenDropdown(null)}
                                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 ${
                                  isActive(child.href || '') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                                }`}
                                role="menuitem"
                                tabIndex={-1}
                              >
                                {child.icon}
                                {child.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href || '') 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/assessment"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Start Assessment
            </Link>
            <Link
              href="/emergency-help"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Emergency
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <div key={child.label}>
                            {child.children ? (
                              <div className="py-2">
                                <div className="text-xs font-semibold text-gray-500 uppercase px-3">
                                  {child.label}
                                </div>
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    href={subChild.href || '#'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <Link
                                href={child.href || '#'}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              >
                                {child.icon}
                                {child.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Quick Actions */}
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              <Link
                href="/assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium"
              >
                Start Assessment
              </Link>
              <Link
                href="/emergency-help"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-red-600 text-white px-4 py-2 rounded-md text-center font-medium"
              >
                Emergency Help
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
