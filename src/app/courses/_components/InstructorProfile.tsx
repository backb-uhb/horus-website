"use client";

import ButtonBrown from "@/components/svg/ButtonBrown";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/shanu.png",
    title: "Shanu",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
  {
    image: "/images/anas.png",
    title: "Anas",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Anas is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging.",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Business Development Head",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging. ",
  },
];

const InstructorProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial state on mount
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, {
        flex: i === 0 ? "0 0 18.75rem" : "1 1 0%",
      });
    });

    detailsRef.current.forEach((detail, i) => {
      if (!detail) return;
      gsap.set(detail, {
        width: i === 0 ? "22.5rem" : 0,
        opacity: i === 0 ? 1 : 0,
        marginLeft: i === 0 ? "0rem" : "-1.6875rem",
      });
    });
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      if (i === activeIndex) {
        gsap.to(card, {
          flex: "0 0 18.75rem",
          duration: 0.6,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(card, {
          flex: "1 1 0%",
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    });

    detailsRef.current.forEach((detail, i) => {
      if (!detail) return;

      if (i === activeIndex) {
        gsap.to(detail, {
          width: "22.5rem",
          opacity: 1,
          marginLeft: "0rem",
          duration: 0.6,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(detail, {
          width: 0,
          opacity: 0,
          marginLeft: "-1.6875rem",
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="~pt-[2rem]/[11.6875rem] bg-black ~px-[1rem]/[8.9375rem]">
      <div>
        <div className="flex justify-center">
          <ButtonBrown content="Instructor profile" />
        </div>
        <h2 className="~text-[1.375rem]/[3.25rem] text-center font-normal font-merriweather leading-[120%] tracking-[-0.05rem] text-[#FFFFFF] ~pt-[1rem]/[1.5rem]">
          Led by{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Industry Experts
          </span>
        </h2>

        <p className="font-inter font-normal leading-[120%] text-[#FFFFFF] text-center tracking-[0%] ~my-[0.75rem]/[1.5rem] ~text-[0.625rem]/[1rem]">
          Led by a professional with real-world expertise.
        </p>
      </div>

      <div className="~pt-[2.5rem]/[5rem] ~pb-[3rem]/[4.625rem] overflow-hidden">
        <div className="flex gap-[1.6875rem]">
          {slides.map((item, i) => (
            <React.Fragment key={i}>
              <div
                ref={el => {
                  cardsRef.current[i] = el;
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className="cursor-pointer flex-shrink-0"
              >
                <div className="relative w-full p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] h-full to-[#111111]">
                  <div className="w-full relative ~rounded-[0.5rem]/[1.25rem] ~h-[14.3092088699rem]/[33.6875rem]">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover ~rounded-[0.5rem]/[1.25rem]"
                      alt=""
                    />

                    <div className="~p-[0.5rem]/[1.5rem] absolute w-full bottom-0 text-white">
                      <h2 className="font-medium ~text-[0.875rem]/[1.5rem] ~pb-[0.1rem]/[0.5rem] border-b w-full border-b-white/5">
                        {item.title}
                      </h2>

                      <div className="flex justify-between items-center relative overflow-hidden ~pt-[0.3rem]/[0.5rem]">
                        <h4 className="~text-[0.75rem]/[1.125rem] text-nowrap text-ellipsis leading-[100%]">
                          {item.subtitle}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={el => {
                  detailsRef.current[i] = el;
                }}
                className="flex-shrink-0 overflow-hidden -ml-[1.6875rem]"
                style={{
                  width: 0,
                  opacity: 0,
                  marginLeft: "-1.6875rem",
                }}
              >
                <div className="relative z-20 p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#DFAB6012] h-full to-[#AC814326]">
                  <div className="~w-[14rem]/[22.5rem] text-white flex justify-center items-center ~px-[1rem]/[1.875rem] ~rounded-[0.5rem]/[1.25rem] relative ~h-[14.3092088699rem]/[33.6875rem] bg-gradient-to-br from-[#090909] to-[#25221c]">
                    <div>
                      <h2 className="font-merriweather leading-[120%] ~text-[1.25rem]/[3.0625rem]">
                        {item.heading} <br />
                        <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
                          {item.span}
                        </span>
                      </h2>
                      <p className="~text-[0.75rem]/[1rem] leading-[120%] ~pt-[1rem]/[2rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
