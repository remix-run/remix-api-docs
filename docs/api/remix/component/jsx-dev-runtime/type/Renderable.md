---
title: Renderable
---

# Renderable

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/jsx.ts#L32" target="_blank">View Source</a>

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