---
title: Action
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L62
---

# Action

## Summary

An individual route action.

Actions may be plain request handler functions or objects with optional action middleware.
Most app code should use [`createAction`](/api/remix/router/function/createAction/); use this type directly when you need
to describe an action for an explicit RequestContext type.

## Signature

```ts
type Action<route, context, middleware> =
  | RequestHandler<ActionContext<route, context>>
  | ActionObject<route, context, middleware>

```