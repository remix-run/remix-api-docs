import { css } from "/assets/pkg/remix/src/ui.js";
import * as listbox from "/assets/pkg/remix/src/ui/listbox.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Listbox
* @description Controlled selection and highlight state with the listbox primitives.
* @layout center
*/
export default function Example(handle) {
	let value = "remix";
	let activeValue = "remix";
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: demoCss,
		children: [
			/* @__PURE__ */ _jsx("p", {
				mix: labelCss,
				children: "Framework"
			}),
			/* @__PURE__ */ _jsx(listbox.Context, {
				value,
				activeValue,
				onSelect: (nextValue) => {
					value = nextValue;
					activeValue = nextValue;
					void handle.update();
				},
				onHighlight: (nextValue) => {
					activeValue = nextValue;
					void handle.update();
				},
				children: /* @__PURE__ */ _jsx("div", {
					"aria-label": "Framework",
					mix: [listCss, listbox.list()],
					tabIndex: 0,
					children: frameworks.map((option) => /* @__PURE__ */ _jsx("div", {
						mix: [optionCss, listbox.option(option)],
						children: option.label
					}, option.value))
				})
			}),
			/* @__PURE__ */ _jsx("p", {
				mix: valueCss,
				children: `value=${value ?? "null"}`
			})
		]
	});
}
const frameworks = [
	{
		label: "Remix",
		value: "remix"
	},
	{
		label: "React Router",
		value: "react-router"
	},
	{
		label: "React",
		value: "react"
	},
	{
		disabled: true,
		label: "Archived",
		value: "archived"
	}
];
const demoCss = css({
	display: "grid",
	gap: "8px",
	width: "min(100%, 18rem)"
});
const labelCss = css({
	margin: 0,
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "12px",
	lineHeight: "16px",
	fontWeight: 650,
	letterSpacing: 0,
	color: "rgba(16, 16, 16, 0.72)"
});
const listCss = css({
	display: "grid",
	gap: "2px",
	margin: 0,
	border: "1px solid rgba(0, 0, 0, 0.12)",
	borderRadius: "8px",
	background: "#FFFFFF",
	boxShadow: "0 10px 28px rgba(0, 0, 0, 0.08)",
	padding: "4px",
	outline: 0,
	"&:focus-visible": { boxShadow: "0 10px 28px rgba(0, 0, 0, 0.08), 0 0 0 1px #3573F6, 0 0 0 4px rgba(53, 115, 246, 0.1)" }
});
const optionCss = css({
	borderRadius: "6px",
	color: "#101010",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	padding: "6px 8px",
	"&[data-highlighted=\"true\"]": { background: "rgba(16, 16, 16, 0.05)" },
	"&[aria-selected=\"true\"]": {
		background: "#101010",
		color: "#FFFFFF"
	},
	"&[aria-disabled=\"true\"]": { color: "rgba(16, 16, 16, 0.36)" }
});
const valueCss = css({
	margin: 0,
	fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
	fontSize: "12px",
	lineHeight: "16px",
	color: "#4f4f4f"
});