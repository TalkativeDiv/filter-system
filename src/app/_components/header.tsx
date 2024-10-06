"use client";
import { Minus, Plus, Shirt, ShoppingCart, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../_stores/cart";
import { Product } from "@/db";
import { Cart } from "./cart";
export const Header = () => {
  const items = useCartStore((state) => state.items);
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex justify-center items-center gap-4">
        <div className="flex gap-2 justify-center items-center">
          <Shirt className="text-teal-600" />
          Clothes Shop
        </div>
        <ul className="flex gap-2 text-zinc-500">
          <li>
            <a href="/" className="hover:underline hover:text-zinc-700">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:underline hover:text-zinc-700">
              Shop
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:underline hover:text-zinc-700">
              Cart
            </a>
          </li>
        </ul>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex gap-2">
            {items.length}
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll">
          <SheetHeader className="border-b py-4">
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <br />
          <Cart />
        </SheetContent>
      </Sheet>
    </header>
  );
};
