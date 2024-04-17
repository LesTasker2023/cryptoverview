import React, { useEffect, useState } from 'react';

interface Props {
  id: number;
  symbol: string;
}

const TradingViewWidget = ({ id, symbol }: Props) => {
  const pair = `KRAKEN:${symbol.replace('/', '')}`;
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: pair,
      width: '230',
      height: '100',
      locale: 'en',
      dateRange: '1M',
      colorTheme: 'dark',
      underLineColor: 'rgba(66, 66, 66, 0)',
      underLineBottomColor: 'rgba(66, 66, 66, 0)',
      isTransparent: true,
      autosize: false,
      largeChartUrl: '',
      noTimeScale: false,
      chartOnly: true,
    });

    const widgetContainer = document.querySelector(
      `.tradingview-widget--${id.toString()}`
    );

    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {};
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className={`tradingview-widget-container__widget tradingview-widget--${id}`}
      ></div>
    </div>
  );
};

export default TradingViewWidget;
