---
title: Controller
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/fetch-router/src/lib/controller.ts#L152
---

# Controller

## Summary

A controller maps route leaves in a route map to actions.

Controllers let you store related actions together while preserving the params
and request-context contract for each action. Most app code should use
[`createController`](/api/remix/router/function/createController/); use this type directly when you need to describe a
controller for an explicit RequestContext type.

## Signature

```ts
type Controller<routes, context> =
  | ControllerWithoutMiddleware<routes, context>
  | ControllerWithMiddleware<routes, context>;

```