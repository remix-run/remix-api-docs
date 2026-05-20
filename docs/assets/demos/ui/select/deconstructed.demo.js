import { css } from "/assets/pkg/remix/src/ui.js";
import * as button from "/assets/pkg/remix/src/ui/button.js";
import { Glyph } from "/assets/pkg/remix/src/ui/glyph.js";
import * as listbox from "/assets/pkg/remix/src/ui/listbox.js";
import * as popover from "/assets/pkg/remix/src/ui/popover.js";
import * as select from "/assets/pkg/remix/src/ui/select.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Select Deconstructed
* @description Build a fully custom select by composing the select, popover, and listbox primitives directly.
*/
export default function Example(handle) {
	let label = "Local";
	let value = "local";
	let triggerId = `${handle.id}-trigger`;
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [stackCss, select.onSelectChange((event) => {
			label = event.label ?? "Select an environment";
			value = event.value ?? "null";
			void handle.update();
		})],
		children: [
			/* @__PURE__ */ _jsx("p", {
				mix: labelCss,
				children: "Environment"
			}),
			/* @__PURE__ */ _jsxs(select.Context, {
				defaultLabel: "Local",
				defaultValue: "local",
				name: "environment",
				children: [
					/* @__PURE__ */ _jsxs("button", {
						id: triggerId,
						type: "button",
						mix: [
							button.baseStyle,
							select.triggerStyle,
							select.trigger(),
							selectCss
						],
						children: [/* @__PURE__ */ _jsx("span", {
							mix: button.labelStyle,
							children: label
						}), /* @__PURE__ */ _jsx(Glyph, {
							mix: button.iconStyle,
							name: "chevronVertical"
						})]
					}),
					/* @__PURE__ */ _jsx(popover.Context, { children: /* @__PURE__ */ _jsx("div", {
						mix: [popover.surfaceStyle, select.popover()],
						children: /* @__PURE__ */ _jsx("div", {
							"aria-labelledby": triggerId,
							mix: [
								popover.contentStyle,
								listbox.listStyle,
								select.list()
							],
							children: environmentOptions.map((option) => /* @__PURE__ */ _jsxs("div", {
								mix: [listbox.optionStyle, select.option(option)],
								children: [/* @__PURE__ */ _jsx(Glyph, {
									mix: listbox.glyphStyle,
									name: "check"
								}), /* @__PURE__ */ _jsx("span", {
									mix: listbox.labelStyle,
									children: option.label
								})]
							}, option.value))
						})
					}) }),
					/* @__PURE__ */ _jsx("input", { mix: select.hiddenInput() })
				]
			}),
			/* @__PURE__ */ _jsx("p", {
				mix: valueCss,
				children: `value=${value}`
			})
		]
	});
}
const environmentOptions = [
	{
		label: "Local",
		value: "local"
	},
	{
		label: "Staging",
		value: "staging"
	},
	{
		label: "Production",
		value: "production"
	},
	{
		disabled: true,
		label: "Archived",
		value: "archived"
	}
];
const selectCss = css({ width: "16rem" });
const stackCss = css({
	display: "flex",
	flexDirection: "column",
	gap: theme.space.sm,
	width: "100%"
});
const labelCss = css({
	margin: 0,
	fontSize: theme.fontSize.xs,
	fontWeight: theme.fontWeight.semibold,
	color: theme.colors.text.primary
});
const valueCss = css({
	margin: 0,
	fontFamily: theme.fontFamily.mono,
	fontSize: theme.fontSize.xs,
	color: theme.colors.text.secondary
});