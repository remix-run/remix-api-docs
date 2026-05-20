---
title: RouteDef
---

# RouteDef

## Summary

A route definition that can be a string pattern, pre-parsed `RoutePattern`, or an object with
method and pattern.

## Signature

```ts
type RouteDef<source> =
  | source
  | RoutePattern<source>
  | { method?: RequestMethod; pattern: source | RoutePattern<source> };

```