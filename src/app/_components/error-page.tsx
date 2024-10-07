import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const ErrorPage = ({
  code,
  message,
}: {
  code: number;
  message: string;
}) => (
  <div className="flex justify-center items-center flex-col min-h-screen gap-4">
    <h2 className="tracking-tight text-3xl sm:text-5xl w-[62.5%] text-center font-bold">
      {code}
    </h2>
    <p className="text-zinc-500">{message}!</p>
    <Link href="/" className={buttonVariants({ variant: "primary" })}>
      Return Home
    </Link>
  </div>
);
