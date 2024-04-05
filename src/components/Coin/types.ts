interface CoinDetails {
  id?: number | null;
  name?: string | null;
  symbol: string;
  isMini: boolean;
  isSelected: boolean;
}

export default CoinDetails;
