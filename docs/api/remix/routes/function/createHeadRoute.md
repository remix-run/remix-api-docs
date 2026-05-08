---
title: createHeadRoute
source: https://github.com/remix-run/remix/blob/main/packages/routes/src/lib/route-helpers/method.ts#L38
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

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for HEAD requests