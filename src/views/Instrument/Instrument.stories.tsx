import { Meta } from '@storybook/react';

import { Instrument } from './index';
import Default from './mockData';

export default {
  title: 'Views/Instrument',
  component: Instrument,
  decorators: [(Story) => <Story />],
} as Meta;

export const Defaut = {
  args: Default,
};
