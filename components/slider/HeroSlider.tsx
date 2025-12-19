import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function HeroSlider() {
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
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="w-full">
                <Image
                  src="/slider-1.jpg"
                  alt="Carousel Image"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
}
