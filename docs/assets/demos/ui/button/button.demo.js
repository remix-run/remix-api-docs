import { css } from "/assets/pkg/remix/src/ui.js";
import button from "/assets/pkg/remix/src/ui/button.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Button Basic
* @description The button mixin applies neutral, primary, or ghost pill styling to button-like hosts.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: buttonDemoCss,
		children: [
			/* @__PURE__ */ _jsxs("section", {
				mix: toneSectionCss,
				children: [/* @__PURE__ */ _jsx("h2", {
					mix: toneLabelCss,
					children: "Neutral"
				}), /* @__PURE__ */ _jsxs("div", {
					mix: buttonRowCss,
					children: [
						/* @__PURE__ */ _jsx("button", {
							mix: button(),
							children: "Medium"
						}),
						/* @__PURE__ */ _jsx("button", {
							mix: button({ size: "lg" }),
							children: "Large"
						}),
						/* @__PURE__ */ _jsx("button", {
							"aria-pressed": "true",
							mix: button(),
							children: "Pressed"
						}),
						/* @__PURE__ */ _jsx("button", {
							disabled: true,
							mix: button(),
							children: "Disabled"
						})
					]
				})]
			}),
			/* @__PURE__ */ _jsxs("section", {
				mix: toneSectionCss,
				children: [/* @__PURE__ */ _jsx("h2", {
					mix: toneLabelCss,
					children: "Primary"
				}), /* @__PURE__ */ _jsxs("div", {
					mix: buttonRowCss,
					children: [
						/* @__PURE__ */ _jsx("button", {
							mix: button({ tone: "primary" }),
							children: "Medium"
						}),
						/* @__PURE__ */ _jsx("button", {
							mix: button({
								size: "lg",
								tone: "primary"
							}),
							children: "Large"
						}),
						/* @__PURE__ */ _jsx("button", {
							"aria-pressed": "true",
							mix: button({ tone: "primary" }),
							children: "Pressed"
						}),
						/* @__PURE__ */ _jsx("button", {
							disabled: true,
							mix: button({ tone: "primary" }),
							children: "Disabled"
						})
					]
				})]
			}),
			/* @__PURE__ */ _jsxs("section", {
				mix: toneSectionCss,
				children: [/* @__PURE__ */ _jsx("h2", {
					mix: toneLabelCss,
					children: "Ghost"
				}), /* @__PURE__ */ _jsxs("div", {
					mix: buttonRowCss,
					children: [
						/* @__PURE__ */ _jsx("button", {
							mix: button({ tone: "ghost" }),
							children: "Medium"
						}),
						/* @__PURE__ */ _jsx("button", {
							mix: button({
								size: "lg",
								tone: "ghost"
							}),
							children: "Large"
						}),
						/* @__PURE__ */ _jsx("button", {
							"aria-pressed": "true",
							mix: button({ tone: "ghost" }),
							children: "Pressed"
						}),
						/* @__PURE__ */ _jsx("button", {
							disabled: true,
							mix: button({ tone: "ghost" }),
							children: "Disabled"
						})
					]
				})]
			})
		]
	});
}
const buttonDemoCss = css({
	display: "grid",
	gap: "22px",
	width: "min(100%, 34rem)"
});
const toneSectionCss = css({
	display: "grid",
	gap: "8px"
});
const toneLabelCss = css({
	margin: 0,
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "11px",
	lineHeight: "14px",
	fontWeight: 600,
	letterSpacing: 0,
	color: "rgba(16, 16, 16, 0.58)"
});
const buttonRowCss = css({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	gap: "10px"
});