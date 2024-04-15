export default interface Props {
  coinSymbol: string;
  coinId: number;
}

export interface TickerUpdate {
  symbol: string;
  bid: number;
  bid_qty: number;
  ask: number;
  ask_qty: number;
  last: number;
  volume: number;
  vwap: number;
  low: number;
  high: number;
  change: number;
  change_pct: number;
}

export interface TickerChannelUpdate {
  channel: 'ticker' | 'heartbeat' | 'status' | 'book';
  type: string;
  data: TickerUpdate[];
}
