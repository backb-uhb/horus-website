import EnrollButton from "@/app/_components/EnrollButton";
import FacebookLogo2 from "@/components/svg/FacebookLogo2";
import LinkedinLogo2 from "@/components/svg/LinkedinLogo2";
import MailIcon2 from "@/components/svg/MailIcon2";
import TwitterLogo from "@/components/svg/TwitterLogo";
import Image from "next/image";
import React from "react";

type Props = {
  headings: {
    id: string;
    text: string;
  }[]
  activeId: string;
}

const Contents = ({ headings, activeId }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    
    if (element) {
      const yOffset = -180; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky h-full top-[7rem] md:flex flex-col hidden ~max-w-[13rem]/[17rem]">
      <div className="pl-[1.25rem]">
        <div className="flex gap-[0.625rem] items-center pb-[1.5625rem] border-b-[0.0625rem] border-b-[#E9EBEF]">
          <p className="font-inter text-[0.75rem] leading-[1.125rem] text-[#fff]">
            Share
          </p>
          <div className="flex gap-[0.375rem] items-center">
            <div className="bg-[#F6F7F8] p-[0.5rem] flex items-center justify-center rounded-[0.375rem] size-[2rem]">
              <LinkedinLogo2 />
            </div>
            <div className="bg-[#F6F7F8] p-[0.5rem] flex items-center justify-center rounded-[0.375rem] size-[2rem]">
              <TwitterLogo />
            </div>
            <div className="bg-[#F6F7F8] p-[0.5rem] flex items-center justify-center rounded-[0.375rem] size-[2rem]">
              <FacebookLogo2 />
            </div>
            <div className="bg-[#F6F7F8] p-[0.5rem] flex items-center justify-center rounded-[0.375rem] size-[2rem]">
              <MailIcon2 />
            </div>
          </div>
        </div>

        <h2 className="uppercase font-bold font-satoshi ~text-[0.75rem]/[0.8625rem] leading-[120%] text-[#fff] py-[1.25rem]">
          Table of contents
        </h2>
        <div className="flex flex-col ~gap-[0.5rem]/[1rem]">
          {headings.map((item) => (
            <div key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`font-satoshi ~text-[0.75rem]/[0.875rem] font-normal leading-[1.25rem] text-left transition-all duration-200 block ${
                  activeId === item.id
                    ? "text-[#fff] font-bold border-l-2 border-[#fff] pl-2"
                    : "text-[#FFFFFF8F] hover:text-[#fff] pl-2"
                }`}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#000000] to-[#666666] rounded-[1rem] overflow-hidden mt-[2.25rem]">
        <div className="w-full h-[11.3125rem] relative">
          <Image
            src={"/images/blogs/blog-5.jpeg"}
            alt="course image"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-[1.1875rem] ~pt-[0.75rem]/[1.5rem] ~pb-[0.75rem]/[1.75rem]">
          <h2 className="text-[#FFFFFF] font-montserrat font-bold ~text-[1rem]/[1.3625rem] leading-[1.75rem] max-w-[20ch]">
            Ready to take the next step?
          </h2>
          <p className="font-inter ~text-[0.75rem]/[1rem] text-[#FFFFFF] pt-[0.25rem] leading-[120%] py-[0.5rem]">
            Unlock Your Trading Potential with Horus
          </p>
          <EnrollButton variant="default" />
        </div>
      </div>
    </div>
  );
};

export default Contents;