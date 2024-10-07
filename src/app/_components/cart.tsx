"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@/db";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useCartStore } from "../_stores/cart";
const countDuplicates = (products: Product[]) => {
  const countMap: { [id: string]: number } = {};

  products.forEach((product) => {
    countMap[product.id] = (countMap[product.id] || 0) + 1;
  });

  return countMap;
};
const removeDuplicates = (products: Product[]): Product[] => {
  const seenIds = new Set<string>();

  return products.filter((product) => {
    if (seenIds.has(product.id)) {
      return false; // Skip the duplicate
    } else {
      seenIds.add(product.id);
      return true; // Keep the first occurrence
    }
  });
};
export const getTotalPrice = (products: Product[]): string =>
  products.reduce((total, product) => total + product.price, 0).toFixed(2);

export const Cart = () => {
  const items = useCartStore((state) => state.items);
  const deleteItem = useCartStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);
  const clearItems = useCartStore((state) => state.clearItems);

  return (
    <div className="flex gap-2 justify-center align-center flex-col">
      {items.length == 0 && <p>Your cart is empty</p>}
      {removeDuplicates(items).map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded flex justify-between items-center"
        >
          <img
            src={item.imageId}
            className="max-w-16 max-h-16 aspect-square"
            alt="img"
          />
          <div className="flex justify-end items-end flex-col gap-4">
            <a href={`/product/${item.id}`} className="hover:underline">
              {item.name}, {item.size}
            </a>
            <p>
              ${item.price * countDuplicates(items)[item.id]} ($
              {item.price} per unit)
            </p>
            <div className="flex justify-center items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => deleteItem(item)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <p>{countDuplicates(items)[item.id]}</p>
              <Button
                size="icon"
                variant="outline"
                onClick={() => addItem(item)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      <br />
      <Button onClick={clearItems}>Clear</Button>
    </div>
  );
};
