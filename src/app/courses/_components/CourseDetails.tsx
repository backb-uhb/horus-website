"use client";
import EnrollButton from "@/app/_components/EnrollButton";
import ButtonBrown from "@/components/svg/ButtonBrown";
import CertificateSvg from "@/components/svg/CertificateSvg";
import CheckSvg from "@/components/svg/CheckSvg";
import ClockSvg from "@/components/svg/ClockSvg";
import CrossSvg from "@/components/svg/CrossSvg";
import PeopleSvg from "@/components/svg/PeopleSvg";
import { motion } from "motion/react";
import Link from "next/link";
type ChecklistItem = {
  id: number;
  text: string;
  completed: boolean;
};

interface ChecklistSectionProps {
  items: ChecklistItem[];
}

const CourseDetails = () => {
  const onlineChecklistItems: ChecklistItem[] = [
    { id: 1, text: "Introduction Into The Markets", completed: true },
    { id: 2, text: "Online Practical Sessions", completed: true },
    { id: 3, text: "Live Trading Floor Access for 30 Days", completed: true },
    { id: 4, text: "Manipulations Of Fundamentals", completed: true },
    { id: 5, text: "Club Access", completed: true },
    { id: 6, text: "Trading Psychology", completed: true },
    {
      id: 7,
      text: "Guest Lecturers (Industry expert, Personal growth )",
      completed: true,
    },
    {
      id: 8,
      text: "Advanced Curriculum (From Introduction to Advanced Level) ",
      completed: true,
    },
    { id: 9, text: "Candlesticks & Chart Patterns", completed: false },
    {
      id: 10,
      text: "Certification Ceremony.",
      completed: false,
    },
    {
      id: 11,
      text: "Traps & Consolidation",
      completed: false,
    },
    { id: 12, text: "Risk Management", completed: false },

    { id: 13, text: "Funded Accounts For Achievers", completed: false },
    { id: 14, text: "Trading Community Access", completed: false },
    { id: 15, text: "Placement Assistance", completed: false },
  ];

  const beginnerChecklistItems: ChecklistItem[] = [
    { id: 1, text: "Introduction Into The Markets", completed: true },
    { id: 2, text: "Candlesticks & Chart Patterns", completed: true },
    { id: 3, text: "Live Trading Floor Access for 15 Days", completed: true },
    { id: 4, text: "Manipulations Of Fundamentals", completed: true },
    { id: 5, text: "Risk Management", completed: true },
    { id: 6, text: "Certification Ceremony.", completed: true },
    { id: 7, text: "Trading Psychology", completed: true },
    { id: 8, text: "Traps & Consolidation", completed: true },
    { id: 9, text: "Online & Offline Classes Available", completed: true },
    {
      id: 10,
      text: "Guest Lecturers (Industry expert, Personal growth )",
      completed: true,
    },
    {
      id: 11,
      text: "Advanced Curriculum (From Introduction to Advanced Level) ",
      completed: true,
    },
    { id: 12, text: "Club Access", completed: false },

    { id: 13, text: "Funded Accounts For Achievers", completed: false },
    { id: 14, text: "Trading Community Access", completed: false },
    { id: 15, text: "Placement Assistance", completed: false },
  ];

  const advancedChecklistItems: ChecklistItem[] = [
    { id: 1, text: "Introduction Into The Markets", completed: true },
    { id: 2, text: "Candlesticks & Chart Patterns", completed: true },
    { id: 3, text: "Live Trading Floor Access for 30 days", completed: true },
    { id: 4, text: "Manipulations Of Fundamentals", completed: true },
    { id: 5, text: "Risk Management", completed: true },
    { id: 6, text: "Certification Ceremony.", completed: true },
    { id: 7, text: "Trading Psychology", completed: true },
    { id: 8, text: "Traps & Consolidation", completed: true },
    { id: 9, text: "Online & Offline Classes Available", completed: true },
    {
      id: 10,
      text: "Guest Lecturers (Industry expert, Personal Growth )",
      completed: true,
    },
    {
      id: 11,
      text: "Advanced Curriculum (From Introduction to Advanced Level) ",
      completed: true,
    },
    { id: 12, text: "Club Access", completed: true },
    { id: 13, text: "Funded Accounts For Achievers", completed: true },
    { id: 14, text: "Trading Community Access", completed: true },
    { id: 15, text: "Placement Assistance", completed: false },
  ];

  const ChecklistSection = ({ items }: ChecklistSectionProps) => (
    <div className="~px-[0.75rem]/[2.5rem] ~pb-[1rem]/[1.875rem]">
      <div className="~space-y-[0.625rem]/[1rem]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center ~space-x-[0.5rem]/[0.75rem]"
          >
            <div className="flex-shrink-0">
              {item.completed ? (
                <CheckSvg className="~size-[0.625rem]/[1rem] " />
              ) : (
                <CrossSvg className="~size-[0.625rem]/[1rem] text-[#666666]" />
              )}
            </div>
            <span
              className={`~text-[0.75rem]/[1.125rem] leading-[120%] tracking-[2%] font-normal font-satoshi ${
                item.completed
                  ? "text-[#FFFFFF]"
                  : "text-[#666666] line-through"
              }`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 w-full">
        <motion.div
          className="w-full h-full bg-[radial-gradient(circle_at_center,#ECB76A33_0%,#ECB76A00_60%,#000000_100%)]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <ButtonBrown content="Level Up Your Trading Game" />
        <div className="font-merriweather text-[#F7F8F8] ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] ~pt-[0.75rem]/[1.5rem] text-center  font-normal max-w-[18ch]">
          Quit Guessing, <br />
          Start &nbsp;
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Trading Like a Pro
          </span>
        </div>
        <div className="font-inter ~text-[0.625rem]/[1rem] leading-[120%]  font-normal text-[#FFFFFF] ~py-[0.75rem]/[1.5rem]">
          Proven strategies to go from beginner to market-ready.
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 ~gap-[1rem]/[2rem] lg:~px-[0.625rem]/[5rem] ~px-[0.625rem]/[16rem] ~py-[1.25rem]/[2.5625rem] ">
        <div className="relative flex flex-col  justify-between h-full items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
          <div className="bg-gradient-to-br from-[#333333] to-[#111111] w-full ">
            <div className="flex items-center gap-[0.5rem]  justify-between ~px-[0.75rem]/[1.875rem] ~py-[0.625rem]/[1.5225rem]">
              <div className="bg-gradient-to-r from-[#FBCC83] to-[#FFC770] text-transparent bg-clip-text font-merriweather ~text-[0.875rem]/[1.425rem] leading-[120%] md:tracking-[-0.047em] tracking-[-0.08em]">
                Online Trading Course
              </div>
              <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-[#252525] ">
                  <p className="text-white   ~text-[0.75rem]/[1rem] leading-[100%] tracking-[-1.2%]">
                    Beginner
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-t from-[#171717] to-[#101010] ~rounded-[1.4119rem]/[3rem] ~pt-[1rem]/[2.5rem]">
              <ChecklistSection items={onlineChecklistItems} />
              <div className=" font-satoshi font-medium ~text-[0.75rem]/[1.125rem] leading-[120%] tracking-[2%] ~px-[0.75rem]/[2.5rem]  text-[#FFF4E3] ">
                <div className="flex ~gap-[0.5rem]/[0.875rem]">
                  <div className="flex ~gap-[0.5rem]/[0.75rem] items-center">
                    <CertificateSvg className="~size-[0.875rem]/[1.625rem] ]" />{" "}
                    Certified
                  </div>
                  <div className="flex items-center ~gap-[0.5rem]/[0.75rem]">
                    <ClockSvg className="~size-[0.875rem]/[1.625rem]" />30 Days
                  </div>
                </div>
                <div className="flex items-center gap-[0.75rem] ~pt-[0.5rem]/[0.875rem]">
                  <PeopleSvg className="~size-[1rem]/[1.8125rem] " />
                  20-Student Batches
                </div>
              </div>
              <div className="~py-[1rem]/[1.875rem]">
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FBCC83] to-[#FFC770] font-merriweather font-normal ~text-[2rem]/[3.5rem] leading-[120%] tracking-[-0.07rem]">
                  ₹ 49,999{" "}
                </div>
                <div className="text-center  font-satoshi pt-[0.5rem] font-normal text-[#FFFFFF] ~text-[0.625rem]/[1.0669rem] leading-[120%] tracking-[2%] ">
                  Including GST <br /> {" "}
                </div>
              </div>
              <div className="~px-[0.75rem]/[1.25rem] flex flex-col ~gap-[0.625rem]/[1.25rem] ~pb-[0.75rem]/[1.25rem] text-[#FFFFFF] font-satoshi font-normal ~text-[0.625rem]/[1.245rem] leading-[120%] tracking-[2%]">
                <Link
                  href="/courses/online"
                  className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full"
                >
                  <div className="flex justify-center cursor-pointer items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out ~py-[0.5rem]/[1rem] ~px-[0.75rem]/[1rem] hover:bg-transparent bg-[#161616] ">
                    <p className="text-white   ">View course</p>
                  </div>
                </Link>{" "}
                <EnrollButton variant="default"/>
                {/* <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full">
                  <div className="flex justify-center cursor-pointer items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out ~py-[0.5rem]/[1rem] ~px-[0.75rem]/[1rem] bg-transparent hover:bg-[#161616] ">
                    <p className="text-white   "> Enrolll Now</p>
                  </div>
                </div>{" "} */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col  justify-between h-full items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
          <div className="bg-gradient-to-br from-[#333333] to-[#111111] w-full ">
            <div className="flex items-center gap-[0.5rem]  justify-between ~px-[0.75rem]/[1.875rem] ~py-[0.625rem]/[1.5225rem]">
              <div className="bg-gradient-to-r from-[#FBCC83] to-[#FFC770] text-transparent bg-clip-text font-merriweather ~text-[0.875rem]/[1.425rem] leading-[120%] md:tracking-[-0.047em] tracking-[-0.08em]">
                Technical Course
              </div>
              <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-[#252525] ">
                  <p className="text-white   ~text-[0.75rem]/[1rem] leading-[100%] tracking-[-1.2%]">
                    Beginner
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-t from-[#171717] to-[#101010] ~rounded-[1.4119rem]/[3rem] ~pt-[1rem]/[2.5rem]">
              <ChecklistSection items={beginnerChecklistItems} />
              <div className=" font-satoshi font-medium ~text-[0.75rem]/[1.125rem] leading-[120%] tracking-[2%] ~px-[0.75rem]/[2.5rem]  text-[#FFF4E3] ">
                <div className="flex ~gap-[0.5rem]/[0.875rem]">
                  <div className="flex ~gap-[0.5rem]/[0.75rem] items-center">
                    <CertificateSvg className="~size-[0.875rem]/[1.625rem] ]" />{" "}
                    Certified
                  </div>
                  <div className="flex items-center ~gap-[0.5rem]/[0.75rem]">
                    <ClockSvg className="~size-[0.875rem]/[1.625rem]" />3 Months
                  </div>
                </div>
                <div className="flex items-center gap-[0.75rem] ~pt-[0.5rem]/[0.875rem]">
                  <PeopleSvg className="~size-[1rem]/[1.8125rem] " />
                  20-Student Batches
                </div>
              </div>
              <div className="~py-[1rem]/[1.875rem]">
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FBCC83] to-[#FFC770] font-merriweather font-normal ~text-[2rem]/[3.5rem] leading-[120%] tracking-[-0.07rem]">
                  ₹ 81,888{" "}
                </div>
                <div className="text-center  font-satoshi pt-[0.5rem] font-normal text-[#FFFFFF] ~text-[0.625rem]/[1.0669rem] leading-[120%] tracking-[2%] ">
                  Including GST <br /> EMI options avaialble{" "}
                </div>
              </div>
              <div className="~px-[0.75rem]/[1.25rem] flex flex-col ~gap-[0.625rem]/[1.25rem] ~pb-[0.75rem]/[1.25rem] text-[#FFFFFF] font-satoshi font-normal ~text-[0.625rem]/[1.245rem] leading-[120%] tracking-[2%]">
                <Link
                  href="/courses/technical"
                  className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full"
                >
                  <div className="flex justify-center cursor-pointer items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out ~py-[0.5rem]/[1rem] ~px-[0.75rem]/[1rem] hover:bg-transparent bg-[#161616] ">
                    <p className="text-white   ">View course</p>
                  </div>
                </Link>{" "}
                <EnrollButton variant="default"/>
                {/* <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full">
                  <div className="flex justify-center cursor-pointer items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out ~py-[0.5rem]/[1rem] ~px-[0.75rem]/[1rem] bg-transparent hover:bg-[#161616] ">
                    <p className="text-white   "> Enrolll Now</p>
                  </div>
                </div>{" "} */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col  justify-between h-full items-center p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
          <div className="bg-gradient-to-br from-[#333333] to-[#111111] w-full ">
            <div className="flex items-center gap-[0.5rem]  justify-between ~px-[0.75rem]/[1.875rem] ~py-[0.625rem]/[1.5225rem]">
              <div className="bg-gradient-to-r from-[#FBCC83] to-[#FFC770] text-transparent bg-clip-text font-merriweather ~text-[0.875rem]/[1.425rem] leading-[120%] md:tracking-[-0.047em] tracking-[-0.08em]">
                Advanced Technical
              </div>
              <div className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
                <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] bg-[#252525] ">
                  <p className="text-white   ~text-[0.75rem]/[1rem] leading-[100%] tracking-[-1.2%]">
                    Advanced
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-t from-[#171717] to-[#101010] ~rounded-[1.4119rem]/[3rem] ~pt-[1rem]/[2.5rem]">
              <ChecklistSection items={advancedChecklistItems} />
              <div className=" font-satoshi font-medium ~text-[0.75rem]/[1.125rem] leading-[120%] tracking-[2%] ~px-[0.75rem]/[2.5rem]  text-[#FFF4E3] ">
                <div className="flex ~gap-[0.5rem]/[0.875rem]">
                  <div className="flex ~gap-[0.5rem]/[0.75rem] items-center">
                    <CertificateSvg className="~size-[0.875rem]/[1.625rem] ]" />{" "}
                    Certified
                  </div>
                  <div className="flex items-center ~gap-[0.5rem]/[0.75rem]">
                    <ClockSvg className="~size-[0.875rem]/[1.625rem]" />6 Months
                  </div>
                </div>
                <div className="flex items-center gap-[0.75rem] ~pt-[0.5rem]/[0.875rem]">
                  <PeopleSvg className="~size-[1rem]/[1.8125rem] " />
                  20-Student Batches
                </div>
              </div>
              <div className="~py-[1rem]/[1.875rem]">
                <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FBCC83] to-[#FFC770] font-merriweather font-normal ~text-[2rem]/[3.5rem] leading-[120%] tracking-[-0.07rem]">
                  ₹ 1,29,999{" "}
                </div>
                <div className="text-center pt-[0.5rem]  font-satoshi font-normal text-[#FFFFFF] ~text-[0.625rem]/[1.0669rem] leading-[120%] tracking-[2%] ">
                  Including GST <br /> EMI options avaialble{" "}
                </div>
              </div>
              <div className="~px-[0.75rem]/[1.25rem] flex flex-col ~gap-[0.625rem]/[1.25rem] ~pb-[0.75rem]/[1.25rem] text-[#FFFFFF] font-satoshi font-normal ~text-[0.625rem]/[1.245rem] leading-[120%] tracking-[2%]">
                <Link
                  href="/courses/advanced"
                  className="relative p-[1px] h-fit  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full"
                >
                  <div className="flex justify-center cursor-pointer items-center ~gap-[0.35rem]/[0.62rem] rounded-full  transition-all duration-300 ease-in-out ~py-[0.5rem]/[1rem] ~px-[0.75rem]/[1rem] hover:bg-transparent bg-[#161616] ">
                    <p className="text-white   ">View course</p>
                  </div>
                </Link>{" "}
                <EnrollButton variant="default"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
