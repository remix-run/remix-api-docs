---
title: createDeleteRoute
---

# createDeleteRoute

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/method.ts#L12" target="_blank">View Source</a>

## Summary

Shorthand for a DELETE route.

## Aliases

del

## Signature

```ts
function createDeleteRoute(
  pattern: source | RoutePattern<source>,
): Route<"DELETE", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for DELETE requests