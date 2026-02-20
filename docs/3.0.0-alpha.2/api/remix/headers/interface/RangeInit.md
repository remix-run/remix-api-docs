---
title: RangeInit
---

# RangeInit

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/range.ts#L6" target="_blank">View Source</a>

## Summary

Initializer for a `Range` header value.

## Signature

```ts
interface RangeInit {
  ranges?: { end?: number; start?: number }[];
  unit?: string;
}

```

## Properties

### ranges

The ranges requested. Each range has optional start and end values.
- {start: 0, end: 99} = bytes 0-99
- {start: 100} = bytes 100- (from 100 to end)
- {end: 500} = bytes -500 (last 500 bytes)

### unit

The unit of the range, typically "bytes"