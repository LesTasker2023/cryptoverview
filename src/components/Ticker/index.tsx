import React, { useState, useEffect } from 'react';
import Props from './types';

const PublicWebSocketUrl = 'wss://ws.kraken.com/v2';

interface Bid {
  price: number;
  qty: number;
}

interface BookUpdate {
  asks: Bid[];
  bids: Bid[];
  checksum: number;
  symbol: string;
}
interface TickerUpdate {
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

interface TickerChannelUpdate {
  channel: 'ticker' | 'heartbeat' | 'status' | 'book';
  type: string;
  data: TickerUpdate[];
}
interface BookChannelUpdate {
  channel: 'ticker' | 'heartbeat' | 'status' | 'book';
  type: string;
  data: BookUpdate[];
}

export const Ticker = ({ currencyPair }: Props) => {
  const [publicSocket, setPublicSocket] = useState<WebSocket>();
  const [publicData, setPublicData] = useState<BookChannelUpdate | null>(null);
  const [tickerData, setTickerData] = useState<string>('');
  const [tickerColour, setTickerColour] = useState<string>('#000');

  console.log(tickerData);
  const subscribeToPublicChannel = (currencyPair: string) => {
    if (publicSocket) {
      publicSocket.send(
        JSON.stringify({
          method: 'subscribe',
          params: {
            channel: 'book',
            snapshot: true,
            symbol: ['BTC/USD'],
          },
        })
      );
    } else {
      console.error('Error');
    }
  };

  useEffect(() => {
    const publicSocketInstance = new WebSocket(PublicWebSocketUrl);

    publicSocketInstance.onopen = () => {
      console.log('Public WebSocket connected');
      setPublicSocket(publicSocketInstance);
    };

    publicSocketInstance.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPublicData(data);
    };

    return () => {
      publicSocketInstance.close();
    };
  }, []);

  useEffect(() => {
    // if (
    //   publicData &&
    //   publicData.channel === 'book' &&
    //   publicData.data &&
    //   publicData.data[0] &&
    //   publicData.data[0].asks &&
    //   publicData.data[0].asks[0] &&
    //   publicData.data[0].asks[0].price &&
    //   publicData.data[0].asks[0].price > 0
    // ) {
    //   const prevPrice = tickerData;
    //   const newPrice = publicData.data[0].asks[0].price.toString();
    //   setTickerData(newPrice);
    //   if (newPrice < prevPrice) {
    //     setTickerColour('red');
    //   } else if (newPrice > prevPrice) {
    //     setTickerColour('green');
    //   } else {
    //     setTickerColour('black');
    //   }
    // }
  }, [publicData]);

  return (
    <div>
      <h1>Public Data</h1>

      {/* <pre>{JSON.stringify(publicData?.data, null, 2)}</pre> */}

      <h1 style={{ color: `${tickerColour}` }}>${tickerData}</h1>

      <button onClick={() => subscribeToPublicChannel(currencyPair)}>
        Subscribe to BTC
      </button>
    </div>
  );
};
