---
title: Range
---

# Range

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/headers/src/lib/range.ts#L27" target="_blank">View Source</a>

## Summary

The value of a `Range` HTTP header.

[MDN `Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.range)

## Signature

```ts
class Range {
  constructor(init: string | RangeInit): Range;

  // Properties
  ranges: { end?: number; start?: number }[];
  unit: string;

  // Methods
  canSatisfy(resourceSize: number): boolean;
  normalize(resourceSize: number): { end: number; start: number }[];
  toString(): string;
  from(value: string | RangeInit | null): Range;
}

```

## Constructor Params

### init

## Properties

### ranges

Requested byte ranges from the header.

### unit

The range unit, typically `bytes`.

## Methods

### canSatisfy(resourceSize: number): boolean

Checks if this range can be satisfied for a resource of the given size.

#### resourceSize

The size of the resource in bytes

### normalize(resourceSize: number): { end: number; start: number }[]

Normalizes the ranges for a resource of the given size.
Returns an array of ranges with resolved start and end values.
Returns an empty array if the range cannot be satisfied.

#### resourceSize

The size of the resource in bytes

### toString(): string

Returns the string representation of the header value.

### from(value: string | RangeInit | null): Range

Parse a Range header value.

#### value

The header value (string, init object, or null)