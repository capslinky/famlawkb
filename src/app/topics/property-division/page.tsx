import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PropertyDivisionContent from '@/components/topics/PropertyDivisionContent';

export const metadata = {
  title: 'Property Division in Arizona Divorce - Complete Legal Guide | Community Property Laws',
  description: 'Comprehensive guide to Arizona property division in divorce, including community property laws, asset valuation, debt division, and division strategies.',
  keywords: 'Arizona property division, community property, asset division, debt division, marital property, separate property, property valuation'
};

export default function PropertyDivisionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Property Division in Arizona Divorce</h1>
              <p className="text-gray-600 mt-2">
                Complete guide to Arizona community property laws, asset valuation, and property division strategies
              </p>
            </div>
            
            <div className="hidden md:flex gap-3">
              <Link href="/getting-divorced" className="px-3 py-1.5 text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md font-medium transition">
                Divorce Guide
              </Link>
              <Link href="/forms" className="px-3 py-1.5 text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md font-medium transition">
                Forms
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <PropertyDivisionContent />

        {/* Related Topics */}
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Related Topics</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/topics/child-support" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Child Support</h3>
              <p className="text-sm text-gray-600 mt-1">Income guidelines and calculation methods</p>
            </Link>
            <Link href="/topics/spousal-maintenance" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Spousal Maintenance</h3>
              <p className="text-sm text-gray-600 mt-1">Alimony and spousal support in Arizona</p>
            </Link>
            <Link href="/getting-divorced" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Getting Divorced</h3>
              <p className="text-sm text-gray-600 mt-1">Overview of divorce process in Arizona</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}