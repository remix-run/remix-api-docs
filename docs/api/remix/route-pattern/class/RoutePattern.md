---
title: RoutePattern
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/route-pattern.ts#L80
---

# RoutePattern

## Summary

A parsed route pattern.

Create one with the [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) `parse` method. The constructor is public but takes a parsed
representation that is not part of the public API; prefer `RoutePattern.parse` instead. Use
`source`, `toString()`, `toJSON()`, and [`getRoutePatternCaptures`](/api/remix/route-pattern/function/getRoutePatternCaptures/) for inspection.

## Signature

```ts
class RoutePattern<source> {
  constructor(parts: RoutePatternParts): RoutePattern<source>;

  // Properties
  _parts: RoutePatternParts;
  [brand]: source;

  // Accessors
  get source(): string;

  // Methods
  toJSON(): RoutePatternJSON;
  toString(): string;
  parse<source extends string>(source: source): RoutePattern<source>;
}

```

## Constructor

Create a new `RoutePattern` from its parsed parts.

The parts are not part of the public API. Use the [`RoutePattern`](/api/remix/route-pattern/class/RoutePattern/) `parse` method to create a pattern
from a source string.

### Parameters

#### `parts`

The parsed parts of the pattern.

## Properties

### `_parts`

Parsed parts of this pattern. Internal; not part of the public API.

### `[brand]`

## Accessors

### `source`

Normalized string representation of this pattern.

## Methods

### `toJSON(): RoutePatternJSON`

Returns a JSON-serializable object containing each serialized part of this route pattern.



### `toString(): string`

Returns a string representing this route pattern.



### `parse<source extends string>(source: source): RoutePattern<source>`

Create a new `RoutePattern` by parsing a source string.

