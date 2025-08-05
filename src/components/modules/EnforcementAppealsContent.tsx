/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, Users, Calendar, Gavel, Target, ArrowRight, DollarSign, Scale, Building, Phone, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';

export default function EnforcementAppealsContent() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Enforcement & Appeals</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Learn how to ensure compliance with court orders and challenge unfavorable rulings through the Arizona family court system.
        </p>
      </div>

      {/* Quick Reference Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-gray-900">Enforcement Powers</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Courts have powerful tools to enforce orders including wage garnishment, asset seizure, and contempt of court.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Appeal Deadlines</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Most appeals must be filed within 30 days of the court's ruling. Missing this deadline can forfeit your right to appeal.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Legal Standards</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Appeals focus on legal errors, not re-examining facts. Enforcement requires proving willful violation of orders.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order Enforcement Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Enforcing Court Orders</h2>
        
        <div className="grid gap-6">
          {/* Child Support Enforcement */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Child Support Enforcement</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Automatic Enforcement Tools:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Wage garnishment:</strong> Direct deduction from payor's wages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Asset seizure:</strong> Bank accounts, property, investments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Tax intercept:</strong> State and federal tax refund interception</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Credit reporting:</strong> Delinquent support reported to credit bureaus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>License suspension:</strong> Driver's, professional, and recreational licenses</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">DCSS Services:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Free enforcement:</strong> Division of Child Support Services provides free collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Location services:</strong> Help find non-paying parents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Payment processing:</strong> Centralized payment collection and distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Interstate enforcement:</strong> Pursue support across state lines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custody Order Enforcement */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Custody & Parenting Time Enforcement</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Violations:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Denied visitation:</strong> Refusing to allow court-ordered parenting time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Failure to return child:</strong> Not returning child after visitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Relocation without permission:</strong> Moving with child without court approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Interference with communication:</strong> Blocking phone/video contact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Decision-making violations:</strong> Making major decisions without required consultation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Enforcement Remedies:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Make-up parenting time:</strong> Additional time to compensate for missed visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Contempt of court:</strong> Fines, jail time for willful violations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Supervised visitation:</strong> Court-ordered supervision for safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Custody modification:</strong> Change custody due to repeated violations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Attorney fees:</strong> Violating party may pay other party's legal costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contempt of Court */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Contempt of Court Proceedings</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Filing for Contempt:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Petition for contempt:</strong> File motion explaining specific violations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Detailed documentation:</strong> Dates, times, specific incidents of violation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Evidence gathering:</strong> Photos, communications, witness statements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Proof of service:</strong> Show violating party was properly served with original order</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Legal Standards:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Willful violation:</strong> Must prove intentional disobedience of court order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear and unambiguous order:</strong> Original order must be specific and clear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Ability to comply:</strong> Person must have been able to follow the order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Beyond reasonable doubt:</strong> Higher burden of proof for contempt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appeals Process */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Appeals Process</h2>
        
        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900">When You Can Appeal</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Appealable Orders:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Final judgments:</strong> Divorce decrees, custody orders, permanent orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Special proceedings:</strong> Contempt findings, attorney fee awards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Injunctive orders:</strong> Restraining orders, protection orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Orders affecting substantial rights:</strong> Orders with significant legal consequences</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Non-Appealable Orders:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Interlocutory orders:</strong> Temporary orders that aren't final</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Discovery rulings:</strong> Orders on evidence disclosure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Scheduling orders:</strong> Court calendar and deadline orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Discretionary decisions:</strong> Orders within judge's discretion without legal error</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Grounds for Appeal</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Legal Errors:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Incorrect law application:</strong> Judge applied wrong legal standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Procedural errors:</strong> Failure to follow required court procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Evidence rulings:</strong> Improper admission or exclusion of evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Constitutional violations:</strong> Due process, equal protection violations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Insufficient Evidence:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Lack of substantial evidence:</strong> Decision not supported by evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Against weight of evidence:</strong> Decision contrary to overwhelming evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Factual findings clearly erroneous:</strong> Court's fact-finding was wrong</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Abuse of discretion:</strong> Judge's decision was unreasonable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appeal Timeline and Process */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Appeal Timeline & Process</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-lg font-semibold text-gray-900">Notice of Appeal</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>30 days:</strong> From entry of final judgment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>File with trial court clerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Pay filing fee or request fee waiver</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-lg font-semibold text-gray-900">Designate Record</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>20 days:</strong> After notice of appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Specify documents for appellate record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pay transcript costs if needed</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-lg font-semibold text-gray-900">Opening Brief</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>30 days:</strong> After record is filed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Legal arguments and citations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Statement of facts and issues</span>
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <h3 className="text-lg font-semibold text-gray-900">Court Decision</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Oral argument (if requested)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gavel className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Court of Appeals decision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Possible Arizona Supreme Court review</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Documentation and Evidence */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation & Evidence</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Enforcement Documentation</h3>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Violation log:</strong> Detailed record of each violation with dates and circumstances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Communication records:</strong> Emails, texts, voicemails showing non-compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Financial records:</strong> Proof of missed support payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Witness statements:</strong> Third-party observations of violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Photo/video evidence:</strong> Visual proof of violations or conditions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Appeal Documentation</h3>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Complete trial record:</strong> All pleadings, orders, transcripts from trial court</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Relevant evidence:</strong> Documents and exhibits that support your position</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Legal authorities:</strong> Cases, statutes, and rules supporting your arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Motion records:</strong> All pre-trial and trial motions and rulings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Jury instructions:</strong> If applicable, instructions given to jury</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Considerations */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Considerations</h2>
        
        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Enforcement Strategy</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Before Court Action:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Document everything:</span>
                        <p className="text-gray-600 text-xs mt-1">Keep detailed records of all violations as they occur</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Communicate in writing:</span>
                        <p className="text-gray-600 text-xs mt-1">Create paper trail of attempts to resolve issues</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Consider alternatives:</span>
                        <p className="text-gray-600 text-xs mt-1">Mediation or direct negotiation before court</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Court Filing Strategy:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Timely filing:</span>
                        <p className="text-gray-600 text-xs mt-1">Don't wait too long after violations occur</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Specific allegations:</span>
                        <p className="text-gray-600 text-xs mt-1">Be detailed about what was violated and when</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Request specific relief:</span>
                        <p className="text-gray-600 text-xs mt-1">Ask for specific remedies, not just general enforcement</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Appeal Strategy</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Evaluate Your Case:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Strong legal basis:</span>
                        <p className="text-gray-600 text-xs mt-1">Identify clear legal errors or procedural violations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Cost-benefit analysis:</span>
                        <p className="text-gray-600 text-xs mt-1">Consider costs vs. likelihood of success</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Timeline considerations:</span>
                        <p className="text-gray-600 text-xs mt-1">Appeals can take 12-18 months or longer</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Help:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Appellate attorney:</span>
                        <p className="text-gray-600 text-xs mt-1">Consider hiring lawyer with appellate experience</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Complex legal writing:</span>
                        <p className="text-gray-600 text-xs mt-1">Appeals require sophisticated legal arguments</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Procedural expertise:</span>
                        <p className="text-gray-600 text-xs mt-1">Strict deadlines and formatting requirements</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Situations */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Situations</h2>
        
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">When Immediate Action is Required</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Enforcement:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Child abduction:</strong> Parent takes child in violation of custody order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Immediate danger:</strong> Child exposed to abuse, neglect, or violence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Contempt of safety orders:</strong> Violation of protection orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Destruction of evidence:</strong> Attempts to hide assets or destroy records</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Procedures:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Call law enforcement:</strong> If child safety is at immediate risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>File emergency motion:</strong> Request expedited court hearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Gather immediate evidence:</strong> Photos, witness statements, documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Contact attorney immediately:</strong> Legal emergency requires immediate professional help</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources and Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources & Next Steps</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Court Resources</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <Link href="/forms" className="font-semibold text-blue-600 hover:text-blue-800">
                      Enforcement Forms
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Contempt petitions and enforcement motions</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <Link href="/procedures/court-procedures" className="font-semibold text-blue-600 hover:text-blue-800">
                      Court Procedures
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Understanding the enforcement and appeal process</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Arizona Court of Appeals</span>
                    <p className="text-gray-600 text-xs mt-1">Rules and procedures for filing appeals</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Professional Help</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <Link href="/resources/legal-representation" className="font-semibold text-green-600 hover:text-green-800">
                      Finding an Attorney
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Enforcement and appeals often require legal representation</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Division of Child Support Services</span>
                    <p className="text-gray-600 text-xs mt-1">Free child support enforcement services</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Legal Aid Organizations</span>
                    <p className="text-gray-600 text-xs mt-1">Free or low-cost help for qualifying individuals</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Reminders */}
      <section>
        <Card className="border-l-4 border-l-amber-500 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-900">Critical Reminders</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Enforcement:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Document violations immediately as they occur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Continue following court orders while seeking enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Contempt requires proof of willful violation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>In emergencies involving child safety, call 911 first</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Appeals:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>30-day deadline is absolute - extensions are rarely granted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Appeals don't automatically stop enforcement of orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Appeals focus on legal errors, not re-trying facts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Consider attorney representation for complex appeals</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}