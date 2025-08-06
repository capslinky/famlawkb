import Link from 'next/link';
import { ExternalLink, TrendingUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                <Link href="/sitemap-dev" className="text-green-600 hover:text-green-800 inline-flex items-center gap-1 font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Track Development Progress
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

        {/* Development Progress Banner */}
        <div className="mt-6 p-3 bg-gradient-to-r from-blue-50 to-green-50 border border-green-200 rounded-lg">
          <Link href="/sitemap-dev" className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Development Progress: 96% Complete</p>
                <p className="text-xs text-gray-600">49 of 51 pages fully developed • Click to view detailed progress</p>
              </div>
            </div>
            <div className="text-blue-600 group-hover:text-blue-800 text-sm font-medium">
              View Progress →
            </div>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {currentYear} Anthony Paradise, PLLC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/sitemap-dev" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              96% Complete
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