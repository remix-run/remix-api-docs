import { invariant } from "/assets/pkg/ui/src/runtime/invariant.js";
import { createStyleManager } from "/assets/pkg/ui/src/style/index.js";
let globalStyleManager = typeof window !== "undefined" ? createStyleManager() : null;
export { patchHostProps as diffHostProps } from "/assets/pkg/ui/src/runtime/core/props.js";
export let defaultStyleManager = globalStyleManager;
/**
* Reset the global style state. For testing only - not exported from index.ts.
*/
export function resetStyleState() {
	invariant(typeof window !== "undefined", "resetStyleState() is only available in a browser environment");
	globalStyleManager.dispose();
	globalStyleManager = createStyleManager();
	defaultStyleManager = globalStyleManager;
}