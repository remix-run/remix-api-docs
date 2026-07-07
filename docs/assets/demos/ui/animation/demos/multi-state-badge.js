import { css, on, ref } from "/assets/pkg/remix/src/ui.js";
import { animateEntrance, animateExit } from "/assets/pkg/remix/src/ui/animation.js";
import { spring } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
const STATES = {
	idle: "Start",
	processing: "Processing",
	success: "Done",
	error: "Something went wrong"
};
function getNextState(state) {
	let states = Object.keys(STATES);
	let nextIndex = (states.indexOf(state) + 1) % states.length;
	return states[nextIndex];
}
const ICON_SIZE = 20;
const STROKE_WIDTH = 1.5;
const VIEW_BOX_SIZE = 24;
const iconEnterAnimation = {
	transform: "translateY(-40px) scale(0.5)",
	filter: "blur(6px)",
	duration: 150,
	easing: "ease-out"
};
const iconExitAnimation = {
	transform: "translateY(40px) scale(0.5)",
	filter: "blur(6px)",
	duration: 150,
	easing: "ease-in"
};
export function MultiStateBadge(handle) {
	let state = "idle";
	return () => /* @__PURE__ */ _jsx("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "center",
			padding: 16,
			minHeight: 80
		})],
		children: /* @__PURE__ */ _jsx("button", {
			mix: [css({
				background: "none",
				border: "none",
				cursor: "pointer",
				padding: 0
			}), on("click", () => {
				state = getNextState(state);
				handle.update();
			})],
			children: /* @__PURE__ */ _jsx(Badge, { state })
		})
	});
}
function Badge(handle) {
	let badgeEl;
	let prevState = null;
	return () => {
		let { state } = handle.props;
		// Trigger shake/scale animations on state change
		if (prevState !== null && prevState !== state) {
			handle.queueTask(() => {
				if (state === "error") {
					badgeEl.animate({ transform: [
						"translateX(0)",
						"translateX(-6px)",
						"translateX(6px)",
						"translateX(-6px)",
						"translateX(0)"
					] }, {
						duration: 300,
						easing: "ease-in-out",
						delay: 100
					});
				} else if (state === "success") {
					badgeEl.animate({ transform: [
						"scale(1)",
						"scale(1.2)",
						"scale(1)"
					] }, {
						duration: 300,
						easing: "ease-in-out"
					});
				}
			});
		}
		prevState = state;
		return /* @__PURE__ */ _jsxs("div", {
			mix: [ref((node) => badgeEl = node), css({
				backgroundColor: "#e2e8f0",
				color: "#0f1115",
				display: "flex",
				overflow: "hidden",
				alignItems: "center",
				justifyContent: "center",
				padding: "12px 20px",
				fontSize: 16,
				borderRadius: 999,
				willChange: "transform, filter",
				transition: `gap ${spring("snappy")}`
			})],
			style: { gap: state === "idle" ? "0px" : "8px" },
			children: [/* @__PURE__ */ _jsx(Icon, { state }), /* @__PURE__ */ _jsx(Label, { state })]
		});
	};
}
function Icon(handle) {
	return () => /* @__PURE__ */ _jsxs("span", {
		mix: [css({
			height: ICON_SIZE,
			position: "relative",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			overflow: "hidden",
			transition: `width ${spring({
				duration: 200,
				bounce: .2
			})}`
		})],
		style: { width: handle.props.state === "idle" ? 0 : ICON_SIZE },
		children: [
			handle.props.state === "processing" && /* @__PURE__ */ _jsx("span", {
				mix: [
					css({
						position: "absolute",
						left: 0,
						top: 0
					}),
					animateEntrance(iconEnterAnimation),
					animateExit(iconExitAnimation)
				],
				children: /* @__PURE__ */ _jsx(Loader, {})
			}, "loader"),
			handle.props.state === "success" && /* @__PURE__ */ _jsx("span", {
				mix: [
					css({
						position: "absolute",
						left: 0,
						top: 0
					}),
					animateEntrance(iconEnterAnimation),
					animateExit(iconExitAnimation)
				],
				children: /* @__PURE__ */ _jsx(Check, {})
			}, "check"),
			handle.props.state === "error" && /* @__PURE__ */ _jsx("span", {
				mix: [
					css({
						position: "absolute",
						left: 0,
						top: 0
					}),
					animateEntrance(iconEnterAnimation),
					animateExit(iconExitAnimation)
				],
				children: /* @__PURE__ */ _jsx(X, {})
			}, "x")
		]
	});
}
function Loader() {
	return () => /* @__PURE__ */ _jsx("div", {
		mix: [ref((node) => {
			node.animate({ transform: ["rotate(0deg)", "rotate(360deg)"] }, {
				duration: 1e3,
				iterations: Infinity
			});
		}), css({
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: ICON_SIZE,
			height: ICON_SIZE
		})],
		children: /* @__PURE__ */ _jsx("svg", {
			width: ICON_SIZE,
			height: ICON_SIZE,
			viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: STROKE_WIDTH,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ _jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
		})
	});
}
function Check() {
	return () => /* @__PURE__ */ _jsx("svg", {
		width: ICON_SIZE,
		height: ICON_SIZE,
		viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: STROKE_WIDTH,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ _jsx("polyline", {
			points: "4 12 9 17 20 6",
			mix: [ref((node) => {
				let length = node.getTotalLength();
				node.style.strokeDasharray = `${length}`;
				node.style.strokeDashoffset = `${length}`;
				node.animate({ strokeDashoffset: [length, 0] }, {
					...spring({
						duration: 300,
						bounce: .1
					}),
					fill: "forwards"
				});
			})]
		})
	});
}
function X() {
	return () => /* @__PURE__ */ _jsxs("svg", {
		width: ICON_SIZE,
		height: ICON_SIZE,
		viewBox: `0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: STROKE_WIDTH,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ _jsx("line", {
			x1: "6",
			y1: "6",
			x2: "18",
			y2: "18",
			mix: [ref((node) => {
				let length = node.getTotalLength();
				node.style.strokeDasharray = `${length}`;
				node.style.strokeDashoffset = `${length}`;
				node.animate({ strokeDashoffset: [length, 0] }, {
					...spring({
						duration: 300,
						bounce: .1
					}),
					fill: "forwards"
				});
			})]
		}), /* @__PURE__ */ _jsx("line", {
			x1: "18",
			y1: "6",
			x2: "6",
			y2: "18",
			mix: [ref((node) => {
				let length = node.getTotalLength();
				node.style.strokeDasharray = `${length}`;
				node.style.strokeDashoffset = `${length}`;
				node.animate({ strokeDashoffset: [length, 0] }, {
					...spring({
						duration: 300,
						bounce: .1
					}),
					delay: 100,
					fill: "forwards"
				});
			})]
		})]
	});
}
function Label(handle) {
	let measureEl;
	let labelWidth = 0;
	let labelHeight = 0;
	// Don't animate the label on initial render
	let isFirstRender = true;
	handle.queueTask(() => {
		isFirstRender = false;
	});
	return () => {
		let { state } = handle.props;
		// Measure label dimensions after render
		handle.queueTask(() => {
			if (measureEl) {
				let rect = measureEl.getBoundingClientRect();
				if (rect.width !== labelWidth || rect.height !== labelHeight) {
					labelWidth = rect.width;
					labelHeight = rect.height;
					handle.update();
				}
			}
		});
		let labelMix = [animateExit({
			transform: "translateY(20px)",
			opacity: 0,
			filter: "blur(10px)",
			duration: 200,
			easing: "ease-in-out"
		})];
		if (!isFirstRender) {
			labelMix.unshift(animateEntrance({
				transform: "translateY(-20px)",
				opacity: 0,
				filter: "blur(10px)",
				duration: 200,
				easing: "ease-in-out"
			}));
		}
		return /* @__PURE__ */ _jsxs("span", {
			mix: [css({
				position: "relative",
				display: "inline-block",
				transition: `width ${spring({
					duration: 200,
					bounce: .1
				})}`
			})],
			style: {
				width: labelWidth || "auto",
				height: labelHeight || "auto"
			},
			children: [
				/* @__PURE__ */ _jsx("span", {
					mix: [ref((node) => measureEl = node), css({
						position: "absolute",
						visibility: "hidden",
						whiteSpace: "nowrap"
					})],
					children: STATES[state]
				}),
				state === "idle" && /* @__PURE__ */ _jsx("span", {
					mix: [css({
						whiteSpace: "nowrap",
						position: "absolute",
						left: 0,
						top: 0
					}), ...labelMix],
					children: STATES.idle
				}, "idle"),
				state === "processing" && /* @__PURE__ */ _jsx("span", {
					mix: [css({
						whiteSpace: "nowrap",
						position: "absolute",
						left: 0,
						top: 0
					}), ...labelMix],
					children: STATES.processing
				}, "processing"),
				state === "success" && /* @__PURE__ */ _jsx("span", {
					mix: [css({
						whiteSpace: "nowrap",
						position: "absolute",
						left: 0,
						top: 0
					}), ...labelMix],
					children: STATES.success
				}, "success"),
				state === "error" && /* @__PURE__ */ _jsx("span", {
					mix: [css({
						whiteSpace: "nowrap",
						position: "absolute",
						left: 0,
						top: 0
					}), ...labelMix],
					children: STATES.error
				}, "error")
			]
		});
	};
}