import { Meta } from '@storybook/react';

import { Instrument } from './index';
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: 'Views/Instrument',
  component: Instrument,
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
