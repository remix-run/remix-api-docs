import { createMixin, css, on } from "/assets/pkg/remix/src/ui.js";
import { spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function Press(handle) {
	let pressed = false;
	function setPressed(nextPressed) {
		if (pressed === nextPressed) return;
		pressed = nextPressed;
		handle.update();
	}
	return () => /* @__PURE__ */ _jsx("div", {
		tabIndex: 0,
		mix: [
			css({
				width: 100,
				height: 100,
				backgroundColor: "#9911ff",
				borderRadius: 5,
				transition: `transform ${spring()}`,
				"&:focus": {
					outline: "4px solid rgba(0,120,255,0.7)",
					outlineOffset: 1
				},
				"&:hover, &:focus": { transform: pressed ? "scale(0.8)" : "scale(1.2)" }
			}),
			onPressDown(() => {
				setPressed(true);
			}),
			onPressUp(() => {
				setPressed(false);
			})
		]
	});
}
const onPressDown = createMixin(() => (handler) => [on("pointerdown", (event) => {
	if (event.isPrimary === false) return;
	handler();
}), on("keydown", (event) => {
	if (!(event.key === "Enter" || event.key === " ") || event.repeat) return;
	event.preventDefault();
	handler();
})]);
const onPressUp = createMixin(() => (handler) => [
	on("pointerup", handler),
	on("pointerleave", handler),
	on("keyup", (event) => {
		if (!(event.key === "Enter" || event.key === " ")) return;
		event.preventDefault();
		handler();
	}),
	on("blur", handler)
]);