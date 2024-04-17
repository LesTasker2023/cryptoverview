import './styles.scss';

import React from 'react';

import type Props from './types';
import { TradingViewChart } from '../../shared-components/TradingViewChart';
import { TradingViewTicker } from '../../shared-components/TradingViewTicker';

export const Instrument = ({ symbol }: Props) => {
  return (
    <div className="instrument-container">
      <TradingViewTicker />
      <div className="instrument">
        <TradingViewChart id={1} symbol={'PEPE/USD'} interval={'15'} />
        <TradingViewChart id={2} symbol={'PEPE/USD'} interval={'30'} />
        <TradingViewChart id={3} symbol={'PEPE/USD'} interval={'60'} />
        <TradingViewChart id={4} symbol={'PEPE/USD'} interval={'240'} />
      </div>
    </div>
  );
};
