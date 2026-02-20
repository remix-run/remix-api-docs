---
title: createPatchRoute
---

# createPatchRoute

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/method.ts#L64" target="_blank">View Source</a>

## Summary

Shorthand for a PATCH route.

## Aliases

patch

## Signature

```ts
function createPatchRoute(
  pattern: source | RoutePattern<source>,
): Route<"PATCH", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for PATCH requests