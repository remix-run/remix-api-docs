import { css } from "/assets/pkg/remix/src/ui.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/assets/pkg/remix/src/ui/accordion.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Accordion Overview
* @description A single-open disclosure list that keeps settings, billing, or notification rules in one calm section.
* @layout center
* @order 1
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs(Accordion, {
		defaultValue: "account",
		children: [
			/* @__PURE__ */ _jsxs(AccordionItem, {
				value: "account",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Account defaults" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "Keep billing contacts, email summaries, and workspace naming rules in one calm disclosure list without adding another card layer."
				}) })]
			}),
			/* @__PURE__ */ _jsxs(AccordionItem, {
				value: "billing",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Billing schedule" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "Review invoice timing, payment methods, and renewal reminders with the same spacing and typography used elsewhere in the system."
				}) })]
			}),
			/* @__PURE__ */ _jsxs(AccordionItem, {
				value: "notifications",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Notification rules" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "Use single mode when only one details panel should stay open at a time in a compact settings or details view."
				}) })]
			})
		]
	});
}
const bodyTextCss = css({
	margin: 0,
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.relaxed,
	color: theme.colors.text.secondary
});