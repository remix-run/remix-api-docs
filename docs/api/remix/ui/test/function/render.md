---
title: render
---

# render

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/render.ts#L62" target="_blank">View Source</a>

## Summary

Mounts a RemixNode into a DOM container for testing.

## Signature

```ts
function render(node: RemixNode, opts: RenderOptions): RenderResult;

```

## Params

### node

The node to render

### opts

[`RenderOptions`](/api/remix/ui/test/interface/RenderOptions/); pass `opts.container` to render into a specific
  element instead of a fresh `div` appended to `document.body`

## Returns

A [`RenderResult`](/api/remix/ui/test/interface/RenderResult/) with the container, root, and helpers for querying and
  interacting with the rendered output.