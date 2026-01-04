"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Image from "next/image";
import TwitterSvg from "@/components/svg/TwitterSvg";
import InstagramSvg from "@/components/svg/InstagramSvg";
import LinkedInSvg from "@/components/svg/LinkedinSvg";
import YoutubeSvg from "@/components/svg/YoutubeSvg";
import { AnimatePresence, motion } from "motion/react";
import ClossSvg from "@/components/svg/ClossSvg";
import MailSvg from "@/components/svg/MailSvg";
import PhoneSvg from "@/components/svg/PhoneSvg";
import MessageSvg from "@/components/svg/MessageSvg";
import { usePathname } from "next/navigation";
import { ButtonAnimation } from "@/components/ButtonAnimation";

const icons = [
  { href: "https://twitter.com", icon: TwitterSvg },
  { href: "https://instagram.com", icon: InstagramSvg },
  { href: "https://linkedin.com", icon: LinkedInSvg },
  { href: "https://youtube.com", icon: YoutubeSvg },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTopPosition = () => {
    if (!isHomePage || isScrolled) return "top-0";
    return isMobile ? "top-[80px]" : "top-[46px]";
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="h-full w-full lg:hidden fixed  inset-0 bg-black/55 backdrop-blur-sm duration-300 transition-all ease-in-out z-[4001] "
        ></div>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            data-lenis-prevent
            className="fixed lg:hidden top-[2.5rem] right-0 ~p-[1rem]/[2rem] z-[6000]  ~min-w-[20rem]/[60rem] h-full bg-[#111111] overflow-y-auto no-scrollbar "
          >
            <div className="flex items-center justify-between ">
              <Link onClick={() => setOpen(false)} href="/">
                {/* <Logo className="~h-[4.0625rem]/[6.375rem] w-auto" /> */}
                <div className=" relative ~h-[5rem]/[6.375rem] ~w-[7.5rem]/[11.375rem]">
                  <Image
                    src={"/images/horus-logo.png"}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>{" "}
              </Link>
              <ClossSvg
                onClick={() => setOpen(false)}
                className="~size-[1rem]/[1.4rem]"
              />
            </div>
            <div className="~pt-[4rem]/[4.7rem] flex flex-col justify-between h-full pb-[6rem]">
              {" "}
              <div className="  text-[0.8438rem] leading-[1.4875rem] tracking-[0%] font-semibold  ">
                <div className="~py-[0.5rem]/[1rem] border-b-[0.5px] border-b-white/30">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-us"
                    className=" text-white/50  hover:text-white duration-300 ease-in-out transition-all underline-offset-4 decoration-1"
                  >
                    About Us
                  </Link>
                </div>
                <div className="~py-[0.5rem]/[1rem] border-b-[0.5px] border-b-white/30">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/courses"
                    className=" text-white/50 block hover:text-white duration-300 ease-in-out transition-all underline-offset-4 decoration-1"
                  >
                    Courses
                  </Link>
                </div>
                <div className="~py-[0.5rem]/[1rem] border-b-[0.5px] border-b-white/30">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/student-life"
                    className=" text-white/50 block hover:text-white duration-300 ease-in-out transition-all underline-offset-4 decoration-1"
                  >
                    Student Life
                  </Link>
                </div>
                <div className="~py-[0.5rem]/[1rem] border-b-[0.5px]  border-b-white/30">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/blog"
                    className=" text-white/50 block hover:text-white duration-300 ease-in-out transition-all underline-offset-4 decoration-1"
                  >
                    Blog
                  </Link>
                </div>
                <div className="~py-[0.5rem]/[1rem]  border-b-white/30">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/club"
                    className=" text-white/50 block hover:text-white duration-300 ease-in-out transition-all underline-offset-4 decoration-1"
                  >
                    Club
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="pb-[3rem]">
                  <div className="font-inter font-medium ~text-[0.75rem]/[0.8681rem] leading-[1.5rem] tracking-[0%] text-[#FFFFFF]">
                    Get In Touch
                  </div>

                  <div className="flex flex-col ~gap-[0.375rem]/[0.875rem] ~text-[0.75rem]/[0.875rem] text-[#FFFFFF]/60 ~leading-[0.8381rem]/[1.3125rem] tracking-[0%] ~pt-[0.375rem]/[0.875rem]">
                    <div className="flex items-center hover:text-white gap-[0.5rem]">
                      <MailSvg />
                      <Link href="" className=" transition-colors">
                        mail@horusfinancialacademy.com
                      </Link>
                    </div>
                    <div className="flex items-center hover:text-white gap-[0.5rem]">
                      <PhoneSvg />
                      <Link href="" className=" transition-colors">
                        +91 95348 88818
                      </Link>
                    </div>
                    <div className="flex items-center hover:text-white gap-[0.5rem]">
                      <MessageSvg />
                      <Link href="" className=" transition-colors">
                        +91 95348 88818
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[0.25rem] pb-[0.7656rem]">
                  {icons.map(({ href, icon: Icon }, i) => (
                    <Link
                      onClick={() => setOpen(false)}
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-[1.75rem] bg-black flex justify-center items-center rounded-[0.75rem] cursor-pointer hover:bg-[#333] hover:scale-110 ease-in-out duration-300 transition-all"
                    >
                      <Icon className="w-[0.75rem] h-[0.75rem] " />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center">
        <div
          className={`~px-[0.9375rem]/[5rem] fixed z-[4000] w-full transition-all duration-500 ease-in-out ${getTopPosition()}`}
        >
          {/* Separate blur layer */}
          {isScrolled && (
            <div
              className="absolute inset-0 backdrop-blur-[1rem] bg-black/20 duration-700 transition-all ease-in-out pointer-events-none"
              style={{
                mask: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
                WebkitMask:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
              }}
            />
          )}

          <div className="relative ~py-[0.75rem]/[1.25rem] max-w-[1440px] mx-auto flex justify-between items-center">
            {/* <Link href="/">
              <Logo
                className={`transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "~h-[3.0625rem]/[4rem] w-auto"
                    : "~h-[3.40625rem]/[6.25rem] w-auto"
                }`}
              />
            </Link> */}
            <Link href="/">
              <div
                className={`relative transition-all duration-500 ease-in-out ${
                  isScrolled ? "~h-[6.0625rem]/[7rem]" : "~h-[6rem]/[7rem]"
                } ~w-[6.5rem]/[11.4375rem]`}
              >
                <Image
                  src="/images/horus-logo.png"
                  alt="Site Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="hidden lg:flex items-center">
              <div className="p-[1px] rounded-full bg-gradient-to-br from-[#333333] to-[#111111] w-fit">
                <div className="flex py-[0.7rem] px-[1.5rem] text-[0.8438rem] leading-[1.4875rem] tracking-[0%] font-semibold gap-[1.5rem] rounded-full bg-[#141414]">
                  <Link
                    href="/about-us"
                    className={`${
                      pathname === "/about-us"
                        ? "text-white "
                        : "text-white/50 hover:text-white"
                    } duration-300 ease-in-out transition-all underline-offset-4 decoration-1`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/courses"
                    className={`${
                      pathname === "/courses" ||
                      pathname.startsWith("/courses/")
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    } duration-300 ease-in-out transition-all underline-offset-4 decoration-1`}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" || pathname.startsWith("/courses/")
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    } duration-300 ease-in-out transition-all underline-offset-4 decoration-1`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/student-life"
                    className={`${
                      pathname === "/student-life" || pathname.startsWith("/courses/")
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    } duration-300 ease-in-out transition-all underline-offset-4 decoration-1`}
                  >
                    Student Life
                  </Link>
                  <Link
                    href="/club"
                    className={`${
                      pathname === "/club" || pathname.startsWith("/courses/")
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    } duration-300 ease-in-out transition-all underline-offset-4 decoration-1`}
                  >
                    Club
                  </Link>                 

                </div>
              </div>
            </div>
            <ButtonAnimation>
              <Link
                href={"/courses"}
                className="hidden lg:block duration-300 transition-all ease-in-out"
              >
                <div className="text-white text-[0.8269rem] font-inter font-semibold leading-[1.4875rem] tracking-[0%] bg-gradient-to-l from-[#F3C070] to-[#3B2A16] py-[0.4rem] px-[1.0263rem] rounded-full">
                  Get Started
                </div>
              </Link>
            </ButtonAnimation>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="relative w-[1.3125rem] lg:hidden shrink-0 h-[0.9375rem]"
            >
              <Image
                src={"/images/hamburger.svg"}
                alt="hamburger"
                fill
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
