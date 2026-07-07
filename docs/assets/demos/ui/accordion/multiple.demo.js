import { css } from "/assets/pkg/remix/src/ui.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/assets/pkg/remix/src/ui/accordion.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @order 2
* @name Accordion Multiple Open
* @description Multiple mode allows several sections to stay open simultaneously, useful for operational checklists and dashboards.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs(Accordion, {
		defaultValue: ["api", "alerts"],
		type: "multiple",
		children: [
			/* @__PURE__ */ _jsxs(AccordionItem, {
				value: "api",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "API status checks" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "Multiple mode works well for operational checklists and dashboards where several sections often need to stay open together."
				}) })]
			}),
			/* @__PURE__ */ _jsxs(AccordionItem, {
				disabled: true,
				value: "access",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Access control sync" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "This section is intentionally disabled to show how one unavailable item should read inside an otherwise active list."
				}) })]
			}),
			/* @__PURE__ */ _jsxs(AccordionItem, {
				value: "alerts",
				children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Alert routing" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
					mix: bodyTextCss,
					children: "Disabled items should feel clearly unavailable without changing the overall visual model of the disclosure list."
				}) })]
			})
		]
	});
}
const bodyTextCss = css({
	margin: 0,
	fontSize: "13px",
	lineHeight: "1.65",
	color: "#4f4f4f"
});