import { Meta } from '@storybook/react';

import { Dashboard } from './index';
import Default from './mockData';
import { Container } from '../../shared-components/Container';

console.log('object');

export default {
  title: 'Views/Dashboard',
  component: Dashboard,
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
