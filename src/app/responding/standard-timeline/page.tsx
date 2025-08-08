import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Standard Response Timeline - 10-20 Days - Arizona',
  description: 'How to respond to legal papers when you have 10-20 days remaining. Standard timeline guidance for Arizona.',
};

export default function StandardTimelinePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Standard Response Timeline</h1>
              <p className="text-orange-100">You have time to prepare a proper response</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/modules/responding" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Responding Overview
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-orange-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">
                  You Have 10-20 Days Remaining
                </h2>
                <p className="text-orange-800 mb-3">
                  This is the ideal timeframe to prepare a thorough response and potentially seek legal advice.
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h3 className="font-semibold mb-2">Your Response Deadline:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="font-semibold">In-State Service:</span> 20 days from service date</li>
                    <li>• <span className="font-semibold">Out-of-State Service:</span> 30 days from service date</li>
                    <li>• <span className="font-semibold">Weekend/Holiday:</span> Extended to next business day</li>
                    <li>• <span className="font-semibold">Start Count:</span> The day after you were served</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Time Available</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">10-20 Days</p>
                <p className="text-gray-600 text-sm">
                  Sufficient time for careful preparation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Opportunity</h3>
                <p className="text-green-600 font-semibold mb-2">Good Position</p>
                <p className="text-gray-600 text-sm">
                  Time to consult attorney and plan strategy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Preparation</h3>
                <p className="text-purple-600 font-semibold mb-2">Thorough</p>
                <p className="text-gray-600 text-sm">
                  Can gather documents and evidence
                </p>
              </CardContent>
            </Card>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Week-by-Week Action Plan</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Week 1: Understand & Organize</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Days 1-3: Review and Understand</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Read all served documents carefully</li>
                        <li>• Identify the type of case and claims made</li>
                        <li>• Note all deadlines and hearing dates</li>
                        <li>• Research your rights and options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Days 4-7: Seek Professional Help</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Schedule attorney consultations</li>
                        <li>• Contact legal aid if income-eligible</li>
                        <li>• Attend court self-help center</li>
                        <li>• Gather initial documents</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Week 2: Prepare Your Response</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Days 8-10: Gather Evidence</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Collect financial documents</li>
                        <li>• Organize property records</li>
                        <li>• Document parenting involvement</li>
                        <li>• Prepare timeline of events</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Days 11-14: Draft Response</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Complete response forms</li>
                        <li>• Write clear, factual responses</li>
                        <li>• Address each allegation</li>
                        <li>• Include your requests/counterclaims</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-purple-900">Final Days: Review & File</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">3 Days Before Deadline:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Final review of all documents</li>
                        <li>• Make copies (original + 2)</li>
                        <li>• Prepare filing fee or fee waiver</li>
                        <li>• Plan trip to courthouse</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">File with Time to Spare:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• File at least 2 days before deadline</li>
                        <li>• Get file-stamped copies</li>
                        <li>• Mail copy to other party</li>
                        <li>• Keep proof of mailing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Types of Responses</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Response to Petition</h3>
                  <p className="text-gray-600 mb-3">
                    For divorce, custody, or support petitions:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Admit or deny each allegation</li>
                    <li>• State your position on requests</li>
                    <li>• Include your own requests</li>
                    <li>• Can file counterpetition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Response to Motion</h3>
                  <p className="text-gray-600 mb-3">
                    For requests to change orders or procedures:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Address legal arguments</li>
                    <li>• Provide supporting facts</li>
                    <li>• Include relevant case law</li>
                    <li>• Request oral argument if needed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">Strategic Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Do&apos;s:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Be honest and factual</li>
                  <li>✓ Address every allegation</li>
                  <li>✓ Include supporting documents</li>
                  <li>✓ Keep emotions out of response</li>
                  <li>✓ Consider negotiation opportunities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Don&apos;ts:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Make false statements</li>
                  <li>✗ Include irrelevant information</li>
                  <li>✗ Attack other party personally</li>
                  <li>✗ Wait until last minute</li>
                  <li>✗ File incomplete documents</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Important Reminders</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Court clerks cannot give legal advice</li>
                  <li>• Filing a response doesn&apos;t mean you agree with allegations</li>
                  <li>• You can amend your response later with court permission</li>
                  <li>• Consider if you have claims against the other party</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Service & Hearing Basics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Service Rules</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Serve your response on the other party</li>
                    <li>• Mail or e-service if allowed by rule or order</li>
                    <li>• Keep proof of mailing/service</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Hearings</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Court may set conferences or hearings</li>
                    <li>• Bring organized exhibits and a timeline</li>
                    <li>• Consider temporary orders if urgent</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">After You File</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Calendar all deadlines</li>
                    <li>• Begin initial disclosures within 40 days</li>
                    <li>• Explore mediation and settlement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Resources & Next Steps</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/forms">
                <Button className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Response Forms
                </Button>
              </Link>
              <Link href="/resources/self-representation-guide">
                <Button variant="outline" className="w-full">
                  Self-Representation Guide
                </Button>
              </Link>
              <Link href="/resources/legal-representation">
                <Button variant="outline" className="w-full">
                  Find an Attorney
                </Button>
              </Link>
              <Link href="/modules/disclosures">
                <Button variant="outline" className="w-full">
                  Prepare for Disclosures
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
