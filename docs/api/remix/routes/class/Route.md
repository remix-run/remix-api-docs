---
title: Route
source: https://github.com/remix-run/remix/blob/main/packages/routes/src/lib/route-map.ts#L20
---

# Route

## Summary

A route definition that includes a request method and pattern.

## Signature

```ts
class Route<method, pattern> {
  constructor(
    method: method | "ANY",
    pattern: pattern | RoutePattern<pattern>,
  ): Route<method, pattern>;

  // Properties
  method: method | "ANY";
  pattern: RoutePattern<pattern>;

  // Methods
  href(args: HrefArgs<pattern>): string;
  match(url: string | URL): RoutePatternMatch<pattern> | null;
}

```

## Properties

### `method`

The HTTP method this route matches.

### `pattern`

The pattern this route matches.

## Methods

### `href(args: HrefArgs<pattern>): string`

Build a URL href for this route using the given parameters.

#### Parameters

##### `args`

The parameters to use for building the href

### `match(url: string | URL): RoutePatternMatch<pattern> | null`

Match a URL against this route's pattern.

#### Parameters

##### `url`

The URL to match