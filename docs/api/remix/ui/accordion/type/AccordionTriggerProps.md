---
title: AccordionTriggerProps
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