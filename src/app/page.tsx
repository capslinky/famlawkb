import Link from 'next/link';
import { 
  ArrowRight, Shield, FileText, Users, 
  HelpCircle, BookOpen, Gavel, Search, 
  MessageSquare, GraduationCap,
  AlertTriangle, ChevronRight, Star,
  Phone, Scale, Home, DollarSign, Baby
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const featuredTools = [
    {
      title: 'Emergency Help',
      description: 'Find safety resources and immediate assistance',
      icon: <Phone className="w-8 h-8" />,
      href: '/emergency-help',
      color: 'bg-red-600',
      popular: true
    },
    {
      title: 'Start a Case',
      description: 'Pre‑filing overview and step‑by‑step guidance',
      icon: <FileText className="w-8 h-8" />,
      href: '/start',
      color: 'bg-blue-600'
    },
    {
      title: 'I Was Served',
      description: 'See deadlines and file your response',
      icon: <Gavel className="w-8 h-8" />,
      href: '/responding',
      color: 'bg-indigo-600'
    },
    {
      title: 'Support & Custody',
      description: 'Calculate support and build a parenting plan',
      icon: <Users className="w-8 h-8" />,
      href: '/support-custody',
      color: 'bg-emerald-600'
    }
  ];

  const legalProcesses = [
    {
      title: 'Getting Divorced',
      description: 'Complete guide to Arizona divorce process',
      icon: <Scale className="w-6 h-6" />,
      href: '/getting-divorced',
      topics: ['Filing', 'Requirements', 'Timeline', 'Costs']
    },
    {
      title: 'Child Custody',
      description: 'Understanding parenting time and legal decision-making',
      icon: <Baby className="w-6 h-6" />,
      href: '/child-custody',
      topics: ['Joint Custody', 'Parenting Plans', 'Best Interests', 'Modifications']
    },
    {
      title: 'Financial Support',
      description: 'Child support and spousal maintenance explained',
      icon: <DollarSign className="w-6 h-6" />,
      href: '/topics/child-support',
      topics: ['Calculations', 'Guidelines', 'Enforcement', 'Modifications']
    },
    {
      title: 'Protection Orders',
      description: 'Get help with domestic violence and safety planning',
      icon: <Shield className="w-6 h-6" />,
      href: '/get-protection',
      topics: ['Emergency Orders', 'Filing Process', 'Safety Plans', 'Resources']
    },
    {
      title: 'Property Division',
      description: 'How Arizona divides assets and debts',
      icon: <Home className="w-6 h-6" />,
      href: '/topics/property-division',
      topics: ['Community Property', 'Separate Property', 'Valuation', 'Division']
    },
    {
      title: 'Court Procedures',
      description: 'Navigate the court system with confidence',
      icon: <Gavel className="w-6 h-6" />,
      href: '/procedures/court-procedures',
      topics: ['Filing', 'Hearings', 'Evidence', 'Etiquette']
    }
  ];

  const processModules = [
    { label: 'Responding to Divorce', href: '/modules/responding' },
    { label: 'First Court Appearance', href: '/modules/first-appearance' },
    { label: 'Financial Disclosures', href: '/modules/disclosures' },
    { label: 'Temporary Orders', href: '/modules/temporary-orders' },
    { label: 'Mediation Process', href: '/modules/mediation' },
    { label: 'Trial Preparation', href: '/modules/trial-prep' },
    { label: 'Post-Decree Modifications', href: '/modules/modifications' },
    { label: 'Enforcement & Appeals', href: '/modules/enforcement-appeals' }
  ];

  const quickLinks = [
    { label: 'Uncontested Divorce (Simple)', href: '/divorce/uncontested-simple', icon: <FileText className="w-4 h-4" /> },
    { label: 'Uncontested with Children', href: '/divorce/uncontested-with-children', icon: <Users className="w-4 h-4" /> },
    { label: 'Contested Divorce', href: '/divorce/contested-full', icon: <Gavel className="w-4 h-4" /> },
    { label: 'Emergency Orders', href: '/procedures/emergency-orders', icon: <AlertTriangle className="w-4 h-4" /> },
    { label: 'Self-Representation Guide', href: '/resources/self-representation-guide', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'FAQ', href: '/reference/faq', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Arizona Family Law Knowledge Base
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Navigate your family law matter with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg" variant="solidWhite">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Start Legal Assessment
                </Button>
              </Link>
              <Link href="/emergency-help">
                <Button size="lg" variant="outlineOnDark">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Help
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-100">Legal Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100">Smart Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-blue-100">Court Forms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-100">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What do you need today?</h2>
            <p className="text-gray-600 mt-2">Choose a path to get clear, next‑step guidance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer relative">
                  {tool.popular && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className={`${tool.color} text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{tool.title}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                    <div className="mt-4 text-blue-600 flex items-center gap-1 text-sm font-medium">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/tools">
              <Button variant="outline">
                View All Tools <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Topics Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Legal Topics & Guides</h2>
            <p className="text-gray-600 mt-2">Comprehensive information on Arizona family law</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalProcesses.map((process) => (
              <Card key={process.href} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      {process.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{process.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{process.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {process.topics.map((topic) => (
                          <span key={topic} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <Link href={process.href} className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-800">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Modules */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Step-by-Step Process Guides</h2>
            <p className="text-gray-600 mt-2">Navigate each stage of your legal journey</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processModules.map((module, index) => (
                <Link key={module.href} href={module.href}>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{module.label}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Quick Access</h2>
            <p className="text-gray-600 mt-2">Popular pages and resources</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
                  <div className="text-gray-400">{link.icon}</div>
                  <span className="font-medium text-gray-700">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Smart Search</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Find exactly what you need with our intelligent search system
                </p>
                <Link href="/search">
                  <Button variant="outline" size="sm">
                    Search Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Learning Center</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Video tutorials and interactive guides for complex topics
                </p>
                <Link href="/learning">
                  <Button variant="outline" size="sm">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Communication Hub</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Secure messaging and document sharing for your case
                </p>
                <Link href="/communication">
                  <Button variant="outline" size="sm">
                    Access Hub
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take our assessment to get personalized guidance for your situation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="solidWhite">
                Start Free Assessment
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outlineOnDark">
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
