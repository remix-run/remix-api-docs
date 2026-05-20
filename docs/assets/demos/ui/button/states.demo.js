import * as button from "/assets/pkg/remix/src/ui/button.js";
import { css } from "/assets/pkg/remix/src/ui.js";
import { Glyph } from "/assets/pkg/remix/src/ui/glyph.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Button States
* @description Buttons support normal, disabled, and busy (loading) states using aria attributes.
* @order 3
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: buttonRowCss,
		children: [
			/* @__PURE__ */ _jsxs("button", {
				mix: [button.baseStyle, button.primaryStyle],
				children: [/* @__PURE__ */ _jsx(Glyph, {
					mix: button.iconStyle,
					name: "add"
				}), /* @__PURE__ */ _jsx("span", {
					mix: button.labelStyle,
					children: "New issue"
				})]
			}),
			/* @__PURE__ */ _jsxs("button", {
				mix: [button.baseStyle, button.ghostStyle],
				children: [/* @__PURE__ */ _jsx("span", {
					mix: button.labelStyle,
					children: "Open"
				}), /* @__PURE__ */ _jsx(Glyph, {
					mix: button.iconStyle,
					name: "chevronRight"
				})]
			}),
			/* @__PURE__ */ _jsx("button", {
				disabled: true,
				mix: [button.baseStyle, button.secondaryStyle],
				children: /* @__PURE__ */ _jsx("span", {
					mix: button.labelStyle,
					children: "Disabled"
				})
			}),
			/* @__PURE__ */ _jsxs("button", {
				"aria-busy": "true",
				mix: [button.baseStyle, button.secondaryStyle],
				children: [/* @__PURE__ */ _jsx(Glyph, {
					mix: [
						button.iconStyle,
						spinnerGlyphCss,
						spinCss
					],
					name: "spinner"
				}), /* @__PURE__ */ _jsx("span", {
					mix: button.labelStyle,
					children: "Saving"
				})]
			})
		]
	});
}
const buttonRowCss = css({
	display: "flex",
	alignItems: "center",
	gap: theme.space.sm
});
const spinnerGlyphCss = css({ opacity: .72 });
const spinCss = css({
	"@keyframes demo-button-spin": {
		from: { transform: "rotate(0deg)" },
		to: { transform: "rotate(360deg)" }
	},
	animation: "demo-button-spin 1s linear infinite"
});