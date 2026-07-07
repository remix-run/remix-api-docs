import { css } from "/assets/pkg/remix/src/ui.js";
import radio from "/assets/pkg/remix/src/ui/radio.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Radio Basic
* @description The radio mixin applies small or large radio styling to native inputs.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("fieldset", {
		mix: radioDemoCss,
		children: [
			/* @__PURE__ */ _jsx("legend", {
				mix: legendCss,
				children: "Shipping speed"
			}),
			/* @__PURE__ */ _jsxs("label", {
				mix: optionCss,
				children: [/* @__PURE__ */ _jsx("input", {
					defaultChecked: true,
					mix: radio(),
					name: "shipping-speed",
					value: "standard"
				}), "Standard"]
			}),
			/* @__PURE__ */ _jsxs("label", {
				mix: optionCss,
				children: [/* @__PURE__ */ _jsx("input", {
					mix: radio(),
					name: "shipping-speed",
					value: "express"
				}), "Express"]
			}),
			/* @__PURE__ */ _jsxs("label", {
				mix: optionCss,
				children: [/* @__PURE__ */ _jsx("input", {
					mix: radio({ size: "lg" }),
					name: "shipping-speed",
					value: "overnight"
				}), "Overnight"]
			}),
			/* @__PURE__ */ _jsxs("label", {
				mix: optionCss,
				children: [/* @__PURE__ */ _jsx("input", {
					disabled: true,
					mix: radio(),
					name: "shipping-speed",
					value: "courier"
				}), "Courier"]
			})
		]
	});
}
const radioDemoCss = css({
	display: "grid",
	gap: "10px",
	width: "min(100%, 20rem)",
	margin: 0,
	padding: 0,
	border: 0
});
const legendCss = css({
	padding: 0,
	marginBlockEnd: "4px",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 650,
	letterSpacing: 0,
	color: "#101010"
});
const optionCss = css({
	display: "flex",
	alignItems: "center",
	gap: "8px",
	minHeight: "28px",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	color: "#101010"
});