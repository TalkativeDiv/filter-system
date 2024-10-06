import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Hero = () => (
  <section className="relative min-h-[88vh] isolate overflow-hidden   bg-gradient-to-b from-zinc-50 via-emerald-50 to-teal-100 text-zinc-900 flex justify-center items-center flex-col">
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
      <div className="h-full w-full flex flex-col items-center gap-8">
        <h1 className="tracking-tight text-3xl sm:text-5xl w-[62.5%] text-center font-bold">
          A <span className="text-teal-600">simple yet type-safe</span>{" "}
          e-commerce skeleton.
        </h1>

        <div className="flex gap-6 justify-center items-center flex-col">
          <p className="max-w-xl text-center text-lg text-zinc-700">
            A beautifully designed, well crafted, type-safe e-commerce skeleton
            that can be applied anywhere. Built with industry standard
            technologies such as NextJS, Typescript, React Query, and Zod. The
            only thing missing is a payment processor such as stripe.
          </p>
          <div className="flex justify-center items-center gap-2">
            {" "}
            <Link
              href="/products"
              className={buttonVariants({ variant: "primary" })}
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
