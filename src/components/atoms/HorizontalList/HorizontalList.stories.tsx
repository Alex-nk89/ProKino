import { Meta, StoryObj } from "@storybook/react";
import { HorizontalList } from "./HorizontalList";
import { horizontalListMock } from "../../mocks/mocks";
import { SimpleCard } from "../SimpleCard/SimpleCard";

const meta = {
  title: "atoms/HorizontalList",
  component: HorizontalList,
} satisfies Meta<typeof HorizontalList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: "Default",
  args: {
    children: horizontalListMock.map((item) => (
      <SimpleCard key={item.id} imgSrc={item.imgSrc} title={item.title} />
    )),
  },
};
