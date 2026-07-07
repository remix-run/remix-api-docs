import { css } from "/assets/pkg/remix/src/ui.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
export function Keyframes() {
	return () => /* @__PURE__ */ _jsx("div", {
		mix: [css({ padding: 60 })],
		children: /* @__PURE__ */ _jsx("div", { mix: [css({
			width: 100,
			height: 100,
			backgroundColor: "#888",
			borderRadius: 5,
			"@keyframes box-animation": {
				"0%": {
					transform: "scale(1) rotate(0deg)",
					borderRadius: "0%"
				},
				"13.33%": {
					transform: "scale(2) rotate(0deg)",
					borderRadius: "0%"
				},
				"33.33%": {
					transform: "scale(2) rotate(180deg)",
					borderRadius: "50%"
				},
				"53.33%": {
					transform: "scale(1) rotate(180deg)",
					borderRadius: "50%"
				},
				"66.67%": {
					transform: "scale(1) rotate(0deg)",
					borderRadius: "0%"
				},
				"100%": {
					transform: "scale(1) rotate(0deg)",
					borderRadius: "0%"
				}
			},
			animation: "box-animation 3s ease-in-out infinite"
		})] })
	});
}