---
title: createPostRoute
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L77
---

# createPostRoute

## Summary

Shorthand for a POST route.

## Aliases

post

## Signature

```ts
function createPostRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"POST", source>;

```

## Params

### `pattern`

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for POST requests