"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoopingGraphImage() {
  return (
    <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/10 to-transparent z-10" />
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/10 to-transparent z-10" />
      <motion.div
        className="flex w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="w-1/2 shrink-0">
          <Image
            src="/images/graph.svg"
            alt="Graph"
            width={1200}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="w-1/2 shrink-0">
          <Image
            src="/images/graph.svg"
            alt="Graph"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}
