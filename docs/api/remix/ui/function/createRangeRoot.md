---
title: createRangeRoot
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/vdom.ts#L71
---

# createRangeRoot

## Summary

Creates a virtual root bounded by two DOM nodes.

## Signature

```ts
function createRangeRoot(
  boundaries: [Node, Node],
  options: VirtualRootOptions,
): VirtualRoot;

```

## Params

### `boundaries`

Start and end marker nodes that define the render region.

### `options`

Root configuration.

## Returns

A virtual root controller.