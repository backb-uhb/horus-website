import ButtonBrown from "@/components/svg/ButtonBrown";
import Image from "next/image";
import React from "react";

const FounderSection = () => {
  return (
    <div className="bg-black ~px-[0.625rem]/[7.4375rem]">
      <div className="">
        <ButtonBrown content="Founder Talks" />
        <div className="flex md:flex-row items-center gap-[1.5rem] md:~gap-[-5rem]/[7rem] flex-col-reverse pt-[1.875rem] ~pb-[4rem]/[17.6875rem] justify-between">
          <div className="md:w-[60%]">
            <div className="">
              <div className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent font-normal font-merriweather ~text-[1.25rem]/[3.5rem] leading-[120%] ~tracking-[-0.0175rem]/[-0.07rem]">
                Muhammed Shanu
              </div>
              <div className="font-satoshi font-normal text-[1.125rem] leading-[1.5rem] tracking-[-0.015rem] text-[#FFF4E3]">
                Founder Of Horus Fianancial Academy
              </div>
            </div>
            <div className="font-satoshi font-normal ~space-y-[1rem]/[2rem] md:~pr-[0]/[4rem] ~text-[0.75rem]/[1.5rem] text-[#FFF4E3] ~pt-[1rem]/[1.875rem] leading-[130%] ~tracking-[-0.00375rem]/[-0.015rem] ">
              <div>
                What began as one person’s relentless pursuit of financial
                independence evolved into one of India’s most powerful trading
                communities. The founder’s early days were shaped by trial,
                error, and a lack of credible guidance, a reality most new
                traders still face today.
              </div>
              <div>
                Horus Financial Academy was created to change that. Driven by
                real market experience and backed by data, Horus empowers
                individuals to trade with skill, confidence, and clarity. With
                India’s largest trading floor, expert-led programs, and a
                mission to make advanced trading education truly accessible,
                Horus is more than a platform, it’s a movement. From zero to
                elite trader, we’re here to make that journey faster, smarter,
                and achievable for everyone.
              </div>
            </div>
          </div>
          <div className="relative md:w-[40%] w-full p-[1px] bg-gradient-to-br   ~rounded-[1rem]/[1.70125rem] from-[#333333] h-full to-[#111111] ">
            <div className="relative h-full ~min-h-[18rem]/[60rem] md:~min-h-[18rem]/[38.75rem] md:h-full shrink-0 overflow-hidden ~rounded-[1rem]/[1.70125rem] w-full ">
              <Image
                src={"/images/founder-img.png"}
                alt="founder image"
                fill
                className="object-cover object-top "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
