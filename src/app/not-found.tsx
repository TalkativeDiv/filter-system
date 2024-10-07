import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ErrorPage } from "./_components/error-page";

export default function NotFound() {
  return <ErrorPage code={404} message="not found" />;
}
