---
title: Renderer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/render-middleware/src/lib/render.ts#L6
---

# Renderer

## Summary

Context key used to read the current request renderer with `context.get(Renderer)`.
Both `render()` and `renderWith()` also install the renderer as `context.render`.

## Signature

```ts
let Renderer: { defaultValue?: AnyRenderer }

```