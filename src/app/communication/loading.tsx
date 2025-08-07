import { CardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50" aria-busy>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </main>
  );
}

