---
title: createRoutes
---

# createRoutes

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-map.ts#L84" target="_blank">View Source</a>

## Summary

Create a route map from a set of route definitions with a base pattern.

## Signature

```ts
function createRoutes(base: base | RoutePattern<base>, defs: defs): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: defs[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<base>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<base>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<base>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<base>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<base>["search"], Parse<pattern>["search"]> }>> : defs[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : defs[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Params

### base

### defs

## Returns

The route map