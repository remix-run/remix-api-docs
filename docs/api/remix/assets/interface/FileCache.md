---
title: "FileCache"
source: "https://github.com/remix-run/remix/blob/main/packages/assets/src/lib/files/file-cache.ts#L5"
---

# FileCache

## Summary

A cache of files addressed by opaque string keys. Implementations own admission,
eviction, and persistence, and may discard entries at any time.

## Signature

```ts
interface FileCache {
  get(key: string): File | Promise<File | null> | null
  put(key: string, file: File): void | File | Promise<void | File>
}

```

## Methods

### `get(key: string): File | Promise<File | null> | null`

Returns a cached file, preserving its bytes, name, type, and `lastModified` value.

#### Parameters

##### `key`

The cache key.

### `put(key: string, file: File): void | File | Promise<void | File>`

Stores or replaces a file. The cache may decline to store it according to its policy.

#### Parameters

##### `key`

The cache key.

##### `file`

The file to cache.