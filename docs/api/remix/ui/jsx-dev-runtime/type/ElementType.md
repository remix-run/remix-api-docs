---
title: ElementType
---

# ElementType

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/jsx.ts#L9" target="_blank">View Source</a>

## Summary

Any valid element type accepted by JSX or import('./create-element.ts').createElement.
- `string` for host elements (e.g., 'div')
- `Function` for user components

## Signature

```ts
type ElementType = string | Function;

```