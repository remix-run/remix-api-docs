import { Breadcrumbs } from "/assets/pkg/remix/src/ui/breadcrumbs.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Breadcrumbs with Separator
* @description Pass a custom separator string to override the default chevron icon.
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsx(Breadcrumbs, {
		items: [
			{
				href: "/",
				label: "Workspace"
			},
			{
				href: "/projects",
				label: "Projects"
			},
			{ label: "RMX_01" }
		],
		separator: "/"
	});
}