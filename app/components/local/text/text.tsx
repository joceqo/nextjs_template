import type { PropsWithChildren } from "@/app/types";
import { type VariantProps, cva } from "class-variance-authority";

const text = cva("", {
	variants: {
		as: {
			p: "p",
			span: "span",
		},
		size: {
			"1": "text-[24px,32px]",
			"2": "text-[22px,28px]",
			"3": "text-[20px,24px]",
			"4": "text-[18px,22px]",
			"5": "text-[16px,20px]",
			"6": "text-[14px,18px]",
			"7": "text-[12px,16px]",
			"8": "text-[10px,14px]",
			"9": "text-[8px,12px]",
		},
		weight: {
			bold: "font-bold",
			semibold: "font-semibold",
			medium: "font-medium",
			regular: "font-normal",
			light: "font-light",
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
		weight: "regular",
		leading: 100,
		colors: "foreground",
		align: "start",
	},
});

export type TextProps = VariantProps<typeof text> & {
	as?: "p" | "span";
};

const Text = ({
	as: Tag = "p",
	children,
	className,
	...props
}: PropsWithChildren<TextProps>) => {
	return <Tag className={text({ ...props, className })}>{children}</Tag>;
};

export default Text;
