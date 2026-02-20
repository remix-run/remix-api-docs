---
title: RouteDef
---

# RouteDef

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-map.ts#L152" target="_blank">View Source</a>

## Summary

A route definition that can be a string pattern, `RoutePattern`, or an object with method and
pattern.

## Signature

```ts
type RouteDef<source> =
  | source
  | RoutePattern<source>
  | { method?: RequestMethod; pattern: source | RoutePattern<source> };

```