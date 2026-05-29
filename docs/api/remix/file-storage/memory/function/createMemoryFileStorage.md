---
title: createMemoryFileStorage
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/file-storage/src/lib/backends/memory.ts#L8
---

# createMemoryFileStorage

## Summary

Creates a simple, in-memory implementation of the [`FileStorage`](/api/remix/file-storage/interface/FileStorage/) interface.

## Signature

```ts
function createMemoryFileStorage(): FileStorage<File>;

```

## Returns

A new in-memory [`FileStorage`](/api/remix/file-storage/interface/FileStorage/) instance