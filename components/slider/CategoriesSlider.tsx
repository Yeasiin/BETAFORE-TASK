import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type CategoriesSliderProps = { categories: { id: number; name: string }[] };

export default function CategoriesSlider({
  categories,
}: CategoriesSliderProps) {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 2 }, () =>
            categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 "
              >
                <div className="flex-1 relative ml-2.5" key={category.id}>
                  <div className="absolute bottom-4 -left-3 bg-white font-medium text-lg xl:text-xl py-1 xl:py-1.5 px-2 xl:px-5 [box-shadow:0px_1px_7px_0px_#00000091] flex w-full justify-between">
                    <p className="text-nowrap">{category.name}</p>

                    <Link
                      className="text-md xl:text-lg ml-2 xl:ml-4 text-[#14B1F0]"
                      href="/shop"
                    >
                      Shop
                    </Link>
                    <div className="border-l-15 border-l-transparent border-b-10 border-b-[#220F0F] absolute bottom-9 xl:bottom-10 left-0"></div>
                  </div>

                  <Image
                    src={`/category-${category.id}.jpg`}
                    width={270}
                    height={0}
                    className="inline-block w-full h-auto"
                    alt={category.name}
                  />
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
