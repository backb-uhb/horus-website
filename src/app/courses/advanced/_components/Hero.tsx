"use client";
import EnrollButton from "@/app/_components/EnrollButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import ButtonBrown from "@/components/svg/ButtonBrown";
import PlayIcon from "@/components/svg/PlayIcon";
import { Marquee } from "@/components/ui/Marquee";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const testimonials = [
     {
      name: "Raghav Nair",
      quote: "Placed at Emirates NBD",
      image: "/images/testimonial/raghav-nair.jpg",
    },
    {
      name: "Zoya Sheikh",
      quote: "Placed at DFM",
      image: "/images/testimonial/zoya-sheikh.jpg",
    },
    {
      name: "Meera Kapoor",
      quote: "Placed at Al Ramz Corp.",
      image: "/images/testimonial/meera-kappor.jpg",
    },
    {
      name: "Kabir Malhotra",
      quote: "Placed at DGCX",
      image: "/images/testimonial/kabir-malhotra.jpg",
    },
    
    {
      name: "Aditya Rao",
      quote: "Placed at DFM",
      image: "/images/testimonial/aditya-rao.jpg",
    },
    {
      name: "Rahul",
      quote: "Placed at Aegis Logistics Ltd.",
      image: "/images/testimonial/rahul.jpg",
    },
    {
      name: "Saad Mohsin",
      quote: "Placed at Redington Ltd.",
      image: "/images/testimonial/saad-mohsin.jpg",
    },
  ];

  const features = [
    "Advanced price action",
    "Multi-timeframe analysis",
    "Placement oppurtunity",
    "High-probability setups",
    "Club access",
    "Risk & capital control",
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {" "}
      <div className="max-w-[1440px] mx-auto">
        <Breadcrumbs
          activepage="Courses"
          innerpage="Advanced Technical Course"
          activePageLink="/courses"
        />
        <div className="~px-[0.625rem]/[7.375rem] ~pb-[2rem]/[7.375rem] ~pt-[1rem]/[2rem]">
          <div className="relative  p-[1px] bg-gradient-to-br overflow-hidden from-[#333333]  to-[#111111] ~rounded-[1.4119rem]/[3rem]">
            <div className="~p-[0.75rem]/[1.875rem] flex md:flex-row flex-col items-center ~gap-[1rem]/[3rem] ~rounded-[1.4119rem]/[3rem] bg-[#101010]">
              <div className="w-full">
                {" "}
                <ButtonBrown content="Advanced Course" />
                <div className=" bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] ~pt-[1rem]/[2.25rem] to-[#FFB644] bg-clip-text text-transparent font-merriweather ~text-[1.25rem]/[3rem] leading-[120%] tracking-[-1.12%]">
                  Advanced Technical.
                </div>
                <div className="md:font-bold font-normal font-merriweather ~text-[0.75rem]/[1.5rem]  leading-[120%] ~tracking-[-0.0075rem]/[-0.0163rem] text-[#F7F8F8] ">
                  See Beyond the Charts. Trade with Precision.
                </div>
                <div className="grid grid-cols-3 ~pt-[1.25rem]/[2.25rem] xl:~pr-[0]/[3.5rem]">
                  <div className="border-r text-white font-satoshi border-r-[#DFAB60]">
                    <p className="font-medium ~text-[0.75rem]/[1.125rem] leading-[100%]">
                      <span className=" bg-gradient-to-r from-[#FDCA7C] bg-clip-text text-transparent to-[#FFC771]">
                        ★
                      </span>
                      &nbsp;4.7+
                    </p>
                    <p className="~text-[0.625rem]/[1rem] pt-[0.2rem] leading-[120%]">
                      Average course rating
                    </p>
                  </div>
                  <div className="border-r flex justify-center items-center text-white font-satoshi border-r-[#DFAB60]">
                    <div>
                      <p className="font-medium ~text-[0.75rem]/[1.125rem] leading-[100%]">
                        6 Months
                      </p>
                      <p className="~text-[0.625rem]/[1rem] pt-[0.2rem] leading-[120%]">
                        Duration (Online){" "}
                      </p>
                    </div>
                  </div>
                  <div className=" text-white flex items-center justify-center font-satoshi ">
                    <div>
                      <p className="font-medium ~text-[0.75rem]/[1.125rem] leading-[100%]">
                        30 Days
                      </p>
                      <p className="~text-[0.625rem]/[1rem] pt-[0.2rem] leading-[120%]">
                        Live Trading Floor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="~text-[0.625rem]/[1.25rem] ~pt-[1rem]/[2.25rem] leading-[110%] text-[#FFF4E3] font-satoshi">
                  Advanced course for serious traders, delivering institutional
                  insights and high-performance strategies.
                </div>
                <div className="flex flex-wrap gap-[0.4375rem] ~pt-[1rem]/[1.625rem]">
                  {features.map((item, i) => (
                    <div
                      key={i}
                      className="p-[0.0625rem] bg-gradient-to-br from-[#333333] to-[#111111] rounded-[5.0625rem]"
                    >
                      <p className="font-satoshi ~text-[0.75rem]/[0.875rem] leading-[1.5rem] text-[#F1F1EF] flex items-center justify-center py-[0.3125rem] px-[0.625rem] bg-[#101010] rounded-[5rem] whitespace-nowrap">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex ~gap-[0.5rem]/[1.25rem] ~py-[1.25rem]/[2.25rem]">
    <WhatsAppButton message="Hi, I visited your website and would like to know more information about your Advanced technical course."/>

                                 <EnrollButton variant="cta"/>

                </div>
                <div className="flex items-center">
                  <p className="font-satoshi ~text-[0.725rem]/[1.25rem] leading-[1.25rem] text-[#FFFFFF] ">
                    EMI option Available =
                  </p>{" "}
                  <p className="bg-gradient-to-b ml-1 from-[#F3C070] to-[#EAB877] ~text-[0.725rem]/[1.25rem] font-medium bg-clip-text text-transparent ">
₹13,648 × 6 months            
      </p>
                </div>
              </div>{" "}
              <div
                className="shrink-0 w-full md:~w-[9.9475rem]/[32.5rem]
                ~h-[15.9475rem]/[35.6875rem]
                ~rounded-[0.75rem]/[1.125rem]
                border border-[#FFFFFF1A]
                overflow-hidden relative group cursor-pointer"
              >
                {!isPlaying ? (
                  <>
                    <div
                      className="absolute inset-0 z-0"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Image
                        src="/images/youtube-thumbnail-2.png"
                        alt="Video thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div
                      className="absolute inset-x-0 bottom-0 h-[45%] z-10
                      bg-gradient-to-t
                      from-[#3B2A16]
                      via-[#F3C070]/60
                      to-transparent"
                    />

                    <div
                      className="absolute inset-0 z-20
                   flex items-center justify-center
                   bg-black/30 group-hover:bg-black/40
                   transition-colors"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div
                        className="size-[3.5375rem] bg-white rounded-full
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform"
                      >
                        <PlayIcon className="w-[1.0625rem] h-[1.5625rem]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/hl4a7jA3dlU?autoplay=1&mute=1"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee className="[--duration:50s]">
        {testimonials.map((review, i) => (
          <div
            key={i}
            className="relative  p-[1px] bg-gradient-to-br w-fit ~rounded-[0.625rem]/[1rem] from-[#333333] h-full to-[#111111] "
          >
            <div className="~min-w-[10rem]/[18.75rem] ~p-[0.75rem]/[1.5rem]   ~rounded-[0.625rem]/[1rem] bg-gradient-to-t from-[#1a1a19] to-[#201f1c]">
              <div className="flex items-center ~gap-[0.625rem]/[1rem]">
                <div className="relative ~size-[1.3722555637rem]/[2.8779070377rem] rounded-full">
                  <Image src={review.image} alt="" fill className="rounded-full object-cover object-top" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-[#F4F0FF] font-medium md:font-bold leading-[120%] ~text-[0.625rem]/[1.04625rem]">
                    {review.name}
                  </h3>
                  <p className="text-[#F4F0FFCC] pt-1 leading-[120%] text-start ~text-[0.436875rem]/[0.915625rem]">
                    {review.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Hero;
