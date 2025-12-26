import React from "react";
import Logo from "./Logo";
import TwitterSvg from "@/components/svg/TwitterSvg";
import InstagramSvg from "@/components/svg/InstagramSvg";
import LinkedInSvg from "@/components/svg/LinkedinSvg";
import YoutubeSvg from "@/components/svg/YoutubeSvg";
import Link from "next/link";
import MailSvg from "@/components/svg/MailSvg";
import PhoneSvg from "@/components/svg/PhoneSvg";
import MessageSvg from "@/components/svg/MessageSvg";
import EnrollCTA from "./EnrollCta";

const icons = [
  { href: "https://twitter.com", icon: TwitterSvg },
  {
    href: "https://www.instagram.com/horusfinancialacademy/",
    icon: InstagramSvg,
  },
  { href: "https://linkedin.com", icon: LinkedInSvg },
  {
    href: "https://www.youtube.com/channel/UCczw3xnjcPi_VL-rY0X7WWA",
    icon: YoutubeSvg,
  },
];

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black flex flex-col ~pt-[2.125rem]/[17.75rem]  items-center ~pb-[2.7406rem]/[10.4125rem] ">
        <div>
          <Logo className="~w-[9.375rem]/[27.5231rem] ~h-[5.1094rem]/[15rem]" />
        </div>
        <div className="text-[#FFFFFF] ~pb-[1.25rem]/[4.625rem]  font-bold font-merriweather text-center ~text-[1.375rem]/[4rem] leading-[120%] tracking-[-0.07rem] pt-[2.25rem]">
          Start Your{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Elite Trader{" "}
          </span>{" "}
          <br />
          Journey Today!
        </div>

        {/* <div className="relative p-[1px]  rounded-full bg-gradient-to-l from-[#F3C070] to-[#3B2A16] w-fit">
          <div className="flex items-center ~gap-[0.35rem]/[0.62rem] rounded-full cursor-pointer transition-all duration-300 ease-in-out py-[0.5rem] ~px-[0.75rem]/[1rem] hover:bg-[#000] bg-transparent">
            <button className="text-white font-semibold font-geist ~text-[0.75rem]/[1rem] leading-[160%] tracking-[-1.2%]">
              Enroll Now
            </button>

            <ArrowSvg className="text-white h-[0.625rem] w-auto" />
          </div>
        </div> */}
<EnrollCTA/>

      </div>

      <div className="bg-[#101010] border-t-[0.0625rem] border-[#FFFFFF14]">
        <div className="max-w-[90rem]  mx-auto">
          <div className="  ~px-[1.3125rem]/[11rem] ~py-[0.9rem]/[3.5rem] lg:flex-row  flex  flex-col justify-between">
            <div>
              <div className="flex flex-col items-center">
                <Link href="/">
                  <Logo className="~w-[9.375rem]/[16.055rem] ~h-[5.1094rem]/[8.75rem]" />
                </Link>{" "}
                <div className="font-inter text-[#FFFFFF] font-medium ~text-[0.75rem]/[0.8681rem] leading-[1.5rem] tracking-[0%] ~py-[1.0625rem]/[2.1875rem]">
                  #18/1, 3rd Floor, Alexandria Street,
                  <br />
                  Richmond Town, Bangalore-560025.
                </div>
              </div>
              <div className="flex gap-[0.25rem] pb-[0.7656rem]">
                {icons.map(({ href, icon: Icon }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-[1.5rem] bg-black flex justify-center items-center rounded-[0.75rem] cursor-pointer hover:bg-[#333] hover:scale-110 ease-in-out duration-300 transition-all"
                  >
                    <Icon className="w-[0.75rem] h-[0.75rem] " />
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:flex-row flex flex-col justify-between  ~gap-[0.625rem]/[2rem] ">
              <div className="order-1 lg:order-1 flex flex-col ">
                <div className="font-inter font-medium ~text-[0.75rem]/[0.8681rem] ~leading-[0.9581rem]/[1.5rem] tracking-[0%] text-[#FFFFFF] ">
                  Explore
                </div>
                <div className="flex flex-col ~gap-[0.375rem]/[0.875rem] ~text-[0.75rem]/[0.875rem] text-[#FFFFFF]/60 ~leading-[0.8381rem]/[1.3125rem] tracking-[0%] ~pt-[0.375rem]/[0.875rem]">
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link
                    href="/courses"
                    className="hover:text-white transition-colors"
                  >
                    Courses
                  </Link>
                  <Link href="/" className="hover:text-white transition-colors">
                    Students Life
                  </Link>
                  <Link href="/" className="hover:text-white transition-colors">
                    Community
                  </Link>
                  <Link href="/" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </div>
              </div>
              <div className="order-3 lg:order-2 flex flex-col ">
                <div className="font-inter font-medium ~text-[0.75rem]/[0.8681rem] ~leading-[0.9581rem]/[1.5rem] tracking-[0%] text-[#FFFFFF]">
                  Legal Pages
                </div>

                <div className="flex flex-col ~gap-[0.375rem]/[0.875rem] ~text-[0.75rem]/[0.875rem] text-[#FFFFFF]/60 ~leading-[0.8381rem]/[1.3125rem] tracking-[0%] ~pt-[0.375rem]/[0.875rem]">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link href="" className="hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </div>
              </div>
              <div className="order-2 lg:order-3 flex flex-col ">
                <div className="font-inter font-medium ~text-[0.75rem]/[0.8681rem] leading-[1.5rem] tracking-[0%] text-[#FFFFFF]">
                  Get In Touch
                </div>

                <div className="flex flex-col ~gap-[0.375rem]/[0.875rem] ~text-[0.75rem]/[0.875rem] text-[#FFFFFF]/60 ~leading-[0.8381rem]/[1.3125rem] tracking-[0%] ~pt-[0.375rem]/[0.875rem]">
                  <div className="flex items-center hover:text-white gap-[0.5rem]">
                    <MailSvg />
                    <Link
                      href="mailto:mail@horusfinancialacademy.com"
                      className=" transition-colors"
                    >
                      mail@horusfinancialacademy.com
                    </Link>
                  </div>
                  <div className="flex items-center hover:text-white gap-[0.5rem]">
                    <PhoneSvg />
                    <Link
                      href="tel:+919534888818"
                      className=" transition-colors"
                    >
                      +91 95348 88818
                    </Link>
                  </div>
                  <div className="flex items-center hover:text-white gap-[0.5rem]">
                    <MessageSvg />
                    <Link
                      href="https://wa.me/919534888818"
                      className=" transition-colors"
                    >
                      +91 95348 88818
                    </Link>
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

export default Footer;
