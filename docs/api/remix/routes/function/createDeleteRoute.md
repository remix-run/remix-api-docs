---
title: createDeleteRoute
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