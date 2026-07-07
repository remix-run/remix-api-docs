import { css } from "/assets/pkg/ui/src/index.js";
import * as combobox from "/assets/pkg/ui/src/combobox/primitives.js";
import { CheckIcon } from "/assets/pkg/ui/src/shared/icons.js";
import { listboxIndicatorStyle, listboxLabelStyle, listboxListStyle, listboxOptionStyle, popoverSurfaceStyle } from "/assets/pkg/ui/src/shared/listbox-popover-styles.js";
import { componentStyleValues as styles } from "/assets/pkg/ui/src/shared/style-values.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/ui/src/jsx-runtime.js";
const comboboxPopoverCss = css({
	opacity: 0,
	"&:popover-open": { opacity: 1 },
	"&:not(:popover-open)": { pointerEvents: "none" },
	"&[data-show-reason=\"nav\"]:not(:popover-open)": {
		transition: "opacity 180ms ease-in, overlay 180ms ease-in, display 180ms ease-in",
		transitionBehavior: "allow-discrete"
	},
	"&[data-show-reason=\"hint\"]:not(:popover-open)": {
		transition: "none",
		transitionBehavior: "normal"
	}
});
const comboboxInputCss = css({
	minHeight: styles.control.height.sm,
	width: "100%",
	paddingInline: styles.space.sm,
	border: `0.5px solid ${styles.colors.border.default}`,
	borderRadius: styles.radius.md,
	backgroundColor: styles.surface.lvl0,
	color: styles.colors.text.primary,
	fontFamily: styles.fontFamily.sans,
	fontSize: styles.fontSize.sm,
	lineHeight: styles.lineHeight.normal,
	boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.7)",
	"&:focus-visible": {
		outline: `2px solid ${styles.colors.focus.ring}`,
		outlineOffset: styles.space.none
	},
	"&[data-surface-visible=\"true\"][aria-activedescendant]:focus-visible": { outline: "none" }
});
export const inputStyle = comboboxInputCss;
export const popoverStyle = comboboxPopoverCss;
export function Combobox(handle) {
	return () => {
		let { children, defaultValue, disabled, inputId, name, placeholder, ...divProps } = handle.props;
		return /* @__PURE__ */ _jsx(combobox.Context, {
			defaultValue,
			disabled,
			name,
			children: /* @__PURE__ */ _jsxs("div", {
				...divProps,
				children: [
					/* @__PURE__ */ _jsx("input", {
						defaultValue: defaultValue ?? undefined,
						id: inputId,
						mix: [inputStyle, combobox.input()],
						placeholder
					}),
					/* @__PURE__ */ _jsx("div", {
						mix: [
							popoverSurfaceStyle,
							popoverStyle,
							combobox.popover()
						],
						children: /* @__PURE__ */ _jsx("div", {
							mix: [listboxListStyle, combobox.list()],
							children
						})
					}),
					name && /* @__PURE__ */ _jsx("input", { mix: combobox.hiddenInput() })
				]
			})
		});
	};
}
export function ComboboxOption(handle) {
	return () => {
		let { children, disabled, label, mix, searchValue, value, ...divProps } = handle.props;
		return /* @__PURE__ */ _jsxs("div", {
			...divProps,
			mix: [
				listboxOptionStyle,
				combobox.option({
					disabled,
					label,
					searchValue,
					value
				}),
				mix
			],
			children: [/* @__PURE__ */ _jsx(CheckIcon, { mix: listboxIndicatorStyle }), /* @__PURE__ */ _jsx("span", {
				mix: listboxLabelStyle,
				children: children ?? label
			})]
		});
	};
}