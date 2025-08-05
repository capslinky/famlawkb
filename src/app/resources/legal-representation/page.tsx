import Link from 'next/link';
import { ArrowLeft, Users, Phone, DollarSign, Scale, MapPin, Clock, Heart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Find Legal Representation - Arizona Family Law',
  description: 'Find attorneys, legal aid, and low-cost legal help for Arizona family law cases. Resources for all income levels.',
};

export default function LegalRepresentationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Find Legal Representation</h1>
              <p className="text-blue-100">Attorneys, legal aid, and affordable options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Scale className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Legal Help for Every Situation
                </h2>
                <p className="text-blue-800 mb-3">
                  Whether you need full representation, limited help, or just advice, there are 
                  options available regardless of your financial situation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="tel:602-257-4434" className="block">
                  <Button className="bg-blue-600 hover:bg-blue-700"
                    
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    State Bar Referral: 602-257-4434
                  </Button>
                </Link>
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Legal Aid: 866-637-5341
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Types of Legal Help</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Full Representation</h3>
                  <p className="text-gray-700 mb-3">
                    Attorney handles your entire case:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Files all documents</li>
                    <li>• Appears in court for you</li>
                    <li>• Negotiates on your behalf</li>
                    <li>• Provides complete legal strategy</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-sm"><strong>Best for:</strong> Complex cases, high conflict, significant assets</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Limited Scope (Unbundled)</h3>
                  <p className="text-gray-700 mb-3">
                    Attorney helps with specific tasks:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Document review/preparation</li>
                    <li>• Court coaching</li>
                    <li>• Legal advice sessions</li>
                    <li>• Appear for one hearing</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-sm"><strong>Best for:</strong> Self-represented parties needing specific help</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Consultation Only</h3>
                  <p className="text-gray-700 mb-3">
                    One-time or periodic advice:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Case strategy discussion</li>
                    <li>• Rights and options review</li>
                    <li>• Document explanation</li>
                    <li>• Settlement guidance</li>
                  </ul>
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="text-sm"><strong>Best for:</strong> Understanding your situation and options</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Mediation Services</h3>
                  <p className="text-gray-700 mb-3">
                    Neutral third party helps negotiate:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Facilitates agreements</li>
                    <li>• Reduces conflict</li>
                    <li>• Often required by court</li>
                    <li>• Can save time and money</li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-50 rounded">
                    <p className="text-sm"><strong>Best for:</strong> Parties willing to negotiate</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Free and Low-Cost Options</h2>
            
            <div className="space-y-4">
              <Card className="border-2 border-green-400 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Legal Aid Organizations</h3>
                      <p className="text-gray-700 mb-3">
                        Free legal services for qualifying low-income individuals:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Community Legal Services</h4>
                          <p className="text-sm text-gray-600 mb-2">Phoenix area</p>
                          <Link href="tel:602-258-3434" className="block">
                  <Button variant="outline" 
                            size="sm" 
                            className="w-full"
                            
                          >
                            602-258-3434
                          </Button>
                </Link>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Southern AZ Legal Aid</h4>
                          <p className="text-sm text-gray-600 mb-2">Tucson area</p>
                          <Link href="tel:520-623-9465" className="block">
                  <Button variant="outline" 
                            size="sm" 
                            className="w-full"
                            
                          >
                            520-623-9465
                          </Button>
                </Link>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded border border-green-300">
                        <p className="text-sm font-semibold">Income limits apply - typically 125% of federal poverty level</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Modest Means Program</h3>
                  <p className="text-gray-700 mb-3">
                    Reduced-fee attorneys for moderate income:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• $75/hour attorney fees (vs. $300+ normal)</li>
                    <li>• Income between 125-200% poverty level</li>
                    <li>• Must qualify financially</li>
                    <li>• Call State Bar for referral</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Law School Clinics</h3>
                  <p className="text-gray-700 mb-3">
                    Supervised law students provide free help:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ASU Family Law Clinic</li>
                    <li>• U of A Family Law Clinic</li>
                    <li>• Limited case types</li>
                    <li>• Income requirements vary</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Finding the Right Attorney</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Where to Search</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• State Bar Lawyer Referral Service</li>
                    <li>• County bar associations</li>
                    <li>• Avvo.com lawyer directory</li>
                    <li>• Personal recommendations</li>
                    <li>• Court observation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-3">Questions to Ask</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Years practicing family law?</li>
                    <li>• Cases like mine handled?</li>
                    <li>• Fee structure and costs?</li>
                    <li>• Communication expectations?</li>
                    <li>• Case strategy thoughts?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <DollarSign className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Understanding Attorney Fees</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Typical Hourly Rates:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• New attorneys: $200-250/hour</li>
                      <li>• Experienced: $300-400/hour</li>
                      <li>• Specialists: $400-500+/hour</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Other Costs:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Retainer: $2,500-10,000+</li>
                      <li>• Court filing fees</li>
                      <li>• Expert witnesses</li>
                      <li>• Document preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Legal Help</h2>
            <Card className="border-2 border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg mb-3">Need Help Today?</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-1">Protection Order Assistance:</p>
                        <p className="text-sm text-gray-700">Available 24/7 at any police station</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Emergency Hearings:</p>
                        <p className="text-sm text-gray-700">Many attorneys offer same-day consultations</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Domestic Violence Legal Help:</p>
                        <Link href="tel:1-800-799-7233" className="block">
                  <Button size="sm"
                          className="bg-red-600 hover:bg-red-700"
                          
                        >
                          National Hotline: 1-800-799-7233
                        </Button>
                </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Take Action Today</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">For Income-Qualified:</h4>
                <Link href="tel:866-637-5341" className="block">
                  <Button className="w-full mb-2"
                  
                >
                  Call Legal Aid: 866-637-5341
                </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="w-full">
                    Financial Help Resources
                  </Button>
                </Link>
              </div>
              <div>
                <h4 className="font-semibold mb-3">For Paid Services:</h4>
                <Link href="tel:602-257-4434" className="block">
                  <Button className="w-full mb-2"
                  
                >
                  Lawyer Referral: 602-257-4434
                </Button>
                </Link>
                <Link href="/resources/legal-representation">
                  <Button variant="outline" className="w-full">
                    How to Choose Attorney
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-blue-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Don&apos;t let cost prevent you from getting help. There are options for every 
              budget, including free services for those who qualify.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}