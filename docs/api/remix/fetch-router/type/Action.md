---
title: Action
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L89
---

# Action

## Summary

An individual route action.

Actions can be plain handler functions or action objects with optional inline middleware.

## Signature

```ts
type Action<_method, pattern, context> = ActionInput<
  Params<pattern>,
  WithParams<context, Params<pattern>>,
  readonly AnyMiddleware[]
>;

```