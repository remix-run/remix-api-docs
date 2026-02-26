---
title: createResourcesRoutes
---

# createResourcesRoutes

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/resources.ts#L57" target="_blank">View Source</a>

## Summary

Create a route map with standard CRUD routes for a resource collection.

## Signature

```ts
function createResourcesRoutes(base: base | RoutePattern<base>, options: options): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: BuildResourcesRoutes<options, options extends { only: readonly ResourcesMethod[] } ? options<options>["only"][number] : options extends { exclude: readonly ResourcesMethod[] } ? Exclude<"index", (...)[(...)]> | Exclude<"show", (...)[(...)]> | Exclude<"new", (...)[(...)]> | Exclude<"update", (...)[(...)]> | Exclude<"destroy", (...)[(...)]> | Exclude<"create", (...)[(...)]> | Exclude<"edit", (...)[(...)]> : ResourcesMethod, GetParam<options>>[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<base>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<base>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<base>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<base>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<base>["search"], Parse<pattern>["search"]> }>> : BuildResourcesRoutes<options, options extends { only: readonly ResourcesMethod[] } ? options<(...)>["only"][number] : options extends { exclude: readonly (...)[] } ? Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> : ResourcesMethod, GetParam<options>>[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : BuildResourcesRoutes<options, options extends { only: readonly (...)[] } ? (...)[(...)][number] : options extends { exclude: ... } ? (...) | (...) | (...) | (...) | (...) | (...) | (...) : ResourcesMethod, GetParam<options>>[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Params

### base

### options

## Returns

The route map with CRUD routes