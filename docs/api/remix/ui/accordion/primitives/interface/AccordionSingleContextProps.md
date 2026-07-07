---
title: AccordionSingleContextProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/accordion/primitives.tsx#L94
---

# AccordionSingleContextProps

## Signature

```ts
interface AccordionSingleContextProps {
  children?: RemixNode;
  collapsible?: boolean;
  defaultValue?: AccordionSingleValue;
  disabled?: boolean;
  headingLevel?: AccordionHeadingLevel;
  onValueChange?: (value: AccordionSingleValue) => void;
  type?: "single";
  value?: AccordionSingleValue;
}

```