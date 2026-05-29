import { css } from "/assets/pkg/remix/src/ui.js";
import * as button from "/assets/pkg/remix/src/ui/button.js";
import { Glyph } from "/assets/pkg/remix/src/ui/glyph.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Basic Button
* @description The default button contract supports both ordinary actions and link-shaped navigation.
* @layout center
* @order 1
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: buttonRowCss,
		children: [/* @__PURE__ */ _jsxs("button", {
			type: "submit",
			mix: [button.baseStyle, button.primaryStyle],
			children: [/* @__PURE__ */ _jsx(Glyph, {
				mix: button.iconStyle,
				name: "add"
			}), /* @__PURE__ */ _jsx("span", {
				mix: button.labelStyle,
				children: "Publish"
			})]
		}), /* @__PURE__ */ _jsxs("a", {
			href: "/api/remix/ui/button/overview/",
			mix: [button.baseStyle, button.secondaryStyle],
			children: [/* @__PURE__ */ _jsx("span", {
				mix: button.labelStyle,
				children: "View button docs"
			}), /* @__PURE__ */ _jsx(Glyph, {
				mix: button.iconStyle,
				name: "chevronRight"
			})]
		})]
	});
}
const buttonRowCss = css({
	display: "flex",
	alignItems: "center",
	gap: theme.space.sm
});