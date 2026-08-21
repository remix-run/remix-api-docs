---
title: route
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-map.ts#L81
---

# route

## Summary

Create a route map from a set of route definitions.

## Signature

```ts
function createRoutes<defs extends RouteDefs>(defs: defs): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: defs[name] extends Route<method, pattern> ? Route<method, JoinPatterns<"/", pattern>> : defs[name] extends RouteDef<string> ? BuildRouteWithBase<"/", any[any]> : defs[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }

function createRoutes<base extends string, defs extends RouteDefs>(base: base | RoutePattern<base>, defs: defs): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: defs[name] extends Route<method, pattern> ? Route<method, JoinPatterns<base, pattern>> : defs[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : defs[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Returns

The route map