import { on } from "/assets/pkg/remix/src/ui.js";
import { jsxs as _jsxs } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Basic Counter
* @description The smallest interactive Remix UI counter from the standalone demos.
*/
export default function App(handle) {
	let count = 0;
	return () => /* @__PURE__ */ _jsxs("button", {
		mix: [on("click", () => {
			count++;
			handle.update();
		})],
		children: ["Ye ol' counter: ", count]
	});
}