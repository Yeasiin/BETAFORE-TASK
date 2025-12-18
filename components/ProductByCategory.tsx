import { getProductsByCategory } from "@/actions/products";
import Image from "next/image";
import { Product } from "./NewArrivals";
import ProductCard from "./ProductCard";

export default async function ProductByCategory() {
  const products = await getProductsByCategory("electronics");

  console.log(products, "-products");

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl ml-4 mb-5">
        <span className="text-[#00CAD7]">Best</span> Deals
      </h2>

      <div className="flex gap-8">
        {products.data.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
