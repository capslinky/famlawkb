import { FormSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50" aria-busy>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="h-4 w-80 bg-gray-200 rounded" />
          </div>
          <FormSkeleton />
          <FormSkeleton />
        </div>
      </div>
    </main>
  );
}

