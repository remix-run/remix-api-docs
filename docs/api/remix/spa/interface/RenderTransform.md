---
title: RenderTransform
source: https://github.com/remix-run/remix/blob/main/packages/spa/src/lib/spa.ts#L32
---

# RenderTransform

## Summary

Transforms a node using the active request context.

## Signature

```ts
interface RenderTransform {
  (node: RemixNode, context: RequestContext): RemixNode
}

```

## Parameters

### `node`

Node returned by the route.

### `context`

Active request context.

## Returns

The node to render.