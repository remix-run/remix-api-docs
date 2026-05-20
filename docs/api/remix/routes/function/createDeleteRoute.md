---
title: createDeleteRoute
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/fetch-router/src/lib/route-helpers/method.ts#L12
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

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for DELETE requests