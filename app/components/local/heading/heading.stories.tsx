import Heading from "./heading";
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: "Local/Heading",
	component: Heading,
  render: (args) => <Heading {...args}>Heading</Heading>,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};