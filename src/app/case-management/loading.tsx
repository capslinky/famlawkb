import { CardSkeleton, TableSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50" aria-busy>
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <CardSkeleton />
        <TableSkeleton rows={4} columns={4} />
      </div>
    </main>
  );
}

