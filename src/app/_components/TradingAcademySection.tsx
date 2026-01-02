"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousal";
import Autoplay from "embla-carousel-autoplay";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";
import YouTube, { YouTubeProps, YouTubeEvent } from "react-youtube";
// Mobile Carousel Component
const MobileTradingCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="~px-[0rem]/[5.5rem]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current?.stop}
        onMouseLeave={plugin.current?.reset}
        draggable={true}
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
        }}
      >
        <CarouselContent className="~pt-[3rem]/[10rem] flex md:block ~pb-[2.5rem]/[7rem]">
          <CarouselItem className="md:flex block justify-end basis-1/1 md:basis-1 mr-[1rem] md:mr-0">
            <div className="max-md:basis-1/1 max-md:w-fit">
              <iframe
                src={"https://youtube.com/embed/GBpnUja4vvI"}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
              />
              <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-semibold">
                We Build Earners, <br /> Not Just Learners
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1 mr-[1rem] md:mr-0">
            <div className="mt-0 md:mt-[-15rem]">
              <iframe
                src={
                  "https://youtube.com/embed/Wjd8pE8I-Cs?si=Ey8J3XJ9gxl8qexN"
                }
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
              />
              <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-semibold">
                College in the morning. Charts by night | Horus Financial
                Academy{" "}
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:flex mr-[1rem] md:mr-0 justify-center basis-1/1 md:basis-1 pt-0 md:pt-[9.875rem]">
            <div className="">
              <iframe
                src={"https://youtube.com/embed/glIt4_D3ShI"}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
              />
              <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-semibold">
                Learning trading the right
                <br /> way makes all the difference.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:flex basis-1/1 md:basis-1 mr-[1rem] md:mr-0 justify-end md:mt-[-18rem]">
            <div className="">
              <iframe
                src={
                  "https://youtube.com/embed/uFtbfj6TWfs?si=yTlCe-jqgJJ7DvrI"
                }
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
              />
              <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
                From Beginner to Profitable Trader at 22!{" "}
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const DesktopTradingLayout = () => {
  const playersRef = useRef<{ [key: string]: YouTubeEvent["target"] }>({});

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: { autoplay: 0, modestbranding: 1, rel: 0 },
  };

  const handleReady = (videoId: string, e: YouTubeEvent) => {
    playersRef.current[videoId] = e.target;
  };

  const handlePlay = (videoId: string) => {
    Object.entries(playersRef.current).forEach(([id, player]) => {
      if (id !== videoId) player.pauseVideo();
    });
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  // const ref5 = useRef(null);

  const { scrollYProgress: s1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(s1, [0, 1], [50, -80]); // more dramatic
  const opacity1 = useTransform(s1, [0, 0.2, 1], [0, 1, 0.6]);
  const scale1 = useTransform(s1, [0, 1], [0.95, 1.05]);

  const { scrollYProgress: s2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });
  const y2 = useTransform(s2, [0, 1], [80, -120]);
  const opacity2 = useTransform(s2, [0, 0.2, 1], [0, 1, 0.7]);
  const scale2 = useTransform(s2, [0, 1], [0.9, 1.1]);

  const { scrollYProgress: s3 } = useScroll({
    target: ref3,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(s3, [0, 1], [-60, 100]); // reverse float
  const opacity3 = useTransform(s3, [0, 0.2, 1], [0, 1, 0.5]);
  const scale3 = useTransform(s3, [0, 1], [1, 1.08]);

  const { scrollYProgress: s4 } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });
  const y4 = useTransform(s4, [0, 1], [40, -70]);
  const opacity4 = useTransform(s4, [0, 0.2, 1], [0, 1, 0.6]);
  const scale4 = useTransform(s4, [0, 1], [0.95, 1]);
  // const { scrollYProgress: s5 } = useScroll({
  //   target: ref5,
  //   offset: ["start end", "end start"],
  // });
  // const y5 = useTransform(s5, [0, 1], [-100, 150]);
  // const opacity5 = useTransform(s5, [0, 0.2, 1], [0, 1, 0.4]);
  // const scale5 = useTransform(s5, [0, 1], [0.9, 1.1]);

  return (
    <div className="~px-[0rem]/[5.5rem] z-[100] mx-auto max-w-[1440px] relative overflow-hidden">
      <div className="~pt-[3rem]/[10rem] relative z-20 md:block ~pb-[2.5rem]/[7rem] space-y-20">
        <motion.div
          ref={ref1}
          style={{ y: y1, opacity: opacity1, scale: scale1 }}
          className="md:flex block justify-end"
        >
          <div>
            <div className="~rounded-[0.625rem]/[1.5rem]  overflow-hidden">
              <YouTube
                videoId="GBpnUja4vvI"
                opts={opts}
                className="~size-[8.75rem]/[21.875rem] relative  ~rounded-[0.625rem]/[1.5rem] "
                onReady={(e) => handleReady("uNTTgMd_ghQ", e)}
                onPlay={() => handlePlay("uNTTgMd_ghQ")}
              />
            </div>
            <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
              We Build Earners, <br /> Not Just Learners
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          style={{ y: y2, opacity: opacity2, scale: scale2 }}
          className="basis-1/1 md:basis-1"
        >
          <div className="mt-0 md:mt-[-15rem]">
            <div className="~rounded-[0.625rem]/[1.5rem] w-fit  overflow-hidden">
              <YouTube
                videoId="Wjd8pE8I-Cs"
                opts={opts}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
                onReady={(e) => handleReady("Wjd8pE8I-Cs", e)}
                onPlay={() => handlePlay("Wjd8pE8I-Cs")}
              />
            </div>
            <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
              College in the morning. Charts by night | Horus Financial Academy
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          style={{ y: y3, opacity: opacity3, scale: scale3 }}
          className="md:flex justify-center basis-1/1 md:basis-1"
        >
          <div>
            <div className="~rounded-[0.625rem]/[1.5rem]  overflow-hidden">
              <YouTube
                videoId="glIt4_D3ShI"
                opts={opts}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
                onReady={(e) => handleReady("qeaQI3MAWZU", e)}
                onPlay={() => handlePlay("qeaQI3MAWZU")}
              />
            </div>
            <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
              Learning trading the right <br /> way makes all the difference.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          style={{ y: y4, opacity: opacity4, scale: scale4 }}
          className="basis-1/1 md:basis-1 md:~mt-[6rem]/[-5rem]"
        >
          <div>
            <div className="~rounded-[0.625rem]/[1.5rem] w-fit  overflow-hidden">
              <YouTube
                videoId="uFtbfj6TWfs"
                opts={opts}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
                onReady={(e) => handleReady("uFtbfj6TWfs", e)}
                onPlay={() => handlePlay("uFtbfj6TWfs")}
              />
            </div>
            <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
              From Beginner to Profitable Trader at 22!
            </p>
          </div>
        </motion.div>

        {/* 5 */}
        {/* <motion.div
          ref={ref5}
          style={{ y: y5, opacity: opacity5, scale: scale5 }}
          className="md:flex basis-1/1 md:basis-1 justify-end md:~mt-[0rem]/[-18rem]"
        >
          <div>
            <div className="~rounded-[0.625rem]/[1.5rem]  overflow-hidden">
              <YouTube
                videoId="uFtbfj6TWfs"
                opts={opts}
                className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
                onReady={(e) => handleReady("uFtbfj6TWfs", e)}
                onPlay={() => handlePlay("uFtbfj6TWfs")}
              />
            </div>
            <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.5rem] md:font-bold">
              From Beginner to Profitable Trader at 22!
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

// Main Component
const TradingAcademySection = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className="w-full ~pt-[3rem]/[9.125rem] relative px-[0.75rem] bg-black text-white">
      <div className="absolute inset-0 w-full">
        <motion.div
          className="w-full h-full bg-[radial-gradient(circle_at_center,#ECB76A33_0%,#ECB76A00_50%,#000000_100%)]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="md:sticky md:top-[12%] z-[500]">
        <div className="relative z-[1200] text-center font-merriweather tracking-[-0.05rem] md:font-bold leading-[120%] ~text-[1.375rem]/[3.25rem]">
          Unlock the mindset of{" "}
          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
            Elite trader
          </span>
        </div>

        <div className="relative text-center text-[#FFF4E3] font-satoshi leading-[110%] ~pt-[0.2rem]/[1rem] md:font-bold ~text-[0.75rem]/[1.25rem]">
          Real strategies. Real results. Straight from the mentors at Horus.
        </div>
      </div>
      {isMobile ? <MobileTradingCarousel /> : <DesktopTradingLayout />}
    </section>
  );
};

export default TradingAcademySection;
