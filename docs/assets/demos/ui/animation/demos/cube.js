import { css, ref } from "/assets/pkg/remix/src/ui.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function Cube(handle) {
	let cube;
	function animate(t) {
		if (handle.signal.aborted) return;
		let rotate = Math.sin(t / 1e4) * 200;
		let y = (1 + Math.sin(t / 1e3)) * -25;
		cube.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
		requestAnimationFrame(animate);
	}
	return () => /* @__PURE__ */ _jsx("div", {
		mix: [css({
			perspective: "400px",
			width: "100px",
			height: "100px"
		})],
		children: /* @__PURE__ */ _jsxs("div", {
			mix: [ref((node) => {
				cube = node;
				requestAnimationFrame(animate);
			}), css({
				width: "100px",
				height: "100px",
				position: "relative",
				transformStyle: "preserve-3d"
			})],
			children: [
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateY(0deg) translateZ(50px)",
					backgroundColor: "#ff0055"
				})] }),
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateY(90deg) translateZ(50px)",
					backgroundColor: "#0099ff"
				})] }),
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateY(180deg) translateZ(50px)",
					backgroundColor: "#22cc88"
				})] }),
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateY(-90deg) translateZ(50px)",
					backgroundColor: "#ffaa00"
				})] }),
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateX(90deg) translateZ(50px)",
					backgroundColor: "#aa00ff"
				})] }),
				/* @__PURE__ */ _jsx("div", { mix: [css({
					position: "absolute",
					width: "100%",
					height: "100%",
					opacity: .6,
					transform: "rotateX(-90deg) translateZ(50px)",
					backgroundColor: "#ff00aa"
				})] })
			]
		})
	});
}