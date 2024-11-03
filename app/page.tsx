import Image from "next/image";
import { Container, Heading, Text, YStack } from "./components/local";

export default function Home() {
	return (
		<Container size="M" center>
			<YStack>
				<Heading size="3" weight="bold">
					Hello
				</Heading>
				<Text size="3" weight="bold">
					World
				</Text>
				<div className="size-[10px,40px] bg-red-500" />
			</YStack>
		</Container>
	);
}
