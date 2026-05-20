---
title: ByteRange
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

### `end`

The end index of the range (exclusive). If this number is negative, it represents an offset
from the end of the content. `Infinity` represents the end of the content.

### `start`

The start index of the range (inclusive). If this number is negative, it represents an offset
from the end of the content.