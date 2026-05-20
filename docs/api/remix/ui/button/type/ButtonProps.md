---
title: ButtonProps
---

# ButtonProps

## Summary

Props accepted by the [`Button`](/api/remix/ui/button/function/Button/) component.

Extends the native `<button>` element props with optional icon slots and a
tone variant

## Signature

```ts
type ButtonProps = Omit<Props<"button">, "children"> & {
  children?: RemixNode;
  endIcon?: RemixNode;
  startIcon?: RemixNode;
  tone?: ButtonTone;
};

```