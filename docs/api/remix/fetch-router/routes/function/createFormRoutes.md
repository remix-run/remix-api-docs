---
title: createFormRoutes
---

# createFormRoutes

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/form.ts#L32" target="_blank">View Source</a>

## Summary

Create a route map with `index` (`GET`) and `action` (`POST`) routes, suitable
for showing a standard HTML `<form>` and handling its submit action at the same
URL.

## Signature

```ts
function createFormRoutes(pattern: pattern | RoutePattern<pattern>, options: options): { [K in string]: { -readonly [name in string]: ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: options extends { formMethod: formMethod } ? formMethod : "POST"; pattern: "/" } })[name] extends Route<method, pattern> ? Route<method, Stringify<{ hostname: JoinOriginField<Parse<pattern>, Parse<pattern>, "hostname">; pathname: JoinPathnames<Parse<pattern>["pathname"], Parse<pattern>["pathname"]>; port: JoinOriginField<Parse<pattern>, Parse<pattern>, "port">; protocol: JoinOriginField<Parse<pattern>, Parse<pattern>, "protocol">; search: JoinSearch<Parse<pattern>["search"], Parse<pattern>["search"]> }>> : ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: options extends { formMethod: ... } ? formMethod : "POST"; pattern: "/" } })[name] extends RouteDef<string> ? BuildRouteWithBase<pattern, any[any]> : ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: (...) extends (...) ? (...) : (...); pattern: "/" } })[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Params

### pattern

### options

## Returns

The route map with `index` and `action` routes