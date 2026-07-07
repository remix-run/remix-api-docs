import { css } from "/assets/pkg/remix/src/ui.js";
import * as accordion from "/assets/pkg/remix/src/ui/accordion/primitives.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Accordion Primitives
* @description Headless accordion behavior with minimal local styles.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsx(accordion.Context, {
		defaultValue: "shipping",
		children: /* @__PURE__ */ _jsxs("div", {
			mix: [rootCss, accordion.root()],
			children: [
				/* @__PURE__ */ _jsx(accordion.ItemContext, {
					value: "shipping",
					children: /* @__PURE__ */ _jsxs("div", {
						mix: [itemCss, accordion.item()],
						children: [/* @__PURE__ */ _jsx("h3", {
							mix: headingCss,
							children: /* @__PURE__ */ _jsx("button", {
								mix: [triggerCss, accordion.trigger()],
								type: "button",
								children: "Shipping"
							})
						}), /* @__PURE__ */ _jsx("div", {
							mix: [contentCss, accordion.content()],
							children: "Default carrier, cutoff time, and delivery windows."
						})]
					})
				}),
				/* @__PURE__ */ _jsx(accordion.ItemContext, {
					value: "billing",
					children: /* @__PURE__ */ _jsxs("div", {
						mix: [itemCss, accordion.item()],
						children: [/* @__PURE__ */ _jsx("h3", {
							mix: headingCss,
							children: /* @__PURE__ */ _jsx("button", {
								mix: [triggerCss, accordion.trigger()],
								type: "button",
								children: "Billing"
							})
						}), /* @__PURE__ */ _jsx("div", {
							mix: [contentCss, accordion.content()],
							children: "Invoice cadence, billing contact, and tax settings."
						})]
					})
				}),
				/* @__PURE__ */ _jsx(accordion.ItemContext, {
					disabled: true,
					value: "archived",
					children: /* @__PURE__ */ _jsxs("div", {
						mix: [itemCss, accordion.item()],
						children: [/* @__PURE__ */ _jsx("h3", {
							mix: headingCss,
							children: /* @__PURE__ */ _jsx("button", {
								mix: [triggerCss, accordion.trigger()],
								type: "button",
								children: "Archived"
							})
						}), /* @__PURE__ */ _jsx("div", {
							mix: [contentCss, accordion.content()],
							children: "Unavailable settings."
						})]
					})
				})
			]
		})
	});
}
const rootCss = css({
	display: "grid",
	width: "24rem",
	maxWidth: "100%",
	border: "1px solid #d8d8d8",
	borderRadius: "8px",
	background: "#ffffff"
});
const itemCss = css({
	borderBlockStart: "1px solid #e8e8e8",
	"&:first-child": { borderBlockStart: 0 },
	"&[data-disabled]": { opacity: .45 }
});
const headingCss = css({ margin: 0 });
const triggerCss = css({
	appearance: "none",
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
	border: 0,
	background: "transparent",
	color: "#101010",
	font: "600 13px/18px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "10px 12px",
	textAlign: "left",
	"&::after": { content: "\"+\"" },
	"&[data-state=\"open\"]::after": { content: "\"-\"" },
	"&:focus-visible": {
		outline: "2px solid #3573f6",
		outlineOffset: "-2px"
	}
});
const contentCss = css({
	color: "#4f4f4f",
	font: "500 13px/20px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "0 12px 12px",
	"&[data-state=\"closed\"]": { display: "none" }
});