import { Meta } from "@storybook/react"

import {Ticker} from "./index";
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: "Components/Ticker",
  component: Ticker,
    decorators: [
    (Story) => (
    <Container>
      <Story />
    </Container>
    ),
    ],
} as Meta


    export const Defaut = {
      args: Default,
};
