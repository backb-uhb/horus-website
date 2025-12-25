import React from "react";

type Props = {
  content: string;
};

const ButtonBrown = ({ content }: Props) => {
  return (
    <div>
      <div
        className="inline-block       bg-[#342511]
             backdrop-blur-[6px]
shadow-[inset_0_-7px_11px_0_rgba(255,255,255,0.15)]   rounded-full py-[0.4375rem] px-[1rem]"
      >
        <div className=" bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent font-satoshi font-medium ~text-[0.625rem]/[0.875rem] leading-[120%] tracking-[0%] ">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ButtonBrown;
