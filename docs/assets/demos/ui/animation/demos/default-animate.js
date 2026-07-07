import { css, on } from "/assets/pkg/remix/src/ui.js";
import { animateEntrance, animateLayout } from "/assets/pkg/remix/src/ui/animation.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
let nextId = 1;
function createItem() {
	return {
		id: nextId++,
		label: `Item ${nextId - 1}`
	};
}
export function DefaultAnimate(handle) {
	let items = [createItem(), createItem()];
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: [css({
			display: "flex",
			flexDirection: "column",
			gap: 10,
			width: 200,
			alignSelf: "flex-start"
		})],
		children: [/* @__PURE__ */ _jsxs("div", {
			mix: [css({
				display: "flex",
				gap: 8,
				marginBottom: 8
			})],
			children: [/* @__PURE__ */ _jsx("button", {
				mix: [css({
					flex: 1,
					padding: "8px 12px",
					border: "none",
					borderRadius: 6,
					backgroundColor: "#10b981",
					color: "white",
					cursor: "pointer",
					fontWeight: 500,
					"&:hover": { backgroundColor: "#059669" }
				}), on("click", () => {
					items.unshift(createItem());
					handle.update();
				})],
				children: "Add"
			}), /* @__PURE__ */ _jsx("button", {
				mix: [css({
					flex: 1,
					padding: "8px 12px",
					border: "none",
					borderRadius: 6,
					backgroundColor: "#6366f1",
					color: "white",
					cursor: "pointer",
					fontWeight: 500,
					"&:hover": { backgroundColor: "#4f46e5" }
				}), on("click", () => {
					// Shuffle the array
					for (let i = items.length - 1; i > 0; i--) {
						let j = Math.floor(Math.random() * (i + 1));
						[items[i], items[j]] = [items[j], items[i]];
					}
					handle.update();
				})],
				children: "Shuffle"
			})]
		}), items.map((item) => /* @__PURE__ */ _jsxs("div", {
			mix: [
				animateEntrance(),
				animateLayout(),
				css({
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "12px 16px",
					backgroundColor: "#f1f5f9",
					borderRadius: 8,
					fontSize: 14,
					fontWeight: 500,
					color: "#334155"
				})
			],
			children: [/* @__PURE__ */ _jsx("span", { children: item.label }), /* @__PURE__ */ _jsx("button", {
				mix: [css({
					width: 20,
					height: 20,
					padding: 0,
					border: "none",
					borderRadius: 4,
					backgroundColor: "transparent",
					color: "#94a3b8",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"&:hover": {
						backgroundColor: "#e2e8f0",
						color: "#64748b"
					}
				}), on("click", () => {
					items = items.filter((i) => i.id !== item.id);
					handle.update();
				})],
				children: /* @__PURE__ */ _jsx("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2.5",
					children: /* @__PURE__ */ _jsx("path", { d: "M18 6L6 18M6 6l12 12" })
				})
			})]
		}, item.id))]
	});
}