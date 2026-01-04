"use client";
import Accordion from "@/components/svg/Accordion";
import ButtonBrown from "@/components/svg/ButtonBrown";
import Notes from "@/components/svg/Notes";
import PlayIcon from "@/components/svg/PlayIcon";
import PlaySvg from "@/components/svg/PlaySvg";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
const questions = [
  {
    title: "Market structure, participants, and trading fundamentals",
    description: [
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Economic events and market-moving news",
      "Basic market cycles and trending vs ranging environments",
    ],
  },

  {
    title: "Platform setup, order types, and execution basics",
    description: [
      "Market makers vs retail traders and liquidity concepts",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Economic events and market-moving news",
      "Basic market cycles and trending vs ranging environments",
    ],
  },
  {
    title: "Chart reading, trends, support & resistance levels",
    description: [
      "Basic market cycles and trending vs ranging environments",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Economic events and market-moving news",
    ],
  },
  {
    title: "Moving averages, RSI, MACD, and key oscillators",
    description: [
      "Economic events and market-moving news",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Basic market cycles and trending vs ranging environments",
    ],
  },
  {
    title: "Position sizing, stop loss, and money management",
    description: [
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Basic market cycles and trending vs ranging environments",
      "Economic events and market-moving news",
    ],
  },
  {
    title: "Head & shoulders, triangles, and breakout patterns",
    description: [
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Economic events and market-moving news",
      "Basic market cycles and trending vs ranging environments",
    ],
  },

  {
    title: "Top-down analysis and timeframe correlation",
    description: [
      "Market makers vs retail traders and liquidity concepts",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Economic events and market-moving news",
      "Basic market cycles and trending vs ranging environments",
    ],
  },
  {
    title: "Fear, greed control, and emotional discipline",
    description: [
      "Basic market cycles and trending vs ranging environments",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Economic events and market-moving news",
    ],
  },
  {
    title: "Momentum, mean reversion, and trend strategies",
    description: [
      "Economic events and market-moving news",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Basic market cycles and trending vs ranging environments",
    ],
  },
  {
    title: "Strategy design, backtesting, and optimization",
    description: [
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Basic market cycles and trending vs ranging environments",
      "Economic events and market-moving news",
    ],
  },
  {
    title: "Real-time trading with mentorship and guidance",
    description: [
      "Economic events and market-moving news",
      "Market types and trading sessions (forex, stocks, crypto timing)",
      "Market makers vs retail traders and liquidity concepts",
      "Basic market cycles and trending vs ranging environments",
    ],
  },
];
const ThirdSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="~py-[2rem]/[8.75rem]  ~px-[0.625rem]/[6.25rem]">
      <div className="flex flex-col items-center">
        <ButtonBrown content="Learn How the Pros Trade" />
        <div className="font-merriweather text-[#FFFFFF]  font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center ~pt-[0.625rem]/[1.5rem]">
          Build Real
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            {" "}
            Trading Skill.
          </span>{" "}
        </div>{" "}
        <div className="font-merriweather text-[#FFFFFF]  font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center">
          Unlock Serious
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            {" "}
            Earning Potential.
          </span>
        </div>
      </div>

      <div className="~pt-[2rem]/[4rem] flex md:flex-row ~gap-[1rem]/[3.25rem] flex-col">
        <div className="md:w-[35%] font-satoshi">
          <div className="text-[0.875rem] ~pb-[0]/[1rem] text-white font-bold leading-[1.875rem] tracking-[0.02em]">
            Hear from our Mentor
          </div>
          <div className="bg-[#1D1D1D] ~rounded-[0.625rem]/[1.5rem]">
            <div
              className="shrink-0 w-full 
               ~h-[10.75rem]/[13.7839136124rem]
                ~rounded-[0.625rem]/[1.5rem]
                border border-[#FFFFFF1A]
                overflow-hidden relative group cursor-pointer"
            >
              {!isPlaying ? (
                <>
                  <div
                    className="absolute inset-0 z-0"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Image
                      src="/images/youtube-thumbnail-img.png"
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-[45%] z-10
                      bg-gradient-to-t
                      from-[#F3C070]/40
                      to-transparent"
                  />
                  <div
                    className="absolute inset-0 z-20
                   flex items-center justify-center
                   bg-black/30 group-hover:bg-black/40
                   transition-colors"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div
                      className="size-[1.8369rem] bg-white rounded-full
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform"
                    >
                      <PlayIcon className="w-[0.5356rem] h-[0.8044rem]" />
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/EsiZqb_RRQU?autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>

            <div className="text-white  ~pt-[0.3rem]/[0.5rem] ~pb-[0.75rem]/[1rem] ~px-[0.75rem]/[1rem]">
              <h2 className="font-bold leading-[1.875rem] text-[0.875rem]">
                Manu, Trainer
              </h2>
              <p className=" leading-[120%] text-[0.875rem]">
                Gain insights directly from Meera, our seasoned trading mentor,
                as she shares real-world strategies, lessons from the markets,
                and tips to build your confidence as a trader.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="md:w-[65%]">
          <div className="flex flex-col ~gap-[0.5rem]/[0.75rem]">
            {" "}
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Disclosure key={index}>
                  <div className=" z-40 bg-[#1D1D1D] ~rounded-[0.625rem]/[1.25rem] ~p-[0.625rem]/[1.5rem]">
                    <DisclosureButton
                      onClick={() => setOpenIndex(index)}
                      className={`w-full   `}
                    >
                      <div
                        className={` duration-500 flex justify-between gap-[0.5rem]  font-inter ~text-[0.75rem]/[1.125rem] leading-[120%] text-white font-medium ease-in-out transition-all 
                  `}
                      >
                        <h3 className="flex items-center text-start ~gap-[0.5rem]/[1.25rem]">
                          <p
                            className={` duration-500 ease-in-out transition-colors ${
                              isOpen ? "text-[#DFAB60]" : "text-white"
                            }`}
                          >
                            <Notes className="~size-[1rem]/[1.5rem] shrink-0" />
                          </p>{" "}
                          {item.title}
                        </h3>
                        <Accordion
                          className={`transition-transform rotate-90 ~w-[0.3591911197rem]/[0.5625rem] shrink-0 duration-300 ${
                            isOpen ? "rotate-[0deg]" : ""
                          }`}
                        />{" "}
                      </div>
                    </DisclosureButton>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="  font-inter ~text-[0.75rem]/[1.125rem] flex flex-col  leading-[120%] text-white">
                            {item.description.map((item, i) => (
                              <div key={i} className="pt-[0.2rem]">
                                <p className="flex items-center ~pl-[0.5rem]/[1rem] ~gap-[0.75rem]/[1.25rem] ~py-[0.2rem]/[0.5rem]">
                                  {" "}
                                  <PlaySvg className="~size-[0.75rem]/[1.25rem] shrink-0" />
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
