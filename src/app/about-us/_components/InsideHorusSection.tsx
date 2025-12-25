"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonBrown from "@/components/svg/ButtonBrown";
import ScrollableTable from "@/components/ScrollableTable";
import { YouTubeEmbed } from "@next/third-parties/google";

const videos = [
  { id: "hl4a7jA3dlU" },
  { id: "EsiZqb_RRQU" },
  { id: "Do0VwUcZcxc" },
  { id: "kiWxR-8xTEU" },
  { id: "3BlUItdCiQU" },
  { id: "ExL8jClroLQ" },
];

const InsideSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0].id);

  return (
    <div className="bg-black ~px-[0.625rem]/[7.375rem]">
      <div className="flex flex-col items-center ~pb-[1.5rem]/[3rem]">
        <ButtonBrown content="Inside Horus" />
        <div className="tracking-[-0.05rem] leading-[120%] ~text-[1.375rem]/[3.25rem] font-merriweather bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFFB2] bg-clip-text text-transparent ~pt-[0.75rem]/[1.5rem] text-center">
          See the floor.{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Feel the pace.
          </span>
        </div>
        <div className="font-inter font-normal max-w-[34ch] ~text-[0.75rem]/[1rem] leading-[120%] pt-[0.75rem] text-center text-[#FFFFFF] ">
          From the trading floor to team huddles, every shot captures our
          culture, focus, and drive.
        </div>
      </div>

      <div className="w-full relative ~h-[9.9475rem]/[43.75rem] ~rounded-[0.37rem]/[1.5rem] border-[0.0625rem] border-[#FFFFFF1A] border-solid overflow-hidden">
        <YouTubeEmbed
          key={currentVideo}
          videoid={currentVideo}
          params="controls=0"
          style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;margin:auto;"
        />
      </div>

      <ScrollableTable className=" no-scrollbar  ~pt-[1.5rem]/[3rem]">
        {videos.map((video, i) => (
          <div
            key={i}
            onClick={() => setCurrentVideo(video.id)}
            className="~w-[8rem]/[14.375rem] relative shrink-0 ~h-[5rem]/[8.0862503052rem] cursor-pointer group"
          >
            <Image
              fill
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={`youtube-video-${i + 1}`}
              className="object-cover rounded-[0.75rem] transition duration-300 group-hover:opacity-80"
            />
            {currentVideo === video.id && (
              <div className="absolute inset-0 rounded-[0.75rem] border md:border-2 border-[#ECB45D]" />
            )}
          </div>
        ))}
      </ScrollableTable>
    </div>
  );
};

export default InsideSection;
