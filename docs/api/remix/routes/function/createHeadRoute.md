---
title: createHeadRoute
---

# createHeadRoute

## Summary

Shorthand for a HEAD route.

## Aliases

head

## Signature

```ts
function createHeadRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"HEAD", source>;

```

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for HEAD requests