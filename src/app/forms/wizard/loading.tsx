import { FormSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50" aria-busy>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <FormSkeleton />
      </div>
    </main>
  );
}

