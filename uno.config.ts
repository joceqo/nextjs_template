import {
	type Rule,
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
} from "unocss";

import fluid from "./fluid.js";

const fluidProperties = [
	{
		property: "text",
		values: ["font-size"],
	},
	{
		property: "width",
		values: ["width"],
	},
	{
		property: "height",
		values: ["height"],
	},
	{
		property: "size",
		values: ["width", "height"],
	},
	{
		property: "margin",
		values: ["margin"],
	},
	{
		property: "padding",
		values: ["padding"],
	},
	{
		property: "gap",
		values: ["gap"],
	},
	{
		property: "radius",
		values: ["radius"],
	},
];

const parseFluidValue = (input: string) => {
	const values = input
		.replace(/[\[\]]/g, "")
		.split(",")
		.map((value) => value.trim());

	return {
		min: values[0],
		max: values[1],
	};
};

const fluidRules: Rule[] = fluidProperties.map((entry) => [
	new RegExp(`^${entry.property}-\\[(\\d+px?,\\d+px?)\\]$`),
	([, values]) => {
		const { min, max } = parseFluidValue(values);
		const object: Record<string, string> = {};
		for (const value of entry.values) {
			object[value] = fluid(min, max);
		}
		return object;
	},
]);

export default defineConfig({
	presets: [presetUno(), presetAttributify(), presetIcons(), presetWebFonts()],
	rules: fluidRules,
});
