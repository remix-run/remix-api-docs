import { css, on } from "/assets/pkg/remix/src/ui.js";
import { spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function RollingSquare(handle) {
	let toggled = false;
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			gap: "20px",
			minWidth: "300px"
		})],
		children: [/* @__PURE__ */ _jsx("div", {
			mix: [css({
				width: "80px",
				height: "80px",
				backgroundColor: "#8df0cc",
				borderRadius: "10px",
				transition: `transform ${spring({
					duration: 500,
					bounce: .5
				})}`
			})],
			style: { transform: toggled ? "translateX(100%) rotate(180deg)" : "translateX(-100%)" }
		}), /* @__PURE__ */ _jsx("button", {
			mix: [css({
				backgroundColor: "#8df0cc",
				color: "#0f1115",
				borderRadius: "5px",
				padding: "10px",
				margin: "10px",
				border: "none",
				cursor: "pointer"
			}), on("click", () => {
				toggled = !toggled;
				handle.update();
			})],
			children: "Toggle position"
		})]
	});
}