import './styles.scss';
import type Props from './types';
import { Coin } from '../../components/Coin';
import { useState } from 'react';
import { InstrumentCard } from '../../components/InstrumentCard';
import CoinDetails from '../../components/Coin/types';
import { InstrumentList } from '../../components/InstrumentList';

interface CoinData {
  symbol: string;
  id: number;
}

export const Dashboard = ({ data, status }: Props) => {
  const [favourites, setFavourites] = useState<CoinData[]>([]);
  console.log('🚀 ~ Dashboard ~ favourites:', favourites);

  const toggleFavorite = (symbol: string, id: number) => {
    if (favourites.some((fav) => fav.symbol === symbol)) {
      setFavourites((prevFavourites) =>
        prevFavourites.filter((fav) => fav.symbol !== symbol)
      );
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, { symbol, id }]);
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
                onClick={() =>
                  toggleFavorite(coin.symbol, coin.id ? coin.id : 1)
                }
              >
                <Coin
                  isSelected={favourites.some(
                    (fav) => fav.symbol === coin.symbol
                  )}
                  isMini={true}
                  {...coin}
                />
              </div>
            );
          })}
      </div>
      {<InstrumentList instruments={favourites} />}
    </div>
  );
};
