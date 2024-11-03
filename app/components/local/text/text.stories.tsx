import type { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta = {
	title: "Local/Text",
	component: Text,
	render: (args) => <Text {...args}>Text</Text>,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
