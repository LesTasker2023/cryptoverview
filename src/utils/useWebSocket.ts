import { useEffect, useRef } from 'react';

export const useWebSocket = (url = 'wss://ws.kraken.com/v2') => {
  const socketRef = useRef<WebSocket>();

  const handleMessage = (event: any) => {
    console.log('Message received from the server:', event.data);
    // Add your logic to handle incoming messages here
  };

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = function (event) {
      console.log('🚀 ~ useEffect ~ event:', event);
      console.log('WebSocket connection established.');
    };

    socketRef.current.onmessage = handleMessage;

    socketRef.current.onclose = function (event) {
      console.log('🚀 ~ useEffect ~ event:', event);
      console.log('WebSocket connection closed.');
    };

    socketRef.current.onerror = function (error) {
      console.error('WebSocket error:', error);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return socketRef.current;
};
