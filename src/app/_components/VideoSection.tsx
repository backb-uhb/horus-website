import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
const VideoSection = () => {
  return (
    <div className="~pt-[3.4375rem]/[6.5625rem] ~px-[0.75rem]/[7rem]">
      <div className="items-center flex flex-col ">
        <div className="text-[#FFFFFF] md:font-bold font-normal font-merriweather text-center ~text-[1.375rem]/[3.25rem] leading-[120%] tracking-[-0.05rem] ~pb-[0.625rem]/[2rem]">
          <div>
            Building & Scaling <br />{" "}
          </div>
          <div>
            <span className="text-[#FFFFFF]">India’s </span>
            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
              largest trading floor
            </span>
          </div>
        </div>

        <div className="font-satoshi md:font-bold font-normal ~text-[0.75rem]/[1.25rem] \] leading-[110%] tracking-[0%] text-center text-[#FFF4E3] ">
          Step inside the largest trading floor in the country.
          <br /> Horus isn’t just teaching trades, it’s building the next <br />{" "}
          generation of professionals.
        </div>
      </div>
      <div className="~pt-[1.25rem]/[2.5rem]">
        <div className="relative w-full ~h-[9.9475rem]/[40.3125rem] ~rounded-[0.37rem]/[1.5rem] border-[0.0625rem] border-[#FFFFFF1A] border-solid overflow-hidden">
          <YouTubeEmbed
            videoid="EsiZqb_RRQU"
            params="controls=0"
            style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;margin:auto;"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
