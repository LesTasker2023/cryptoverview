import { Meta } from "@storybook/react"

import {RadialChart} from "./index";
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: "Components/RadialChart",
  component: RadialChart,
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
