---
title: "render"
source: "https://github.com/remix-run/remix/blob/main/packages/render-middleware/src/lib/render-ui.ts#L70"
---

# render

## Summary

Adds the standard Remix component renderer to request context.

## Signature

```ts
function render(
  options: RenderOptions,
): Middleware<{ key: { defaultValue?: AnyRenderer }; property: 'render'; value: RenderFunction }>

```

## Parameters

### `options`

Rendering integration options.

## Returns

Middleware that installs `context.render(node, init)` for the current request.