---
title: "ParseTarHeaderOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/tar-parser/src/lib/tar.ts#L169"
---

# ParseTarHeaderOptions

## Summary

Options for parsing tar headers.

## Signature

```ts
interface ParseTarHeaderOptions {
  allowUnknownFormat?: boolean
  filenameEncoding?: string
  pathPolicy?: 'relative' | 'preserve'
}

```

## Properties

### `allowUnknownFormat`

Set `false` to disallow unknown header formats.

### `filenameEncoding`

The label (encoding) for filenames.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings)

### `pathPolicy`

Policy for entry names and link targets. Defaults to `relative`, which rejects empty
paths, absolute paths, Windows drive prefixes, backslashes, and NULs. Entry names
cannot contain parent components. Symlink targets are checked relative to the link's
parent, and hard-link targets relative to the archive root; parent components are
allowed only when they do not traverse above the archive root. Valid paths are preserved.
Set to `preserve` to skip path checks. Archive limits and header validation still apply.
Neither policy guarantees containment on the destination filesystem.