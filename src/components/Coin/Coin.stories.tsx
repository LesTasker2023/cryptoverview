import { Meta } from "@storybook/react"

import {Coin} from "./index";
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: "Components/Coin",
  component: Coin,
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
