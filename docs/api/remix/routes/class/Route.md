---
title: Route
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-map.ts#L23
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
  href(args: CreateHrefArgs<pattern>): string;
}

```

## Properties

### `method`

The HTTP method this route matches.

### `pattern`

The parsed route-pattern AST. Useful for advanced consumers (e.g. matchers) that want to skip
re-parsing the source string.

## Methods

### `href(args: CreateHrefArgs<pattern>): string`

Build a URL href for this route using the given parameters.

#### Parameters

##### `args`

The parameters to use for building the href