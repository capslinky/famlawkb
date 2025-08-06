import Link from 'next/link';
import { ExternalLink, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { getImplementationStats } from '@/data/implementationProgress';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const stats = getImplementationStats();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Arizona Family Law Guide</h3>
            <p className="text-sm text-gray-600 mb-3">
              Free comprehensive legal information for Arizona family law matters.
            </p>
            <p className="text-xs text-gray-500">
              Information only — not legal advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assessment" className="text-blue-600 hover:text-blue-800">
                  Assessment Tool
                </Link>
              </li>
              <li>
                <Link href="/emergency-help" className="text-red-600 hover:text-red-800">
                  Emergency Help
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-gray-800">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-600 hover:text-gray-800">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Topics */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Popular Topics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/getting-divorced" className="text-gray-600 hover:text-gray-800">
                  Getting Divorced
                </Link>
              </li>
              <li>
                <Link href="/child-custody" className="text-gray-600 hover:text-gray-800">
                  Child Custody
                </Link>
              </li>
              <li>
                <Link href="/support/calculator" className="text-gray-600 hover:text-gray-800">
                  Support Calculator
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-gray-600 hover:text-gray-800">
                  Court Forms
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Information */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Site Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sitemap-dev" className="text-purple-600 hover:text-purple-800 inline-flex items-center gap-1 font-medium">
                  <Calendar className="w-4 h-4" />
                  Implementation Tracker
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-1">
                  XML Sitemap
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/capslinky/famlawkb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.azbar.org/findlawyer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-1"
                >
                  Find an Attorney
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.azcourts.gov/selfservicecenter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-1"
                >
                  Court Self-Help
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Plan Progress Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-blue-200 rounded-lg">
          <Link href="/sitemap-dev" className="block group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Implementation Plan Progress</p>
                  <p className="text-xs text-gray-600">
                    Week {stats.currentPhase === 'Not Started' ? '0' : stats.weeksRemaining} of 16 • 
                    {stats.completedDeliverables} of {stats.totalDeliverables} features completed
                  </p>
                </div>
              </div>
              <div className="text-blue-600 group-hover:text-blue-800 text-sm font-medium">
                Track Progress →
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </div>
            
            {/* Status Pills */}
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span className="text-gray-600">Current Phase: {stats.currentPhase}</span>
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-gray-500" />
                <span className="text-gray-600">Budget: ${(540800 * stats.budgetPercentage / 100).toLocaleString()} / $540,800</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-gray-600">{stats.completedSprints} of {stats.totalSprints} sprints complete</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {currentYear} Anthony Paradise, PLLC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/sitemap-dev" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Week 0 of 16
            </Link>
            <span>•</span>
            <span>Information only — not legal advice</span>
            <span>•</span>
            <span>Always consult with a qualified attorney</span>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-700 text-center">
            <strong>Emergency?</strong> If you are in immediate danger, call 911. 
            For domestic violence help: <a href="tel:1-800-799-7233" className="underline">1-800-799-7233</a> (24/7 Hotline)
          </p>
        </div>
      </div>
    </footer>
  );
}