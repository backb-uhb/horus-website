"use client";

import ButtonBrown from "@/components/svg/ButtonBrown";
import CertificateSvg from "@/components/svg/CertificateSvg";
import ClockSvg from "@/components/svg/ClockSvg";
import PeopleSvg from "@/components/svg/PeopleSvg";
import React from "react";
import { motion } from "motion/react";
import EnrollButton from "@/app/_components/EnrollButton";

const FourthSection = () => {
  return (
    <div className="flex relative flex-col items-center ~px-[0.625rem]/[15.75rem] ">
      <div className="absolute inset-0 w-full">
        <motion.div
          className="w-full h-full bg-[radial-gradient(circle_at_center,#ECB76A33_0%,#ECB76A00_70%,#000000_100%)]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>{" "}
      <ButtonBrown content="Push Past Basics. Trade with Precision." />
      <div className="font-merriweather text-[#FFFFFF] ~px-[0]/[0.75rem] font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center ~pt-[0.625rem]/[1.5rem]">
        Skip the Noise, Start Executing Like a{" "}
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Market Insider
        </span>
      </div>
      <p
        className={`font-inter ~text-[0.625rem]/[1rem] ~pb-[2rem]/[4rem] ~pt-[1rem]/[1.5rem]  text-white leading-[120%]`}
      >
        Real Strategies. Real Trades. Real Edge.
      </p>
      <div className="relative flex flex-col  justify-between h-full items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
        <div className="bg-gradient-to-br from-[#333333] to-[#111111] w-full ">
          <div className="flex items-center gap-[0.5rem]  justify-between ~px-[0.75rem]/[1.875rem] ~py-[0.625rem]/[1.5225rem]">
            <div className="bg-gradient-to-r from-[#FBCC83] to-[#FFC770] text-transparent bg-clip-text font-merriweather ~text-[0.875rem]/[1.75rem] leading-[120%] tracking-[-1.12%]">
              Advanced Technical Course
            </div>
            <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
              <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-transparent ">
                <p className="text-white   ~text-[0.75rem]/[1rem] leading-[100%] tracking-[-1.2%]">
                  Advanced
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-t ~px-[0.75rem]/[2.5rem] from-[#171717] to-[#101010] ~rounded-[1.4119rem]/[3rem] ~py-[1rem]/[2.5rem]">
            <p className="text-white font-satoshi ~text-[0.75rem]/[1.5rem] leading-[120%]">
              Get unlimited 6-month access to 60+ in-depth videos covering
              technical analysis, fundamentals, and trading psychology — all
              designed to help you trade like a pro. Gain real-time market
              insights through exclusive live floor sessions (pre-booking
              required), and network directly with senior traders who&apos;ve
              mastered the game.
            </p>{" "}
            <div className=" font-satoshi font-medium ~text-[0.75rem]/[1.375rem] leading-[120%] tracking-[2%] ~pt-[1.25rem]/[2.5rem]   text-[#FFF4E3] ">
              <div className="flex max-md:flex-wrap md:flex-row  ~gap-[0.5rem]/[0.875rem] items-center">
                <div className="flex shrink-0 ~gap-[0.5rem]/[0.75rem] items-center">
                  <CertificateSvg className="~size-[0.875rem]/[1.875rem] ]" />{" "}
                  Certified
                </div>
                <div className="flex shrink-0 items-center ~gap-[0.5rem]/[0.75rem]">
                  <ClockSvg className="~size-[0.875rem]/[1.875rem]" />2 Months
                </div>
                <div className="flex shrink-0 items-center gap-[0.75rem] ">
                  <PeopleSvg className="~size-[1rem]/[2rem] " />
                  20-Student Batches
                </div>
                <div className="w-full h-[1px] bg-[#DFAB60]"></div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center ~gap-[0.75rem]/[1.5rem] ~pt-[1rem]/[5rem]  items-center">
              <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FBCC83] to-[#FFC770] font-merriweather font-normal ~text-[2rem]/[3.5rem] leading-[120%] tracking-[-0.07rem]">
                ₹ 1,29,999
              </div>
              <div className=" max-lg:text-center font-satoshi font-normal text-[#FFFFFF] ~text-[0.625rem]/[1.0669rem] leading-[120%] tracking-[2%] ">
                Including GST <br /> EMI options avaialble{" "}
              </div>

                 <EnrollButton variant="hero"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
