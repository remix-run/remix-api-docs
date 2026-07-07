---
title: AccordionSingleProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/accordion/index.tsx#L21
---

# AccordionSingleProps

## Signature

```ts
type AccordionSingleProps = AccordionBaseProps & {
  collapsible?: boolean;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  type?: "single";
  value?: string | null;
};

```