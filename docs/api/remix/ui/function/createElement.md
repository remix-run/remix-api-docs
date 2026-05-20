---
title: createElement
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

## Parameters

### `type`

Host tag, component function, or mixin host placeholder.

### `props`

Element props.

### `children`

Child nodes.

## Returns

A Remix virtual element.