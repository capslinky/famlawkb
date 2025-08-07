'use client';

import Link from 'next/link';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" />
            <div>
              <h1 className="text-xl font-semibold">Something went wrong loading the Communication Hub</h1>
              <p className="text-sm text-gray-600 mt-1">{error.message || 'Unexpected error'}</p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Retry
                </button>
                <Link href="/" className="text-blue-700 hover:underline text-sm">
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

