"use client";
import { Ttestimonials } from "@/api/type";
import ButtonBrown from "@/components/svg/ButtonBrown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousal";
import { StorageUrl } from "@/utils/BaseUrl";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

type Props = {
  testimonials: Ttestimonials[];
};

const Testimonials = ({ testimonials }: Props) => {
  console.log(testimonials);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [emblaApi, setEmblaApi] = React.useState<any | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="~px-[0.625rem]/[7.375rem]">
      <div className="flex flex-col items-center">
        <ButtonBrown content="Testimonials" />
        <h2 className="~text-[1.375rem]/[3.5rem] text-center font-normal font-merriweather leading-[120%]  text-[#FFFFFF] pt-[1.5rem]">
          Voices of{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Our Community
          </span>
        </h2>

        <p className="font-inter font-normal leading-[120%] max-w-[32ch] text-[#FFFFFF] text-center tracking-[0%] mt-[1.5rem] ~text-[0.625rem]/[1rem]">
          Don’t just take our word for it hear from our clients.
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setEmblaApi}
      >
        <CarouselContent className="flex ~pt-[1.2rem]/[3.875rem]">
          {testimonials.map((item, i) => {
            const rating = Math.round(Number(item.ratings));

            return (
              <CarouselItem
                key={i}
                className="bg-gradient-to-b md:basis-[48.7%] ml-[1.1875rem] from-[#ffffff0e] to-[#ffffff0a] ~rounded-[1.4119rem]/[3rem] ~p-[1.3rem]/[3.25rem]"
              >
                <div className="flex items-center ~gap-[0.75rem]/[1.1875rem]">
                  <div className="relative ~size-[3rem]/[6.6875rem] ]">
                    <Image
                      src={StorageUrl + item.image}
                      alt={`${item.name}-image`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-satoshi font-medium ~text-[0.75rem]/[1.5rem]  leading-[120%] text-[#FFF4E3] tracking-[-0.015rem]">
                      {item.name}
                    </div>
                    <div className="bg-clip-text ~text-[0.75rem]/[1.5rem] text-transparent bg-gradient-to-r from-[#FDCA7C] to-[#FFC771]">
                      {"★".repeat(rating) + "☆".repeat(5 - rating)}
                    </div>
                  </div>
                </div>

                <div className="font-satoshi  font-normal ~text-[0.75rem]/[1.5rem] leading-[150%] tracking-[-0.015rem] text-[#FFF4E3] ~pt-[0.75rem]/[1.6875rem] pb-[3rem]">
                  {item.testimonial}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center ~mt-[2rem]/[4rem] ~gap-[0.6rem]/[0.9806rem] ~pb-[2rem]/[12.75rem]">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`~h-[0.375rem]/[0.8331rem] transition-all ${
              index === selectedIndex
                ? "~w-[1rem]/[2.5rem] rounded-[0.49rem] bg-white"
                : "~w-[0.375rem]/[0.8331rem] rounded-full bg-[#4A4A4A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
