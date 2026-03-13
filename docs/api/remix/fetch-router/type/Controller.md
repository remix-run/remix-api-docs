---
title: Controller
---

# Controller

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/controller.ts#L11" target="_blank">View Source</a>

## Summary

Controller object that mirrors a route map with matching action handlers.

## Signature

```ts
type Controller<routes> = {
  actions: ControllerActions<routes>;
  middleware?: Middleware[];
};

```