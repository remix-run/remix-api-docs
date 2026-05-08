---
title: createAction
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L73
---

# createAction

## Summary

Defines a route handler with route-aware params and the default router context.

This helper returns the action unchanged while giving TypeScript the route pattern it needs to
type `context.params`. If local middleware adds context values, compose those values into the
action context type and pass it as the second generic.

## Signature

```ts
function createAction<
  route extends ActionRoute,
  context extends RequestContext<any, any>,
  action extends Action<route, context>,
>(route: route, action: action): action;

```

## Returns

The same action value.