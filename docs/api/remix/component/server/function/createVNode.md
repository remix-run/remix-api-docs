---
title: "createVNode"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/server/stream.ts#L46"
---

# createVNode

## Summary

Creates a server renderer node record from an element type and props.

Application components normally use JSX or `createElement` from `remix/component` instead.

## Signature

```ts
function createVNode(type: ElementType, props: ElementProps, key: Key): VNode

```

## Parameters

### `type`

Host tag, component, or fragment to render.

### `props`

Props passed to the element.

### `key`

Optional reconciliation key.

## Returns

A node record used by the server renderer.