import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-zinc-900">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
          <div className="h-full w-full flex flex-col items-center gap-4">
            <h1 className="tracking-tight text-4xl sm:text-6xl w-[62.5%] text-center font-bold">
              Upstash + React Query Filtering System
            </h1>

            <p className="max-w-xl text-center text-lg text-zinc-700">
              A beautifully designed, hybrid search engine that enhances search
              accuracy by querying semantically related results.
            </p>
            <Link
              href="#filter"
              className={cn(
                buttonVariants(),
                "bg-blue-600 text-white hover:bg-blue-500"
              )}
            >
              Live demo
            </Link>
          </div>
        </div>
      </div>

      <section
        id="filter"
        className="mx-auto max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-baseline justify-between border-b border-zinc-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            High Quality Cotton Section
          </h1>
        </div>
      </section>
    </main>
  );
}
