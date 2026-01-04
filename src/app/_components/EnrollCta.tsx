"use client";

import { useState } from "react";
import ArrowSvg from "@/components/svg/ArrowSvg";
import EnrollModal from "./EnrollModal";

const EnrollCTA = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative p-[1px] rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
        <div
          onClick={() => setOpen(true)}
          className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out ~py-[0.375rem]/[0.5rem] ~px-[0.75rem]/[1rem]  hover:bg-[#000] bg-transparent"
        >
          <button
            type="button"
            className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]"
          >
            Enroll Now
          </button>

          <ArrowSvg className="text-white ~h-[0.3688rem]/[0.625rem] w-auto" />
        </div>
      </div>

      <EnrollModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default EnrollCTA;
