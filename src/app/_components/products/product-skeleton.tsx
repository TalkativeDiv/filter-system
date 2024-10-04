export const ProductSkeleton = () => (
  <div className="relative animate-pulse">
    <div className="aspect-h-1 aspect-w-1 w-full-overflow-hidden rounded-md bg-zinc-200 lg:aspect-none lg:h-80">
      <div className="h-full w-full bg-zinc-200" />
    </div>
    <div className="mt-4 flex flex-col gap-2">
      <div className="bg-zinc-200 h-4 w-full" />
      <div className="bg-zinc-200 h-4 w-full" />
    </div>
  </div>
);
