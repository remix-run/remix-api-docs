---
title: createRouter
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router.ts#L327
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
): Router<ApplyMiddlewareTuple<context, middleware>>;

```

## Params

### `options`

Options to configure the router

## Returns

The new router