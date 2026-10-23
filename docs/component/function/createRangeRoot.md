---
title: "createRangeRoot"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/vdom.ts#L93"
---

# createRangeRoot

## Summary

Creates a virtual root bounded by two DOM nodes.

## Signature

```ts
function createRangeRoot(boundaries: [Node, Node], options: VirtualRootOptions): VirtualRoot

```

## Parameters

### `boundaries`

Start and end nodes sharing a parent. Only the content between them is owned.

### `options`

Root configuration.

## Returns

A virtual root controller.