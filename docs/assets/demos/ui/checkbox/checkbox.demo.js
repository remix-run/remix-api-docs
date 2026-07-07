import { css, on } from "/assets/pkg/remix/src/ui.js";
import checkbox from "/assets/pkg/remix/src/ui/checkbox.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Checkbox Basic
* @description The checkbox mixin applies small or large checkbox styling to native inputs.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: checkboxDemoCss,
		children: [/* @__PURE__ */ _jsxs("section", {
			mix: sectionCss,
			children: [
				/* @__PURE__ */ _jsx("h2", {
					mix: sectionLabelCss,
					children: "Styled input mixin"
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: headerCss,
					children: [
						/* @__PURE__ */ _jsx("span", {}),
						/* @__PURE__ */ _jsx("span", {
							mix: labelCss,
							children: "Medium"
						}),
						/* @__PURE__ */ _jsx("span", {
							mix: labelCss,
							children: "Large"
						}),
						/* @__PURE__ */ _jsx("span", {
							mix: labelCss,
							children: "Disabled md"
						}),
						/* @__PURE__ */ _jsx("span", {
							mix: labelCss,
							children: "Disabled lg"
						})
					]
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: rowCss,
					children: [
						/* @__PURE__ */ _jsx("span", {
							mix: stateLabelCss,
							children: "Unchecked"
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Unchecked medium",
							mix: checkbox()
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Unchecked large",
							mix: checkbox({ size: "lg" })
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Unchecked medium disabled",
							disabled: true,
							mix: checkbox()
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Unchecked large disabled",
							disabled: true,
							mix: checkbox({ size: "lg" })
						})
					]
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: rowCss,
					children: [
						/* @__PURE__ */ _jsx("span", {
							mix: stateLabelCss,
							children: "Checked"
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Checked medium",
							defaultChecked: true,
							mix: checkbox()
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Checked large",
							defaultChecked: true,
							mix: checkbox({ size: "lg" })
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Checked medium disabled",
							defaultChecked: true,
							disabled: true,
							mix: checkbox()
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Checked large disabled",
							defaultChecked: true,
							disabled: true,
							mix: checkbox({ size: "lg" })
						})
					]
				}),
				/* @__PURE__ */ _jsxs("div", {
					mix: rowCss,
					children: [
						/* @__PURE__ */ _jsx("span", {
							mix: stateLabelCss,
							children: "Mixed"
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Mixed medium",
							indeterminate: true,
							mix: checkbox({ state: "mixed" })
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Mixed large",
							indeterminate: true,
							mix: checkbox({
								size: "lg",
								state: "mixed"
							})
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Mixed medium disabled",
							disabled: true,
							indeterminate: true,
							mix: checkbox({ state: "mixed" })
						}),
						/* @__PURE__ */ _jsx("input", {
							"aria-label": "Mixed large disabled",
							disabled: true,
							indeterminate: true,
							mix: checkbox({
								size: "lg",
								state: "mixed"
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ _jsxs("section", {
			mix: sectionCss,
			children: [/* @__PURE__ */ _jsx("h2", {
				mix: sectionLabelCss,
				children: "Group state in app code"
			}), /* @__PURE__ */ _jsx(PermissionsGroup, {})]
		})]
	});
}
const permissionItems = [
	{
		label: "Read",
		value: "read"
	},
	{
		label: "Write",
		value: "write"
	},
	{
		label: "Deploy",
		value: "deploy"
	}
];
function PermissionsGroup(handle) {
	let selectedPermissions = new Set(["read", "write"]);
	function getParentState() {
		if (selectedPermissions.size === 0) {
			return "unchecked";
		}
		return permissionItems.every((item) => selectedPermissions.has(item.value)) ? "checked" : "mixed";
	}
	function setSelectedPermissions(nextSelectedPermissions) {
		selectedPermissions = nextSelectedPermissions;
		void handle.update();
	}
	return () => {
		let parentState = getParentState();
		return /* @__PURE__ */ _jsxs("fieldset", {
			"aria-labelledby": "permissions-label",
			mix: groupCss,
			children: [
				/* @__PURE__ */ _jsx("legend", {
					id: "permissions-label",
					mix: stateLabelCss,
					children: "Permissions"
				}),
				/* @__PURE__ */ _jsxs("label", {
					mix: optionCss,
					children: [/* @__PURE__ */ _jsx("input", {
						checked: parentState === "checked",
						indeterminate: parentState === "mixed",
						mix: [checkbox({ state: parentState }), on("change", (event) => {
							setSelectedPermissions(event.currentTarget.checked ? new Set(permissionItems.map((item) => item.value)) : new Set());
						})]
					}), "All permissions"]
				}),
				/* @__PURE__ */ _jsx("div", {
					mix: nestedOptionsCss,
					children: permissionItems.map((item) => /* @__PURE__ */ _jsxs("label", {
						mix: optionCss,
						children: [/* @__PURE__ */ _jsx("input", {
							checked: selectedPermissions.has(item.value),
							mix: [checkbox(), on("change", (event) => {
								let nextSelectedPermissions = new Set(selectedPermissions);
								if (event.currentTarget.checked) {
									nextSelectedPermissions.add(item.value);
								} else {
									nextSelectedPermissions.delete(item.value);
								}
								setSelectedPermissions(nextSelectedPermissions);
							})],
							name: "permissions",
							value: item.value
						}), item.label]
					}, item.value))
				})
			]
		});
	};
}
const checkboxDemoCss = css({
	display: "grid",
	gap: "28px",
	width: "min(100%, 34rem)"
});
const sectionCss = css({
	display: "grid",
	gap: "12px"
});
const sectionLabelCss = css({
	margin: 0,
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "12px",
	lineHeight: "16px",
	fontWeight: 650,
	letterSpacing: 0,
	color: "rgba(16, 16, 16, 0.72)"
});
const headerCss = css({
	display: "grid",
	gridTemplateColumns: "6.5rem repeat(4, minmax(4.25rem, 1fr))",
	alignItems: "end",
	gap: "14px"
});
const rowCss = css({
	display: "grid",
	gridTemplateColumns: "6.5rem repeat(4, minmax(4.25rem, 1fr))",
	alignItems: "center",
	gap: "14px",
	minHeight: "32px"
});
const labelCss = css({
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "11px",
	lineHeight: "14px",
	fontWeight: 600,
	letterSpacing: 0,
	color: "rgba(16, 16, 16, 0.58)"
});
const stateLabelCss = css({
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 600,
	letterSpacing: 0,
	color: "#101010"
});
const groupCss = css({
	display: "grid",
	gap: "8px",
	margin: 0,
	padding: 0,
	border: 0
});
const optionCss = css({
	display: "flex",
	alignItems: "center",
	gap: "8px",
	minHeight: "28px",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif",
	fontSize: "13px",
	lineHeight: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	color: "#101010"
});
const nestedOptionsCss = css({
	display: "grid",
	gap: "6px",
	paddingLeft: "24px"
});