---
title: createHeadRoute
---

# createHeadRoute

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/method.ts#L38" target="_blank">View Source</a>

## Summary

Shorthand for a HEAD route.

## Aliases

head

## Signature

```ts
function createHeadRoute(
  pattern: source | RoutePattern<source>,
): Route<"HEAD", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for HEAD requests