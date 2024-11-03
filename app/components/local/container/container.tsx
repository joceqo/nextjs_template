import type { PropsWithChildren } from "@/app/types";
import { type VariantProps, cva } from "class-variance-authority";

const container = cva("", {
	variants: {
		size: {
			S: "width-[300px,600px]",
			M: "width-[300px,800px]",
			L: "width-[300px,1200px]",
		},
		center: {
			true: "mx-auto",
		},
	},
	defaultVariants: {
		size: "M",
	},
});

type ContainerProps = VariantProps<typeof container> &
	React.HTMLAttributes<HTMLDivElement>; // Add HTML div props

const Container = ({
	size,
	center,
	...props
}: PropsWithChildren<ContainerProps>) => {
	return (
		<div className={container({ size, center })} {...props}>
			{props.children}
		</div>
	);
};

export default Container;
