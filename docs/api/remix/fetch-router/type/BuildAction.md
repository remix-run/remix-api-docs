---
title: BuildAction
---

# BuildAction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/controller.ts#L56" target="_blank">View Source</a>

## Summary

Build an `Action` type from a string, `RoutePattern`, or `Route`.

## Signature

```ts
type BuildAction<method, route> = route extends string
  ? Action<method, route>
  : route extends RoutePattern<infer pattern>
    ? Action<method, pattern>
    : route extends Route<infer _, infer pattern>
      ? Action<method, pattern>
      : never;

```