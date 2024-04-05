import { Meta } from '@storybook/react';

import { Portfolio } from './index';
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: 'Views/Portfolio',
  component: Portfolio,
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
