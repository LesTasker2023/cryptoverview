import React, { useState, useEffect } from 'react';
import Props from './types';
import './styles.scss';

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

export const Ticker = ({ symbol }: Props) => {
  const pair = `${symbol}/USD`;
  const [isLoading, setIsLoading] = useState(true);
  const [publicSocket, setPublicSocket] = useState<WebSocket>();
  const [publicData, setPublicData] = useState<TickerChannelUpdate | null>(
    null
  );
  const [tickerData, setTickerData] = useState<string>('');
  const [change, setChange] = useState<number>(0);
  const [tickerColour, setTickerColour] = useState<string>('#000');

  const subscribeToPublicChannel = () => {
    if (publicSocket) {
      publicSocket.send(
        JSON.stringify({
          method: 'subscribe',
          params: {
            channel: 'ticker',
            snapshot: true,
            symbol: [pair],
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
      setIsLoading(false);
    };

    return () => {
      publicSocketInstance.close();
    };
  }, []);

  useEffect(() => {
    if (
      publicData &&
      publicData.channel === 'ticker' &&
      publicData.data &&
      publicData.data[0] &&
      publicData.data[0].ask
    ) {
      const prevPrice = tickerData;
      const newPrice = publicData.data[0].ask.toString();
      setTickerData(newPrice);
      setChange(publicData.data[0].change_pct);
      if (newPrice < prevPrice) {
        setTickerColour('red');
      } else if (newPrice > prevPrice) {
        setTickerColour('green');
      } else {
        setTickerColour('white');
      }
    }
  }, [publicData]);

  useEffect(() => {
    if (!isLoading) {
      subscribeToPublicChannel();
    }
  }, [isLoading]);

  return (
    <div className="ticker">
      <h3 className="ticker__label">{symbol}</h3>
      {isLoading ? (
        'Loading '
      ) : (
        <h3 className="ticker__label" style={{ color: `${tickerColour}` }}>
          {tickerData ? `$${tickerData}` : 'No Data'}
        </h3>
      )}

      <h3
        className="ticker__label"
        style={{ color: `${change > 0 ? 'green' : 'red'}` }}
      >
        {change && `${change.toString()}%`}
      </h3>
    </div>
  );
};
