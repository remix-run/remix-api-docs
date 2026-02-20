---
title: createPostRoute
---

# createPostRoute

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/method.ts#L77" target="_blank">View Source</a>

## Summary

Shorthand for a POST route.

## Aliases

post

## Signature

```ts
function createPostRoute(
  pattern: source | RoutePattern<source>,
): Route<"POST", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for POST requests