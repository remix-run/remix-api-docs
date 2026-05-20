---
title: AccordionSingleProps
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