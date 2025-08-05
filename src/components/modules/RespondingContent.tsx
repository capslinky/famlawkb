/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, FileText, DollarSign, Scale, Users, AlertCircle, ExternalLink, Calendar, Gavel, Shield, Target, BookOpen, Phone, Info, XCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RespondingContent() {
  return (
    <div className="space-y-8">
      {/* At a Glance Summary */}
      <Card className="border-l-4 border-l-red-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Scale className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">⚡ At a Glance</h2>
              <p className="text-gray-700 mb-4">
                <strong>Quick Summary:</strong> When served with court papers in Arizona family court, you have strict deadlines to respond. Missing these deadlines can result in default judgments against you, potentially losing your rights to custody, support, or property.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span><strong>Response Time:</strong> 20-30 days (varies by case type)</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span><strong>Filing Fee:</strong> $274 (Response fee)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span><strong>Who This Affects:</strong> Anyone served with family court papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span><strong>Key Point:</strong> Default judgment if you don't respond</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Critical Warning */}
      <Card className="border-l-4 border-l-red-600 bg-red-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-800">
            <AlertTriangle className="w-5 h-5" />
            🚨 CRITICAL WARNING
          </h2>
          <div className="space-y-3 text-red-800">
            <p className="font-semibold">DO NOT IGNORE COURT PAPERS</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>If you don't respond within the deadline, the court may grant everything the other party requested</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>You could lose custody rights, be ordered to pay maximum support, or lose property</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Default judgments are difficult and expensive to overturn</span>
              </li>
            </ul>
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
                <span className="text-sm"><strong>Count every day:</strong> Response deadlines include weekends and holidays</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Multiple deadlines:</strong> Different response times for different case types</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Service method matters:</strong> How you were served affects your deadline</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>File AND serve:</strong> You must respond to court AND other party</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Get help quickly:</strong> Contact an attorney immediately if unsure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Extensions possible:</strong> You may be able to request more time</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Understanding Response Deadlines */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            ⏰ Understanding Response Deadlines
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Divorce/Dissolution Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>30 days:</strong> If served in Arizona</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>60 days:</strong> If served outside Arizona</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span><strong>90 days:</strong> If served by publication</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Custody/Support Cases</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>20 days:</strong> Most custody petitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>30 days:</strong> Paternity cases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>10 days:</strong> Emergency motions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">How to Calculate Your Deadline</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Start counting the day AFTER you were served</li>
                <li>Count every day including weekends and holidays</li>
                <li>If the deadline falls on a weekend or court holiday, you have until the next business day</li>
                <li>The response must be filed with the court by 5:00 PM on the due date</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Documents You Might Receive */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            📋 Types of Documents You Might Receive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-l-purple-500 pl-4">
                <h3 className="font-semibold text-purple-800">Petition for Dissolution (Divorce)</h3>
                <p className="text-sm text-gray-600">Requests divorce and division of property, custody, support</p>
                <p className="text-xs text-purple-600 mt-1">Response deadline: 30 days</p>
              </div>
              
              <div className="border-l-4 border-l-blue-500 pl-4">
                <h3 className="font-semibold text-blue-800">Petition for Legal Separation</h3>
                <p className="text-sm text-gray-600">Requests formal separation without ending marriage</p>
                <p className="text-xs text-blue-600 mt-1">Response deadline: 30 days</p>
              </div>
              
              <div className="border-l-4 border-l-green-500 pl-4">
                <h3 className="font-semibold text-green-800">Petition for Custody</h3>
                <p className="text-sm text-gray-600">Requests custody orders for unmarried parents</p>
                <p className="text-xs text-green-600 mt-1">Response deadline: 20 days</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-l-orange-500 pl-4">
                <h3 className="font-semibold text-orange-800">Motion for Temporary Orders</h3>
                <p className="text-sm text-gray-600">Requests immediate temporary relief</p>
                <p className="text-xs text-orange-600 mt-1">Response deadline: 10-14 days</p>
              </div>
              
              <div className="border-l-4 border-l-red-500 pl-4">
                <h3 className="font-semibold text-red-800">Order to Show Cause</h3>
                <p className="text-sm text-gray-600">Requires you to appear and explain something to court</p>
                <p className="text-xs text-red-600 mt-1">Response deadline: Varies (often 10 days)</p>
              </div>
              
              <div className="border-l-4 border-l-gray-500 pl-4">
                <h3 className="font-semibold text-gray-800">Subpoena</h3>
                <p className="text-sm text-gray-600">Orders you to appear or produce documents</p>
                <p className="text-xs text-gray-600 mt-1">Must comply by date specified</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Response Process */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            📝 Step-by-Step Response Process
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-800 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Read Everything Carefully</h3>
                <ul className="space-y-1 text-sm text-gray-600 ml-4">
                  <li>• Review all documents you were served</li>
                  <li>• Identify what the other party is requesting</li>
                  <li>• Note all deadlines and court dates</li>
                  <li>• Check if there are temporary orders in effect</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-800 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Calculate Your Deadline</h3>
                <ul className="space-y-1 text-sm text-gray-600 ml-4">
                  <li>• Count days from day after service</li>
                  <li>• Include weekends and holidays</li>
                  <li>• Mark deadline on calendar</li>
                  <li>• Plan to file at least 2 days early</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-800 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Gather Required Information</h3>
                <ul className="space-y-1 text-sm text-gray-600 ml-4">
                  <li>• Case number (from petition)</li>
                  <li>• Full names and addresses of parties</li>
                  <li>• Information about children (if applicable)</li>
                  <li>• Financial information for support issues</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-800 font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Complete Response Forms</h3>
                <ul className="space-y-1 text-sm text-gray-600 ml-4">
                  <li>• Use official Arizona court forms</li>
                  <li>• Respond to each paragraph in petition</li>
                  <li>• State any counter-requests clearly</li>
                  <li>• Sign under penalty of perjury</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-800 font-bold text-sm">5</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">File with Court and Serve Other Party</h3>
                <ul className="space-y-1 text-sm text-gray-600 ml-4">
                  <li>• File original with court clerk</li>
                  <li>• Pay required filing fee</li>
                  <li>• Serve copy on other party or their attorney</li>
                  <li>• File proof of service with court</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What to Include in Your Response */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            ✍️ What to Include in Your Response
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Required Elements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Response to each numbered paragraph</li>
                  <li>• Admit, deny, or state lack of knowledge</li>
                  <li>• Your counter-requests (if any)</li>
                  <li>• Request for attorney fees (if applicable)</li>
                  <li>• Signature and verification</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Strategic Considerations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Don't admit more than necessary</li>
                  <li>• Assert all affirmative defenses</li>
                  <li>• Request what you want clearly</li>
                  <li>• Address custody and support specifically</li>
                  <li>• Consider mediation requests</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Sample Response Language</h3>
              <div className="text-sm space-y-2">
                <p><strong>Admit:</strong> "Respondent admits the allegations in paragraph [X]."</p>
                <p><strong>Deny:</strong> "Respondent denies the allegations in paragraph [X]."</p>
                <p><strong>Lack of knowledge:</strong> "Respondent lacks sufficient knowledge to admit or deny the allegations in paragraph [X] and therefore denies them."</p>
                <p><strong>Counter-request:</strong> "Respondent requests that the Court award [specific relief requested]."</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filing and Service Requirements */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-red-600" />
            ⚖️ Filing and Service Requirements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Filing with Court</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>File original signed response with court clerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Pay $274 response filing fee (fee waiver available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Get file-stamped copies for your records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Keep receipt showing date and time filed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Service on Other Party</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Serve copy on other party or their attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Use certified mail, sheriff service, or process server</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Complete proof of service form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>File proof of service with court</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes to Avoid */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            ⚠️ Common Mistakes to Avoid
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Missing the Deadline</p>
                  <p className="text-sm text-red-600">Results in default judgment against you</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Admitting Everything</p>
                  <p className="text-sm text-red-600">Don't admit allegations you can legitimately deny</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Failing to Counter-Request</p>
                  <p className="text-sm text-red-600">You may waive rights if you don't ask for what you want</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Improper Service</p>
                  <p className="text-sm text-red-600">Not serving the other party properly can void your response</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Using Wrong Forms</p>
                  <p className="text-sm text-red-600">Must use current official Arizona court forms</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Ignoring Financial Disclosure</p>
                  <p className="text-sm text-red-600">May be required to file financial affidavit with response</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When You Need More Time */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-600" />
            ⏱️ When You Need More Time
          </h2>
          
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Options for Extension</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Stipulated Extension</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Get agreement from other party</li>
                    <li>• File stipulation with court</li>
                    <li>• Usually limited to 30 additional days</li>
                    <li>• Must file before original deadline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Motion for Extension</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• File formal motion with court</li>
                    <li>• Show good cause for delay</li>
                    <li>• Pay motion filing fee</li>
                    <li>• Court may grant or deny</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="space-y-1 text-sm">
                <li>• Extensions are not automatic - you must request them</li>
                <li>• File extension request BEFORE your original deadline expires</li>
                <li>• Some judges are more liberal with extensions than others</li>
                <li>• Emergency cases may have no extensions available</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Help */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            🆘 Getting Help
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Self-Help Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-green-600" />
                    <span>Court self-help centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-green-600" />
                    <span>Online form completion programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-green-600" />
                    <span>Legal aid organizations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-green-600" />
                    <span>State Bar lawyer referral service</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">When to Hire an Attorney</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Complex property or business assets</li>
                  <li>• Disputed custody with abuse allegations</li>
                  <li>• High-conflict situations</li>
                  <li>• Significant support or spousal maintenance</li>
                  <li>• Other party has an attorney</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              Emergency Legal Help
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              If you're facing imminent default or have urgent questions:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• Call the court clerk's office immediately</li>
              <li>• Contact a family law attorney for emergency consultation</li>
              <li>• Visit the courthouse self-help center if available</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-green-600" />
            🎯 Next Steps After Filing Response
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
                <h3 className="font-semibold text-green-800 mb-2">Case Management</h3>
                <p className="text-sm text-gray-600">Attend required conferences and hearings</p>
                <Link href="/modules/first-appearance" className="text-green-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Temporary Orders</h3>
                <p className="text-sm text-gray-600">Request interim relief if needed</p>
                <Link href="/modules/temporary-orders" className="text-purple-600 text-xs hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Remember:</strong> Filing your response is just the beginning. Most family law cases involve ongoing court supervision, 
                required disclosures, and multiple hearings before final resolution. Stay organized and keep track of all deadlines.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}