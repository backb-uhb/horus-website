"use client";

import { useState } from "react";
import EnrollModal from "./EnrollModal";

const EnrollButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative p-[1px] h-fit rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-full">
        <div
          onClick={() => setOpen(true)}
          className="flex justify-center cursor-pointer items-center
                     ~gap-[0.35rem]/[0.62rem]
                     rounded-full transition-all duration-300 ease-in-out
                     ~py-[0.5rem]/[1rem]
                     ~px-[0.75rem]/[1rem]
                     bg-transparent hover:bg-[#161616]"
        >
          <p className="text-white">Enroll Now</p>
        </div>
      </div>

      {/* MODAL */}
      <EnrollModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default EnrollButton;
