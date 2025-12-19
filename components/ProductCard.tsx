import Image from "next/image";
import { Product } from "./NewArrivals";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-2 border-gray-200 p-6 mx-0.5">
      <p className="text-sm text-nowrap">{product.category}</p>
      <p className="text-[#034E53] line-clamp-1 mt-1 mb-6">{product.title}</p>

      <div className="relative w-full aspect-square flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex items-center max-xl:flex-wrap text-nowrap gap-x-2  mb-2.5 mt-4">
        <p className="text-xs lg:text-sm line-through">
          RS {product.price - 2}{" "}
        </p>
        <p className="max-lg:text-sm text-[#0AAEB9]">RS {product.price} </p>
      </div>
      <button className="text-white bg-[#15ADB7] w-full px-2 py-2 text-nowrap cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
}
