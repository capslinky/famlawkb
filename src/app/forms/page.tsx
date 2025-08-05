import Link from 'next/link';
import { FileText, Download, Search, Filter, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Arizona Family Law Forms - Free Court Forms',
  description: 'Download free Arizona family law court forms. Divorce, custody, support, and protection order forms with instructions.',
};

interface FormCategory {
  title: string;
  description: string;
  forms: {
    name: string;
    description: string;
    formNumber?: string;
    slug: string;
  }[];
}

const formCategories: FormCategory[] = [
  {
    title: 'Divorce Forms',
    description: 'Forms for filing and responding to divorce petitions',
    forms: [
      {
        name: 'Dissolution of Marriage - With Children',
        description: 'Petition to start a divorce case when you have minor children',
        formNumber: 'Available through eFileAZ',
        slug: 'divorce-petition-children',
      },
      {
        name: 'Dissolution of Marriage - No Children',
        description: 'Petition to start a divorce case without minor children',
        formNumber: 'Available through eFileAZ',
        slug: 'divorce-petition-no-children',
      },
      {
        name: 'Response to Dissolution Petition',
        description: 'Respond when served with divorce papers',
        formNumber: 'DR22f',
        slug: 'response-divorce',
      },
    ],
  },
  {
    title: 'Financial Disclosure Forms',
    description: 'Required financial information for family court cases',
    forms: [
      {
        name: 'Disclosure Statement',
        description: 'Initial financial disclosure required in family cases',
        formNumber: 'DRDS10f',
        slug: 'disclosure-statement',
      },
      {
        name: 'Affidavit of Financial Information',
        description: 'Detailed income, expense, and asset information',
        formNumber: 'DROSC13f',
        slug: 'financial-affidavit',
      },
      {
        name: 'Resolution Statement',
        description: 'Case resolution information for divorce/legal separation',
        formNumber: 'DRMCR10f',
        slug: 'resolution-statement',
      },
    ],
  },
  {
    title: 'Child Support Forms',
    description: 'Forms for establishing and modifying support',
    forms: [
      {
        name: 'Child Support Worksheet',
        description: 'Calculate guideline support amount using official calculator',
        formNumber: 'Available through ezCourtForms',
        slug: 'child-support-worksheet',
      },
      {
        name: 'Current Employer Information',
        description: 'Employment details for child support cases',
        formNumber: 'DRS88f',
        slug: 'employer-information',
      },
      {
        name: 'Petition to Modify Child Support',
        description: 'Request changes to existing support orders',
        formNumber: 'Available through court clerk',
        slug: 'petition-modify-child-support',
      },
    ],
  },
  {
    title: 'Protection Order Forms',
    description: 'Forms for Orders of Protection and Injunctions',
    forms: [
      {
        name: 'Petition for Order of Protection',
        description: 'Request protection from domestic violence',
        formNumber: 'Available through AZPOINT',
        slug: 'order-protection-petition',
      },
      {
        name: 'Request for Protected Address',
        description: 'Keep your address confidential in family court',
        formNumber: 'DRRPA10f',
        slug: 'protected-address-request',
      },
    ],
  },
  {
    title: 'Case Management Forms',
    description: 'Forms for managing your court case',
    forms: [
      {
        name: 'Family Department Pleading/Motion and Order',
        description: 'General pleading form for family court matters',
        formNumber: 'DR10f',
        slug: 'family-pleading-motion',
      },
      {
        name: 'Good Faith Consultation Certificate',
        description: 'Certify attempt to resolve issues outside court',
        formNumber: 'DR72f',
        slug: 'good-faith-consultation',
      },
      {
        name: 'Motion to Set Trial Date',
        description: 'Request trial scheduling and certificate of readiness',
        formNumber: 'DRTP42f',
        slug: 'motion-set-trial-date',
      },
    ],
  },
  {
    title: 'Special Circumstances',
    description: 'Forms for specific situations',
    forms: [
      {
        name: 'Petition to Establish Paternity',
        description: 'Establish legal father-child relationship',
        formNumber: 'Available through court clerk',
        slug: 'petition-establish-paternity',
      },
      {
        name: 'Emergency Motion',
        description: 'Request urgent court action in family matters',
        formNumber: 'Available through court clerk',
        slug: 'emergency-motion',
      },
      {
        name: 'Acceptance of Service',
        description: 'Voluntarily accept service of court papers',
        formNumber: 'DR22f',
        slug: 'acceptance-of-service',
      },
    ],
  },
];

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Arizona Family Law Forms</h1>
              <p className="text-blue-100 text-lg">Free court forms with instructions</p>
            </div>
          </div>
          
          <div className="mt-6 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="search"
                placeholder="Search forms by name or number..."
                className="pl-10 pr-4 py-3 text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h2 className="font-semibold mb-2">Important Information About Court Forms</h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• These are official Arizona court forms - always verify you have the current version</li>
                  <li>• Forms must be typed or printed legibly in black ink</li>
                  <li>• File original with court and keep copies for yourself</li>
                  <li>• Court staff cannot give legal advice about which forms to use</li>
                  <li>• Consider consulting an attorney for complex cases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Filters</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Filter className="w-4 h-4 mr-2" />
                    All Forms
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Starting a Case
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Responding
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Modifications
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Emergency
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-3 space-y-8">
              {formCategories.map((category, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.forms.map((form, formIndex) => (
                      <Card key={formIndex} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div>
                                  <h3 className="font-semibold">
                                    {form.name}
                                    {form.formNumber && (
                                      <span className="ml-2 text-sm text-gray-500">
                                        ({form.formNumber})
                                      </span>
                                    )}
                                  </h3>
                                  <p className="text-gray-600 text-sm mt-1">
                                    {form.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Link href={`/forms/${form.slug}`}>
                              <Button size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                View Form
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <section className="mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Help with Forms?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Court Self-Help Centers</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Free assistance with forms and procedures at courthouse
                  </p>
                  <Link href="/resources">
                    <Button variant="outline" size="sm" className="w-full">
                      Find Locations
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Form Instructions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Step-by-step guides for completing each form correctly
                  </p>
                  <Link href="/resources">
                    <Button variant="outline" size="sm" className="w-full">
                      View Guides
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Legal Assistance</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Find low-cost or free legal help for your case
                  </p>
                  <Link href="/resources/legal-representation">
                    <Button variant="outline" size="sm" className="w-full">
                      Get Help
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}