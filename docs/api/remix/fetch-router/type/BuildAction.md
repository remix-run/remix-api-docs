---
title: BuildAction
---

# BuildAction

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L46" target="_blank">View Source</a>

## Summary

Build an Action type from a string, RoutePattern, or Route.

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