---
title: Renderable
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/jsx.ts#L36
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