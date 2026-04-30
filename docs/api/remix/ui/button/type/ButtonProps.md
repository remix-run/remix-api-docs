---
title: ButtonProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/button/button.tsx#L113
---

# ButtonProps

## Signature

```ts
type ButtonProps = Omit<Props<"button">, "children"> & {
  children?: RemixNode;
  endIcon?: RemixNode;
  startIcon?: RemixNode;
  tone?: ButtonTone;
};

```