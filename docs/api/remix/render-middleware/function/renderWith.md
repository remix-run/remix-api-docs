---
title: renderWith
source: https://github.com/remix-run/remix/blob/main/packages/render-middleware/src/lib/render.ts#L36
---

# renderWith

## Summary

Adds a renderer to request context.

## Signature

```ts
function renderWith<renderer extends AnyRenderer>(
  createRenderer: RendererFactory<renderer>,
): Middleware<{
  key: ContextKey<AnyRenderer>;
  property: "render";
  value: renderer;
}>;

```

## Parameters

### `createRenderer`

A function that creates a renderer for each request.

## Returns

Middleware that stores the renderer in request context.