---
title: createDeleteRoute
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L12
---

# createDeleteRoute

## Summary

Shorthand for a DELETE route.

## Aliases

del

## Signature

```ts
function createDeleteRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"DELETE", source>;

```

## Params

### `pattern`

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for DELETE requests