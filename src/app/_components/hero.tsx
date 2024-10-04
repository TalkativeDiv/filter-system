import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Hero = () => (
  <section className="relative min-h-[95vh] isolate overflow-hidden   bg-zinc-50 text-zinc-900 flex justify-center items-center flex-col">
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
      <div className="h-full w-full flex flex-col items-center gap-8">
        <h1 className="tracking-tight text-3xl sm:text-5xl w-[62.5%] text-center font-bold">
          A <span className="text-teal-600">simple yet type-safe</span>{" "}
          filtering system.
        </h1>

        <div className="flex gap-6 justify-center items-center flex-col">
          <p className="max-w-xl text-center text-lg text-zinc-700">
            A beautifully designed, well crafted, type-safe filtering system
            that can be applied anywhere. Built with industry standard
            technologies such as NextJS, Typescript, React Query, and Zod.
          </p>
          <div className="flex justify-center items-center gap-2">
            {" "}
            <Link
              href="/products"
              className={cn(buttonVariants(), "bg-teal-600 hover:bg-teal-700")}
            >
              Live demo
            </Link>
            <Link
              href="https://github.com/TalkativeDiv/filter-system"
              className={buttonVariants({ variant: "outline" })}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
