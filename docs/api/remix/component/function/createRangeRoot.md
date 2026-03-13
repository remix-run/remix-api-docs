---
title: createRangeRoot
---

# createRangeRoot

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/vdom.ts#L71" target="_blank">View Source</a>

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

### boundaries

Start and end marker nodes that define the render region.

### options

Root configuration.

## Returns

A virtual root controller.