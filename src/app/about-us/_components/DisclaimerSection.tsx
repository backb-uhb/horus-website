import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Link from "next/link";
import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="bg-black ~px-[0.625rem]/[7.4375rem] ~pt-[2rem]/[8.125rem] ~pb-[3rem]/[6.75rem]">
      <div className="relative w-fit p-[1px] bg-gradient-to-br ~rounded-[0.75rem]/[3rem] from-[#333333] h-full to-[#111111]">
        <div className=" ~p-[1rem]/[2.625rem]  bg-gradient-to-t from-[#171717] to-[#101010] ~rounded-[0.75rem]/[3rem]">
          <ButtonBrown content="Disclaimer" />
          <div className="font-merriweather text-[#FFFFFF] ~text-[1.375rem]/[3.25rem] leading-[120%] ~tracking-[-0.07rem]/[-0.05rem] font-normal ~py-[0.75rem]/[1.5rem]">
            Read Before You Trade
          </div>
          <div className="font-satoshi font-normal ~text-[0.75rem]/[1.25rem] leading-[120%] tracking-[0%] text-[#FFF4E3]">
            Horus is for educational purposes only and does not offer financial
            advice
          </div>
          <div className="font-satoshi font-normal ~text-[0.875rem]/[1.5rem] ~pb-[2rem]/[3.4375rem] leading-[120%]  tracking-[-0.015rem] text-[#FFF4E3] ~pt-[2rem]/[7.5625rem]">
            Horus is an educational platform and does not provide financial or
            investment advice. All content is for learning purposes only.
            Trading and investing involve risk, and past performance does not
            guarantee future results. Users should consult a licensed financial
            advisor before making financial decisions. Horus is not liable for
            any losses incurred.
          </div>
          <div>
            <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
              <Link href={"/disclaimer"} className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-[#161616] hover:bg-transparent">
                <button className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                  Read More
                </button>

                <ArrowSvg className="text-white h-[0.625rem] w-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerSection;
