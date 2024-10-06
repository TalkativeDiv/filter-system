import { Cart } from "@/app/_components/cart";
import { Suspense } from "react";

export default function CartPage() {
  return (
    <main className="min-h-[86vh] flex flex-col p-4">
      <Suspense fallback={<p>loading</p>}>
        <Cart />
      </Suspense>
    </main>
  );
}
