import { css, on, ref } from "/assets/pkg/remix/src/ui.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function InterruptibleKeyframes() {
	let box;
	let currentAnimation = null;
	function getCurrentScale() {
		let matrix = new DOMMatrix(getComputedStyle(box).transform);
		return matrix.a;
	}
	function interruptAnimation() {
		if (currentAnimation) {
			currentAnimation.commitStyles();
			currentAnimation.cancel();
			currentAnimation = null;
		}
	}
	return () => /* @__PURE__ */ _jsx("div", { mix: [
		ref((node) => box = node),
		css({
			width: 100,
			height: 100,
			backgroundColor: "#0cdcf7",
			borderRadius: 5
		}),
		on("pointerenter", () => {
			interruptAnimation();
			let startScale = getCurrentScale();
			currentAnimation = box.animate([
				{
					transform: `scale(${startScale})`,
					offset: 0,
					easing: "ease-in-out"
				},
				{
					transform: "scale(1.1)",
					offset: .6,
					easing: "ease-out"
				},
				{
					transform: "scale(1.6)",
					offset: 1
				}
			], {
				duration: 500,
				fill: "forwards"
			});
		}),
		on("pointerleave", () => {
			interruptAnimation();
			let startScale = getCurrentScale();
			currentAnimation = box.animate([{ transform: `scale(${startScale})` }, { transform: "scale(1)" }], {
				duration: 300,
				easing: "ease-out",
				fill: "forwards"
			});
		})
	] });
}