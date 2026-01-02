import Image from "next/image";
import React from "react";

const DemoSession = () => {
  return (
    <div className="bg-gradient-to-r from-[#DFAB60] to-[#F08E00]  rounded-[1rem] py-[1.75rem] px-[2.5rem] relative mt-[4.125rem]">
<div>
          <h2 className="text-[#FFFFFF] font-montserrat font-bold text-[1.3625rem] leading-[1.75rem] max-w-[20ch]">
            Want to upskill your skills?
          </h2>
          <p className="font-inter text-[1rem] text-[#FFFFFF] pt-[0.25rem] leading-[1.75rem]">
            Try Ayadi Today
          </p>
          <div className="pt-[1rem]">
            {/* <Button1 title="Request a Demo session →" /> */}
          </div>
</div>
<div className="absolute top-[-2.5625rem] right-[2.25rem]">
    <div className="w-[14rem] h-[11.3125rem] relative">
        <Image src={"/svg/graduate.svg"} alt="img" fill/>   
    </div>
</div>  

 </div>
  );
};

export default DemoSession;
