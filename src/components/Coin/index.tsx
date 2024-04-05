import CoinDetails from './types';
import './styles.scss';

export const Coin = ({ id, symbol, isMini, isSelected }: CoinDetails) => {
  return (
    <div
      title={symbol ? symbol : ''}
      className={`coin ${isMini ? 'coin--mini' : ''} ${isSelected && isMini ? 'coin--selected' : ''}`}
    >
      <img
        src={`https://cryptobubbles.net/backend/data/logos/${id}.png`}
        alt=""
      />
    </div>
  );
};
