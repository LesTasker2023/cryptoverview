import React, { useEffect } from 'react';

interface Props {
  id: number;
  symbol: string;
  interval: string;
}

export const TradingViewChart = ({ id, symbol, interval }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: 'KRAKEN:PEPEUSD',
      interval: interval,
      autosize: true,

      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_legend: false,
      allow_symbol_change: true,
      save_image: false,
      calendar: false,
      hide_side_toolbar: false,

      studies: [
        'RSI@tv-basicstudies',
        'MASimple@tv-basicstudies',
        'STD;Bull%Bear%Power',
        'STD;MA%1Cross',
        'STD;EMA',
        'STD;TEMA',
      ],
    });
    const chart = document.querySelector(
      `.tradingview-widget-container__widget--${id}`
    );
    if (chart) {
      chart.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`tradingview-widget-container__widget tradingview-widget-container__widget--${id}`}
    />
  );
};
