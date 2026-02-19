---
title: openLazyFile
---

# openLazyFile

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fs/src/lib/fs.ts#L40" target="_blank">View Source</a>

## Summary

Returns a `LazyFile` from the local filesystem.

The returned file's `name` property will be set to the `filename` argument as provided,
unless overridden via `options.name`.

## Signature

```ts
function openLazyFile(filename: string, options: OpenLazyFileOptions): LazyFile;

```

## Params

### filename

The path to the file

### options

Options to override the file's metadata

## Returns

A `LazyFile` object