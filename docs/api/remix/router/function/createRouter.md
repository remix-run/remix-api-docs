---
title: createRouter
---

# createRouter

## Summary

Create a new router.

## Signature

```ts
function createRouter<context extends AnyContext>(): Router<context>;

function createRouter<
  context extends AnyContext,
  middleware extends readonly AnyMiddleware[],
>(
  options: RouterOptions<context, middleware>,
): Router<MiddlewareContext<middleware, context>>;

```

## Parameters

### `options`

Options to configure the router

## Returns

The new router