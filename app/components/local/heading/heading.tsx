import type { PropsWithChildren } from "@/app/types";
import { type VariantProps, cva } from "class-variance-authority";

const heading = cva("", {
	variants: {
		as: {
			h1: "h1",
			h2: "h2",
			h3: "h3",
			h4: "h4",
			h5: "h5",
			h6: "h6",
		},
		size: {
			"1": "text-[56px,96px]",
			"2": "text-[48px,80px]",
			"3": "text-[40px,64px]",
			"4": "text-[36px,52px]",
			"5": "text-[32px, 42px]",
			"6": "text-[26px, 36px]",
			"7": "text-[24px, 32px]",
			"8": "text-[18px, 24px]",
			"9": "text-[16px, 24px]",
		},
		weight: {
			bold: "font-bold",
			semibold: "font-semibold",
			medium: "font-medium",
			regular: "font-normal",
		},
		leading: {
			100: "leading-[100%]",
			110: "leading-[110%]",
			120: "leading-[120%]",
			130: "leading-[130%]",
			140: "leading-[140%]",
			150: "leading-[150%]",
		},
		colors: {
			foreground: "text-foreground",
			muted: "text-muted-foreground",
			accent: "text-accent",
		},
		align: {
			start: "text-start",
			center: "text-center",
			end: "text-end",
		},
	},
	defaultVariants: {
		size: "3",
		weight: "medium",
		leading: 120,
		colors: "foreground",
	},
});

export type HeadingProps = VariantProps<typeof heading> & {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading = ({
	as: Tag = "h2",
	size,
	weight,
	leading,
	colors,
	children,
	className,
	...rest
}: PropsWithChildren<HeadingProps>) => {
	return (
		<Tag
			{...rest}
			className={heading({ size, weight, leading, colors, className })}
		>
			{children}
		</Tag>
	);
};

export default Heading;
