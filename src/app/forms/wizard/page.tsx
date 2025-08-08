/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { ArrowLeft, Sparkles, FileText } from 'lucide-react';
import FormSelectionWizard from '@/components/forms/FormSelectionWizard';

export const metadata = {
  title: 'Form Selection Wizard - Find the Right Arizona Court Forms',
  description: 'Interactive wizard to help you identify the exact court forms you need for your Arizona family law case. Get personalized form recommendations based on your specific situation.',
  keywords: 'Arizona court forms wizard, family law forms helper, form selection tool, divorce forms wizard, custody forms guide'
};

export default function FormWizardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Form Selection Wizard</h1>
              <p className="text-blue-100 text-lg">Let us help you find the exact forms you need</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4 max-w-2xl">
            <p className="text-white/90">
              Answer a few simple questions about your situation, and we'll provide you with a 
              personalized list of all the court forms you need to file, along with instructions 
              for completing them.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/forms" className="text-blue-600 hover:text-blue-800">
              Forms
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Selection Wizard</span>
          </nav>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">5 min</div>
              <div className="text-sm text-gray-600">Average completion time</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600">100+</div>
              <div className="text-sm text-gray-600">Forms in database</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">Free</div>
              <div className="text-sm text-gray-600">No cost to use</div>
            </div>
          </div>

          <FormSelectionWizard />

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-600" />
              Why Use the Form Wizard?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Ensures you don't miss any required forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Saves time by identifying exactly what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Provides filing instructions for each form</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Helps avoid costly filing mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Customized to your specific situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Based on current Arizona court requirements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/forms" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Forms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}