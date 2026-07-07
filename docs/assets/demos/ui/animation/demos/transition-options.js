import { css } from "/assets/pkg/remix/src/ui.js";
import { animateEntrance } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function TransitionOptions() {
	return () => /* @__PURE__ */ _jsx("div", { mix: [css({
		width: 100,
		height: 100,
		borderRadius: "50%",
		backgroundColor: "#9911ff"
	}), animateEntrance({
		opacity: 0,
		transform: "scale(0.5)",
		duration: 800,
		delay: 500,
		easing: "cubic-bezier(0, 0.71, 0.2, 1.01)"
	})] });
}