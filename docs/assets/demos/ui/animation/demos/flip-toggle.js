import { css, on } from "/assets/pkg/remix/src/ui.js";
import { animateLayout } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function FlipToggle(handle) {
	let isOn = false;
	return () => /* @__PURE__ */ _jsx("button", {
		mix: [css({
			width: 90,
			height: 50,
			backgroundColor: "rgba(153, 17, 255, 0.2)",
			borderRadius: 50,
			cursor: "pointer",
			display: "flex",
			padding: 10,
			border: "none"
		}), on("click", () => {
			isOn = !isOn;
			handle.update();
		})],
		style: { justifyContent: isOn ? "flex-start" : "flex-end" },
		children: /* @__PURE__ */ _jsx("div", { mix: [css({
			width: 30,
			height: 30,
			backgroundColor: "#9911ff",
			borderRadius: "50%"
		}), animateLayout({
			duration: 200,
			easing: "ease-in-out"
		})] })
	});
}