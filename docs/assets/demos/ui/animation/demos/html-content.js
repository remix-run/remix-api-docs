import { css } from "/assets/pkg/remix/src/ui.js";
import { spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function HTMLContent(handle) {
	let count = 0;
	let from = 0;
	let to = 100;
	let counter = spring({
		duration: 3e3,
		bounce: 0
	});
	function animate() {
		if (handle.signal.aborted) return;
		let { value: t, done } = counter.next();
		if (done) return;
		count = Math.round(from + (to - from) * t);
		handle.update();
		requestAnimationFrame(animate);
	}
	handle.queueTask(() => {
		requestAnimationFrame(animate);
	});
	return () => /* @__PURE__ */ _jsx("pre", {
		mix: [css({
			fontSize: "64px",
			margin: 0,
			color: "#8df0cc"
		})],
		children: count
	});
}