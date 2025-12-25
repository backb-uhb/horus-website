"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FloatingVideo = ({ src, text }: { src: string; text: string }) => {
  const ref = useRef(null);

  // Track scroll for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // "start end" = element enters viewport bottom
    // "end start" = element leaves viewport top
  });

  // Map scroll progress to vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  // moves from +80px to -80px as you scroll

  return (
    <motion.div ref={ref} style={{ y }} className="mb-12">
      <video
        src={src}
        controls
        className="~size-[8.75rem]/[21.875rem] ~rounded-[0.625rem]/[1.5rem]"
      />
      <p className="~max-w-[8.75rem]/[21.875rem] font-satoshi leading-[110%] ~tracking-[-0.008125rem]/[-0.02rem] ~text-[0.75rem]/[1.875rem] md:font-bold">
        {text}
      </p>
    </motion.div>
  );
};
export default FloatingVideo;
