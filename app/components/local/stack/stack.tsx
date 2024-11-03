import type { PropsWithChildren } from "@/app/types";
import { type VariantProps, cva } from "class-variance-authority";

export const stack = cva("flex", {
	variants: {
		direction: {
			row: "flex-row",
			column: "flex-col",
			reverse: "flex-col-reverse",
			rowReverse: "flex-row-reverse",
		},
		gap: {
			none: "gap-0",
			"3xs": "gap-[2px,4px]",
			"2xs": "gap-[4px,8px]",
			xs: "gap-[8px,16px]",
			sm: "gap-[16px,32px]",
			md: "gap-[32px,48px]",
			lg: "gap-[48px,64px]",
			xl: "gap-[64px,80px]",
			"2xl": "gap-[80px,128px]",
			"3xl": "gap-[96px,144px]",
		},
		justify: {
			center: "justify-center",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
			start: "justify-start",
			end: "justify-end",
		},
		align: {
			center: "items-center",
			start: "items-start",
			end: "items-end",
			stretch: "items-stretch",
		},
		wrap: {
			wrap: "flex-wrap",
			nowrap: "flex-nowrap",
			wrapReverse: "flex-wrap-reverse",
		},
	},
	defaultVariants: {
		direction: "row",
		gap: "3xs",
		justify: "start",
		align: "start",
		wrap: "nowrap",
	},
});

export type StackProps = VariantProps<typeof stack>;

const Stack = ({
	children,
	className,
	...props
}: PropsWithChildren<StackProps>) => {
	return <div className={stack({ ...props, className })}>{children}</div>;
};

export const XStack = ({
	children,
	className,
	...props
}: PropsWithChildren<Omit<StackProps, "direction">>) => {
	return (
		<Stack direction="row" {...props} className={className}>
			{children}
		</Stack>
	);
};

export const YStack = ({
	children,
	className,
	...props
}: PropsWithChildren<Omit<StackProps, "direction">>) => {
	return (
		<Stack direction="column" {...props} className={className}>
			{children}
		</Stack>
	);
};

export default Stack;
