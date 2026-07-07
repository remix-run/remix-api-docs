import { css, ref } from "/assets/pkg/remix/src/ui.js";
import { anchor } from "/assets/pkg/remix/src/ui/anchor.js";
import button from "/assets/pkg/remix/src/ui/button.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Anchor
* @description Position a floating element against an anchor with the low-level anchor primitive.
* @layout center
*/
export default function Example() {
	let anchorNode = null;
	let floatingNode = null;
	let cleanupAnchor = () => {};
	function positionFloating() {
		cleanupAnchor();
		if (anchorNode && floatingNode) {
			cleanupAnchor = anchor(floatingNode, anchorNode, {
				placement: "bottom-start",
				offset: 8
			});
		}
	}
	function clearFloating() {
		cleanupAnchor();
		cleanupAnchor = () => {};
	}
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: demoCss,
		children: [/* @__PURE__ */ _jsx("button", {
			mix: [button(), ref((node, signal) => {
				if (!(node instanceof HTMLElement)) return;
				anchorNode = node;
				positionFloating();
				signal.addEventListener("abort", () => {
					if (anchorNode === node) {
						anchorNode = null;
					}
					clearFloating();
				});
			})],
			children: "Anchor target"
		}), /* @__PURE__ */ _jsx("div", {
			mix: [floatingCss, ref((node, signal) => {
				if (!(node instanceof HTMLElement)) return;
				floatingNode = node;
				positionFloating();
				signal.addEventListener("abort", () => {
					if (floatingNode === node) {
						floatingNode = null;
					}
					clearFloating();
				});
			})],
			children: "Positioned surface"
		})]
	});
}
const demoCss = css({
	display: "grid",
	placeItems: "center",
	minHeight: "9rem",
	width: "min(100%, 24rem)"
});
const floatingCss = css({
	boxSizing: "border-box",
	width: "12rem",
	border: "1px solid rgba(0, 0, 0, 0.12)",
	borderRadius: "8px",
	background: "#FFFFFF",
	boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
	color: "#101010",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	padding: "10px 12px"
});