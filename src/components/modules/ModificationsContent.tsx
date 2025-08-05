/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, Users, Calendar, Gavel, Target, ArrowRight, User, DollarSign, Heart, Scale, Building, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ModificationsContent() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post-Decree Modifications</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Learn when and how to modify existing court orders for child custody, support, and other family law matters when circumstances change significantly.
        </p>
      </div>

      {/* Quick Reference Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Timing Matters</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Most modifications require waiting at least one year after the original order, unless substantial change in circumstances.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Legal Standard</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Must prove a "substantial and continuing change" in circumstances that affects the child's best interests.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-amber-600" />
              <h3 className="font-semibold text-gray-900">Documentation</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Comprehensive evidence and documentation are essential to prove changed circumstances to the court.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Types of Modifications */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Post-Decree Modifications</h2>
        
        <div className="grid gap-6">
          {/* Child Custody Modifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Child Custody & Parenting Time</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Grounds for Modification:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Parental relocation:</strong> Moving more than 100 miles or out of state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Changed work schedules:</strong> Significant changes in employment affecting availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Child's preferences:</strong> Mature child's stated preference (typically 12+ years)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Safety concerns:</strong> Substance abuse, domestic violence, neglect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Remarriage impacts:</strong> New family dynamics affecting child's welfare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Educational needs:</strong> Special programs, schools, or therapeutic services</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Legal Requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>One-year waiting period:</strong> Generally must wait one year after original order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best interests standard:</strong> Must prove modification serves child's best interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Substantial change:</strong> Must be continuing and affect child's welfare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Evidence required:</strong> Documentation, witnesses, expert testimony if needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Child Support Modifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Child Support Modifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Grounds for Modification:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Income changes:</strong> 15% or more change in either parent's income</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Changed custody:</strong> Modification in parenting time affecting support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Medical needs:</strong> Extraordinary medical or educational expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Additional children:</strong> New children affecting support calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cost of living:</strong> Significant changes in cost of living adjustments</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Process & Timeline:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Three-year rule:</strong> Automatic review available every three years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Income documentation:</strong> Recent pay stubs, tax returns, employment records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Calculation worksheets:</strong> Use Arizona Child Support Guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Effective date:</strong> Modifications typically effective from filing date</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spousal Support Modifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Spousal Maintenance Modifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Modification Triggers:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Income changes:</strong> Substantial increase or decrease in either party's income</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cohabitation:</strong> Supported spouse living with romantic partner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Remarriage:</strong> Supported spouse remarrying (typically terminates support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Health changes:</strong> Disability or significant health issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Retirement:</strong> Reaching retirement age or voluntary retirement</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Termination Events:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Death:</strong> Either party's death automatically terminates support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Remarriage:</strong> Supported spouse's remarriage ends obligation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Time limits:</strong> If order specified duration, support ends on date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Court order:</strong> Court finds circumstances warrant termination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Standards */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Standards for Modifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Substantial Change Standard</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Substantial:</strong> Change must be significant, not minor or temporary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Continuing:</strong> Change must be ongoing, not temporary situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Unforeseen:</strong> Change was not anticipated at time of original order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Material impact:</strong> Change affects the underlying basis for the order</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Examples of Substantial Changes:</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Job loss or significant income reduction</li>
                    <li>• Serious illness or disability</li>
                    <li>• Substance abuse problems</li>
                    <li>• Criminal conviction affecting parenting</li>
                    <li>• Child's special needs development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Best Interests Standard</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Factors Court Considers:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Physical and emotional health:</strong> Of both child and parents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Stability:</strong> Consistency in housing, schooling, relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Parent-child relationship:</strong> Quality of existing bonds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Parental cooperation:</strong> Ability to work together for child's benefit</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Court's Primary Concern:</h4>
                  <p className="text-sm text-green-800">
                    The court's overriding consideration is always the child's best interests. Even if circumstances have changed substantially, the modification must benefit the child.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Filing Process */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Filing Process for Modifications</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <h3 className="text-lg font-semibold text-gray-900">Prepare Your Case</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Gather evidence of changed circumstances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Collect financial documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Document how changes affect child's best interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Obtain witness statements if applicable</span>
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <h3 className="text-lg font-semibold text-gray-900">File Your Petition</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Gavel className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Complete Petition to Modify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gavel className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>File with the court that issued original order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gavel className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pay required filing fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gavel className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Serve other party properly</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <h3 className="text-lg font-semibold text-gray-900">Court Process</h3>
                </div>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Attend case management conference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Participate in required mediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Present evidence at hearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Receive court's decision</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Required Documentation */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documentation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Financial Documentation</h3>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Income records:</strong> Pay stubs, tax returns (last 2 years), W-2s, 1099s</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Employment records:</strong> Letter from employer, employment contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Business records:</strong> Profit/loss statements, business tax returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Bank statements:</strong> Last 6 months for all accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Asset documentation:</strong> Property deeds, investment accounts, retirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Expense records:</strong> Child care, medical, educational expenses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Supporting Evidence</h3>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Medical records:</strong> Health issues affecting you or child</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>School records:</strong> Report cards, special needs evaluations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Police reports:</strong> If safety concerns are involved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Witness statements:</strong> From family, friends, professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Communication records:</strong> Emails, texts showing circumstances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Professional evaluations:</strong> Psychological, substance abuse, parenting</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Challenges */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Challenges & Solutions</h2>
        
        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Challenge: Proving Substantial Change</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Problems:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Insufficient documentation of changes</li>
                    <li>• Changes are temporary or minor</li>
                    <li>• Changes were foreseeable at time of original order</li>
                    <li>• Focus on parent's interests rather than child's</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solutions:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Maintain detailed records over time</li>
                    <li>• Focus on child's best interests in all arguments</li>
                    <li>• Gather multiple forms of evidence</li>
                    <li>• Consult with attorney for case evaluation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Challenge: Timing and Deadlines</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Problems:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Filing too soon (within one-year restriction)</li>
                    <li>• Missing response deadlines</li>
                    <li>• Inadequate preparation time</li>
                    <li>• Emergency situations requiring immediate action</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solutions:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Understand waiting periods and exceptions</li>
                    <li>• Calendar all deadlines immediately</li>
                    <li>• Begin evidence gathering early</li>
                    <li>• Consider emergency motions when appropriate</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Considerations */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Considerations</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Before Filing</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Evaluate strength of case:</span>
                    <p className="text-gray-600 text-xs mt-1">Honestly assess whether you have sufficient grounds and evidence</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Consider alternatives:</span>
                    <p className="text-gray-600 text-xs mt-1">Mediation or stipulated modifications may be faster and less expensive</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Prepare for costs:</span>
                    <p className="text-gray-600 text-xs mt-1">Filing fees, attorney fees, expert witness costs can add up quickly</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Document everything:</span>
                    <p className="text-gray-600 text-xs mt-1">Keep detailed records of circumstances leading to modification request</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Settlement Strategies</h3>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Negotiate directly:</span>
                    <p className="text-gray-600 text-xs mt-1">If possible, work with other parent to reach agreement before court</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Use mediation:</span>
                    <p className="text-gray-600 text-xs mt-1">Neutral mediator can help find mutually acceptable solutions</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Focus on child's needs:</span>
                    <p className="text-gray-600 text-xs mt-1">Frame discussions around what's best for the child, not personal grievances</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Be realistic:</span>
                    <p className="text-gray-600 text-xs mt-1">Understand that some compromise may be necessary to reach agreement</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Modifications */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Modifications</h2>
        
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">When Emergency Action is Needed</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Circumstances:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Immediate danger:</strong> Child abuse, neglect, or exposure to violence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Abandonment:</strong> Parent has abandoned child or failed to return from visitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Substance abuse:</strong> Active addiction creating immediate risk to child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mental health crisis:</strong> Severe mental illness affecting parenting capacity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Procedures:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>File immediately:</strong> Don't wait for regular modification process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Request expedited hearing:</strong> Ask court to hear case within days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Gather immediate evidence:</strong> Photos, witness statements, police reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ensure child safety:</strong> Take steps to protect child while process is pending</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> In true emergencies involving immediate danger to a child, contact law enforcement (911) first, then seek emergency court orders. Your priority must always be the child's immediate safety.
              </p>
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
                      Court Forms
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Find petition forms and instructions for modifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <Link href="/support/calculator" className="font-semibold text-blue-600 hover:text-blue-800">
                      Child Support Calculator
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Calculate potential changes to support amounts</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <Link href="/procedures/court-procedures" className="font-semibold text-blue-600 hover:text-blue-800">
                      Court Procedures
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">Understand how the court process works</p>
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
                    <p className="text-gray-600 text-xs mt-1">When to hire a lawyer and how to find one</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Family Court Services</span>
                    <p className="text-gray-600 text-xs mt-1">Mediation and evaluation services available through the court</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Legal Aid Organizations</span>
                    <p className="text-gray-600 text-xs mt-1">Free or low-cost legal assistance for qualifying individuals</p>
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
              <h3 className="text-lg font-semibold text-gray-900">Important Reminders</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Points to Remember:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Modifications are not retroactive - they only take effect from the date filed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Continue following existing orders until court modifies them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>The burden of proof is on the person requesting the modification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Courts prefer stability - changes must be justified and necessary</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Before You Begin:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Carefully evaluate whether your circumstances meet legal standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider whether mediation or negotiation might be more effective</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gather all necessary documentation before filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consider consulting with an attorney for complex cases</span>
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