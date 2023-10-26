import { Meta, StoryObj } from "@storybook/react";
import { Cover } from "./Cover";
import { premiereSlideMock } from "../../../helpers/mocks";
import { MantineProvider } from "@mantine/core";
import "../../../index.scss";
import "@mantine/core/styles.css";

const meta = {
  title: "molecules/Cover",
  component: Cover,
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { ...premiereSlideMock },
};
