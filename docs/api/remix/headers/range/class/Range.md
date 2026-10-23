---
title: "Range"
source: "https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/range.ts#L66"
---

# Range

## Summary

The value of a `Range` HTTP header.

[MDN `Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.range)

## Signature

```ts
class Range {
  constructor(init: string | RangeInit): Range

  // Properties
  ranges: { end?: number; start?: number }[]
  unit: string

  // Methods
  canSatisfy(resourceSize: number): boolean
  normalize(resourceSize: number): { end: number; start: number }[]
  toString(): string
  from(value: string | RangeInit | null): Range
}

```

## Properties

### `ranges`

Requested byte ranges from the header.

### `unit`

The range unit, typically `bytes`.

## Methods

### `canSatisfy(resourceSize: number): boolean`

Checks if this range can be satisfied for a resource of the given size.
A non-zero suffix is satisfiable even for an empty resource, although
normalize() returns no concrete byte positions for it.

#### Parameters

##### `resourceSize`

The size of the resource in bytes as a non-negative safe integer

### `normalize(resourceSize: number): { end: number; start: number }[]`

Normalizes the ranges for a resource of the given size.
Returns an array of ranges with resolved start and end values.
Returns an empty array if no concrete byte positions can be normalized, including for a
zero-length resource, even when canSatisfy() returns `true`.

#### Parameters

##### `resourceSize`

The size of the resource in bytes as a non-negative safe integer

### `toString(): string`

Returns the string representation of the header value.



### `from(value: string | RangeInit | null): Range`

Parse a Range header value.

#### Parameters

##### `value`

The header value (string, init object, or null)