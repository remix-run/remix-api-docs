---
title: BuildRoute
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