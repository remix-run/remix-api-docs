import { css } from "/assets/pkg/remix/src/ui.js";
import { Option, Select } from "/assets/pkg/remix/src/ui/select.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Select Overview
* @description A styled select control with a searchable dropdown and accessible label.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: stackCss,
		children: [/* @__PURE__ */ _jsx("label", {
			for: "fruit-select",
			mix: labelCss,
			children: "Choose a fruit"
		}), /* @__PURE__ */ _jsxs(Select, {
			id: "fruit-select",
			defaultLabel: "Banana",
			defaultValue: "banana",
			name: "fruit",
			mix: selectCss,
			children: [
				/* @__PURE__ */ _jsx(Option, {
					label: "Apple",
					value: "apple"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Apricot",
					value: "apricot"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Banana",
					value: "banana"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Blackberry",
					value: "blackberry"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Blackcurrant",
					value: "blackcurrant"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Blueberry",
					value: "blueberry"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Boysenberry",
					value: "boysenberry"
				}),
				/* @__PURE__ */ _jsx(Option, {
					label: "Cantaloupe",
					value: "cantaloupe"
				})
			]
		})]
	});
}
const selectCss = css({ width: "16rem" });
const stackCss = css({
	display: "flex",
	flexDirection: "column",
	gap: "8px",
	width: "100%"
});
const labelCss = css({
	margin: 0,
	fontSize: "12px",
	fontWeight: "600",
	color: "#151515"
});