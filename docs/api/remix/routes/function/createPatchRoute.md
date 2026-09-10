---
title: createPatchRoute
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L64
---

# createPatchRoute

## Summary

Shorthand for a PATCH route.

## Aliases

patch

## Signature

```ts
function createPatchRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<'PATCH', source>

```

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for PATCH requests