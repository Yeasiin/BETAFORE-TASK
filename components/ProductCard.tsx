import Image from "next/image";
import { Product } from "./NewArrivals";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex-1">
      <div className="border-2 border-gray-200 p-6">
        <p className="text-sm">{product.category}</p>
        <p className="text-[#034E53] line-clamp-1 mt-1 mb-6">{product.title}</p>
        <Image
          src={product.image}
          height={0}
          width={200}
          alt={product.image}
          style={{ aspectRatio: 1, objectFit: "contain", height: "auto" }}
        />
        <div className="flex items-center gap-2 mb-2.5 mt-4">
          <p className="text-sm line-through">RS {product.price - 2} </p>
          <p className=" text-[#0AAEB9]">RS {product.price} </p>
        </div>
        <button className="text-white bg-[#15ADB7] w-full px-2 py-2">
          Add to Product
        </button>
      </div>
    </div>
  );
}
