"use client";

import { useState } from "react";
import EnrollModal from "./EnrollModal";
import clsx from "clsx";

type EnrollButtonProps = {
  variant?: "default" | "hero" | "cta";
  className?: string;
};

const EnrollButton = ({
  variant = "default",
  className,
}: EnrollButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OUTER GRADIENT */}
      <div
        className={clsx(
          "relative p-[1px] rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16]",
          variant === "default" && "w-full",
          variant === "hero" && "w-full lg:w-fit",
          variant === "cta" && "w-fit",
          className
        )}
      >
        {/* ACTUAL BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={clsx(
            "flex items-center  justify-center rounded-full cursor-pointer",
            "transition-all duration-300 ease-in-out bg-transparent hover:bg-[#111]",
            "~gap-[0.35rem]/[0.62rem]",
            variant === "default" && [
              "~py-[0.5rem]/[1rem]",
              "~px-[0.75rem]/[1rem]",
              "text-white",
              "w-full"
            ],
            variant === "hero" && [
              "~py-[0.5rem]/[1rem]",
              "~px-[0.75rem]/[6rem]",
              "text-white",
            ],
            variant === "cta" && [
              "py-[0.5rem]",
              "~px-[0.75rem]/[1rem]",
              "text-white font-semibold font-geist",
              "~text-[0.75rem]/[1rem]",
              "leading-[160%] tracking-[-1.2%]",
            ]
          )}
        >
          Enroll Now
        </button>
      </div>

      {/* MODAL */}
      <EnrollModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default EnrollButton;
