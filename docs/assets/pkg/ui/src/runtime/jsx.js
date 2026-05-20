import { createRemixElement } from "/assets/pkg/ui/src/runtime/core/vnode.js";
export function jsx(type, props, key) {
	return createRemixElement(type, props, key);
}
export { jsx as jsxDEV, jsx as jsxs };