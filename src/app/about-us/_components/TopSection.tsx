"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = `At Horus, every trader is built with real market exposure, 
on India's largest trading floor, not theory or simulation. 
Learn through live trades, fast feedback, and mentorship from full-time professionals. 
This is where precision meets pressure. 
This is how real traders are made.`;

const TopSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end 50%"],
  });

  const lines = useMemo(() => text.split("\n").map((l) => l.trim()), []);
  const totalLines = lines.length;

  const line0Opacity = useTransform(
    scrollYProgress,
    [0, 1 / totalLines],
    [0.2, 1]
  );
  const line0Y = useTransform(scrollYProgress, [0, 1 / totalLines], [20, 0]);

  const line1Opacity = useTransform(
    scrollYProgress,
    [1 / totalLines, 2 / totalLines],
    [0.2, 1]
  );
  const line1Y = useTransform(
    scrollYProgress,
    [1 / totalLines, 2 / totalLines],
    [20, 0]
  );

  const line2Opacity = useTransform(
    scrollYProgress,
    [2 / totalLines, 3 / totalLines],
    [0.2, 1]
  );
  const line2Y = useTransform(
    scrollYProgress,
    [2 / totalLines, 3 / totalLines],
    [20, 0]
  );

  const line3Opacity = useTransform(
    scrollYProgress,
    [3 / totalLines, 4 / totalLines],
    [0.2, 1]
  );
  const line3Y = useTransform(
    scrollYProgress,
    [3 / totalLines, 4 / totalLines],
    [20, 0]
  );

  const line4Opacity = useTransform(
    scrollYProgress,
    [4 / totalLines, 5 / totalLines],
    [0.2, 1]
  );
  const line4Y = useTransform(
    scrollYProgress,
    [4 / totalLines, 5 / totalLines],
    [20, 0]
  );

  const lineAnimations = [
    { opacity: line0Opacity, y: line0Y },
    { opacity: line1Opacity, y: line1Y },
    { opacity: line2Opacity, y: line2Y },
    { opacity: line3Opacity, y: line3Y },
    { opacity: line4Opacity, y: line4Y },
  ];

  return (
    <div ref={ref} className=" bg-black">
      <Breadcrumbs activepage="About Us" />
      <div className="~px-[0.625rem]/[7.4375rem] ~pb-[2.5rem]/[11.125rem] ~pt-[3.75rem]/[8.625rem]">
        <div className="font-satoshi font-medium ~text-[1.375rem]/[4rem] leading-[105%] ~tracking-[-0.07rem]/[-0.0387rem] ~pr-[0]/[15rem] text-[#FFFFFF]">
          {lines.map((line, i) => (
            <motion.p key={i} style={lineAnimations[i]}>
              {line.includes("Horus") ? (
                <>
                  At{" "}
                  <span className="font-normal font-merriweather  bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent tracking-[-0.07rem]">
                    Horus
                  </span>
                  {line.replace("At Horus", "")}
                </>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
