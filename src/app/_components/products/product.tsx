import { Product as TProduct } from "@/db";
import { cn } from "@/lib/utils";
import React from "react";
const ProductInside = ({
  product,
  inGrid,
  size,
}: {
  product: TProduct;
  inGrid: boolean;
  size: "default" | "sm" | "lg";
}) => (
  <div className="group relative">
    <div
      className={cn(
        "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-200 lg:aspect-none ",
        {
          " group-hover:opacity-75 ": inGrid,
          "lg:h-80": size == "default",
          "lg:h-32": size == "sm",
        }
      )}
    >
      {/*  eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={product.imageId}
        alt="product image"
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3
          className={cn("text-sm text-zinc-700 ", {
            "max-w-14": size == "sm",
          })}
        >
          {product.name}
        </h3>
        {size == "default" && (
          <p className="mt-1 text-sm text-zinc-500">
            Size {product.size.toUpperCase()},{" "}
            {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
          </p>
        )}
      </div>

      <p className="text-sm font-medium text-zinc-900">${product.price}</p>
    </div>
  </div>
);

export const Product = ({
  product,
  inGrid = false,
  size = "default",
}: {
  product: TProduct;
  inGrid: boolean;
  size?: "default" | "sm";
}) => (
  <>
    {inGrid ? (
      <a href={`/product/${product.id}`}>
        <ProductInside product={product} inGrid={inGrid} size={size} />
      </a>
    ) : (
      <ProductInside product={product} inGrid={inGrid} size={size} />
    )}
  </>
);
