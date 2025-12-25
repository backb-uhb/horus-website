import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const textArray = [
  "🧠 View Analysis",
  "🚀 Join Trade",
  "💡 See Opportunity",
  "📈 Trade Alert",
  "⚡ Execute Trade",
];

const FeaturesSection = () => {
  return (
    <div className="relative z-10 bg-black">
      <div className="flex ~px-[0.6875rem]/[12.5rem] flex-col items-center ~py-[3rem]/[7.1875rem] text-white ">
        <div className="grid grid-cols-2 md:grid-cols-3 ~gap-[0.5rem]/[1.5rem]  ">
          <div className="col-span-2  p-[1px] bg-gradient-to-br overflow-hidden from-[#333333] h-full to-[#111111] ~rounded-[1.4119rem]/[3rem]">
            <div className=" flex justify-between h-full  flex-col bg-gradient-to-b to-[#0f0f0f] from-[#121212] ~rounded-[1.4119rem]/[3rem] overflow-hidden ">
              <div className=" relative w-full  ~rounded-[1.4119rem]/[3rem] ~h-[8.0625rem]/[13.0625rem] ">
                <Image
                  src={"/images/courses-image-2.png"}
                  alt="image"
                  fill
                  className="object-cover object-[center_37%] "
                />
              </div>

              <div className="flex items-end ~gap-[0.5rem]/[0.75rem] ~mt-[-1rem]/[-4rem] ~px-[1rem]/[2.875rem] ">
                <div className="relative ~size-[5rem]/[9.7031rem]  ">
                  <Image
                    src={"/images/horus-academy-logo.png"}
                    alt="Horus-Academy-img"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-normal font-merriweather ~text-[0.875rem]/[1.5rem]  leading-[120%] tracking-[-0.0163rem] text-[#F7F8F8] ">
                    Exclusive Discord access
                  </div>
                  <div className="pt-[0.625rem]">
                    <button className="flex items-center gap-[0.5rem]  hover:scale-110 duration-300 transition-all ease-in-out text-[#FFFFFF] font-satoshi font-normal  text-[0.6913rem] leading-[0.79rem] tracking-[2%] gradient-bg-fill-new gradient-border ~px-[0.75rem]/[1rem] ~py-[0.35rem]/[0.5rem]">
                      <div className="relative ~w-[0.8rem]/[1.125rem] ~h-[0.6rem]/[0.8562rem] ">
                        <Image
                          src={"/images/symbol-rounded.svg"}
                          alt="symbol"
                          fill
                          className="  object-cover "
                        />
                      </div>
                      Join our Discord
                    </button>
                  </div>
                </div>
              </div>

              <div className="font-inter ~text-[0.625rem]/[0.9844rem] max-w-[65ch] leading-[120%] tracking-[0%] text-[#FFFFFF]  font-normal  ~pt-[1rem]/[2rem] ~px-[1rem]/[3rem]">
                Join our Premium Discord Channel—your go-to space for feedback,
                trade discussions, and community support. Stay connected, get
                help, and grow alongside fellow students.
              </div>

              <div className="~pt-[0.625rem]/[1rem] ~pb-[0.65rem]/[1.6875rem] overflow-hidden">
                <Marquee autoFill={false} speed={30} pauseOnHover={true}>
                  {textArray.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#FFFFFF1A] ~mx-[0.1688rem]/[0.75rem] ~px-[0.3825rem]/[0.8125rem] rounded-full md:font-bold font-medium font-inter ~leading-[0.8237rem]/[1.75rem] ~text-[0.3825rem]/[0.8125rem] text-[#F7F8F8] whitespace-nowrap"
                    >
                      {item}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between h-full items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
            <div className="col-span-1 flex flex-col bg-gradient-to-b to-[#0f0f0f] h-full from-[#121212] ~rounded-[1.4119rem]/[3rem] overflow-hidden  ">
              <div className="flex justify-center ~pt-[0.75rem]/[1.9375rem]">
                <div className="relative ~w-[9.0625rem]/[16.2488rem] ~h-[7.8rem]/[14.0331rem] ">
                  <Image
                    src={"/images/Calendar.svg"}
                    alt="calendar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="~px-[0.5rem]/[1.9375rem] h-full">
                <div className="font-normal font-merriweather ~text-[0.875rem]/[1.5rem] text-center leading-[120%] tracking-[-0.0163rem] text-[#F7F8F8]  ~pt-[1rem]/[2.1606rem]">
                  Monthly Catch-ups
                </div>
                <div className="font-inter font-normal ~text-[0.625rem]/[0.9844rem] text-center leading-[120%] tracking-[0%] text-[#FFFFFF] pt-[1rem] pb-[1.5rem]">
                  Book a monthly session to work on your weak spots. Guidance
                  will be tailored using your actual trade data, so consistent
                  trading activity is required.
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3  p-[1px] bg-gradient-to-br overflow-hidden from-[#333333] h-full to-[#111111] ~rounded-[1.4119rem]/[3rem]">
            <div className="flex flex-col  bg-gradient-to-b to-[#0f0f0f] h-full from-[#121212] ~rounded-[1.4119rem]/[3rem] overflow-hidden ">
              <div className="flex justify-evenly md:flex-row flex-col">
                <div className="relative ~w-[9.0625rem]/[27.5237rem] ~h-[8rem]/[21.375rem] pt-[1.875rem] ">
                  <Image
                    src={"/images/Mask Group.svg"}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="  md:~pt-[2rem]/[5.125rem] py-[1rem] md:py-0  flex flex-col ~px-[0.5rem]/[1rem] ">
                  <div className="font-normal font-merriweather ~text-[0.875rem]/[1.5rem] leading-[120%] tracking-[-0.0163rem] text-[#F7F8F8]   ">
                    Trading Psychology
                  </div>
                  <div className="font-inter ~text-[0.625rem]/[0.9844rem] leading-[120%] max-w-[45ch] tracking-[0%] text-[#FFFFFF] font-normal  ~pt-[0.5rem]/[1rem]">
                    Fear of losing or being wrong often leads to costly trading
                    mistakes. We offer 1-on-1 sessions to help students overcome
                    emotional hurdles and build a strong, positive mindset.
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

export default FeaturesSection;
