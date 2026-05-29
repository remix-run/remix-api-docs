---
title: Action
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/fetch-router/src/lib/controller.ts#L73
---

# Action

## Summary

An individual route action.

Actions may be plain request handler functions or objects with optional inline middleware.
Most app code should use [`createAction`](/api/remix/router/function/createAction/); use this type directly when you need
to describe an action for an explicit RequestContext type.

## Signature

```ts
type Action<route, context> =
  | RequestHandler<ActionContext<route, context>>
  | ActionObjectWithoutMiddleware<route, context>
  | ActionObjectWithMiddleware<route, context>;

```