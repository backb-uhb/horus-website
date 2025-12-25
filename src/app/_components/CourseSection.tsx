import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Image from "next/image";
import React from "react";
import person from "@public/images/founder-shanu-img.png";
import { ButtonAnimation } from "@/components/ButtonAnimation";
import Link from "next/link";

const courses = [
  {
    image: "/images/courseImage.png",
    title: "Technical Course",
    link:"/courses/technical",
    description:
      "Unlock a structured, mentor-led program designed to equip you with practical trading skills from day one. Gain deep insights into market structures, chart patterns, and psychological strategies used by top traders. Includes exclusive live trading floor access and a blend of technical, fundamental, and risk management modules.",
  },
  {
    image: "/images/courseImage2.png",
    title: "Advanced Technical Course",
    link:"/courses/advanced",
    description:
      "This high-impact course is built for traders ready to go beyond the basics. Dive into advanced market theories, price action mastery, liquidity zones, order flow, and institutional trading techniques. Learn through real-time live floor sessions, case studies, and expert mentorship. Designed for serious traders aiming to scale skill—and capital—with precision.",
  },
];

const CourseSection = () => {
  return (
    <div className="~px-[0.75rem]/[6.25rem]  ~pt-[2.6875rem]/[9.0625rem]">
      <div className="flex flex-col items-center ">
        <ButtonBrown content="Explore Courses" />

        <div className="text-[#FFFFFF] md:font-bold font-normal font-merriweather text-center ~text-[1.375rem]/[3.5rem] md:leading-[120%] leading-[100%] md:tracking-[-0.05rem] tracking-[0%] ~py-[0.625rem]/[0.75rem]">
          Step In.{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Stay Sharp.
          </span>
        </div>
        <div className="text-[#FFFFFF] font-inter text-center md:font-bold font-normal ~text-[0.75rem]/[1rem] tracking-[0%] leading-[100%] md:leading-[1.5rem]">
          See how intensity, culture, and focus shape every move we make.
        </div>
      </div>
      <div className="~pt-[1.875rem]/[4.5rem] space-y-8">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="sticky" 
            style={{ top: `${7 + index * 2}rem` }}
          >
            <div className="p-[1px]  bg-gradient-to-br ~rounded-[0.895rem]/[3rem] from-[#333333] to-[#111111]">
              <div className="relative ~min-h-[15.875rem]/[41.8125rem]. h-[70svh] ~rounded-[0.895rem]/[3rem] overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]  opacity-[] z-50 to-transparent"></div>
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover opacity-60  z-0"
                />

                <div className="relative z-50 ~px-[0.875rem]/[4.125rem]">
                  <div className="font-merriweather font-normal md:font-bold ~text-[1.2331rem]/[3.5rem] ~leading-[1.2681rem]/[4.25rem] lg:tracking-[-0.02em] tracking-[-0.07em] text-[#FFFFFF] ~pt-[2.125rem]/[15.5625rem]">
                    {course.title}
                  </div>
                  <div className="font-satoshi md:font-bold font-normal ~text-[0.75rem]/[1.rem]  leading-[120%] ~tracking-[-0.004375rem]/[-0.015rem] text-[#FFF4E3] ~mt-[0.625rem]/[1rem]">
                    {course.description}
                  </div>

                  <div className="flex ~gap-[0.5rem]/[1.25rem] ~pt-[1.875rem]/[3.9375rem]">
                    <ButtonAnimation>
                      <div  className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#DFAB60] to-[#DFAB601A] w-fit">
                        <Link href={course.link} className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] hover:bg-transparent bg-[#111111]">
                          <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                            View Details
                          </div>

                          <ArrowSvg className="text-white h-[0.625rem] w-auto" />
                        </Link>
                      </div>
                    </ButtonAnimation>

                    <ButtonAnimation>
                      <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                        <div  className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] hover:bg-[#111] bg-transparent">
                          <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                            Enroll Now
                          </div>

                          <ArrowSvg className="text-white h-[0.625rem] w-auto" />
                        </div>
                      </div>
                    </ButtonAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="md:hidden flex ~py-[2rem]/[3rem] justify-center ">
          <ButtonBrown content="Founder Talks" />
        </div>
        <div className="~pt-[3.5625rem]/[13.25rem]">
          <div className="p-[1px]  bg-gradient-to-br  ~rounded-[0.75rem]/[3rem] from-[#333333] to-[#111111] ">
            <div className="bg-black/50 ~rounded-[0.75rem]/[3rem]">
              <div className="relative w-full bg-gradient-to-b from-[#101010]   ~pb-[0.7344rem]  ~rounded-[0.75rem]/[3rem] ~min-h-[19.1875rem]/[41.8125rem] flex flex-col">
                <div className="~pl-[0.9219rem]/[2.625rem] md:pt-[2.625rem] ~pb-[1rem]/[2.625rem] ">
                  <div className="md:flex hidden">
                    <ButtonBrown content="Founder Talks" />
                  </div>{" "}
                  <div className=" relative z-10 ">
                    <div className="font-merriweather md:font-bold font-normal ~text-[1.375rem]/[5.5rem] leading-[115%] ~tracking-[-0.0175rem]/[-0.07rem] text-[#FFFFFF]  pt-[6.7425rem] md:[5.5rem] bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent ">
                      Lead.
                      <div className="text-[#F1F1EF]">
                        Anywhere.
                        <br /> Anytime.
                      </div>
                    </div>
                    <div className="font-satoshi md:font-bold font-normal ~pb-[1.125rem]/[3.4375rem] ~text-[0.75rem]/[1.5rem] leading-[115%] ~tracking-[-0.0037rem]/[-0.015rem] text-[#FFF4E3] ~mt-[0.2575rem]/[0.875rem]  lg:max-w-[30ch]">
                      Get straight to the mindset, methods, and market
                      principles from the desk of a trading pro. Scan the
                      highlights. Go deeper when it counts.
                    </div>
                    <ButtonAnimation>
                      <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                        <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-[#111] hover:bg-transparent">
                          <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                            Read More
                          </div>

                          <ArrowSvg className="text-white h-[0.625rem] w-auto" />
                        </div>
                      </div>
                    </ButtonAnimation>
                  </div>
                </div>

<div className="absolute max-lg:left-[75%] max-lg:-translate-x-1/2 lg:~right-[-10.9656rem]/[3rem] ~top-[-5rem]/[-13.25rem] w-fit h-full ">
  <div className="~h-[17.1381rem]/[50rem] relative ~w-[10.9025rem]/[35rem] overflow-hidden">
    <Image
      src={person}
      alt="Course Image"
      fill
      className="z-0 object-cover"
    />
    {/* Bottom fade mask - completely blends to transparent */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/85  to-transparent z-10 pointer-events-none"></div>
  </div>
</div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;