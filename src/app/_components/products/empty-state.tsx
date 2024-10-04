import { XCircle } from "lucide-react";

export const EmptyState = () => (
  <div className="relative col-span-full h-80 bg-zinc-50 w-full p-12 flex flex-col items-center justify-center gap-2">
    <XCircle className="h-8 w-8 text-red-500" />
    <p className="text-zinc-500 text-sm">
      We found no search result with those filters.
    </p>
  </div>
);
