---
title: createElement
---

# createElement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/create-element.ts#L12" target="_blank">View Source</a>

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

### type

Host tag, component function, or mixin host placeholder.

### props

Element props.

### children

Child nodes.

## Returns

A Remix virtual element.