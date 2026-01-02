import Link from "next/link";
import React from "react";
import ArrowSvg from "./svg/ArrowSvg";

type Props = {
  activepage: string;
  innerpage?: string;
  activePageLink?: string;
};

const Breadcrumbs = ({ activepage, innerpage, activePageLink }: Props) => {
  return (
    <div className="font-satoshi font-medium items-center  relative z-[50] ~text-[0.625rem]/[0.875rem] leading-[105%] tracking-[0%] md:flex hidden gap-[0.5rem] ~pt-[5rem]/[8.875rem]  ~pl-[0.625rem]/[7rem]">
      <Link href={"/"}>
        <div className="text-[#292D32] duration-300 ease-in-out transition-all hover:text-[#FFFFFF8F]">
          {" "}
          Home{" "}
        </div>
      </Link>{" "}
      <div className="~px-[0.1rem]/[0.3125rem]">
        <ArrowSvg className=" shrink-0 ~h-[0.4rem]/[0.55775rem] text-[#292D32]" />
      </div>
      {innerpage ? (
        <Link
          href={`${activePageLink}`}
          className={`${
            innerpage
              ? "text-[#292D32] duration-300 ease-in-out transition-all hover:text-[#FFFFFF8F]"
              : "text-[#FFFFFF8F]"
          }`}
        >
          {activepage}
        </Link>
      ) : (
        <div
          className={`${
            innerpage
              ? "text-[#292D32] duration-300 ease-in-out transition-all hover:text-[#FFFFFF8F]"
              : "text-[#FFFFFF8F]"
          }`}
        >
          {activepage}
        </div>
      )}
      {innerpage && (
        <>
          <div className="~px-[0.1rem]/[0.3125rem]">
            <ArrowSvg className=" shrink-0 ~h-[0.4rem]/[0.55775rem] text-[#292D32]" />
          </div>
          <div className="text-[#FFFFFF8F]">{innerpage}</div>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
