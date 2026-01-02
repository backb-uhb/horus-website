"use client"
import { TBlogs } from "@/api/type";
import BlogCard from "@/components/BlogCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

type Props = {
  otherBlogs : TBlogs[
  ]
}

const OtherBlogs = ({otherBlogs} : Props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const plugin = React.useRef<any>(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    );
  

  return (
<div className=" ~px-[0rem]/[3.125rem]  ">
      <div className=" ~py-[2rem]/[6rem]  bg-[#000] rounded-[1.25rem]">
        <h2 className="bg-gradient-to-r from-[#DFAB60] max-md:px-[1.325rem] to-[#F08E00] bg-clip-text text-transparent ~text-[1rem]/[2.3875rem] font-merriweather font-semibold leading-[3rem] ">
          Other popular blogs
        </h2>
        <div className="gap-[1.5rem] ~pt-[0.5rem]/[2.5rem]">
        <Carousel
             plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          >
<CarouselContent>
            {otherBlogs.map((item, i) => (
              <CarouselItem key={i} className=" basis-1/1 ~w-[18.125rem]/[29.4375rem] ml-[1.45rem]" >
                    <BlogCard
                  image={item.image}
              minutesOfReading={item.min_of_reading}
                  title={item.title}
              description={item.short_description}
                  author={item.author}
                  date={item.date}
                 slug={item.slug}

                />
              </CarouselItem>
            ))}
</CarouselContent>
          </Carousel>
        </div>

      </div>
</div>
  );
};

export default OtherBlogs;
