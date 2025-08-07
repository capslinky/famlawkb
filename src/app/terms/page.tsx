/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Scale, FileText, AlertTriangle, Shield, CheckCircle, XCircle, Info, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Terms of Service - Arizona Family Law Knowledge Base',
  description: 'Terms of Service for using the Arizona Family Law Knowledge Base website and resources.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 2025';
  const effectiveDate = 'January 2025';

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Terms of Service</h1>
              <p className="text-indigo-100">Please read these terms carefully before using our service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Terms of Service</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Critical Legal Notice */}
          <Card className="mb-8 border-2 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-red-900 mb-2">IMPORTANT LEGAL NOTICE</h2>
                  <div className="space-y-3 text-red-800">
                    <p className="font-semibold">
                      THIS WEBSITE DOES NOT PROVIDE LEGAL ADVICE
                    </p>
                    <p>
                      The Arizona Family Law Knowledge Base is an educational and informational resource only. The information provided on this website is not intended to be, and should not be construed as, legal advice. No attorney-client relationship is formed through the use of this website.
                    </p>
                    <p>
                      For legal advice specific to your situation, please consult with a licensed Arizona attorney.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-200 text-sm text-red-700">
                    <p><strong>Effective Date:</strong> {effectiveDate}</p>
                    <p><strong>Last Updated:</strong> {lastUpdated}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement to Terms */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  By accessing or using the Arizona Family Law Knowledge Base website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Use of Service */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">2. Permitted Use of Service</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  The Service is provided for educational and informational purposes related to Arizona family law. You may use the Service to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access general information about Arizona family law procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use calculators and tools for educational estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Learn about court procedures and requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Access links to official court forms and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Understand your rights and responsibilities in family law matters</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Uses */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-semibold">3. Prohibited Uses</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  You agree NOT to use the Service:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>As a substitute for legal advice from a qualified attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>To make legal decisions without consulting an attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>In any way that violates any applicable federal, state, local, or international law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>To transmit any malicious code, viruses, or harmful content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>To attempt unauthorized access to any portion of the Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>To scrape, harvest, or collect data from the Service without permission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>To impersonate any person or entity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>In any way that could damage, disable, or impair the Service</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="mb-6 border-2 border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-semibold">4. Disclaimers and Limitations</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">No Legal Advice</h3>
                  <p>
                    The information provided on this website is for general informational purposes only and is not legal advice. Laws change frequently, and the information may not be current or applicable to your specific situation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">No Attorney-Client Relationship</h3>
                  <p>
                    Use of this website does not create an attorney-client relationship. Such a relationship can only be established through a written agreement with a licensed attorney.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">No Guarantee of Accuracy</h3>
                  <p>
                    While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">"As Is" Basis</h3>
                  <p>
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">5. Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of the Arizona Family Law Knowledge Base and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written permission.
                </p>
                <p>
                  You may print or download portions of the materials for personal, non-commercial use, provided you maintain all copyright and other proprietary notices.
                </p>
                <p>
                  Court forms and government documents linked from this site are in the public domain and not subject to our copyright.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Content */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">6. User-Generated Content</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  If you provide feedback, suggestions, or other communications to us, you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free license to use such content for any purpose.
                </p>
                <p>
                  You represent and warrant that you own or have the necessary rights to any content you provide and that such content does not infringe any third-party rights.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">7. Privacy</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  Your use of the Service is also governed by our Privacy Policy. Please review our{' '}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and protect your information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="mb-6 border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <p>
                  In no event shall the Arizona Family Law Knowledge Base, its operators, or its suppliers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Your use or inability to use the Service</li>
                  <li>• Any errors or omissions in any content</li>
                  <li>• Any legal decisions or actions taken based on information from this website</li>
                  <li>• Any unauthorized access to or use of our servers</li>
                  <li>• Any interruption or cessation of transmission to or from the Service</li>
                </ul>
                <p className="font-semibold mt-3">
                  You acknowledge that the information provided is general in nature and may not apply to your specific circumstances. Always consult with a qualified attorney before making legal decisions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">9. Indemnification</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  You agree to defend, indemnify, and hold harmless the Arizona Family Law Knowledge Base and its operators from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">10. External Links</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such third-party content or services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">11. Termination</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">12. Governing Law and Jurisdiction</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Maricopa County, Arizona, and you hereby consent to personal jurisdiction and venue therein.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">13. Severability</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">14. Changes to Terms</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide notice on the website homepage.
                </p>
                <p>
                  Your continued use of the Service after any changes become effective constitutes acceptance of the revised Terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">15. Contact Information</h2>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">Arizona Family Law Knowledge Base</p>
                  <p>Email: legal@azfamilylaw.info</p>
                  <p>Response Time: Within 48 business hours</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mt-4">
                  <p className="text-sm text-blue-800">
                    <strong>Remember:</strong> For legal advice specific to your situation, please consult with a qualified Arizona family law attorney. The State Bar of Arizona can help you find licensed attorneys in your area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}