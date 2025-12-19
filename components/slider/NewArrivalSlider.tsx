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
            <CarouselItem key={product.id} className="basis-1/6">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
