import Link from 'next/link';
import { BookOpen, FileText, Users, Calculator, Map, Phone, Video, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Resources - Arizona Family Law Help',
  description: 'Helpful resources for Arizona family law cases including guides, calculators, flowcharts, and legal assistance.',
};

interface ResourceCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  resources: {
    name: string;
    description: string;
    slug: string;
  }[];
}

const resourceCategories: ResourceCategory[] = [
  {
    title: 'Self-Help Guides',
    description: 'Step-by-step guides for representing yourself',
    icon: BookOpen,
    resources: [
      {
        name: 'Self-Representation Guide',
        description: 'Complete guide to representing yourself in family court',
        slug: 'self-representation-guide',
      },
      {
        name: 'Divorce Checklist',
        description: 'Comprehensive checklist for divorce proceedings',
        slug: 'divorce-checklist',
      },
      {
        name: 'Court Preparation Guide',
        description: 'How to prepare for your court appearance',
        slug: 'court-preparation',
      },
    ],
  },
  {
    title: 'Calculators & Tools',
    description: 'Online tools to help with calculations',
    icon: Calculator,
    resources: [
      {
        name: 'Child Support Calculator',
        description: 'Calculate guideline child support amounts',
        slug: 'child-support-calculator',
      },
      {
        name: 'Parenting Time Calculator',
        description: 'Track overnights and parenting time percentages',
        slug: 'parenting-time-calculator',
      },
      {
        name: 'Financial Affidavit Helper',
        description: 'Guide for completing financial disclosure',
        slug: 'financial-affidavit-guide',
      },
    ],
  },
  {
    title: 'Process Flowcharts',
    description: 'Visual guides showing case processes',
    icon: Map,
    resources: [
      {
        name: 'Divorce Process Flowchart',
        description: 'Step-by-step divorce process visualization',
        slug: 'divorce-flowchart',
      },
      {
        name: 'Custody Case Timeline',
        description: 'Typical timeline for custody cases',
        slug: 'custody-timeline',
      },
      {
        name: 'Emergency Orders Process',
        description: 'How emergency orders work',
        slug: 'emergency-orders-process',
      },
    ],
  },
  {
    title: 'Legal Assistance',
    description: 'Find help with your case',
    icon: Users,
    resources: [
      {
        name: 'Find Legal Representation',
        description: 'Attorneys, legal aid, and low-cost options',
        slug: 'legal-representation',
      },
      {
        name: 'Court Self-Help Centers',
        description: 'Free assistance at courthouse locations',
        slug: 'self-help-centers',
      },
      {
        name: 'Emergency Legal Help',
        description: 'Urgent legal assistance resources',
        slug: 'emergency-legal-help',
      },
    ],
  },
  {
    title: 'Educational Resources',
    description: 'Classes and educational materials',
    icon: Video,
    resources: [
      {
        name: 'Parent Information Program',
        description: 'Required class for parents in divorce/custody cases',
        slug: 'parent-information-program',
      },
      {
        name: 'Understanding Legal Terms',
        description: 'Glossary and explanations of legal terminology',
        slug: 'legal-glossary',
      },
      {
        name: 'Court Etiquette Guide',
        description: 'How to behave and dress for court',
        slug: 'court-etiquette',
      },
    ],
  },
  {
    title: 'Crisis Resources',
    description: 'Help for urgent situations',
    icon: Phone,
    resources: [
      {
        name: 'Domestic Violence Resources',
        description: 'Shelters, hotlines, and safety planning',
        slug: 'domestic-violence-help',
      },
      {
        name: 'Mental Health Support',
        description: 'Counseling and crisis intervention',
        slug: 'mental-health-resources',
      },
      {
        name: 'Financial Assistance',
        description: 'Help with court fees and emergency needs',
        slug: 'financial-assistance',
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Resources & Tools</h1>
              <p className="text-purple-100 text-lg">Guides, calculators, and help for your case</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/forms" className="text-blue-600 hover:text-blue-800 text-sm block">
                    → Court Forms Library
                  </Link>
                  <Link href="/support/calculator" className="text-blue-600 hover:text-blue-800 text-sm block">
                    → Child Support Calculator
                  </Link>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 text-sm block">
                    → Find Help Near You
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Download className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Popular Downloads</h3>
                <div className="space-y-2">
                  <Link href="/resources" className="text-green-600 hover:text-green-800 text-sm block">
                    → Divorce Checklist PDF
                  </Link>
                  <Link href="/resources" className="text-green-600 hover:text-green-800 text-sm block">
                    → Parenting Plan Template
                  </Link>
                  <Link href="/resources" className="text-green-600 hover:text-green-800 text-sm block">
                    → Financial Worksheet
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-300 bg-red-50">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold mb-2">Emergency Help</h3>
                <div className="space-y-2">
                  <a href="tel:911" className="text-red-600 hover:text-red-800 text-sm block font-semibold">
                    → 911 - Immediate Danger
                  </a>
                  <a href="tel:1-800-799-7233" className="text-red-600 hover:text-red-800 text-sm block">
                    → Domestic Violence Hotline
                  </a>
                  <Link href="/protection/emergency" className="text-red-600 hover:text-red-800 text-sm block">
                    → Crisis Resources
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <section key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-2">{resource.name}</h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {resource.description}
                          </p>
                          <Link href={`/resources/${resource.slug}`}>
                            <Button size="sm" className="w-full">
                              View Resource
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Additional Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Community Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local family law clinics</li>
                  <li>• Support groups for divorcing parents</li>
                  <li>• Financial planning workshops</li>
                  <li>• Co-parenting classes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Online Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Arizona Judicial Branch website</li>
                  <li>• State Bar of Arizona resources</li>
                  <li>• Legal aid organizations</li>
                  <li>• Family law forums and communities</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Can&apos;t find what you&apos;re looking for? Contact the court self-help center 
              or consult with a family law attorney.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/resources">
                <Button>
                  Find Self-Help Center
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline">
                  Find an Attorney
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}