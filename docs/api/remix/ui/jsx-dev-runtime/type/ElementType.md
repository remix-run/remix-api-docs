---
title: ElementType
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/jsx.ts#L9
---

# ElementType

## Summary

Any valid element type accepted by JSX or import('./create-element.ts').createElement.
- `string` for host elements (e.g., 'div')
- `Function` for user components

## Signature

```ts
type ElementType = string | Function;

```