---
title: createGetRoute
source: https://github.com/remix-run/remix/blob/main/packages/routes/src/lib/route-helpers/method.ts#L25
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

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for GET requests