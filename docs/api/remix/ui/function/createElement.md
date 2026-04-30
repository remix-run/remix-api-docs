---
title: createElement
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/create-element.ts#L12
---

# createElement

## Summary

Creates a Remix virtual element from a JSX-like call signature.

## Signature

```ts
function createElement(
  type: ElementType,
  props: Record<string, any>,
  children: any[],
): RemixElement;

```

## Params

### `type`

Host tag, component function, or mixin host placeholder.

### `props`

Element props.

### `children`

Child nodes.

## Returns

A Remix virtual element.