import { on } from "/assets/pkg/remix/src/ui.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Controlled and Uncontrolled Values
* @description Compares controlled props with uncontrolled DOM values across rerenders and remounts.
*/
export default function App(handle) {
	let controlledText = "hello";
	let controlledChecked = true;
	let controlledChoice = "alpha";
	let uncontrolledTextSnapshot = "type to update this";
	let uncontrolledCheckedSnapshot = true;
	let renderCount = 0;
	let uncontrolledVersion = 0;
	let rerender = () => {
		renderCount++;
		handle.update();
	};
	let resetControlled = () => {
		controlledText = "hello";
		controlledChecked = true;
		controlledChoice = "alpha";
		rerender();
	};
	let remountUncontrolled = () => {
		uncontrolledVersion++;
		uncontrolledTextSnapshot = "type to update this";
		uncontrolledCheckedSnapshot = true;
		rerender();
	};
	return () => /* @__PURE__ */ _jsxs("main", {
		style: {
			fontFamily: "system-ui, sans-serif",
			maxWidth: "860px",
			margin: "24px auto",
			padding: "0 16px",
			lineHeight: 1.45
		},
		children: [
			/* @__PURE__ */ _jsx("h1", { children: "Controlled vs Uncontrolled Values" }),
			/* @__PURE__ */ _jsxs("p", { children: ["Render count: ", /* @__PURE__ */ _jsx("strong", { children: renderCount })] }),
			/* @__PURE__ */ _jsxs("div", {
				style: {
					display: "flex",
					gap: "10px",
					marginBottom: "18px"
				},
				children: [
					/* @__PURE__ */ _jsx("button", {
						mix: [on("click", rerender)],
						children: "Force Re-render"
					}),
					/* @__PURE__ */ _jsx("button", {
						mix: [on("click", resetControlled)],
						children: "Reset Controlled"
					}),
					/* @__PURE__ */ _jsx("button", {
						mix: [on("click", remountUncontrolled)],
						children: "Remount Uncontrolled"
					})
				]
			}),
			/* @__PURE__ */ _jsxs("section", {
				style: {
					border: "1px solid #d0d7de",
					borderRadius: "8px",
					padding: "12px",
					marginBottom: "12px"
				},
				children: [
					/* @__PURE__ */ _jsx("h2", { children: "Controlled" }),
					/* @__PURE__ */ _jsx("p", { children: "These values come from component state. The text input allows everything except digits, and invalid input does not call update." }),
					/* @__PURE__ */ _jsxs("label", {
						style: {
							display: "block",
							marginBottom: "8px"
						},
						children: ["Text:", /* @__PURE__ */ _jsx("input", {
							style: { marginLeft: "8px" },
							value: controlledText,
							mix: [on("input", (event) => {
								let nextValue = event.currentTarget.value;
								if (/\d/.test(nextValue)) {
									return;
								}
								controlledText = nextValue;
								rerender();
							})]
						})]
					}),
					/* @__PURE__ */ _jsxs("label", {
						style: {
							display: "block",
							marginBottom: "8px"
						},
						children: [
							/* @__PURE__ */ _jsx("input", {
								type: "checkbox",
								checked: controlledChecked,
								mix: [on("change", (event) => {
									controlledChecked = event.currentTarget.checked;
									rerender();
								})]
							}),
							" ",
							"Checked"
						]
					}),
					/* @__PURE__ */ _jsxs("label", {
						style: {
							display: "block",
							marginBottom: "8px"
						},
						children: ["Choice:", /* @__PURE__ */ _jsxs("select", {
							style: { marginLeft: "8px" },
							value: controlledChoice,
							mix: [on("change", (event) => {
								controlledChoice = event.currentTarget.value;
								rerender();
							})],
							children: [
								/* @__PURE__ */ _jsx("option", {
									value: "alpha",
									children: "Alpha"
								}),
								/* @__PURE__ */ _jsx("option", {
									value: "beta",
									children: "Beta"
								}),
								/* @__PURE__ */ _jsx("option", {
									value: "gamma",
									children: "Gamma"
								})
							]
						})]
					}),
					/* @__PURE__ */ _jsxs("div", { children: [
						"State snapshot: text=",
						/* @__PURE__ */ _jsx("code", { children: JSON.stringify(controlledText) }),
						", checked=",
						/* @__PURE__ */ _jsx("code", { children: String(controlledChecked) }),
						", choice=",
						/* @__PURE__ */ _jsx("code", { children: JSON.stringify(controlledChoice) })
					] })
				]
			}),
			/* @__PURE__ */ _jsxs("section", {
				style: {
					border: "1px solid #d0d7de",
					borderRadius: "8px",
					padding: "12px"
				},
				children: [
					/* @__PURE__ */ _jsx("h2", { children: "Uncontrolled" }),
					/* @__PURE__ */ _jsxs("p", { children: [
						"These initialize from ",
						/* @__PURE__ */ _jsx("code", { children: "defaultValue/defaultChecked" }),
						" once and then keep their own DOM state."
					] }),
					/* @__PURE__ */ _jsxs("label", {
						style: {
							display: "block",
							marginBottom: "8px"
						},
						children: ["Text:", /* @__PURE__ */ _jsx("input", {
							style: { marginLeft: "8px" },
							defaultValue: "type to update this",
							mix: [on("input", (event) => {
								uncontrolledTextSnapshot = event.currentTarget.value;
								rerender();
							})]
						})]
					}),
					/* @__PURE__ */ _jsxs("label", {
						style: {
							display: "block",
							marginBottom: "8px"
						},
						children: [
							/* @__PURE__ */ _jsx("input", {
								type: "checkbox",
								defaultChecked: true,
								mix: [on("change", (event) => {
									uncontrolledCheckedSnapshot = event.currentTarget.checked;
									rerender();
								})]
							}),
							" ",
							"Checked"
						]
					}),
					/* @__PURE__ */ _jsxs("div", { children: [
						"Last DOM snapshot: text=",
						/* @__PURE__ */ _jsx("code", { children: JSON.stringify(uncontrolledTextSnapshot) }),
						", checked=",
						/* @__PURE__ */ _jsx("code", { children: String(uncontrolledCheckedSnapshot) })
					] })
				]
			}, `uncontrolled-${uncontrolledVersion}`)
		]
	});
}