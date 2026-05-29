---
title: jsx
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/jsx.ts#L100
---

# jsx

## Summary

Creates a Remix virtual element.

## Signature

```ts
function jsx(type: ElementType, props: ElementProps, key: string): RemixElement;

```

## Parameters

### `type`

Host tag or component function.

### `props`

Element props.

### `key`

Optional reconciliation key.

## Returns

A Remix virtual element.