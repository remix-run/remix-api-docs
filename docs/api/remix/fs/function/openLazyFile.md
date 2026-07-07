---
title: openLazyFile
source: https://github.com/remix-run/remix/blob/main/packages/fs/src/lib/fs.ts#L41
---

# openLazyFile

## Summary

Returns a `LazyFile` from the local filesystem.

The returned file's `name` property will be set to the `filename` argument as provided,
unless overridden via `options.name`.

## Signature

```ts
function openLazyFile(filename: string, options: OpenLazyFileOptions): LazyFile;

```

## Parameters

### `filename`

The path to the file

### `options`

Options to override the file's metadata

## Returns

A `LazyFile` object