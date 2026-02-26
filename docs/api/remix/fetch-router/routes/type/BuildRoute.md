---
title: BuildRoute
---

# BuildRoute

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/route-map.ts#L65" target="_blank">View Source</a>

## Summary

Build a `Route` type from a request method and pattern.

## Signature

```ts
type BuildRoute<method, pattern> = pattern extends string
  ? Route<method, pattern>
  : pattern extends RoutePattern<infer source extends string>
    ? Route<method, source>
    : never;

```