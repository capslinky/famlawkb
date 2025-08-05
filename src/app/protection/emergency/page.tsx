import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Phone, Shield, MapPin, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Emergency Protection and Safety - Arizona',
  description: 'Immediate safety resources, emergency shelters, and crisis assistance for domestic violence victims in Arizona.',
};

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Emergency Protection & Safety</h1>
              <p className="text-red-100">Immediate help available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/get-protection" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Protection Orders
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Phone className="w-8 h-8 text-red-600" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-red-900 mb-3">
                  If You Are in Immediate Danger
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="tel:911" className="block">
                  <Button className="bg-red-600 hover:bg-red-700 text-white" 
                    size="lg"
                    
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 911
                  </Button>
                </Link>
                  <Link href="tel:1-800-799-7233" className="block">
                  <Button variant="outline" 
                    size="lg"
                    className="border-red-600 text-red-600 hover:bg-red-50"
                    
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    National DV Hotline
                  </Button>
                </Link>
                </div>
                <p className="text-sm text-gray-700 mt-3">
                  National Domestic Violence Hotline: 1-800-799-SAFE (7233) • Text &quot;START&quot; to 88788
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Arizona Local Crisis Hotlines</h2>
            <p className="text-gray-600 mb-6">
              Local organizations provide specialized support, emergency shelter, legal advocacy, and know your community resources.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-lg">Phoenix Metro Area</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Sojourner Center</p>
                      <p className="text-sm text-gray-600 mb-2">24/7 crisis line, emergency shelter, legal advocacy</p>
                      <Link href="tel:602-276-3599" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          602-276-3599
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Chrysalis Shelter</p>
                      <p className="text-sm text-gray-600 mb-2">Emergency shelter, transitional housing, children's programs</p>
                      <Link href="tel:602-955-9059" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          602-955-9059
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">New Life Center</p>
                      <p className="text-sm text-gray-600 mb-2">Bilingual services, emergency shelter</p>
                      <Link href="tel:480-835-5555" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          480-835-5555
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-lg">Tucson Area</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Emerge! Center Against Domestic Abuse</p>
                      <p className="text-sm text-gray-600 mb-2">24/7 crisis line, emergency shelter, legal services</p>
                      <Link href="tel:520-795-4266" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          520-795-4266
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">TMM Family Services</p>
                      <p className="text-sm text-gray-600 mb-2">Crisis intervention, counseling, safe housing</p>
                      <Link href="tel:520-322-9155" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          520-322-9155
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Domestic Violence Legal Clinic</p>
                      <p className="text-sm text-gray-600 mb-2">Free legal help with protection orders</p>
                      <Link href="tel:520-623-9461" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          520-623-9461
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-orange-600" />
                    <h3 className="font-bold text-lg">Northern Arizona</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Northland Family Help Center</p>
                      <p className="text-sm text-gray-600 mb-2">Crisis support, emergency shelter (Flagstaff area)</p>
                      <Link href="tel:928-527-1900" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          928-527-1900
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Women's Transitional Living Services</p>
                      <p className="text-sm text-gray-600 mb-2">24/7 crisis line, shelter services (Prescott)</p>
                      <Link href="tel:928-772-4673" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          928-772-4673
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <h3 className="font-bold text-lg">Statewide Resources</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Arizona Coalition to End Sexual & Domestic Violence</p>
                      <p className="text-sm text-gray-600 mb-2">Statewide advocacy, training, policy work</p>
                      <Link href="tel:602-279-2900" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          602-279-2900
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Military Family Crisis Line</p>
                      <p className="text-sm text-gray-600 mb-2">Support for military families statewide</p>
                      <Link href="tel:800-336-4592" className="block">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          800-336-4592
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Shelter Services</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-900 font-semibold">
                All shelters provide FREE, confidential locations. Call for screening and availability.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">What Shelters Provide</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-gray-700">
                          <li>• Safe, confidential housing</li>
                          <li>• Food and clothing</li>
                          <li>• Children&apos;s programs</li>
                          <li>• Case management</li>
                        </ul>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Legal advocacy</li>
                          <li>• Counseling services</li>
                          <li>• Help finding permanent housing</li>
                          <li>• Transportation assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Package className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">What to Bring (If Safe)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-sm mb-2">Essential Documents:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• ID/driver&apos;s license</li>
                            <li>• Birth certificates</li>
                            <li>• Social Security cards</li>
                            <li>• Insurance cards</li>
                            <li>• Court orders</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-2">Practical Items:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Medications</li>
                            <li>• Cash/cards</li>
                            <li>• Phone/charger</li>
                            <li>• Children&apos;s items</li>
                            <li>• Change of clothes</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-amber-700 mt-3 font-semibold">
                        Don&apos;t delay leaving if gathering items puts you at risk!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Protection Orders</h2>
            <Card className="border-2 border-red-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">After-Hours Protection Orders</h3>
                    <p className="text-gray-700 mb-3">
                      Protection orders can be obtained 24/7, even when courts are closed:
                    </p>
                    <ol className="space-y-2 text-gray-700">
                      <li>
                        <span className="font-semibold">1. Call 911 or go to any police station</span>
                        <p className="text-sm text-gray-600 ml-4">
                          Tell them you need an emergency order of protection
                        </p>
                      </li>
                      <li>
                        <span className="font-semibold">2. Officer helps complete petition</span>
                        <p className="text-sm text-gray-600 ml-4">
                          Provide details about violence/threats
                        </p>
                      </li>
                      <li>
                        <span className="font-semibold">3. Judge reviews by phone</span>
                        <p className="text-sm text-gray-600 ml-4">
                          Order can be granted immediately
                        </p>
                      </li>
                      <li>
                        <span className="font-semibold">4. Follow up next court day</span>
                        <p className="text-sm text-gray-600 ml-4">
                          File for regular order to continue protection
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Additional Emergency Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Legal Help</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Legal Aid: 866-637-5341</li>
                    <li>• Volunteer Lawyers Program</li>
                    <li>• Court self-help centers</li>
                    <li>• Pro bono attorneys</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-3">Other Crisis Lines</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Crisis Text Line: Text HOME to 741741</li>
                    <li>• RAINN: 1-800-656-HOPE</li>
                    <li>• Suicide Prevention: 988</li>
                    <li>• Crime Victims: 1-855-484-2846</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Remember: You Are Not Alone</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Leaving an abusive situation is difficult and dangerous. There is help available, 
                and you deserve to be safe.
              </p>
              <p className="font-semibold">
                Safety tips:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Trust your instincts</li>
                <li>• Have a code word with friends/family</li>
                <li>• Clear browser history after seeking help online</li>
                <li>• Use a safe computer/phone when possible</li>
                <li>• Know that abuse is not your fault</li>
              </ul>
            </div>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="/protection/safety-plan">
              <Button className="w-full" size="lg">
                Create Safety Plan
              </Button>
            </Link>
            <Link href="/protection/how-to-file">
              <Button variant="outline" className="w-full" size="lg">
                File Protection Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}