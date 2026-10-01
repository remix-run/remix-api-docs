---
title: "ParseTarOptions"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/tar-parser/src/lib/tar.ts#L361"
---

# ParseTarOptions

## Summary

Options for parsing a tar archive.

## Signature

```ts
interface ParseTarOptions {
  allowUnknownFormat?: boolean
  filenameEncoding?: string
  maxEntries?: number
  maxEntrySize?: number
  maxTotalSize?: number
  pathPolicy?: 'relative' | 'preserve'
}

```

## Properties

### `allowUnknownFormat`

Set `false` to disallow unknown header formats.

### `filenameEncoding`

The label (encoding) for filenames.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings)

### `maxEntries`

Maximum number of entries, including PAX/GNU metadata entries. Padding and
end-of-archive markers do not count. Checked before processing each entry;
exceeding the limit throws a [`MaxEntriesExceededError`](/api/remix/tar-parser/class/MaxEntriesExceededError/). Defaults to 5000.
Must be a non-negative safe integer, or `Infinity` to disable the limit.

### `maxEntrySize`

Maximum entry body size in bytes, including PAX/GNU metadata entries.
Checked before reading the body or calling the handler. Exceeding the limit
throws a [`MaxEntrySizeExceededError`](/api/remix/tar-parser/class/MaxEntrySizeExceededError/). Defaults to 2 MiB (2097152 bytes).
Must be a non-negative safe integer, or `Infinity` to disable the limit.

### `maxTotalSize`

Maximum archive size in bytes, including headers, padding, and metadata.
Counts all input bytes, after decompression if performed upstream. Exceeding
the limit throws a [`MaxTotalSizeExceededError`](/api/remix/tar-parser/class/MaxTotalSizeExceededError/). Defaults to 20 MiB
(20971520 bytes). Must be a non-negative safe integer, or `Infinity` to disable
the limit.

### `pathPolicy`

Policy for entry names and link targets. Defaults to `relative`, which rejects empty
paths, absolute paths, Windows drive prefixes, backslashes, and NULs. Entry names
cannot contain parent components. Symlink targets are checked relative to the link's
parent, and hard-link targets relative to the archive root; parent components are
allowed only when they do not traverse above the archive root. Valid paths are preserved.
Set to `preserve` to skip path checks. Archive limits and header validation still apply.
Neither policy guarantees containment on the destination filesystem.