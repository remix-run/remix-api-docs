import { css, on } from "/assets/pkg/remix/src/ui.js";
import { DefaultAnimate } from "/assets/demos/ui/animation/demos/default-animate.js";
import { EnterAnimation } from "/assets/demos/ui/animation/demos/enter.js";
import { ExitAnimation } from "/assets/demos/ui/animation/demos/exit.js";
import { Press } from "/assets/demos/ui/animation/demos/press.js";
import { HTMLContent } from "/assets/demos/ui/animation/demos/html-content.js";
import { Keyframes } from "/assets/demos/ui/animation/demos/keyframes.js";
import { InterruptibleKeyframes } from "/assets/demos/ui/animation/demos/interruptible-keyframes.js";
import { RollingSquare } from "/assets/demos/ui/animation/demos/rolling-square.js";
import { Rotate } from "/assets/demos/ui/animation/demos/rotate.js";
import { TransitionOptions } from "/assets/demos/ui/animation/demos/transition-options.js";
import { Cube } from "/assets/demos/ui/animation/demos/cube.js";
import { SharedLayout } from "/assets/demos/ui/animation/demos/shared-layout.js";
import { AspectRatio } from "/assets/demos/ui/animation/demos/aspect-ratio.js";
import { BouncySwitch } from "/assets/demos/ui/animation/demos/bouncy-switch.js";
import { ColorInterpolation } from "/assets/demos/ui/animation/demos/color-interpolation.js";
import { FlipToggle } from "/assets/demos/ui/animation/demos/flip-toggle.js";
import { Reordering } from "/assets/demos/ui/animation/demos/reordering.js";
import { MultiStateBadge } from "/assets/demos/ui/animation/demos/multi-state-badge.js";
import { HoldToConfirm } from "/assets/demos/ui/animation/demos/hold-to-confirm.js";
import { MaterialRipple } from "/assets/demos/ui/animation/demos/material-ripple.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
function Tile(handle) {
	let remountKey = 0;
	return () => {
		let { title, children, notes } = handle.props;
		return /* @__PURE__ */ _jsxs("div", {
			mix: [css({
				backgroundColor: "white",
				padding: "40px",
				borderRadius: 12,
				boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				gap: 12,
				position: "relative"
			})],
			children: [
				/* @__PURE__ */ _jsx("button", {
					mix: [css({
						position: "absolute",
						bottom: 8,
						right: 8,
						width: 18,
						height: 18,
						padding: 0,
						border: "none",
						background: "transparent",
						cursor: "pointer",
						opacity: .4,
						"&:hover": { opacity: 1 }
					}), on("click", () => {
						remountKey++;
						handle.update();
					})],
					title: "Replay animation",
					children: /* @__PURE__ */ _jsxs("svg", {
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: [/* @__PURE__ */ _jsx("path", { d: "M1 4v6h6M23 20v-6h-6" }), /* @__PURE__ */ _jsx("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })]
					})
				}),
				/* @__PURE__ */ _jsx("h3", {
					mix: [css({ margin: 0 })],
					children: title
				}),
				/* @__PURE__ */ _jsx("div", {
					mix: [css({
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minHeight: 280
					})],
					children
				}, remountKey),
				notes && /* @__PURE__ */ _jsx("p", {
					mix: [css({
						margin: 0,
						fontSize: 12,
						color: "#666",
						textAlign: "center",
						maxWidth: "200px"
					})],
					children: notes
				})
			]
		});
	};
}
/**
* @name Animation Gallery
* @description A collection of motion and animation experiments adapted from the standalone demos.
*/
export default function AnimationGallery() {
	return () => /* @__PURE__ */ _jsxs(_Fragment, { children: [
		/* @__PURE__ */ _jsx("h1", {
			mix: [css({
				marginBottom: 0,
				"& + p": { marginTop: 0 }
			})],
			children: "Animations"
		}),
		/* @__PURE__ */ _jsxs("p", { children: [
			"Most animations are adapted from ",
			/* @__PURE__ */ _jsx("a", {
				href: "https://www.motion.dev",
				children: "Motion"
			}),
			". Thank you for your work ",
			/* @__PURE__ */ _jsx("a", {
				href: "https://motion.dev/@matt",
				children: "Matt Perry"
			}),
			"!"
		] }),
		/* @__PURE__ */ _jsxs("div", {
			mix: [css({
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
				gap: 24,
				marginTop: 40
			})],
			children: [
				/* @__PURE__ */ _jsx(Tile, {
					title: "Default Animate",
					notes: "animateEntrance + animateLayout defaults",
					children: /* @__PURE__ */ _jsx(DefaultAnimate, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Rolling Square",
					notes: "CSS transition with spring() timing function",
					children: /* @__PURE__ */ _jsx(RollingSquare, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Enter Animation",
					notes: "animateEntrance() with spring physics",
					children: /* @__PURE__ */ _jsx(EnterAnimation, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Exit Animation",
					notes: "animateEntrance() + animateExit()",
					children: /* @__PURE__ */ _jsx(ExitAnimation, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Press Interaction",
					notes: "CSS transition + pointer/keyboard events",
					children: /* @__PURE__ */ _jsx(Press, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "HTML Content",
					notes: "rAF loop with spring iterator for text",
					children: /* @__PURE__ */ _jsx(HTMLContent, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Keyframes",
					notes: "CSS @keyframes with infinite loop",
					children: /* @__PURE__ */ _jsx(Keyframes, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Interruptible Keyframes",
					notes: "Web Animations API with commitStyles()",
					children: /* @__PURE__ */ _jsx(InterruptibleKeyframes, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Rotate",
					notes: "CSS @keyframes (one-shot)",
					children: /* @__PURE__ */ _jsx(Rotate, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Transition Options",
					notes: "animateEntrance() with cubic-bezier + delay",
					children: /* @__PURE__ */ _jsx(TransitionOptions, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "3D Cube",
					notes: "rAF loop with direct style manipulation",
					children: /* @__PURE__ */ _jsx(Cube, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Shared Layout",
					notes: "CSS Grid overlap for simultaneous enter/exit",
					children: /* @__PURE__ */ _jsx(SharedLayout, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Aspect Ratio",
					children: /* @__PURE__ */ _jsx(AspectRatio, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Bouncy Switch",
					notes: "Spring up, bounce down with CSS linear()",
					children: /* @__PURE__ */ _jsx(BouncySwitch, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "FLIP Toggle",
					notes: "animateLayout() with interruptible WAAPI",
					children: /* @__PURE__ */ _jsx(FlipToggle, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Reordering",
					notes: "animateLayout() with auto-shuffling list",
					children: /* @__PURE__ */ _jsx(Reordering, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Color Interpolation",
					notes: "sRGB vs OKLCH color space",
					children: /* @__PURE__ */ _jsx(ColorInterpolation, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Multi-State Badge",
					notes: "Animated icon/label swap with WAAPI shake",
					children: /* @__PURE__ */ _jsx(MultiStateBadge, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Hold to Confirm",
					notes: "Custom interaction with progress tracking",
					children: /* @__PURE__ */ _jsx(HoldToConfirm, {})
				}),
				/* @__PURE__ */ _jsx(Tile, {
					title: "Material Ripple",
					notes: "Pointer-tracked ripples with enter/exit animations",
					children: /* @__PURE__ */ _jsx(MaterialRipple, {})
				})
			]
		})
	] });
}