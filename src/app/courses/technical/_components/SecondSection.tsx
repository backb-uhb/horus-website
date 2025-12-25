import ButtonBrown from "@/components/svg/ButtonBrown";
import React from "react";
import verified from "@public/images/twitter-verified-badge.svg";
import botanalytics from "@public/images/botanalytics.svg";
import archive from "@public/images/archive.svg";
import Image from "next/image";



const SecondSection = () => {
  return (
    <div className="~px-[1rem]/[7.375rem] ~pt-[2rem]/[8.75rem]">
      <div className="flex flex-col items-center">
        <ButtonBrown content="Elevate Your Trading Game" />
        <div className="text-[#FFFFFF] md:font-bold ~pt-[1rem]/[1.5rem] font-normal font-merriweather text-center ~text-[1.375rem]/[3.5rem] md:leading-[120%] leading-[100%] md:tracking-[-0.05rem] tracking-[0%] ~py-[0.625rem]/[0.75rem]">
          What you will
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            &nbsp;learn
          </span>
        </div>
        <div className="grid ~gap-[0.75rem]/[1.5rem] font-satoshi ~pb-[1.25rem]/[2.125rem] ~pt-[1rem]/[1.5rem] md:grid-cols-3 w-full">
          <div className="~rounded-[0.75rem]/[1.5rem] bg-[#101010] flex flex-col items-center ~pt-[2rem]/[3.5rem] ~pb-[1.5rem]/[3rem] ~px-[1rem]/[2rem]">
            <div className="relative  p-[1px] bg-gradient-to-br w-fit rounded-full from-[#333333] h-full to-[#111111] ">
              <div className="~size-[4rem]/[8.0137500763rem] rounded-full flex items-center justify-center bg-gradient-to-l from-[#080808] to-[#151515]">
                <Image
                  src={verified}
                  alt="tick"
                  className="~size-[2rem]/[3.75rem]"
                />
              </div>
            </div>
            <div className="font-bold  text-white ~pt-[1rem]/[1.5rem] text-center ~pb-[0.75rem]/[1.25rem] ~text-[0.75rem]/[1.25rem] leading-[120%] ">
              Verified by market veterans
            </div>
            <p className="~text-[0.625rem]/[1rem] leading-[120%] px-2 text-center text-[#ADADAD]">
              Learn strategies built and tested by professional traders.
            </p>
          </div>
          <div className="~rounded-[0.75rem]/[1.5rem] bg-[#101010] flex flex-col items-center ~pt-[2rem]/[3.5rem] ~pb-[1.5rem]/[3rem] ~px-[1rem]/[2rem]">
            <div className="relative  p-[1px] bg-gradient-to-br w-fit rounded-full from-[#333333] h-fit to-[#111111] ">
              <div className="~size-[4rem]/[8.0137500763rem] rounded-full flex items-center justify-center bg-gradient-to-l from-[#080808] to-[#151515]">
                <Image
                  src={botanalytics}
                  alt="tick"
                  className="~size-[2rem]/[3.75rem]"
                />
              </div>
            </div>
            <div className="font-bold  text-white ~pt-[1rem]/[1.5rem] text-center ~pb-[0.75rem]/[1.25rem] ~text-[0.75rem]/[1.25rem] leading-[120%] ">
              Precision-driven market guidance
            </div>
            <p className="~text-[0.625rem]/[1rem] leading-[120%] px-2 text-center text-[#ADADAD]">
              Read price action and market sentiment with accuracy.
            </p>
          </div>
          <div className="~rounded-[0.75rem]/[1.5rem] bg-[#101010] flex flex-col items-center ~pt-[2rem]/[3.5rem] ~pb-[1.5rem]/[3rem] ~px-[1rem]/[2rem]">
            <div className="relative  p-[1px] bg-gradient-to-br w-fit rounded-full from-[#333333] h-fit to-[#111111] ">
              <div className="~size-[4rem]/[8.0137500763rem] rounded-full flex items-center justify-center bg-gradient-to-l from-[#080808] to-[#151515]">
                <Image
                  src={archive}
                  alt="tick"
                  className="~size-[1.75rem]/[3.125rem]"
                />
              </div>
            </div>
            <div className="font-bold  text-white ~pt-[1rem]/[1.5rem] text-center ~pb-[0.75rem]/[1.25rem] ~text-[0.75rem]/[1.25rem] leading-[120%] ">
              Battle-tested trading playbooks
            </div>
            <p className="~text-[0.625rem]/[1rem] leading-[120%] px-2 text-center text-[#ADADAD]">
              Apply ready-to-use setups and execution frameworks.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SecondSection;
