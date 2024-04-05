import './styles.scss';
import type Props from './types';
import { Coin } from '../../components/Coin';
import { getLogo } from '../../utils/functions';
import { Ticker } from '../../components/Ticker';
import { useState } from 'react';
import { InstrumentCard } from '../../components/InstrumentCard';
import CoinDetails from '../../components/Coin/types';

// const list = ['BTC', 'ETH', 'LTC', 'DOGE', 'PEPE', 'SOL'];

export const Dashboard = ({ data, status }: Props) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const toggleFavorite = (symbol: string) => {
    if (favourites.includes(symbol)) {
      setFavourites((prevFavourites) =>
        prevFavourites.filter((fav) => fav !== symbol)
      );
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, symbol]);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__favourites">
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.symbol}
                onClick={() => toggleFavorite(coin.symbol)}
              >
                <Coin
                  isSelected={favourites.includes(coin.symbol)}
                  isMini={true}
                  {...coin}
                />
              </div>
            );
          })}
      </div>
      {data?.map((coin) => {
        const coinProps: CoinDetails = {
          symbol: coin.symbol,
          isMini: false,
          isSelected: false,
          id: coin.id,
          name: coin.name,
        };
        if (coin && favourites.includes(coin.symbol)) {
          return <InstrumentCard coin={coinProps} price={''} pct={''} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};
