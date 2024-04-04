import './styles.scss';

import React from 'react';

import CoinDetails from './types';

export const Coin = ({
  id,
  name,
  symbol,
  slug,
  num_market_pairs,
  date_added,
  tags,
  max_supply,
  circulating_supply,
  total_supply,
  infinite_supply,
  platform,
  cmc_rank,
  self_reported_circulating_supply,
  self_reported_market_cap,
  tvl_ratio,
  last_updated,
  quote,
  coinLogoUrl,
}: CoinDetails) => {
  console.log('🚀 ~ coinLogoUrl:', coinLogoUrl);

  return (
    <div className="coin">
      <img
        src={`https://cryptobubbles.net/backend/data/logos/${id}.png`}
        alt=""
      />
    </div>
  );
};
