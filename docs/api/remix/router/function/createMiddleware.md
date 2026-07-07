---
title: createMiddleware
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/middleware.ts#L91
---

# createMiddleware

## Summary

Creates a reusable middleware chain while preserving its exact tuple type.

Prefer plain inline arrays for `middleware` options on routers, controllers, and actions. Use
this helper when a middleware chain is stored in a variable and its exact type must be preserved,
such as when deriving [`MiddlewareContext`](/api/remix/router/type/MiddlewareContext/) from the chain, exporting the chain for reuse, or
returning it from a factory.

## Signature

```ts
function createMiddleware<middleware extends readonly AnyMiddleware[]>(
  middleware: middleware,
): middleware;

```

## Returns

The middleware chain with its tuple type preserved.