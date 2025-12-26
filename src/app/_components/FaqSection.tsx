"use client";
import MinusIcon from "@/components/svg/MinusIcon";
import PlusIcon from "@/components/svg/PlusIconSvg";
import question from "@public/images/question.svg";
import Image from "next/image";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
type Props = {
  faqData: {
    question: string;
    answer: string;
  }[];
  title: string;
  span: string;
  description: string;
  textColor: string;
};

const FAQSection = ({
  faqData,
  title,
  span,
  description,
  textColor,
}: Props) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className=" text-white relative z-10  ~pt-[3.75rem]/[6.25rem] ~pb-[0.5rem]/[1.25rem]">
      <div className="flex flex-col items-center ~px-[0.625rem]/[3.75rem]">
        <div
          className="inline-block bg-[#342511] backdrop-blur-[6px]
          shadow-[inset_0_-7px_11px_0_rgba(255,255,255,0.15)]
          rounded-full py-[0.4375rem] ~px-[0.5rem]/[1rem]"
        >
          <div className="flex items-center ~gap-[0.3rem]/[0.5rem] bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent font-satoshi font-medium ~text-[0.625rem]/[0.875rem] leading-[110%] tracking-[0%]">
            <Image
              src={question}
              alt="FAQ Icon"
              className="~size-[0.65625rem]/[0.968085289rem]"
            />
            FAQS
          </div>
        </div>
        <div className="font-merriweather text-[#FFFFFF] md:font-bold font-normal ~text-[1.375rem]/[3.5rem] leading-[120%] tracking-[-0.07rem] text-center ~pt-[0.625rem]/[2rem]">
          {title}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            {" "}
            {span}
          </span>
        </div>
        <p
          className={`${textColor} ~pt-[0.625rem]/[2rem] text-center md:font-bold ~text-[0.75rem]/[1.50375rem] tracking-[-0.01625rem]`}
        >
          {description}
        </p>
      </div>

      <div className="~pt-[2rem]/[7rem] ~px-[0.625rem]/[18.125rem]">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Disclosure key={index}>
              <motion.div
                animate={{
                  background: isOpen
                    ? "linear-gradient(to top, #1d180d, #282011)"
                    : "linear-gradient(to top, #DFAB600F, transparent)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="~mb-[0.3656rem]/[1.1275rem] border border-[#FFFFFF14] ~rounded-[0.435rem]/[1.3156rem] overflow-hidden"
              >
                <DisclosureButton
                  onClick={() => setOpenIndex(index)}
                  className="w-full ~px-[0.625rem]/[1.875rem] ~py-[0.5rem]/[1.5rem] flex items-center justify-between text-left group"
                >
                  <h3 className="~text-[0.75rem]/[1.5rem] md:font-semibold font-medium font-satoshi text-[#D1D1D1] ~leading-[0.7456rem]/[2.2556rem] ~tracking-[-0.0056rem]/[-0.0163rem] transition-colors duration-200">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 flex items-center justify-center">
                    {isOpen ? (
                      <MinusIcon className="~w-[0.3881rem]/[1.1744rem] ~h-[0.3881rem]/[1.1744rem] text-transparent bg-clip-text bg-gradient-radial from-[#ECB45D] via-[#FFD38D] to-[#FFB644]" />
                    ) : (
                      <PlusIcon className="~w-[0.3881rem]/[1.1744rem] ~h-[0.3881rem]/[1.1744rem] object-cover text-transparent bg-clip-text bg-gradient-radial from-[#ECB45D] via-[#FFD38D] to-[#FFB644]" />
                    )}
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
                      className=" overflow-hidden"
                    >
                      <div className="~px-[0.625rem]/[1.875rem] ~pb-[0.3819rem]/[2.25rem]">
                        <p className="md:font-medium font-normal font-inter ~text-[0.625rem]/[1.1912rem] leading-[130%] ~tracking-[-0.0056rem]/[-0.0163rem] text-[#D1D1D1]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
