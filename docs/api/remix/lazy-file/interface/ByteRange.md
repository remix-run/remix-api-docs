---
title: ByteRange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/lazy-file/src/lib/byte-range.ts#L4
---

# ByteRange

## Summary

A range of bytes in a buffer.

## Signature

```ts
interface ByteRange {
  end: number;
  start: number;
}

```

## Properties

### end

The end index of the range (exclusive). If this number is negative, it represents an offset
from the end of the content. `Infinity` represents the end of the content.

### start

The start index of the range (inclusive). If this number is negative, it represents an offset
from the end of the content.