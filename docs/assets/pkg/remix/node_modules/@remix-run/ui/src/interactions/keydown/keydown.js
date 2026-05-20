import { createMixin, on } from "/assets/pkg/ui/src/index.js";
export const onKeyDown = createMixin(() => (key, handler) => on("keydown", (event) => {
	if (event.key === key) {
		event.preventDefault();
		handler(event);
	}
}));