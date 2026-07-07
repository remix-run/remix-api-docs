import { css, on } from "/assets/pkg/remix/src/ui.js";
import button from "/assets/pkg/remix/src/ui/button.js";
import * as popover from "/assets/pkg/remix/src/ui/popover.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Popover
* @description Anchored popover behavior with focus restoration and outside-click dismissal.
* @layout center
*/
export default function Example(handle) {
	let open = false;
	function setOpen(nextOpen) {
		open = nextOpen;
		void handle.update();
	}
	return () => /* @__PURE__ */ _jsx(popover.Context, { children: /* @__PURE__ */ _jsxs("div", {
		mix: demoCss,
		children: [/* @__PURE__ */ _jsx("button", {
			mix: [
				button(),
				popover.anchor({
					placement: "bottom-start",
					offset: 8
				}),
				popover.focusOnHide(),
				on("click", () => {
					setOpen(!open);
				})
			],
			children: "View options"
		}), /* @__PURE__ */ _jsxs("div", {
			mix: [surfaceCss, popover.surface({
				open,
				onHide() {
					setOpen(false);
				}
			})],
			children: [/* @__PURE__ */ _jsx("button", {
				mix: [
					button({ tone: "ghost" }),
					popover.focusOnShow(),
					on("click", () => {
						setOpen(false);
					})
				],
				children: "Close"
			}), /* @__PURE__ */ _jsx("div", {
				mix: surfaceBodyCss,
				children: "Popover content stays app-owned."
			})]
		})]
	}) });
}
const demoCss = css({
	display: "grid",
	placeItems: "center",
	minHeight: "10rem",
	width: "min(100%, 24rem)"
});
const surfaceCss = css({
	boxSizing: "border-box",
	width: "14rem",
	margin: 0,
	border: "1px solid rgba(0, 0, 0, 0.12)",
	borderRadius: "8px",
	background: "#FFFFFF",
	boxShadow: "0 16px 40px rgba(0, 0, 0, 0.14)",
	color: "#101010",
	padding: "8px",
	"&:popover-open": {
		display: "grid",
		gap: "8px"
	}
});
const surfaceBodyCss = css({
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	color: "#4f4f4f",
	padding: "2px 4px 4px"
});