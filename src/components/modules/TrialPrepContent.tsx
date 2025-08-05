/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, Users, Calendar, Gavel, Target, ArrowRight, User, Folder, Camera, BookOpen, Phone, MessageSquare, Scale, Building } from 'lucide-react';
import Link from 'next/link';

export default function TrialPrepContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-red-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Gavel className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">⚖️ At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> Trial preparation is crucial for success in Arizona family court. Proper organization of evidence, witness preparation, and understanding court procedures can make the difference between winning and losing your case. Most cases settle before trial, but being trial-ready strengthens your negotiating position.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span><strong>Preparation Time:</strong> 60-90 days minimum before trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span><strong>Success Factor:</strong> Organized evidence and clear presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-600" />
                  <span><strong>Key Element:</strong> Pre-trial statement and witness lists</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Critical Point:</strong> Settlement leverage comes from trial readiness</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Trial Timeline */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            📅 Pre-Trial Timeline and Deadlines
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Typical Trial Preparation Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">90</span>
                  </div>
                  <div>
                    <p className="font-semibold">90 Days Before Trial</p>
                    <p className="text-sm text-gray-600">Begin comprehensive case review, identify needed discovery, start witness preparation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">60</span>
                  </div>
                  <div>
                    <p className="font-semibold">60 Days Before Trial</p>
                    <p className="text-sm text-gray-600">Complete all discovery, organize exhibits, prepare demonstrative aids</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">30</span>
                  </div>
                  <div>
                    <p className="font-semibold">30 Days Before Trial</p>
                    <p className="text-sm text-gray-600">File pre-trial statement, exchange witness and exhibit lists, conduct final witness prep</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-blue-800 font-bold text-sm">7</span>
                  </div>
                  <div>
                    <p className="font-semibold">7 Days Before Trial</p>
                    <p className="text-sm text-gray-600">Final settlement discussions, prepare opening statement, organize trial materials</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Court-Imposed Deadlines</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span><strong>Pre-trial statement:</strong> Usually 30 days before trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span><strong>Witness lists:</strong> 20-30 days before trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span><strong>Exhibit lists:</strong> 20-30 days before trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span><strong>Discovery cutoff:</strong> 30-60 days before trial</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Strategic Milestones</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Case theory development:</strong> 90+ days out</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Evidence organization:</strong> 60+ days out</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Settlement conference:</strong> 30-60 days out</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Final trial prep:</strong> 1-2 weeks out</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Theory Development */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            🎯 Developing Your Case Theory
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">What is Case Theory?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Your case theory is the central narrative that explains why you should win. It's a simple, compelling story 
                that connects the facts, law, and desired outcome in a logical way that's easy for the judge to understand and accept.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-full w-fit mx-auto mb-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 text-sm">Facts</h4>
                  <p className="text-xs text-gray-600">What happened?</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-full w-fit mx-auto mb-2">
                    <Scale className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 text-sm">Law</h4>
                  <p className="text-xs text-gray-600">What does the law say?</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-full w-fit mx-auto mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 text-sm">Relief</h4>
                  <p className="text-xs text-gray-600">What do you want?</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Elements of Strong Case Theory</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Simple and clear:</strong> Easy to understand and remember</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Legally sufficient:</strong> Meets all required legal elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Factually supported:</strong> Backed by credible evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Morally compelling:</strong> Appeals to sense of fairness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Child-focused:</strong> Emphasizes children's best interests</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">Common Case Theory Examples</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Custody:</strong> "Stable, involved parent provides best continuity for children"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Support:</strong> "Income capacity higher than reported, children's needs unmet"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Property:</strong> "Hidden assets and dissipation require full disclosure and sanctions"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Modification:</strong> "Substantial change in circumstances warrants order change"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Evidence Organization */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Folder className="w-5 h-5 text-indigo-600" />
            📁 Evidence Organization and Management
          </h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Evidence Categories for Family Law Cases</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial documents:</strong> Tax returns, bank statements, pay stubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Communications:</strong> Text messages, emails, recorded calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Photos/videos:</strong> Living conditions, interactions, property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Official records:</strong> Court orders, police reports, medical records</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Professional reports:</strong> Custody evaluations, appraisals, therapy records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>School records:</strong> Report cards, attendance, behavioral reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Calendar evidence:</strong> Parenting time logs, missed visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Social media:</strong> Posts, photos, check-ins (properly authenticated)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Evidence Organization System</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Create Master Index</p>
                      <p className="text-xs text-gray-600">List all exhibits with brief descriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Organize by Issue</p>
                      <p className="text-xs text-gray-600">Group evidence by custody, support, property</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Use Consistent Numbering</p>
                      <p className="text-xs text-gray-600">Ex: P-1, P-2 (Petitioner) D-1, D-2 (Respondent)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Create Digital Backup</p>
                      <p className="text-xs text-gray-600">Scan originals, organize electronic copies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Evidence Authentication Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Text messages:</strong> Screenshot with headers showing date/time/sender</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Social media:</strong> URL, date accessed, witness testimony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Photos:</strong> Date, location, who took photo, chain of custody</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Business records:</strong> Custodian testimony or certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Witness Preparation */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            👥 Witness Preparation and Management
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Types of Witnesses in Family Law Cases</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">Fact Witnesses</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Neighbors</li>
                    <li>• Teachers</li>
                    <li>• Childcare providers</li>
                    <li>• Family members</li>
                    <li>• Coaches/activity leaders</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">Expert Witnesses</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Custody evaluators</li>
                    <li>• Child psychologists</li>
                    <li>• Financial experts</li>
                    <li>• Business appraisers</li>
                    <li>• Vocational evaluators</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">Professional Witnesses</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Doctors</li>
                    <li>• Therapists</li>
                    <li>• Accountants</li>
                    <li>• Police officers</li>
                    <li>• Social workers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Witness Preparation Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Initial Interview</p>
                      <p className="text-xs text-gray-600">Determine what witness knows, potential testimony value</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Preparation Meeting</p>
                      <p className="text-xs text-gray-600">Review testimony, practice direct examination questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Cross-Examination Prep</p>
                      <p className="text-xs text-gray-600">Anticipate opposing counsel's questions, practice responses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <span className="text-green-800 font-bold text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Final Preparation</p>
                      <p className="text-xs text-gray-600">Court procedures, what to expect, dress code</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Key Witness Instructions</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tell the truth:</strong> Always be honest, even if unfavorable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Listen carefully:</strong> Make sure you understand each question</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Answer only what's asked:</strong> Don't volunteer extra information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Say "I don't know":</strong> If you don't remember or know</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay calm:</strong> Don't argue with opposing counsel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Trial Statements and Motions */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-600" />
            📋 Pre-Trial Statements and Motions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Required Pre-Trial Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pre-trial statement:</strong> Summary of case, issues, and witness/exhibit lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Witness list:</strong> Names, addresses, expected testimony topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Exhibit list:</strong> Numbered list of all documents and physical evidence</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Expert disclosures:</strong> Expert witness qualifications and opinions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stipulations:</strong> Facts both parties agree on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Trial briefs:</strong> Legal arguments on disputed issues</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Pre-Trial Motion Strategy</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Motions in limine:</strong> Exclude prejudicial or irrelevant evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Summary judgment:</strong> Resolve legal issues without trial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Compel compliance:</strong> Force discovery responses or attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Bifurcation:</strong> Separate complex issues into phases</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Settlement Leverage</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Strong evidence:</strong> Well-organized case encourages settlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Prepared witnesses:</strong> Shows commitment to trial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Clear theory:</strong> Helps other side evaluate their risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Trial readiness:</strong> Demonstrates you're not bluffing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trial Day Preparation */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-red-600" />
            ⚖️ Trial Day Preparation
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Final Week Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Confirm all witness availability and subpoenas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Organize exhibit binders with tabs and copies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Prepare opening statement outline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Draft direct examination questions</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Prepare cross-examination outlines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Draft closing argument themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Prepare trial notebooks and technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Confirm courtroom logistics and parking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Opening Statement Preparation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tell your story:</strong> Clear chronological narrative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Preview evidence:</strong> What you will prove through witnesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>State the law:</strong> Legal standards judge will apply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Request relief:</strong> Specific orders you want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Keep it brief:</strong> 10-15 minutes maximum</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Trial Materials Organization</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span><strong>Master trial notebook:</strong> All documents in order of use</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span><strong>Exhibit binders:</strong> Original plus 3 copies (judge, clerk, opposing counsel)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span><strong>Witness files:</strong> Individual folders with relevant documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span><strong>Legal authorities:</strong> Cases and statutes you'll cite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <span><strong>Emergency kit:</strong> Extra pens, notepads, tissues, water</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Self-Representation Considerations */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-600" />
            👤 Self-Representation Considerations
          </h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Special Challenges for Pro Se Litigants</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Evidence rules:</strong> Must follow complex rules of evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Court procedures:</strong> Expected to know and follow all court rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Emotional challenges:</strong> Difficult to stay objective about your own case</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Time demands:</strong> Trial preparation requires significant time investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Legal knowledge:</strong> Must understand applicable laws and procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Strategic thinking:</strong> Must anticipate opponent's arguments and responses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Success Tips for Self-Represented Parties</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Study court rules:</strong> Read local rules and evidence rules carefully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Watch other trials:</strong> Observe proceedings in similar cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Practice presentations:</strong> Rehearse opening, witness examination, closing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay organized:</strong> Meticulous organization is even more critical</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-3">When to Consider Attorney Help</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span><strong>Complex legal issues:</strong> Constitutional challenges, jurisdictional disputes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span><strong>High stakes:</strong> Significant custody, support, or property issues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span><strong>Opposing counsel:</strong> Other party has experienced family law attorney</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span><strong>Limited coaching:</strong> Hire attorney for specific guidance only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology and Demonstrative Aids */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-green-600" />
            📱 Technology and Demonstrative Aids
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Effective Demonstrative Aids</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Timeline charts:</strong> Show sequence of events clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial summaries:</strong> Asset and income comparison charts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Parenting calendars:</strong> Visual representation of custody schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Day-in-the-life videos:</strong> Show children's routines and environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Property photos:</strong> Before/after conditions, living spaces</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Courtroom Technology</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Check availability:</strong> Confirm court has projector/screen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Test beforehand:</strong> Arrive early to test all equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Have backups:</strong> Printed versions of all electronic presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Simple formats:</strong> Use basic PowerPoint or PDF presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pre-approval:</strong> Some courts require advance approval</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Best Practices for Visual Aids</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Keep it simple and clean</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Use large, readable fonts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Limit text on each slide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Use consistent formatting</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Focus on key points only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Practice smooth transitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Don't read directly from slides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>Have technical backup plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Trial Preparation Mistakes */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            ⚠️ Common Trial Preparation Mistakes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Evidence and Discovery Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Waiting too long to organize evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Failing to authenticate documents properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Not having enough copies of exhibits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Incomplete or late discovery responses</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Witness Preparation Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Not preparing witnesses for cross-examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Failing to secure witness availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Over-coaching witnesses to sound rehearsed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Not explaining court procedures to witnesses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Strategic and Legal Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>No clear case theory or theme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Trying to prove too many points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Ignoring children's best interests standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Not preparing for opponent's arguments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Procedural and Administrative Mistakes</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Missing pre-trial statement deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Incomplete or unclear exhibit lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Not researching judge's preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Poor courtroom organization and setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-600" />
            🎯 Next Steps: From Trial Prep to Resolution
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Settlement Conference</h3>
                <p className="text-sm text-gray-600">Use trial readiness to negotiate favorable settlement</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Gavel className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Trial Execution</h3>
                <p className="text-sm text-gray-600">Present organized, compelling case to court</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Post-Trial Issues</h3>
                <p className="text-sm text-gray-600">Modifications, enforcement, appeals if needed</p>
                <Link href="/modules/modifications" className="text-purple-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Thorough trial preparation serves multiple purposes - it strengthens your negotiating 
                position for settlement, demonstrates commitment to your case, and ensures you're ready to present compelling 
                evidence if trial becomes necessary. Most well-prepared cases settle before trial, but preparation is what 
                makes favorable settlements possible.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}