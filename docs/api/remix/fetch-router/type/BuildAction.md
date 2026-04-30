---
title: BuildAction
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/controller.ts#L99
---

# BuildAction

## Summary

Builds an Action type from a string pattern, RoutePattern, or Route.

## Signature

```ts
type BuildAction<method, route, context> = route extends string
  ? Action<method, route, context>
  : route extends RoutePattern<infer pattern>
    ? Action<method, pattern, context>
    : route extends Route<infer _, infer pattern>
      ? Action<method, pattern, context>
      : never;

```