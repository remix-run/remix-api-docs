import { css, on } from "/assets/pkg/remix/src/ui.js";
import { spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function AspectRatio(handle) {
	let aspectRatio = 1;
	let width = 100;
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			gap: 20
		})],
		children: [/* @__PURE__ */ _jsx("div", {
			mix: [css({
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: 180,
				height: 180
			})],
			children: /* @__PURE__ */ _jsx("div", {
				mix: [css({
					backgroundColor: "#8df0cc",
					borderRadius: 10,
					transition: spring.transition(["width", "aspect-ratio"], "bouncy")
				})],
				style: {
					width,
					aspectRatio
				}
			})
		}), /* @__PURE__ */ _jsxs("div", {
			mix: [css({
				display: "flex",
				flexDirection: "column",
				gap: 12,
				width: "100%"
			})],
			children: [/* @__PURE__ */ _jsxs("label", {
				mix: [css({
					display: "flex",
					alignItems: "center",
					gap: 10,
					fontSize: 13,
					color: "#666"
				})],
				children: [
					/* @__PURE__ */ _jsx("span", {
						mix: [css({
							width: 50,
							flexShrink: 0
						})],
						children: "Ratio"
					}),
					/* @__PURE__ */ _jsx("input", {
						type: "range",
						value: aspectRatio,
						min: .2,
						max: 3,
						step: .1,
						mix: [css(rangeInputCss), on("input", (event) => {
							let value = event.currentTarget.value;
							aspectRatio = parseFloat(value);
							handle.update();
						})]
					}),
					/* @__PURE__ */ _jsx("span", {
						mix: [css({
							width: 32,
							textAlign: "right",
							fontVariantNumeric: "tabular-nums"
						})],
						children: aspectRatio.toFixed(1)
					})
				]
			}), /* @__PURE__ */ _jsxs("label", {
				mix: [css({
					display: "flex",
					alignItems: "center",
					gap: 10,
					fontSize: 13,
					color: "#666"
				})],
				children: [
					/* @__PURE__ */ _jsx("span", {
						mix: [css({
							width: 50,
							flexShrink: 0
						})],
						children: "Width"
					}),
					/* @__PURE__ */ _jsx("input", {
						type: "range",
						value: width,
						min: 20,
						max: 160,
						step: 5,
						mix: [css(rangeInputCss), on("input", (event) => {
							let value = event.currentTarget.value;
							width = parseFloat(value);
							handle.update();
						})]
					}),
					/* @__PURE__ */ _jsx("span", {
						mix: [css({
							width: 32,
							textAlign: "right",
							fontVariantNumeric: "tabular-nums"
						})],
						children: width
					})
				]
			})]
		})]
	});
}
const rangeInputCss = {
	flex: 1,
	accentColor: "#8df0cc",
	cursor: "pointer"
};