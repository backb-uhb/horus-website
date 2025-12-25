"use client";
import useSpotlightEffect, {
  SpotlightConfig,
} from "@/utils/hooks/useSpotlightEffect";
import { HTMLAttributes } from "react";

interface AltConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig | AltConfig;
}

const SpotlightCursor = ({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) => {
  // Allow both naming styles
  const normalizedConfig: SpotlightConfig = {
    spotlightSize:
      (config as AltConfig).radius ?? (config as SpotlightConfig).spotlightSize,
    spotlightIntensity:
      (config as AltConfig).brightness ??
      (config as SpotlightConfig).spotlightIntensity,
    glowColor:
      (config as AltConfig).color ?? (config as SpotlightConfig).glowColor,
    fadeSpeed:
      (config as AltConfig).smoothing ?? (config as SpotlightConfig).fadeSpeed,
    pulseSpeed: (config as SpotlightConfig).pulseSpeed,
  };

  const canvasRef = useSpotlightEffect(normalizedConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;
