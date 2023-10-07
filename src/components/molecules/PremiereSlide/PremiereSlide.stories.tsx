import { Meta, StoryObj } from "@storybook/react";
import { PremiereSlide } from "./PremiereSlide";
import { premiereSlideMock } from "../../../helpers/mocks";
import { MantineProvider } from "@mantine/core";
import "../../../index.scss";
import "@mantine/core/styles.css";

const meta = {
  title: "molecules/PremiereSlide",
  component: PremiereSlide,
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof PremiereSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { ...premiereSlideMock },
};
