import { Button } from "/assets/pkg/remix/src/ui/button.js";
import { css } from "/assets/pkg/remix/src/ui.js";
import { theme } from "/assets/pkg/remix/src/ui/theme.js";
import { jsx as _jsx, jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Button Component
* @description The Button component wraps the low-level style primitives and accepts a tone prop for quick theming.
* @layout center
* @order 2
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsxs("div", {
		mix: buttonRowCss,
		children: [
			/* @__PURE__ */ _jsx(Button, {
				tone: "primary",
				type: "submit",
				children: "Save"
			}),
			/* @__PURE__ */ _jsx(Button, {
				tone: "secondary",
				children: "Secondary"
			}),
			/* @__PURE__ */ _jsx(Button, {
				tone: "ghost",
				children: "Ghost"
			}),
			/* @__PURE__ */ _jsx(Button, {
				tone: "danger",
				children: "Delete"
			})
		]
	});
}
const buttonRowCss = css({
	display: "flex",
	alignItems: "center",
	gap: theme.space.sm
});