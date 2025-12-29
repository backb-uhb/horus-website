"use client";

import { useEffect, useRef } from "react";

interface TradingViewMiniChartProps {
  symbol?: string;
  timeFrame?: string;
  showTimeScale?: boolean;
  theme?: "light" | "dark";
  transparent?: boolean;
  className?: string;
}

export default function TradingViewMiniChart({
  symbol = "FX:EURUSD",
  timeFrame = "7D",
  showTimeScale = true,
  theme = "dark",
  transparent = true,
  className = "",
}: TradingViewMiniChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      if (containerRef.current) {
        const chart = document.createElement("tv-mini-chart");
        chart.setAttribute("symbol", symbol);
        chart.setAttribute("time-frame", timeFrame);
        if (showTimeScale) chart.setAttribute("show-time-scale", "");
        chart.setAttribute("theme", theme);
        if (transparent) chart.setAttribute("transparent", "");
        chart.style.width = "100%";
        chart.style.height = "100%";

        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(chart);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [symbol, timeFrame, showTimeScale, theme, transparent]);

  return <div ref={containerRef} className={className} />;
}