import Breadcrumbs from "@/components/Breadcrumbs";
import { StorageUrl } from "@/utils/BaseUrl";
import Image from "next/image";
import React from "react";

type Props = {
    image: string|undefined;
  minutesOfReading: string|undefined;
  title: string|undefined;
  author: string|undefined;
  date: string|undefined;
}

const HeroSection = ({image,minutesOfReading,title,author,date} : Props) => {
  return (
    <div className="relative w-full ~h-[29.375rem]/[37.875rem]  overflow-hidden">
      <Image
        src={StorageUrl+image}
        alt="Blog hero"
        fill
        className="object-cover  "
        priority
      />

      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r
  from-black via-black/40 to-transparent"
      />
      <Breadcrumbs activepage="Blog" innerpage={title} activePageLink="/blog" />

      <div
        className="relative z-10  w-full max-md:bg-gradient-to-t 
        from-[#000000] 
        to-transparent h-full flex flex-col justify-center max-md:items-center ~px-[1.1563rem]/[6rem]"
      >
        <div className="max-md:absolute bottom-[50px] max-md:flex flex-col items-center w-full">
          <h3 className="font-merriweather max-md:text-center  font-semibold ~text-[1.5rem]/[3.5rem] leading-[110%] tracking-[-0.0145em] text-white lg:max-w-[30ch] max-w-[15ch] ">
          {title}
            {/* <span className="bg-gradient-to-r from-[#DFAB60] to-[#F08E00] bg-clip-text text-transparent">
              Skill
            </span> */}
          </h3>

          <p className="~pt-[0.625rem]/[0.8125rem] text-white ~text-[0.75rem]/[1.25rem] md:font-merriweatherfont-satoshi max-w-[35ch] max-md:text-center leading-[130%] tracking-[0.02em] lg:max-w-[37ch]">
            Explore expert articles, tips, and learning resources crafted to
            help you level up.
          </p>
          <div className="~pt-[0.625rem]/[0.8125rem] text-white ~text-[0.65rem]/[1rem]  font-satoshi flex leading-[120%] tracking-[0.02em]">
            <p>Author:</p>
            <p>{author}</p>
            <p>|</p>
            <p>{ minutesOfReading} min read</p>
            <p>|</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
