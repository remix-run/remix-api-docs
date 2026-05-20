---
title: Action
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