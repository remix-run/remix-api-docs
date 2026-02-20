---
title: getIndexes
---

# getIndexes

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/lazy-file/src/lib/byte-range.ts#L36" target="_blank">View Source</a>

## Summary

Resolves a byte range to absolute indexes in a buffer of the given `size`.

## Signature

```ts
function getIndexes(range: ByteRange, size: number): [number, number];

```

## Params

### range

The byte range

### size

The total size of the buffer

## Returns

A tuple of `[start, end]` indexes