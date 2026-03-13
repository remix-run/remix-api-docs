---
title: Renderable
---

# Renderable

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/jsx.ts#L36" target="_blank">View Source</a>

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