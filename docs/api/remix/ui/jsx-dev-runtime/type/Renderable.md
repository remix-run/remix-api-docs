---
title: Renderable
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/jsx.ts#L36
---

# Renderable

## Summary

Any single value Remix can render. Booleans render as empty text.

## Signature

```ts
type Renderable =
  | RemixElement
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;

```