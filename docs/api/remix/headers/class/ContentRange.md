---
title: ContentRange
---

# ContentRange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/headers/src/lib/content-range.ts#L35" target="_blank">View Source</a>

## Summary

The value of a `Content-Range` HTTP header.

[MDN `Content-Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.content-range)

## Signature

```ts
class ContentRange {
  constructor(init: string | ContentRangeInit): ContentRange;

  // Properties
  end: number | null;
  size?: number | "*";
  start: number | null;
  unit: string;

  // Methods
  toString(): string;
  from(value: string | ContentRangeInit | null): ContentRange;
}

```

## Constructor Params

### init

## Properties

### end

The inclusive end offset, or `null` for unsatisfied ranges.

### size

The total resource size, or `'*'` when unknown.

### start

The inclusive start offset, or `null` for unsatisfied ranges.

### unit

The range unit, typically `bytes`.

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | ContentRangeInit | null): ContentRange

Parse a Content-Range header value.

#### value

The header value (string, init object, or null)