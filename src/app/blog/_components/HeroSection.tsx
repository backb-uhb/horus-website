import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full ~h-[29.375rem]/[37.875rem]  overflow-hidden">
      <Image
        src="/images/blogs/bg-blogs.jpeg"
        alt="Blog hero"
        fill
        className="object-cover "
        priority
      />

    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r
  from-black via-black/40 to-transparent"
/>
      <Breadcrumbs activepage="Blog"/>

      <div className="relative z-10 md:w-[50%] w-full max-md:bg-gradient-to-t 
        from-[#000000] 
        to-transparent h-full flex flex-col justify-center max-md:items-center ~px-[1.1563rem]/[6rem]">

 <div className="max-md:absolute bottom-[40px] max-md:flex flex-col items-center w-full ~pb-[0rem]/[1.25rem]">
          <h3 className="font-merriweather max-md:text-center font-normal ~text-[1.375rem]/[4rem] leading-[110%] tracking-[-0.07rem] text-white lg:max-w-[30ch] max-w-[15ch]">
          Trading insights that build real{" "}
            <span className="bg-gradient-to-r from-[#DFAB60] to-[#F08E00] bg-clip-text text-transparent">
             Skill
            </span>
          </h3>
  
          <p className="~pt-[0.625rem]/[0.8125rem] text-[#FFF4E3] ~text-[0.75rem]/[1.25rem] md:font-merriweatherfont-satoshi max-w-[35ch] max-md:text-center leading-[130%] tracking-[0.02em] lg:max-w-[37ch]">
            Explore expert articles, tips, and learning resources crafted to help you level up.
          </p>
  
 </div>

      </div>

    </div>
  );
};

export default HeroSection;
