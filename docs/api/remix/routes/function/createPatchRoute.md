---
title: createPatchRoute
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
): Route<"PATCH", source>;

```

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for PATCH requests