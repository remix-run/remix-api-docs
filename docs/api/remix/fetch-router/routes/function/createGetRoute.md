---
title: createGetRoute
---

# createGetRoute

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-router/src/lib/route-helpers/method.ts#L25" target="_blank">View Source</a>

## Summary

Shorthand for a GET route.

## Aliases

get

## Signature

```ts
function createGetRoute(
  pattern: source | RoutePattern<source>,
): Route<"GET", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for GET requests