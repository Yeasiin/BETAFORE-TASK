import { getProductsByCategory } from "@/actions/products";
import ProductCard from "./ProductCard";
import { getCategories } from "@/actions/categories";
import Link from "next/link";
import { Category, Product } from "@/lib/types";

type ProductByCategoryProps = {
  category: string | undefined;
};

export default async function ProductByCategory({
  category = "electronics",
}: ProductByCategoryProps) {
  const categories = await getCategories();
  const products = await getProductsByCategory(category);

  return (
    <div className="container mx-auto py-16 px-2 ">
      <div className="flex justify-between flex-wrap gap-y-3 items-center ml-4 mb-5">
        <h2 className="text-2xl">
          <span className="text-[#00CAD7]">Best</span> Deals
        </h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 lg:gap-6 min-w-max pb-2">
            {categories.success ? (
              categories.data.map((cat: Category) => {
                const isActive = category === cat.name;
                return (
                  <Link
                    href={`?category=${encodeURIComponent(cat.name)}`}
                    scroll={false}
                    key={cat.id}
                    className={`uppercase font-roboto max-md:text-xs max-lg:text-sm py-2 pr-3 relative overflow-hidden bg-white group transition-all ${
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
              })
            ) : (
              <div>{categories.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:grid-cols-10 xl:grid-cols-12 gap-3 md:gap-4 lg:gap-8">
        {products.success ? (
          products.data.map((product: Product) => (
            <div
              className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div>{products.message}</div>
        )}
      </div>
    </div>
  );
}
