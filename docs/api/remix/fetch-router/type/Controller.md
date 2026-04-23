---
title: Controller
---

# Controller

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/controller.ts#L58" target="_blank">View Source</a>

## Summary

A controller object that mirrors a route map with matching action handlers.

Controllers let you store a subtree of route handlers in one object while preserving the
params and request-context contract for each nested action.

## Signature

```ts
type Controller<routes, context> =
  | ControllerWithoutMiddleware<routes, context>
  | ControllerWithMiddleware<routes, context, readonly AnyMiddleware[]>;

```