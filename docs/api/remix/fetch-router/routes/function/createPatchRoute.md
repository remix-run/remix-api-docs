---
title: createPatchRoute
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/route-helpers/method.ts#L64
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

## Params

### `pattern`

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for PATCH requests