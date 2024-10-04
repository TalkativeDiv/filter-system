import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-8">
      <h2 className="tracking-tight text-3xl sm:text-5xl w-[62.5%] text-center font-bold">
        404 Not Found
      </h2>
      <p className="text-zinc-500">Looks like you got lost!</p>
      <Link
        href="/"
        className={cn(buttonVariants(), "bg-teal-600 hover:bg-teal-700")}
      >
        Return Home
      </Link>
    </div>
  );
}
