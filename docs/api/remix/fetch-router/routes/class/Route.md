---
title: Route
---

# Route

<a href="https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/route-map.ts#L20" target="_blank">View Source</a>

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

## Constructor Params

### method

### pattern

## Properties

### method

The HTTP method this route matches.

### pattern

The pattern this route matches.

## Methods

### href(args: HrefArgs<pattern>): string

Build a URL href for this route using the given parameters.

#### args

The parameters to use for building the href

### match(url: string | URL): RoutePatternMatch<pattern> | null

Match a URL against this route's pattern.

#### url

The URL to match