import Breadcrumbs from "@/components/Breadcrumbs";
import SpotlightCursor from "@/components/SpotLightCursor";
import ArrowSvg from "@/components/svg/ArrowSvg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const rows = 30;
  const cols = 40;
  const cells = Array.from({ length: rows * cols });
  return (
    <div className=" flex  flex-col justify-between">
      <Breadcrumbs activepage="Courses" />
      <div className="absolute inset-0 h-full">
        <div
          className="relative z-0 h-full grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {cells.map((_, i) => (
            <div
              key={i}
              className="w-full h-full border-[0.5px] border-[#DFAB60]/20"
            />
          ))}
          <SpotlightCursor
            className="absolute z-0  inset-0"
            config={{
              radius: 200,
              brightness: 1,
              color: "#DFAB60",
              smoothing: 0.08,
            }}
          />
        </div>
      </div>
      <div className="  flex items-center h-full relative  pt-[9.375rem] ~pb-[2rem]/[5.625rem] ">
        <div className="~pl-[1rem]/[6.25rem] ~pr-[1rem]/[6.25rem] md:pr-0  z-40 ">
          <div className="font-merriweather font-normal max-md:text-center ~text-[1.375rem]/[4rem] leading-[108%] tracking-[-0.07rem] text-[#FFFFFF] md:max-w-[19ch] ">
            Learn What{" "}
            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
              Top Traders{" "}
            </span>
            & Builders Know. <br />
            Then
            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
              {" "}
              Become One.
            </span>
          </div>
          <div className="flex md:justify-start justify-center">
            <div className="~pt-[0.75rem]/[2.9375rem] font-satoshi max-md:text-center  font-normal ~text-[0.75rem]/[1.25rem] leading-[110%] max-w-[46ch] tracking-[2%] text-[#FFF4E3]">
              From real-market trading to growth strategies. Our fast-paced,
              mentor-driven programs are built to get you ahead. No fluff, just
              what works.
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="relative p-[1px] ~mt-[1.2rem]/[2.25rem] rounded-full bg-gradient-to-l from-[#DFAB60] to-[#DFAB601A] w-fit">
              <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-transparent  hover:bg-black">
                <button className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                  Explore Our Courses{" "}
                </button>

                <ArrowSvg className="text-white h-[0.625rem] w-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute max-md:-translate-x-1/2 max-md:left-1/2 max-md:top-[0%] md:right-0 ">
          <div className="relative ~w-[14.4177408218rem]/[42.625rem] ~h-[14.0843372345rem]/[41rem]">
            <div className="~py-[0.5rem]/[1.875rem] md:block hidden  ~top-[4rem]/[20.3125rem] ~left-[4rem]/[5.1875rem] ~px-[0.75rem]/[2.875rem] font-geist font-semibold ~text-[0.625rem]/[1rem] z-30 absolute bg-gradient-to-l from-[#D7C7B1]/5 to-[#EACA9C]/10 backdrop-blur-[0.7312rem] ~rounded-[0.75rem]/[1.25rem] border-[0.0625rem] border-[#DFAB6012] leading-[160%] tracking-[-1.2%] text-[#FFFFFF] ">
              Live Trading Access
            </div>
            <div className="~py-[0.5rem]/[1.875rem] md:block hidden ~top-[7rem]/[30.0625rem] ~right-[1rem]/[5rem] ~px-[0.75rem]/[2.875rem] font-geist font-semibold ~text-[0.625rem]/[1rem] z-30 absolute bg-gradient-to-l from-[#D7C7B1]/5 to-[#EACA9C]/10 backdrop-blur-[0.7312rem] ~rounded-[0.75rem]/[1.25rem] border-[0.0625rem] border-[#DFAB6012] leading-[160%] tracking-[-1.2%] text-[#FFFFFF] ">
              Risk Management
            </div>
            <Image
              src={"/images/image-courses5.png"}
              alt="img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
