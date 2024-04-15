import './styles.scss';

import type Props from './types';

import { useState, useEffect } from 'react';
import { TickerChannelUpdate, TickerUpdate } from './types';
import TradingViewWidget from '../../shared-components/tradingViewWidget';
import { Fade } from 'react-awesome-reveal';

export const InstrumentCard = ({ coinSymbol, coinId }: Props) => {
  const pair = `${coinSymbol}/USD`;
  const [isLoading, setIsLoading] = useState(true);
  const [publicSocket, setPublicSocket] = useState<WebSocket>();
  const [publicData, setPublicData] = useState<TickerChannelUpdate | null>(
    null
  );
  const [tickerData, setTickerData] = useState<string>('');
  const [change, setChange] = useState<number>(0);
  const [tickerColour, setTickerColour] = useState<string>('#000');
  const [data, setData] = useState<TickerUpdate>();

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
    const publicSocketInstance = new WebSocket('wss://ws.kraken.com/v2');

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
      console.log('🚀 ~ useEffect ~ publicData:', publicData);
      const prevPrice = publicData.data[0].last.toString();
      const newPrice = publicData.data[0].ask.toString();
      setData(publicData.data[0]);
      setTickerData(prevPrice);
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
    <div className={`instrument-card instrument-card--${coinId}`}>
      {isLoading ? (
        <div className="loader" />
      ) : data ? (
        <>
          <Fade>
            <div className="top-section">
              <div className="price">${tickerData}</div>
              <div className="border"></div>
              <div className="icons">
                <div className="logo">
                  <img
                    className="coin-logo"
                    src={`https://cryptobubbles.net/backend/data/logos/${coinId}.png`}
                    alt=""
                  />
                  <span className="big-text">{change}%</span>
                  {data.change_pct > 0 ? (
                    <img
                      className="indicator"
                      src={process.env.PUBLIC_URL + '/up.png'}
                      alt="Up Icon"
                    />
                  ) : data.change_pct < 0 ? (
                    <img
                      className="indicator"
                      src={process.env.PUBLIC_URL + '/down.png'}
                      alt="Down Icon"
                    />
                  ) : (
                    '-'
                  )}
                </div>
                <div className="social-media">
                  <img
                    className="coin-logo"
                    src={`https://cryptobubbles.net/backend/data/logos/${coinId}.png`}
                    alt=""
                  />
                  <img
                    className="coin-logo"
                    src={`https://cryptobubbles.net/backend/data/logos/${coinId}.png`}
                    alt=""
                  />
                  <img
                    className="coin-logo"
                    src={`https://cryptobubbles.net/backend/data/logos/${coinId}.png`}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <img
                  className="coin-bg"
                  src={`https://cryptobubbles.net/backend/data/logos/${coinId}.png`}
                  alt=""
                />
                <TradingViewWidget id={coinId} symbol={data.symbol} />
              </div>
            </div>

            <div className="bottom-section">
              <span className="title">{data.symbol}</span>
              <div className="row row1">
                <div className="item">
                  <span className="big-text">${tickerData}</span>
                  <span className="regular-text">Price</span>
                </div>
                <div className="item">
                  <span className="big-text">${data.vwap}</span>
                  <span className="regular-text">VWAP</span>
                </div>
                <div className="item">
                  <span className="big-text">38,631</span>
                  <span className="regular-text">Contributers</span>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="instrument-card__no-data">
          <img
            className="instrument-card__no-data__image"
            src={process.env.PUBLIC_URL + '/no-data.webp'}
            alt=""
          />
        </div>
      )}
    </div>
  );
};
