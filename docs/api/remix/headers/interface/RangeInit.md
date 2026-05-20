---
title: RangeInit
---

# RangeInit

## Summary

Initializer for a [`Range`](/api/remix/headers/class/Range/) header value.

## Signature

```ts
interface RangeInit {
  ranges?: { end?: number; start?: number }[];
  unit?: string;
}

```

## Properties

### `ranges`

The ranges requested. Each range has optional start and end values.
- {start: 0, end: 99} = bytes 0-99
- {start: 100} = bytes 100- (from 100 to end)
- {end: 500} = bytes -500 (last 500 bytes)

### `unit`

The unit of the range, typically "bytes"