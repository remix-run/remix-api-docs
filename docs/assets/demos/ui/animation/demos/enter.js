import { css } from "/assets/pkg/remix/src/ui.js";
import { animateEntrance, spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function EnterAnimation() {
	return () => /* @__PURE__ */ _jsx("div", { mix: [css({
		width: 100,
		height: 100,
		backgroundColor: "#dd00ee",
		borderRadius: "50%"
	}), animateEntrance({
		opacity: 0,
		transform: "scale(0)",
		...spring({
			duration: 400,
			bounce: .5
		})
	})] });
}