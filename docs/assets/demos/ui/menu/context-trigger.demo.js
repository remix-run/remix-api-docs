import { css } from "/assets/pkg/remix/src/ui.js";
import * as menu from "/assets/pkg/remix/src/ui/menu.js";
import { MenuItem, MenuList, onMenuSelect, Submenu } from "/assets/pkg/remix/src/ui/menu.js";
import { separatorStyle } from "/assets/pkg/remix/src/ui/separator.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
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
				/* @__PURE__ */ _jsx("hr", { mix: separatorStyle }),
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
				/* @__PURE__ */ _jsx("hr", { mix: separatorStyle }),
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
	gap: theme.space.md
});
const fileCardCss = css({
	display: "grid",
	gridTemplateColumns: "auto minmax(0, 1fr)",
	alignItems: "center",
	gap: theme.space.md,
	width: "min(100%, 21rem)",
	padding: theme.space.md,
	border: `1px solid ${theme.colors.border.subtle}`,
	borderRadius: theme.radius.lg,
	backgroundColor: theme.surface.lvl1,
	color: theme.colors.text.primary,
	boxShadow: theme.shadow.xs,
	cursor: "context-menu",
	userSelect: "none",
	"&:focus-visible": {
		outline: `2px solid ${theme.colors.focus.ring}`,
		outlineOffset: "2px"
	}
});
const fileIconCss = css({
	display: "inline-grid",
	placeItems: "center",
	width: theme.control.height.lg,
	height: theme.control.height.lg,
	borderRadius: theme.radius.md,
	backgroundColor: theme.colors.action.primary.background,
	color: theme.colors.action.primary.foreground,
	fontSize: theme.fontSize.xs,
	fontWeight: theme.fontWeight.bold
});
const fileTextCss = css({
	display: "grid",
	gap: theme.space.px,
	minWidth: 0
});
const fileNameCss = css({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.normal
});
const fileMetaCss = css({
	color: theme.colors.text.secondary,
	fontSize: theme.fontSize.xs,
	lineHeight: theme.lineHeight.normal
});
const statusCss = css({
	margin: 0,
	minHeight: theme.lineHeight.normal,
	color: theme.colors.text.secondary,
	fontSize: theme.fontSize.sm,
	lineHeight: theme.lineHeight.normal
});