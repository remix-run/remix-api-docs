---
title: createElement
---

# createElement

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/create-element.ts#L12" target="_blank">View Source</a>

## Summary

Creates a Remix virtual element from a JSX-like call signature.

## Signature

```ts
function createElement(
  type: string,
  props: Record<string, any>,
  children: any[],
): RemixElement;

```

## Params

### type

Host tag or component function.

### props

Element props.

### children

Child nodes.

## Returns

A Remix virtual element.