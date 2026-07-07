---
title: createPutRoute
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L90
---

# createPutRoute

## Summary

Shorthand for a PUT route.

## Aliases

put

## Signature

```ts
function createPutRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"PUT", source>;

```

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for PUT requests