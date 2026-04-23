---
title: createRouter
---

# createRouter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/router.ts#L316" target="_blank">View Source</a>

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

### options

Options to configure the router

## Returns

The new router