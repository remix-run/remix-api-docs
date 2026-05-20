---
title: createGetRoute
---

# createGetRoute

## Summary

Shorthand for a GET route.

## Aliases

get

## Signature

```ts
function createGetRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"GET", source>;

```

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for GET requests