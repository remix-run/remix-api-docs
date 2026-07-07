import { css } from "/assets/pkg/remix/src/ui.js";
import * as menu from "/assets/pkg/remix/src/ui/menu/primitives.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Menu Primitives
* @description Headless menu behavior with minimal local styles.
* @layout center
*/
export default function Example(handle) {
	let selected = "none";
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [demoCss, menu.onMenuSelect((event) => {
			selected = event.item.name;
			void handle.update();
		})],
		children: [/* @__PURE__ */ _jsxs(menu.Context, {
			label: "Project actions",
			children: [/* @__PURE__ */ _jsx("button", {
				mix: [triggerCss, menu.trigger()],
				type: "button",
				children: "Actions"
			}), /* @__PURE__ */ _jsx("div", {
				mix: [surfaceCss, menu.popover()],
				children: /* @__PURE__ */ _jsxs("div", {
					mix: [listCss, menu.list()],
					children: [
						/* @__PURE__ */ _jsx("div", {
							mix: [itemCss, menu.item({ name: "rename" })],
							children: "Rename"
						}),
						/* @__PURE__ */ _jsx("div", {
							mix: [itemCss, menu.item({ name: "duplicate" })],
							children: "Duplicate"
						}),
						/* @__PURE__ */ _jsx("div", {
							mix: [itemCss, menu.item({
								disabled: true,
								name: "archive"
							})],
							children: "Archive"
						})
					]
				})
			})]
		}), /* @__PURE__ */ _jsx("p", {
			mix: valueCss,
			children: `selected=${selected}`
		})]
	});
}
const demoCss = css({
	display: "grid",
	justifyItems: "start",
	gap: "8px",
	width: "min(100%, 16rem)"
});
const triggerCss = css({
	appearance: "none",
	height: "30px",
	border: "1px solid #cfcfcf",
	borderRadius: "6px",
	background: "#ffffff",
	color: "#101010",
	font: "600 13px/18px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "0 10px",
	"&:focus-visible": {
		outline: "2px solid #3573f6",
		outlineOffset: "2px"
	}
});
const surfaceCss = css({
	boxSizing: "border-box",
	minWidth: "10rem",
	margin: 0,
	border: "1px solid #cfcfcf",
	borderRadius: "6px",
	background: "#ffffff",
	boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
	padding: "4px",
	"&:popover-open": { display: "block" }
});
const listCss = css({
	display: "grid",
	gap: "2px",
	outline: 0
});
const itemCss = css({
	borderRadius: "4px",
	color: "#101010",
	font: "500 13px/18px \"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	letterSpacing: 0,
	padding: "6px 8px",
	"&[data-highlighted=\"true\"]": { background: "#eeeeee" },
	"&[data-menu-flash=\"true\"]": {
		background: "#101010",
		color: "#ffffff"
	},
	"&[aria-disabled=\"true\"]": { color: "#9a9a9a" }
});
const valueCss = css({
	margin: 0,
	color: "#666666",
	font: "500 12px/16px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
});