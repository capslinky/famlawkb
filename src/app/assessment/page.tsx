import AssessmentTool from '@/components/AssessmentTool';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Legal Situation Assessment - Arizona Family Law Guide',
  description: 'Answer a few questions to get personalized guidance for your Arizona family law situation.',
};

export default function AssessmentPage() {
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
        <div className="text-center mb-8 px-6">
          <h1 className="text-3xl font-bold mb-4">Find Your Path</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions about your situation, and we&apos;ll guide you to the most relevant information and resources.
          </p>
        </div>

        <AssessmentTool />
      </div>

      <div className="mt-16 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            This assessment provides general guidance only. For specific legal advice about your situation, 
            please consult with a qualified Arizona family law attorney.
          </p>
        </div>
      </div>
    </main>
  );
}