import React from 'react';
import Link from 'next/link';
import { 
  Gavel, Phone, Mail, MapPin, ExternalLink, 
  Facebook, Twitter, Youtube, Linkedin,
  Heart, Shield, Clock, AlertCircle
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    gettingStarted: {
      title: 'Getting Started',
      links: [
        { label: 'Assessment Tool', href: '/assessment' },
        { label: 'Getting Divorced', href: '/getting-divorced' },
        { label: 'Child Custody', href: '/child-custody' },
        { label: 'Get Protection', href: '/get-protection' },
        { label: 'Emergency Help', href: '/emergency-help' },
      ]
    },
    legalProcesses: {
      title: 'Legal Processes',
      links: [
        { label: 'Uncontested Divorce', href: '/divorce/uncontested-simple' },
        { label: 'Contested Divorce', href: '/divorce/contested-full' },
        { label: 'Court Procedures', href: '/procedures/court-procedures' },
        { label: 'Emergency Orders', href: '/procedures/emergency-orders' },
        { label: 'Mediation', href: '/modules/mediation' },
      ]
    },
    financialTools: {
      title: 'Financial Tools',
      links: [
        { label: 'All Calculators', href: '/calculators' },
        { label: 'Child Support Calculator', href: '/support/calculator' },
        { label: 'Child Support Info', href: '/topics/child-support' },
        { label: 'Spousal Maintenance', href: '/topics/spousal-maintenance' },
        { label: 'Property Division', href: '/topics/property-division' },
      ]
    },
    forms: {
      title: 'Forms & Documents',
      links: [
        { label: 'Court Forms Hub', href: '/forms' },
        { label: 'Smart Form Wizard', href: '/forms/wizard' },
        { label: 'Packet Builder', href: '/forms/packet-builder' },
        { label: 'Divorce Petition', href: '/forms/divorce-petition-children' },
        { label: 'Response Forms', href: '/forms/response-petition' },
      ]
    },
    tools: {
      title: 'Tools & Features',
      links: [
        { label: 'All Tools', href: '/tools' },
        { label: 'Case Management', href: '/case-management' },
        { label: 'Communication Hub', href: '/communication' },
        { label: 'Learning Resources', href: '/learning' },
        { label: 'Search', href: '/search' },
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Resource Center', href: '/resources' },
        { label: 'Self-Representation', href: '/resources/self-representation-guide' },
        { label: 'FAQ', href: '/reference/faq' },
        { label: 'Glossary', href: '/glossary' },
        { label: 'Legal Disclaimer', href: '/legal-disclaimer' },
      ]
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Need immediate help?</span>
            <Link href="/emergency-help" className="underline hover:no-underline">
              Access Emergency Resources
            </Link>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">24/7 Domestic Violence Hotline: 1-800-799-7233</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gavel className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Arizona Family Law KB</span>
              </div>
              <p className="text-sm">
                Comprehensive self-help legal guidance for Arizona family law matters. 
                Empowering individuals with knowledge and tools for their legal journey.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Important Links</h4>
              <div className="space-y-2">
                <a
                  href="https://www.azcourts.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Arizona Judicial Branch
                </a>
                <a
                  href="https://www.superiorcourt.maricopa.gov/family-court/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Maricopa County Family Court
                </a>
                <a
                  href="https://www.azleg.gov/arsDetail/?title=25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Arizona Revised Statutes Title 25
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get Help</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Court Self-Service Center: (602) 506-7355</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Hours: Mon-Fri 8:00 AM - 5:00 PM MST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Phoenix, Arizona</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="text-sm">
                <p className="text-yellow-400 font-semibold mb-1">Legal Disclaimer</p>
                <p className="text-gray-400">
                  This website provides general information about Arizona family law and should not be considered legal advice. 
                  Laws can change, and each situation is unique. For specific legal advice, please consult with a qualified 
                  Arizona family law attorney. Use of this website does not create an attorney-client relationship.
                </p>
                <Link href="/legal-disclaimer" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                  Read Full Disclaimer →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Arizona Family Law Knowledge Base. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/legal-disclaimer" className="hover:text-white">
                Terms & Disclaimer
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
              <Link href="/content-audit" className="hover:text-white">
                Admin
              </Link>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">for Arizona families</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}