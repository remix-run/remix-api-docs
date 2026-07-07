import { css } from "/assets/pkg/remix/src/ui.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function Rotate() {
	return () => /* @__PURE__ */ _jsx("div", { mix: [css({
		width: 100,
		height: 100,
		backgroundColor: "#ff0088",
		borderRadius: 5,
		"@keyframes rotate-demo": {
			"0%": { transform: "rotate(0deg)" },
			"100%": { transform: "rotate(360deg)" }
		},
		animation: `rotate-demo 1s ease-in-out 1`
	})] });
}