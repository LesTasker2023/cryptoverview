import './styles.scss';

import type Props from './types';
import { Coin } from '../../components/Coin';
import { getLogo } from '../../utils/functions';
import { Ticker } from '../../components/Ticker';

const favList = ['BTC', 'ETH', 'LTC', 'DOGE', 'PEPE', 'SOL'];

export const Dashboard = ({ data, status }: Props) => {
  return (
    <div className="dashboard">
      {data?.map((coin) => {
        if (coin && favList.includes(coin.symbol)) {
          return (
            <div className="dashboard__coin-list">
              <Coin
                {...coin}
                coinLogoUrl={
                  coin.name && coin.symbol
                    ? getLogo(coin?.name, coin.symbol)
                    : ''
                }
              />
              {coin?.symbol?.length > 0 && <Ticker symbol={coin.symbol} />}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
