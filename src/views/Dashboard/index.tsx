import './styles.scss';

import type Props from './types';
import { Coin } from '../../components/Coin';
import { getLogo } from '../../utils/functions';

export const Dashboard = ({ data, status }: Props) => {
  return (
    <div className="dashboard">
      {data?.map((coin) => {
        return (
          <Coin
            {...coin}
            coinLogoUrl={
              coin.name && coin.symbol ? getLogo(coin?.name, coin.symbol) : ''
            }
          />
        );
      })}
    </div>
  );
};
