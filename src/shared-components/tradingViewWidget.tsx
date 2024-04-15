import React, { useEffect, useState } from 'react';

interface Props {
  id: number;
  symbol: string;
}

const TradingViewWidget = ({ id, symbol }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const pair = `KRAKEN:${symbol.replace('/', '')}`;
  useEffect(() => {
    setLoading(true);
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: pair,
      width: '230',
      height: '100',
      locale: 'en',
      dateRange: '3m',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: false,
      largeChartUrl: '',
      noTimeScale: true,
      chartOnly: true,
      containerId: 'adjsgfv',
    });

    const widgetContainer = document.querySelector(
      `.tradingview-widget--${id.toString()}`
    );

    if (widgetContainer) {
      widgetContainer.appendChild(script);
      setLoading(false);
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
