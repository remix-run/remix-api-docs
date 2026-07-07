---
title: AccordionTriggerProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/accordion/primitives.tsx#L131
---

# AccordionTriggerProps

## Signature

```ts
type AccordionTriggerProps = Omit<Props<"button">, "children" | "type"> &
  AccordionTriggerOptions & {
    children?: RemixNode;
    type?: "button" | "submit" | "reset";
  };

```