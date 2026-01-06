import ArrowSvg from "@/components/svg/ArrowSvg";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Image from "next/image";
import React from "react";
import person from "@public/images/founder-shanu-img.png";
import { ButtonAnimation } from "@/components/ButtonAnimation";
import Link from "next/link";
import EnrollCTA from "./EnrollCta";

const courses = [
    {
    image: "/images/courseImage.png",
    title: "Online Trading Course",
    link: "/courses/online",
    description:
"Start by mastering trading through live online practical sessions, applying strategies in real-time markets. Build a solid foundation with structured lessons from basic to advanced theory, sharpen your mindset with focused psychology training, gain insights from experienced traders in guest lectures, and stay engaged through an exclusive club that fuels ongoing growth." ,
  },
  {
    image: "/images/blogs/blog-9.jpg",
    title: "Technical Course",
    link: "/courses/technical",
    description:
"Start with studying in a live trading floor environment. Learn basic to advanced technical theory, apply it through practical live sessions, and build consistency with focused psychology training. Get 30 days of live trading floor access, learn directly from experts in guest lectures, and continue your journey with exclusive club access."  },
  {
    image: "/images/courseImage2.png",
    title: "Advanced Technical Course",
    link: "/courses/advanced",
    description:
"Start with studying in a live trading floor with a funded account. Advance from basic to professional-level theory, sharpen execution through intensive practical sessions, and master consistency with psychology training. Get 30 days of live trading floor access, learn from industry experts in guest lectures, unlock exclusive club access, and move toward real careers with placement opportunities and trading capital support."  },
];

const CourseSection = () => {
  return (
    <div className=" z-50 relative  bg-black">
      <div className="~px-[0.75rem]/[6.25rem] relative z-50 mx-auto max-w-[1440px] ~pt-[2.6875rem]/[9.0625rem]">
        <div className="flex flex-col items-center ">
          <ButtonBrown content="Explore Courses" />

          <div className="text-[#FFFFFF] md:font-bold font-normal font-merriweather text-center ~text-[1.375rem]/[3.25rem] md:leading-[120%] leading-[100%] md:tracking-[-0.05rem] tracking-[0%] ~py-[0.625rem]/[0.75rem]">
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
              className={`sticky ${
                index === 0 ? "top-[9rem]" : " top-[12rem]"
              }`}
            >
              <div className="p-[1px]  bg-gradient-to-br ~rounded-[0.895rem]/[3rem] from-[#333333] to-[#111111]">
                <div className="relative ~min-h-[15.875rem]/[41.8125rem] md:h-[70svh] ~rounded-[0.895rem]/[3rem] overflow-hidden ">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]  opacity-[] z-50 to-transparent"></div>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover opacity-60  z-0"
                  />

                  <div className="relative z-50 ~px-[0.875rem]/[4.125rem]">
                    <div className="font-merriweather font-normal md:font-bold ~text-[1rem]/[3.25rem] ~leading-[1.0281rem]/[4.25rem] lg:tracking-[-0.02em] tracking-[-0.07em] text-[#FFFFFF] ~pt-[2.125rem]/[15.5625rem]">
                      {course.title}
                    </div>
                    <div className="font-satoshi md:font-bold font-normal ~text-[0.75rem]/[1rem]  leading-[120%] ~tracking-[-0.004375rem]/[-0.015rem] text-[#FFF4E3] ~mt-[0.625rem]/[1rem]">
                      {course.description}
                    </div>

                    <div className="flex ~gap-[0.5rem]/[1.25rem] ~pt-[0.625rem]/[3.9375rem]">
                      <ButtonAnimation>
                        <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#DFAB60] to-[#DFAB601A] w-fit">
                          <Link
                            href={course.link}
                            className="flex items-center ~gap-[0.35rem]/[0.62rem] ~rounded-[0.9938rem]/[4.125rem] cursor-pointer transition-all duration-300 ease-in-out ~py-[0.375rem]/[0.5rem] ~px-[0.375rem]/[1rem] hover:bg-transparent bg-[#111111]"
                          >
                            <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                              View Details
                            </div>

                            <ArrowSvg className="text-white ~h-[0.3688rem]/[0.625rem] w-auto" />
                          </Link>
                        </div>
                      </ButtonAnimation>

                      <EnrollCTA />
                      {/* <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                          <div className="flex items-center ~gap-[0.35rem]/[0.62rem] ~rounded-[0.9938rem]/[4.125rem] cursor-pointer transition-all duration-300 ease-in-out ~py-[0.375rem]/[0.5rem] ~px-[0.375rem]/[1rem] hover:bg-[#111] bg-transparent">
                            <div className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
                              Enroll Now
                            </div>
  
                            <ArrowSvg className="text-white ~h-[0.3688rem]/[0.625rem] w-auto" />
                          </div>
                        </div> */}
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
                <div className="relative w-full bg-gradient-to-b from-[#101010]   ~pb-[0.7344rem]  ~rounded-[0.75rem]/[3rem] flex flex-col">
                  <div className="~pl-[0.9219rem]/[2.625rem] md:pt-[2.625rem] ~pb-[1rem]/[2.625rem] ">
                    <div className="md:flex hidden">
                      <ButtonBrown content="Founder Talks" />
                    </div>{" "}
                    <div className=" relative z-10 ">
                      <div className="font-merriweather md:font-bold font-normal ~text-[1.25rem]/[4rem] leading-[115%] ~tracking-[-0.0175rem]/[-0.07rem] text-[#FFFFFF]  ~pt-[2rem]/[4.5rem]  bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent ">
                        Lead.
                        <div className="text-[#F1F1EF]">
                          Anywhere.
                          <br /> Anytime.
                        </div>
                      </div>
                      <div className="font-satoshi md:font-bold font-normal ~pb-[1.125rem]/[2.5rem] ~text-[0.625rem]/[1.25rem] leading-[115%] ~tracking-[-0.0037rem]/[-0.015rem] text-[#FFF4E3] ~mt-[0.2575rem]/[0.875rem] md:max-w-[30ch] max-w-[25ch]  lg:max-w-[35ch]">
                        Get straight to the mindset, methods, and market
                        principles from the desk of a trading pro. Scan the
                        highlights. Go deeper when it counts.
                      </div>
                      <ButtonAnimation>
                        <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                          <Link
                            href={"/about-us"}
                            className="flex items-center ~gap-[0.35rem]/[0.62rem] ~rounded-[0.9938rem]/[4.125rem] cursor-pointer transition-all duration-300 ease-in-out ~py-[0.375rem]/[0.5rem] ~px-[0.375rem]/[1rem] bg-[#111] hover:bg-transparent"
                          >
                            <div className="text-white font-semibold font-geist ~text-[0.5625rem]/[1rem] leading-[120%] tracking-[-1.2%]">
                              Read More
                            </div>

                            <ArrowSvg className="text-white ~h-[0.3688rem]/[0.625rem] w-auto" />
                          </Link>
                        </div>
                      </ButtonAnimation>
                    </div>
                  </div>

                  <div className="absolute max-lg:~right-[-6rem]/[-9rem]  max-lg:-translate-x-1/2 lg:~right-[0rem]/[1.5rem] ~top-[-1rem]/[-8.15rem] md:~top-[1rem]/[-3.15rem] lg:~top-[1.2rem]/[-6.125rem] w-fit h-full ">
                    <div className=" h-auto relative ">
                      <Image
                        src={person}
                        alt="Course Image"
                        className="z-0  shrink-0 ~w-[10.9025rem]/[30rem]  object-contain h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#101010]/70   to-transparent z-10 "></div>
                    </div>
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
