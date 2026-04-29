---
title: ButtonProps
---

# ButtonProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/components/button/button.tsx#L113" target="_blank">View Source</a>

## Signature

```ts
type ButtonProps = Omit<Props<"button">, "children"> & {
  children?: RemixNode;
  endIcon?: RemixNode;
  startIcon?: RemixNode;
  tone?: ButtonTone;
};

```