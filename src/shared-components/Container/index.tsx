import './styles.scss';

import type Props from './types';

export const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};
