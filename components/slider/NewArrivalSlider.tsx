import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard";
import { Product } from "../NewArrivals";

type NewArrivalSliderProps = { products: Product[] };

export default function NewArrivalSlider({ products }: NewArrivalSliderProps) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 [@media(min-width:551px)]:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-3 md:pl-4 lg:pl-8 "
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
