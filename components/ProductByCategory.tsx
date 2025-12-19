import { getProductsByCategory } from "@/actions/products";
import { Product } from "./NewArrivals";
import ProductCard from "./ProductCard";
import { getCategories } from "@/actions/categories";
import Link from "next/link";

type ProductByCategoryProps = {
  category: string | undefined;
};

export default async function ProductByCategory({
  category = "electronics",
}: ProductByCategoryProps) {
  const categories = await getCategories();
  const products = await getProductsByCategory(category);

  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between items-center ml-4 mb-5">
        <h2 className="text-2xl">
          <span className="text-[#00CAD7]">Best</span> Deals
        </h2>
        <div className="flex gap-6">
          {categories.data.map((cat: { id: number; name: string }) => {
            const isActive = category === cat.name;
            console.log(isActive, "---", category);
            return (
              <Link
                href={`?category=${encodeURIComponent(cat.name)}`}
                scroll={false}
                key={cat.id}
                className={`uppercase font-roboto py-2 pr-3 relative overflow-hidden bg-white group transition-all ${
                  isActive ? "text-[#00CAD7]" : "hover:text-[#00CAD7]"
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full rounded-xl transition-all ${
                    isActive ? "bg-[#0AAEB9]" : "group-hover:bg-[#0AAEB9]"
                  }`}
                />

                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-12 lg:grid-cols-10 xl:grid-cols-12 gap-8">
        {products.data.map((product: Product) => (
          <div className="col-span-3 lg:col-span-2" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
