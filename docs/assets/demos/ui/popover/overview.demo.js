import { css, on } from "/assets/pkg/remix/src/ui.js";
import { Button } from "/assets/pkg/remix/src/ui/button.js";
import { Glyph } from "/assets/pkg/remix/src/ui/glyph.js";
import * as popover from "/assets/pkg/remix/src/ui/popover.js";
import { Option, Select } from "/assets/pkg/remix/src/ui/select.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Popover Overview
* @description A popover panel anchored to a trigger button, containing form controls and a close action.
*/
export default function Example(handle) {
	let open = false;
	function closePopover() {
		open = false;
		void handle.update();
	}
	return () => /* @__PURE__ */ _jsxs(popover.Context, { children: [/* @__PURE__ */ _jsx("div", {
		mix: buttonRowCss,
		children: /* @__PURE__ */ _jsx(Button, {
			endIcon: /* @__PURE__ */ _jsx(Glyph, { name: "chevronDown" }),
			mix: [
				popover.anchor({ placement: "bottom" }),
				popover.focusOnHide(),
				on("click", () => {
					open = !open;
					void handle.update();
				})
			],
			tone: "secondary",
			children: "View options"
		})
	}), /* @__PURE__ */ _jsx("div", {
		mix: [popover.surfaceStyle, popover.surface({
			closeOnAnchorClick: false,
			open,
			onHide() {
				closePopover();
			}
		})],
		children: /* @__PURE__ */ _jsxs("div", {
			mix: [popover.contentStyle, panelCss],
			children: [
				/* @__PURE__ */ _jsxs("div", {
					mix: fieldCss,
					children: [/* @__PURE__ */ _jsx("label", {
						for: `${handle.id}-grouping`,
						mix: labelCss,
						children: "Grouping"
					}), /* @__PURE__ */ _jsxs(Select, {
						id: `${handle.id}-grouping`,
						defaultLabel: "No grouping",
						defaultValue: "none",
						mix: [fieldSelectCss, popover.focusOnShow()],
						children: [
							/* @__PURE__ */ _jsx(Option, {
								label: "No grouping",
								value: "none"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Status",
								value: "status"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Priority",
								value: "priority"
							})
						]
					})]
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: fieldCss,
					children: [/* @__PURE__ */ _jsx("label", {
						for: `${handle.id}-ordering`,
						mix: labelCss,
						children: "Ordering"
					}), /* @__PURE__ */ _jsxs(Select, {
						id: `${handle.id}-ordering`,
						defaultLabel: "Manual",
						defaultValue: "manual",
						mix: fieldSelectCss,
						children: [
							/* @__PURE__ */ _jsx(Option, {
								label: "Manual",
								value: "manual"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Newest first",
								value: "newest"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Oldest first",
								value: "oldest"
							})
						]
					})]
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: fieldCss,
					children: [/* @__PURE__ */ _jsx("label", {
						for: `${handle.id}-closed-projects`,
						mix: labelCss,
						children: "Show closed projects"
					}), /* @__PURE__ */ _jsxs(Select, {
						id: `${handle.id}-closed-projects`,
						defaultLabel: "All",
						defaultValue: "all",
						mix: fieldSelectCss,
						children: [
							/* @__PURE__ */ _jsx(Option, {
								label: "All",
								value: "all"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Open only",
								value: "open"
							}),
							/* @__PURE__ */ _jsx(Option, {
								label: "Closed only",
								value: "closed"
							})
						]
					})]
				}),
				/* @__PURE__ */ _jsx("div", {
					mix: actionsCss,
					children: /* @__PURE__ */ _jsx(Button, {
						mix: on("click", closePopover),
						tone: "ghost",
						children: "Done"
					})
				})
			]
		})
	})] });
}
const buttonRowCss = css({
	display: "flex",
	justifyContent: "flex-start"
});
const panelCss = css({
	display: "grid",
	gap: theme.space.md,
	width: "22rem",
	padding: theme.space.lg
});
const fieldCss = css({
	display: "grid",
	gap: theme.space.px
});
const labelCss = css({
	margin: 0,
	fontSize: theme.fontSize.xs,
	fontWeight: theme.fontWeight.semibold,
	color: theme.colors.text.primary
});
const fieldSelectCss = css({ width: "100%" });
const actionsCss = css({
	display: "flex",
	justifyContent: "flex-end",
	paddingTop: theme.space.xs
});