import { getProducts } from "@/actions/products";
import Image from "next/image";
import ProductCard from "./ProductCard";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function NewArrivals() {
  const products = await getProducts("limit=5");

  return (
    <div className="container mx-auto pt-10 pb-6">
      <h2 className="text-2xl ml-4 mb-5">
        <span className="text-[#00CAD7]">New</span> Arrivals
      </h2>

      <div className="flex gap-8">
        {products.data.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
