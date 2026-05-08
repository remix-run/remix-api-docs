---
title: AccordionItemProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/accordion/accordion.tsx#L78
---

# AccordionItemProps

## Signature

```ts
type AccordionItemProps = Omit<Props<"div">, "children"> & {
  children?: RemixNode;
  disabled?: boolean;
  value: string;
};

```