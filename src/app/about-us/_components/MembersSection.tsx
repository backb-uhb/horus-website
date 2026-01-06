"use client"
import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import { ButtonAnimation } from "@/components/ButtonAnimation";

const slides = [
    {
    image: "/images/image-placeholder.jpg",
    title: "Shamnad",
    subtitle: "CEO",
    heading: "Guiding",
    span: "The Vision",
    description:
"As the CEO of Horus, Shamnad leads with experience, precision, and vision. His approach emphasizes practical market knowledge and disciplined thinking, enabling students to move beyond theory and develop real trading competence."
  },
      {
    image: "/images/image-placeholder.jpg",
    title: "Sudhesh A",
    subtitle: "Operation Head",
    heading: "Guiding",
    span: "The Vision",
    description:
"As Operations Head at Horus, Sudhesh oversees day-to-day execution with precision and clarity. His operational expertise and attention to detail ensure consistency, quality, and smooth coordination across the organization."
  },
        {
    image: "/images/image-placeholder.jpg",
    title: "Sanoj",
    subtitle: "BDE",
    heading: "Guiding",
    span: "The Vision",
    description:
"As a Business Development Executive at Horus Academy, Sanoj supports sales initiatives by identifying opportunities and maintaining strong client communication. His consistent efforts help strengthen the academy’s market presence."
  },
  {
    image: "/images/founder-img.png",
    title: "Shanu",
    subtitle: "Trainer",
    heading: "Guiding",
    span: "The Vision",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Sales Head",
    heading: "Build",
    span: "With Vision",
    description:
"As Sales Head at Horus Academy, Nasif leads the sales function with clarity and precision. His ability to align strategy with execution plays a key role in accelerating growth and strengthening market presence."
  },
          {
    image: "/images/image-placeholder.jpg",
    title: "Akhil",
    subtitle: "Trainer",
    heading: "Guiding",
    span: "The Vision",
    description:
"Akhil is a skilled trainer at Horus Academy, focused on delivering clear, practical learning experiences. His structured teaching approach helps learners understand concepts effectively and apply them with confidence."  },
  {
    image: "/images/lsp.png",
    title: "LSP",
    subtitle: "Trainer",
    heading: "Learn The",
    span: "Right Way",
    description:
      "LSP is a skilled trading mentor at Horus Academy, specializing in structured market analysis and disciplined execution. His practical approach and clarity help students develop consistency, confidence, and a strong trading foundation.",
  },
];

const MembersSection = () => {
  // const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <div className="font-satoshi">
      <div className="flex justify-center ~px-[0.625rem]/[7.4375rem]  md:justify-start">
        <ButtonBrown content="Meet Our Members" />
      </div>

      <div className="md:justify-start flex flex-col max-md:items-center justify-center">
        <h4 className="text-white ~text-[0.75rem]/[1.5rem] ~px-[0.75rem]/[7.4375rem]  ~pt-[1rem]/[1.5rem] leading-[120%] font-medium">
          There&apos;s a mind behind every move.
        </h4>
        <p className="text-[#6A6B6C] ~text-[0.75rem]/[1.5rem] ~px-[0.75rem]/[7.4375rem]  pt-[0.25rem] leading-[120%] font-medium">
          Meet the traders, mentors, and builders
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative "
      >
        <CarouselNext className="absolute ~right-[0.5rem]/[2rem] -translate-y-1/2 top-1/2 z-10 cursor-pointer">
          <ButtonAnimation>
            <div className="relative hover:scale-110 duration-300 transition-all ease-in-out w-fit p-[1px] bg-gradient-to-br rounded-full from-[#333333] h-full to-[#111111]">
              <div className="~size-[2rem]/[3.75rem] rounded-full flex justify-center items-center bg-gradient-to-br from-[#111214] to-[#111214]">
                <ArrowSvg className="~w-[0.3rem]/[0.5rem] text-[#DFAB60]" />
              </div>
            </div>
          </ButtonAnimation>
        </CarouselNext>

        <CarouselPrevious className="absolute ~left-[0.5rem]/[2rem] -translate-y-1/2 top-1/2 z-10 cursor-pointer">
          <ButtonAnimation>
            <div className="relative hover:scale-110 duration-300 transition-all ease-in-out w-fit p-[1px] bg-gradient-to-br rounded-full from-[#333333] to-[#111111]">
              <div className="~size-[2rem]/[3.75rem] rounded-full flex justify-center items-center bg-gradient-to-br from-[#111214] to-[#111214]">
                <ArrowSvg className="~w-[0.3rem]/[0.5rem] text-[#DFAB60] rotate-180" />
              </div>
            </div>
          </ButtonAnimation>
        </CarouselPrevious>

        <CarouselContent className="flex ~py-[2.5rem]/[4.625rem]">
          {slides.map((item, i) => (
            <CarouselItem
              key={i}
              className="~w-[18.75rem]/[22.5rem] basis-1/1 shrink-0 ~h-[20.5rem]/[33.6875rem] ~mr-[2rem]/[3rem] cursor-pointer"
              style={{ perspective: "1000px" }}
              // onMouseEnter={() => { plugin.current.stop(); setFlippedIndex(i); }}
              // onMouseLeave={() => { plugin.current.reset(); setFlippedIndex(null); }}
            >
              {/* Removed flipping animation for now */}
              {/* <motion.div ...> */}
              <div className="relative w-full h-full">
                <div className="relative w-fit p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] h-full to-[#111111]">
                  <div className="~w-[18.75rem]/[22.5rem] relative ~rounded-[0.5rem]/[1.25rem] ~h-[20.5rem]/[33.6875rem]">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover ~rounded-[0.5rem]/[1.25rem]"
                      alt={item.title}
                    />

                    <div className="~p-[0.5rem]/[1.5rem] absolute w-full bottom-0 text-white">
                      <h2 className="font-medium ~text-[0.875rem]/[1.5rem] ~pb-[0.1rem]/[0.5rem] border-b w-full border-b-white/5">
                        {item.title}
                      </h2>
                      <div className="flex justify-between items-center ~pt-[0.3rem]/[0.5rem]">
                        <h4 className="~text-[0.75rem]/[1.125rem] leading-[100%]">
                          {item.subtitle}
                        </h4>
                        {/* <div className="~size-[1.25rem]/[2.25rem] flex justify-center items-center border border-[#FFFFFF1A] ~rounded-[0.3rem]/[0.5rem] shadow-[inset_0_-1px_0_0_#00000033,inset_0_0_0_0_#FFFFFF0D]">
                          <ArrowSvg className="~w-[0.3rem]/[0.5rem]" />
                        </div> */}
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
              {/* </motion.div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MembersSection;
