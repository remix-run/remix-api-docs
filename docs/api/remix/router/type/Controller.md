---
title: Controller
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