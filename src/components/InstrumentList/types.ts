export default interface Props {
  instruments: CoinData[];
}

interface CoinData {
  symbol: string;
  id: number;
}
