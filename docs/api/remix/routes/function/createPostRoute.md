---
title: createPostRoute
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

## Parameters

### `pattern`

The route pattern string or pre-parsed AST

## Returns

A Route configured for POST requests