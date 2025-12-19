import { getCategories } from "@/actions/categories";
import CategoriesSlider from "./slider/CategoriesSlider";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="bg-linear-to-b from-[#F4EECD] to-white">
      <div className="container mx-auto px-2 md:px-8 border-b border-gray-300 pb-6 mb-6 pt-4">
        {categories.success ? (
          <CategoriesSlider categories={categories.data} />
        ) : (
          <div>{categories.message}</div>
        )}
      </div>
    </div>
  );
}
