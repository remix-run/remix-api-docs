import { css } from "/assets/pkg/remix/src/ui.js";
import { MenuItem, MenuList, Submenu } from "/assets/pkg/remix/src/ui/menu.js";
import * as menu from "/assets/pkg/remix/src/ui/menu/primitives.js";
import { onMenuSelect } from "/assets/pkg/remix/src/ui/menu/primitives.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
const actionLabelByName = {
	copyPath: "Copied path",
	duplicate: "Duplicated file",
	move: "Moved file",
	rename: "Renamed file",
	reveal: "Revealed in Finder",
	trash: "Moved to trash"
};
/**
* @name Context Menu Trigger
* @description A lower-level menu composition that opens from right-click coordinates while keeping standard menu selection and submenu behavior.
* @layout center
*/
export default function Example(handle) {
	let latestAction = "Right-click the card.";
	return () => /* @__PURE__ */ _jsxs(menu.Context, {
		label: "File actions",
		children: [/* @__PURE__ */ _jsxs("div", {
			mix: layoutCss,
			children: [/* @__PURE__ */ _jsxs("div", {
				tabIndex: 0,
				mix: [fileCardCss, menu.contextTrigger()],
				children: [/* @__PURE__ */ _jsx("span", {
					mix: fileIconCss,
					children: "TS"
				}), /* @__PURE__ */ _jsxs("span", {
					mix: fileTextCss,
					children: [/* @__PURE__ */ _jsx("strong", {
						mix: fileNameCss,
						children: "context-menu.js"
					}), /* @__PURE__ */ _jsx("span", {
						mix: fileMetaCss,
						children: "Right-click or press Shift+F10"
					})]
				})]
			}), /* @__PURE__ */ _jsx("p", {
				"aria-live": "polite",
				mix: statusCss,
				children: latestAction
			})]
		}), /* @__PURE__ */ _jsxs(MenuList, {
			mix: onMenuSelect((event) => {
				latestAction = actionLabelByName[event.item.name] ?? `Selected ${event.item.label}`;
				void handle.update();
			}),
			children: [
				/* @__PURE__ */ _jsx(MenuItem, {
					name: "rename",
					children: "Rename"
				}),
				/* @__PURE__ */ _jsx(MenuItem, {
					name: "duplicate",
					children: "Duplicate"
				}),
				/* @__PURE__ */ _jsx(MenuItem, {
					name: "copyPath",
					children: "Copy path"
				}),
				/* @__PURE__ */ _jsx("hr", { mix: separatorCss }),
				/* @__PURE__ */ _jsxs(Submenu, {
					label: "Move to",
					children: [/* @__PURE__ */ _jsx(MenuItem, {
						name: "move",
						value: "drafts",
						children: "Drafts"
					}), /* @__PURE__ */ _jsx(MenuItem, {
						name: "move",
						value: "archive",
						children: "Archive"
					})]
				}),
				/* @__PURE__ */ _jsx(MenuItem, {
					name: "reveal",
					children: "Reveal in Finder"
				}),
				/* @__PURE__ */ _jsx("hr", { mix: separatorCss }),
				/* @__PURE__ */ _jsx(MenuItem, {
					name: "trash",
					children: "Move to trash"
				})
			]
		})]
	});
}
const layoutCss = css({
	display: "grid",
	justifyItems: "start",
	gap: "12px"
});
const separatorCss = css({
	marginBlock: "4px",
	marginInline: "8px",
	border: 0,
	borderTop: "1px solid #e7e7e7"
});
const fileCardCss = css({
	display: "grid",
	gridTemplateColumns: "auto minmax(0, 1fr)",
	alignItems: "center",
	gap: "12px",
	width: "min(100%, 21rem)",
	padding: "12px",
	border: "1px solid #e7e7e7",
	borderRadius: "12px",
	backgroundColor: "#f8f8f8",
	color: "#151515",
	boxShadow: "0 1px 1px rgb(0 0 0 / 0.05)",
	cursor: "context-menu",
	userSelect: "none",
	"&:focus-visible": {
		outline: "2px solid #1A72FF",
		outlineOffset: "2px"
	}
});
const fileIconCss = css({
	display: "inline-grid",
	placeItems: "center",
	width: "36px",
	height: "36px",
	borderRadius: "8px",
	backgroundColor: "#1A72FF",
	color: "rgb(255 255 255 / 0.92)",
	fontSize: "12px",
	fontWeight: "700"
});
const fileTextCss = css({
	display: "grid",
	gap: "1px",
	minWidth: 0
});
const fileNameCss = css({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	fontSize: "13px",
	lineHeight: "1.45"
});
const fileMetaCss = css({
	color: "#4f4f4f",
	fontSize: "12px",
	lineHeight: "1.45"
});
const statusCss = css({
	margin: 0,
	minHeight: "1.45em",
	color: "#4f4f4f",
	fontSize: "13px",
	lineHeight: "1.45"
});