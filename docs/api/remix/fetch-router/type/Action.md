---
title: Action
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L55
---

# Action

## Summary

An individual route action.

Actions may be plain request handler functions or objects with optional inline middleware.
Most app code should use [`createAction`](/api/remix/fetch-router/function/createAction/); use this type directly when you need
to describe an action for an explicit RequestContext type.

## Signature

```ts
type Action<route, context> =
  | RequestHandler<ContextWithParams<context, Params<ActionPattern<route>>>>
  | ActionObject<route, context>;

```