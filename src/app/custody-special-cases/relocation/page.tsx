import Link from 'next/link';
import { ArrowLeft, MapPin, Scale, Clock, FileText, AlertTriangle, Car, Plane, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GlossaryContent from '@/components/GlossaryContent';

export const metadata = {
  title: 'Child Relocation Cases - Arizona',
  description: 'Legal requirements for relocating with children after divorce or custody orders in Arizona. Notice requirements and modification process.',
};

export default function RelocationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Child Relocation Laws</h1>
              <p className="text-orange-100">Moving with children when you have custody orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/child-custody" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Child Custody
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">
                  Arizona Relocation Law Requirements
                </h2>
                <p className="text-orange-800 mb-3">
                  Moving 100+ miles or out of state with children requires following specific 
                  legal procedures when custody orders exist.
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h3 className="font-semibold mb-2">Key Points:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 45-day advance written notice required</li>
                    <li>• Other parent can object within 30 days</li>
                    <li>• Court hearing if objection filed</li>
                    <li>• Penalties for relocating without proper notice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">When Relocation Rules Apply</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <Plane className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Notice Required</h3>
                  <p className="text-gray-700 mb-3">
                    You must give notice if:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Moving 100+ miles within Arizona</li>
                    <li>• Moving out of state (any distance)</li>
                    <li>• Child will be gone 45+ days</li>
                    <li>• Custody/parenting orders exist</li>
                    <li>• Both parents have rights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <Car className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">No Notice Needed</h3>
                  <p className="text-gray-700 mb-3">
                    You can move freely if:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Moving less than 100 miles</li>
                    <li>• Staying within Arizona</li>
                    <li>• Temporary trips under 45 days</li>
                    <li>• Other parent has no rights</li>
                    <li>• Written agreement exists</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">The Relocation Process</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Provide Written Notice</h3>
                      <p className="text-gray-700 mb-3">
                        At least 45 days before moving:
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Notice Must Include:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Statement of intent to relocate</li>
                          <li>• New address and phone</li>
                          <li>• Date of intended move</li>
                          <li>• Reasons for relocation</li>
                          <li>• Proposed revised parenting schedule</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Other Parent's Response</h3>
                      <p className="text-gray-700 mb-3">
                        Within 30 days, other parent can:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-green-600">✓</span>
                          <div>
                            <span className="font-semibold">Agree:</span> Sign agreement, 
                            modify parenting plan
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">✗</span>
                          <div>
                            <span className="font-semibold">Object:</span> File petition to 
                            prevent relocation
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-gray-600">−</span>
                          <div>
                            <span className="font-semibold">No Response:</span> May proceed 
                            with relocation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Court Hearing (If Contested)</h3>
                      <p className="text-gray-700 mb-3">
                        Judge considers best interests factors:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Reasons for and against relocation</li>
                        <li>• Child's relationship with both parents</li>
                        <li>• Impact on child's stability</li>
                        <li>• Educational opportunities</li>
                        <li>• Whether move is in good faith</li>
                        <li>• Feasibility of preserving relationship</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Court Considerations</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-900 mb-3">Factors Supporting Relocation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Better job opportunity</li>
                    <li>✓ Family support system</li>
                    <li>✓ Educational advantages</li>
                    <li>✓ Lower cost of living</li>
                    <li>✓ Remarriage/new family</li>
                    <li>✓ Health/safety reasons</li>
                    <li>✓ Military orders</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-3">Factors Against Relocation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ Disrupts child's stability</li>
                    <li>✗ Harms other parent's relationship</li>
                    <li>✗ Motivated by spite</li>
                    <li>✗ No significant benefit</li>
                    <li>✗ Child's preference (if older)</li>
                    <li>✗ Special needs considerations</li>
                    <li>✗ Extended family ties</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Consequences of Improper Relocation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Court can order child's immediate return</li>
                  <li>• May lose primary custody</li>
                  <li>• Contempt of court charges</li>
                  <li>• Required to pay other parent's legal fees</li>
                  <li>• Criminal parental kidnapping charges possible</li>
                  <li>• Damage to credibility in future proceedings</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Special Situations</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <Scale className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Equal Parenting Time</h3>
                  <p className="text-gray-700 mb-3">
                    When parents share equal time:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Relocating parent has burden of proof</li>
                    <li>• Must show move is in child's best interest</li>
                    <li>• Court less likely to approve</li>
                    <li>• May need compelling reasons</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Emergency Relocation</h3>
                  <p className="text-gray-700 mb-3">
                    In true emergencies:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Domestic violence situations</li>
                    <li>• Can seek emergency orders</li>
                    <li>• Must file petition immediately</li>
                    <li>• Temporary relocation allowed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Home className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-3">Military Families</h3>
                  <p className="text-gray-700 mb-3">
                    Special considerations:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• PCS orders may expedite process</li>
                    <li>• Court considers military necessity</li>
                    <li>• Virtual visitation often ordered</li>
                    <li>• Return provisions included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Relocation Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto">
                    45
                  </div>
                  <p className="text-xs mt-1">days</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Give Notice</h4>
                  <p className="text-sm text-gray-600">Written notice to other parent before move</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-20 text-center">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mx-auto">
                    30
                  </div>
                  <p className="text-xs mt-1">days</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Response Period</h4>
                  <p className="text-sm text-gray-600">Other parent has time to object</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-20 text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto">
                    60+
                  </div>
                  <p className="text-xs mt-1">days</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Court Process</h4>
                  <p className="text-sm text-gray-600">If contested, hearing and decision</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-bold text-lg mb-4">Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms/relocation-notice">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Relocation Notice Form
                </Button>
              </Link>
              <Link href="/forms/petition-relocate">
                <Button variant="outline" className="w-full">
                  Petition to Relocate
                </Button>
              </Link>
              <Link href="/resources/parenting-plan-long-distance">
                <Button variant="outline" className="w-full">
                  Long-Distance Parenting
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline" className="w-full">
                  Find Legal Help
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-8 p-4 bg-orange-800 text-white rounded-lg text-center">
            <p className="font-bold">
              Always follow proper relocation procedures. Moving without notice can result 
              in serious legal consequences and harm your custody case.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}