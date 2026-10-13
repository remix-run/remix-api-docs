---
title: "createFsFileCache"
source: "https://github.com/remix-run/remix/blob/main/packages/assets/src/lib/files/cache.ts#L35"
---

# createFsFileCache

## Summary

Creates a persistent filesystem cache that evicts least recently used entries.
Reads and writes refresh an in-memory index. On first use, the index is rebuilt
from stored write timestamps; read recency is not preserved across restarts.
Use one cache instance per directory. For shared multi-process caching, provide
a custom `FileCache`. Files exceeding either byte limit are not cached. All limits
must be positive safe integers. Storage metadata and filesystem overhead are
additional to the byte budgets.

## Signature

```ts
function createFsFileCache(options: FsFileCacheOptions): FileCache

```

## Parameters

### `options`

Cache directory, entry count, and byte limits.

## Returns

A file cache suitable for `files.cache` in `createAssetServer()`.