---
title: render
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/spa/src/lib/spa.ts#L67
---

# render

## Summary

Creates middleware that exposes `context.render()` for SPA route responses.

## Signature

```ts
function render(transform: RenderTransform): RenderMiddleware

```

## Parameters

### `transform`

Optional transform that wraps or replaces route nodes.

## Returns

Middleware that installs the SPA renderer on request context.