"use client";

import { type Product as TProduct } from "@/db";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/app/_components/products/product";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/app/_stores/cart";
import React from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { ProductSkeleton } from "@/app/_components/products/product-skeleton";
type Result = {
  product: {
    id: string;
    vector: [number, number, number];
    metadata: TProduct;
  };
  relatedProducts: [
    { id: string; score: number; metadata: TProduct },
    { id: string; score: number; metadata: TProduct },
    { id: string; score: number; metadata: TProduct }
  ];
};
function ProductComponent({
  data,
  handleClick,
}: {
  data: Result;
  handleClick: (item: TProduct) => void;
}) {
  return (
    <div className="flex justify-center items-center min-h-[85vh] flex-col gap-4">
      <div className="lg:border-2 lg:border-border p-4 rounded-xl flex justify-center  flex-col lg:flex-row transition-all">
        <div className="flex justify-center items-center ">
          {" "}
          {data && <Product product={data?.product.metadata} inGrid={false} />}
        </div>
        <Separator
          className="w-[2px] mx-4 min-h-96 hidden lg:block"
          orientation="vertical"
        />
        <Separator className="h-[2px] my-4 min-w-96 lg:hidden block" />
        <div className="flex flex-col text-lg tracking-tight max-w-full  min-h-full lg:max-w-40 m-4 gap-8 lg:gap-0">
          <p className="text-center text-zinc-600 italic">
            &quot;A{" "}
            {data?.product.metadata.size == "L"
              ? "large"
              : data?.product.metadata.size == "S"
              ? "small"
              : "medium"}{" "}
            {data?.product.metadata.color} shirt. It is made with a high quality
            cotton material that is comfortable and sustainably sourced&quot;
          </p>
          <Button
            variant="primary"
            size="lg"
            className="md:mt-auto mt-4 sm:min-w-full"
            onClick={() => handleClick(data?.product.metadata as TProduct)}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <Separator />
      <h2 className="font-semibold text-lg">Related Products</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {data.relatedProducts.map((product) => (
          <div key={product.id} className="p-2 border rounded-lg">
            <Product product={product.metadata} inGrid size="sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
function CloseUpProductSkeleton() {
  return (
    <div className="flex justify-center items-center min-h-[85vh] flex-col gap-4 animate-pulse">
      <div className="lg:border-2 lg:border-border p-4 rounded-xl flex justify-center  flex-col lg:flex-row transition-all">
        <div className="flex justify-center items-center ">
          {" "}
          {/* {data && <Product product={data?.product.metadata} inGrid={false} />} */}
          <ProductSkeleton />
        </div>
        <Separator
          className="w-[2px] mx-4 min-h-96 hidden lg:block"
          orientation="vertical"
        />
        <Separator className="h-[2px] my-2 min-w-96 lg:hidden block" />
        <div className="flex flex-col text-lg tracking-tight max-w-full  min-h-full lg:max-w-40 m-4 gap-8 lg:gap-0">
          <div className="flex gap-2 flex-col">
            {new Array(7).fill(0).map((_, i) => (
              <p className="bg-zinc-200 h-4 w-40" key={i} />
            ))}
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="md:mt-auto mt-4 sm:min-w-full"
            // onClick={() => handleClick(data?.product.metadata as TProduct)}
          ></Button>
        </div>
      </div>
      <Separator />
      <h2 className="font-semibold text-lg">Related Products</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {/* {data.relatedProducts.map((product) => (
          <div key={product.id} className="p-2 border rounded-lg">
            <Product product={product.metadata} inGrid size="sm" />
          </div>
        ))} */}
        {new Array(3).fill(0).map((_, i) => (
          <div className="relative animate-pulse p-2 border rounded-lg" key={i}>
            <div className="aspect-square w-full overflow-hidden rounded-md bg-zinc-200 lg:aspect-none lg:h-32">
              <div className="h-full w-full bg-zinc-200" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="bg-zinc-200 h-4 w-full" />
              <div className="bg-zinc-200 h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function ProductPage({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  const addToCart = useCartStore((state) => state.addItem);
  const removeFromCart = useCartStore((state) => state.removeItem);
  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await axios.post<Result>("/api/product", {
        productId,
      });
      return data;
    },
  });

  function handleClick(item: TProduct) {
    addToCart(item);
    toast("Item added to cart", {
      action: {
        label: "Undo",
        onClick: () => {
          removeFromCart(item);
        },
      },
    });
  }
  return (
    <>
      {data ? (
        <ProductComponent data={data} handleClick={handleClick} />
      ) : (
        // <div className="flex justify-center items-center gap-4">
        //   <LoaderCircle className="animate-spin text-teal-600" /> Loading...
        // </div>
        <CloseUpProductSkeleton />
      )}
    </>
  );
}
