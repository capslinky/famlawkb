/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Users, Calendar, Gavel, Shield, Target, Info, ArrowRight, User, Home, Heart, Baby, CreditCard, Zap, BookOpen, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TemporaryOrdersContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-purple-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Gavel className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">⚡ At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Temporary orders provide immediate relief for urgent issues while your family law case is pending. Arizona courts can establish temporary custody, support, use of property, and protective measures to maintain stability during litigation.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span><strong>Timeline:</strong> Hearing typically within 10-30 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Filing Fee:</strong> $45 for most temporary order motions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span><strong>Who Can Request:</strong> Either party in a family law case</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Orders remain in effect until final decree</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When Temporary Orders Are Needed */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            ⚡ When Temporary Orders Are Needed
          </h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Common Situations Requiring Immediate Relief</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Baby className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Child custody disputes:</strong> Determining temporary parenting time and decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial support:</strong> Temporary child support and spousal maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Use of marital residence:</strong> Who stays in the family home</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Asset protection:</strong> Preventing dissipation of marital property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Safety concerns:</strong> Protection from harassment or abuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Record preservation:</strong> Maintaining business or financial records</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Emergency Situations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Domestic violence</li>
                  <li>• Child abuse or neglect</li>
                  <li>• Threat to remove children from state</li>
                  <li>• Immediate financial crisis</li>
                  <li>• Asset hiding or dissipation</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Urgent but Not Emergency</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Custody schedule disputes</li>
                  <li>• Support payment delays</li>
                  <li>• School enrollment decisions</li>
                  <li>• Medical care authorization</li>
                  <li>• Use of vehicles or credit cards</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Standard Requests</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Parenting time schedule</li>
                  <li>• Temporary support amounts</li>
                  <li>• Attorney fee payments</li>
                  <li>• Insurance coverage</li>
                  <li>• Debt payment responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Temporary Orders */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            📋 Types of Temporary Orders Available
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Baby className="w-4 h-4" />
                  Child-Related Orders
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temporary custody:</strong> Legal decision-making authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Parenting time:</strong> Visitation schedule and exchanges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Child support:</strong> Monthly support payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Health insurance:</strong> Coverage and medical decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>School enrollment:</strong> Educational decisions and location</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Financial Orders
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Spousal maintenance:</strong> Temporary alimony payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Attorney fees:</strong> Payment of legal costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Debt payments:</strong> Who pays what bills temporarily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Asset preservation:</strong> Freezing accounts or investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Business operations:</strong> Continued operation of family business</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Property and Residence Orders
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Exclusive use:</strong> Who remains in marital home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Personal property:</strong> Use of vehicles, furniture, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Bank accounts:</strong> Access to checking and savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Credit cards:</strong> Use and payment responsibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Protective Orders
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>No contact:</strong> Restraining orders for safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay-away:</strong> Distance requirements from home/work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Communication limits:</strong> Restrictions on contact methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Supervised visitation:</strong> Protected child exchanges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legal Standards for Temporary Orders */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            ⚖️ Legal Standards for Temporary Orders
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">What Courts Consider When Granting Temporary Orders</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Urgency of the situation:</strong> Immediate need for relief</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Status quo maintenance:</strong> Preserving existing arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Best interests of children:</strong> Child welfare paramount</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial need and ability:</strong> Resources and obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Likelihood of success:</strong> Strength of underlying case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Potential for irreparable harm:</strong> Risk if order not granted</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Strong Cases for Temporary Orders</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear financial need</li>
                  <li>• Documented safety concerns</li>
                  <li>• Children's stability at risk</li>
                  <li>• Evidence of asset dissipation</li>
                  <li>• Established living arrangements</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Factors Courts Balance</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Both parties' financial needs</li>
                  <li>• Existing parenting arrangements</li>
                  <li>• Work schedules and logistics</li>
                  <li>• Children's school and activities</li>
                  <li>• Available resources</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Weak Cases for Temporary Orders</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Vague or unsupported claims</li>
                  <li>• Seeking permanent changes</li>
                  <li>• Punitive rather than protective</li>
                  <li>• No showing of immediate need</li>
                  <li>• Disrupting stable arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filing Process and Procedures */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-600" />
            📝 Filing Process and Procedures
          </h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Step-by-Step Filing Process</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Complete Motion for Temporary Orders</p>
                    <p className="text-sm text-gray-600">Use Arizona Supreme Court approved forms, state specific relief requested</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Prepare Supporting Affidavit</p>
                    <p className="text-sm text-gray-600">Sworn statement of facts supporting your request with evidence attached</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">File with Court Clerk</p>
                    <p className="text-sm text-gray-600">Submit original plus copies, pay $45 filing fee (fee waiver available)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Serve Other Party</p>
                    <p className="text-sm text-gray-600">Provide copies to opposing party or attorney, file proof of service</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <span className="text-orange-800 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <p className="font-semibold">Attend Hearing</p>
                    <p className="text-sm text-gray-600">Present evidence and argument at scheduled court hearing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Required Forms and Documents</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Motion for Temporary Orders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Supporting Affidavit with exhibits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Proposed Temporary Order (draft)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Financial Affidavit (if support requested)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Certificate of Service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Timeline and Deadlines</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>Service deadline:</strong> At least 5 days before hearing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>Response time:</strong> Other party has 3 days to respond</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>Hearing scheduling:</strong> Usually 10-30 days after filing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>Emergency orders:</strong> Can be heard same day if urgent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preparing for the Hearing */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            🎯 Preparing for the Temporary Orders Hearing
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Evidence and Documentation to Bring</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial records:</strong> Pay stubs, bank statements, bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Custody evidence:</strong> Calendars, school records, photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Safety documentation:</strong> Police reports, medical records</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Communication records:</strong> Text messages, emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Witness statements:</strong> Affidavits from relevant people</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Professional opinions:</strong> Counselor or doctor reports</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Hearing Preparation Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Organize documents chronologically</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Prepare a brief outline of key points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Bring extra copies of all documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Dress professionally for court</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    <span>Arrive early to organize materials</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">What to Expect at Hearing</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Hearings typically last 15-60 minutes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>You'll present your case first (as moving party)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Other party responds to your requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Judge may ask clarifying questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Decision usually made at end of hearing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responding to Temporary Order Motions */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            🛡️ Responding to Temporary Order Motions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">If You're Served with a Motion for Temporary Orders</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Review the Motion Carefully</p>
                    <p className="text-sm text-gray-600">Understand exactly what the other party is requesting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Note the Hearing Date</p>
                    <p className="text-sm text-gray-600">Mark your calendar and arrange to attend or respond</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Decide Whether to File a Response</p>
                    <p className="text-sm text-gray-600">You can respond in writing or just appear at the hearing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Gather Counter-Evidence</p>
                    <p className="text-sm text-gray-600">Collect documents and information that contradict their claims</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Options for Response</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>File written response:</strong> Submit counter-affidavit with evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Appear at hearing only:</strong> Present oral arguments and evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>File counter-motion:</strong> Request different temporary orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stipulate to some terms:</strong> Agree to parts you don't oppose</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Consequences of Not Responding</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Default risk:</strong> Court may grant motion without your input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Limited presentation:</strong> No written evidence or preparation time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Unfavorable terms:</strong> Orders may be more extreme than necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Missed opportunities:</strong> Can't request counter-relief effectively</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modification and Enforcement */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-indigo-600" />
            ⚖️ Modification and Enforcement of Temporary Orders
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">Modifying Temporary Orders</h3>
                <p className="text-sm text-gray-700 mb-3">Temporary orders can be modified if circumstances change significantly</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Changed circumstances:</strong> Job loss, relocation, new safety concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>New evidence:</strong> Information not available at first hearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Impractical orders:</strong> Terms that proved unworkable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Emergency situations:</strong> Immediate safety or welfare issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Enforcing Temporary Orders</h3>
                <p className="text-sm text-gray-700 mb-3">Violations of temporary orders can result in serious consequences</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Contempt of court:</strong> Fines, jail time, or other sanctions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Make-up time:</strong> Additional parenting time for missed visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Attorney fees:</strong> Payment of other party's legal costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Wage garnishment:</strong> Automatic deduction for support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Important Reminders</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Orders are binding immediately:</strong> Comply fully until modified by court</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Document violations:</strong> Keep detailed records of non-compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Self-help prohibited:</strong> Cannot enforce orders yourself - must use court</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Effect until final orders:</strong> Temporary orders remain until case ends</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes and Pitfalls */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ Common Mistakes and Pitfalls
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Filing Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Requesting too much - seems unreasonable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Vague requests - court can't grant unclear relief</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Insufficient evidence - no support for claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Missing deadlines - motion dismissed or delayed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Evidence Problems</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Hearsay evidence - inadmissible statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Emotional arguments - not legal standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Old or irrelevant information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Disorganized presentation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Strategic Errors</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Focusing on punishment rather than protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Making accusations without proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Asking for permanent changes prematurely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Ignoring children's best interests</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Post-Order Problems</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Violating orders immediately after hearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Not documenting compliance or violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Trying to modify orders informally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Failing to update financial disclosures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Resources */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-600" />
            🆘 Emergency Resources and Help
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Emergency Situations</h3>
              <p className="text-sm text-gray-700 mb-3">If you or your children are in immediate danger:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span><strong>Call 911</strong> for immediate police response</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span>Request emergency protective orders from police</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-600" />
                  <span>Seek temporary shelter through local services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Legal Help and Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span><strong>Court self-help centers:</strong> Free assistance with forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span><strong>Legal aid organizations:</strong> Free/low-cost representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span><strong>State Bar lawyer referral:</strong> Find qualified attorneys</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span><strong>Fee waiver applications:</strong> Waive court costs if indigent</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-600" />
            🎯 Next Steps After Temporary Orders
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Comply with Orders</h3>
                <p className="text-sm text-gray-600">Follow all temporary orders precisely and document compliance</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Consider Mediation</h3>
                <p className="text-sm text-gray-600">Work toward settlement with temporary arrangements in place</p>
                <Link href="/modules/mediation" className="text-green-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Prepare for Trial</h3>
                <p className="text-sm text-gray-600">Build your case for final resolution</p>
                <Link href="/modules/trial-prep" className="text-purple-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Temporary orders are just that - temporary. They provide stability while your case proceeds 
                but can be modified if circumstances change significantly. Always comply fully with court orders and seek legal help 
                if you have questions about enforcement or modification.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}