import Link from 'next/link';
import { ArrowLeft, Phone, Shield, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Get Protection - Orders of Protection & Safety Resources',
  description: 'How to get an Order of Protection in Arizona and resources for domestic violence victims.',
};

export default function GetProtectionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Get Protection</h1>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold mb-2">If You Are in Immediate Danger</h2>
                <p className="font-semibold text-red-900 mb-2">Call 911 immediately</p>
                <p className="text-gray-700 mb-2">National Domestic Violence Hotline: 
                  <a href="tel:1-800-799-7233" className="font-semibold"> 1-800-799-7233</a>
                </p>
                <p className="text-gray-700">Available 24/7 • Confidential • Multiple languages</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Order of Protection</h3>
                <p className="text-gray-600 mb-4">
                  Get a court order to protect you from harassment, threats, or violence.
                </p>
                <div className="space-y-2">
                  <Link href="/protection/how-to-file">
                    <Button className="w-full">How to File</Button>
                  </Link>
                  <Link href="/forms">
                    <Button variant="outline" className="w-full">Get Forms</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Injunction Types</h3>
                <p className="text-gray-600 mb-4">
                  Arizona offers different types of protective orders.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Order of Protection (domestic)</li>
                  <li>• Injunction Against Harassment</li>
                  <li>• Injunction Against Workplace Harassment</li>
                </ul>
                <Link href="/protection/types">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Emergency Orders</h3>
                <p className="text-gray-600 mb-4">
                  Get same-day protection through emergency orders.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Available after court hours</li>
                  <li>• Through law enforcement</li>
                  <li>• Valid until next court day</li>
                </ul>
                <Link href="/protection/emergency">
                  <Button variant="outline">Emergency Process</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Safety Resources</h3>
                <p className="text-gray-600 mb-4">
                  Shelters, counseling, and support services in Arizona.
                </p>
                <Link href="/resources">
                  <Button variant="outline">Find Resources</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">What You Need for an Order of Protection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Specific acts of domestic violence or threats</li>
                <li>✓ Dates and details of incidents</li>
                <li>✓ Relationship to the person (family, romantic, household)</li>
                <li>✓ Any evidence (photos, texts, medical records)</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Safety Planning</h3>
              <p className="text-gray-700 mb-3">
                Even with a protective order, having a safety plan is crucial.
              </p>
              <div className="space-y-2">
                <Link href="/protection/safety-plan">
                  <Button>Create Safety Plan</Button>
                </Link>
                <Link href="/assessment" className="block">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Get Personalized Help
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
            <p>
              <strong>Remember:</strong> You are not alone. Help is available 24/7. 
              Documentation and evidence are helpful but not required to seek protection.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}