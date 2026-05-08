---
title: createResourcesRoutes
source: https://github.com/remix-run/remix/blob/main/packages/routes/src/lib/route-helpers/resources.ts#L63
---

# createResourcesRoutes

## Summary

Create a route map with standard CRUD routes for a resource collection.

## Signature

```ts
function createResourcesRoutes<base extends string, options extends ResourcesOptions>(base: base | RoutePattern<base>, options: options): { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: BuildResourcesRoutes<options, options extends { only: readonly ResourcesMethod[] } ? options<options>["only"][number] : options extends { exclude: readonly ResourcesMethod[] } ? Exclude<"index", (...)[(...)]> | Exclude<"new", (...)[(...)]> | Exclude<"show", (...)[(...)]> | Exclude<"create", (...)[(...)]> | Exclude<"edit", (...)[(...)]> | Exclude<"update", (...)[(...)]> | Exclude<"destroy", (...)[(...)]> : ResourcesMethod, GetParam<options>>[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<base>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<base>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<base>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<base>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<base>["search"], Parse<pattern>["search"]> }>> : BuildResourcesRoutes<options, options extends { only: readonly ResourcesMethod[] } ? options<(...)>["only"][number] : options extends { exclude: readonly (...)[] } ? Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> | Exclude<(...), (...)> : ResourcesMethod, GetParam<options>>[name] extends RouteDef<string> ? BuildRouteWithBase<base, any[any]> : BuildResourcesRoutes<options, options extends { only: readonly (...)[] } ? (...)[(...)][number] : options extends { exclude: ... } ? (...) | (...) | (...) | (...) | (...) | (...) | (...) : ResourcesMethod, GetParam<options>>[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Returns

The route map with CRUD routes