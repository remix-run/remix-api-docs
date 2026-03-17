---
title: createOptionsRoute
---

# createOptionsRoute

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/route-helpers/method.ts#L51" target="_blank">View Source</a>

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

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for OPTIONS requests