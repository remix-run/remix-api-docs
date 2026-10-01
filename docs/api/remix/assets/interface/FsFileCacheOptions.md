---
title: "FsFileCacheOptions"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/assets/src/lib/files/cache.ts#L8"
---

# FsFileCacheOptions

## Summary

Directory and limits for a filesystem file cache.

## Signature

```ts
interface FsFileCacheOptions {
  directory?: string
  maxEntries?: number
  maxFileSize?: number
  maxTotalSize?: number
}

```

## Properties

### `directory`

Directory dedicated to this cache, created on first use if needed.
Defaults to `node_modules/.cache/remix/assets`. Relative paths resolve from
`process.cwd()` when the factory is called.

### `maxEntries`

Maximum number of cached files (defaults to `1024`).

### `maxFileSize`

Maximum bytes per stored entry, including cache metadata (defaults to 4 MiB).

### `maxTotalSize`

Maximum total stored entry bytes, including cache metadata (defaults to 256 MiB).