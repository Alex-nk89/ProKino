import { Meta, StoryObj } from "@storybook/react";
import { InfiniteLoader } from "./InfiniteLoader";

const meta = {
  title: "atoms/InfiniteLoader",
  component: InfiniteLoader,
} satisfies Meta<typeof InfiniteLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: "Default",
};
