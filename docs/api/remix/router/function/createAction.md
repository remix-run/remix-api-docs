---
title: createAction
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L79
---

# createAction

## Summary

Defines a route handler with route-aware params and the default router context.

This helper returns the action unchanged while giving TypeScript the route pattern it needs to
type `context.params`. If action middleware adds context values, those values are available to
the action handler.

## Signature

```ts
function createAction<
  route extends ActionRoute,
  context extends RequestContext<any, any>,
  middleware extends readonly AnyMiddleware[],
>(
  route: route,
  action: Action<route, context, middleware>,
): Action<route, context, middleware>;

```

## Parameters

### `route`

### `action`

The handler function or action object to type-check.

## Returns

The same action value.