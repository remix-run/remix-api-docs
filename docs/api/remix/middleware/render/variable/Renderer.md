---
title: Renderer
---

# Renderer

## Summary

Context key used to read the current request renderer with `context.get(Renderer)`.
The `renderWith()` middleware also installs the renderer as `context.render`.

## Signature

```ts
let Renderer: ContextKey<AnyRenderer>;

```