import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Shield, Gavel, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Responding to Emergency Protection Order - Arizona',
  description: 'What to do if you have been served with an emergency order of protection or injunction. Understanding your rights and required actions.',
};

// Temporarily disable static generation to troubleshoot build issues
export const dynamic = 'force-dynamic';

export default function RespondingEmergencyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Responding to Emergency Order</h1>
              <p className="text-red-100">Immediate actions required when served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/get-protection" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Protection Orders
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">You Must Comply Immediately</h2>
                <p className="text-red-800">An emergency order is effective immediately upon service. Violating it is a crime that can result in arrest.</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2>Understanding Emergency Orders</h2>
            <p>Emergency orders of protection are issued without a hearing when a judge believes there is immediate danger. They are temporary but legally binding.</p>

            <h3>Immediate Requirements</h3>
            <ul>
              <li>Leave the protected address immediately if ordered</li>
              <li>Have no contact with protected persons</li>
              <li>Surrender firearms if required</li>
              <li>Stay away from specified locations</li>
            </ul>

            <h3>Your Rights</h3>
            <ul>
              <li>Request a hearing within 10 days</li>
              <li>Be represented by an attorney</li>
              <li>Present evidence and witnesses</li>
              <li>Cross-examine the petitioner</li>
            </ul>

            <h3>Next Steps</h3>
            <ol>
              <li>Read the order carefully</li>
              <li>Note the hearing date</li>
              <li>Contact an attorney immediately</li>
              <li>Begin gathering evidence</li>
              <li>Request a hearing if none is scheduled</li>
            </ol>
          </div>

          <div className="mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2">Service</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Order is enforceable only after service</li>
                  <li>• Law enforcement can serve at no cost</li>
                  <li>• Keep your copy with you at all times</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2">Hearing</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• You can request a hearing promptly</li>
                  <li>• Bring witnesses, messages, photos, reports</li>
                  <li>• Ask for more time if you get short notice</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-4 text-sm">
                <h4 className="font-semibold mb-2">Important</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Violations can result in arrest</li>
                  <li>• Firearm restrictions may apply</li>
                  <li>• Consider Address Confidentiality Program</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Important Resources</h3>
            <div className="space-y-3">
              <Link href="/resources/legal-representation">
                <Button className="w-full">
                  <Gavel className="w-4 h-4 mr-2" />
                  Find Legal Help
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Legal Aid: 1-866-637-5341
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
