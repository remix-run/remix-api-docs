---
title: AccordionItemProps
---

# AccordionItemProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/accordion/accordion.tsx#L78" target="_blank">View Source</a>

## Signature

```ts
type AccordionItemProps = Omit<Props<"div">, "children"> & {
  children?: RemixNode;
  disabled?: boolean;
  value: string;
};

```