"use client";
import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import { ButtonAnimation } from "@/components/ButtonAnimation";

const slides = [
  {
    image: "/images/shanu.png",
    title: "Shanu",
    subtitle: "CEO & Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/anas.png",
    title: "Anas",
    subtitle: "Trainer",
    heading: "Led By",
    span: "Industry Experts",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging.",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Business Development Head",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/founder.png",
    title: "Future",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/shanu.png",
    title: "Shanu",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/anas.png",
    title: "Anas",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging.",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Business Development Head",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/founder.png",
    title: "Future",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
];
const MembersSection = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
  return (
    <div className="~px-[0.625rem]/[7.4375rem] font-satoshi">
      <div className="flex justify-center md:justify-start">
        <ButtonBrown content="Meet Our Members" />
      </div>
      <h4 className="text-white ~text-[0.75rem]/[1.5rem] ~pt-[1rem]/[1.5rem] leading-[100%] font-medium">
        There&apos;s a mind behind every move.
      </h4>
      <p className="text-[#6A6B6C] ~text-[0.75rem]/[1.5rem] pt-[0.25rem] leading-[100%] font-medium">
        Meet the traders, mentors, and builders
      </p>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="relative"
      >
        <CarouselNext className=" absolute  ~right-[-0.5rem]/[-2rem] -translate-y-1/2 top-1/2 z-10 cursor-pointer">
          <ButtonAnimation>
            <div className="relative hover:scale-110 duration-300 transition-all ease-in-out w-fit p-[1px] bg-gradient-to-br rounded-full from-[#333333] h-full to-[#111111]">
              <div className="~size-[2rem]/[3.75rem] rounded-full flex justify-center items-center bg-gradient-to-br from-[#111214] to-[#111214]">
                <ArrowSvg className="~w-[0.3rem]/[0.5rem] text-[#DFAB60]" />
              </div>
            </div>
          </ButtonAnimation>
        </CarouselNext>
        <CarouselContent className="~pt-[2.5rem]/[5rem]  flex  ~py-[3rem]/[4.625rem]  ">
          {slides.map((item, i) => (
            <CarouselItem
              key={i}
              className="~w-[18.75rem]/[22.5rem] basis-1/1 shrink-0 ~h-[14.3092088699rem]/[33.6875rem] ~mr-[2rem]/[3rem] cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setFlippedIndex(i)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flippedIndex === i ? 180 : 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-fit p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] h-full to-[#111111]">
                    <div className="~w-[18.75rem]/[22.5rem] relative ~rounded-[0.5rem]/[1.25rem] ~h-[14.3092088699rem]/[33.6875rem]">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover  ~rounded-[0.5rem]/[1.25rem]"
                        alt=""
                      />

                      <div className="~p-[0.5rem]/[1.5rem] absolute w-full bottom-0 text-white">
                        <h2 className="font-medium ~text-[0.875rem]/[1.5rem] ~pb-[0.1rem]/[0.5rem] border-b w-full border-b-white/5">
                          {item.title}
                        </h2>

                        <div className="flex justify-between items-center ~pt-[0.3rem]/[0.5rem]">
                          <h4 className="~text-[0.75rem]/[1.125rem] leading-[100%]">
                            {item.subtitle}
                          </h4>

                          <div className="~size-[1.25rem]/[2.25rem] flex justify-center items-center border border-[#FFFFFF1A] ~rounded-[0.3rem]/[0.5rem] shadow-[inset_0_-1px_0_0_#00000033,inset_0_0_0_0_#FFFFFF0D]">
                            <ArrowSvg className="~w-[0.3rem]/[0.5rem]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="relative w-fit p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#DFAB6012] h-full to-[#AC814326]">
                    <div className="~w-[18.75rem]/[22.5rem] text-white flex justify-center items-center ~px-[1rem]/[1.875rem] ~rounded-[0.5rem]/[1.25rem] relative ~h-[14.3092088699rem]/[33.6875rem] bg-gradient-to-br from-[#090909] to-[#25221c]">
                      <div>
                        <h2 className="font-merriweather leading-[120%] ~text-[1.25rem]/[3.0625rem]">
                          {item.heading} <br />
                          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
                            {item.span}
                          </span>
                        </h2>
                        <p className="~text-[0.75rem]/[1rem] leading-[120%] ~pt-[1rem]/[2rem] ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MembersSection;
