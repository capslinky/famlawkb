import Link from 'next/link';
import { 
  Home, FileText, Calculator, Shield, Users, HelpCircle, 
  BookOpen, Briefcase, Gavel, Search, MessageSquare, 
  GraduationCap, Phone, Scale, Baby, DollarSign, 
  AlertTriangle, ChevronRight, Star, Clock, Heart,
  Zap, Globe, FileCheck, BarChart3
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Sitemap - Arizona Family Law Knowledge Base',
  description: 'Complete directory of all pages and resources available on our site',
};

export default function SitemapPage() {
  const categories = [
    {
      title: 'Getting Started',
      icon: <Home className="w-5 h-5" />,
      pages: [
        { title: 'Home', href: '/', description: 'Main landing page' },
        { title: 'Legal Assessment Tool', href: '/assessment', description: 'Get personalized guidance' },
        { title: 'Emergency Help', href: '/emergency-help', description: 'Immediate assistance' },
        { title: 'Getting Divorced', href: '/getting-divorced', description: 'Divorce overview' },
        { title: 'Child Custody', href: '/child-custody', description: 'Custody basics' },
        { title: 'Get Protection', href: '/get-protection', description: 'Safety resources' },
      ]
    },
    {
      title: 'Divorce Process',
      icon: <Scale className="w-5 h-5" />,
      pages: [
        { title: 'Uncontested Divorce (Simple)', href: '/divorce/uncontested-simple', description: 'No children, agreed terms' },
        { title: 'Uncontested with Children', href: '/divorce/uncontested-with-children', description: 'Agreed terms with kids' },
        { title: 'Contested Divorce', href: '/divorce/contested-full', description: 'Disputed divorce process' },
        { title: 'Responding (Standard)', href: '/responding/standard-timeline', description: 'Normal response timeline' },
        { title: 'Responding (Urgent)', href: '/responding/urgent-timeline', description: 'Emergency response' },
        { title: 'Late Response Options', href: '/responding/late-response', description: 'Missed deadline options' },
      ]
    },
    {
      title: 'Process Modules',
      icon: <BookOpen className="w-5 h-5" />,
      pages: [
        { title: 'Pre-Filing Preparation', href: '/modules/pre-filing', description: 'Before you file' },
        { title: 'Starting Your Case', href: '/modules/starting-case', description: 'Filing procedures' },
        { title: 'Responding to Divorce', href: '/modules/responding', description: 'Response process' },
        { title: 'First Court Appearance', href: '/modules/first-appearance', description: 'What to expect' },
        { title: 'Financial Disclosures', href: '/modules/disclosures', description: 'Required documents' },
        { title: 'Temporary Orders', href: '/modules/temporary-orders', description: 'Interim relief' },
        { title: 'Mediation Process', href: '/modules/mediation', description: 'Alternative resolution' },
        { title: 'Trial Preparation', href: '/modules/trial-prep', description: 'Getting ready for court' },
        { title: 'Post-Decree Modifications', href: '/modules/modifications', description: 'Changing orders' },
        { title: 'Enforcement & Appeals', href: '/modules/enforcement-appeals', description: 'Enforcing orders' },
      ]
    },
    {
      title: 'Child Custody',
      icon: <Baby className="w-5 h-5" />,
      pages: [
        { title: 'Establish Custody Order', href: '/custody/establish-order', description: 'Initial custody orders' },
        { title: 'Emergency Custody', href: '/custody-special-cases/emergency', description: 'Urgent situations' },
        { title: 'Paternity Cases', href: '/custody-special-cases/paternity', description: 'Establishing paternity' },
        { title: 'Relocation with Children', href: '/custody-special-cases/relocation', description: 'Moving out of state' },
      ]
    },
    {
      title: 'Financial Support',
      icon: <DollarSign className="w-5 h-5" />,
      pages: [
        { title: 'Child Support Overview', href: '/topics/child-support', description: 'Support guidelines' },
        { title: 'Child Support Calculator', href: '/support/calculator', description: 'Calculate support' },
        { title: 'Spousal Maintenance', href: '/topics/spousal-maintenance', description: 'Alimony information' },
        { title: 'Property Division', href: '/topics/property-division', description: 'Asset division' },
        { title: 'Modify Child Support', href: '/support-modification/child-support', description: 'Change support orders' },
        { title: 'Modify Spousal Support', href: '/support-modification/spousal-support', description: 'Change maintenance' },
      ]
    },
    {
      title: 'Protection Orders',
      icon: <Shield className="w-5 h-5" />,
      pages: [
        { title: 'Emergency Protection', href: '/protection/emergency', description: 'Immediate safety' },
        { title: 'How to File', href: '/protection/how-to-file', description: 'Filing process' },
        { title: 'Safety Planning', href: '/protection/safety-plan', description: 'Safety strategies' },
        { title: 'Types of Orders', href: '/protection/types', description: 'Order types' },
        { title: 'Responding to Orders', href: '/protection/responding-emergency', description: 'If served' },
      ]
    },
    {
      title: 'Forms & Documents',
      icon: <FileText className="w-5 h-5" />,
      pages: [
        { title: 'Court Forms Hub', href: '/forms', description: 'All court forms' },
        { title: 'Smart Form Wizard', href: '/forms/wizard', description: 'Guided completion' },
        { title: 'Form Packet Builder', href: '/forms/packet-builder', description: 'Build packets' },
        { title: 'Divorce Petition (Children)', href: '/forms/divorce-petition-children', description: 'Petition help' },
        { title: 'Response to Petition', href: '/forms/response-petition', description: 'Response help' },
        { title: 'Smart Divorce Petition', href: '/forms/smart/divorce-petition', description: 'AI-assisted forms' },
      ]
    },
    {
      title: 'Interactive Tools',
      icon: <Zap className="w-5 h-5" />,
      pages: [
        { title: 'All Tools', href: '/tools', description: 'Tool directory' },
        { title: 'Financial Calculators', href: '/calculators', description: 'All calculators' },
        { title: 'Case Management', href: '/case-management', description: 'Track your case' },
        { title: 'Communication Hub', href: '/communication', description: 'Messaging center' },
        { title: 'Learning Resources', href: '/learning', description: 'Video tutorials' },
        { title: 'Search', href: '/search', description: 'Find information' },
      ]
    },
    {
      title: 'Legal Procedures',
      icon: <Gavel className="w-5 h-5" />,
      pages: [
        { title: 'Court Procedures', href: '/procedures/court-procedures', description: 'Court process' },
        { title: 'Emergency Orders', href: '/procedures/emergency-orders', description: 'Urgent relief' },
      ]
    },
    {
      title: 'Resources & Help',
      icon: <HelpCircle className="w-5 h-5" />,
      pages: [
        { title: 'Resource Center', href: '/resources', description: 'All resources' },
        { title: 'Self-Representation Guide', href: '/resources/self-representation-guide', description: 'Pro se help' },
        { title: 'Legal Representation', href: '/resources/legal-representation', description: 'Finding attorneys' },
        { title: 'Frequently Asked Questions', href: '/reference/faq', description: 'Common questions' },
        { title: 'Legal Glossary', href: '/glossary', description: 'Legal terms' },
        { title: 'Legal Disclaimer', href: '/legal-disclaimer', description: 'Important notices' },
      ]
    },
    {
      title: 'System Pages',
      icon: <Globe className="w-5 h-5" />,
      pages: [
        { title: 'Integration Hub', href: '/integration', description: 'External services' },
        { title: 'Launch Dashboard', href: '/launch', description: 'Launch readiness' },
        { title: 'Content Audit', href: '/content-audit', description: 'Quality monitoring' },
        { title: 'Developer Sitemap', href: '/sitemap-dev', description: 'Dev progress' },
        { title: 'Offline Mode', href: '/offline', description: 'Offline access' },
      ]
    }
  ];

  const totalPages = categories.reduce((sum, cat) => sum + cat.pages.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Site Map</h1>
            <p className="text-blue-100 text-lg">
              Complete directory of all {totalPages} pages and resources
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{totalPages}</div>
              <div className="text-sm text-gray-600">Total Pages</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-sm text-gray-600">Interactive Tools</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">10</div>
              <div className="text-sm text-gray-600">Process Modules</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">100+</div>
              <div className="text-sm text-gray-600">Court Forms</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                  <span className="text-sm text-gray-500 ml-auto">
                    {category.pages.length} pages
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 group-hover:text-blue-600 transition-colors" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {page.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.description}
                        </div>
                        <div className="text-xs text-gray-400 font-mono mt-1">
                          {page.href}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Most Popular Pages
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/assessment" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <HelpCircle className="w-4 h-4" />
                Legal Assessment Tool
              </Link>
              <Link href="/getting-divorced" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Scale className="w-4 h-4" />
                Getting Divorced
              </Link>
              <Link href="/support/calculator" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Calculator className="w-4 h-4" />
                Child Support Calculator
              </Link>
              <Link href="/forms" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <FileText className="w-4 h-4" />
                Court Forms
              </Link>
              <Link href="/emergency-help" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Phone className="w-4 h-4" />
                Emergency Help
              </Link>
              <Link href="/reference/faq" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="mb-2">
            This sitemap includes all {totalPages} pages currently available on our site.
          </p>
          <p>
            For development progress and technical details, see the{' '}
            <Link href="/sitemap-dev" className="text-blue-600 hover:text-blue-800">
              Developer Sitemap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}