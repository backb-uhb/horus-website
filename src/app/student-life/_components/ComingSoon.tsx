"use client"
import React, { useEffect, useRef } from 'react';

export default function ComingSoon() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Load GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const { gsap } = window;

      // Animate letters
      gsap.to('.letter', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.3
      });

      // Animate particles
      particlesRef.current.forEach((particle) => {
        gsap.to(particle, {
          y: '-=100',
          x: '+=50',
          opacity: 0.3,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2 + 1.5
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.gsap) {
      window.gsap.to('.letter', {
        scale: 1.2,
        duration: 0.3,
        stagger: 0.02,
        ease: 'back.out(2)'
      });
    }
  };

  const handleMouseLeave = () => {
    if (window.gsap) {
      window.gsap.to('.letter', {
        scale: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: 'back.out(2)'
      });
    }
  };

  const text = "Coming Soon";

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            ref={el => { particlesRef.current[i] = el; }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: '#FBCC83',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <h1 
          ref={titleRef}
          className="~text-[2rem]/[4rem] font-semibold font-merriweather cursor-default"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="letter inline-block opacity-0"
              style={{ color: '#ECB45D' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

      </div>
    </div>
  );
}