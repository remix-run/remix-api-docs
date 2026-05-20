---
title: createGetRoute
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/fetch-router/src/lib/route-helpers/method.ts#L25
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