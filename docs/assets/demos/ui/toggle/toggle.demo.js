import { css } from "/assets/pkg/remix/src/ui.js";
import toggle from "/assets/pkg/remix/src/ui/toggle.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Toggle Basic
* @description Styled switch mixins for native checkbox inputs.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsx("div", {
		mix: toggleDemoCss,
		children: /* @__PURE__ */ _jsxs("section", {
			mix: sectionCss,
			children: [
				/* @__PURE__ */ _jsx("h2", {
					mix: sectionLabelCss,
					children: "Styled input mixin"
				}),
				/* @__PURE__ */ _jsxs("label", {
					mix: optionCss,
					children: [/* @__PURE__ */ _jsx("input", {
						defaultChecked: true,
						mix: toggle(),
						name: "preferences",
						value: "email"
					}), "Email notifications"]
				}),
				/* @__PURE__ */ _jsxs("label", {
					mix: optionCss,
					children: [/* @__PURE__ */ _jsx("input", {
						mix: toggle({ size: "lg" }),
						name: "preferences",
						value: "desktop"
					}), "Desktop alerts large"]
				}),
				/* @__PURE__ */ _jsxs("label", {
					mix: optionCss,
					children: [/* @__PURE__ */ _jsx("input", {
						disabled: true,
						mix: toggle(),
						name: "preferences",
						value: "digest"
					}), "Weekly digest"]
				}),
				/* @__PURE__ */ _jsxs("label", {
					mix: optionCss,
					children: [/* @__PURE__ */ _jsx("input", {
						defaultChecked: true,
						mix: toggle({ size: "lg" }),
						name: "preferences",
						value: "sync"
					}), "Automatic sync"]
				})
			]
		})
	});
}
const toggleDemoCss = css({
	display: "grid",
	gap: "28px",
	width: "min(100%, 22rem)"
});
const sectionCss = css({
	display: "grid",
	gap: "10px"
});
const sectionLabelCss = css({
	margin: 0,
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "12px",
	lineHeight: "16px",
	fontWeight: 650,
	letterSpacing: 0,
	color: "rgba(16, 16, 16, 0.72)"
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