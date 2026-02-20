---
title: resource
---

# resource

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/resource.ts#L50" target="_blank">View Source</a>

## Summary

Create a route map with standard CRUD routes for a singleton resource.

## Signature

```ts
function createResourceRoutes(base: base | RoutePattern<base>, options: options): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: BuildResourceRoutes<options, options extends { only: readonly ResourceMethod[] } ? options<options>["only"][number] : options extends { exclude: readonly ResourceMethod[] } ? Exclude<"show", (...)[(...)]> | Exclude<"new", (...)[(...)]> | Exclude<"update", (...)[(...)]> | Exclude<"destroy", (...)[(...)]> | Exclude<"create", (...)[(...)]> | Exclude<"edit", (...)[(...)]> : ResourceMethod>[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<base>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<base>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<base>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<base>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<base>["search"], Parse<pattern>["search"]> }>> : BuildResourceRoutes<options, options extends { only: readonly ResourceMethod[] } ? options<(...)>["only"][number] : options extends { exclude: readonly (...)[] } ? Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> : ResourceMethod>[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : BuildResourceRoutes<options, options extends { only: readonly (...)[] } ? (...)[(...)][number] : options extends { exclude: ... } ? (...) | (...) | (...) | (...) | (...) | (...) : ResourceMethod>[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Params

### base

### options

## Returns

The route map with CRUD routes