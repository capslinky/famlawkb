/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Calculator, Info, FileText, AlertTriangle, HelpCircle, BookOpen, Scale, DollarSign, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ChildSupportCalculator from '@/components/calculators/ChildSupportCalculator';

export const metadata = {
  title: 'Child Support Calculator - Arizona Income Shares Model',
  description: 'Interactive child support calculator for Arizona. Calculate estimated support payments based on Arizona Income Shares Model guidelines with parenting time adjustments.',
  keywords: 'Arizona child support calculator, income shares model, child support guidelines, parenting time, support calculation'
};

export default function ChildSupportCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Child Support Calculator</h1>
              <p className="text-blue-100">Arizona Income Shares Model - Interactive Calculator</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction Section */}
          <section aria-labelledby="introduction-heading" className="mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 id="introduction-heading" className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Understanding Arizona Child Support Calculations
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Arizona uses the Income Shares Model to calculate child support, which is based on the principle that children should receive the same proportion of parental income that they would have received if the parents lived together. This calculator helps you estimate monthly child support obligations based on current Arizona guidelines.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold">Income-Based</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Support amounts are primarily determined by both parents' combined gross monthly income and their proportional shares.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold">Child-Centered</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        The number of children and their specific needs (healthcare, childcare) are factored into the calculation.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <h3 className="font-semibold">Time Adjusted</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Parenting time (overnights per year) can affect the final support amount, especially with 40%+ time.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* Important Disclaimers */}
          <Card className="mb-8 border-2 border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-amber-900 mb-3">Important Information</h2>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
                    <div>
                      <h3 className="font-semibold mb-2">This Calculator Provides:</h3>
                      <ul className="space-y-1">
                        <li>• Estimates based on Arizona Income Shares Model</li>
                        <li>• Simplified calculation for educational purposes</li>
                        <li>• Approximate monthly support amounts</li>
                        <li>• Parenting time adjustment factors</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Remember:</h3>
                      <ul className="space-y-1">
                        <li>• Court orders may differ from these estimates</li>
                        <li>• Judges can deviate based on circumstances</li>
                        <li>• Professional legal advice is recommended</li>
                        <li>• All support must be court-approved to be binding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content - Interactive Calculator */}
          <section aria-labelledby="calculator-heading" className="mb-8">
            <h2 id="calculator-heading" className="sr-only">Interactive Child Support Calculator</h2>
            <ChildSupportCalculator />
          </section>

          {/* How to Use This Calculator */}
          <section aria-labelledby="how-to-use-heading" className="mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 id="how-to-use-heading" className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  How to Use This Calculator
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Step-by-Step Instructions:</h3>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</span>
                        <div>
                          <strong>Enter Gross Monthly Income:</strong> Include all income before taxes from all sources (wages, self-employment, benefits, etc.)
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</span>
                        <div>
                          <strong>Add Parenting Days:</strong> Count the number of overnight stays each parent has per year (365 total days)
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</span>
                        <div>
                          <strong>Include Additional Costs:</strong> Add health insurance premiums and childcare expenses
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">4</span>
                        <div>
                          <strong>Calculate & Review:</strong> Click calculate to see estimated support amounts with detailed breakdown
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Important Income Considerations:</h3>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-1">Include These Income Sources:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Wages, salaries, and tips</li>
                          <li>• Self-employment income</li>
                          <li>• Social Security benefits</li>
                          <li>• Workers' compensation</li>
                          <li>• Unemployment benefits</li>
                          <li>• Regular overtime and bonuses</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <h4 className="font-medium mb-1">Do NOT Include:</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Child support received for other children</li>
                          <li>• Public assistance (TANF, SNAP)</li>
                          <li>• Child's earnings or benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Understanding Your Results */}
          <section aria-labelledby="results-guide-heading" className="mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 id="results-guide-heading" className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-600" />
                  Understanding Your Results
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">What the Numbers Mean:</h3>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">Basic Support Amount</dt>
                        <dd className="text-gray-600 mt-1">The guideline amount from Arizona's support schedule based on combined income and number of children</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Income Share Percentage</dt>
                        <dd className="text-gray-600 mt-1">Each parent's proportion of the combined income, determining their share of support obligation</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Parenting Time Adjustment</dt>
                        <dd className="text-gray-600 mt-1">Reduction applied when a parent has 40% or more parenting time (146+ overnights)</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Final Support Amount</dt>
                        <dd className="text-gray-600 mt-1">The estimated monthly payment from one parent to the other after all adjustments</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Common Adjustment Factors:</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium mb-1 text-blue-900">May Increase Support:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• High childcare costs</li>
                          <li>• Expensive health insurance</li>
                          <li>• Special needs expenses</li>
                          <li>• Educational expenses</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium mb-1 text-green-900">May Decrease Support:</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Significant parenting time (40%+)</li>
                          <li>• Other child support obligations</li>
                          <li>• Extreme economic hardship</li>
                          <li>• Older children (12+ years)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Arizona Guidelines</h3>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    Arizona uses the Income Shares Model, which assumes that children should receive the same proportion of parental income they would have received if the parents lived together.
                  </p>
                  <p>
                    The guidelines were last updated in 2022 and are based on economic studies of child-rearing costs.
                  </p>
                  <p>
                    Courts may deviate from guidelines when it would be inappropriate or unjust to apply them.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Next Steps</h3>
                </div>
                <div className="space-y-3">
                  <Link href="/topics/child-support" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Complete Child Support Guide</div>
                    <div className="text-sm text-gray-600">Comprehensive information about Arizona child support</div>
                  </Link>
                  <Link href="/modules/disclosures" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Financial Disclosures</div>
                    <div className="text-sm text-gray-600">Required financial information exchange</div>
                  </Link>
                  <Link href="/support-modification/child-support" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">Modify Child Support</div>
                    <div className="text-sm text-gray-600">How to change existing support orders</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps Section */}
          <section aria-labelledby="next-steps-heading" className="mb-8">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h2 id="next-steps-heading" className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Next Steps After Calculating
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">If You're Filing for Support:</h3>
                    <ol className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">1.</span>
                        <div>
                          <strong>Gather Financial Documents:</strong> Collect pay stubs, tax returns, and proof of expenses for the last 12 months
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">2.</span>
                        <div>
                          <strong>Complete Official Worksheet:</strong> Use the court's official Child Support Worksheet (available at court or online)
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">3.</span>
                        <div>
                          <strong>File Your Petition:</strong> Submit the appropriate forms to establish or modify child support
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">4.</span>
                        <div>
                          <strong>Attend Court Hearing:</strong> Present your worksheet and supporting documentation to the judge
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">If You're Responding to a Request:</h3>
                    <ol className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-purple-600">1.</span>
                        <div>
                          <strong>Review the Petition:</strong> Carefully examine the other parent's calculations and claimed amounts
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">2.</span>
                        <div>
                          <strong>Prepare Your Own Worksheet:</strong> Complete your version with accurate income and expense information
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">3.</span>
                        <div>
                          <strong>File Your Response:</strong> Submit within the deadline (typically 20-30 days)
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600">4.</span>
                        <div>
                          <strong>Consider Mediation:</strong> Many disputes can be resolved through mediation before trial
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Quick Action Items:</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    <Link href="/forms">
                      <Button variant="outline" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Get Court Forms
                      </Button>
                    </Link>
                    <Link href="/modules/disclosures">
                      <Button variant="outline" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Financial Disclosures
                      </Button>
                    </Link>
                    <Link href="/resources/legal-representation">
                      <Button variant="outline" className="w-full">
                        <Scale className="w-4 h-4 mr-2" />
                        Find Legal Help
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Official Resources */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Official Arizona Resources</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Arizona Courts</h4>
                  <p className="text-gray-600 mb-2">Official child support worksheets and guidelines</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Official Worksheet
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legal Aid</h4>
                  <p className="text-gray-600 mb-2">Free legal assistance for qualifying individuals</p>
                  <Link href="/resources/legal-representation">
                    <Button variant="outline" size="sm" className="w-full">
                      Find Legal Help
                    </Button>
                  </Link>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Self-Help Centers</h4>
                  <p className="text-gray-600 mb-2">Court assistance for self-represented parties</p>
                  <Link href="/resources/self-representation-guide">
                    <Button variant="outline" size="sm" className="w-full">
                      Self-Help Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}