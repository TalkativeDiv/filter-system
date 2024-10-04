import { Product as TProduct } from "@/db";

export const Product = ({ product }: { product: TProduct }) => (
  <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      {/*  eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={product.imageId}
        alt="product image"
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-zinc-700">{product.name}</h3>
        <p className="mt-1 text-sm text-zinc-500">
          Size {product.size.toUpperCase()}, {product.color}
        </p>
      </div>

      <p className="text-sm-font-medium text-zinc-900">${product.price}</p>
    </div>
  </div>
);
