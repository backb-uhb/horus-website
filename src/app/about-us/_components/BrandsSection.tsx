"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import brandlogo1 from "@public/images/maicoin.svg";
import brandlogo2 from "@public/images/binance-1.svg";
import brandlogo3 from "@public/images/quantower.svg";
import brandlogo4 from "@public/images/coinex.svg";
import brandlogo5 from "@public/images/group.svg";
import brandlogo6 from "@public/images/l-blank.svg";
import ButtonBrown from "@/components/svg/ButtonBrown";

const brandLogos = [
  {
    image: brandlogo1,
  },
  {
    image: brandlogo2,
  },
  {
    image: brandlogo3,
  },
  {
    image: brandlogo4,
  },
  {
    image: brandlogo5,
  },
  {
    image: brandlogo6,
  },
];

const BrandsSection = () => {
  return (
    <div className="bg-black text-white  text-center flex flex-col items-center ~pt-[0.75rem]/[2rem]">
      <div className="">
        <ButtonBrown content="Accreditation" />
      </div>
      <div className="relative text-center ~pt-[0.75rem]/[1.5rem] font-merriweather tracking-[-0.05rem] leading-[120%] ~text-[1.375rem]/[3.25rem]">
        Led by{" "}
        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
          Industry Experts
        </span>
      </div>
      <p className="font-inter font-normal leading-[130%] max-w-[30ch] tracking-[0%] ~py-[1rem]/[1.5rem]  ~text-[0.75rem]/[1rem]">
        Trained by real traders with hands-on market experience.
      </p>
      <div className="overflow-hidden relative">
        <Marquee gradient={false} speed={40} className=" " autoFill>
          {brandLogos.map((items, i) => (
            <div key={i} className=" ~mx-[0.75rem]/[1.125rem] ">
              <Image
                src={items.image}
                alt={`brand-logo-${i}`}
                className="object-cover ~h-[1.5rem]/[3.125rem] w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>{" "}
    </div>
  );
};

export default BrandsSection;
