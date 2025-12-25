import ButtonBrown from "@/components/svg/ButtonBrown";
import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const FifthSection = () => {
  return (
    <div className="bg-black ~px-[0.625rem]/[7.375rem] ~pb-[3rem]/[8.875rem]">
      <div className="flex flex-col items-center ~pb-[1.5rem]/[3rem]">
        <ButtonBrown content="Mentor Talks" />
        <div className="tracking-[-0.05rem] leading-[120%] ~text-[1.375rem]/[3.25rem] font-merriweather bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFFB2] bg-clip-text text-transparent ~pt-[0.75rem]/[1.5rem] text-center">
          Hear the insights.{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Learn the mindset.
          </span>
        </div>
        <div className="font-inter  max-w-[44ch] ~text-[0.75rem]/[1rem] leading-[120%] pt-[0.75rem] text-center text-[#FFFFFF] ">
          From real trading stories to proven strategies,every session dives
          into how top mentors think, act, and win.
        </div>
      </div>

      <div className="relative w-full ~h-[9.9475rem]/[43.75rem] ~rounded-[0.37rem]/[1.5rem] border-[0.0625rem] border-[#FFFFFF1A] border-solid overflow-hidden">
        <YouTubeEmbed
          videoid="EsiZqb_RRQU"
          params="controls=0"
          style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;margin:auto;"
        />
      </div>
    </div>
  );
};

export default FifthSection;
