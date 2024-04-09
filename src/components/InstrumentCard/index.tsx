import './styles.scss';

import React from 'react';

import type Props from './types';
import { Coin } from '../Coin/index';
import { Ticker } from '../Ticker';

export const InstrumentCard = ({ coinSymbol, coinId }: Props) => {
  console.log('🚀 ~ InstrumentCard ~ coinSymbol:', coinSymbol);
  return (
    <div className="instrument-card">
      {coinSymbol && (
        <>
          <Coin
            id={coinId}
            symbol={coinSymbol}
            isMini={false}
            isSelected={false}
          />
          <Ticker symbol={coinSymbol} />
        </>
      )}
    </div>
  );
};
