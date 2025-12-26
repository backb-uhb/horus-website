"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import LoopingGraphImage from "./LoopingGraph";


const textArray = [
  { name: "📈 Strategy Lab" },
  { name: "🎯 Take Trade" },
  { name: "🧠 Analyze" },
  { name: "🚨 Risk Alert" },
  { name: "📊 Journal Entry" },
];

const Experience = () => {
  return (


   <div>
    {/* <div className="h-screen z-[-1]"></div> */}
      <div className="relative overflow-hidden ">
        {/* <div
    className="absolute top-[4rem] left-1/2 -translate-x-1/2 backdrop-blur-2xl
    bg-gradient-to-t   w-[70%] max-w-[1100px] h-[12rem]
    from-[#ECB76A]/40
    to-[#00000000]  blur-[60px]
    z-0"
  /> */}
  
  
        <div className="absolute flex items-center justify-center ~top-[1rem]/[3rem] left-1/2 -translate-x-1/2">
          <div className=" ~size-[20rem]/[70rem] rounded-t-[7rem] bg-gradient-radial from-[#ECB76A]/40 to-black flex blur-2xl"></div>
        </div>
                   <div className="absolute top-0 z-30 ~right-[9rem]/[20rem] ">
                <div className="relative ~w-[30rem]/[50rem] ~h-[56rem]/[20.625rem] ">
                  <Image
                    src={"/images/dots-2.svg"}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
                              <div className="absolute top-[-8rem] z-30 ~left-[9rem]/[20rem] ">
                <div className="relative ~w-[30rem]/[50rem] ~h-[56rem]/[20.625rem] ">
                  <Image
                    src={"/images/dots-2.svg"}
                    alt="img"
                    fill
                    className="object-cover rotate-90"
                  />
                </div>
              </div>
                                      <div className="absolute top-[-8rem] z-30 ~left-[9rem]/[20rem] ">
                <div className="relative ~w-[30rem]/[50rem] ~h-[56rem]/[20.625rem] ">
                  <Image
                    src={"/images/dots-2.svg"}
                    alt="img"
                    fill
                    className="object-cover rotate-180"
                  />
                </div>
              </div>
              
        <div className=" relative z-40 ">
          <div className="~pt-[2rem]/[8.875rem] ~rounded-t-[3rem]/[12.25rem] bg-[#070707] border-t border-t-[#433827]">
            <div className="  flex flex-col items-center">
              <div className="font-merriweather text-[#F7F8F8]  ~text-[1.375rem]/[3.25rem] text-center leading-[110%] tracking-[-0.07rem] font-normal md:font-bold max-w-[25ch] md:max-w-[20ch]">
                Unlike any{" "}
                <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
                  trading experience
                </span>{" "}
                you&apos;ve had
              </div>
              <div className="text-[#FFF4E3] font-inter text-center font-normal md:font-bold ~text-[0.75rem]/[1.33rem] md:max-w-[38ch] max-w-[40ch] tracking-[0%] leading-[120%]  ~pt-[0.625rem]/[1.4812rem]">
                Crafted for performance and precision, Horus merges elite
                mentorship , immersive infrastructure, and cutting-edge tools ,
                giving you an edge the market can{"'"}t teach.
              </div>
            </div>
            <div className="flex ~px-[0.6875rem]/[12.5rem] flex-col items-center ~pt-[1.5019rem]/[3.75rem] text-white">
              <div className="grid lg:grid-cols-3 grid:cols-2 ~gap-[0.4375rem]/[1.5rem]  ">
                <div className="col-span-2 flex flex-col items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333] h-full to-[#111111] ~rounded-[1.4119rem]/[3rem]">
                  <div className="  ~rounded-[1.4119rem]/[3rem] bg-black/50 w-full  h-full">
                    <div className="flex flex-col justify-between ~rounded-[1.4119rem]/[3rem] items-center bg-gradient-to-b to-[#111111] from-[#0f0f0f1d]  overflow-hidden ~py-[1.375rem]/[3.25rem] w-full h-full">
                      {/* <GraphSvg className="w-full  h-auto" /> */}
  <LoopingGraphImage/>
                      <div className="~py-[0.9375rem]/[2rem]  ">
                            <Marquee speed={30} >
                              {textArray.map((item, i) => (
                                <div
                                  key={i}
                                  className="bg-[#FFFFFF1A] ~mx-[0.1688rem]/[0.75rem] ~px-[0.3825rem]/[0.8125rem] rounded-full md:font-bold font-medium font-inter ~leading-[0.8237rem]/[1.75rem] ~text-[0.3825rem]/[0.8125rem] text-[#F7F8F8] whitespace-nowrap"
                                >
                                  {item.name}
                                </div>
                              ))}
                            </Marquee>
                          </div>
  
                      <div className="flex flex-col items-center">
                        <div className="md:font-bold font-normal font-merriweather ~text-[0.75rem]/[1.5rem] text-center leading-[120%] ~tracking-[-0.0075rem]/[-0.0163rem] text-[#F7F8F8] ">
                          Designed to train pros, not spectators
                        </div>
                        <div className="font-inter ~text-[0.625rem]/[0.9844rem]  leading-[110%] tracking-[0%] text-[#FFFFFF] text-center md:font-bold font-normal ~pt-[0.4625rem]/[1rem]">
                          We don{"'"}t teach theory. We replicate the <br />
                          pressure and pace of actual trading desks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333] h-full to-[#111111] ~rounded-[1.4119rem]/[3rem]">
                  <div className="absolute bottom-0 h-[90%] z-20 w-full bg-gradient-to-t from-[#111] to-transparent"></div>{" "}
                  <div className="  ~rounded-[1.4119rem]/[3rem] bg-black/50 w-full  h-full">
                    <div className=" flex flex-col  bg-gradient-to-b  to-[#111111] from-[#0f0f0f1d]  ~rounded-[1.4306rem]/[3rem] overflow-hidden ~pt-[1rem]/[1.2rem] ~pb-[0.75rem]/[1.5rem] ">
                      <div className="flex justify-end">
                        <div className="relative ~w-[9.0625rem]/[18.75rem]  ~h-[8.485rem]/[17.75rem]">
                          <Image
                            src={"/images/HorusImage.png"}
                            alt="Image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="~px-[0.4375rem]/[1.9375rem]   -mt-[1rem] relative z-30">
                        <div className=" max-w-[20ch] md:font-bold font-normal  font-merriweather ~text-[0.75rem]/[1.5rem] md:text-center leading-[120%] ~tracking-[-0.0075rem]/[-0.0163rem] text-[#F7F8F8]   ">
                          Built for live market learning
                        </div>
                        <div className="font-inter md:font-bold font-normal ~text-[0.625rem]/[0.9844rem] md:text-center  leading-[110%] tracking-[0%] text-[#FFFFFF] ~pt-[0.4688rem]/[1rem] ">
                          Our students don{"'"}t just study charts, they trade in
                          real time on India{"'"}s largest trading floor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col pb-1 ~rounded-[1.4306rem]/[3rem] overflow-hidden relative">
                  <div className="~w-[9.0625rem]/[19rem] ~h-[14.3387rem]/[30rem]">
                    <Image
                      src={"/images/Image2.svg"}
                      alt="Image"
                      fill
                      className="w-full h-full object-cover ~rounded-[1.4306rem]/[3rem]"
                    />
                  </div>
  
                  <div className="absolute inset-0 flex flex-col md:items-center justify-center text-center ~pt-[8.2369rem]/[18.3125rem]">
                    <div className="font-merriweather font-normal md:font-bold md:max-w-[20ch] max-w-[10ch] md:text-center text-start max-md:px-[0.3125rem] ~text-[0.75rem]/[1.5rem] ~leading-[0.93rem]/[1.95rem] ~tracking-[-0.0075rem]/[-0.0163rem] text-[#F7F8F8]">
                      Mentorship, redefined
                    </div>
                    <div className="font-inter font-normal md:font-bold ~text-[0.6rem]/[1rem] md:text-center leading-[110%] tracking-[0%] ~mt-[0.4rem]/[1rem] text-start max-w-[24ch] ~px-[0.2813rem]/[1rem] ">
                      Get access to seasoned traders who{"'"}ve lived the charts
                      and teach what works, not what{"'"}s textbook.
                    </div>
                  </div>
                </div>
                <div className="col-span-2 flex flex-col items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333] h-full to-[#111111] ~rounded-[1.4119rem]/[3rem]">
                  <div className="  ~rounded-[1.4119rem]/[3rem] bg-black/50 w-full  h-full">
                    <div className=" flex flex-col bg-gradient-to-b to-[#111111] from-[#0f0f0f1d]  ~rounded-[1.41rem]/[3rem] overflow-hidden ~pt-[1.5rem]/[3.4375rem] ~pb-[1.5rem]/[1.75rem]">
                      <div className="flex flex-col items-center">
                        <div className="md:font-bold font-normal font-merriweather ~text-[0.75rem]/[1.5rem] text-center ~leading-[0.9163rem]/[1.95rem] ~tracking-[-0.0075rem]/[-0.0163rem] text-[#F7F8F8] ">
                          Powered by real data and real results
                        </div>
                        <div className="font-inter ~text-[0.625rem]/[0.9844rem] leading-[110%] text-center tracking-[0%] text-[#FFFFFF] md:font-bold font-normal ~p-[0.5rem]/[1rem] md:max-w-[42ch] max-w-[38ch]">
                          Your training is backed by actual market movements, not
                          simulations, so you{"'"}re always learning in context.
                        </div>
                      </div>
                      <div className="relative ~w-[13.9375rem]/[29.75rem] ~h-[8.875rem]/[18.875rem]">
                        <Image
                          src={"/images/graph.png"}
                          alt="Graph Image"
                          fill
                          className="object-cover"
                        />
                      </div>
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

export default Experience;
