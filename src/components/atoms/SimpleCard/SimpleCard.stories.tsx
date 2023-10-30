import { Meta, StoryObj } from "@storybook/react";
import { SimpleCard } from "./SimpleCard";

const meta = {
  title: "atoms/SimpleCard",
  component: SimpleCard,
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    imgSrc:
      "https://img.freepik.com/free-photo/young-handsome-man-posing_144627-28077.jpg?size=626&ext=jpg&uid=R46942977&ga=GA1.1.290813325.1698689482&semt=sph",
    title: "123",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Augue egestas tempus sed feugiat luctus aenean. Metus netus arcu lacinia ut felis malesuada. Leo lacus ac mattis; sociosqu nam magnis justo facilisis. Dis vulputate ut maximus litora amet. Magnis nam sapien pulvinar nam justo ex. Ornare sit tortor imperdiet tempus purus hac maecenas dui. Pretium finibus fames hendrerit ex tellus nam.",
  },
};
