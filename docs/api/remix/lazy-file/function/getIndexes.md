---
title: getIndexes
source: https://github.com/remix-run/remix/blob/main/packages/lazy-file/src/lib/byte-range.ts#L36
---

# getIndexes

## Summary

Resolves a byte range to absolute indexes in a buffer of the given `size`.

## Signature

```ts
function getIndexes(range: ByteRange, size: number): [number, number];

```

## Params

### `range`

The byte range

### `size`

The total size of the buffer

## Returns

A tuple of `[start, end]` indexes