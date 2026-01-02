'use client';

import { useEffect, useState } from 'react';

interface Symbol {
  proName: string;
  title: string;
}

interface TradingViewTickerProps {
  symbols?: Symbol[];
  colorTheme?: 'light' | 'dark';
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  displayMode?: 'adaptive' | 'compact' | 'regular';
}

export default function TradingViewTicker({
  symbols = [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
    { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
    { proName: "TVC:GOLD", title: "Gold" },
    { proName: "TVC:USOIL", title: "Crude Oil" },
    { proName: "NSE:RELIANCE", title: "NSE" },
    { proName: "NSE:NIFTY", title: "NIFTY" },
    { proName: "NSE:ADANIENT", title: "ADANI" }
  ],
  colorTheme = 'dark',
  isTransparent = false,
  showSymbolLogo = true,
  displayMode = 'adaptive'
}: TradingViewTickerProps = {}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const height = isMobile ? 72 : 46;

  const widgetConfig = {
    symbols,
    colorTheme,
    largeChartUrl: "",
    isTransparent,
    showSymbolLogo,
    displayMode,
    width: "100%",
    height,
    utm_source: "thehorusacademy.com",
    utm_medium: "widget",
    utm_campaign: "ticker-tape",
    "page-uri": "thehorusacademy.com/#contact-form"
  };

  const encodedConfig = encodeURIComponent(JSON.stringify(widgetConfig));
  const iframeUrl = `https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#${encodedConfig}`;

  return (
    <div style={{ 
      width: '100vw', 
      height: `${height}px`, 
      overflow: 'hidden',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw'
    }}>
   <iframe
  src={iframeUrl}
  scrolling="no"
  style={{
    boxSizing: 'border-box',
    display: 'block',
    height: `${height}px`,
    width: '100%',
    border: 'none'
  }}
  title="TradingView Ticker Tape"
/>
    </div>
  );
}