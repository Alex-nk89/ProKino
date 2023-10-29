import { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "atoms/Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: "Default",
  args: { children: <p>Василий Петров</p> },
};
