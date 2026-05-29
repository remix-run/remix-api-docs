import { Menu, MenuItem, onMenuSelect, Submenu } from "/assets/pkg/remix/src/ui/menu.js";
import { separatorStyle } from "/assets/pkg/remix/src/ui/separator.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Menu Overview
* @description A hierarchical menu with checkboxes, radio groups, submenus, and separators.
* @layout center
*/
export default function Example(handle) {
	let wordWrap = true;
	let minimap = false;
	let showGutter = true;
	let density = "comfortable";
	return () => /* @__PURE__ */ _jsxs(Menu, {
		label: "View",
		menuLabel: "View options",
		mix: onMenuSelect((event) => {
			switch (event.item.name) {
				case "wordWrap":
					wordWrap = !wordWrap;
					break;
				case "minimap":
					minimap = !minimap;
					break;
				case "showGutter":
					showGutter = !showGutter;
					break;
				case "density":
					density = event.item.value;
					break;
			}
			handle.update();
		}),
		children: [
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "wordWrap",
				type: "checkbox",
				checked: wordWrap,
				children: "Word wrap"
			}),
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "minimap",
				type: "checkbox",
				checked: minimap,
				children: "Minimap"
			}),
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "showGutter",
				type: "checkbox",
				checked: showGutter,
				children: "Show gutter"
			}),
			/* @__PURE__ */ _jsx("hr", { mix: separatorStyle }),
			/* @__PURE__ */ _jsxs(Submenu, {
				label: "Zoom",
				children: [
					/* @__PURE__ */ _jsx(MenuItem, {
						name: "zoomIn",
						value: "zoom-in",
						children: "Zoom In"
					}),
					/* @__PURE__ */ _jsx(MenuItem, {
						name: "zoomOut",
						value: "zoom-out",
						children: "Zoom Out"
					}),
					/* @__PURE__ */ _jsx(MenuItem, {
						name: "resetZoom",
						value: "reset-zoom",
						children: "Reset Zoom"
					})
				]
			}),
			/* @__PURE__ */ _jsxs(Submenu, {
				label: "Density",
				children: [/* @__PURE__ */ _jsx(MenuItem, {
					name: "density",
					type: "radio",
					value: "comfortable",
					checked: density === "comfortable",
					children: "Comfortable"
				}), /* @__PURE__ */ _jsx(MenuItem, {
					name: "density",
					type: "radio",
					value: "compact",
					checked: density === "compact",
					children: "Compact"
				})]
			})
		]
	});
}