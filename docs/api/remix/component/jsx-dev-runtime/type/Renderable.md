---
title: Renderable
---

# Renderable

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/jsx.ts#L36" target="_blank">View Source</a>

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