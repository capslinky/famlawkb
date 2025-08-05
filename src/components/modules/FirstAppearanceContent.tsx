/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, Scale, Users, AlertCircle, ExternalLink, Calendar, Gavel, Shield, Target, Phone, Info, Building, MapPin, ArrowRight, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FirstAppearanceContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Gavel className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">🏛️ At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Your first court appearance sets the tone for your entire case. Arizona family courts use initial hearings and case management conferences to establish timelines, address urgent issues, and ensure both parties understand their obligations.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span><strong>Typical Duration:</strong> 15-30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span><strong>When Scheduled:</strong> 30-60 days after filing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who Attends:</strong> Both parties (mandatory)</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Failure to appear can result in default</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            ⚡ Key Takeaways
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Dress professionally:</strong> Business attire shows respect for the court</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Arrive early:</strong> Allow time for parking and security screening</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Bring documents:</strong> All case-related paperwork and ID</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Stay calm:</strong> Let your attorney or judge guide the proceeding</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Take notes:</strong> Write down important dates and instructions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Follow orders:</strong> Comply with all temporary directions immediately</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Initial Hearings */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-600" />
            ⚖️ Types of Initial Hearings
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Case Management Conference (CMC)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Establish case timeline and deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Address immediate concerns or disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule mediation or other ADR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Set dates for disclosures and trial</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Initial Appearance/Arraignment</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Confirm receipt of petition and response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Address representation status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set ground rules for the case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule next court date</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Temporary Orders Hearing</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Address urgent custody or support issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Establish temporary living arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Order interim financial support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Issue protective orders if needed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Settlement Conference</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Encourage negotiated resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Identify areas of agreement and dispute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Facilitate discussion between parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule trial if no agreement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preparing for Your First Appearance */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            📋 Preparing for Your First Appearance
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Essential Documents to Bring</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Original petition and response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>All filed motions and orders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Financial affidavits and supporting documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Child custody and support worksheets</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Photo identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Calendar for scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Notepad and pen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span>Contact information for all parties</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Judge will review case status</li>
                  <li>• Parties state positions briefly</li>
                  <li>• Court sets deadlines and timelines</li>
                  <li>• Temporary issues may be addressed</li>
                  <li>• Next court date will be scheduled</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">Questions You May Be Asked</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Do you have an attorney?</li>
                  <li>• Do you understand the allegations?</li>
                  <li>• Are there any immediate safety concerns?</li>
                  <li>• Can you comply with proposed timelines?</li>
                  <li>• Are you interested in mediation?</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Court Etiquette and Behavior */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-600" />
            🎯 Court Etiquette and Behavior
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  DO
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Stand when the judge enters</li>
                  <li>• Address the judge as "Your Honor"</li>
                  <li>• Speak clearly and respectfully</li>
                  <li>• Wait for permission to speak</li>
                  <li>• Turn off cell phone completely</li>
                  <li>• Dress in business attire</li>
                  <li>• Arrive 15-30 minutes early</li>
                  <li>• Bring a notebook and pen</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  DON'T
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Interrupt the judge or other party</li>
                  <li>• Argue with the other party</li>
                  <li>• Chew gum or eat in courtroom</li>
                  <li>• Wear inappropriate clothing</li>
                  <li>• Bring children unless required</li>
                  <li>• Use your phone in any way</li>
                  <li>• Talk while court is in session</li>
                  <li>• Show emotional outbursts</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Professional Appearance Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Recommended Attire:</p>
                  <ul className="space-y-1">
                    <li>• Business suit or dress pants/skirt with blouse</li>
                    <li>• Conservative colors (navy, black, gray, white)</li>
                    <li>• Closed-toe shoes</li>
                    <li>• Minimal jewelry and makeup</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Avoid:</p>
                  <ul className="space-y-1">
                    <li>• Shorts, tank tops, flip-flops</li>
                    <li>• Revealing or tight clothing</li>
                    <li>• Strong perfumes or cologne</li>
                    <li>• Hats or sunglasses indoors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common First Appearance Issues */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            ⚠️ Common First Appearance Issues
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Scheduling Conflicts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Problem:</strong> Can't make assigned court date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Solution:</strong> File motion to continue before the hearing</span>
                  </li>
                  <li className="text-xs text-gray-600 ml-6">Note: Emergency or work conflicts rarely excuse absence</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Missing Documents</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Problem:</strong> Don't have required financial forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Solution:</strong> Ask court for extension to file missing items</span>
                  </li>
                  <li className="text-xs text-gray-600 ml-6">Note: May result in sanctions if repeatedly unprepared</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Representation Questions</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Problem:</strong> Unsure about hiring attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Solution:</strong> Ask court for time to consult with attorney</span>
                  </li>
                  <li className="text-xs text-gray-600 ml-6">Note: Court cannot give legal advice but can provide procedural guidance</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Communication Issues</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Problem:</strong> Language barrier or hearing difficulty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Solution:</strong> Request interpreter or accommodations in advance</span>
                  </li>
                  <li className="text-xs text-gray-600 ml-6">Note: Court must provide reasonable accommodations</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typical Outcomes and Next Steps */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600" />
            📋 Typical Outcomes and Next Steps
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">What the Court Will Typically Order</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Disclosure deadline (usually 40 days)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Mediation or settlement conference date</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Case management conference follow-up</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Parenting class deadline (if children involved)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Trial date (if needed)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Status review hearing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Best Case Scenario</h4>
                <ul className="space-y-1 text-sm">
                  <li>• All deadlines clearly set</li>
                  <li>• Parties agree on timeline</li>
                  <li>• Temporary issues resolved</li>
                  <li>• Mediation scheduled</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Typical Scenario</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Some scheduling conflicts</li>
                  <li>• Minor procedural issues</li>
                  <li>• Need follow-up hearing</li>
                  <li>• Temporary orders needed</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Challenging Scenario</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Party doesn't appear</li>
                  <li>• Emergency issues arise</li>
                  <li>• Documents incomplete</li>
                  <li>• High conflict between parties</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* After Your First Appearance */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            ✅ After Your First Appearance
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Immediate Action Items</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Review and understand all court orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Add all deadlines to your calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Begin working on disclosure requirements</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Contact mediation service if ordered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Comply with any temporary orders immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Organize documents for next steps</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Important Reminders</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>All court orders are legally binding immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Violating court orders can result in contempt charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Keep detailed records of compliance with orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Communicate with other party only as ordered by court</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Virtual Hearings */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            💻 Virtual Hearings (Post-COVID Considerations)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Technical Requirements</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Stable internet connection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Computer or tablet with camera</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Working microphone and speakers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Zoom or Teams software installed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Phone backup for connection issues</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Virtual Hearing Etiquette</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Professional background or blank wall</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Good lighting on your face</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Mute when not speaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Look at camera, not screen</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Test technology beforehand</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Resources */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            🆘 Emergency Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">If You Can't Attend</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Call the court immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>File emergency motion to continue</span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Contact an attorney immediately</span>
                </li>
                <li className="text-xs text-gray-600 mt-2">
                  Note: Default judgments can be entered if you don't appear
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Courthouse Information</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Arrive early for parking and security</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>Check courthouse website for procedures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Go through security screening</span>
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Locate your courtroom in advance</span>
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
            🎯 Next Steps After First Appearance
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Initial Disclosures</h3>
                <p className="text-sm text-gray-600">Exchange financial and case information</p>
                <Link href="/modules/disclosures" className="text-blue-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Temporary Orders</h3>
                <p className="text-sm text-gray-600">Request interim relief if needed</p>
                <Link href="/modules/temporary-orders" className="text-green-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Mediation</h3>
                <p className="text-sm text-gray-600">Explore settlement opportunities</p>
                <Link href="/modules/mediation" className="text-purple-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Your first appearance is just the beginning of the court process. Stay organized, 
                meet all deadlines, and follow court orders precisely. Consider hiring an attorney if the case becomes complex.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}