---
title: createController
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L125
---

# createController

## Summary

Defines a controller whose action keys and params are checked against a route map.

This helper returns the controller unchanged while giving TypeScript the route map it needs to
type each action's `context.params`. If local middleware adds context values, compose those
values into the controller context type and pass it as the second generic.

## Signature

```ts
function createController<
  routes extends RouteMap<string>,
  context extends RequestContext<any, any>,
  controller extends Controller<routes, context>,
>(routes: routes, controller: controller): controller;

```

## Returns

The same controller value.