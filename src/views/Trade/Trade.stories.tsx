import { Meta } from '@storybook/react';

import { Trade } from './index';
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: 'Views/Trade',
  component: Trade,
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
