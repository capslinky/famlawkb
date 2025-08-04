import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ChildSupportContent from '@/components/topics/ChildSupportContent';

export const metadata = {
  title: 'Child Support in Arizona - Complete Legal Guide | Calculation, Modification & Enforcement',
  description: 'Comprehensive guide to Arizona child support laws, calculations, modifications, enforcement, and payment options. Includes income guidelines and official calculator information.',
  keywords: 'Arizona child support, child support calculator, income shares model, support modification, support enforcement, payment clearinghouse'
};

export default function ChildSupportPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Child Support in Arizona</h1>
              <p className="text-gray-600 mt-2">
                Complete guide to Arizona child support laws, calculations, modifications, and enforcement
              </p>
            </div>
            
            <div className="hidden md:flex gap-3">
              <Link href="/support/calculator" className="px-3 py-1.5 text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md font-medium transition">
                Calculator
              </Link>
              <Link href="/forms" className="px-3 py-1.5 text-sm border border-gray-300 bg-white hover:bg-gray-50 rounded-md font-medium transition">
                Forms
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <ChildSupportContent />

        {/* Related Topics */}
        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Related Topics</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/child-custody" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Child Custody</h3>
              <p className="text-sm text-gray-600 mt-1">Legal decision-making and parenting time</p>
            </Link>
            <Link href="/topics/property-division" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Property Division</h3>
              <p className="text-sm text-gray-600 mt-1">Community property and asset division</p>
            </Link>
            <Link href="/support-modification/child-support" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-blue-600">Modify Child Support</h3>
              <p className="text-sm text-gray-600 mt-1">How to change existing support orders</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}