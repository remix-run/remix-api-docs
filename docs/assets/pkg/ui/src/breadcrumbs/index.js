import { css } from "/assets/pkg/ui/src/index.js";
import { ChevronRightIcon } from "/assets/pkg/ui/src/shared/icons.js";
import { componentStyleValues as styles } from "/assets/pkg/ui/src/shared/style-values.js";
import { jsx as _jsx } from "/assets/pkg/ui/src/jsx-runtime.js";
const rootCss = css({ minWidth: 0 });
const listCss = css({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	gap: `${styles.space.xs} ${styles.space.sm}`,
	minWidth: 0,
	margin: 0,
	padding: 0,
	listStyle: "none"
});
const itemCss = css({
	display: "inline-flex",
	alignItems: "center",
	minWidth: 0
});
const separatorCss = css({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	width: styles.fontSize.sm,
	height: styles.fontSize.sm,
	color: styles.colors.text.muted
});
const linkCss = css({
	color: styles.colors.text.secondary,
	fontSize: styles.fontSize.sm,
	lineHeight: styles.lineHeight.normal,
	textDecoration: "none",
	whiteSpace: "nowrap",
	"&:hover": { color: styles.colors.text.primary }
});
const currentCss = css({
	color: styles.colors.text.primary,
	fontSize: styles.fontSize.sm,
	lineHeight: styles.lineHeight.normal,
	fontWeight: styles.fontWeight.medium,
	whiteSpace: "nowrap"
});
const textCss = css({
	color: styles.colors.text.secondary,
	fontSize: styles.fontSize.sm,
	lineHeight: styles.lineHeight.normal,
	whiteSpace: "nowrap"
});
export function Breadcrumbs(handle) {
	return () => {
		let { "aria-label": ariaLabel, items, separator, mix, ...navProps } = handle.props;
		let currentIndex = items.findIndex((item) => item.current);
		if (currentIndex === -1) {
			currentIndex = Math.max(0, items.length - 1);
		}
		let separatorContent = separator ?? /* @__PURE__ */ _jsx(ChevronRightIcon, {});
		return /* @__PURE__ */ _jsx("nav", {
			"aria-label": ariaLabel ?? "Breadcrumb",
			...navProps,
			mix: [rootCss, mix],
			children: /* @__PURE__ */ _jsx("ol", {
				mix: listCss,
				children: items.flatMap((item, index) => {
					let isCurrent = index === currentIndex;
					let content = isCurrent ? /* @__PURE__ */ _jsx("span", {
						"aria-current": "page",
						mix: currentCss,
						children: item.label
					}) : item.href ? /* @__PURE__ */ _jsx("a", {
						href: item.href,
						mix: linkCss,
						children: item.label
					}) : /* @__PURE__ */ _jsx("span", {
						mix: textCss,
						children: item.label
					});
					let nodes = [/* @__PURE__ */ _jsx("li", {
						mix: itemCss,
						children: content
					}, `item-${index}`)];
					if (index < items.length - 1) {
						nodes.push(/* @__PURE__ */ _jsx("li", {
							"aria-hidden": "true",
							mix: separatorCss,
							children: separatorContent
						}, `separator-${index}`));
					}
					return nodes;
				})
			})
		});
	};
}