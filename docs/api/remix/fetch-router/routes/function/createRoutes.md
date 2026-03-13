---
title: createRoutes
---

# createRoutes

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/route-map.ts#L87" target="_blank">View Source</a>

## Summary

Create a route map from a set of route definitions with a base pattern.

## Signature

```ts
function createRoutes<defs extends RouteDefs>(defs: defs): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: defs[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<{ hostname: undefined; pathname: []; port: undefined; protocol: undefined; search: undefined }, Parse<pattern>, "hostname">; pathname: JoinPathnames<[], Parse<pattern>["pathname"]>; port: JoinOriginField<{ hostname: undefined; pathname: []; port: undefined; protocol: undefined; search: undefined }, Parse<pattern>, "port">; protocol: JoinOriginField<{ hostname: undefined; pathname: []; port: undefined; protocol: undefined; search: undefined }, Parse<pattern>, "protocol">; search: JoinSearch<undefined, Parse<pattern>["search"]> }>> : defs[name] extends RouteDef<string> ? BuildRouteWithBase<"/", any[any]> : defs[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }

function createRoutes<base extends string, defs extends RouteDefs>(base: base | RoutePattern<base>, defs: defs): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: defs[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<base>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<base>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<base>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<base>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<base>["search"], Parse<pattern>["search"]> }>> : defs[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : defs[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Params

### base

### defs

## Returns

The route map