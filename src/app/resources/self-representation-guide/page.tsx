import Link from 'next/link';
import { ArrowLeft, Scale, FileText, Users, AlertCircle, CheckCircle, BookOpen, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Self-Representation Guide - Arizona Family Court',
  description: 'Complete guide to representing yourself in Arizona family court. Tips, strategies, and what to expect.',
};

export default function SelfRepresentationGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Self-Representation Guide</h1>
              <p className="text-purple-100">How to effectively represent yourself in family court</p>
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
          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-2">
                  You Have the Right to Represent Yourself
                </h2>
                <p className="text-purple-800 mb-3">
                  While attorneys can be helpful, you have the constitutional right to represent 
                  yourself (called "pro se" or "pro per" representation). This guide will help 
                  you navigate the process effectively.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-900">
                    Remember: You're held to the same standards as attorneys. The court cannot 
                    give you legal advice or special treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Before You Decide to Self-Represent</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Good Candidates for Self-Representation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Uncontested cases with agreements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Simple modifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Clear-cut temporary orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Good organizational skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Time to prepare thoroughly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-900">Consider an Attorney If</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Complex property division</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Allegations of abuse/neglect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Business ownership issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Other party has attorney</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>International custody issues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Essential Skills for Self-Representation</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">1. Organization is Critical</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Create a case binder with tabs for different documents</li>
                    <li>• Keep a calendar of all deadlines and hearings</li>
                    <li>• Make copies of everything (original, court, other party, you)</li>
                    <li>• Take notes during all interactions</li>
                    <li>• Create a timeline of important events</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">2. Learn Court Procedures</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Read the Arizona Rules of Family Law Procedure</li>
                    <li>• Understand filing requirements and deadlines</li>
                    <li>• Know how to properly serve documents</li>
                    <li>• Learn evidence rules basics</li>
                    <li>• Practice court etiquette</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">3. Effective Communication</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Always be respectful to judge and court staff</li>
                    <li>• Stick to facts, not emotions</li>
                    <li>• Be concise and organized in presentations</li>
                    <li>• Listen carefully to judge's questions</li>
                    <li>• Never interrupt anyone in court</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Preparing Your Case</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Document Preparation</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Forms and Pleadings:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Use official court forms when available</li>
                        <li>• Type or print legibly in black ink</li>
                        <li>• Double-check all information</li>
                        <li>• Sign where required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Supporting Documents:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Financial records (organized by date)</li>
                        <li>• Communication logs</li>
                        <li>• Photos or other evidence</li>
                        <li>• Witness affidavits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Evidence Rules to Know</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Relevance:</strong> Evidence must relate to the issues</li>
                    <li>• <strong>Foundation:</strong> Establish what, when, where, who</li>
                    <li>• <strong>Hearsay:</strong> Generally can't repeat what others said</li>
                    <li>• <strong>Authentication:</strong> Prove documents are real</li>
                    <li>• <strong>Best Evidence:</strong> Use originals when possible</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">In the Courtroom</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Gavel className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-3">Court Etiquette</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Arrive early (30 minutes)</li>
                    <li>• Dress professionally</li>
                    <li>• Turn off phone completely</li>
                    <li>• Stand when speaking</li>
                    <li>• Address judge as "Your Honor"</li>
                    <li>• Wait your turn to speak</li>
                    <li>• Remain calm and respectful</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Presenting Your Case</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Start with brief overview</li>
                    <li>• Present chronologically</li>
                    <li>• Reference exhibits clearly</li>
                    <li>• Stick to relevant facts</li>
                    <li>• Answer questions directly</li>
                    <li>• Admit when you don't know</li>
                    <li>• Summarize key points</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Common Self-Representation Mistakes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Missing deadlines (calendar everything!)</li>
                  <li>• Failing to serve documents properly</li>
                  <li>• Bringing up irrelevant personal issues</li>
                  <li>• Not following court orders exactly</li>
                  <li>• Arguing with the judge</li>
                  <li>• Not preparing witnesses properly</li>
                  <li>• Forgetting to bring evidence copies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Resources for Self-Represented Parties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-3">Free Help Available</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Court self-help centers</li>
                    <li>• Law library resources</li>
                    <li>• Legal aid clinics</li>
                    <li>• Court forms assistance</li>
                    <li>• Volunteer lawyer programs</li>
                  </ul>
                  <Link href="/resources/self-help-centers">
                    <Button className="w-full mt-4" size="sm">
                      Find Help Centers
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-3">Educational Materials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Court procedure videos</li>
                    <li>• Sample forms and pleadings</li>
                    <li>• Legal research guides</li>
                    <li>• Courtroom observation</li>
                    <li>• Online tutorials</li>
                  </ul>
                  <Link href="/resources/court-preparation">
                    <Button className="w-full mt-4" size="sm">
                      Court Prep Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Final Tips for Success</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Do:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Be over-prepared</li>
                  <li>✓ Follow all rules exactly</li>
                  <li>✓ Keep emotions in check</li>
                  <li>✓ Focus on children's best interests</li>
                  <li>✓ Document everything</li>
                  <li>✓ Ask for clarification when needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Don't:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✗ Wing it in court</li>
                  <li>✗ Interrupt anyone</li>
                  <li>✗ Make personal attacks</li>
                  <li>✗ Ignore court orders</li>
                  <li>✗ Miss deadlines</li>
                  <li>✗ Give legal advice to others</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Remember: While self-representation is your right, complex cases often benefit 
              from professional legal assistance. Consider at least consulting with an attorney.
            </p>
            <Link href="/resources/legal-representation">
              <Button>
                Explore Legal Help Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}