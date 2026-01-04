import EnrollCTA from "@/app/_components/EnrollCta";
import Image from "next/image";
import React from "react";

const EnrollSection = () => {

  return (
    <div className="~py-[1rem]/[7.625rem] ~px-[1.3125rem]/[14.375rem]">
      <div className="bg-gradient-to-r from-[#613D09] to-[#DFAB60] max-lg:overflow-hidden rounded-[1.25rem] w-full relative lg:~min-h-[20.625rem]/[10.125rem] flex lg:flex-row flex-col items-center">
        <div className="absolute max-md:left-[-4rem] left-[-2rem] bottom-0 max-lg:bottom-[-3.5rem] ">
          <div className="~w-[16rem]/[19.5625rem] ~h-[16rem]/[19.5625rem] relative lg:flex hidden">
            <Image
              src="/images/blogs/boy-img.png"
              alt="img"
              fill
              className="object-cover rounded-bl-[1.25rem] "
            />
          </div>
        </div>

        <div className="lg:~pl-[10rem]/[16.125rem] lg:~w-full px-[0.5rem] flex xl:flex-row flex-col max-lg:pt-[1.875rem] xl:items-center max-lg:items-center justify-between">
          <div>
            <h4 className="text-white font-merriweather font-medium ~text-[1.25rem]/[2rem] max-lg:text-center lg:leading-[2.5rem] leading-[110%] lg:tracking-[0.02em] tracking-[-0.01em]">
             Join Horus Academy
            </h4>

            <p className="font-satoshi ~text-[0.75rem]/[1rem] lg:leading-[1.75rem] max-lg:text-center max-md:tracking-[0.02em]  leading-[140%] text-white font-medium pt-[0.5rem]">
              Empowering students with industry-ready cloud skills for a
              future-proof career.
            </p>
          </div>
          <div className="max-xl:pt-[1.15rem] ~pb-[1.5rem]/[2rem]">
       <EnrollCTA/>
          </div>{" "}
        </div>

      </div>

   
</div>
  );
};

export default EnrollSection;
