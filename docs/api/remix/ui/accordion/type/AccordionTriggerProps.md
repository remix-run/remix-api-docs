---
title: AccordionTriggerProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/components/accordion/accordion.tsx#L84
---

# AccordionTriggerProps

## Signature

```ts
type AccordionTriggerProps = Omit<Props<"button">, "children" | "type"> & {
  children?: RemixNode;
  indicator?: RemixNode | null;
  type?: "button" | "submit" | "reset";
};

```