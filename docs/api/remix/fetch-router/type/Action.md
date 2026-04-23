---
title: Action
---

# Action

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/controller.ts#L89" target="_blank">View Source</a>

## Summary

An individual route action.

Actions can be plain handler functions or action objects with optional inline middleware.

## Signature

```ts
type Action<method, pattern, context> = ActionInput<
  Params<pattern>,
  WithParams<context, Params<pattern>>,
  readonly AnyMiddleware[]
>;

```