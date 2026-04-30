---
title: createOptionsRoute
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L51
---

# createOptionsRoute

## Summary

Shorthand for a OPTIONS route.

## Aliases

options

## Signature

```ts
function createOptionsRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"OPTIONS", source>;

```

## Params

### `pattern`

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for OPTIONS requests