---
title: BuildAction
---

# BuildAction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/controller.ts#L99" target="_blank">View Source</a>

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