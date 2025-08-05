import Link from 'next/link';
import { AlertTriangle, Home, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-xl text-gray-600">
            We couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6 text-center">
              The page may have been moved, deleted, or you may have typed the address incorrectly. 
              Let&apos;s help you find what you need.
            </p>
            
            <div className="space-y-4">
              <Link href="/" className="block">
                <Button className="w-full" size="lg">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              
              <Link href="/assessment" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Take Assessment
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Popular Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/getting-divorced" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Getting Divorced
                  </Link>
                </li>
                <li>
                  <Link href="/child-custody" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Child Custody
                  </Link>
                </li>
                <li>
                  <Link href="/forms" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Court Forms
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Resources & Tools
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/emergency-help" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Emergency Resources
                  </Link>
                </li>
                <li>
                  <Link href="/resources/legal-representation" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Find Legal Help
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Court Self-Help
                  </Link>
                </li>
                <li>
                  <Link href="/get-protection" className="text-blue-600 hover:text-blue-800 text-sm">
                    → Protection Orders
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-2">Still can&apos;t find what you&apos;re looking for?</p>
          <p className="text-sm">
            Try using the search bar at the top of the page or contact the court for assistance.
          </p>
        </div>
      </div>
    </main>
  );
}