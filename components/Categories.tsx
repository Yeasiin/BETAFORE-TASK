import { getCategories } from "@/actions/categories";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const categories = await getCategories();
  // TODO: Add error handler
  return (
    <div className="bg-linear-to-b from-[#F4EECD] to-white">
      <div className="container mx-auto border-b border-gray-300 pb-6 mb-6 pt-4">
        <div className="flex justify-between gap-8">
          {categories.data.map((category: { id: number; name: string }) => (
            <div className="flex-1 relative" key={category.id}>
              <div className="absolute bottom-4 -left-3 bg-white font-medium text-xl py-1.5 px-5 [box-shadow:0px_1px_7px_0px_#00000091] flex w-full justify-between">
                <p>{category.name}</p>

                <Link className="text-lg ml-4 text-[#14B1F0]" href="/shop">
                  Shop
                </Link>
                <div className="border-l-15 border-l-transparent border-b-10 border-b-[#220F0F] absolute bottom-10 left-0"></div>
              </div>

              <Image
                src={`/category-${category.id}.jpg`}
                width={270}
                height={0}
                className="inline-block w-full h-auto"
                alt={category.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
