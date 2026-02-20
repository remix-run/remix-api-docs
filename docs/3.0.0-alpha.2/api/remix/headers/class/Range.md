---
title: Range
---

# Range

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/range.ts#L27" target="_blank">View Source</a>

## Summary

The value of a `Range` HTTP header.

[MDN `Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.range)

## Constructor

### init

## Properties

### ranges

The ranges requested. Each range has optional start and end values.
- {start: 0, end: 99} = bytes 0-99
- {start: 100} = bytes 100- (from 100 to end)
- {end: 500} = bytes -500 (last 500 bytes)

### unit

The unit of the range, typically "bytes"

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