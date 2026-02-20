---
title: ContentRange
---

# ContentRange

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/content-range.ts#L35" target="_blank">View Source</a>

## Summary

The value of a `Content-Range` HTTP header.

[MDN `Content-Range` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)

[HTTP/1.1 Specification](https://httpwg.org/specs/rfc9110.html#field.content-range)

## Constructor

### init

## Properties

### end

The end position of the range (inclusive)
Set to null for unsatisfied ranges

### size

The total size of the resource
Set to '*' for unknown size

### start

The start position of the range (inclusive)
Set to null for unsatisfied ranges

### unit

The unit of the range, typically "bytes"

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | ContentRangeInit | null): ContentRange

Parse a Content-Range header value.

#### value

The header value (string, init object, or null)