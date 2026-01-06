"use client";

import { TBlogs } from "@/api/type";
import BlogCard from "@/components/BlogCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

type Props = {
  blogs : TBlogs[
  ]
}

const RecentBlogs = ({blogs} : Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className=" rounded-[1.25rem] max-w-[1440px] mx-auto ~px-[1.3125rem]/[6.25rem]  ~py-[1.875rem]/[2.6875rem]  ">
      <h3 className="text-transparent bg-gradient-to-r max-md:pl-[1.25rem] from-[#DFAB60] to-[#F08E00] bg-clip-text ~text-[1.25rem]/[2.5rem] font-merriweather font-medium leading-[120%] tracking-[-0.01em] ">
        Recent Blogs
      </h3>
      <div className=" grid-cols-3 ~gap-[0rem]/[1.5rem] hidden lg:grid ~pt-[0.625rem]/[2.5rem]">
        {blogs.map((item, i) => (
          <div key={i}>
            <BlogCard
              image={item.image}
              minutesOfReading={item.min_of_reading}
              title={item.title}
              description={item.short_description}
              author={item.author}
              date={item.date}
              slug={item.slug}
            />
          </div>
        ))}
      </div>
      <div className="flex  ~gap-[1.5rem] lg:hidden  ~pt-[0.625rem]/[2.5rem]">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent >
            {blogs.map((item, i) => (
              <CarouselItem key={i} className=" basis-1/1 ~w-[17.5rem]/[30rem] ml-[1.45rem]">
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
  );
};

export default RecentBlogs;