import { Menu, MenuItem, onMenuSelect } from "/assets/pkg/remix/src/ui/menu.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Menu Event Bubbling
* @description Item-level handlers fire before the root handler, letting individual items intercept events while others bubble up.
* @layout center
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs(Menu, {
		label: "Project",
		menuLabel: "Project actions",
		mix: onMenuSelect((event) => {
			console.log("Menu root handler:", event.item);
		}),
		children: [
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "open",
				value: "open-project",
				children: "Open project"
			}),
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "rename",
				value: "rename-project",
				mix: onMenuSelect((event) => {
					console.log("Menu item handler:", event.item);
				}),
				children: "Rename project"
			}),
			/* @__PURE__ */ _jsx(MenuItem, {
				name: "duplicate",
				value: "duplicate-project",
				children: "Duplicate project"
			})
		]
	});
}