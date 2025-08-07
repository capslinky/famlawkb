import { CardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50" aria-busy>
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <div className="h-8 w-64 bg-gray-200 rounded" />
        <CardSkeleton />
      </div>
    </main>
  );
}

