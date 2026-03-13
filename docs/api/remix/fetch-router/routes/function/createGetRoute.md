---
title: createGetRoute
---

# createGetRoute

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-helpers/method.ts#L25" target="_blank">View Source</a>

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

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern) object

## Returns

A Route configured for GET requests