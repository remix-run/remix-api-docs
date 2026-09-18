---
title: createRouter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/fetch-router/src/lib/router.ts#L362
---

# createRouter

## Summary

Create a new router.

## Signature

```ts
function createRouter<context extends AnyContext, middleware extends readonly AnyMiddleware[]>(
  options: RouterOptions<context, middleware>,
): Router<MiddlewareContext<middleware, context>>

```

## Parameters

### `options`

Options to configure the router

## Returns

The new router