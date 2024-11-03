import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./stack";

const meta = {
	title: "Local/Stack",
	component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
