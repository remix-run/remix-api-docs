---
title: AccordionTriggerProps
---

# AccordionTriggerProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/accordion/accordion.tsx#L84" target="_blank">View Source</a>

## Signature

```ts
type AccordionTriggerProps = Omit<Props<"button">, "children" | "type"> & {
  children?: RemixNode;
  indicator?: RemixNode | null;
  type?: "button" | "submit" | "reset";
};

```