'use client';
import { useEffect, useRef } from 'react';

interface TradingViewTickerProps {
  symbols?: string;
  theme?: 'light' | 'dark';
  hideChart?: boolean;
  itemSize?: 'adaptive' | 'compact' | 'regular';
  locale?: string;
  height?: string;
}

export default function TradingViewTicker({
  symbols = 'FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD',
  theme = 'dark',
  hideChart = false,
  itemSize = 'compact',
  locale = 'en',
  height = '56px'
}: TradingViewTickerProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the TradingView widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
    script.async = true;

    document.head.appendChild(script);

    // Create the custom element
    const container = containerRef.current;
    if (container) {
      const tickerTape = document.createElement('tv-ticker-tape');
      tickerTape.setAttribute('symbols', symbols);
      tickerTape.setAttribute('theme', theme);
      tickerTape.setAttribute('hide-chart', hideChart ? 'true' : 'false');
      tickerTape.setAttribute('item-size', itemSize);
      tickerTape.setAttribute('locale', locale);

      container.appendChild(tickerTape);
    }

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbols, theme, hideChart, itemSize, locale]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: height,
        overflow: 'hidden',
        zIndex: 1000,
      }}
    />
  );
}