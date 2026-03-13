---
title: Action
---

# Action

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/controller.ts#L30" target="_blank">View Source</a>

## Summary

An individual route action.

## Signature

```ts
type Action<method, pattern> =
  | RequestHandlerObject<method, Params<pattern>>
  | RequestHandler<method, Params<pattern>>;

```