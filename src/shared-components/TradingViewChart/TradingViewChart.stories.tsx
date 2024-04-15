import { Meta } from '@storybook/react';

import Default from './mockData';
import { Container } from '../../shared-components/Container';
import { TradingViewChart } from './index';

export default {
  title: 'Components/TradingViewChart',
  component: TradingViewChart,
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
