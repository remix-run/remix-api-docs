import { Breadcrumbs } from "/assets/pkg/remix/src/ui/breadcrumbs.js";
import { jsx as _jsx } from "/assets/pkg/remix/src/ui/jsx-runtime.js";
/**
* @name Breadcrumbs Basic
* @description A basic breadcrumb trail linking back through the page hierarchy.
*/
export default function Example() {
	return () => /* @__PURE__ */ _jsx(Breadcrumbs, { items: [
		{
			href: "/",
			label: "Home"
		},
		{
			href: "/components",
			label: "Components"
		},
		{ label: "Breadcrumbs" }
	] });
}