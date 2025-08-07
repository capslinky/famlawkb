/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Globe, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy - Arizona Family Law Knowledge Base',
  description: 'Privacy policy for the Arizona Family Law Knowledge Base. Learn how we protect your information and respect your privacy.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2025';
  const effectiveDate = 'January 2025';

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
              <p className="text-blue-100">Your privacy is important to us</p>
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
            <span className="text-gray-600">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Important Notice */}
          <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">Our Commitment to Privacy</h2>
                  <p className="text-blue-800">
                    The Arizona Family Law Knowledge Base is committed to protecting your privacy. This website is designed as an informational resource and does not collect, store, or share personal information unless explicitly provided by you.
                  </p>
                  <div className="mt-3 text-sm text-blue-700">
                    <p><strong>Effective Date:</strong> {effectiveDate}</p>
                    <p><strong>Last Updated:</strong> {lastUpdated}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Information You Provide</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Form Data:</strong> Information entered into calculators and assessment tools is processed locally in your browser and is not transmitted to our servers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Contact Information:</strong> If you choose to contact us for support, we may collect your email address and name solely for responding to your inquiry.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Feedback:</strong> Any feedback or suggestions you provide to improve our service.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Analytics Data:</strong> We may use privacy-focused analytics tools to understand general usage patterns, including pages visited, time spent on site, and general geographic location (country/state level only).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Technical Data:</strong> Browser type, device type, screen resolution, and operating system for compatibility and optimization purposes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Error Reports:</strong> Technical error information to help us identify and fix issues with the website.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">How We Use Information</h2>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-700">We use the limited information we collect to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Provide and maintain the Arizona Family Law Knowledge Base website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Improve user experience and website functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Respond to user inquiries and support requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Analyze general usage patterns to improve content and features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Ensure website security and prevent abuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Storage and Security */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Data Storage and Security</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Local Storage</h3>
                  <p className="text-gray-700 mb-2">
                    Most data you enter on this website (calculator inputs, form responses, assessment answers) is processed and stored locally in your browser using localStorage or sessionStorage. This means:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Data remains on your device</li>
                    <li>• We cannot access this information</li>
                    <li>• You can clear this data at any time through your browser settings</li>
                    <li>• Data persists only for your convenience between sessions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Security Measures</h3>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational measures to protect any information we do collect, including:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4 mt-2">
                    <li>• SSL/TLS encryption for all data transmission</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Limited access to any collected information</li>
                    <li>• Regular security assessments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  We use minimal cookies and similar technologies to enhance your experience:
                </p>
                
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    Required for the website to function properly, including:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4 mt-2">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Preference settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Analytics Cookies (Optional)</h3>
                  <p className="text-gray-700">
                    If implemented, we use privacy-focused analytics that:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4 mt-2">
                    <li>• Do not track individual users</li>
                    <li>• Do not use personal identifiers</li>
                    <li>• Respect "Do Not Track" browser settings</li>
                    <li>• Can be disabled through browser settings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Third-Party Services and Links</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  This website may contain links to external resources, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Arizona court websites</li>
                  <li>• Legal aid organizations</li>
                  <li>• Government resources</li>
                  <li>• Educational materials</li>
                </ul>
                
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-amber-800">
                      <p className="font-semibold mb-1">External Links Notice</p>
                      <p>
                        We are not responsible for the privacy practices of external websites. We encourage you to review the privacy policies of any third-party sites you visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Your Privacy Rights</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">You have the right to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Access:</strong> Request information about what data we have collected about you (if any)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Correction:</strong> Request correction of any inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Deletion:</strong> Request deletion of your information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Opt-out:</strong> Opt-out of any analytics or tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Data Portability:</strong> Receive your data in a portable format</span>
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">California Privacy Rights</h3>
                  <p className="text-sm text-gray-700">
                    California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, used, shared, or sold.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Children's Privacy</h2>
              </div>
              
              <p className="text-gray-700">
                This website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Updates to Privacy Policy */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Updates to This Privacy Policy</h2>
              </div>
              
              <p className="text-gray-700 mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• Posting the updated policy on this page</li>
                <li>• Updating the "Last Updated" date</li>
                <li>• Providing notice on the website homepage</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We encourage you to review this Privacy Policy periodically.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Contact Us</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Arizona Family Law Knowledge Base</p>
                <p className="text-gray-700">Email: privacy@azfamilylaw.info</p>
                <p className="text-gray-700">Response Time: Within 48 business hours</p>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                For legal matters or specific case questions, please consult with a qualified Arizona family law attorney.
              </p>
            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Legal Compliance</h2>
              </div>
              
              <p className="text-gray-700 mb-3">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• General Data Protection Regulation (GDPR) for EU visitors</li>
                <li>• California Consumer Privacy Act (CCPA)</li>
                <li>• California Online Privacy Protection Act (CalOPPA)</li>
                <li>• Children's Online Privacy Protection Act (COPPA)</li>
                <li>• Other applicable privacy laws and regulations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}