import Link from 'next/link';
import { ArrowLeft, Calculator, Calendar, FileText, Users, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TimelineBuilder from '@/components/tools/TimelineBuilder';
import DocumentChecklist from '@/components/tools/DocumentChecklist';
import ParentingPlanBuilder from '@/components/tools/ParentingPlanBuilder';
import DeadlineCalculator from '@/components/tools/DeadlineCalculator';
import CostEstimator from '@/components/tools/CostEstimator';

export const metadata = {
  title: 'Legal Tools - Arizona Family Law',
  description: 'Interactive tools and calculators for Arizona family law cases including timeline builders, document checklists, and cost estimators.',
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Legal Tools & Calculators</h1>
              <p className="text-primary-100 mt-1">Interactive tools to manage your family law case</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Quick Access Tools Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link href="/support/calculator">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Child Support Calculator</h3>
                    <p className="text-sm text-gray-600">Arizona guidelines</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Calculate estimated child support payments using Arizona Income Shares Model
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="#parenting-plan">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Parenting Plan Builder</h3>
                    <p className="text-sm text-gray-600">Now Available</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Create comprehensive parenting plans with schedules and decision-making
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="#cost-estimator">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Cost Estimator</h3>
                    <p className="text-sm text-gray-600">Now Available</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Estimate legal fees and court costs for your specific case type
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Timeline Builder */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Interactive Timeline Builder</h2>
            <p className="text-gray-600">
              Track important dates, deadlines, and milestones in your legal case. 
              Choose from templates or create a custom timeline.
            </p>
          </div>
          <TimelineBuilder />
        </div>

        {/* Document Checklist */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Document Checklist Generator</h2>
            <p className="text-gray-600">
              Ensure you have all necessary documents for your case. 
              Select a template based on your case type or create a custom checklist.
            </p>
          </div>
          <DocumentChecklist />
        </div>

        {/* Parenting Plan Builder */}
        <div id="parenting-plan" className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Parenting Plan Builder</h2>
            <p className="text-gray-600">
              Build a comprehensive parenting plan with custody schedules, decision-making arrangements, 
              and financial responsibilities. Export your plan for court submission.
            </p>
          </div>
          <ParentingPlanBuilder />
        </div>

        {/* Deadline Calculator */}
        <div id="deadline-calculator" className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Legal Deadline Calculator</h2>
            <p className="text-gray-600">
              Calculate important legal deadlines based on Arizona court rules. 
              Accounts for business days, weekends, and court holidays.
            </p>
          </div>
          <DeadlineCalculator />
        </div>

        {/* Cost Estimator */}
        <div id="cost-estimator" className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Legal Cost Estimator</h2>
            <p className="text-gray-600">
              Estimate court costs, attorney fees, and additional expenses for your case. 
              Get a realistic budget range based on case complexity.
            </p>
          </div>
          <CostEstimator />
        </div>

        {/* Additional Tools Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">More Tools Coming Soon</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Sprint 2 Tools (Completed!)</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>✅ Parenting Plan Builder - Create detailed custody schedules</li>
                  <li>✅ Deadline Calculator - Never miss a court deadline</li>
                  <li>✅ Cost Estimation Tool - Budget for your legal proceedings</li>
                  <li>✅ Timeline Builder - Track case milestones</li>
                  <li>✅ Document Checklist - Organize required documents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Future Tools</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Property Division Analyzer</li>
                  <li>• Spousal Maintenance Calculator</li>
                  <li>• Settlement Agreement Builder</li>
                  <li>• Evidence Organizer</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
