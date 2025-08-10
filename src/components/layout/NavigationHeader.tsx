'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Search, Home, FileText, Calculator, Shield, 
  Users, HelpCircle, BookOpen, Gavel, Phone, ChevronRight,
  Clock, AlertCircle, ArrowRight, Sparkles
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavItem[];
  featured?: boolean;
}

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();

  // Simplified navigation with better organization
  const navigation: NavItem[] = [
    {
      label: 'Start',
      icon: <Home className="w-4 h-4" />,
      children: [
        { 
          label: 'Getting Started', 
          description: 'Begin your journey',
          children: [
            { label: 'Start Here', href: '/start', icon: <Home className="w-4 h-4" />, featured: true },
            { label: 'Assessment Tool', href: '/assessment', icon: <Sparkles className="w-4 h-4" />, featured: true },
            { label: 'Getting Divorced', href: '/getting-divorced', icon: <Gavel className="w-4 h-4" /> },
            { label: 'Pre-Filing Overview', href: '/modules/pre-filing', icon: <BookOpen className="w-4 h-4" /> },
          ]
        },
        {
          label: 'Quick Actions',
          description: 'Common tasks',
          children: [
            { label: 'File for Divorce', href: '/forms/divorce-petition-children', icon: <FileText className="w-4 h-4" /> },
            { label: 'Respond to Divorce', href: '/forms/response-petition', icon: <FileText className="w-4 h-4" /> },
            { label: 'Calculate Support', href: '/support/calculator', icon: <Calculator className="w-4 h-4" /> },
            { label: 'Get Protection', href: '/get-protection', icon: <Shield className="w-4 h-4" /> },
          ]
        }
      ]
    },
    {
      label: 'Topics',
      icon: <BookOpen className="w-4 h-4" />,
      children: [
        {
          label: 'Family Law Topics',
          description: 'Core legal information',
          children: [
            { label: 'Child Custody', href: '/child-custody', icon: <Users className="w-4 h-4" />, featured: true },
            { label: 'Child Support', href: '/topics/child-support', icon: <Calculator className="w-4 h-4" />, featured: true },
            { label: 'Spousal Maintenance', href: '/topics/spousal-maintenance', icon: <FileText className="w-4 h-4" /> },
            { label: 'Property Division', href: '/topics/property-division', icon: <Home className="w-4 h-4" /> },
          ]
        },
        {
          label: 'Procedures',
          description: 'Court processes',
          children: [
            { label: 'Court Procedures', href: '/procedures/court-procedures', icon: <Gavel className="w-4 h-4" /> },
            { label: 'Emergency Orders', href: '/procedures/emergency-orders', icon: <AlertCircle className="w-4 h-4" /> },
            { label: 'Mediation', href: '/modules/mediation', icon: <Users className="w-4 h-4" /> },
            { label: 'Trial Prep', href: '/modules/trial-prep', icon: <BookOpen className="w-4 h-4" /> },
          ]
        }
      ]
    },
    {
      label: 'Forms & Tools',
      icon: <FileText className="w-4 h-4" />,
      children: [
        {
          label: 'Court Forms',
          description: 'Official documents',
          children: [
            { label: 'Forms Hub', href: '/forms', icon: <FileText className="w-4 h-4" />, featured: true },
            { label: 'Smart Form Wizard', href: '/forms/wizard', icon: <Sparkles className="w-4 h-4" />, featured: true },
            { label: 'Divorce Petition', href: '/forms/divorce-petition-children', icon: <FileText className="w-4 h-4" /> },
            { label: 'Response Forms', href: '/forms/response-petition', icon: <FileText className="w-4 h-4" /> },
          ]
        },
        {
          label: 'Calculators',
          description: 'Financial tools',
          children: [
            { label: 'Child Support Calculator', href: '/support/calculator', icon: <Calculator className="w-4 h-4" /> },
            { label: 'Deadline Calculator', href: '/tools#deadline-calculator', icon: <Clock className="w-4 h-4" /> },
            { label: 'Parenting Plan Builder', href: '/tools#parenting-plan', icon: <Users className="w-4 h-4" /> },
          ]
        }
      ]
    },
    {
      label: 'Help',
      icon: <HelpCircle className="w-4 h-4" />,
      children: [
        {
          label: 'Resources',
          description: 'Support & guidance',
          children: [
            { label: 'Emergency Help', href: '/emergency-help', icon: <Phone className="w-4 h-4" />, featured: true },
            { label: 'FAQ', href: '/reference/faq', icon: <HelpCircle className="w-4 h-4" /> },
            { label: 'Glossary', href: '/glossary', icon: <BookOpen className="w-4 h-4" /> },
            { label: 'Self-Representation', href: '/resources/self-representation-guide', icon: <Users className="w-4 h-4" /> },
          ]
        },
        {
          label: 'Protection',
          description: 'Safety resources',
          children: [
            { label: 'Protection Hub', href: '/protection', icon: <Shield className="w-4 h-4" /> },
            { label: 'Safety Planning', href: '/protection/safety-plan', icon: <Shield className="w-4 h-4" /> },
            { label: 'How to File', href: '/protection/how-to-file', icon: <FileText className="w-4 h-4" /> },
          ]
        }
      ]
    },
  ];

  // Popular search suggestions
  const searchSuggestions = [
    'divorce process',
    'child custody',
    'child support calculator',
    'protection order',
    'court forms',
    'mediation',
  ];

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMegaMenu(null);
        setSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Breadcrumbs */}
      {pathname !== '/' && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex py-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              {pathname.split('/').filter(Boolean).map((segment, index, array) => {
                const href = '/' + array.slice(0, index + 1).join('/');
                const label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                return (
                  <React.Fragment key={href}>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    {index === array.length - 1 ? (
                      <span className="text-gray-900 font-medium">{label}</span>
                    ) : (
                      <Link href={href} className="text-gray-500 hover:text-gray-700">
                        {label}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`bg-white sticky top-0 z-50 transition-all duration-200 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div ref={containerRef} className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-gray-900">AZ Family Law</div>
                  <div className="text-xs text-gray-500">Knowledge Base</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 max-w-3xl mx-8">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative flex-1 max-w-md mr-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder="Search topics, forms, procedures..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Search"
                />
                
                {/* Search Suggestions */}
                {searchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
                      Popular Searches
                    </div>
                    {searchSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          setSearchQuery(suggestion);
                          searchRef.current?.focus();
                        }}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </form>

              {/* Main Nav Items */}
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <div key={item.label} className="relative">
                    <button
                      onMouseEnter={() => setOpenMegaMenu(item.label)}
                      onClick={() => setOpenMegaMenu(openMegaMenu === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        openMegaMenu === item.label
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-expanded={openMegaMenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.icon}
                      {item.label}
                    </button>

                    {/* Mega Menu */}
                    {openMegaMenu === item.label && item.children && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200"
                        onMouseLeave={() => setOpenMegaMenu(null)}
                      >
                        <div className="p-6 min-w-[480px]">
                          <div className="grid grid-cols-2 gap-6">
                            {item.children.map((section) => (
                              <div key={section.label}>
                                <div className="mb-3">
                                  <h3 className="text-sm font-semibold text-gray-900">{section.label}</h3>
                                  {section.description && (
                                    <p className="text-xs text-gray-500 mt-1">{section.description}</p>
                                  )}
                                </div>
                                <ul className="space-y-2">
                                  {section.children?.map((child) => (
                                    <li key={child.label}>
                                      <Link
                                        href={child.href || '#'}
                                        onClick={() => setOpenMegaMenu(null)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                                          child.featured
                                            ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                            : isActive(child.href || '')
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                      >
                                        {child.icon}
                                        <span>{child.label}</span>
                                        {child.featured && (
                                          <ArrowRight className="w-3 h-3 ml-auto" />
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/assessment"
                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Start Assessment
              </Link>
              <Link
                href="/emergency-help"
                className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Emergency
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <nav className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>

            {/* Mobile Navigation Items */}
            <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
              <div className="p-4 space-y-6">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                      {item.icon}
                      {item.label}
                    </h3>
                    {item.children?.map((section) => (
                      <div key={section.label} className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          {section.label}
                        </h4>
                        <ul className="space-y-1">
                          {section.children?.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href || '#'}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                              >
                                {child.icon}
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Quick Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/assessment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  Assessment
                </Link>
                <Link
                  href="/emergency-help"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Emergency
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}