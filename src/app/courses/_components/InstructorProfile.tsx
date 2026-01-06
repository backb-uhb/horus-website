"use client";

import { ButtonAnimation } from "@/components/ButtonAnimation";
import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const slides = [
  {
    image: "/images/image-placeholder.jpg",
    title: "Shamnad",
    subtitle: "CEO",
  },
  {
    image: "/images/image-placeholder.jpg",
    title: "Sudhesh A",
    subtitle: "Operation Head",
  },
  {
    image: "/images/image-placeholder.jpg",
    title: "Sanoj",
    subtitle: "BDE",
  },
  {
    image: "/images/founder-img.png",
    title: "Shanu",
    subtitle: "Trainer",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Sales Head",
  },
  {
    image: "/images/image-placeholder.jpg",
    title: "Akhil",
    subtitle: "Trainer",
  },
  {
    image: "/images/lsp.png",
    title: "LSP",
    subtitle: "Trainer",
  },
];

const InstructorProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <div className="~pt-[2rem]/[11.6875rem] bg-black">
      <div className="~px-[1rem]/[8.9375rem]">
        <div className="flex justify-center">
          <ButtonBrown content="Instructor profile" />
        </div>

        <h2 className="~text-[1.375rem]/[3.25rem] text-center font-normal font-merriweather leading-[120%] tracking-[-0.05rem] text-[#FFFFFF] ~pt-[1rem]/[1.5rem]">
          Led by{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Industry Experts
          </span>
        </h2>

        <p className="font-inter font-normal leading-[120%] text-[#FFFFFF] text-center tracking-[0%] ~my-[0.75rem]/[1.5rem] ~text-[0.625rem]/[1rem]">
          Led by a professional with real-world expertise.
        </p>
      </div>

      <div className="~pt-[0rem]/[5rem] ~pb-[3rem]/[4.625rem] overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          {/* Next */}
          <CarouselNext className="absolute ~right-[0.5rem]/[2rem] -translate-y-1/2 top-1/2 z-10 cursor-pointer">
            <ButtonAnimation>
              <div className="hover:scale-110 duration-300 transition-all ease-in-out w-fit p-[1px] bg-gradient-to-br rounded-full from-[#333333] to-[#111111]">
                <div className="~size-[2rem]/[3.75rem] rounded-full flex justify-center items-center bg-[#111214]">
                  <ArrowSvg className="~w-[0.3rem]/[0.5rem] text-[#DFAB60]" />
                </div>
              </div>
            </ButtonAnimation>
          </CarouselNext>

          {/* Previous */}
          <CarouselPrevious className="absolute ~left-[0.5rem]/[2rem] -translate-y-1/2 top-1/2 z-10 cursor-pointer">
            <ButtonAnimation>
              <div className="hover:scale-110 duration-300 transition-all ease-in-out w-fit p-[1px] bg-gradient-to-br rounded-full from-[#333333] to-[#111111]">
                <div className="~size-[2rem]/[3.75rem] rounded-full flex justify-center items-center bg-[#111214]">
                  <ArrowSvg className="~w-[0.3rem]/[0.5rem] rotate-180 text-[#DFAB60]" />
                </div>
              </div>
            </ButtonAnimation>
          </CarouselPrevious>

          <CarouselContent className="~pt-[2.5rem]/[5rem] flex ~py-[3rem]/[4.625rem]">
            {slides.map((item, i) => (
              <CarouselItem
                key={i}
                className="~w-[18.75rem]/[22.5rem] basis-1/1 shrink-0 ~h-[20.25rem]/[33.6875rem] ~mr-[2rem]/[3rem]"
              >
                <div className="relative w-fit p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] to-[#111111] h-full">
                  <div className="relative ~w-[18.75rem]/[22.5rem] ~h-[20.25rem]/[33.6875rem] ~rounded-[0.5rem]/[1.25rem] overflow-hidden">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover"
                      alt={item.title}
                    />

                    <div className="absolute bottom-0 w-full text-white ~p-[0.5rem]/[1.5rem]">
                      <h2 className="font-medium ~text-[0.875rem]/[1.5rem] border-b border-white/5 ~pb-[0.1rem]/[0.5rem]">
                        {item.title}
                      </h2>

                      <div className="flex justify-between items-center ~pt-[0.3rem]/[0.5rem]">
                        <h4 className="~text-[0.75rem]/[1.125rem]">
                          {item.subtitle}
                        </h4>

                        <div className="~size-[1.25rem]/[2.25rem] flex justify-center items-center border border-[#FFFFFF1A] ~rounded-[0.3rem]/[0.5rem] shadow-[inset_0_-1px_0_0_#00000033,inset_0_0_0_0_#FFFFFF0D]">
                          <ArrowSvg className="~w-[0.3rem]/[0.5rem]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default InstructorProfile;
