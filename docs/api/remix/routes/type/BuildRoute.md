---
title: BuildRoute
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/fetch-router/src/lib/route-map.ts#L62
---

# BuildRoute

## Summary

Build a [`Route`](/api/remix/routes/class/Route/) type from a request method and pattern.

## Signature

```ts
type BuildRoute<method, pattern> = pattern extends string
  ? Route<method, pattern>
  : pattern extends RoutePattern<infer source extends string>
    ? Route<method, source>
    : never;

```