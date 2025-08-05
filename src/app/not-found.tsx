import Link from 'next/link';
import { AlertTriangle, Home, HelpCircle } from 'lucide-react';

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

        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <p className="text-gray-700 mb-6 text-center">
            The page you requested may have been moved or doesn&apos;t exist. 
            Here are some helpful links to get you back on track:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
            <Link 
              href="/emergency-help" 
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Emergency Help
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/getting-divorced" className="text-blue-600 hover:text-blue-800">
              Getting Divorced
            </Link>
            <Link href="/child-custody" className="text-blue-600 hover:text-blue-800">
              Child Custody
            </Link>
            <Link href="/protection/emergency" className="text-blue-600 hover:text-blue-800">
              Protection Orders
            </Link>
            <Link href="/forms" className="text-blue-600 hover:text-blue-800">
              Court Forms
            </Link>
            <Link href="/resources" className="text-blue-600 hover:text-blue-800">
              Resources
            </Link>
            <Link href="/glossary" className="text-blue-600 hover:text-blue-800">
              Legal Terms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}