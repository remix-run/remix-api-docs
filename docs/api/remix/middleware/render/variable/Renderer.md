---
title: Renderer
source: https://github.com/remix-run/remix/blob/main/packages/render-middleware/src/lib/render.ts#L6
---

# Renderer

## Summary

Context key used to read the current request renderer with `context.get(Renderer)`.
The `renderWith()` middleware also installs the renderer as `context.render`.

## Signature

```ts
let Renderer: ContextKey<AnyRenderer>;

```