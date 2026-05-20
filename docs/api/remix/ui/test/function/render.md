---
title: render
---

# render

## Summary

Mounts a [`RemixNode`](/api/remix/ui/jsx-dev-runtime/type/RemixNode/) into a DOM container for testing.

## Signature

```ts
function render(node: RemixNode, opts: RenderOptions): RenderResult;

```

## Parameters

### `node`

The node to render

### `opts`

[`RenderOptions`](/api/remix/ui/test/interface/RenderOptions/); pass `opts.container` to render into a specific
  element instead of a fresh `div` appended to `document.body`

## Returns

A [`RenderResult`](/api/remix/ui/test/interface/RenderResult/) with the container, root, and helpers for querying and
  interacting with the rendered output.