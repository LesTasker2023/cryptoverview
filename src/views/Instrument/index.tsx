import './styles.scss';

import React from 'react';

import type Props from './types';

export const Instrument = ({ symbol }: Props) => {
  const pair = `${symbol}/USD`;

  return <div className="instrument">{pair}</div>;
};
