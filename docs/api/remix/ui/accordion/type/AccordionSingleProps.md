---
title: AccordionSingleProps
---

# AccordionSingleProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/accordion/accordion.tsx#L61" target="_blank">View Source</a>

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