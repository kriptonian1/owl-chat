import type { Meta, StoryObj } from "@storybook/react";
import { RecieveBubble, SentBubble } from "ui";
import "ui/styles.css";

const meta: Meta<typeof RecieveBubble> = {
  title: "COMPONENTS/ChatBubble",
  component: RecieveBubble,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Recieve: Story = {
  args: {
    text: "Hello World 👋",
    timestamp: "12:00 AM",
  },
  render: (args) => (
    <RecieveBubble text={args.text} timestamp={args.timestamp} />
  ),
};

export const Sent: Story = {
  args: {
    text: "Hello World 👋",
    timestamp: "12:00 AM",
  },
  render: (args) => <SentBubble text={args.text} timestamp={args.timestamp} />,
};
