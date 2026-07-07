import { css } from "/assets/pkg/remix/src/ui.js";
import button from "/assets/pkg/remix/src/ui/button.js";
import { Tabs, TabList, Tab, TabPanel } from "/assets/pkg/remix/src/ui/tabs.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Tabs Basic
* @description Styled tabs with controlled and uncontrolled state.
* @layout center
*/
export default function Example(handle) {
	let activeTab = "week";
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: tabsDemoCss,
		children: [/* @__PURE__ */ _jsxs(Tabs, {
			defaultActiveTab: "overview",
			children: [
				/* @__PURE__ */ _jsxs("div", {
					mix: tabsHeaderCss,
					children: [/* @__PURE__ */ _jsxs(TabList, {
						"aria-label": "Project sections",
						children: [
							/* @__PURE__ */ _jsx(Tab, {
								name: "overview",
								children: "Overview"
							}),
							/* @__PURE__ */ _jsx(Tab, {
								name: "activity",
								children: "Activity"
							}),
							/* @__PURE__ */ _jsx(Tab, {
								name: "settings",
								children: "Settings"
							})
						]
					}), /* @__PURE__ */ _jsx("button", {
						mix: button(),
						children: "New"
					})]
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "overview",
					children: "Project health, owner notes, and current milestones."
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "activity",
					children: "Recent commits, deploys, and review handoffs."
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "settings",
					children: "Visibility, notifications, and billing preferences."
				})
			]
		}), /* @__PURE__ */ _jsxs(Tabs, {
			activeTab,
			onActiveTabChange: (nextActiveTab) => {
				activeTab = nextActiveTab;
				void handle.update();
			},
			size: "lg",
			children: [
				/* @__PURE__ */ _jsxs("div", {
					mix: tabsHeaderCss,
					children: [/* @__PURE__ */ _jsxs(TabList, {
						"aria-label": "Report timeframe",
						children: [
							/* @__PURE__ */ _jsx(Tab, {
								name: "day",
								children: "Day"
							}),
							/* @__PURE__ */ _jsx(Tab, {
								name: "week",
								children: "Week"
							}),
							/* @__PURE__ */ _jsx(Tab, {
								name: "month",
								children: "Month"
							})
						]
					}), /* @__PURE__ */ _jsx("button", {
						mix: button({ size: "lg" }),
						children: "Share"
					})]
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "day",
					children: "Daily snapshot selected."
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "week",
					children: "Weekly trend selected."
				}),
				/* @__PURE__ */ _jsx(TabPanel, {
					name: "month",
					children: "Monthly rollup selected."
				})
			]
		})]
	});
}
const tabsDemoCss = css({
	display: "grid",
	gap: "28px",
	width: "28rem",
	maxWidth: "100%",
	fontFamily: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, sans-serif"
});
const tabsHeaderCss = css({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	gap: "10px"
});