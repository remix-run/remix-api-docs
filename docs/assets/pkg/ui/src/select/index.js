import { css } from "/assets/pkg/ui/src/index.js";
import * as popover from "/assets/pkg/ui/src/popover/index.js";
import * as select from "/assets/pkg/ui/src/select/primitives.js";
import { CheckIcon, ChevronVerticalIcon } from "/assets/pkg/ui/src/shared/icons.js";
import { listboxIndicatorStyle, listboxLabelStyle, listboxListStyle, listboxOptionStyle, popoverSurfaceStyle } from "/assets/pkg/ui/src/shared/listbox-popover-styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/ui/src/jsx-runtime.js";
const selectTriggerShadow = "0 2px 3px -1px rgba(0, 0, 0, 0.04), 0 3px 4px -1.5px rgba(0, 0, 0, 0.04), 0 4px 5px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.12)";
const selectTriggerFocusShadow = "0 2px 3px -1px rgba(0, 0, 0, 0.04), 0 3px 4px -1.5px rgba(0, 0, 0, 0.04), 0 4px 5px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px #3573F6, 0 0 0 4px rgba(53, 115, 246, 0.1), 0 6px 32px 4px rgba(53, 115, 246, 0.08), inset 0 0 8px 1px rgba(53, 115, 246, 0.05)";
const selectTriggerCss = css({
	appearance: "none",
	margin: 0,
	boxSizing: "border-box",
	width: "100%",
	minWidth: 0,
	height: "32px",
	paddingBlock: "6px",
	paddingInlineStart: "12px",
	paddingInlineEnd: "8px",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	gap: "6px",
	border: 0,
	borderRadius: "8px",
	background: "#FFFFFF",
	boxShadow: selectTriggerShadow,
	color: "#101010",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontStyle: "normal",
	fontWeight: 400,
	fontSize: "13px",
	lineHeight: "20px",
	fontFeatureSettings: "\"ss01\" on, \"cv01\" on",
	letterSpacing: 0,
	textAlign: "left",
	textShadow: "0 1px 0 #FFFFFF",
	whiteSpace: "nowrap",
	"&:hover, &:focus-visible, &[aria-expanded=\"true\"], &[aria-expanded=\"true\"]:hover, &[aria-expanded=\"true\"]:focus-visible": {
		background: "#FFFFFF",
		color: "#101010"
	},
	"&:active": { background: "#FFFFFF" },
	"&:focus-visible": {
		outline: 0,
		boxShadow: selectTriggerFocusShadow
	},
	"&[aria-expanded=\"true\"]": { boxShadow: selectTriggerFocusShadow },
	"&:disabled": { opacity: .55 }
});
const triggerLabelCss = css({
	display: "inline-flex",
	alignItems: "center",
	flex: "1 1 auto",
	minWidth: 0,
	overflow: "hidden",
	textOverflow: "ellipsis"
});
const triggerIconCss = css({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	width: "16px",
	height: "16px",
	color: "#707070",
	flex: "none",
	"& > svg": {
		display: "block",
		width: "100%",
		height: "100%"
	}
});
export const triggerStyle = selectTriggerCss;
function SelectLabel(handle) {
	let context = handle.context.get(select.Context);
	return () => /* @__PURE__ */ _jsx("span", {
		mix: triggerLabelCss,
		children: context.displayedLabel
	});
}
export function Select(handle) {
	return () => {
		let { children, defaultLabel, defaultValue, disabled, name, mix, ...buttonProps } = handle.props;
		return /* @__PURE__ */ _jsxs(select.Context, {
			defaultLabel,
			defaultValue,
			disabled,
			name,
			children: [
				/* @__PURE__ */ _jsxs("button", {
					type: "button",
					...buttonProps,
					mix: [
						triggerStyle,
						select.trigger(),
						mix
					],
					children: [/* @__PURE__ */ _jsx(SelectLabel, {}), /* @__PURE__ */ _jsx(ChevronVerticalIcon, { mix: triggerIconCss })]
				}),
				/* @__PURE__ */ _jsx(popover.Context, { children: /* @__PURE__ */ _jsx("div", {
					mix: [popoverSurfaceStyle, select.popover()],
					children: /* @__PURE__ */ _jsx("div", {
						mix: [listboxListStyle, select.list()],
						children
					})
				}) }),
				name && /* @__PURE__ */ _jsx("input", { mix: select.hiddenInput() })
			]
		});
	};
}
export function Option(handle) {
	return () => {
		let { label, value, disabled, textValue, children, mix, ...divProps } = handle.props;
		return /* @__PURE__ */ _jsxs("div", {
			...divProps,
			mix: [
				listboxOptionStyle,
				select.option({
					value,
					label,
					disabled,
					textValue
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