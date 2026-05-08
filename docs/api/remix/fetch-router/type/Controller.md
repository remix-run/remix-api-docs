---
title: Controller
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L98
---

# Controller

## Summary

A controller maps route leaves in a route map to actions.

Controllers let you store related actions together while preserving the params
and request-context contract for each action. Most app code should use
[`createController`](/api/remix/fetch-router/function/createController/); use this type directly when you need to describe a
controller for an explicit RequestContext type.

## Signature

```ts
type Controller<routes, context> = {
  actions: routes extends any
    ? {
        [name in keyof routes as routes[name] extends Route<any, any>
          ? name
          : never]: routes[name] extends Route<any, any>
          ? Action<routes[name], context>
          : never;
      } & {
        [name in keyof routes as routes[name] extends RouteMap
          ? name
          : never]?: never;
      }
    : never;
  middleware?: readonly AnyMiddleware[];
};

```