import './styles.scss';

import React from 'react';

import type Props from './types';

export const Portfolio = ({ data }: Props) => {
   

  return <div className='portfolio'>{data}</div>
}
