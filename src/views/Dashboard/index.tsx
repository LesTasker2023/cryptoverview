import './styles.scss';
import type Props from './types';
import { Coin } from '../../components/Coin';
import { getLogo } from '../../utils/functions';
import { Ticker } from '../../components/Ticker';
import { useEffect, useState } from 'react';

const list = ['BTC', 'ETH', 'LTC', 'DOGE', 'PEPE', 'SOL'];

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
                  coinLogoUrl={
                    coin.name && coin.symbol
                      ? getLogo(coin.name, coin.symbol)
                      : ''
                  }
                />
              </div>
            );
          })}
      </div>
      {data?.map((coin) => {
        if (coin && favourites.includes(coin.symbol)) {
          return (
            <div key={coin.symbol} className="dashboard__coin-list">
              <Coin
                isSelected={favourites.includes(coin.symbol)}
                isMini={false}
                {...coin}
                coinLogoUrl={
                  coin.name && coin.symbol
                    ? getLogo(coin.name, coin.symbol)
                    : ''
                }
              />
              {coin.symbol?.length > 0 && <Ticker symbol={coin.symbol} />}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
