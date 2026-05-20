---
title: RoutePattern
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/route-pattern/src/lib/route-pattern.ts#L47
---

# RoutePattern

## Summary

A parsed route pattern

## Signature

```ts
class RoutePattern<source> {
  constructor(parsed: ParsedRoutePattern): RoutePattern<source>;

  // Properties
  hostname: PartPattern | null;
  pathname: PartPattern;
  port: string | null;
  protocol: "http" | "https" | "http(s)" | null;
  search: ReadonlyMap<string, ReadonlySet<string>>;

  // Accessors
  get source(): string;

  // Methods
  toJSON(): RoutePatternJSON;
  toString(): string;
  parse<source extends string>(source: source): RoutePattern<source>;
}

```

## Constructor

Create a new `RoutePattern` from parsed parts of a route pattern.

Useful for efficiently deriving new patterns from already parsed patterns.
Unless you know what you are doing, you probably want `RoutePattern.parse`.

### Parameters

#### `parsed`

Parsed route pattern parts.

## Properties

### `hostname`

### `pathname`

### `port`

### `protocol`

### `search`

Required values keyed by search param name.

Follows
[WHATWG's application/x-www-form-urlencoded parsing](https://url.spec.whatwg.org/#application/x-www-form-urlencoded) spec
(same as [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#percent_encoding)).
For example, `+` is decoded as ` ` (literal space) instead of `%20`.

- **Empty `Set`**: key must appear; value may be anything (including empty).
- **Non-empty `Set`**: key must appear with all listed values; extra values are OK.

## Accessors

### `source`

Normalized string representation of this pattern

## Methods

### `toJSON(): RoutePatternJSON`

Returns a JSON-serializable object containing each serialized part of this route pattern.



### `toString(): string`

Returns a string representing this route pattern.



### `parse<source extends string>(source: source): RoutePattern<source>`

Create a new `RoutePattern` by parsing a source string.

