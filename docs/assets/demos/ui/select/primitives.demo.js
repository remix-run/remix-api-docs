import { css } from "/assets/pkg/remix/src/ui.js";
import * as popover from "/assets/pkg/remix/src/ui/popover.js";
import * as select from "/assets/pkg/remix/src/ui/select/primitives.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Select Primitives
* @description Headless select behavior with minimal local styles.
* @layout center
*/
export default function Example(handle) {
	let value = "remix";
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [demoCss, select.onSelectChange((event) => {
			value = event.value ?? "none";
			void handle.update();
		})],
		children: [/* @__PURE__ */ _jsxs(select.Context, {
			defaultLabel: "Choose framework",
			defaultValue: "remix",
			labelSwapDelayMs: 100,
			name: "framework",
			children: [
				/* @__PURE__ */ _jsx("button", {
					mix: [triggerCss, select.trigger()],
					type: "button",
					children: /* @__PURE__ */ _jsx(SelectLabel, {})
				}),
				/* @__PURE__ */ _jsx(popover.Context, { children: /* @__PURE__ */ _jsx("div", {
					mix: [surfaceCss, select.popover()],
					children: /* @__PURE__ */ _jsx("div", {
						mix: [listCss, select.list()],
						children: frameworks.map((option) => /* @__PURE__ */ _jsx("div", {
							mix: [optionCss, select.option(option)],
							children: option.label
						}, option.value))
					})
				}) }),
				/* @__PURE__ */ _jsx("input", { mix: [hiddenInputCss, select.hiddenInput()] })
			]
		}), /* @__PURE__ */ _jsx("p", {
			mix: valueCss,
			children: `value=${value}`
		})]
	});
}
function SelectLabel(handle) {
	let context = handle.context.get(select.Context);
	return () => /* @__PURE__ */ _jsx("span", { children: context.displayedLabel });
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
	justifyItems: "start",
	gap: "8px",
	width: "min(100%, 18rem)"
});
const triggerCss = css({
	appearance: "none",
	display: "inline-flex",
	alignItems: "center",
	minWidth: "12rem",
	height: "32px",
	border: "1px solid #cfcfcf",
	borderRadius: "6px",
	background: "#ffffff",
	color: "#101010",
	font: "600 13px/18px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "0 10px",
	"&:focus-visible": {
		outline: "2px solid #3573f6",
		outlineOffset: "2px"
	}
});
const surfaceCss = css({
	boxSizing: "border-box",
	margin: 0,
	border: "1px solid #cfcfcf",
	borderRadius: "6px",
	background: "#ffffff",
	boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
	padding: "4px",
	"&:popover-open": { display: "block" }
});
const listCss = css({
	display: "grid",
	gap: "2px",
	maxHeight: "12rem",
	overflow: "auto",
	outline: 0
});
const optionCss = css({
	borderRadius: "4px",
	color: "#101010",
	font: "500 13px/18px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "6px 8px",
	"&[data-highlighted=\"true\"]": { background: "#eeeeee" },
	"&[aria-selected=\"true\"]": {
		background: "#101010",
		color: "#ffffff"
	},
	"&[aria-disabled=\"true\"]": { color: "#9a9a9a" }
});
const hiddenInputCss = css({ display: "none" });
const valueCss = css({
	margin: 0,
	color: "#666666",
	font: "500 12px/16px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
});