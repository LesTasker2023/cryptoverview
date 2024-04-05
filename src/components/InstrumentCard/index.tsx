import './styles.scss';

import React from 'react';

import type Props from './types';
import { Coin } from '../Coin/index';
import { Ticker } from '../Ticker';

export const InstrumentCard = ({ coin }: Props) => {
  return (
    <div className="instrument-card">
      {coin && (
        <>
          <Coin {...coin} />
          <Ticker symbol={coin.symbol} />
        </>
      )}
    </div>
  );
};
