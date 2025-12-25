"use client";
import Image from "next/image";
import ArrowSvg from "../../components/svg/ArrowSvg";
import SpotlightCursor from "@/components/SpotLightCursor";
import { ButtonAnimation } from "@/components/ButtonAnimation";
import Link from "next/link";

const Herosection = () => {
  const rows = 30;
  const cols = 40;
  const cells = Array.from({ length: rows * cols });

  return (
    <div className="">
      <div className="relative flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 h-[100vh]">
          <div
            className="relative z-0 h-[50vh] grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {cells.map((_, i) => (
              <div
                key={i}
                className="w-full h-[100vh] border-[0.5px] border-[#DFAB60]/20"
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
        <div className="relative px-[1rem] w-full h-[100vh] flex flex-col ">
          <div className="absolute inset-0 z-0">
            <Image
              src={"/images/bg-hero.png"}
              alt="background-img"
              fill
              className="object-cover z-0"
            />
            <div className="absolute flex flex-col items-center bottom-[1rem] w-full   z-20">
              <h1
                className="font-merriweather font-normal md:font-bold ~text-[1.5rem]/[3.75rem] leading-[110%]  tracking-[-0.07rem]
                text-center 
                bg-gradient-to-b from-[#ECB45D] max-w-[22ch]  via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent"
              >
                India&apos;s Largest Trading Floor is Now Your Classroom{" "}
              </h1>
              <p className="font-normal text-wrap md:font-bold font-satoshi ~text-[0.75rem]/[1.25rem] leading-[100%] tracking-[2%] ~pt-[0.625rem]/[1rem] text-[#FFF4E3] text-center max-w-[50ch]">
                Transform Small Capital into Generational Wealth, Guided by the
                Proven Strategies of a Self-Made Market Veteran
              </p>
              <ButtonAnimation>
                <div className="relative p-[1px] mt-[2.25rem] rounded-full bg-gradient-to-l from-[#DFAB60] to-[#DFAB601A] w-fit hover:bg-gradient-to-l ">
                  <Link
                    href={"/courses"}
                    className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-gradient-to-l from-[#F3C070] to-[#3B2A16] "
                  >
                    <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                      Get Started
                    </div>

                    <ArrowSvg className="text-white h-[0.625rem] w-auto" />
                  </Link>
                </div>
              </ButtonAnimation>
            </div>

 

            <div className="absolute bottom-[-3rem] z-30 right-0">
              <div className="relative ~w-[10rem]/[30rem] ~h-[56rem]/[12.875rem] ">
                <Image
                  src={"/images/dots.png"}
                  alt="img"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute ~bottom-[0rem]/[-3rem] z-30 left-0">
              <div className="relative ~w-[10rem]/[30rem] h-[12.875rem] ">
                <Image
                  src={"/images/dots.png"}
                  alt="img"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
                       <div className="absolute ~bottom-[0rem]/[-5rem] z-30 ~right-[9rem]/[20rem]">
              <div className="relative ~w-[10rem]/[50rem] h-[20.625rem] ">
                <Image
                  src={"/images/dots-2.svg"}
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
                                             <div className="absolute bottom-[-6rem] z-30 ~left-[9rem]/[20rem] ">
                          <div className="relative ~w-[10rem]/[50rem] h-[20.625rem] ">
                            <Image
                              src={"/images/dots-2.svg"}
                              alt="img"
                              fill
                              className="object-cover rotate-180"
                            />
                          </div>
                        </div>

            {/* <div className="relative ~w-[14.4175rem]/[51.875rem] z-10 ~h-[18.0844rem]/[46.25rem]">
              <Image
                src={"/images/test.png"}
                alt="Firefly"
                fill
                className=" object-contain  "
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
