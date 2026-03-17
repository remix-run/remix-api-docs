---
title: createPutRoute
---

# createPutRoute

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/route-helpers/method.ts#L90" target="_blank">View Source</a>

## Summary

Shorthand for a PUT route.

## Aliases

put

## Signature

```ts
function createPutRoute<source extends string>(
  pattern: source | RoutePattern<source>,
): Route<"PUT", source>;

```

## Params

### pattern

The route pattern string or [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) object

## Returns

A Route configured for PUT requests