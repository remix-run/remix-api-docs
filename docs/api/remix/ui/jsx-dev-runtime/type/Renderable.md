---
title: Renderable
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