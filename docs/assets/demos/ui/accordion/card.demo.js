import { css } from "/assets/pkg/remix/src/ui.js";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/assets/pkg/remix/src/ui/accordion.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Accordion in a Card
* @description The Accordion can sit inside a card when the surrounding surface needs stronger grouping.
* @order 3
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("article", {
		mix: cardCss,
		children: [/* @__PURE__ */ _jsxs("div", {
			mix: cardHeaderCss,
			children: [
				/* @__PURE__ */ _jsx("p", {
					mix: eyebrowCss,
					children: "Project settings"
				}),
				/* @__PURE__ */ _jsx("h3", {
					mix: titleCss,
					children: "Deployment policies"
				}),
				/* @__PURE__ */ _jsx("p", {
					mix: descriptionCss,
					children: "The Accordion can sit inside a card when the surrounding surface needs stronger grouping."
				})
			]
		}), /* @__PURE__ */ _jsx("div", {
			mix: accordionInsetCss,
			children: /* @__PURE__ */ _jsxs(Accordion, {
				defaultValue: "reviews",
				children: [
					/* @__PURE__ */ _jsxs(AccordionItem, {
						value: "reviews",
						children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Required approvals" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
							mix: bodyTextCss,
							children: "Require one reviewer for routine changes and two reviewers for dependency, auth, or billing-related changes."
						}) })]
					}),
					/* @__PURE__ */ _jsxs(AccordionItem, {
						value: "windows",
						children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Release windows" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
							mix: bodyTextCss,
							children: "Schedule production deploys on weekdays before 3 PM so incidents and rollback work stay inside staffed hours."
						}) })]
					}),
					/* @__PURE__ */ _jsxs(AccordionItem, {
						value: "rollback",
						children: [/* @__PURE__ */ _jsx(AccordionTrigger, { children: "Rollback policy" }), /* @__PURE__ */ _jsx(AccordionContent, { children: /* @__PURE__ */ _jsx("p", {
							mix: bodyTextCss,
							children: "Keep a rollback target ready for every release and treat rollback preparation as part of the normal change checklist."
						}) })]
					})
				]
			})
		})]
	});
}
const cardCss = css({
	display: "flex",
	flexDirection: "column",
	gap: theme.space.md,
	padding: theme.space.lg,
	border: `1px solid ${theme.colors.border.subtle}`,
	borderRadius: theme.radius.lg,
	backgroundColor: theme.surface.lvl0,
	boxShadow: theme.shadow.xs
});
const cardHeaderCss = css({
	display: "flex",
	flexDirection: "column",
	gap: theme.space.sm
});
const accordionInsetCss = css({ paddingInline: theme.space.lg });
const eyebrowCss = css({
	margin: 0,
	fontSize: theme.fontSize.xxxs,
	fontWeight: theme.fontWeight.semibold,
	letterSpacing: theme.letterSpacing.meta,
	textTransform: "uppercase",
	color: theme.colors.text.muted
});
const titleCss = css({
	margin: 0,
	fontSize: theme.fontSize.lg,
	lineHeight: theme.lineHeight.tight,
	fontWeight: theme.fontWeight.semibold,
	color: theme.colors.text.primary
});
const descriptionCss = css({
	margin: 0,
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.relaxed,
	color: theme.colors.text.secondary
});
const bodyTextCss = css({
	margin: 0,
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.relaxed,
	color: theme.colors.text.secondary
});