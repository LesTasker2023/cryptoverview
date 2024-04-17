import { Meta } from '@storybook/react';

import { TradingViewTicker } from './index';
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: 'Components/TradingViewTicker',
  component: TradingViewTicker,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

export const Defaut = {
  args: Default,
};
