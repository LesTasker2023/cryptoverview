import React, { useEffect } from 'react';
import './styles.scss';

export const TradingViewTicker = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: 'PEPE ',
          proName: 'KRAKEN:PEPEUSD',
        },
        {
          description: 'BTC',
          proName: 'KRAKEN:BTCUSD',
        },
        {
          description: 'ETH',
          proName: 'KRAKEN:ETHUSD',
        },
        {
          description: 'SOL',
          proName: 'KRAKEN:SOLUSD',
        },
        {
          description: 'DOGE',
          proName: 'KRAKEN:DOGEUSD',
        },
        {
          description: 'WIF',
          proName: 'KRAKEN:WIFUSD',
        },
        {
          description: 'SHIB',
          proName: 'KRAKEN:SHIBUSD',
        },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });
    const chart = document.querySelector(`.tradingview-ticker-container`);
    if (chart) {
      chart.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="tradingview-ticker-container" />;
};
