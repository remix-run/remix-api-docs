---
title: form
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/form.ts#L35
---

# form

## Summary

Create a route map with `index` (`GET`) and `action` (`POST`) routes, suitable
for showing a standard HTML `<form>` and handling its submit action at the same
URL.

## Signature

```ts
function createFormRoutes<pattern extends string, options extends FormOptions>(pattern: pattern | RoutePattern<pattern>, options: options): { [K in string]: { -readonly [name in string]: ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: options extends { formMethod: formMethod } ? formMethod : "POST"; pattern: "/" } })[name] extends Route<method, pattern> ? Route<method, JoinPatterns<pattern, pattern>> : ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: options extends { formMethod: ... } ? formMethod : "POST"; pattern: "/" } })[name] extends RouteDef<string> ? BuildRouteWithBase<pattern, any[any]> : ({ [key in string]: { method: "GET"; pattern: "/" } } & { [key in string]: { method: (...) extends (...) ? (...) : (...); pattern: "/" } })[name] extends RouteDefs ? { [K in string | number | symbol]: { -readonly [name in string | number | symbol]: (...)[(...)] extends Route<(...), (...)> ? Route<(...), (...)> : (...) extends (...) ? (...) : (...) }[K] } : never }[K] }
```

## Returns

The route map with `index` and `action` routes