import { css, on } from "/assets/pkg/remix/src/ui.js";
import { Glyph } from "/assets/pkg/remix/src/ui/glyph.js";
import * as listbox from "/assets/pkg/remix/src/ui/listbox.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Listbox Overview
* @description A keyboard-navigable listbox with selection, highlighting, and an optional flash-selection animation.
*/
export default function Example(handle) {
	let value = options[0].value;
	let activeValue = options[0].value;
	let flashSelection = false;
	return () => {
		return /* @__PURE__ */ _jsxs("div", {
			mix: stackCss,
			children: [/* @__PURE__ */ _jsx(listbox.Context, {
				value,
				activeValue,
				flashSelection,
				onSelect: (nextValue) => {
					value = nextValue;
					handle.update();
				},
				onHighlight: (nextActiveValue) => {
					activeValue = nextActiveValue;
					handle.update();
				},
				children: /* @__PURE__ */ _jsx("div", {
					tabIndex: 0,
					mix: [
						listbox.listStyle,
						listbox.list(),
						containerCss
					],
					children: options.map((option) => /* @__PURE__ */ _jsxs("div", {
						mix: [listbox.optionStyle, listbox.option(option)],
						children: [/* @__PURE__ */ _jsx(Glyph, {
							mix: listbox.glyphStyle,
							name: "check"
						}), /* @__PURE__ */ _jsx("span", {
							mix: listbox.labelStyle,
							children: option.label
						})]
					}, option.value))
				})
			}), /* @__PURE__ */ _jsxs("div", {
				mix: controlsCss,
				children: [/* @__PURE__ */ _jsxs("label", {
					mix: checkboxLabelCss,
					children: [
						/* @__PURE__ */ _jsx("input", {
							type: "checkbox",
							defaultChecked: flashSelection,
							mix: on("change", (event) => {
								flashSelection = event.currentTarget.checked;
								handle.update();
							})
						}),
						" ",
						"Flash selection"
					]
				}), /* @__PURE__ */ _jsx("p", {
					mix: valueCss,
					children: `value=${value ?? "null"}`
				})]
			})]
		});
	};
}
const options = [
	{
		label: "Apple",
		value: "apple"
	},
	{
		label: "Banana",
		value: "banana"
	},
	{
		label: "Cherry",
		value: "cherry"
	},
	{
		label: "Date",
		value: "date"
	},
	{
		label: "Elderberry",
		value: "elderberry"
	},
	{
		label: "Fig",
		value: "fig"
	},
	{
		label: "Grape",
		value: "grape"
	}
];
const containerCss = css({
	borderColor: theme.colors.border.subtle,
	padding: theme.space.xs,
	borderRadius: theme.radius.lg,
	borderStyle: "solid"
});
const stackCss = css({
	display: "flex",
	flexDirection: "column",
	gap: theme.space.md,
	width: "100%"
});
const controlsCss = css({
	display: "flex",
	flexDirection: "column",
	gap: theme.space.xs
});
const checkboxLabelCss = css({
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.normal,
	color: theme.colors.text.secondary
});
const valueCss = css({
	margin: 0,
	fontFamily: theme.fontFamily.mono,
	fontSize: theme.fontSize.xs,
	color: theme.colors.text.secondary
});