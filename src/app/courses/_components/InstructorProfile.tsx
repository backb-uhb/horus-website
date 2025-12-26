"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ButtonBrown = ({ content }: { content: string }) => (
  <div className="px-4 py-2 bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] rounded-full text-black text-sm font-medium">
    {content}
  </div>
);

const slides = [
  {
    image: "/images/shanu.png",
    title: "Shanu",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging.",
  },
  {
    image: "/images/anas.png",
    title: "Anas",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Anas is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights.",
  },
  {
    image: "/images/nasif.png",
    title: "Nasif",
    subtitle: "Business Development Head",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Nasif drives growth at Horus with strategic partnerships and market expansion expertise.",
  },
  {
    image: "/images/shanu.png",
    title: "Shanu",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Shanu is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights. His hands-on approach and industry knowledge make learning both effective and engaging.",
  },
  {
    image: "/images/anas.png",
    title: "Anas",
    subtitle: "Trainer",
    heading: "watch",
    span: "Learn Lead",
    description:
      "Anas is a seasoned finance mentor at Horus, known for simplifying complex financial concepts and guiding students with practical, real-world insights.",
  },
];

const InstructorProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isScrollingRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToCard = React.useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const cards = container.querySelectorAll('[data-card-index]');
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        if (isDesktop) {
          // Desktop: Calculate to show expanded card + details centered
          const cardLeft = targetCard.offsetLeft;
          const expandedCardWidth = 300; // 18.75rem
          const detailsWidth = 360; // 22.5rem
          const gap = 27; // 1.6875rem
          // Total width of expanded card + gap + details
          const totalWidth = expandedCardWidth + gap + detailsWidth;
          // Calculate scroll to center the whole unit
          // We want: (containerWidth - totalWidth) / 2 = left margin
          const targetScroll = cardLeft - ((containerWidth - totalWidth) / 2);
          // Constrain to valid scroll range
          const maxScroll = container.scrollWidth - containerWidth;
          const finalScroll = Math.max(0, Math.min(targetScroll, maxScroll));
          isScrollingRef.current = true;
          container.scrollTo({
            left: finalScroll,
            behavior: "smooth",
          });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        } else {
          // Mobile: simple left align
          const cardLeft = targetCard.offsetLeft;
          isScrollingRef.current = true;
          container.scrollTo({
            left: Math.max(0, cardLeft - 16),
            behavior: "smooth",
          });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        }
      }
    },
    [isDesktop]
  );

  /* ---------------- AUTO SCROLL ---------------- */
  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (isPaused || isScrollingRef.current) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        // Reset to beginning
        isScrollingRef.current = true;
        container.scrollTo({ left: 0, behavior: "smooth" });
        setActiveIndex(0);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      } else {
        // Scroll to next card
        const nextIndex = Math.min(activeIndex + 1, slides.length - 1);
        setActiveIndex(nextIndex);
        
        isScrollingRef.current = true;
        
        setTimeout(() => {
          if (isDesktop) {
            scrollToCard(nextIndex);
          } else {
            // Mobile: just scroll by card width
            container.scrollBy({
              left: 231,
              behavior: "smooth",
            });
          }
          
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }, 50);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex, isDesktop, scrollToCard]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isDesktop) return; // Only for desktop

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = container.querySelectorAll('[data-card-index]');
        const containerCenter = container.scrollLeft + container.clientWidth / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        cards.forEach((card, index) => {
          const cardElement = card as HTMLElement;
          const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        setActiveIndex(closestIndex);
      }, 150);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isDesktop]);

  return (
    <div className="~pt-[2rem]/[11.6875rem] bg-black ~px-[1rem]/[8.9375rem]">
      {/* Header */}
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

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="~pt-[2.5rem]/[5rem] flex gap-[1.6875rem] overflow-x-auto no-scrollbar pb-4 ~px-[1rem]/[8.9375rem]"
        style={{ scrollBehavior: "smooth" }}
      >
        {slides.map((item, i) => (
          <div 
            key={i} 
            data-card-index={i}
            className="flex gap-[1.6875rem] min-w-fit flex-shrink-0"
          >
            {!isDesktop ? (
              /* MOBILE & TABLET: FLIP CARD */
              <div 
                className="cursor-pointer flex-shrink-0 ~w-[12.75rem]/[18.75rem] ~h-[14.3092088699rem]/[20rem]"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setFlippedCards(prev => 
                  prev.includes(i) ? prev : [...prev, i]
                )}
                onMouseLeave={() => setFlippedCards(prev => 
                  prev.filter(index => index !== i)
                )}
                onClick={() => toggleFlip(i)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ 
                    rotateY: flippedCards.includes(i) ? 180 : 0 
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* FRONT - IMAGE */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                    <div className="relative w-full h-full p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] to-[#111111]">
                      <div className="w-full relative ~rounded-[0.5rem]/[1.25rem] h-full overflow-hidden">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover ~rounded-[0.5rem]/[1.25rem]"
                          alt={item.title}
                        />

                        <div className="~p-[0.5rem]/[1rem] absolute w-full bottom-0 text-white">
                          <h2 className="font-medium ~text-[0.875rem]/[1.125rem] ~pb-[0.1rem]/[0.3rem] border-b w-full border-b-white/5">
                            {item.title}
                          </h2>

                          <div className="flex justify-between items-center ~pt-[0.3rem]/[0.5rem]">
                            <h4 className="~text-[0.75rem]/[0.875rem] leading-[100%]">
                              {item.subtitle}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* BACK - DETAILS */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="relative w-full h-full p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#DFAB6012] to-[#AC814326]">
                      <div className="w-full text-white flex justify-center items-center ~px-[1rem]/[1.5rem] ~rounded-[0.5rem]/[1.25rem] relative h-full bg-gradient-to-br from-[#090909] to-[#25221c]">
                        <div>
                          <h2 className="font-merriweather leading-[120%] ~text-[1.25rem]/[1.75rem]">
                            {item.heading} <br />
                            <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
                              {item.span}
                            </span>
                          </h2>

                          <p className="~text-[0.75rem]/[0.875rem] leading-[120%] ~pt-[1rem]/[1.5rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              /* DESKTOP: SIDE BY SIDE ANIMATION */
              <>
                {/* IMAGE CARD */}
                <motion.div
                  onClick={() => {
                    setActiveIndex(i);
                    scrollToCard(i);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(i);
                    // Scroll immediately when hovering
                    scrollToCard(i);
                  }}
                  className="cursor-pointer flex-shrink-0"
                  animate={{
                    width: activeIndex === i ? "18.75rem" : "12.75rem",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="relative w-full z-50 p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#333333] h-full to-[#111111]">
                    <div className="w-full relative ~rounded-[0.5rem]/[1.25rem] ~h-[14.3092088699rem]/[33.6875rem] overflow-hidden">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover ~rounded-[0.5rem]/[1.25rem]"
                        alt={item.title}
                      />

                      <div className="~p-[0.5rem]/[1.5rem] absolute w-full bottom-0 text-white">
                        <h2 className="font-medium ~text-[0.875rem]/[1.5rem] ~pb-[0.1rem]/[0.5rem] border-b w-full border-b-white/5">
                          {item.title}
                        </h2>

                        <div className="flex justify-between items-center ~pt-[0.3rem]/[0.5rem]">
                          <h4 className="~text-[0.75rem]/[1.125rem] leading-[100%]">
                            {item.subtitle}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* DETAILS CARD */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: activeIndex === i ? "22.5rem" : 0,
                    opacity: activeIndex === i ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="overflow-hidden flex-shrink-0"
                  style={{ display: activeIndex === i ? "block" : "none" }}
                >
                  <div className="relative z-20 w-fit p-[1px] bg-gradient-to-br ~rounded-[0.5rem]/[1.25rem] from-[#DFAB6012] h-full to-[#AC814326]">
                    <div className="~w-[18.75rem]/[22.5rem] text-white flex justify-center items-center ~px-[1rem]/[1.875rem] ~rounded-[0.5rem]/[1.25rem] relative ~h-[14.3092088699rem]/[33.6875rem] bg-gradient-to-br from-[#090909] to-[#25221c]">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: activeIndex === i ? 1 : 0,
                          x: activeIndex === i ? 0 : -20,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: activeIndex === i ? 0.3 : 0,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <h2 className="font-merriweather leading-[120%] ~text-[1.25rem]/[3.0625rem]">
                          {item.heading} <br />
                          <span className="bg-gradient-to-r from-[#ECB45D] via-[#FFD38D] to-[#FFB644] bg-clip-text text-transparent">
                            {item.span}
                          </span>
                        </h2>

                        <p className="~text-[0.75rem]/[1rem] leading-[120%] ~pt-[1rem]/[2rem]">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorProfile;