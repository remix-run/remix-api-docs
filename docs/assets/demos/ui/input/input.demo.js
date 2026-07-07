import { css } from "/assets/pkg/remix/src/ui.js";
import input from "/assets/pkg/remix/src/ui/input.js";
import { SearchIcon } from "/assets/demos/ui/shared/icons.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Input Basic
* @description The input mixin styles standalone inputs and icon-capable input roots.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: inputDemoCss,
		children: [
			/* @__PURE__ */ _jsxs("label", {
				mix: fieldCss,
				children: [/* @__PURE__ */ _jsx("span", {
					mix: labelCss,
					children: "Standalone"
				}), /* @__PURE__ */ _jsx("input", {
					mix: input(),
					placeholder: "Placeholder"
				})]
			}),
			/* @__PURE__ */ _jsxs("div", {
				mix: fieldCss,
				children: [/* @__PURE__ */ _jsx("span", {
					mix: labelCss,
					children: "With icon"
				}), /* @__PURE__ */ _jsxs("div", {
					mix: input.root(),
					children: [/* @__PURE__ */ _jsx(SearchIcon, {}), /* @__PURE__ */ _jsx("input", {
						"aria-label": "With icon",
						mix: input.field(),
						placeholder: "Placeholder"
					})]
				})]
			}),
			/* @__PURE__ */ _jsxs("div", {
				mix: fieldCss,
				children: [/* @__PURE__ */ _jsx("span", {
					mix: labelCss,
					children: "Filled"
				}), /* @__PURE__ */ _jsx("div", {
					mix: input.root(),
					children: /* @__PURE__ */ _jsx("input", {
						"aria-label": "Filled",
						defaultValue: "Value",
						mix: input.field()
					})
				})]
			}),
			/* @__PURE__ */ _jsxs("label", {
				mix: fieldCss,
				children: [/* @__PURE__ */ _jsx("span", {
					mix: labelCss,
					children: "Disabled"
				}), /* @__PURE__ */ _jsx("input", {
					disabled: true,
					mix: input(),
					placeholder: "Placeholder"
				})]
			})
		]
	});
}
const inputDemoCss = css({
	display: "grid",
	gap: "20px",
	width: "min(100%, 40rem)"
});
const fieldCss = css({
	display: "grid",
	gap: "8px"
});
const labelCss = css({
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "14px",
	lineHeight: "18px",
	fontWeight: 600,
	color: "#101010"
});