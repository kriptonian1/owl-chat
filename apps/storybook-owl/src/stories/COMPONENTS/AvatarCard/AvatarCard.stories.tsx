import { AvatarCard } from "ui";

import type { Meta, StoryObj } from "@storybook/react";

import "ui/styles.css";

const meta: Meta<typeof AvatarCard> = {
  title: "COMPONENTS/AvatarCard",
  component: AvatarCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    name: "Alex",
    timestamp: "12:00am",
    message: "Hello ",
    active: true,
    count: 0,
  },
  render: (args) => (
    <AvatarCard
      name={args.name}
      timestamp={args.timestamp}
      message={args.message}
      active={args.active}
      count={args.count}
    />
  ),
};
