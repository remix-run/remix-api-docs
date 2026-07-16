---
title: createController
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L137
---

# createController

## Summary

Defines a controller whose action keys and params are checked against a route map.

This helper returns the controller unchanged while giving TypeScript the route map it needs to
type each action's `context.params`. If controller middleware adds context values, those values are
available to the controller actions.

## Signature

```ts
function createController<
  routes extends RouteMap<string>,
  context extends RequestContext<any, any>,
  middleware extends readonly AnyMiddleware[],
>(
  routes: routes,
  controller: Controller<routes, context, middleware>,
): Controller<routes, context, middleware>

```

## Parameters

### `routes`

### `controller`

The controller object to type-check.

## Returns

The same controller value.