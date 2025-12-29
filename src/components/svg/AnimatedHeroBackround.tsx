import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedHeroBackground = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const mainGlow = svgRef.current.querySelector("#main-gradient-glow");
    gsap.to(mainGlow, {
      opacity: 0.7,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const gradientStop = svgRef.current.querySelector(
      "#gradient-d stop:first-child"
    );
    gsap.to(gradientStop, {
      attr: { stopColor: "#FFD699" },
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const dots = svgRef.current.querySelectorAll(".animated-dot");

    dots.forEach((dot) => {
      const duration = 0.8 + Math.random() * 3;
      const delay = Math.random() * 2;

      const xOffset = (Math.random() - 0.5) * 25;
      const yOffset = (Math.random() - 0.5) * 25;

      // Create a timeline for each dot
      const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: delay });

      tl.to(dot, {
        x: xOffset,
        y: yOffset,
        duration: duration,
        ease: "sine.inOut",
      });

      gsap.to(dot, {
        opacity: 0.2 + Math.random() * 0.6,
        duration: 1 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay * 0.5,
      });
    });
  }, []);

  const generateRandomDots = (count: number) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      const cx = Math.random() * 1440;
      const cy = Math.random() * 600;
      const r = 0.5 + Math.random() * 1;
      const opacity = 0.2 + Math.random() * 0.6;

      dots.push(
        <g key={`random-${i}`} className="animated-dot">
          <circle cx={cx} cy={cy} r={r} fill="#DFAB60" opacity={opacity} />
        </g>
      );
    }
    return dots;
  };

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute  bottom-0 z-50 "
      viewBox="0 0 1440 610"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient
          id="gradient-d"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(1126.14 0 0 788.761 720 770)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECB76A" />
          <stop offset={0.7} stopOpacity={0} />
        </radialGradient>

        <clipPath id="clip-c">
          <path fill="#fff" d="M-11 10h1462v600H-11z" />
        </clipPath>
      </defs>

      <g clipPath="url(#clip-c)">
        <path
          id="main-gradient-glow"
          fill="url(#gradient-d)"
          d="M-11 170h1462v600H-11z"
          opacity={0.4}
        />

        <g opacity={0.7}>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M685.718 600.925a.586.586 0 1 0-.637-.985.586.586 0 0 0 .637.985Z"
              opacity={0.3}
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M739.831 605.014a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M734.072 570.247a.882.882 0 1 0-.96-1.48.882.882 0 0 0 .96 1.48Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M590.71 604.474a1.175 1.175 0 1 0-1.28-1.971 1.175 1.175 0 0 0 1.28 1.971Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M657.241 599.107a1.175 1.175 0 1 0-1.28-1.971 1.175 1.175 0 0 0 1.28 1.971Z"
              opacity={0.3}
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M728.71 602.433a1.174 1.174 0 1 0-1.278-1.97 1.174 1.174 0 0 0 1.278 1.97Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M698.92 600.761a1.174 1.174 0 1 0-1.278-1.97 1.174 1.174 0 0 0 1.278 1.97Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M585.092 462.232a1.175 1.175 0 1 0-1.28-1.971 1.175 1.175 0 0 0 1.28 1.971Z"
              opacity={0.11}
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M591.808 465.575a.881.881 0 1 0-.958-1.477.881.881 0 0 0 .958 1.477Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M601.355 444.68a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M558.839 470.868a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M542.124 498.515a1.175 1.175 0 1 0-1.28-1.97 1.175 1.175 0 0 0 1.28 1.97Z"
              opacity={0.11}
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M525.734 493.753a.587.587 0 1 0-.64-.985.587.587 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M596.077 482.405a.585.585 0 1 0-.639-.984.587.587 0 0 0 .639.984Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M703.476 412.712a.587.587 0 1 0-.64-.985.587.587 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M739.906 351.263a.588.588 0 1 0-.64-.985.588.588 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M782.46 374.757a.586.586 0 1 0-.638-.984.586.586 0 0 0 .638.984Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M424.039 576.548a.586.586 0 1 0-.637-.985.586.586 0 0 0 .637.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M399.39 554.739a.586.586 0 1 0-.638-.984.586.586 0 0 0 .638.984Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M385.562 579.818a.588.588 0 1 0-.64-.985.588.588 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M421 598.827a.587.587 0 1 0-.64-.985.587.587 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M758.453 339.927a.588.588 0 1 0-.64-.985.588.588 0 0 0 .64.985Z"
              opacity={0.3}
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M666.031 371.2a.587.587 0 1 0-.64-.985.587.587 0 0 0 .64.985Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M812.566 344.016a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M806.808 309.25a.88.88 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M489.55 580.942a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>
          <g className="animated-dot">
            <path
              fill="#DFAB60"
              d="M395.519 597.86a.881.881 0 1 0-.96-1.478.881.881 0 0 0 .96 1.478Z"
            />
          </g>

          {generateRandomDots(200)}
        </g>
      </g>
    </svg>
  );
};

export default AnimatedHeroBackground;
